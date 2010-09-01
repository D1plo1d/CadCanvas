
$(function() {
  /* A single mouse operation */
  CadCanvas.MouseOperation = function()
  {
    var mouse_op = new Object();
    //mouse operation status
    mouse_op.enabled = false;
    //mouse operation initial x,y positions
    mouse_op.init_mouse_position = [0,0];
    
    return mouse_op;
  }
  
  /* Mixin providing a mouse interaction model (backend) for the cad canvas
   * self: a reference to the object on to which the mouse interaction model is added.
   */
  CadCanvas.MouseInteractionModel = function(self)
  {
    self.mouse = new Object();
    //hash of the mouse operations
    self.mouse.ops = {
      rotation: new CadCanvas.MouseOperation(),
      movement: new CadCanvas.MouseOperation(),
      zoom: new CadCanvas.MouseOperation(),
      scroll_zoom: new CadCanvas.MouseOperation()
    };
    self.mouse.init_rotation;
    self.mouse.init_position;
    self.mouse.init_zoom;
    //scaling the mouse movement and scroll based zoom functionality
    self.mouse.y_movement_zoom_scale = 10;
    self.mouse.scroll_zoom_scale = 0.5;
    
    /* initializes a mouse rotation, zoom or movement based on the operation string.
     * x and y is the mouse position. alternatively scroll can be substituded from x for scroll_zoom operations*/
    self.mouse.start = $.proxy(function(operation, x, y)
    {
      this.mouse.ops[operation.toLowerCase()].enabled = true;
      this.mouse.ops[operation.toLowerCase()].init_mouse_position = [x,y];
      if (operation.toLowerCase() == "rotation") this.mouse.init_rotation = [this.rotation[2], this.rotation[0]]; //ordered by mouse axes ( x=0, y=1 )
      if (operation.toLowerCase() == "movement") this.mouse.init_position = [this.position[0], this.position[1]];
      if (operation.toLowerCase() == "zoom") this.mouse.init_zoom = this.zoom_level;
      if (operation.toLowerCase() == "scroll_zoom") this.mouse.init_zoom = this.zoom_level;
    }, self);
    
    
    /* Ends a mouse rotation, zoom or movement based on the operation string */
    self.mouse.stop = $.proxy(function(operation)
    {
      this.mouse.ops[operation.toLowerCase()].enabled = false;
    }, self);
    
    /* Updates the canvas to reflect a change in the mouse position */
    self.mouse.updatePosition = $.proxy(function(x,y)
    {
      var op;
      var xy = [x,y];
      var size = [this.width, this.height];
      if ((op = this.mouse.ops["rotation"]).enabled == true)
      {
        var new_rotation = [];
        for (var i = 0; i < 2; i++)
        {
          new_rotation[i] = this.mouse.init_rotation[i] + 3*Math.PI*( (xy[i] - op.init_mouse_position[i])/size[i] );
        }
        this.rotate(new_rotation[1], null, new_rotation[0]);
        this.updateRender();
      }
      // Mouse Picking (transforming mouse coordinates to world coordinates)
      if ((op = this.mouse.ops["movement"]).enabled == true)
      {
        // Scaling the mouse position to -1 < x,y < 1 eye coordinates (z=near/far)
        var eye_coord = []
        for (var i=0; i<2; i++)
        {
          var scale = 2/size[i];
          eye_coord[i] = (xy[i] - op.init_mouse_position[i])*scale
        }
        eye_coord[2] = this.near_clip/this.far_clip; // z eye coordinate


        // Transforming these coordinates by the inverse of the projection matrix to get world coordinates
        var world_vect = new THREE.Vector3( eye_coord[0], eye_coord[1], eye_coord[2] );
        this.camera.invertedProjectionMatrix.transform(world_vect);
        
        // Performing a line/plane intersection with the ray origination at the 
        // camera position and peircing the world_vect to the z = 0 xy plane to 
        // find the new x,y world coordinates.
 				var ray = new THREE.Vector3();
 				ray.sub(world_vect, this.camera.position);
 				ray = world_vect;
 				//normalizing to a rate of change for z = 1
 				ray.x = ray.x/ray.z;
 				ray.y = ray.y/ray.z;
 				//simplified to the intersection with a ray from 0,0 to the xy plane at z = -camera.position.z
 				var new_pos = [ray.x*(-this.camera.position.z), ray.y*(-this.camera.position.z)];
        
        // Offsetting the updated position by the camera initial position
        for (var i=0; i<2; i++)
        {
          new_pos[i] += this.mouse.init_position[i];
        }
        
        this.move(new_pos[0], new_pos[1]);
        this.updateRender();
      }
      if ((op = this.mouse.ops["zoom"]).enabled == true)
      {
        this.incrementZoom(-( y - op.init_mouse_position[1] )*this.mouse.y_movement_zoom_scale/this.height);
        op.init_mouse_position[1] = y;
        this.updateRender();
      }
    }, self);
    
    self.mouse.scroll = $.proxy(function(scroll)
    {
        this.incrementZoom(scroll*this.mouse.scroll_zoom_scale);
        this.updateRender();
    }, self);

  }
});

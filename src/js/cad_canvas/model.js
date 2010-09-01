/*3d Manipulation Layer
 *===============================================================*/
$(function() {
  CadCanvas.Model = function(width, height)
  {
    /* Mouse Interaction Mixin */
    CadCanvas.MouseInteractionModel(this);

    /* Private variables */
    this.camera; this.scene; this.renderer; this.width = width; this.height = height;
    this.drawing_center=[0,0]; this.drawing_size=[0,0]; this.drawing_dirty = false;

    this.drawing_maxima=[-Math.pow(2,31),-Math.pow(2,31),-Math.pow(2,31)];
    this.drawing_minima=[Math.pow(2,32),Math.pow(2,32),Math.pow(2,32)];

    //the initial yaw and pitch of the camera in a canvas drag operation
    //complete hack: for some reason setting the z rotation to anything non-zero gets rid of a rendering bug where some lines don't appear
    this.rotation =[0,0,0.0001];
    this.position =[0,0,0];
    this.zoom_level = 1;
		this.zoom_scale = 1;

    //parent object hack so that the entire canvas can be manipulated in 3d as a single object3d
    this.canvas_group = new THREE.Object3D(THREE.ColorFillMaterial(0,0));

    /* Public variables */
    this.near_clip = 0.000001;
    this.far_clip = 1000000;

    /* limits for rotation on each axis, either in the form of [min, max] or null if no limit is needed */
    this.rotation_limits = [ null , null, null ];

    /* Initialization */
    this.camera = new THREE.Camera( 75, this.width / this.height, this.near_clip, this.far_clip );

    //adding a inverted projection matrix to the camera so we don't have to recalculate it each time
   	this.camera.invertedProjectionMatrix = THREE.Matrix4.makeInvert(this.camera.projectionMatrix);

    this.camera.target.position.z = 0;
    this.camera.position.z = 2;

    this.scene = new THREE.Scene();

    // Creating the scene
    this.renderer = new THREE.CanvasRenderer();
    this.renderer.setSize( width, height );



    /* API */
    
    this.get_drawing_center = $.proxy(function()
    {
    	this.update_drawing();
      return this.drawing_center;
    },this);
    
    this.get_drawing_size = $.proxy(function()
    {
    	this.update_drawing();
      return this.drawing_size;
    },this);
    
    this.update_drawing = $.proxy(function()
    {
      if (this.drawing_dirty == false) return this.drawing_center;
      //if the dirty flag is raised, recalculate
      for (var i = 0; i<3; i++)
      {
        this.drawing_size[i] = this.drawing_maxima[i] - this.drawing_minima[i];
        this.drawing_center[i] = this.drawing_size[i]/2;
      }
      this.drawing_dirty = false;
      $(this).trigger("resize");
    },this);


    /* updates the camera position and canvas group orientation to allow zooming rotation and movement
     * x => index[0] => --- (horizontal)        y => index[1] => . (perpindicular to camera)       z => index[2] => | (vertical) */
    this.updateCamera = $.proxy(function()
    {
      /* Calculating the z position based on the zoom_level 
         (an arbitrary value which is mathematically relatx to z such that z has a limit -> 0 as zoom_level approaches infinity) 
         zoom_level has a range of 0 -> infinity. zoom_level = 0 should be far enough away to fit everything in a single frame */
      this.position[2] = this.zoom_scale/( this.zoom_level/5 + 0.1 );
      
      //$('#status').html(this.rotation[0]/(2*Math.PI)*360+" , "+this.rotation[1]/(2*Math.PI)*360+" , "+this.rotation[2]/(2*Math.PI)*360+" :: "+this.zoom_level+" :: "+this.position[2]);

      
      /* Requiring the canvas_group matrix to be updated before processing the offset of it's first child object's position */
      this.canvas_group.dirty = true;
      
      /* XY Translations and zooming are done using the camera position and camera target position */
      //this.camera.position = new THREE.Vector3(this.position[0], this.position[1], this.position[2]);
      //this.camera.target.position = new THREE.Vector3(this.position[0], this.position[1], 0);
      this.canvas_group.position = new THREE.Vector3(-this.position[0], -this.position[1], 0);
      this.camera.position = new THREE.Vector3(0, 0, this.position[2]);
      
      /* Rotations are performed on the canvas group (which contains all lines and objects spatially related to them) */
      this.canvas_group.rotation = new THREE.Vector3(this.rotation[0], this.rotation[1], this.rotation[2]);
      
      /*Rotation is done about the center of the canvas group*/
      var center = this.get_drawing_center();
      this.canvas_group.centerOfRotation = new THREE.Vector3(center[0], center[1], 0);
      
    },this);


    this.updateRender = $.proxy(function() {
        this.renderer.render( this.scene, this.camera );
    },this);

    
    this.rotate = $.proxy(function(x, y, z)
    {
      var r = [x,y,z];
      for (var i = 0; i< 3; i++)
      {
        r[i] = (r[i] && r[i]!=null)?r[i] : this.rotation[i];
        if (this.rotation_limits[i] != null) r[i] = Math.max(this.rotation_limits[i][0], Math.min(r[i], this.rotation_limits[i][1]) );
      }
      this.rotation = r;

      this.updateCamera();
    },this);



    this.move = $.proxy(function(x,y)
    {
      this.position[0] = x;
      this.position[1] = y;
      this.updateCamera();
    },this);
    
    
    this.resetZoom = $.proxy(function(pos)
    {
      this.zoom_level = 0;
      this.updateCamera();
    },this);


    /* Moves the zoom to a specific distance away from the center of the drawing */
    this.setZoomDistance = $.proxy(function(pos)
    {
      //todo: invert the function for distance to zoom_level
      this.zoom_level = Math.max(0,pos);
      this.updateCamera();
    },this);
    
    
    /* Increments the zoom using a non-linear function to provide infinite enhancement without clipping through the z=0 plane*/
    this.incrementZoom = $.proxy(function(vel)
    {
      this.zoom_level = Math.max(0,this.zoom_level+vel);
      this.updateCamera();
    },this);


		this.addText = $.proxy(function(text, vector, hex_color, opacity, font)
		{
	  	//var material = new THREE.ColorStrokeMaterial(lineWidth = 2, hex = parseInt("AAAAAA",16), opacity = 1);
			var material = new THREE.ColorFillMaterial(hex = parseInt(hex_color,16), opacity = opacity);
			var text = new THREE.Text(text, material);
			
			//var text = new THREE.Particle(material);
			text.parent = this.canvas_group;
			text.autoUpdateMatrix = true;

			text.context = "3d";
			text.fontScaling = true;
			text.font = (font==null)?"100pt Verdana, sans-serif" : font;
			text.font = "100pt Verdana, sans-serif";
			text.position.set(vector[0] , vector[1] , vector[2]);
			this.scene.add(text);
			
			return text;
		},this);
		


		this.addObject = $.proxy(function(obj)
		{
			obj.parent = this.canvas_group;
			obj.autoUpdateMatrix = true;

			this.scene.add(obj);
			
			return obj;
		},this);
		
			


    /* adds a line to the canvas. You will need to update the canvas' render 
     * via updateRender() to display the line.
     * vectors [[X,Y,Z][X,Y,Z]]
     * color HEX_STRING
     */
    this.addLine = $.proxy(function( vectors, hex_color, lineWidth, opacity, background )
    {
      //Line geometry
      var geometry = new THREE.Geometry();
      for (var i = 0; i< 2; i++)
      {
        geometry.vertices[i] = new THREE.Vertex(new THREE.Vector3( vectors[i][0] , vectors[i][1] , vectors[i][2] ));
      }
      
      //Updating drawing boundaries
      if (background==null || background == false)
      {
		    for (var i = 0; i<2; i++)
		    {
		      for (var j = 0; j<3; j++)
		      {
		        if (this.drawing_maxima[j] < vectors[i][j])
		        {
		          this.drawing_maxima[j] = vectors[i][j];
		          this.drawing_dirty = true;
		        }
		        if (this.drawing_minima[j] > vectors[i][j])
		        {
		          this.drawing_minima[j] = vectors[i][j];
		          this.drawing_dirty = true;
		        }
		      }
		    }
      }

      //Color, opacity and line width settings
      var material = new THREE.ColorStrokeMaterial(lineWidth = (lineWidth==null)?2:lineWidth, hex = parseInt(hex_color,16), opacity = (opacity==null)?1:opacity);

      //Creating the line
      var line = new THREE.Line( geometry, material );
      
      //hacking in a parent object
      line.parent = this.canvas_group;
      //Not really sure what this does.. umm.. but we got it!
      line.overdraw = true;
      
      //Adding the line to the scene
      this.scene.add( line );
      
      return line;
    },this);


    this.center = $.proxy(function() {
      var c = this.get_drawing_center();
      this.move(c[0],c[1]);
    },this);
    
    /** zooms to a number of preset locations (if they are within the rotation constraints of this cad canvas)
      * locations: front, back, left, right, top, bottom, front-rotated-left, front-rotated-right, isometric
      */
    this.zoomTo = $.proxy(function(location) {
      this.center();
      this.resetZoom();
      
      switch(location.toLowerCase())
      {
        case "front":
          this.rotate(0, 0, 0);
          break;
        case "front-rotated-left":
          this.rotate(0, 0, Math.PI/2);
          break;
        case "front-rotated-right":
          this.rotate(0, 0, -Math.PI/2);
          break;
        case "back":
          this.rotate(0, Math.PI, 0);
          break;
          
        case "left":
          this.rotate(0, -Math.PI/2, 0);
          break;
        case "right":
          this.rotate(0, Math.PI/2, 0);
          break;
          
        case "top":
          this.rotate(-Math.PI/2, 0, 0);
          break;
        case "bottom":
          this.rotate(Math.PI/2, 0, 0);
          break;
        
        case "isometric":
          this.rotate(-Math.PI/4, Math.PI/16, Math.PI/4);
          break;
      }
    },this);
  };
});

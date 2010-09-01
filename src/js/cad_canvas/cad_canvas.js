
/*User Interfacing Layer
 *===============================================================*/
// Keyboard inputs, mouse inputs and high-level ui variables found here.
// (Mouse movements, rotations and zoom transforms are deligated to the 
// mouse interaction model. Low level 3d transforms are deligated to the model)

$(function() {
	/**
	 * High level CadCanvas controller functionality for CNC cutting visualization and previews
	 */
  CadCanvas = function(options)
  {

		/* public variables */
		this.options = {
			width: 600,
			height: 400
		}
		/* loading options into public variables */
		$.extend(this.options, options||{});

		this.model;
		
		/* true if the ctrl key is pressed */
		this.ctrl = false;

		/* initialization */
		
		this.model = new CadCanvas.Model(this.options.width, this.options.height);
		//Reset the position to a top down, centered view.
		this.model.zoomTo("front");

		$(this).append( this.model.renderer.domElement );
		$(this.model.renderer.domElement).addClass(CadCanvas.css_class);

		$(this.model.renderer.domElement).bind("mousedown",$.proxy(function(e) {
			e.preventDefault();
			if (this.ctrl == false)
			{
				switch (e.which)
				{
					case 1: this.model.mouse.start("movement", -e.pageX, e.pageY); break;
					case 2: this.model.mouse.start("rotation", -e.pageX, e.pageY); break;
					case 3: this.model.mouse.start("zoom", -e.pageX, e.pageY); break;
				};
			}
			else
			{
				if (e.which == 1) this.model.mouse.start("rotation", -e.pageX, e.pageY);
			}
		},this));

		$(document).bind("mouseup",$.proxy(function(e) {
			e.preventDefault();
			if (this.ctrl == false)
			{
				switch (e.which)
				{
					case 1: this.model.mouse.stop("movement"); break;
					case 2: this.model.mouse.stop("rotation"); break;
					case 3: this.model.mouse.stop("zoom"); break;
				};
			}
			else
			{
				if (e.which == 1) this.model.mouse.stop("rotation");
			}
		},this));

		$(document).bind("mousemove",$.proxy(function (e) {
			this.model.mouse.updatePosition(-e.pageX, e.pageY);
		},this));

		$(document).bind("keydown",$.proxy(function (e) {
			if (e.keyCode == 17)
			{
				e.preventDefault();
				this.ctrl = true;
			}
		},this));

		$(document).bind("keyup",$.proxy(function (e) {
			if (e.keyCode == 17)
			{
				e.preventDefault();
				this.ctrl = false;
				this.model.mouse.stop("rotation");
			}
		},this));
		
		$(document).bind("mouseenter",$.proxy(function (e) {
			this.ctrl = false;
		},this));

		$(this.model.renderer.domElement).bind("mousewheel",$.proxy(function (e, wheelVel) {
			this.model.mouse.scroll(wheelVel);
		},this));

		return this;
	};

	CadCanvas.css_class = "cad_canvas";
	//Preventing context menus for all Cad Canvases
	$("."+CadCanvas.css_class).live("contextmenu", function(e) {
		e.preventDefault();
	});
});

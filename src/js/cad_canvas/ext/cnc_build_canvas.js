$(function() {
	/** Displays a CNC Machine build platform, gcode preview and tool head positions */
	$.fn.CNCBuildCanvas = function(options)
	{
		var init = $.proxy(function() {
		
			this.options = {
				drawDimensions: true,
				measurementUnit: "mm",
				endcapSize: 0.25,

				toolEnabledColor: "FFFFFF",
				toolDisabledColor: "999999",
				toolHistoryColor: "0033CC",
				platformColor: "0088FF",
				dimensionColor: "0088FF",
			
				platform: {
					grid: false,
					outline: true,

					size: [10, 10],
					ruleIncrement: [0.5, 0.5],
				},
			
				toolhead: {
					enabled: true
				}
			};
		
			this.options.width = this.width();
			this.options.height = this.height();

			$.extend(this.options, options||{});
			$.extend(this.options.platform, (options||{}).platform||{});
			options = this.options;
		
			$.proxy(CadCanvas, this).call(this, options);
			this.model.rotation_limits = [ [-Math.PI/2, 0] , null, null ];

			this.platform = options["platform"];
		
			this.dimension_outset = 0.5;

			this.gcodeLines = [];

			//TODO: autoscale zoom based on platform size
			this.model.zoom_scale = 1;
		
			if (options["drawDimensions"]==true) this.addDimensions();
			this.addPlatform(grid=options["platform"]["grid"], outline=options["platform"]["outline"]);

			if (options["toolhead"]["enabled"] == true) this.toolhead = new CNCBuildCanvasToolhead(this);

		}, this);


		/** loads a grid pattern onto the build platform surface */
		this.addPlatform = $.proxy(function(grid, outline) {
			var grid_color = options["platformColor"];
			if (grid == true)
			{
				for (var i = -this.platform.size[0]/2; i <= this.platform.size[0]/2; i+=this.platform.ruleIncrement[0])
				{
					//horizontal lines
					var vectors = [ [i , -this.platform.size[1]/2 , 0 ], [i , this.platform.size[1]/2 , 0 ] ]
					this.model.addLine( vectors, grid_color, 1, 0.5, true)
				}

				for (var j = -this.platform.size[1]/2; j <= this.platform.size[1]/2; j+=this.platform.ruleIncrement[1])
				{
					//vertical lines
					var vectors = [ [-this.platform.size[0]/2 , j , 0 ], [this.platform.size[0]/2 , j , 0 ] ]
					this.model.addLine( vectors, grid_color, 1, 0.5, true)
				}
			}
			if (outline = true)
			{
				for (var k = -0.5; k<=0.5; k++)
				{
					//vertical outline lines
					var vectors = [ [ -this.platform.size[0]/2 , k*this.platform.size[1] , 0 ], [ this.platform.size[0]/2 , k*this.platform.size[1] , 0 ] ]
					this.model.addLine( vectors, grid_color, 1, 0.5, true)
					//vertical outline lines
					vectors = [ [ k*this.platform.size[0], -this.platform.size[1]/2, 0 ], [k*this.platform.size[0], this.platform.size[1]/2, 0 ] ]
					this.model.addLine( vectors, grid_color, 1, 0.5, true)
				}
			}
		}, this);

		/** loads part width, length and height measurements */
		this.addDimensions = $.proxy(function() {
			this.dimensions = [ new dimension(this), new dimension(this) ]

			var update_dimensions = $.proxy(function()
			{
				var center = this.model.get_drawing_center();
				var size = this.model.get_drawing_size();
				
				var ecapSize = this.options["endcapSize"];
				
				for (var i = 0; i< 2; i++)
				{
					var lineGeo = this.dimensions[i].line.geometry;
					var text = this.dimensions[i].text;

					//text update
					text.text = size[i]+options["measurementUnit"];
					text.position.x = center[0] - size[0]/2 - this.dimension_outset * (i==0? 1 : -1/2) - (i==0? text.getWidth()/2 : 0);
					text.position.y =	center[1] - size[1]/2 - this.dimension_outset * (i==1? 1 : -1/2);

					//line + endcap update (j = -0.5 is the start point, j = 0.5 is the end point)
					for (var j = -0.5; j<= 0.5; j++)
					{
						var endCapGeo = this.dimensions[i].endCaps[j+0.5].geometry;

						var x = center[0] + size[0]*( (i==0)? j : -0.5 ) + ((i==0)?0:-1)* this.dimension_outset;
						var y = center[1] + size[1]*( (i==1)? j : -0.5 ) + ((i==1)?0:-1)* this.dimension_outset;

						lineGeo.vertices[j+0.5] = new THREE.Vertex(new THREE.Vector3( x, y, 0));
						//endcaps update
						for (var k = -0.5; k<= 0.5; k++)
						{
							//TODO: problem here!
							endCapGeo.vertices[k+0.5] = new THREE.Vertex(
								new THREE.Vector3( x + (i==1? (k*ecapSize) : 0), y + (i==0? (k*ecapSize) : 0), 0));
						}
					}

				}
			}, this);

			//initializing the dimensions
			update_dimensions();
			//setting the dimensions to scale automatically on part resize
			$(this.model).bind("resize", update_dimensions);
		}, this);

		/** loads an outline of the build platform onto it's surface */
		this.addOutline = $.proxy(function() {
			
		}, this);
		

		/** load gcode to the canvas (removing the previous gcode) */
		this.drawGCode = $.proxy(function(gcode) {

			GCode.interpret(gcode, $.proxy(function(line, toolEnabled)
			{
				this.gcodeLines.push(line);
				this.model.addLine( line, this.options[ (toolEnabled==true? "toolEnabledColor" : "toolDisabledColor") ], 1 );
			},this));

			this.model.center();
			this.model.updateRender();

		}, this);

		
		/** remove the previous gcode from the canvas */
		this.removeGCode = $.proxy(function() {
			//TODO: remove all gcode lines from this canvas
		}, this);

		init();
		return this;

	}

});

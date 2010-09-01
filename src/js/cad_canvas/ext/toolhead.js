function CNCBuildCanvasToolhead(buildCanvas)
{

	var t = new Object();
	t.buildCanvas = buildCanvas;

	var material = new THREE.ColorFillMaterial(hex = parseInt("FFFFFF",16), opacity = 0.7);
	t.top = new THREE.Particle(material);
	t.top.size = 0.15;
	
	/** the line number currently previewed */
	t.previewLine = 0;

	t.buildCanvas.model.addObject(t.top);

	//TODO: speed causes a timer to draw the position change animation at that speed
	t.moveTo = function(x,y,z, speed)
	{
		// divide by 2 is a hack for a current three.js issue, once it's fixed 
		// please remove this hack.
		t.top.position.set(x/2,y/2,z/2);
	}


	t.previewGCode = function()
	{
		this.previewLine = 0;
		
		this._gCodeIterator();
		this.preview_timer = window.setInterval(this._gCodeIterator, 100);
	}

	t._gCodeIterator = $.proxy(function()
	{
		line = this.buildCanvas.gcodeLines[this.previewLine];

		this.moveTo(line[0][0], line[0][1], line[0][2]);
		this.buildCanvas.model.updateRender();

		if ((this.previewLine+=1) >= this.buildCanvas.gcodeLines.length) window.clearInterval(this.preview_timer);

	},t);
	
	return t;
}

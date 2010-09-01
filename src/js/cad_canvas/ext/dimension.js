/**
 */
function dimension(buildCanvas, text)
{
	var d = new Object();
	d.buildCanvas = buildCanvas;

	// dimension line
	d.line = d.buildCanvas.model.addLine( [ [0,0,0], [0,0,0] ], d.buildCanvas.options["dimensionColor"], 1, 1, true );

	// both endcaps on the dimension line
	d.endCaps = [];
	for (var i = 0; i<2; i++)
	{
		d.endCaps[i] = d.buildCanvas.model.addLine( [ [0,0,0], [0,0,0] ], d.buildCanvas.options["dimensionColor"], 1, 1, true );
	}

	// dimension text
	d.text = d.buildCanvas.model.addText( text||"0", [0,0,0], d.buildCanvas.options["dimensionColor"], 1);
	
	return d;
}

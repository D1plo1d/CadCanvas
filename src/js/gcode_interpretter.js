
var GCode = new Object();

GCode.VALID_CMD_LETTERS = ["m","g","t"];

GCode.MODE = 0;
//positioning modes
GCode.ABSOLUTE = 0;
GCode.RELATIVE = 1;


/* Parese the GCode into a series of lines which are 
 * returned in order via the line callback function.
 * line_callback: function(vectors = [[X,Y,Z][X,Y,Z]], toolEnabled= BOOLEAN) 
 */
GCode.interpret = function( gcode_text, line_callback )
{
  //a hash of historic gcode-resultant cnc position and settings info
  var cnc_data = {x: 0, y: 0, z: 0};
  var cnc_data_offset = {x: 0, y: 0, z: 0};
  cnc_data[GCode.MODE] = GCode.ABSOLUTE;
  //Splitting the gcode into individual lines
  var gcode_lines = gcode_text.split("\n");

  //Cleaning each line of gcode
  var valid_gcode_index = 0; //the last valid gcode line we encountered
  gcode_lines = $.map(gcode_lines, function(line, index)
  {

    //removing comments and whitespace as well as converting to lower case
    line = trim_str( line.replace( /(;.*)|(\(.*?\))| /g , '') ).toLowerCase();

    //merging incomplete lines with the previous valid gcode line
    if ($.inArray(line[0], GCode.VALID_CMD_LETTERS) == -1)
    {
      gcode_lines[valid_gcode_index] += line;
      return "";
    }
    else
    {
      valid_gcode_index = index;
    }

    return line;
  });
  var a = "";
  //Parsing each line of gcode
  $.each(gcode_lines, function(index, line)
  {
    //ignoring empty lines (including those previously containing only comments)
    if (line.length == 0) return;

		a += line+"<br/>";

    //parsing the line into letter+value substrings
    var attributes_array = line.split(/(?=[a-z])/);
    //parsing the gcode command
    var gcode_cmd = attributes_array.shift()
    gcode_cmd = gcode_cmd[0] + gcode_cmd.substring(1).replace(/^0+?(?=[0-9]|-)/,'');
    
    //mapping each value to it's axis
    var attributes_map = [];
    $.each(attributes_array, function(index, attr)
    {
      attr = trim_str(attr); //remove whitespace (strip)
      if (attr.length != 0) attributes_map[attr[0]] = trim_str(attr.substring(1));
    });
    //Interpretting the gcode line's parsed data
    GCode.process_single_gcode(cnc_data, cnc_data_offset, gcode_cmd, attributes_map, line_callback);
  });
	//$("body").append(a);
}

function trim_str(str) {return str.replace(/^\s+|\s+$/g, '');};

GCode.process_single_gcode = function(cnc_data, cnc_data_offset, gcode_cmd, attributes, line_callback)
{
  //Update positioning mode for g90, g91
  if (gcode_cmd == "g90")
  	cnc_data[GCode.MODE] = GCode.ABSOLUTE;
  else if (gcode_cmd == "g91")
  	cnc_data[GCode.MODE] = GCode.RELATIVE;
  else
  {
  	/* All axis-based commands */
  	
		//adding any omitted axis to the attributes map
		attributes = $.extend({x:"n" ,y:"n" ,z:"n" },attributes)
		
		var attr_values = [];
		//verifying each axis has a value
		for (axis in attributes)
		{
			if (cnc_data[axis]==null) cnc_data[axis] = 0;
			if (cnc_data_offset[axis]==null) cnc_data_offset[axis] = 0;
		  attr_values[axis] = ( attributes[axis]=="n"? 0 : parseFloat(attributes[axis]) );
		}


		/* set position (g92) */
		if (gcode_cmd == "g92")
		{
			for (axis in attributes)
			{
				if (attributes[axis]!="n") cnc_data_offset[axis] = attr_values[axis];
			}
		}

		/* movement commands (g1, g0) */
		if (gcode_cmd == "g1" || gcode_cmd == "g0")
		{
		  //add the first point to the line
		  var line_points = [[ cnc_data["x"], cnc_data["y"], cnc_data["z"] ]];

		  //update each axis
		  for (axis in attributes)
		  {
		    var value = attr_values[axis];
				var previousValue = (cnc_data[axis]!=null?cnc_data[axis]:0);

		    if (cnc_data[GCode.MODE] == GCode.RELATIVE) cnc_data[axis] = previousValue + value;
		    if (cnc_data[GCode.MODE] == GCode.ABSOLUTE) cnc_data[axis] = ( attributes[axis]!="n"? value :  previousValue );
		  }

			var p2 = [];
			for (axis in {x:"n" ,y:"n" ,z:"n" })
			{
				//endstops prevent movement beyond 0,0,0 so we limit it there
				if (cnc_data[axis]-cnc_data_offset[axis]<0) cnc_data[axis] = cnc_data_offset[axis];
				//plotting the 2nd vertex
				p2[axis] = cnc_data[axis]-cnc_data_offset[axis];
			}

		  //add the second point to the line
		  line_points[1] = [ p2.x, p2.y, p2.z ];

		  //line_callback: function(points = [[X,Y,Z][X,Y,Z]], color= HEX_STRING) 
		  line_callback(line_points, true);
    }
  }
}

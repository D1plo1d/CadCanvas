var gcode = ""+
"G28; home the reprap\n"+
"G21; metric is gooderer\n"+
"G90\n"+
"M113 S0.001; set extruder PWM\n"+
"G92 E0; zero the extruded length\n"+
"G0 X60 Y5 Z0; move to pre-wipe position and proceed to spooge\n"+
"M109 S190; warm up extruder\n"+
"G1 X60.0 Y5.0 Z0.0 F3000.0 E1000.0; feed for start of next move + extruder dwell\n"+
"G1 X30.0 Y5.0 Z0.0 F3000.0; wipe the nozel and reset the feedrate\n"+
"G92 X0;set x 0\n"+
"G1 X-1.0 F3000.0\n"+
"G1 X-500.0 F3200.0 ;horizontal move\n"+
"G92 X0;set x 0\n"+
"G1 X1.0 F3000.0\n"+
"G1 X-10.0 F3000.0\n"+
"G92 X0;final x zeroing\n"+
"G92 Y0;set y 0\n"+
"G1 Y-250.0 F3200.0 ;horizontal move, resetting feedrate to normal\n"+
"G92 Y0;set y 0\n"+
"G1 Y1.0 F3000.0\n"+
"G1 Y-10.0 F3000.0\n"+
"G92 Y0;final y zeroing\n"+
"G92 E0; zero the extruded length and position\n"+
"(<creator> skeinforge </creator>)\n"+
"(<version> 2010-04-06 </version>)\n"+
"(<extruderInitialization>)\n"+
";\n"+
"(<craftTypeName> extrusion </craftTypeName>)\n"+
"M105\n"+
"(<bridgeWidthMultiplier> 1.0 </bridgeWidthMultiplier>)\n"+
"(<decimalPlacesCarried> 3 </decimalPlacesCarried>)\n"+
"(<layerThickness> 0.3 </layerThickness>)\n"+
"(<threadSequenceString> perimeter loops infill </threadSequenceString>)\n"+
"(<maximumZDrillFeedRatePerSecond> 0.5 </maximumZDrillFeedRatePerSecond>)\n"+
"(<maximumZTravelFeedRatePerSecond> 0.5 </maximumZTravelFeedRatePerSecond>)\n"+
"(<operatingFeedRatePerSecond> 18.0 </operatingFeedRatePerSecond>)\n"+
"(<operatingFlowRate> 100.0 </operatingFlowRate>)\n"+
"(<orbitalFeedRatePerSecond> 9.0 </orbitalFeedRatePerSecond>)\n"+
"(<travelFeedRatePerSecond> 50.0 </travelFeedRatePerSecond>)\n"+
"(<coolingRate> 3.0 </coolingRate>)\n"+
"(<heatingRate> 10.0 </heatingRate>)\n"+
"(<baseTemperature> 197.0 </baseTemperature>)\n"+
"(<interfaceTemperature> 197.0 </interfaceTemperature>)\n"+
"(<objectFirstLayerInfillTemperature> 197.0 </objectFirstLayerInfillTemperature>)\n"+
"(<objectFirstLayerPerimeterTemperature> 197.0 </objectFirstLayerPerimeterTemperature>)\n"+
"(<objectNextLayersTemperature> 197.0 </objectNextLayersTemperature>)\n"+
"(<supportLayersTemperature> 197.0 </supportLayersTemperature>)\n"+
"(<supportedLayersTemperature> 197.0 </supportedLayersTemperature>)\n"+
"(<perimeterWidth> 0.48 </perimeterWidth>)\n"+
"(<profileName> PLA </profileName>)\n"+
"(<procedureDone> carve </procedureDone>)\n"+
"(<procedureDone> preface </procedureDone>)\n"+
"(<procedureDone> widen </procedureDone>)\n"+
"(<procedureDone> inset </procedureDone>)\n"+
"(<procedureDone> fill </procedureDone>)\n"+
"(<procedureDone> multiply </procedureDone>)\n"+
"(<procedureDone> speed </procedureDone>)\n"+
"(<procedureDone> temperature </procedureDone>)\n"+
"(<procedureDone> raft </procedureDone>)\n"+
"(<procedureDone> jitter </procedureDone>)\n"+
"(<procedureDone> comb </procedureDone>)\n"+
"(<procedureDone> clip </procedureDone>)\n"+
"(<procedureDone> home </procedureDone>)\n"+
"(<procedureDone> dimension </procedureDone>)\n"+
"(<procedureDone> export </procedureDone>)\n"+
"(</extruderInitialization>)\n"+
"(<extrusion>)\n"+
"M113 S0.5\n"+
"M108 S100.0\n"+
"M104 S197.0\n"+
"(<layer> 0.0 )\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X93.055 Y139.175 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y131.549 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y111.258 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y103.957 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y89.078 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y89.078 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y85.078 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y85.078 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y89.078 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y89.078 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y103.277 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y111.128 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y133.629 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.426 Y163.491 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X90.593 Y174.941 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.302 Y171.647 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X72.316 Y161.279 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X75.721 Y149.182 Z0.0 </boundaryPoint>)\n"+
"(<perimeter> outer )\n"+
"M108 S110.0\n"+
"M108 S110.0\n"+
"G1 X97.94 Y111.18 Z0.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E0.0\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.06 Y104.06 Z0.0 F432.0 E153.813\n"+
"G1 X105.06 Y88.84 Z0.0 F432.0 E386.311\n"+
"G1 X103.56 Y88.84 Z0.0 F432.0 E409.227\n"+
"G1 X103.56 Y85.32 Z0.0 F432.0 E463.005\n"+
"G1 X121.08 Y85.32 Z0.0 F432.0 E730.672\n"+
"G1 X121.08 Y88.84 Z0.0 F432.0 E784.45\n"+
"G1 X119.58 Y88.84 Z0.0 F432.0 E807.366\n"+
"G1 X119.58 Y103.38 Z0.0 F432.0 E1029.475\n"+
"G1 X127.43 Y111.23 Z0.0 F432.0 E1199.104\n"+
"G1 X127.43 Y133.57 Z0.0 F432.0 E1540.379\n"+
"G1 X110.25 Y163.32 Z0.0 F432.0 E2065.212\n"+
"G1 X90.56 Y174.68 Z0.0 F432.0 E2412.582\n"+
"G1 X78.46 Y171.44 Z0.0 F432.0 E2603.945\n"+
"G1 X72.57 Y161.25 Z0.0 F432.0 E2783.797\n"+
"G1 X75.93 Y149.34 Z0.0 F432.0 E2972.765\n"+
"G1 X93.23 Y139.35 Z0.0 F432.0 E3278.026\n"+
"G1 X97.76 Y131.61 Z0.0 F432.0 E3414.962\n"+
"G1 X97.76 Y111.39 Z0.0 F432.0 E3723.97\n"+
"G1 F240.0\n"+
"G1 E3723.97\n"+
"G1 F432.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X107.804 Y111.701 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.922 Y112.445 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.154 Y113.161 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.496 Y113.833 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.938 Y114.442 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.471 Y114.975 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.08 Y115.418 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.751 Y115.76 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.467 Y115.994 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.211 Y116.112 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.964 Y116.112 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.708 Y115.995 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.423 Y115.763 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.096 Y115.421 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.705 Y114.979 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.238 Y114.446 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.681 Y113.837 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.023 Y113.166 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y112.45 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y111.706 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y110.948 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y110.204 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.023 Y109.488 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.681 Y108.817 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.238 Y108.208 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.705 Y107.675 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.096 Y107.233 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.423 Y106.891 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.708 Y106.659 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.964 Y106.542 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.211 Y106.542 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.467 Y106.66 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.751 Y106.894 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.08 Y107.236 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.471 Y107.679 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.938 Y108.212 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.496 Y108.821 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.154 Y109.493 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.922 Y110.209 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.804 Y110.953 Z0.0 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X107.57 Y111.5 Z0.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E3723.97\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.69 Y112.5 Z0.0 F432.0 E15.393\n"+
"G1 X107.93 Y113.25 Z0.0 F432.0 E27.471\n"+
"G1 X108.29 Y113.96 Z0.0 F432.0 E39.572\n"+
"G1 X108.76 Y114.6 Z0.0 F432.0 E51.637\n"+
"G1 X109.32 Y115.16 Z0.0 F432.0 E63.736\n"+
"G1 X109.95 Y115.62 Z0.0 F432.0 E75.798\n"+
"G1 X110.66 Y115.98 Z0.0 F432.0 E87.898\n"+
"G1 X111.41 Y116.23 Z0.0 F432.0 E99.986\n"+
"G1 X112.19 Y116.35 Z0.0 F432.0 E112.052\n"+
"G1 X112.98 Y116.35 Z0.0 F432.0 E124.152\n"+
"G1 X113.76 Y116.23 Z0.0 F432.0 E136.231\n"+
"G1 X114.52 Y115.99 Z0.0 F432.0 E148.31\n"+
"G1 X115.22 Y115.63 Z0.0 F432.0 E160.397\n"+
"G1 X115.86 Y115.16 Z0.0 F432.0 E172.474\n"+
"G1 X116.42 Y114.6 Z0.0 F432.0 E184.573\n"+
"G1 X116.89 Y113.96 Z0.0 F432.0 E196.647\n"+
"G1 X117.25 Y113.26 Z0.0 F432.0 E208.734\n"+
"G1 X117.49 Y112.51 Z0.0 F432.0 E220.822\n"+
"G1 X117.61 Y111.73 Z0.0 F432.0 E232.901\n"+
"G1 X117.61 Y110.93 Z0.0 F432.0 E245.062\n"+
"G1 X117.49 Y110.15 Z0.0 F432.0 E257.141\n"+
"G1 X117.25 Y109.4 Z0.0 F432.0 E269.229\n"+
"G1 X116.89 Y108.69 Z0.0 F432.0 E281.316\n"+
"G1 X116.42 Y108.05 Z0.0 F432.0 E293.39\n"+
"G1 X115.86 Y107.49 Z0.0 F432.0 E305.489\n"+
"G1 X115.22 Y107.03 Z0.0 F432.0 E317.566\n"+
"G1 X114.52 Y106.67 Z0.0 F432.0 E329.653\n"+
"G1 X113.76 Y106.43 Z0.0 F432.0 E341.732\n"+
"G1 X112.98 Y106.3 Z0.0 F432.0 E353.811\n"+
"G1 X112.19 Y106.3 Z0.0 F432.0 E365.911\n"+
"G1 X111.41 Y106.43 Z0.0 F432.0 E377.977\n"+
"G1 X110.66 Y106.67 Z0.0 F432.0 E390.065\n"+
"G1 X109.95 Y107.03 Z0.0 F432.0 E402.166\n"+
"G1 X109.32 Y107.5 Z0.0 F432.0 E414.227\n"+
"G1 X108.76 Y108.06 Z0.0 F432.0 E426.326\n"+
"G1 X108.29 Y108.7 Z0.0 F432.0 E438.391\n"+
"G1 X107.93 Y109.4 Z0.0 F432.0 E450.492\n"+
"G1 X107.69 Y110.15 Z0.0 F432.0 E462.57\n"+
"G1 X107.57 Y111.21 Z0.0 F432.0 E478.873\n"+
"G1 F240.0\n"+
"G1 E478.873\n"+
"G1 F432.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X114.816 Y89.078 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y89.078 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y102.078 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.816 Y102.078 Z0.0 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X109.72 Y102.32 Z0.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E478.873\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.06 Y102.32 Z0.0 F432.0 E81.522\n"+
"G1 X115.06 Y88.84 Z0.0 F432.0 E287.467\n"+
"G1 X109.58 Y88.84 Z0.0 F432.0 E371.189\n"+
"G1 X109.58 Y102.17 Z0.0 F432.0 E574.933\n"+
"G1 F240.0\n"+
"G1 E574.933\n"+
"G1 F432.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X111.269 Y134.809 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y134.986 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y135.115 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y135.194 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y135.22 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y135.194 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y135.115 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y134.986 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y134.809 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y134.59 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y134.334 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y134.046 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y133.734 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y133.406 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.683 Y133.07 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y132.734 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y132.406 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y132.094 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y131.806 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y131.55 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y131.331 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y131.154 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y131.024 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y130.946 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y130.92 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y130.946 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y131.024 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y131.154 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.269 Y131.331 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y131.55 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y131.806 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y132.094 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y132.406 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y132.734 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.383 Y133.07 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y133.406 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y133.734 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y134.046 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y134.334 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y134.59 Z0.0 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X107.23 Y111.75 Z0.0 F3000.0\n"+
"G1 X112.02 Y130.74 Z0.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E574.933\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.45 Y130.94 Z0.0 F432.0 E9.248\n"+
"G1 X111.13 Y131.14 Z0.0 F432.0 E14.981\n"+
"G1 X110.6 Y131.66 Z0.0 F432.0 E26.389\n"+
"G1 X110.26 Y132.33 Z0.0 F432.0 E37.84\n"+
"G1 X110.17 Y132.7 Z0.0 F432.0 E43.561\n"+
"G1 X110.17 Y133.44 Z0.0 F432.0 E54.989\n"+
"G1 X110.26 Y133.81 Z0.0 F432.0 E60.711\n"+
"G1 X110.6 Y134.48 Z0.0 F432.0 E72.162\n"+
"G1 X111.13 Y135.0 Z0.0 F432.0 E83.57\n"+
"G1 X111.45 Y135.2 Z0.0 F432.0 E89.303\n"+
"G1 X112.16 Y135.43 Z0.0 F432.0 E100.744\n"+
"G1 X112.91 Y135.43 Z0.0 F432.0 E112.171\n"+
"G1 X113.27 Y135.34 Z0.0 F432.0 E117.893\n"+
"G1 X113.94 Y135.0 Z0.0 F432.0 E129.344\n"+
"G1 X114.47 Y134.48 Z0.0 F432.0 E140.752\n"+
"G1 X114.81 Y133.81 Z0.0 F432.0 E152.204\n"+
"G1 X114.9 Y133.44 Z0.0 F432.0 E157.925\n"+
"G1 X114.9 Y132.7 Z0.0 F432.0 E169.353\n"+
"G1 X114.66 Y131.99 Z0.0 F432.0 E180.779\n"+
"G1 X114.47 Y131.66 Z0.0 F432.0 E186.525\n"+
"G1 X113.94 Y131.14 Z0.0 F432.0 E197.933\n"+
"G1 X113.62 Y130.94 Z0.0 F432.0 E203.679\n"+
"G1 X112.91 Y130.71 Z0.0 F432.0 E215.105\n"+
"G1 X112.3 Y130.7 Z0.0 F432.0 E224.335\n"+
"G1 F240.0\n"+
"G1 E224.335\n"+
"G1 F432.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X103.236 Y144.585 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y145.194 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y145.727 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y146.17 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y146.512 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y146.743 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y146.862 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y146.862 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y146.743 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y146.512 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y146.17 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y145.727 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y145.194 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y144.585 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y143.914 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y143.198 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y142.454 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y141.7 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y140.956 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y140.24 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y139.569 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y138.96 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y138.427 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y137.984 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y137.642 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y137.41 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y137.291 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y137.291 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y137.41 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y137.642 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y137.984 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y138.427 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y138.96 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.236 Y139.569 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y140.24 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y140.956 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y141.7 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y142.454 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y143.198 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y143.914 Z0.0 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X110.93 Y130.86 Z0.0 F3000.0\n"+
"G1 X110.33 Y131.47 Z0.0 F3000.0\n"+
"G1 X109.12 Y137.38 Z0.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E224.335\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.51 Y137.18 Z0.0 F432.0 E9.88\n"+
"G1 X107.73 Y137.05 Z0.0 F432.0 E21.962\n"+
"G1 X106.93 Y137.05 Z0.0 F432.0 E34.062\n"+
"G1 X106.15 Y137.18 Z0.0 F432.0 E46.143\n"+
"G1 X105.4 Y137.42 Z0.0 F432.0 E58.222\n"+
"G1 X104.7 Y137.78 Z0.0 F432.0 E70.308\n"+
"G1 X104.06 Y138.24 Z0.0 F432.0 E82.373\n"+
"G1 X103.5 Y138.8 Z0.0 F432.0 E94.483\n"+
"G1 X103.03 Y139.44 Z0.0 F432.0 E106.557\n"+
"G1 X102.67 Y140.15 Z0.0 F432.0 E118.644\n"+
"G1 X102.43 Y140.9 Z0.0 F432.0 E130.723\n"+
"G1 X102.3 Y141.68 Z0.0 F432.0 E142.804\n"+
"G1 X102.3 Y142.47 Z0.0 F432.0 E154.904\n"+
"G1 X102.43 Y143.25 Z0.0 F432.0 E166.985\n"+
"G1 X102.67 Y144.01 Z0.0 F432.0 E179.049\n"+
"G1 X103.03 Y144.71 Z0.0 F432.0 E191.15\n"+
"G1 X103.5 Y145.35 Z0.0 F432.0 E203.224\n"+
"G1 X104.06 Y145.91 Z0.0 F432.0 E215.323\n"+
"G1 X104.7 Y146.38 Z0.0 F432.0 E227.397\n"+
"G1 X105.4 Y146.73 Z0.0 F432.0 E239.484\n"+
"G1 X106.15 Y146.98 Z0.0 F432.0 E251.562\n"+
"G1 X106.93 Y147.1 Z0.0 F432.0 E263.644\n"+
"G1 X107.73 Y147.1 Z0.0 F432.0 E275.744\n"+
"G1 X108.51 Y146.98 Z0.0 F432.0 E287.825\n"+
"G1 X109.26 Y146.73 Z0.0 F432.0 E299.904\n"+
"G1 X109.96 Y146.38 Z0.0 F432.0 E311.99\n"+
"G1 X110.6 Y145.91 Z0.0 F432.0 E324.064\n"+
"G1 X111.16 Y145.35 Z0.0 F432.0 E336.153\n"+
"G1 X111.63 Y144.71 Z0.0 F432.0 E348.236\n"+
"G1 X111.99 Y144.01 Z0.0 F432.0 E360.336\n"+
"G1 X112.23 Y143.25 Z0.0 F432.0 E372.4\n"+
"G1 X112.35 Y142.47 Z0.0 F432.0 E384.481\n"+
"G1 X112.35 Y141.68 Z0.0 F432.0 E396.581\n"+
"G1 X112.23 Y140.9 Z0.0 F432.0 E408.663\n"+
"G1 X111.99 Y140.15 Z0.0 F432.0 E420.741\n"+
"G1 X111.63 Y139.44 Z0.0 F432.0 E432.828\n"+
"G1 X111.16 Y138.8 Z0.0 F432.0 E444.911\n"+
"G1 X110.6 Y138.24 Z0.0 F432.0 E457.01\n"+
"G1 X109.96 Y137.78 Z0.0 F432.0 E469.075\n"+
"G1 X109.39 Y137.49 Z0.0 F432.0 E478.969\n"+
"G1 F240.0\n"+
"G1 E478.969\n"+
"G1 F432.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X100.158 Y151.886 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.311 Y152.186 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.509 Y152.459 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.748 Y152.698 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.021 Y152.896 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.321 Y153.05 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.642 Y153.154 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.975 Y153.207 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.312 Y153.207 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.646 Y153.154 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.967 Y153.051 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.267 Y152.898 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.54 Y152.7 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.779 Y152.461 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y152.188 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y151.888 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.235 Y151.567 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y151.234 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y150.894 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.235 Y150.561 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y150.24 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y149.94 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.779 Y149.666 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.54 Y149.428 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.267 Y149.23 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.967 Y149.077 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.646 Y148.973 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.312 Y148.921 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.975 Y148.921 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.642 Y148.974 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.321 Y149.078 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.021 Y149.232 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.748 Y149.43 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.509 Y149.669 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.311 Y149.942 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.158 Y150.242 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y150.563 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y150.897 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y151.231 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y151.565 Z0.0 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X106.91 Y136.72 Z0.0 F3000.0\n"+
"G1 X106.07 Y136.85 Z0.0 F3000.0\n"+
"G1 X105.27 Y137.11 Z0.0 F3000.0\n"+
"G1 X104.52 Y137.49 Z0.0 F3000.0\n"+
"G1 X103.84 Y137.99 Z0.0 F3000.0\n"+
"G1 X103.24 Y138.59 Z0.0 F3000.0\n"+
"G1 X102.74 Y139.27 Z0.0 F3000.0\n"+
"G1 X102.36 Y140.02 Z0.0 F3000.0\n"+
"G1 X102.1 Y140.82 Z0.0 F3000.0\n"+
"G1 X101.97 Y141.66 Z0.0 F3000.0\n"+
"G1 X103.27 Y148.96 Z0.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E478.969\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.7 Y148.74 Z0.0 F432.0 E9.24\n"+
"G1 X101.96 Y148.68 Z0.0 F432.0 E20.672\n"+
"G1 X101.23 Y148.86 Z0.0 F432.0 E32.096\n"+
"G1 X100.59 Y149.25 Z0.0 F432.0 E43.515\n"+
"G1 X100.11 Y149.82 Z0.0 F432.0 E54.948\n"+
"G1 X99.82 Y150.51 Z0.0 F432.0 E66.373\n"+
"G1 X99.76 Y151.25 Z0.0 F432.0 E77.759\n"+
"G1 X99.82 Y151.62 Z0.0 F432.0 E83.496\n"+
"G1 X100.11 Y152.31 Z0.0 F432.0 E94.921\n"+
"G1 X100.33 Y152.62 Z0.0 F432.0 E100.642\n"+
"G1 X100.9 Y153.1 Z0.0 F432.0 E112.074\n"+
"G1 X101.23 Y153.27 Z0.0 F432.0 E117.807\n"+
"G1 X101.96 Y153.45 Z0.0 F432.0 E129.231\n"+
"G1 X102.7 Y153.39 Z0.0 F432.0 E140.663\n"+
"G1 X103.06 Y153.27 Z0.0 F432.0 E146.398\n"+
"G1 X103.7 Y152.88 Z0.0 F432.0 E157.809\n"+
"G1 X104.18 Y152.31 Z0.0 F432.0 E169.241\n"+
"G1 X104.47 Y151.62 Z0.0 F432.0 E180.673\n"+
"G1 X104.53 Y151.25 Z0.0 F432.0 E186.397\n"+
"G1 X104.47 Y150.51 Z0.0 F432.0 E197.86\n"+
"G1 X104.18 Y149.81 Z0.0 F432.0 E209.291\n"+
"G1 X103.96 Y149.51 Z0.0 F432.0 E215.012\n"+
"G1 X103.51 Y149.11 Z0.0 F432.0 E224.243\n"+
"G1 F240.0\n"+
"G1 E224.243\n"+
"G1 F432.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X78.893 Y163.824 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.235 Y164.496 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.677 Y165.105 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.21 Y165.638 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.819 Y166.081 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.489 Y166.423 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.206 Y166.657 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.95 Y166.775 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.703 Y166.775 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.447 Y166.658 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.163 Y166.426 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.835 Y166.084 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.444 Y165.642 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.977 Y165.109 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.42 Y164.5 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.762 Y163.829 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y163.113 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y162.368 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y161.611 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y160.867 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.762 Y160.151 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.42 Y159.48 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.977 Y158.871 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.444 Y158.338 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.835 Y157.896 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.163 Y157.554 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.447 Y157.322 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.703 Y157.205 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.95 Y157.205 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.206 Y157.323 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.489 Y157.557 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.819 Y157.899 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.21 Y158.342 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.677 Y158.875 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.235 Y159.484 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.893 Y160.156 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.661 Y160.872 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y161.616 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y162.364 Z0.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.661 Y163.108 Z0.0 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X101.93 Y148.35 Z0.0 F3000.0\n"+
"G1 X101.1 Y148.54 Z0.0 F3000.0\n"+
"G1 X87.54 Y159.24 Z0.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E224.243\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.16 Y158.72 Z0.0 F432.0 E9.877\n"+
"G1 X86.6 Y158.15 Z0.0 F432.0 E21.987\n"+
"G1 X85.96 Y157.69 Z0.0 F432.0 E34.043\n"+
"G1 X85.26 Y157.33 Z0.0 F432.0 E46.143\n"+
"G1 X84.5 Y157.09 Z0.0 F432.0 E58.222\n"+
"G1 X83.72 Y156.97 Z0.0 F432.0 E70.301\n"+
"G1 X82.93 Y156.97 Z0.0 F432.0 E82.385\n"+
"G1 X82.15 Y157.09 Z0.0 F432.0 E94.467\n"+
"G1 X81.4 Y157.34 Z0.0 F432.0 E106.555\n"+
"G1 X80.69 Y157.69 Z0.0 F432.0 E118.642\n"+
"G1 X80.05 Y158.16 Z0.0 F432.0 E130.716\n"+
"G1 X79.49 Y158.72 Z0.0 F432.0 E142.815\n"+
"G1 X79.03 Y159.36 Z0.0 F432.0 E154.88\n"+
"G1 X78.67 Y160.06 Z0.0 F432.0 E166.98\n"+
"G1 X78.43 Y160.82 Z0.0 F432.0 E179.059\n"+
"G1 X78.3 Y161.6 Z0.0 F432.0 E191.138\n"+
"G1 X78.3 Y162.38 Z0.0 F432.0 E203.146\n"+
"G1 X78.43 Y163.16 Z0.0 F432.0 E215.225\n"+
"G1 X78.67 Y163.92 Z0.0 F432.0 E227.304\n"+
"G1 X79.03 Y164.62 Z0.0 F432.0 E239.404\n"+
"G1 X79.49 Y165.26 Z0.0 F432.0 E251.469\n"+
"G1 X80.05 Y165.82 Z0.0 F432.0 E263.568\n"+
"G1 X80.69 Y166.29 Z0.0 F432.0 E275.642\n"+
"G1 X81.4 Y166.65 Z0.0 F432.0 E287.729\n"+
"G1 X82.15 Y166.89 Z0.0 F432.0 E299.817\n"+
"G1 X82.93 Y167.02 Z0.0 F432.0 E311.898\n"+
"G1 X83.72 Y167.02 Z0.0 F432.0 E323.983\n"+
"G1 X84.5 Y166.89 Z0.0 F432.0 E336.062\n"+
"G1 X85.26 Y166.65 Z0.0 F432.0 E348.145\n"+
"G1 X85.96 Y166.29 Z0.0 F432.0 E360.239\n"+
"G1 X86.6 Y165.83 Z0.0 F432.0 E372.304\n"+
"G1 X87.16 Y165.27 Z0.0 F432.0 E384.403\n"+
"G1 X87.63 Y164.63 Z0.0 F432.0 E396.477\n"+
"G1 X87.98 Y163.92 Z0.0 F432.0 E408.557\n"+
"G1 X88.23 Y163.17 Z0.0 F432.0 E420.65\n"+
"G1 X88.35 Y162.39 Z0.0 F432.0 E432.731\n"+
"G1 X88.35 Y161.59 Z0.0 F432.0 E444.892\n"+
"G1 X88.23 Y160.81 Z0.0 F432.0 E456.973\n"+
"G1 X87.98 Y160.06 Z0.0 F432.0 E469.066\n"+
"G1 X87.69 Y159.48 Z0.0 F432.0 E478.953\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<loop> inner )\n"+
"M108 S100.0\n"+
"M108 S100.0\n"+
"G1 X87.94 Y158.99 Z0.0 F918.0 E482.531\n"+
"G1 X87.52 Y158.41 Z0.0 F918.0 E487.233\n"+
"G1 X86.9 Y157.8 Z0.0 F918.0 E492.89\n"+
"G1 X86.2 Y157.29 Z0.0 F918.0 E498.534\n"+
"G1 X85.43 Y156.9 Z0.0 F918.0 E504.19\n"+
"G1 X84.61 Y156.63 Z0.0 F918.0 E509.837\n"+
"G1 X83.76 Y156.5 Z0.0 F918.0 E515.48\n"+
"G1 X82.89 Y156.5 Z0.0 F918.0 E521.127\n"+
"G1 X82.04 Y156.64 Z0.0 F918.0 E526.778\n"+
"G1 X81.22 Y156.9 Z0.0 F918.0 E532.425\n"+
"G1 X80.45 Y157.3 Z0.0 F918.0 E538.072\n"+
"G1 X79.75 Y157.8 Z0.0 F918.0 E543.715\n"+
"G1 X79.14 Y158.42 Z0.0 F918.0 E549.372\n"+
"G1 X78.63 Y159.12 Z0.0 F918.0 E555.016\n"+
"G1 X78.24 Y159.89 Z0.0 F918.0 E560.672\n"+
"G1 X77.97 Y160.71 Z0.0 F918.0 E566.319\n"+
"G1 X77.84 Y161.56 Z0.0 F918.0 E571.962\n"+
"G1 X77.84 Y162.42 Z0.0 F918.0 E577.57\n"+
"G1 X77.97 Y163.27 Z0.0 F918.0 E583.213\n"+
"G1 X78.24 Y164.09 Z0.0 F918.0 E588.86\n"+
"G1 X78.63 Y164.87 Z0.0 F918.0 E594.516\n"+
"G1 X79.14 Y165.56 Z0.0 F918.0 E600.16\n"+
"G1 X79.75 Y166.18 Z0.0 F918.0 E605.817\n"+
"G1 X80.45 Y166.68 Z0.0 F918.0 E611.456\n"+
"G1 X81.22 Y167.08 Z0.0 F918.0 E617.106\n"+
"G1 X82.04 Y167.34 Z0.0 F918.0 E622.751\n"+
"G1 X82.89 Y167.48 Z0.0 F918.0 E628.403\n"+
"G1 X83.76 Y167.48 Z0.0 F918.0 E634.05\n"+
"G1 X84.61 Y167.35 Z0.0 F918.0 E639.693\n"+
"G1 X85.43 Y167.08 Z0.0 F918.0 E645.34\n"+
"G1 X86.2 Y166.69 Z0.0 F918.0 E650.996\n"+
"G1 X86.9 Y166.18 Z0.0 F918.0 E656.64\n"+
"G1 X87.52 Y165.57 Z0.0 F918.0 E662.297\n"+
"G1 X88.02 Y164.87 Z0.0 F918.0 E667.939\n"+
"G1 X88.42 Y164.1 Z0.0 F918.0 E673.587\n"+
"G1 X88.68 Y163.28 Z0.0 F918.0 E679.233\n"+
"G1 X88.82 Y162.43 Z0.0 F918.0 E684.884\n"+
"G1 X88.82 Y161.56 Z0.0 F918.0 E690.571\n"+
"G1 X88.68 Y160.7 Z0.0 F918.0 E696.222\n"+
"G1 X88.42 Y159.88 Z0.0 F918.0 E701.868\n"+
"G1 X88.09 Y159.24 Z0.0 F918.0 E706.577\n"+
"G1 F240.0\n"+
"G1 E706.577\n"+
"G1 F918.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.79 Y152.67 Z0.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E706.577\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.29 Y153.24 Z0.0 F918.0 E4.913\n"+
"G1 X100.65 Y153.5 Z0.0 F918.0 E7.834\n"+
"G1 X101.05 Y153.7 Z0.0 F918.0 E10.766\n"+
"G1 X101.48 Y153.84 Z0.0 F918.0 E13.701\n"+
"G1 X101.92 Y153.91 Z0.0 F918.0 E16.626\n"+
"G1 X102.37 Y153.91 Z0.0 F918.0 E19.554\n"+
"G1 X102.81 Y153.84 Z0.0 F918.0 E22.484\n"+
"G1 X103.24 Y153.7 Z0.0 F918.0 E25.419\n"+
"G1 X103.64 Y153.5 Z0.0 F918.0 E28.345\n"+
"G1 X104.0 Y153.24 Z0.0 F918.0 E31.275\n"+
"G1 X104.32 Y152.92 Z0.0 F918.0 E34.21\n"+
"G1 X104.58 Y152.56 Z0.0 F918.0 E37.13\n"+
"G1 X104.78 Y152.16 Z0.0 F918.0 E40.065\n"+
"G1 X104.92 Y151.73 Z0.0 F918.0 E43.0\n"+
"G1 X104.99 Y151.29 Z0.0 F918.0 E45.925\n"+
"G1 X104.99 Y150.84 Z0.0 F918.0 E48.879\n"+
"G1 X104.92 Y150.4 Z0.0 F918.0 E51.804\n"+
"G1 X104.78 Y149.97 Z0.0 F918.0 E54.739\n"+
"G1 X104.58 Y149.57 Z0.0 F918.0 E57.674\n"+
"G1 X104.32 Y149.21 Z0.0 F918.0 E60.595\n"+
"G1 X104.0 Y148.89 Z0.0 F918.0 E63.53\n"+
"G1 X103.64 Y148.63 Z0.0 F918.0 E66.459\n"+
"G1 X103.24 Y148.42 Z0.0 F918.0 E69.385\n"+
"G1 X102.81 Y148.29 Z0.0 F918.0 E72.32\n"+
"G1 X102.37 Y148.22 Z0.0 F918.0 E75.251\n"+
"G1 X101.92 Y148.22 Z0.0 F918.0 E78.179\n"+
"G1 X101.48 Y148.29 Z0.0 F918.0 E81.104\n"+
"G1 X101.05 Y148.43 Z0.0 F918.0 E84.039\n"+
"G1 X100.65 Y148.63 Z0.0 F918.0 E86.971\n"+
"G1 X100.29 Y148.89 Z0.0 F918.0 E89.891\n"+
"G1 X99.97 Y149.21 Z0.0 F918.0 E92.831\n"+
"G1 X99.71 Y149.57 Z0.0 F918.0 E95.76\n"+
"G1 X99.51 Y149.97 Z0.0 F918.0 E98.686\n"+
"G1 X99.37 Y150.4 Z0.0 F918.0 E101.621\n"+
"G1 X99.3 Y150.84 Z0.0 F918.0 E104.552\n"+
"G1 X99.3 Y151.29 Z0.0 F918.0 E107.454\n"+
"G1 X99.37 Y151.73 Z0.0 F918.0 E110.384\n"+
"G1 X99.64 Y152.43 Z0.0 F918.0 E115.292\n"+
"G1 F240.0\n"+
"G1 E115.292\n"+
"G1 F918.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.82 Y149.64 Z0.0 F3000.0\n"+
"G1 X104.22 Y146.6 Z0.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E115.292\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.22 Y147.17 Z0.0 F918.0 E7.529\n"+
"G1 X106.04 Y147.43 Z0.0 F918.0 E13.172\n"+
"G1 X106.9 Y147.57 Z0.0 F918.0 E18.823\n"+
"G1 X107.76 Y147.57 Z0.0 F918.0 E24.483\n"+
"G1 X108.61 Y147.43 Z0.0 F918.0 E30.121\n"+
"G1 X109.44 Y147.17 Z0.0 F918.0 E35.764\n"+
"G1 X110.21 Y146.77 Z0.0 F918.0 E41.423\n"+
"G1 X110.91 Y146.26 Z0.0 F918.0 E47.065\n"+
"G1 X111.52 Y145.65 Z0.0 F918.0 E52.722\n"+
"G1 X112.03 Y144.96 Z0.0 F918.0 E58.364\n"+
"G1 X112.42 Y144.18 Z0.0 F918.0 E64.017\n"+
"G1 X112.68 Y143.36 Z0.0 F918.0 E69.66\n"+
"G1 X112.82 Y142.51 Z0.0 F918.0 E75.305\n"+
"G1 X112.82 Y141.64 Z0.0 F918.0 E80.965\n"+
"G1 X112.68 Y140.79 Z0.0 F918.0 E86.609\n"+
"G1 X112.42 Y139.97 Z0.0 F918.0 E92.252\n"+
"G1 X112.03 Y139.2 Z0.0 F918.0 E97.905\n"+
"G1 X111.52 Y138.5 Z0.0 F918.0 E103.548\n"+
"G1 X110.91 Y137.89 Z0.0 F918.0 E109.204\n"+
"G1 X110.21 Y137.38 Z0.0 F918.0 E114.851\n"+
"G1 X109.44 Y136.99 Z0.0 F918.0 E120.507\n"+
"G1 X108.61 Y136.72 Z0.0 F918.0 E126.149\n"+
"G1 X107.76 Y136.59 Z0.0 F918.0 E131.787\n"+
"G1 X106.9 Y136.59 Z0.0 F918.0 E137.448\n"+
"G1 X106.04 Y136.72 Z0.0 F918.0 E143.099\n"+
"G1 X105.22 Y136.99 Z0.0 F918.0 E148.741\n"+
"G1 X104.45 Y137.38 Z0.0 F918.0 E154.386\n"+
"G1 X103.75 Y137.89 Z0.0 F918.0 E160.032\n"+
"G1 X103.14 Y138.5 Z0.0 F918.0 E165.689\n"+
"G1 X102.63 Y139.2 Z0.0 F918.0 E171.331\n"+
"G1 X102.24 Y139.97 Z0.0 F918.0 E176.984\n"+
"G1 X101.97 Y140.79 Z0.0 F918.0 E182.627\n"+
"G1 X101.84 Y141.64 Z0.0 F918.0 E188.271\n"+
"G1 X101.84 Y142.51 Z0.0 F918.0 E193.932\n"+
"G1 X101.97 Y143.36 Z0.0 F918.0 E199.576\n"+
"G1 X102.24 Y144.18 Z0.0 F918.0 E205.219\n"+
"G1 X102.63 Y144.96 Z0.0 F918.0 E210.872\n"+
"G1 X103.14 Y145.65 Z0.0 F918.0 E216.514\n"+
"G1 X103.98 Y146.43 Z0.0 F918.0 E224.012\n"+
"G1 F240.0\n"+
"G1 E224.012\n"+
"G1 F918.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X102.1 Y143.33 Z0.0 F3000.0\n"+
"G1 X101.97 Y142.5 Z0.0 F3000.0\n"+
"G1 X101.97 Y141.66 Z0.0 F3000.0\n"+
"G1 X111.44 Y116.7 Z0.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E224.012\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.16 Y116.82 Z0.0 F918.0 E4.712\n"+
"G1 X113.02 Y116.82 Z0.0 F918.0 E10.359\n"+
"G1 X113.87 Y116.68 Z0.0 F918.0 E16.002\n"+
"G1 X114.69 Y116.42 Z0.0 F918.0 E21.649\n"+
"G1 X115.47 Y116.02 Z0.0 F918.0 E27.305\n"+
"G1 X116.16 Y115.52 Z0.0 F918.0 E32.949\n"+
"G1 X116.78 Y114.91 Z0.0 F918.0 E38.606\n"+
"G1 X117.28 Y114.21 Z0.0 F918.0 E44.249\n"+
"G1 X117.68 Y113.44 Z0.0 F918.0 E49.896\n"+
"G1 X117.95 Y112.62 Z0.0 F918.0 E55.543\n"+
"G1 X118.08 Y111.76 Z0.0 F918.0 E61.194\n"+
"G1 X118.08 Y110.89 Z0.0 F918.0 E66.88\n"+
"G1 X117.95 Y110.04 Z0.0 F918.0 E72.531\n"+
"G1 X117.68 Y109.22 Z0.0 F918.0 E78.178\n"+
"G1 X117.28 Y108.45 Z0.0 F918.0 E83.825\n"+
"G1 X116.78 Y107.75 Z0.0 F918.0 E89.467\n"+
"G1 X116.16 Y107.14 Z0.0 F918.0 E95.124\n"+
"G1 X115.47 Y106.63 Z0.0 F918.0 E100.768\n"+
"G1 X114.69 Y106.24 Z0.0 F918.0 E106.424\n"+
"G1 X113.87 Y105.97 Z0.0 F918.0 E112.071\n"+
"G1 X113.02 Y105.84 Z0.0 F918.0 E117.714\n"+
"G1 X112.16 Y105.84 Z0.0 F918.0 E123.362\n"+
"G1 X111.3 Y105.97 Z0.0 F918.0 E129.013\n"+
"G1 X110.48 Y106.24 Z0.0 F918.0 E134.659\n"+
"G1 X109.71 Y106.63 Z0.0 F918.0 E140.312\n"+
"G1 X109.01 Y107.14 Z0.0 F918.0 E145.95\n"+
"G1 X108.4 Y107.75 Z0.0 F918.0 E151.606\n"+
"G1 X107.89 Y108.45 Z0.0 F918.0 E157.25\n"+
"G1 X107.5 Y109.22 Z0.0 F918.0 E162.906\n"+
"G1 X107.23 Y110.05 Z0.0 F918.0 E168.555\n"+
"G1 X107.1 Y110.9 Z0.0 F918.0 E174.198\n"+
"G1 X107.1 Y111.76 Z0.0 F918.0 E179.806\n"+
"G1 X107.23 Y112.61 Z0.0 F918.0 E185.448\n"+
"G1 X107.5 Y113.43 Z0.0 F918.0 E191.097\n"+
"G1 X107.89 Y114.2 Z0.0 F918.0 E196.753\n"+
"G1 X108.4 Y114.9 Z0.0 F918.0 E202.397\n"+
"G1 X109.01 Y115.51 Z0.0 F918.0 E208.054\n"+
"G1 X109.71 Y116.02 Z0.0 F918.0 E213.691\n"+
"G1 X110.48 Y116.41 Z0.0 F918.0 E219.344\n"+
"G1 X111.16 Y116.64 Z0.0 F918.0 E224.048\n"+
"G1 F240.0\n"+
"G1 E224.048\n"+
"G1 F918.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X108.0 Y114.14 Z0.0 F3000.0\n"+
"G1 X107.62 Y113.38 Z0.0 F3000.0\n"+
"G1 X107.36 Y112.58 Z0.0 F3000.0\n"+
"G1 X107.23 Y111.75 Z0.0 F3000.0\n"+
"G1 X107.23 Y110.91 Z0.0 F3000.0\n"+
"G1 X111.45 Y102.78 Z0.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E224.048\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.52 Y102.78 Z0.0 F918.0 E26.641\n"+
"G1 X115.52 Y88.37 Z0.0 F918.0 E120.824\n"+
"G1 X109.11 Y88.37 Z0.0 F918.0 E162.719\n"+
"G1 X109.11 Y102.78 Z0.0 F918.0 E256.902\n"+
"G1 X111.16 Y102.78 Z0.0 F918.0 E270.275\n"+
"G1 F240.0\n"+
"G1 E270.275\n"+
"G1 F918.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X107.23 Y110.91 Z0.0 F3000.0\n"+
"G1 X112.39 Y130.22 Z0.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E270.275\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.65 Y130.35 Z0.0 F918.0 E4.901\n"+
"G1 X111.24 Y130.52 Z0.0 F918.0 E7.834\n"+
"G1 X110.85 Y130.76 Z0.0 F918.0 E10.776\n"+
"G1 X110.51 Y131.05 Z0.0 F918.0 E13.696\n"+
"G1 X110.22 Y131.39 Z0.0 F918.0 E16.625\n"+
"G1 X109.99 Y131.77 Z0.0 F918.0 E19.559\n"+
"G1 X109.82 Y132.19 Z0.0 F918.0 E22.489\n"+
"G1 X109.71 Y132.62 Z0.0 F918.0 E25.428\n"+
"G1 X109.68 Y133.07 Z0.0 F918.0 E28.351\n"+
"G1 X109.71 Y133.52 Z0.0 F918.0 E31.274\n"+
"G1 X109.82 Y133.95 Z0.0 F918.0 E34.213\n"+
"G1 X109.99 Y134.37 Z0.0 F918.0 E37.143\n"+
"G1 X110.22 Y134.75 Z0.0 F918.0 E40.077\n"+
"G1 X110.51 Y135.09 Z0.0 F918.0 E43.006\n"+
"G1 X110.85 Y135.38 Z0.0 F918.0 E45.922\n"+
"G1 X111.24 Y135.62 Z0.0 F918.0 E48.868\n"+
"G1 X111.65 Y135.79 Z0.0 F918.0 E51.798\n"+
"G1 X112.09 Y135.89 Z0.0 F918.0 E54.734\n"+
"G1 X112.53 Y135.93 Z0.0 F918.0 E57.658\n"+
"G1 X112.98 Y135.89 Z0.0 F918.0 E60.582\n"+
"G1 X113.42 Y135.79 Z0.0 F918.0 E63.518\n"+
"G1 X113.83 Y135.62 Z0.0 F918.0 E66.448\n"+
"G1 X114.21 Y135.38 Z0.0 F918.0 E69.388\n"+
"G1 X114.55 Y135.09 Z0.0 F918.0 E72.309\n"+
"G1 X114.84 Y134.75 Z0.0 F918.0 E75.234\n"+
"G1 X115.08 Y134.37 Z0.0 F918.0 E78.167\n"+
"G1 X115.25 Y133.95 Z0.0 F918.0 E81.1\n"+
"G1 X115.36 Y133.52 Z0.0 F918.0 E84.038\n"+
"G1 X115.39 Y133.07 Z0.0 F918.0 E86.961\n"+
"G1 X115.36 Y132.62 Z0.0 F918.0 E89.885\n"+
"G1 X115.25 Y132.19 Z0.0 F918.0 E92.822\n"+
"G1 X115.08 Y131.77 Z0.0 F918.0 E95.755\n"+
"G1 X114.84 Y131.39 Z0.0 F918.0 E98.688\n"+
"G1 X114.55 Y131.05 Z0.0 F918.0 E101.613\n"+
"G1 X114.21 Y130.76 Z0.0 F918.0 E104.538\n"+
"G1 X113.83 Y130.52 Z0.0 F918.0 E107.475\n"+
"G1 X113.42 Y130.35 Z0.0 F918.0 E110.408\n"+
"G1 X112.68 Y130.22 Z0.0 F918.0 E115.309\n"+
"G1 F240.0\n"+
"G1 E115.309\n"+
"G1 F918.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> outer )\n"+
"G1 X124.68 Y137.39 Z0.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E115.309\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.91 Y162.98 Z0.0 F918.0 E193.075\n"+
"G1 X90.49 Y174.18 Z0.0 F918.0 E339.609\n"+
"G1 X78.77 Y171.04 Z0.0 F918.0 E418.95\n"+
"G1 X73.08 Y161.18 Z0.0 F918.0 E493.356\n"+
"G1 X76.32 Y149.65 Z0.0 F918.0 E571.678\n"+
"G1 X93.57 Y139.69 Z0.0 F918.0 E701.84\n"+
"G1 X98.22 Y131.74 Z0.0 F918.0 E762.051\n"+
"G1 X98.22 Y111.55 Z0.0 F918.0 E894.012\n"+
"G1 X105.52 Y104.25 Z0.0 F918.0 E961.497\n"+
"G1 X105.52 Y88.37 Z0.0 F918.0 E1065.261\n"+
"G1 X104.02 Y88.37 Z0.0 F918.0 E1075.065\n"+
"G1 X104.02 Y85.78 Z0.0 F918.0 E1091.994\n"+
"G1 X120.61 Y85.78 Z0.0 F918.0 E1200.425\n"+
"G1 X120.61 Y88.37 Z0.0 F918.0 E1217.353\n"+
"G1 X119.11 Y88.37 Z0.0 F918.0 E1227.157\n"+
"G1 X119.11 Y103.57 Z0.0 F918.0 E1326.477\n"+
"G1 X126.96 Y111.42 Z0.0 F918.0 E1399.046\n"+
"G1 X126.96 Y133.44 Z0.0 F918.0 E1542.967\n"+
"G1 X124.82 Y137.14 Z0.0 F918.0 E1570.909\n"+
"G1 F240.0\n"+
"G1 E1570.909\n"+
"G1 F918.0\n"+
";\n"+
"(</loop>)\n"+
"G1 X98.66 Y111.24 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E1570.909\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X124.66 Y137.24 Z0.0 F918.0 E240.361\n"+
"G1 F240.0\n"+
"G1 E240.361\n"+
"G1 F918.0\n"+
";\n"+
"G1 X124.9 Y136.84 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E240.361\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.98 Y110.92 Z0.0 F918.0 E239.575\n"+
"G1 F240.0\n"+
"G1 E239.575\n"+
"G1 F918.0\n"+
";\n"+
"G1 X99.3 Y110.6 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E239.575\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X125.13 Y136.44 Z0.0 F918.0 E238.785\n"+
"G1 F240.0\n"+
"G1 E238.785\n"+
"G1 F918.0\n"+
";\n"+
"G1 X125.36 Y136.03 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E238.785\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.61 Y110.28 Z0.0 F918.0 E237.995\n"+
"G1 F240.0\n"+
"G1 E237.995\n"+
"G1 F918.0\n"+
";\n"+
"G1 X99.93 Y109.97 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E237.995\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X125.6 Y135.63 Z0.0 F918.0 E237.204\n"+
"G1 F240.0\n"+
"G1 E237.204\n"+
"G1 F918.0\n"+
";\n"+
"G1 X125.83 Y135.23 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E237.204\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.25 Y109.65 Z0.0 F918.0 E236.423\n"+
"G1 F240.0\n"+
"G1 E236.423\n"+
"G1 F918.0\n"+
";\n"+
"G1 X100.57 Y109.33 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E236.423\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.06 Y134.82 Z0.0 F918.0 E235.628\n"+
"G1 F240.0\n"+
"G1 E235.628\n"+
"G1 F918.0\n"+
";\n"+
"G1 X126.29 Y134.42 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E235.628\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.89 Y109.01 Z0.0 F918.0 E234.838\n"+
"G1 F240.0\n"+
"G1 E234.838\n"+
"G1 F918.0\n"+
";\n"+
"G1 X101.21 Y108.69 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E234.838\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.53 Y134.01 Z0.0 F918.0 E234.052\n"+
"G1 F240.0\n"+
"G1 E234.052\n"+
"G1 F918.0\n"+
";\n"+
"G1 X126.76 Y133.61 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E234.052\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.52 Y108.38 Z0.0 F918.0 E233.262\n"+
"G1 F240.0\n"+
"G1 E233.262\n"+
"G1 F918.0\n"+
";\n"+
"G1 X101.84 Y108.06 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E233.262\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.59 Y113.81 Z0.0 F918.0 E53.144\n"+
"G1 F240.0\n"+
"G1 E53.144\n"+
"G1 F918.0\n"+
";\n"+
"G1 X107.19 Y112.77 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E53.144\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.16 Y107.74 Z0.0 F918.0 E46.517\n"+
"G1 F240.0\n"+
"G1 E46.517\n"+
"G1 F918.0\n"+
";\n"+
"G1 X102.48 Y107.42 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E46.517\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.05 Y111.99 Z0.0 F918.0 E42.223\n"+
"G1 F240.0\n"+
"G1 E42.223\n"+
"G1 F918.0\n"+
";\n"+
"G1 X107.01 Y111.32 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E42.223\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.8 Y107.1 Z0.0 F918.0 E38.951\n"+
"G1 F240.0\n"+
"G1 E38.951\n"+
"G1 F918.0\n"+
";\n"+
"G1 X103.11 Y106.78 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E38.951\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.04 Y110.71 Z0.0 F918.0 E36.275\n"+
"G1 F240.0\n"+
"G1 E36.275\n"+
"G1 F918.0\n"+
";\n"+
"G1 X107.13 Y110.16 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E36.275\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.43 Y106.47 Z0.0 F918.0 E34.14\n"+
"G1 F240.0\n"+
"G1 E34.14\n"+
"G1 F918.0\n"+
";\n"+
"G1 X103.75 Y106.15 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E34.14\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.26 Y109.66 Z0.0 F918.0 E32.481\n"+
"G1 F240.0\n"+
"G1 E32.481\n"+
"G1 F918.0\n"+
";\n"+
"G1 X107.42 Y109.18 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E32.481\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.07 Y105.83 Z0.0 F918.0 E30.988\n"+
"G1 F240.0\n"+
"G1 E30.988\n"+
"G1 F918.0\n"+
";\n"+
"G1 X104.39 Y105.51 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E30.988\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.64 Y108.76 Z0.0 F918.0 E30.022\n"+
"G1 F240.0\n"+
"G1 E30.022\n"+
"G1 F918.0\n"+
";\n"+
"G1 X107.86 Y108.35 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E30.022\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.71 Y105.19 Z0.0 F918.0 E29.144\n"+
"G1 F240.0\n"+
"G1 E29.144\n"+
"G1 F918.0\n"+
";\n"+
"G1 X105.02 Y104.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E29.144\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.13 Y107.98 Z0.0 F918.0 E28.682\n"+
"G1 F240.0\n"+
"G1 E28.682\n"+
"G1 F918.0\n"+
";\n"+
"G1 X108.41 Y107.62 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E28.682\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.34 Y104.56 Z0.0 F918.0 E28.326\n"+
"G1 F240.0\n"+
"G1 E28.326\n"+
"G1 F918.0\n"+
";\n"+
"G1 X105.61 Y104.19 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E28.326\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.72 Y107.3 Z0.0 F918.0 E28.77\n"+
"G1 F240.0\n"+
"G1 E28.77\n"+
"G1 F918.0\n"+
";\n"+
"G1 X109.06 Y107.0 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E28.77\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y103.55 Z0.0 F918.0 E31.843\n"+
"G1 F240.0\n"+
"G1 E31.843\n"+
"G1 F918.0\n"+
";\n"+
"G1 X105.61 Y102.92 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.843\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.42 Y106.73 Z0.0 F918.0 E35.24\n"+
"G1 F240.0\n"+
"G1 E35.24\n"+
"G1 F918.0\n"+
";\n"+
"G1 X109.81 Y106.48 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E35.24\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y102.28 Z0.0 F918.0 E38.822\n"+
"G1 F240.0\n"+
"G1 E38.822\n"+
"G1 F918.0\n"+
";\n"+
"G1 X105.61 Y101.64 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E38.822\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.23 Y106.27 Z0.0 F918.0 E42.722\n"+
"G1 F240.0\n"+
"G1 E42.722\n"+
"G1 F918.0\n"+
";\n"+
"G1 X110.68 Y106.08 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E42.722\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y101.01 Z0.0 F918.0 E46.882\n"+
"G1 F240.0\n"+
"G1 E46.882\n"+
"G1 F918.0\n"+
";\n"+
"G1 X105.61 Y100.37 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E46.882\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.16 Y105.92 Z0.0 F918.0 E51.318\n"+
"G1 F240.0\n"+
"G1 E51.318\n"+
"G1 F918.0\n"+
";\n"+
"G1 X111.7 Y105.82 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E51.318\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y99.74 Z0.0 F918.0 E56.236\n"+
"G1 F240.0\n"+
"G1 E56.236\n"+
"G1 F918.0\n"+
";\n"+
"G1 X105.61 Y99.1 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E56.236\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y102.51 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X109.39 Y102.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.26 Y105.75 Z0.0 F918.0 E26.565\n"+
"G1 F240.0\n"+
"G1 E26.565\n"+
"G1 F918.0\n"+
";\n"+
"G1 X110.02 Y102.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E26.565\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.9 Y105.75 Z0.0 F918.0 E26.565\n"+
"G1 F240.0\n"+
"G1 E26.565\n"+
"G1 F918.0\n"+
";\n"+
"G1 X113.63 Y105.84 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E26.565\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.66 Y102.87 Z0.0 F918.0 E27.439\n"+
"G1 F240.0\n"+
"G1 E27.439\n"+
"G1 F918.0\n"+
";\n"+
"G1 X111.3 Y102.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E27.439\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.5 Y106.08 Z0.0 F918.0 E29.652\n"+
"G1 F240.0\n"+
"G1 E29.652\n"+
"G1 F918.0\n"+
";\n"+
"G1 X115.87 Y106.81 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E29.652\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.93 Y102.87 Z0.0 F918.0 E36.428\n"+
"G1 F240.0\n"+
"G1 E36.428\n"+
"G1 F918.0\n"+
";\n"+
"G1 X126.87 Y117.18 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E36.428\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.57 Y102.87 Z0.0 F918.0 E132.215\n"+
"G1 F240.0\n"+
"G1 E132.215\n"+
"G1 F918.0\n"+
";\n"+
"G1 X113.2 Y102.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E132.215\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y116.54 Z0.0 F918.0 E126.341\n"+
"G1 F240.0\n"+
"G1 E126.341\n"+
"G1 F918.0\n"+
";\n"+
"G1 X113.84 Y102.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E126.341\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y115.91 Z0.0 F918.0 E120.458\n"+
"G1 F240.0\n"+
"G1 E120.458\n"+
"G1 F918.0\n"+
";\n"+
"G1 X126.87 Y115.27 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E120.458\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.48 Y102.87 Z0.0 F918.0 E114.57\n"+
"G1 F240.0\n"+
"G1 E114.57\n"+
"G1 F918.0\n"+
";\n"+
"G1 X115.11 Y102.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E114.57\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y114.63 Z0.0 F918.0 E108.691\n"+
"G1 F240.0\n"+
"G1 E108.691\n"+
"G1 F918.0\n"+
";\n"+
"G1 X126.87 Y114.0 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E108.691\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y102.73 Z0.0 F918.0 E104.088\n"+
"G1 F240.0\n"+
"G1 E104.088\n"+
"G1 F918.0\n"+
";\n"+
"G1 X115.61 Y102.1 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E104.088\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y113.36 Z0.0 F918.0 E104.088\n"+
"G1 F240.0\n"+
"G1 E104.088\n"+
"G1 F918.0\n"+
";\n"+
"G1 X126.87 Y112.72 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E104.088\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y101.46 Z0.0 F918.0 E104.088\n"+
"G1 F240.0\n"+
"G1 E104.088\n"+
"G1 F918.0\n"+
";\n"+
"G1 X115.61 Y100.83 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E104.088\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y112.09 Z0.0 F918.0 E104.088\n"+
"G1 F240.0\n"+
"G1 E104.088\n"+
"G1 F918.0\n"+
";\n"+
"G1 X126.87 Y117.81 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E104.088\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.1 Y108.04 Z0.0 F918.0 E90.316\n"+
"G1 F240.0\n"+
"G1 E90.316\n"+
"G1 F918.0\n"+
";\n"+
"G1 X117.83 Y109.41 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E90.316\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y118.45 Z0.0 F918.0 E83.536\n"+
"G1 F240.0\n"+
"G1 E83.536\n"+
"G1 F918.0\n"+
";\n"+
"G1 X126.87 Y119.09 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E83.536\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.08 Y110.29 Z0.0 F918.0 E81.308\n"+
"G1 F240.0\n"+
"G1 E81.308\n"+
"G1 F918.0\n"+
";\n"+
"G1 X118.17 Y111.02 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E81.308\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y119.72 Z0.0 F918.0 E80.435\n"+
"G1 F240.0\n"+
"G1 E80.435\n"+
"G1 F918.0\n"+
";\n"+
"G1 X126.87 Y120.36 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E80.435\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.17 Y111.66 Z0.0 F918.0 E80.43\n"+
"G1 F240.0\n"+
"G1 E80.43\n"+
"G1 F918.0\n"+
";\n"+
"G1 X118.1 Y112.22 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E80.43\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y121.0 Z0.0 F918.0 E81.1\n"+
"G1 F240.0\n"+
"G1 E81.1\n"+
"G1 F918.0\n"+
";\n"+
"G1 X126.87 Y121.63 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E81.1\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.99 Y112.75 Z0.0 F918.0 E82.061\n"+
"G1 F240.0\n"+
"G1 E82.061\n"+
"G1 F918.0\n"+
";\n"+
"G1 X117.84 Y113.23 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E82.061\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y122.27 Z0.0 F918.0 E83.513\n"+
"G1 F240.0\n"+
"G1 E83.513\n"+
"G1 F918.0\n"+
";\n"+
"G1 X126.87 Y122.91 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E83.513\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.65 Y113.68 Z0.0 F918.0 E85.232\n"+
"G1 F240.0\n"+
"G1 E85.232\n"+
"G1 F918.0\n"+
";\n"+
"G1 X117.44 Y114.11 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E85.232\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y123.54 Z0.0 F918.0 E87.219\n"+
"G1 F240.0\n"+
"G1 E87.219\n"+
"G1 F918.0\n"+
";\n"+
"G1 X126.87 Y124.18 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E87.219\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.19 Y114.49 Z0.0 F918.0 E89.521\n"+
"G1 F240.0\n"+
"G1 E89.521\n"+
"G1 F918.0\n"+
";\n"+
"G1 X116.92 Y114.86 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E89.521\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y124.81 Z0.0 F918.0 E91.998\n"+
"G1 F240.0\n"+
"G1 E91.998\n"+
"G1 F918.0\n"+
";\n"+
"G1 X126.87 Y125.45 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E91.998\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.61 Y115.19 Z0.0 F918.0 E94.817\n"+
"G1 F240.0\n"+
"G1 E94.817\n"+
"G1 F918.0\n"+
";\n"+
"G1 X116.3 Y115.51 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E94.817\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y126.09 Z0.0 F918.0 E97.747\n"+
"G1 F240.0\n"+
"G1 E97.747\n"+
"G1 F918.0\n"+
";\n"+
"G1 X126.87 Y126.72 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E97.747\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.94 Y115.79 Z0.0 F918.0 E101.047\n"+
"G1 F240.0\n"+
"G1 E101.047\n"+
"G1 F918.0\n"+
";\n"+
"G1 X115.57 Y116.06 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E101.047\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y127.36 Z0.0 F918.0 E104.458\n"+
"G1 F240.0\n"+
"G1 E104.458\n"+
"G1 F918.0\n"+
";\n"+
"G1 X126.87 Y128.0 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E104.458\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.16 Y116.28 Z0.0 F918.0 E108.275\n"+
"G1 F240.0\n"+
"G1 E108.275\n"+
"G1 F918.0\n"+
";\n"+
"G1 X114.74 Y116.5 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E108.275\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y128.63 Z0.0 F918.0 E112.18\n"+
"G1 F240.0\n"+
"G1 E112.18\n"+
"G1 F918.0\n"+
";\n"+
"G1 X126.87 Y129.27 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E112.18\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.26 Y116.65 Z0.0 F918.0 E116.608\n"+
"G1 F240.0\n"+
"G1 E116.608\n"+
"G1 F918.0\n"+
";\n"+
"G1 X113.76 Y116.79 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E116.608\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y129.91 Z0.0 F918.0 E121.211\n"+
"G1 F240.0\n"+
"G1 E121.211\n"+
"G1 F918.0\n"+
";\n"+
"G1 X126.87 Y130.54 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E121.211\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.21 Y116.88 Z0.0 F918.0 E126.29\n"+
"G1 F240.0\n"+
"G1 E126.29\n"+
"G1 F918.0\n"+
";\n"+
"G1 X112.6 Y116.91 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E126.29\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y131.18 Z0.0 F918.0 E131.91\n"+
"G1 F240.0\n"+
"G1 E131.91\n"+
"G1 F918.0\n"+
";\n"+
"G1 X126.87 Y131.82 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E131.91\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.93 Y116.87 Z0.0 F918.0 E138.122\n"+
"G1 F240.0\n"+
"G1 E138.122\n"+
"G1 F918.0\n"+
";\n"+
"G1 X111.15 Y116.73 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E138.122\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y132.45 Z0.0 F918.0 E145.35\n"+
"G1 F240.0\n"+
"G1 E145.35\n"+
"G1 F918.0\n"+
";\n"+
"G1 X110.11 Y116.33 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E145.35\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y133.09 Z0.0 F918.0 E154.926\n"+
"G1 F240.0\n"+
"G1 E154.926\n"+
"G1 F918.0\n"+
";\n"+
"G1 X124.43 Y137.65 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E154.926\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.34 Y111.56 Z0.0 F918.0 E241.147\n"+
"G1 F240.0\n"+
"G1 E241.147\n"+
"G1 F918.0\n"+
";\n"+
"G1 X98.31 Y112.16 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E241.147\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X124.2 Y138.05 Z0.0 F918.0 E239.279\n"+
"G1 F240.0\n"+
"G1 E239.279\n"+
"G1 F918.0\n"+
";\n"+
"G1 X123.96 Y138.45 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E239.279\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y112.8 Z0.0 F918.0 E237.13\n"+
"G1 F240.0\n"+
"G1 E237.13\n"+
"G1 F918.0\n"+
";\n"+
"G1 X98.31 Y113.44 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E237.13\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X123.73 Y138.86 Z0.0 F918.0 E234.972\n"+
"G1 F240.0\n"+
"G1 E234.972\n"+
"G1 F918.0\n"+
";\n"+
"G1 X123.5 Y139.26 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E234.972\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y114.07 Z0.0 F918.0 E232.818\n"+
"G1 F240.0\n"+
"G1 E232.818\n"+
"G1 F918.0\n"+
";\n"+
"G1 X98.31 Y114.71 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E232.818\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.42 Y130.82 Z0.0 F918.0 E148.908\n"+
"G1 F240.0\n"+
"G1 E148.908\n"+
"G1 F918.0\n"+
";\n"+
"G1 X114.79 Y131.18 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E148.908\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X123.27 Y139.66 Z0.0 F918.0 E78.383\n"+
"G1 F240.0\n"+
"G1 E78.383\n"+
"G1 F918.0\n"+
";\n"+
"G1 X123.03 Y140.07 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E78.383\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.4 Y132.44 Z0.0 F918.0 E70.517\n"+
"G1 F240.0\n"+
"G1 E70.517\n"+
"G1 F918.0\n"+
";\n"+
"G1 X115.48 Y133.15 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E70.517\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X122.8 Y140.47 Z0.0 F918.0 E67.697\n"+
"G1 F240.0\n"+
"G1 E67.697\n"+
"G1 F918.0\n"+
";\n"+
"G1 X122.57 Y140.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E67.697\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.4 Y133.71 Z0.0 F918.0 E66.218\n"+
"G1 F240.0\n"+
"G1 E66.218\n"+
"G1 F918.0\n"+
";\n"+
"G1 X115.25 Y134.19 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E66.218\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X122.33 Y141.28 Z0.0 F918.0 E65.488\n"+
"G1 F240.0\n"+
"G1 E65.488\n"+
"G1 F918.0\n"+
";\n"+
"G1 X122.1 Y141.68 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E65.488\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.03 Y134.61 Z0.0 F918.0 E65.322\n"+
"G1 F240.0\n"+
"G1 E65.322\n"+
"G1 F918.0\n"+
";\n"+
"G1 X114.77 Y134.98 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E65.322\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X121.87 Y142.08 Z0.0 F918.0 E65.655\n"+
"G1 F240.0\n"+
"G1 E65.655\n"+
"G1 F918.0\n"+
";\n"+
"G1 X121.64 Y142.49 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E65.655\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.45 Y135.3 Z0.0 F918.0 E66.44\n"+
"G1 F240.0\n"+
"G1 E66.44\n"+
"G1 F918.0\n"+
";\n"+
"G1 X114.08 Y135.57 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E66.44\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X121.4 Y142.89 Z0.0 F918.0 E67.684\n"+
"G1 F240.0\n"+
"G1 E67.684\n"+
"G1 F918.0\n"+
";\n"+
"G1 X121.17 Y143.29 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E67.684\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.66 Y135.78 Z0.0 F918.0 E69.417\n"+
"G1 F240.0\n"+
"G1 E69.417\n"+
"G1 F918.0\n"+
";\n"+
"G1 X113.18 Y135.94 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E69.417\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.94 Y143.7 Z0.0 F918.0 E71.723\n"+
"G1 F240.0\n"+
"G1 E71.723\n"+
"G1 F918.0\n"+
";\n"+
"G1 X120.7 Y144.1 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E71.723\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.61 Y136.01 Z0.0 F918.0 E74.778\n"+
"G1 F240.0\n"+
"G1 E74.778\n"+
"G1 F918.0\n"+
";\n"+
"G1 X111.91 Y135.94 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E74.778\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.47 Y144.5 Z0.0 F918.0 E79.141\n"+
"G1 F240.0\n"+
"G1 E79.141\n"+
"G1 F918.0\n"+
";\n"+
"G1 X120.24 Y144.91 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E79.141\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.68 Y135.35 Z0.0 F918.0 E88.305\n"+
"G1 F240.0\n"+
"G1 E88.305\n"+
"G1 F918.0\n"+
";\n"+
"G1 X110.25 Y134.92 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E88.305\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y122.98 Z0.0 F918.0 E110.35\n"+
"G1 F240.0\n"+
"G1 E110.35\n"+
"G1 F918.0\n"+
";\n"+
"G1 X98.31 Y122.34 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E110.35\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.66 Y133.7 Z0.0 F918.0 E104.92\n"+
"G1 F240.0\n"+
"G1 E104.92\n"+
"G1 F918.0\n"+
";\n"+
"G1 X109.59 Y132.99 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E104.92\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y121.71 Z0.0 F918.0 E104.282\n"+
"G1 F240.0\n"+
"G1 E104.282\n"+
"G1 F918.0\n"+
";\n"+
"G1 X98.31 Y121.07 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E104.282\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.67 Y132.43 Z0.0 F918.0 E104.957\n"+
"G1 F240.0\n"+
"G1 E104.957\n"+
"G1 F918.0\n"+
";\n"+
"G1 X109.82 Y131.94 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E104.957\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y120.44 Z0.0 F918.0 E106.38\n"+
"G1 F240.0\n"+
"G1 E106.38\n"+
"G1 F918.0\n"+
";\n"+
"G1 X98.31 Y119.8 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E106.38\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.04 Y131.52 Z0.0 F918.0 E108.372\n"+
"G1 F240.0\n"+
"G1 E108.372\n"+
"G1 F918.0\n"+
";\n"+
"G1 X110.3 Y131.16 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E108.372\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y119.16 Z0.0 F918.0 E110.863\n"+
"G1 F240.0\n"+
"G1 E110.863\n"+
"G1 F918.0\n"+
";\n"+
"G1 X98.31 Y118.53 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E110.863\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.62 Y130.84 Z0.0 F918.0 E113.803\n"+
"G1 F240.0\n"+
"G1 E113.803\n"+
"G1 F918.0\n"+
";\n"+
"G1 X110.99 Y130.57 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E113.803\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y117.89 Z0.0 F918.0 E117.195\n"+
"G1 F240.0\n"+
"G1 E117.195\n"+
"G1 F918.0\n"+
";\n"+
"G1 X98.31 Y117.25 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E117.195\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.41 Y130.35 Z0.0 F918.0 E121.096\n"+
"G1 F240.0\n"+
"G1 E121.096\n"+
"G1 F918.0\n"+
";\n"+
"G1 X111.89 Y130.2 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E121.096\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y116.62 Z0.0 F918.0 E125.56\n"+
"G1 F240.0\n"+
"G1 E125.56\n"+
"G1 F918.0\n"+
";\n"+
"G1 X98.31 Y115.98 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E125.56\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.46 Y130.13 Z0.0 F918.0 E130.773\n"+
"G1 F240.0\n"+
"G1 E130.773\n"+
"G1 F918.0\n"+
";\n"+
"G1 X113.17 Y130.2 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E130.773\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y115.34 Z0.0 F918.0 E137.317\n"+
"G1 F240.0\n"+
"G1 E137.317\n"+
"G1 F918.0\n"+
";\n"+
"G1 X98.31 Y123.62 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E137.317\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.0 Y145.31 Z0.0 F918.0 E200.523\n"+
"G1 F240.0\n"+
"G1 E200.523\n"+
"G1 F918.0\n"+
";\n"+
"G1 X119.77 Y145.72 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E200.523\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y124.25 Z0.0 F918.0 E198.369\n"+
"G1 F240.0\n"+
"G1 E198.369\n"+
"G1 F918.0\n"+
";\n"+
"G1 X98.31 Y124.89 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E198.369\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.54 Y146.12 Z0.0 F918.0 E196.215\n"+
"G1 F240.0\n"+
"G1 E196.215\n"+
"G1 F918.0\n"+
";\n"+
"G1 X119.3 Y146.52 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E196.215\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.28 Y139.49 Z0.0 F918.0 E64.98\n"+
"G1 F240.0\n"+
"G1 E64.98\n"+
"G1 F918.0\n"+
";\n"+
"G1 X112.7 Y140.55 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E64.98\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.07 Y146.93 Z0.0 F918.0 E58.884\n"+
"G1 F240.0\n"+
"G1 E58.884\n"+
"G1 F918.0\n"+
";\n"+
"G1 X118.84 Y147.33 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E58.884\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.86 Y141.35 Z0.0 F918.0 E55.233\n"+
"G1 F240.0\n"+
"G1 E55.233\n"+
"G1 F918.0\n"+
";\n"+
"G1 X112.91 Y142.04 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E55.233\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.61 Y147.73 Z0.0 F918.0 E52.663\n"+
"G1 F240.0\n"+
"G1 E52.663\n"+
"G1 F918.0\n"+
";\n"+
"G1 X118.37 Y148.14 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E52.663\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.89 Y142.65 Z0.0 F918.0 E50.708\n"+
"G1 F240.0\n"+
"G1 E50.708\n"+
"G1 F918.0\n"+
";\n"+
"G1 X112.8 Y143.2 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E50.708\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.14 Y148.54 Z0.0 F918.0 E49.359\n"+
"G1 F240.0\n"+
"G1 E49.359\n"+
"G1 F918.0\n"+
";\n"+
"G1 X117.91 Y148.94 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E49.359\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.67 Y143.7 Z0.0 F918.0 E48.435\n"+
"G1 F240.0\n"+
"G1 E48.435\n"+
"G1 F918.0\n"+
";\n"+
"G1 X112.51 Y144.18 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E48.435\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.68 Y149.35 Z0.0 F918.0 E47.718\n"+
"G1 F240.0\n"+
"G1 E47.718\n"+
"G1 F918.0\n"+
";\n"+
"G1 X117.44 Y149.75 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E47.718\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.3 Y144.61 Z0.0 F918.0 E47.506\n"+
"G1 F240.0\n"+
"G1 E47.506\n"+
"G1 F918.0\n"+
";\n"+
"G1 X112.08 Y145.03 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E47.506\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.21 Y150.15 Z0.0 F918.0 E47.381\n"+
"G1 F240.0\n"+
"G1 E47.381\n"+
"G1 F918.0\n"+
";\n"+
"G1 X116.98 Y150.56 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E47.381\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.82 Y145.4 Z0.0 F918.0 E47.7\n"+
"G1 F240.0\n"+
"G1 E47.7\n"+
"G1 F918.0\n"+
";\n"+
"G1 X111.54 Y145.76 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E47.7\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.74 Y150.96 Z0.0 F918.0 E48.093\n"+
"G1 F240.0\n"+
"G1 E48.093\n"+
"G1 F918.0\n"+
";\n"+
"G1 X116.51 Y151.36 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E48.093\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.22 Y146.07 Z0.0 F918.0 E48.883\n"+
"G1 F240.0\n"+
"G1 E48.883\n"+
"G1 F918.0\n"+
";\n"+
"G1 X110.89 Y146.38 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E48.883\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.28 Y151.77 Z0.0 F918.0 E49.756\n"+
"G1 F240.0\n"+
"G1 E49.756\n"+
"G1 F918.0\n"+
";\n"+
"G1 X116.04 Y152.17 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E49.756\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.53 Y146.65 Z0.0 F918.0 E51.004\n"+
"G1 F240.0\n"+
"G1 E51.004\n"+
"G1 F918.0\n"+
";\n"+
"G1 X110.14 Y146.91 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E51.004\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.81 Y152.57 Z0.0 F918.0 E52.381\n"+
"G1 F240.0\n"+
"G1 E52.381\n"+
"G1 F918.0\n"+
";\n"+
"G1 X115.58 Y152.98 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E52.381\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.72 Y147.12 Z0.0 F918.0 E54.133\n"+
"G1 F240.0\n"+
"G1 E54.133\n"+
"G1 F918.0\n"+
";\n"+
"G1 X109.28 Y147.31 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E54.133\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.35 Y153.38 Z0.0 F918.0 E56.088\n"+
"G1 F240.0\n"+
"G1 E56.088\n"+
"G1 F918.0\n"+
";\n"+
"G1 X115.11 Y153.78 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E56.088\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.8 Y147.47 Z0.0 F918.0 E58.38\n"+
"G1 F240.0\n"+
"G1 E58.38\n"+
"G1 F918.0\n"+
";\n"+
"G1 X108.27 Y147.58 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E58.38\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.88 Y154.19 Z0.0 F918.0 E61.088\n"+
"G1 F240.0\n"+
"G1 E61.088\n"+
"G1 F918.0\n"+
";\n"+
"G1 X114.65 Y154.59 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E61.088\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.71 Y147.66 Z0.0 F918.0 E64.093\n"+
"G1 F240.0\n"+
"G1 E64.093\n"+
"G1 F918.0\n"+
";\n"+
"G1 X107.08 Y147.66 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E64.093\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.41 Y154.99 Z0.0 F918.0 E67.818\n"+
"G1 F240.0\n"+
"G1 E67.818\n"+
"G1 F918.0\n"+
";\n"+
"G1 X114.18 Y155.4 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E67.818\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.36 Y147.57 Z0.0 F918.0 E72.337\n"+
"G1 F240.0\n"+
"G1 E72.337\n"+
"G1 F918.0\n"+
";\n"+
"G1 X105.5 Y147.35 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E72.337\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.95 Y155.8 Z0.0 F918.0 E78.124\n"+
"G1 F240.0\n"+
"G1 E78.124\n"+
"G1 F918.0\n"+
";\n"+
"G1 X113.72 Y156.21 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E78.124\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.24 Y146.73 Z0.0 F918.0 E87.561\n"+
"G1 F240.0\n"+
"G1 E87.561\n"+
"G1 F918.0\n"+
";\n"+
"G1 X103.34 Y148.37 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E87.561\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X94.04 Y139.07 Z0.0 F918.0 E85.985\n"+
"G1 F240.0\n"+
"G1 E85.985\n"+
"G1 F918.0\n"+
";\n"+
"G1 X94.27 Y138.67 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E85.985\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.02 Y157.42 Z0.0 F918.0 E173.264\n"+
"G1 F240.0\n"+
"G1 E173.264\n"+
"G1 F918.0\n"+
";\n"+
"G1 X112.78 Y157.82 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E173.264\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.83 Y149.87 Z0.0 F918.0 E73.474\n"+
"G1 F240.0\n"+
"G1 E73.474\n"+
"G1 F918.0\n"+
";\n"+
"G1 X105.07 Y150.74 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E73.474\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.55 Y158.22 Z0.0 F918.0 E69.153\n"+
"G1 F240.0\n"+
"G1 E69.153\n"+
"G1 F918.0\n"+
";\n"+
"G1 X112.32 Y158.63 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E69.153\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.07 Y151.38 Z0.0 F918.0 E66.981\n"+
"G1 F240.0\n"+
"G1 E66.981\n"+
"G1 F918.0\n"+
";\n"+
"G1 X104.96 Y151.91 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E66.981\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.08 Y159.03 Z0.0 F918.0 E65.839\n"+
"G1 F240.0\n"+
"G1 E65.839\n"+
"G1 F918.0\n"+
";\n"+
"G1 X111.85 Y159.43 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E65.839\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.78 Y152.36 Z0.0 F918.0 E65.35\n"+
"G1 F240.0\n"+
"G1 E65.35\n"+
"G1 F918.0\n"+
";\n"+
"G1 X104.54 Y152.76 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E65.35\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.62 Y159.84 Z0.0 F918.0 E65.391\n"+
"G1 F240.0\n"+
"G1 E65.391\n"+
"G1 F918.0\n"+
";\n"+
"G1 X111.39 Y160.24 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E65.391\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.26 Y153.11 Z0.0 F918.0 E65.904\n"+
"G1 F240.0\n"+
"G1 E65.904\n"+
"G1 F918.0\n"+
";\n"+
"G1 X103.92 Y153.41 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E65.904\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.15 Y160.64 Z0.0 F918.0 E66.865\n"+
"G1 F240.0\n"+
"G1 E66.865\n"+
"G1 F918.0\n"+
";\n"+
"G1 X110.92 Y161.05 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E66.865\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.53 Y153.66 Z0.0 F918.0 E68.307\n"+
"G1 F240.0\n"+
"G1 E68.307\n"+
"G1 F918.0\n"+
";\n"+
"G1 X103.08 Y153.85 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E68.307\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.69 Y161.45 Z0.0 F918.0 E70.272\n"+
"G1 F240.0\n"+
"G1 E70.272\n"+
"G1 F918.0\n"+
";\n"+
"G1 X110.45 Y161.85 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E70.272\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.57 Y153.97 Z0.0 F918.0 E72.85\n"+
"G1 F240.0\n"+
"G1 E72.85\n"+
"G1 F918.0\n"+
";\n"+
"G1 X101.97 Y154.0 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E72.85\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.22 Y162.26 Z0.0 F918.0 E76.307\n"+
"G1 F240.0\n"+
"G1 E76.307\n"+
"G1 F918.0\n"+
";\n"+
"G1 X109.99 Y162.66 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E76.307\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.16 Y153.83 Z0.0 F918.0 E81.581\n"+
"G1 F240.0\n"+
"G1 E81.581\n"+
"G1 F918.0\n"+
";\n"+
"G1 X99.37 Y152.05 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E81.581\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X89.48 Y142.15 Z0.0 F918.0 E91.434\n"+
"G1 F240.0\n"+
"G1 E91.434\n"+
"G1 F918.0\n"+
";\n"+
"G1 X89.89 Y141.92 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E91.434\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.21 Y151.24 Z0.0 F918.0 E86.156\n"+
"G1 F240.0\n"+
"G1 E86.156\n"+
"G1 F918.0\n"+
";\n"+
"G1 X99.24 Y150.64 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E86.156\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X90.29 Y141.69 Z0.0 F918.0 E82.708\n"+
"G1 F240.0\n"+
"G1 E82.708\n"+
"G1 F918.0\n"+
";\n"+
"G1 X90.69 Y141.46 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E82.708\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.36 Y150.12 Z0.0 F918.0 E80.12\n"+
"G1 F240.0\n"+
"G1 E80.12\n"+
"G1 F918.0\n"+
";\n"+
"G1 X99.55 Y149.68 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E80.12\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X91.1 Y141.22 Z0.0 F918.0 E78.165\n"+
"G1 F240.0\n"+
"G1 E78.165\n"+
"G1 F918.0\n"+
";\n"+
"G1 X91.5 Y140.99 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E78.165\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.8 Y149.29 Z0.0 F918.0 E76.723\n"+
"G1 F240.0\n"+
"G1 E76.723\n"+
"G1 F918.0\n"+
";\n"+
"G1 X100.1 Y148.95 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E76.723\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X91.9 Y140.76 Z0.0 F918.0 E75.757\n"+
"G1 F240.0\n"+
"G1 E75.757\n"+
"G1 F918.0\n"+
";\n"+
"G1 X92.31 Y140.53 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E75.757\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.45 Y148.67 Z0.0 F918.0 E75.244\n"+
"G1 F240.0\n"+
"G1 E75.244\n"+
"G1 F918.0\n"+
";\n"+
"G1 X100.85 Y148.43 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E75.244\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X92.71 Y140.29 Z0.0 F918.0 E75.203\n"+
"G1 F240.0\n"+
"G1 E75.203\n"+
"G1 F918.0\n"+
";\n"+
"G1 X93.11 Y140.06 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E75.203\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.3 Y148.25 Z0.0 F918.0 E75.693\n"+
"G1 F240.0\n"+
"G1 E75.693\n"+
"G1 F918.0\n"+
";\n"+
"G1 X101.83 Y148.14 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E75.693\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X93.52 Y139.83 Z0.0 F918.0 E76.839\n"+
"G1 F240.0\n"+
"G1 E76.839\n"+
"G1 F918.0\n"+
";\n"+
"G1 X93.8 Y139.47 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E76.839\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.47 Y148.14 Z0.0 F918.0 E80.12\n"+
"G1 F240.0\n"+
"G1 E80.12\n"+
"G1 F918.0\n"+
";\n"+
"G1 X102.67 Y145.16 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E80.12\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X94.98 Y137.47 Z0.0 F918.0 E71.154\n"+
"G1 F240.0\n"+
"G1 E71.154\n"+
"G1 F918.0\n"+
";\n"+
"G1 X94.74 Y137.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E71.154\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.48 Y156.61 Z0.0 F918.0 E173.227\n"+
"G1 F240.0\n"+
"G1 E173.227\n"+
"G1 F918.0\n"+
";\n"+
"G1 X113.25 Y157.01 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E173.227\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X94.51 Y138.27 Z0.0 F918.0 E173.246\n"+
"G1 F240.0\n"+
"G1 E173.246\n"+
"G1 F918.0\n"+
";\n"+
"G1 X95.21 Y137.06 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E173.246\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.06 Y143.91 Z0.0 F918.0 E63.284\n"+
"G1 F240.0\n"+
"G1 E63.284\n"+
"G1 F918.0\n"+
";\n"+
"G1 X101.83 Y143.05 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E63.284\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X95.45 Y136.66 Z0.0 F918.0 E59.05\n"+
"G1 F240.0\n"+
"G1 E59.05\n"+
"G1 F918.0\n"+
";\n"+
"G1 X95.68 Y136.26 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E59.05\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.75 Y142.33 Z0.0 F918.0 E56.097\n"+
"G1 F240.0\n"+
"G1 E56.097\n"+
"G1 F918.0\n"+
";\n"+
"G1 X101.75 Y141.69 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E56.097\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X95.92 Y135.86 Z0.0 F918.0 E53.925\n"+
"G1 F240.0\n"+
"G1 E53.925\n"+
"G1 F918.0\n"+
";\n"+
"G1 X96.15 Y135.46 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E53.925\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.83 Y141.14 Z0.0 F918.0 E52.483\n"+
"G1 F240.0\n"+
"G1 E52.483\n"+
"G1 F918.0\n"+
";\n"+
"G1 X101.94 Y140.61 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E52.483\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X96.39 Y135.06 Z0.0 F918.0 E51.332\n"+
"G1 F240.0\n"+
"G1 E51.332\n"+
"G1 F918.0\n"+
";\n"+
"G1 X96.62 Y134.65 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E51.332\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.09 Y140.13 Z0.0 F918.0 E50.602\n"+
"G1 F240.0\n"+
"G1 E50.602\n"+
"G1 F918.0\n"+
";\n"+
"G1 X102.29 Y139.68 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E50.602\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X96.85 Y134.25 Z0.0 F918.0 E50.2\n"+
"G1 F240.0\n"+
"G1 E50.2\n"+
"G1 F918.0\n"+
";\n"+
"G1 X97.09 Y133.85 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E50.2\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.5 Y139.26 Z0.0 F918.0 E50.01\n"+
"G1 F240.0\n"+
"G1 E50.01\n"+
"G1 F918.0\n"+
";\n"+
"G1 X102.75 Y138.88 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E50.01\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X97.32 Y133.45 Z0.0 F918.0 E50.191\n"+
"G1 F240.0\n"+
"G1 E50.191\n"+
"G1 F918.0\n"+
";\n"+
"G1 X97.56 Y133.05 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E50.191\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.02 Y138.51 Z0.0 F918.0 E50.496\n"+
"G1 F240.0\n"+
"G1 E50.496\n"+
"G1 F918.0\n"+
";\n"+
"G1 X103.33 Y138.18 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E50.496\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X97.79 Y132.65 Z0.0 F918.0 E51.18\n"+
"G1 F240.0\n"+
"G1 E51.18\n"+
"G1 F918.0\n"+
";\n"+
"G1 X98.03 Y132.25 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E51.18\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.65 Y137.87 Z0.0 F918.0 E51.952\n"+
"G1 F240.0\n"+
"G1 E51.952\n"+
"G1 F918.0\n"+
";\n"+
"G1 X104.01 Y137.59 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E51.952\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.26 Y131.84 Z0.0 F918.0 E53.116\n"+
"G1 F240.0\n"+
"G1 E53.116\n"+
"G1 F918.0\n"+
";\n"+
"G1 X98.31 Y131.25 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E53.116\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.38 Y137.32 Z0.0 F918.0 E56.097\n"+
"G1 F240.0\n"+
"G1 E56.097\n"+
"G1 F918.0\n"+
";\n"+
"G1 X104.8 Y137.1 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E56.097\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y130.62 Z0.0 F918.0 E59.956\n"+
"G1 F240.0\n"+
"G1 E59.956\n"+
"G1 F918.0\n"+
";\n"+
"G1 X98.31 Y129.98 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E59.956\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.22 Y136.89 Z0.0 F918.0 E63.889\n"+
"G1 F240.0\n"+
"G1 E63.889\n"+
"G1 F918.0\n"+
";\n"+
"G1 X105.7 Y136.74 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E63.889\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y129.35 Z0.0 F918.0 E68.335\n"+
"G1 F240.0\n"+
"G1 E68.335\n"+
"G1 F918.0\n"+
";\n"+
"G1 X98.31 Y128.71 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E68.335\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.21 Y136.6 Z0.0 F918.0 E72.994\n"+
"G1 F240.0\n"+
"G1 E72.994\n"+
"G1 F918.0\n"+
";\n"+
"G1 X106.76 Y136.52 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E72.994\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y128.07 Z0.0 F918.0 E78.064\n"+
"G1 F240.0\n"+
"G1 E78.064\n"+
"G1 F918.0\n"+
";\n"+
"G1 X98.31 Y127.44 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E78.064\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.37 Y136.5 Z0.0 F918.0 E83.753\n"+
"G1 F240.0\n"+
"G1 E83.753\n"+
"G1 F918.0\n"+
";\n"+
"G1 X108.05 Y136.54 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E83.753\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y126.8 Z0.0 F918.0 E90.052\n"+
"G1 F240.0\n"+
"G1 E90.052\n"+
"G1 F918.0\n"+
";\n"+
"G1 X98.31 Y126.16 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E90.052\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.85 Y136.7 Z0.0 F918.0 E97.437\n"+
"G1 F240.0\n"+
"G1 E97.437\n"+
"G1 F918.0\n"+
";\n"+
"G1 X109.92 Y137.13 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E97.437\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y125.53 Z0.0 F918.0 E107.263\n"+
"G1 F240.0\n"+
"G1 E107.263\n"+
"G1 F918.0\n"+
";\n"+
"G1 X98.09 Y131.71 Z0.0 F3000.0\n"+
"G1 X93.48 Y139.6 Z0.0 F3000.0\n"+
"G1 X89.08 Y142.39 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E107.263\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.69 Y163.0 Z0.0 F918.0 E190.508\n"+
"G1 F240.0\n"+
"G1 E190.508\n"+
"G1 F918.0\n"+
";\n"+
"G1 X109.29 Y163.23 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.508\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.68 Y142.62 Z0.0 F918.0 E190.503\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F918.0\n"+
";\n"+
"G1 X88.27 Y142.85 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.88 Y163.46 Z0.0 F918.0 E190.508\n"+
"G1 F240.0\n"+
"G1 E190.508\n"+
"G1 F918.0\n"+
";\n"+
"G1 X108.48 Y163.7 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.508\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.87 Y143.09 Z0.0 F918.0 E190.503\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F918.0\n"+
";\n"+
"G1 X87.47 Y143.32 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.08 Y163.93 Z0.0 F918.0 E190.503\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F918.0\n"+
";\n"+
"G1 X107.67 Y164.16 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.06 Y143.55 Z0.0 F918.0 E190.503\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F918.0\n"+
";\n"+
"G1 X86.66 Y143.79 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.27 Y164.4 Z0.0 F918.0 E190.503\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F918.0\n"+
";\n"+
"G1 X106.86 Y164.63 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X86.26 Y144.02 Z0.0 F918.0 E190.498\n"+
"G1 F240.0\n"+
"G1 E190.498\n"+
"G1 F918.0\n"+
";\n"+
"G1 X85.85 Y144.25 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.498\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.46 Y164.86 Z0.0 F918.0 E190.508\n"+
"G1 F240.0\n"+
"G1 E190.508\n"+
"G1 F918.0";

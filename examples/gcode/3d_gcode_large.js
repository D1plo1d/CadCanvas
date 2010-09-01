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
"G1 F918.0\n"+
";\n"+
"G1 X106.06 Y165.1 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.508\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X85.45 Y144.48 Z0.0 F918.0 E190.508\n"+
"G1 F240.0\n"+
"G1 E190.508\n"+
"G1 F918.0\n"+
";\n"+
"G1 X85.05 Y144.72 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.508\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.66 Y165.33 Z0.0 F918.0 E190.503\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F918.0\n"+
";\n"+
"G1 X105.25 Y165.56 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X84.64 Y144.95 Z0.0 F918.0 E190.503\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F918.0\n"+
";\n"+
"G1 X84.24 Y145.18 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.85 Y165.79 Z0.0 F918.0 E190.503\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F918.0\n"+
";\n"+
"G1 X104.44 Y166.03 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X83.83 Y145.42 Z0.0 F918.0 E190.503\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F918.0\n"+
";\n"+
"G1 X83.43 Y145.65 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.04 Y166.26 Z0.0 F918.0 E190.503\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F918.0\n"+
";\n"+
"G1 X103.64 Y166.49 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X83.03 Y145.88 Z0.0 F918.0 E190.508\n"+
"G1 F240.0\n"+
"G1 E190.508\n"+
"G1 F918.0\n"+
";\n"+
"G1 X82.62 Y146.12 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.508\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.23 Y166.73 Z0.0 F918.0 E190.498\n"+
"G1 F240.0\n"+
"G1 E190.498\n"+
"G1 F918.0\n"+
";\n"+
"G1 X102.83 Y166.96 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.498\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X82.22 Y146.35 Z0.0 F918.0 E190.503\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F918.0\n"+
";\n"+
"G1 X81.82 Y146.58 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.43 Y167.19 Z0.0 F918.0 E190.503\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F918.0\n"+
";\n"+
"G1 X102.02 Y167.42 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X81.41 Y146.81 Z0.0 F918.0 E190.508\n"+
"G1 F240.0\n"+
"G1 E190.508\n"+
"G1 F918.0\n"+
";\n"+
"G1 X81.01 Y147.05 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.508\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.62 Y167.66 Z0.0 F918.0 E190.503\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F918.0\n"+
";\n"+
"G1 X101.22 Y167.89 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X80.61 Y147.28 Z0.0 F918.0 E190.508\n"+
"G1 F240.0\n"+
"G1 E190.508\n"+
"G1 F918.0\n"+
";\n"+
"G1 X80.2 Y147.51 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.508\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.81 Y168.12 Z0.0 F918.0 E190.508\n"+
"G1 F240.0\n"+
"G1 E190.508\n"+
"G1 F918.0\n"+
";\n"+
"G1 X100.41 Y168.36 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.508\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.8 Y147.75 Z0.0 F918.0 E190.508\n"+
"G1 F240.0\n"+
"G1 E190.508\n"+
"G1 F918.0\n"+
";\n"+
"G1 X79.4 Y147.98 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.508\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.01 Y168.59 Z0.0 F918.0 E190.508\n"+
"G1 F240.0\n"+
"G1 E190.508\n"+
"G1 F918.0\n"+
";\n"+
"G1 X99.6 Y168.82 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.508\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X78.99 Y148.21 Z0.0 F918.0 E190.494\n"+
"G1 F240.0\n"+
"G1 E190.494\n"+
"G1 F918.0\n"+
";\n"+
"G1 X78.59 Y148.44 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.494\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.2 Y169.05 Z0.0 F918.0 E190.503\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F918.0\n"+
";\n"+
"G1 X98.8 Y169.29 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X78.19 Y148.68 Z0.0 F918.0 E190.503\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F918.0\n"+
";\n"+
"G1 X77.78 Y148.91 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E190.503\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X85.92 Y157.05 Z0.0 F918.0 E75.212\n"+
"G1 F240.0\n"+
"G1 E75.212\n"+
"G1 F918.0\n"+
";\n"+
"G1 X84.85 Y156.62 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E75.212\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.38 Y149.14 Z0.0 F918.0 E69.098\n"+
"G1 F240.0\n"+
"G1 E69.098\n"+
"G1 F918.0\n"+
";\n"+
"G1 X76.97 Y149.38 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E69.098\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X84.06 Y156.46 Z0.0 F918.0 E65.442\n"+
"G1 F240.0\n"+
"G1 E65.442\n"+
"G1 F918.0\n"+
";\n"+
"G1 X83.37 Y156.41 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E65.442\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X76.57 Y149.61 Z0.0 F918.0 E62.863\n"+
"G1 F240.0\n"+
"G1 E62.863\n"+
"G1 F918.0\n"+
";\n"+
"G1 X76.32 Y149.99 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E62.863\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X82.76 Y156.43 Z0.0 F918.0 E59.513\n"+
"G1 F240.0\n"+
"G1 E59.513\n"+
"G1 F918.0\n"+
";\n"+
"G1 X82.21 Y156.52 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E59.513\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X76.18 Y150.49 Z0.0 F918.0 E55.723\n"+
"G1 F240.0\n"+
"G1 E55.723\n"+
"G1 F918.0\n"+
";\n"+
"G1 X76.04 Y150.99 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E55.723\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X81.7 Y156.65 Z0.0 F918.0 E52.367\n"+
"G1 F240.0\n"+
"G1 E52.367\n"+
"G1 F918.0\n"+
";\n"+
"G1 X81.22 Y156.81 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E52.367\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.9 Y151.48 Z0.0 F918.0 E49.225\n"+
"G1 F240.0\n"+
"G1 E49.225\n"+
"G1 F918.0\n"+
";\n"+
"G1 X75.76 Y151.98 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E49.225\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X80.8 Y157.02 Z0.0 F918.0 E46.567\n"+
"G1 F240.0\n"+
"G1 E46.567\n"+
"G1 F918.0\n"+
";\n"+
"G1 X80.38 Y157.24 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E46.567\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.62 Y152.48 Z0.0 F918.0 E43.998\n"+
"G1 F240.0\n"+
"G1 E43.998\n"+
"G1 F918.0\n"+
";\n"+
"G1 X75.48 Y152.97 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E43.998\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X80.01 Y157.5 Z0.0 F918.0 E41.886\n"+
"G1 F240.0\n"+
"G1 E41.886\n"+
"G1 F918.0\n"+
";\n"+
"G1 X79.65 Y157.78 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E41.886\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.34 Y153.47 Z0.0 F918.0 E39.838\n"+
"G1 F240.0\n"+
"G1 E39.838\n"+
"G1 F918.0\n"+
";\n"+
"G1 X75.2 Y153.97 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E39.838\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.33 Y158.1 Z0.0 F918.0 E38.184\n"+
"G1 F240.0\n"+
"G1 E38.184\n"+
"G1 F918.0\n"+
";\n"+
"G1 X79.02 Y158.42 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E38.184\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.06 Y154.46 Z0.0 F918.0 E36.612\n"+
"G1 F240.0\n"+
"G1 E36.612\n"+
"G1 F918.0\n"+
";\n"+
"G1 X74.92 Y154.96 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E36.612\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X78.76 Y158.79 Z0.0 F918.0 E35.434\n"+
"G1 F240.0\n"+
"G1 E35.434\n"+
"G1 F918.0\n"+
";\n"+
"G1 X78.5 Y159.17 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E35.434\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X74.78 Y155.46 Z0.0 F918.0 E34.38\n"+
"G1 F240.0\n"+
"G1 E34.38\n"+
"G1 F918.0\n"+
";\n"+
"G1 X74.64 Y155.95 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E34.38\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X78.29 Y159.6 Z0.0 F918.0 E33.687\n"+
"G1 F240.0\n"+
"G1 E33.687\n"+
"G1 F918.0\n"+
";\n"+
"G1 X78.1 Y160.04 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E33.687\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X74.5 Y156.45 Z0.0 F918.0 E33.211\n"+
"G1 F240.0\n"+
"G1 E33.211\n"+
"G1 F918.0\n"+
";\n"+
"G1 X74.36 Y156.95 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E33.211\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.94 Y160.52 Z0.0 F918.0 E33.063\n"+
"G1 F240.0\n"+
"G1 E33.063\n"+
"G1 F918.0\n"+
";\n"+
"G1 X77.83 Y161.05 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E33.063\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X74.22 Y157.44 Z0.0 F918.0 E33.34\n"+
"G1 F240.0\n"+
"G1 E33.34\n"+
"G1 F918.0\n"+
";\n"+
"G1 X74.08 Y157.94 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E33.34\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.75 Y161.6 Z0.0 F918.0 E33.895\n"+
"G1 F240.0\n"+
"G1 E33.895\n"+
"G1 F918.0\n"+
";\n"+
"G1 X77.75 Y162.24 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E33.895\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.94 Y158.44 Z0.0 F918.0 E35.18\n"+
"G1 F240.0\n"+
"G1 E35.18\n"+
"G1 F918.0\n"+
";\n"+
"G1 X73.8 Y158.93 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E35.18\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.83 Y162.96 Z0.0 F918.0 E37.255\n"+
"G1 F240.0\n"+
"G1 E37.255\n"+
"G1 F918.0\n"+
";\n"+
"G1 X78.06 Y163.82 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E37.255\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.66 Y159.43 Z0.0 F918.0 E40.605\n"+
"G1 F240.0\n"+
"G1 E40.605\n"+
"G1 F918.0\n"+
";\n"+
"G1 X73.52 Y159.92 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E40.605\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X78.67 Y165.07 Z0.0 F918.0 E47.584\n"+
"G1 F240.0\n"+
"G1 E47.584\n"+
"G1 F918.0\n"+
";\n"+
"G1 X80.25 Y166.65 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E47.584\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X86.66 Y173.07 Z0.0 F918.0 E59.323\n"+
"G1 F240.0\n"+
"G1 E59.323\n"+
"G1 F918.0\n"+
";\n"+
"G1 X87.53 Y173.3 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E59.323\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X81.5 Y167.26 Z0.0 F918.0 E55.792\n"+
"G1 F240.0\n"+
"G1 E55.792\n"+
"G1 F918.0\n"+
";\n"+
"G1 X82.36 Y167.49 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E55.792\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.4 Y173.53 Z0.0 F918.0 E55.875\n"+
"G1 F240.0\n"+
"G1 E55.875\n"+
"G1 F918.0\n"+
";\n"+
"G1 X89.27 Y173.76 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E55.875\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X83.08 Y167.57 Z0.0 F918.0 E57.253\n"+
"G1 F240.0\n"+
"G1 E57.253\n"+
"G1 F918.0\n"+
";\n"+
"G1 X83.71 Y167.57 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E57.253\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X90.14 Y174.0 Z0.0 F918.0 E59.406\n"+
"G1 F240.0\n"+
"G1 E59.406\n"+
"G1 F918.0\n"+
";\n"+
"G1 X90.73 Y173.95 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E59.406\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X84.27 Y167.49 Z0.0 F918.0 E59.67\n"+
"G1 F240.0\n"+
"G1 E59.67\n"+
"G1 F918.0\n"+
";\n"+
"G1 X84.8 Y167.38 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E59.67\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X91.13 Y173.71 Z0.0 F918.0 E58.537\n"+
"G1 F240.0\n"+
"G1 E58.537\n"+
"G1 F918.0\n"+
";\n"+
"G1 X91.53 Y173.48 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E58.537\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X85.28 Y167.22 Z0.0 F918.0 E57.826\n"+
"G1 F240.0\n"+
"G1 E57.826\n"+
"G1 F918.0\n"+
";\n"+
"G1 X85.72 Y167.03 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E57.826\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X91.94 Y173.25 Z0.0 F918.0 E57.437\n"+
"G1 F240.0\n"+
"G1 E57.437\n"+
"G1 F918.0\n"+
";\n"+
"G1 X92.34 Y173.01 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E57.437\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X86.15 Y166.82 Z0.0 F918.0 E57.266\n"+
"G1 F240.0\n"+
"G1 E57.266\n"+
"G1 F918.0\n"+
";\n"+
"G1 X86.53 Y166.56 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E57.266\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X92.74 Y172.78 Z0.0 F918.0 E57.465\n"+
"G1 F240.0\n"+
"G1 E57.465\n"+
"G1 F918.0\n"+
";\n"+
"G1 X93.15 Y172.55 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E57.465\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X86.9 Y166.3 Z0.0 F918.0 E57.784\n"+
"G1 F240.0\n"+
"G1 E57.784\n"+
"G1 F918.0\n"+
";\n"+
"G1 X87.22 Y165.99 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E57.784\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X93.55 Y172.32 Z0.0 F918.0 E58.491\n"+
"G1 F240.0\n"+
"G1 E58.491\n"+
"G1 F918.0\n"+
";\n"+
"G1 X93.95 Y172.08 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E58.491\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.54 Y165.67 Z0.0 F918.0 E59.277\n"+
"G1 F240.0\n"+
"G1 E59.277\n"+
"G1 F918.0\n"+
";\n"+
"G1 X87.82 Y165.31 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E59.277\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X94.36 Y171.85 Z0.0 F918.0 E60.474\n"+
"G1 F240.0\n"+
"G1 E60.474\n"+
"G1 F918.0\n"+
";\n"+
"G1 X94.76 Y171.62 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E60.474\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.08 Y164.94 Z0.0 F918.0 E61.722\n"+
"G1 F240.0\n"+
"G1 E61.722\n"+
"G1 F918.0\n"+
";\n"+
"G1 X88.3 Y164.52 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E61.722\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X95.17 Y171.38 Z0.0 F918.0 E63.436\n"+
"G1 F240.0\n"+
"G1 E63.436\n"+
"G1 F918.0\n"+
";\n"+
"G1 X95.57 Y171.15 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E63.436\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.51 Y164.09 Z0.0 F918.0 E65.225\n"+
"G1 F240.0\n"+
"G1 E65.225\n"+
"G1 F918.0\n"+
";\n"+
"G1 X88.67 Y163.62 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E65.225\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X95.97 Y170.92 Z0.0 F918.0 E67.503\n"+
"G1 F240.0\n"+
"G1 E67.503\n"+
"G1 F918.0\n"+
";\n"+
"G1 X96.38 Y170.69 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E67.503\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.8 Y163.11 Z0.0 F918.0 E70.008\n"+
"G1 F240.0\n"+
"G1 E70.008\n"+
"G1 F918.0\n"+
";\n"+
"G1 X88.89 Y162.56 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E70.008\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X96.78 Y170.45 Z0.0 F918.0 E72.934\n"+
"G1 F240.0\n"+
"G1 E72.934\n"+
"G1 F918.0\n"+
";\n"+
"G1 X97.18 Y170.22 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E72.934\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.91 Y161.95 Z0.0 F918.0 E76.469\n"+
"G1 F240.0\n"+
"G1 E76.469\n"+
"G1 F918.0\n"+
";\n"+
"G1 X88.86 Y161.26 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E76.469\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X97.59 Y169.99 Z0.0 F918.0 E80.615\n"+
"G1 F240.0\n"+
"G1 E80.615\n"+
"G1 F918.0\n"+
";\n"+
"G1 X97.99 Y169.75 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E80.615\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.7 Y160.47 Z0.0 F918.0 E85.851\n"+
"G1 F240.0\n"+
"G1 E85.851\n"+
"G1 F918.0\n"+
";\n"+
"G1 X88.27 Y159.4 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E85.851\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.39 Y169.52 Z0.0 F918.0 E93.551\n"+
"G1 F240.0\n"+
"G1 E93.551\n"+
"G1 F918.0\n"+
";\n"+
"G1 X85.8 Y172.83 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E93.551\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.38 Y160.42 Z0.0 F918.0 E114.722\n"+
"G1 F240.0\n"+
"G1 E114.722\n"+
"G1 F918.0\n"+
";\n"+
"G1 X73.24 Y160.92 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E114.722\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X84.93 Y172.6 Z0.0 F918.0 E107.975\n"+
"G1 F240.0\n"+
"G1 E107.975\n"+
"G1 F918.0\n"+
";\n"+
"G1 X84.06 Y172.37 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E107.975\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.6 Y161.91 Z0.0 F918.0 E96.684\n"+
"G1 F240.0\n"+
"G1 E96.684\n"+
"G1 F918.0\n"+
";\n"+
"G1 X74.47 Y163.41 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E96.684\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X83.19 Y172.13 Z0.0 F918.0 E80.615\n"+
"G1 F240.0\n"+
"G1 E80.615\n"+
"G1 F918.0\n"+
";\n"+
"G1 X82.32 Y171.9 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E80.615\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.33 Y164.92 Z0.0 F918.0 E64.545\n"+
"G1 F240.0\n"+
"G1 E64.545\n"+
"G1 F918.0\n"+
";\n"+
"G1 X76.2 Y166.42 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E64.545\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X81.45 Y171.67 Z0.0 F918.0 E48.471\n"+
"G1 F240.0\n"+
"G1 E48.471\n"+
"G1 F918.0\n"+
";\n"+
"G1 X80.58 Y171.44 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E48.471\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.07 Y167.93 Z0.0 F918.0 E32.407\n"+
"G1 F240.0\n"+
"G1 E32.407\n"+
"G1 F918.0\n"+
";\n"+
"G1 X77.94 Y169.44 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E32.407\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.71 Y171.2 Z0.0 F918.0 E16.337\n"+
"G1 F240.0\n"+
"G1 E16.337\n"+
"G1 F918.0\n"+
";\n"+
"G1 X87.91 Y164.8 Z0.0 F3000.0\n"+
"G1 X88.3 Y164.05 Z0.0 F3000.0\n"+
"G1 X88.56 Y163.25 Z0.0 F3000.0\n"+
"G1 X88.69 Y162.41 Z0.0 F3000.0\n"+
"G1 X88.69 Y161.57 Z0.0 F3000.0\n"+
"G1 X88.56 Y160.73 Z0.0 F3000.0\n"+
"G1 X88.3 Y159.93 Z0.0 F3000.0\n"+
"G1 X87.91 Y159.18 Z0.0 F3000.0\n"+
"G1 X87.42 Y158.5 Z0.0 F3000.0\n"+
"G1 X86.82 Y157.9 Z0.0 F3000.0\n"+
"G1 X86.14 Y157.4 Z0.0 F3000.0\n"+
"G1 X85.69 Y157.17 Z0.0 F3000.0\n"+
"G1 X94.26 Y138.26 Z0.0 F3000.0\n"+
"G1 X98.09 Y131.71 Z0.0 F3000.0\n"+
"G1 X109.02 Y101.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E16.337\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y98.46 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X105.61 Y97.83 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y101.24 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X109.02 Y100.6 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y97.19 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X105.61 Y96.55 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y99.96 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X109.02 Y99.33 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y95.92 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X105.61 Y95.28 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y98.69 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X109.02 Y98.05 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y94.64 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X105.61 Y94.01 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y97.42 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X109.02 Y96.78 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y93.37 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X105.61 Y92.73 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y96.14 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X109.02 Y95.51 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y92.1 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X105.61 Y91.46 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y94.87 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X109.02 Y94.24 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y90.83 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X105.61 Y90.19 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y93.6 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X109.02 Y92.96 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y89.55 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X105.61 Y88.92 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y92.33 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X109.02 Y91.69 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.11 Y86.78 Z0.0 F918.0 E45.384\n"+
"G1 F240.0\n"+
"G1 E45.384\n"+
"G1 F918.0\n"+
";\n"+
"G1 X104.11 Y87.42 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E45.384\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.98 Y88.28 Z0.0 F918.0 E8.009\n"+
"G1 F240.0\n"+
"G1 E8.009\n"+
"G1 F918.0\n"+
";\n"+
"G1 X104.34 Y88.28 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E8.009\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.11 Y88.05 Z0.0 F918.0 E2.135\n"+
"G1 F240.0\n"+
"G1 E2.135\n"+
"G1 F918.0\n"+
";\n"+
"G1 X104.11 Y86.14 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E2.135\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y91.05 Z0.0 F918.0 E45.384\n"+
"G1 F240.0\n"+
"G1 E45.384\n"+
"G1 F918.0\n"+
";\n"+
"G1 X109.02 Y90.42 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E45.384\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.48 Y85.87 Z0.0 F918.0 E42.001\n"+
"G1 F240.0\n"+
"G1 E42.001\n"+
"G1 F918.0\n"+
";\n"+
"G1 X105.11 Y85.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E42.001\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y89.78 Z0.0 F918.0 E36.123\n"+
"G1 F240.0\n"+
"G1 E36.123\n"+
"G1 F918.0\n"+
";\n"+
"G1 X109.02 Y89.14 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E36.123\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.75 Y85.87 Z0.0 F918.0 E30.235\n"+
"G1 F240.0\n"+
"G1 E30.235\n"+
"G1 F918.0\n"+
";\n"+
"G1 X106.39 Y85.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E30.235\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y88.51 Z0.0 F918.0 E24.356\n"+
"G1 F240.0\n"+
"G1 E24.356\n"+
"G1 F918.0\n"+
";\n"+
"G1 X109.43 Y88.28 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E24.356\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.02 Y85.87 Z0.0 F918.0 E22.276\n"+
"G1 F240.0\n"+
"G1 E22.276\n"+
"G1 F918.0\n"+
";\n"+
"G1 X107.66 Y85.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E22.276\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.07 Y88.28 Z0.0 F918.0 E22.276\n"+
"G1 F240.0\n"+
"G1 E22.276\n"+
"G1 F918.0\n"+
";\n"+
"G1 X110.71 Y88.28 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E22.276\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.3 Y85.87 Z0.0 F918.0 E22.276\n"+
"G1 F240.0\n"+
"G1 E22.276\n"+
"G1 F918.0\n"+
";\n"+
"G1 X108.93 Y85.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E22.276\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.34 Y88.28 Z0.0 F918.0 E22.276\n"+
"G1 F240.0\n"+
"G1 E22.276\n"+
"G1 F918.0\n"+
";\n"+
"G1 X111.98 Y88.28 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E22.276\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.57 Y85.87 Z0.0 F918.0 E22.272\n"+
"G1 F240.0\n"+
"G1 E22.272\n"+
"G1 F918.0\n"+
";\n"+
"G1 X110.21 Y85.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E22.272\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.61 Y88.28 Z0.0 F918.0 E22.272\n"+
"G1 F240.0\n"+
"G1 E22.272\n"+
"G1 F918.0\n"+
";\n"+
"G1 X113.25 Y88.28 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E22.272\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.84 Y85.87 Z0.0 F918.0 E22.281\n"+
"G1 F240.0\n"+
"G1 E22.281\n"+
"G1 F918.0\n"+
";\n"+
"G1 X111.48 Y85.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E22.281\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.89 Y88.28 Z0.0 F918.0 E22.276\n"+
"G1 F240.0\n"+
"G1 E22.276\n"+
"G1 F918.0\n"+
";\n"+
"G1 X114.52 Y88.28 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E22.276\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.11 Y85.87 Z0.0 F918.0 E22.276\n"+
"G1 F240.0\n"+
"G1 E22.276\n"+
"G1 F918.0\n"+
";\n"+
"G1 X112.75 Y85.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E22.276\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.16 Y88.28 Z0.0 F918.0 E22.276\n"+
"G1 F240.0\n"+
"G1 E22.276\n"+
"G1 F918.0\n"+
";\n"+
"G1 X119.02 Y92.14 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E22.276\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y88.73 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X115.61 Y89.37 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y92.78 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X119.02 Y93.42 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y90.01 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X115.61 Y90.64 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y94.05 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X119.02 Y94.69 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y91.28 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X115.61 Y91.92 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y95.33 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X119.02 Y95.96 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y92.55 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X115.61 Y93.19 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y96.6 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X119.02 Y97.24 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y93.83 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X115.61 Y94.46 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y97.87 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X119.02 Y98.51 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y95.1 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X115.61 Y95.73 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y99.14 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X119.02 Y99.78 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y96.37 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X115.61 Y97.01 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y100.42 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X119.02 Y101.05 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y97.64 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X115.61 Y98.28 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y101.69 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X119.02 Y102.33 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y98.92 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X115.61 Y99.55 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y102.96 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X119.02 Y103.6 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y100.19 Z0.0 F918.0 E31.519\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F918.0\n"+
";\n"+
"G1 X119.02 Y91.51 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E31.519\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.39 Y85.87 Z0.0 F918.0 E52.076\n"+
"G1 F240.0\n"+
"G1 E52.076\n"+
"G1 F918.0\n"+
";\n"+
"G1 X114.02 Y85.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E52.076\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y90.87 Z0.0 F918.0 E46.198\n"+
"G1 F240.0\n"+
"G1 E46.198\n"+
"G1 F918.0\n"+
";\n"+
"G1 X119.02 Y90.24 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E46.198\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.66 Y85.87 Z0.0 F918.0 E40.319\n"+
"G1 F240.0\n"+
"G1 E40.319\n"+
"G1 F918.0\n"+
";\n"+
"G1 X115.3 Y85.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E40.319\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y89.6 Z0.0 F918.0 E34.431\n"+
"G1 F240.0\n"+
"G1 E34.431\n"+
"G1 F918.0\n"+
";\n"+
"G1 X119.02 Y88.96 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E34.431\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.93 Y85.87 Z0.0 F918.0 E28.552\n"+
"G1 F240.0\n"+
"G1 E28.552\n"+
"G1 F918.0\n"+
";\n"+
"G1 X116.57 Y85.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E28.552\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y88.33 Z0.0 F918.0 E22.664\n"+
"G1 F240.0\n"+
"G1 E22.664\n"+
"G1 F918.0\n"+
";\n"+
"G1 X119.61 Y88.28 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E22.664\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.21 Y85.87 Z0.0 F918.0 E22.272\n"+
"G1 F240.0\n"+
"G1 E22.272\n"+
"G1 F918.0\n"+
";\n"+
"G1 X117.84 Y85.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E22.272\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.25 Y88.28 Z0.0 F918.0 E22.281\n"+
"G1 F240.0\n"+
"G1 E22.281\n"+
"G1 F918.0\n"+
";\n"+
"G1 X120.52 Y87.92 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E22.281\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.48 Y85.87 Z0.0 F918.0 E18.889\n"+
"G1 F240.0\n"+
"G1 E18.889\n"+
"G1 F918.0\n"+
";\n"+
"G1 X119.11 Y85.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E18.889\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.52 Y87.28 Z0.0 F918.0 E13.005\n"+
"G1 F240.0\n"+
"G1 E13.005\n"+
"G1 F918.0\n"+
";\n"+
"G1 X120.52 Y86.64 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E13.005\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.75 Y85.87 Z0.0 F918.0 E7.117\n"+
"G1 F240.0\n"+
"G1 E7.117\n"+
"G1 F918.0\n"+
";\n"+
"G1 X120.39 Y85.87 Z0.0 F2550.0\n"+
"G1 F240.0\n"+
"G1 E7.117\n"+
"G1 F2550.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.52 Y86.01 Z0.0 F918.0 E1.239\n"+
"G1 F240.0\n"+
"G1 E1.239\n"+
"G1 F918.0\n"+
";\n"+
"(</surroundingLoop>)\n"+
"G1 F30.0\n"+
"(<layer> 0.3 )\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X93.055 Y139.175 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y131.549 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y111.258 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y103.957 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y89.078 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y89.078 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y85.078 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y85.078 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y89.078 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y89.078 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y103.277 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y111.128 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y133.629 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.426 Y163.491 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X90.593 Y174.941 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.302 Y171.647 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X72.316 Y161.279 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X75.721 Y149.182 Z0.3 </boundaryPoint>)\n"+
"(<perimeter> outer )\n"+
"M108 S110.0\n"+
"M108 S110.0\n"+
"G1 X120.52 Y86.01 Z0.3 F30.0\n"+
"G91\n"+
"G1 F20\n"+
"G1 F1500\n"+
"G1 X-0.3 Y-0.3 F1500\n"+
"G90\n"+
"G4 P3000\n"+
"G92 X0;set x 0\n"+
"G1 X-1.0 F3000.0 \n"+
"G1 X-500.0  F3200.0 ;horizontal move\n"+
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
"G1 X120.52 Y86.01 Z0.3 F3000.0\n"+
"G1 X120.66 Y85.98 Z0.3 F3000.0\n"+
"G1 X121.08 Y85.9 Z0.3 F64.024\n"+
"G1 F240.0\n"+
"G1 E1.239\n"+
"G1 F64.024\n"+
"G92 E0\n"+
";\n"+
"G1 X121.08 Y88.84 Z0.3 F540.0 E35.933\n"+
"G1 X119.58 Y88.84 Z0.3 F540.0 E54.267\n"+
"G1 X119.58 Y103.38 Z0.3 F540.0 E231.953\n"+
"G1 X127.43 Y111.23 Z0.3 F540.0 E367.657\n"+
"G1 X127.43 Y133.57 Z0.3 F540.0 E640.677\n"+
"G1 X110.25 Y163.32 Z0.3 F540.0 E1060.544\n"+
"G1 X90.56 Y174.68 Z0.3 F540.0 E1338.439\n"+
"G1 X78.46 Y171.44 Z0.3 F540.0 E1491.529\n"+
"G1 X72.57 Y161.25 Z0.3 F540.0 E1635.411\n"+
"G1 X75.93 Y149.34 Z0.3 F540.0 E1786.586\n"+
"G1 X93.23 Y139.35 Z0.3 F540.0 E2030.795\n"+
"G1 X97.76 Y131.61 Z0.3 F540.0 E2140.343\n"+
"G1 X97.76 Y111.36 Z0.3 F540.0 E2387.929\n"+
"G1 X105.06 Y104.06 Z0.3 F540.0 E2514.125\n"+
"G1 X105.06 Y88.84 Z0.3 F540.0 E2700.123\n"+
"G1 X103.56 Y88.84 Z0.3 F540.0 E2718.457\n"+
"G1 X103.56 Y85.32 Z0.3 F540.0 E2761.479\n"+
"G1 X121.08 Y85.32 Z0.3 F540.0 E2975.612\n"+
"G1 X121.08 Y85.61 Z0.3 F540.0 E2979.181\n"+
"G1 F240.0\n"+
"G1 E2979.181\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X114.816 Y89.078 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y89.078 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y102.078 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.816 Y102.078 Z0.3 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X114.91 Y88.84 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E2979.181\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.58 Y88.84 Z0.3 F540.0 E65.218\n"+
"G1 X109.58 Y102.32 Z0.3 F540.0 E229.973\n"+
"G1 X115.06 Y102.32 Z0.3 F540.0 E296.951\n"+
"G1 X115.06 Y88.98 Z0.3 F540.0 E459.947\n"+
"G1 F240.0\n"+
"G1 E459.947\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X107.804 Y111.704 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.923 Y112.448 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.155 Y113.164 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.497 Y113.835 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.94 Y114.444 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.473 Y114.977 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.082 Y115.42 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.753 Y115.762 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.469 Y115.994 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.213 Y116.112 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.967 Y116.112 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.711 Y115.994 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.427 Y115.762 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.098 Y115.42 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.707 Y114.977 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.239 Y114.444 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.683 Y113.835 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.025 Y113.164 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y112.448 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y111.704 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y110.95 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y110.206 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.025 Y109.49 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.683 Y108.819 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.239 Y108.21 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.707 Y107.677 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.098 Y107.234 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.427 Y106.892 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.711 Y106.66 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.967 Y106.542 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.213 Y106.542 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.469 Y106.66 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.753 Y106.892 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.082 Y107.234 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.473 Y107.677 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.94 Y108.21 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.497 Y108.819 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.155 Y109.49 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.923 Y110.206 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.804 Y110.95 Z0.3 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X115.39 Y102.65 Z0.3 F3000.0\n"+
"G1 X112.84 Y106.3 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E459.947\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.19 Y106.3 Z0.3 F540.0 E7.92\n"+
"G1 X111.41 Y106.43 Z0.3 F540.0 E17.585\n"+
"G1 X110.66 Y106.67 Z0.3 F540.0 E27.248\n"+
"G1 X109.96 Y107.03 Z0.3 F540.0 E36.917\n"+
"G1 X109.32 Y107.49 Z0.3 F540.0 E46.586\n"+
"G1 X108.76 Y108.05 Z0.3 F540.0 E56.257\n"+
"G1 X108.29 Y108.69 Z0.3 F540.0 E65.916\n"+
"G1 X107.93 Y109.4 Z0.3 F540.0 E75.586\n"+
"G1 X107.69 Y110.15 Z0.3 F540.0 E85.249\n"+
"G1 X107.57 Y110.93 Z0.3 F540.0 E94.914\n"+
"G1 X107.57 Y111.72 Z0.3 F540.0 E104.594\n"+
"G1 X107.69 Y112.5 Z0.3 F540.0 E114.259\n"+
"G1 X107.93 Y113.26 Z0.3 F540.0 E123.922\n"+
"G1 X108.29 Y113.96 Z0.3 F540.0 E133.591\n"+
"G1 X108.76 Y114.6 Z0.3 F540.0 E143.25\n"+
"G1 X109.32 Y115.16 Z0.3 F540.0 E152.921\n"+
"G1 X109.96 Y115.63 Z0.3 F540.0 E162.59\n"+
"G1 X110.66 Y115.98 Z0.3 F540.0 E172.259\n"+
"G1 X111.41 Y116.23 Z0.3 F540.0 E181.922\n"+
"G1 X112.19 Y116.35 Z0.3 F540.0 E191.587\n"+
"G1 X112.99 Y116.35 Z0.3 F540.0 E201.267\n"+
"G1 X113.77 Y116.23 Z0.3 F540.0 E210.932\n"+
"G1 X114.52 Y115.98 Z0.3 F540.0 E220.595\n"+
"G1 X115.22 Y115.63 Z0.3 F540.0 E230.265\n"+
"G1 X115.86 Y115.16 Z0.3 F540.0 E239.924\n"+
"G1 X116.42 Y114.6 Z0.3 F540.0 E249.603\n"+
"G1 X116.89 Y113.96 Z0.3 F540.0 E259.262\n"+
"G1 X117.25 Y113.26 Z0.3 F540.0 E268.932\n"+
"G1 X117.49 Y112.5 Z0.3 F540.0 E278.595\n"+
"G1 X117.61 Y111.72 Z0.3 F540.0 E288.258\n"+
"G1 X117.61 Y110.93 Z0.3 F540.0 E297.938\n"+
"G1 X117.49 Y110.15 Z0.3 F540.0 E307.601\n"+
"G1 X117.25 Y109.4 Z0.3 F540.0 E317.264\n"+
"G1 X116.89 Y108.69 Z0.3 F540.0 E326.933\n"+
"G1 X116.42 Y108.05 Z0.3 F540.0 E336.592\n"+
"G1 X115.86 Y107.49 Z0.3 F540.0 E346.272\n"+
"G1 X115.22 Y107.03 Z0.3 F540.0 E355.931\n"+
"G1 X114.52 Y106.67 Z0.3 F540.0 E365.6\n"+
"G1 X113.77 Y106.43 Z0.3 F540.0 E375.263\n"+
"G1 X113.13 Y106.33 Z0.3 F540.0 E383.17\n"+
"G1 F240.0\n"+
"G1 E383.17\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X111.269 Y134.809 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y134.986 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y135.115 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y135.194 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y135.22 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y135.194 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y135.115 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y134.986 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y134.809 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y134.59 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y134.334 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y134.046 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y133.734 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y133.406 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.683 Y133.07 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y132.734 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y132.406 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y132.094 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y131.806 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y131.55 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y131.331 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y131.154 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y131.024 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y130.946 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y130.92 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y130.946 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y131.024 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y131.154 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.269 Y131.331 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y131.55 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y131.806 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y132.094 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y132.406 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y132.734 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.383 Y133.07 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y133.406 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y133.734 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y134.046 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y134.334 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y134.59 Z0.3 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X115.4 Y106.74 Z0.3 F3000.0\n"+
"G1 X116.08 Y107.24 Z0.3 F3000.0\n"+
"G1 X116.68 Y107.84 Z0.3 F3000.0\n"+
"G1 X117.18 Y108.52 Z0.3 F3000.0\n"+
"G1 X117.56 Y109.27 Z0.3 F3000.0\n"+
"G1 X117.82 Y110.07 Z0.3 F3000.0\n"+
"G1 X117.95 Y110.91 Z0.3 F3000.0\n"+
"G1 X112.39 Y130.69 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.17\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.8 Y130.8 Z0.3 F540.0 E7.375\n"+
"G1 X111.13 Y131.14 Z0.3 F540.0 E16.536\n"+
"G1 X110.6 Y131.66 Z0.3 F540.0 E25.662\n"+
"G1 X110.26 Y132.33 Z0.3 F540.0 E34.823\n"+
"G1 X110.17 Y132.7 Z0.3 F540.0 E39.4\n"+
"G1 X110.17 Y133.44 Z0.3 F540.0 E48.543\n"+
"G1 X110.26 Y133.81 Z0.3 F540.0 E53.12\n"+
"G1 X110.6 Y134.48 Z0.3 F540.0 E62.281\n"+
"G1 X111.13 Y135.0 Z0.3 F540.0 E71.407\n"+
"G1 X111.45 Y135.2 Z0.3 F540.0 E75.994\n"+
"G1 X112.16 Y135.43 Z0.3 F540.0 E85.146\n"+
"G1 X112.91 Y135.43 Z0.3 F540.0 E94.288\n"+
"G1 X113.27 Y135.34 Z0.3 F540.0 E98.866\n"+
"G1 X113.94 Y135.0 Z0.3 F540.0 E108.027\n"+
"G1 X114.47 Y134.48 Z0.3 F540.0 E117.153\n"+
"G1 X114.81 Y133.81 Z0.3 F540.0 E126.314\n"+
"G1 X114.9 Y133.44 Z0.3 F540.0 E130.891\n"+
"G1 X114.9 Y132.7 Z0.3 F540.0 E140.034\n"+
"G1 X114.81 Y132.33 Z0.3 F540.0 E144.611\n"+
"G1 X114.47 Y131.66 Z0.3 F540.0 E153.772\n"+
"G1 X113.94 Y131.14 Z0.3 F540.0 E162.898\n"+
"G1 X113.27 Y130.8 Z0.3 F540.0 E172.059\n"+
"G1 X112.68 Y130.69 Z0.3 F540.0 E179.434\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X103.236 Y144.585 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y145.194 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y145.727 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y146.17 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y146.512 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y146.743 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y146.862 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y146.862 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y146.743 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y146.512 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y146.17 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y145.727 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y145.194 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y144.585 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y143.914 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y143.198 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y142.454 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y141.7 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y140.956 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y140.24 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y139.569 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y138.96 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y138.427 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y137.984 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y137.642 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y137.41 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y137.291 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y137.291 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y137.41 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y137.642 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y137.984 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y138.427 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y138.96 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.236 Y139.569 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y140.24 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y140.956 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y141.7 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y142.454 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y143.198 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y143.914 Z0.3 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X110.93 Y130.86 Z0.3 F3000.0\n"+
"G1 X110.33 Y131.47 Z0.3 F3000.0\n"+
"G1 X109.12 Y137.38 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.51 Y137.18 Z0.3 F540.0 E7.904\n"+
"G1 X107.73 Y137.05 Z0.3 F540.0 E17.569\n"+
"G1 X106.93 Y137.05 Z0.3 F540.0 E27.249\n"+
"G1 X106.15 Y137.18 Z0.3 F540.0 E36.914\n"+
"G1 X105.4 Y137.42 Z0.3 F540.0 E46.577\n"+
"G1 X104.7 Y137.78 Z0.3 F540.0 E56.247\n"+
"G1 X104.06 Y138.24 Z0.3 F540.0 E65.899\n"+
"G1 X103.5 Y138.8 Z0.3 F540.0 E75.587\n"+
"G1 X103.03 Y139.44 Z0.3 F540.0 E85.246\n"+
"G1 X102.67 Y140.15 Z0.3 F540.0 E94.915\n"+
"G1 X102.43 Y140.9 Z0.3 F540.0 E104.578\n"+
"G1 X102.3 Y141.68 Z0.3 F540.0 E114.243\n"+
"G1 X102.3 Y142.47 Z0.3 F540.0 E123.923\n"+
"G1 X102.43 Y143.25 Z0.3 F540.0 E133.588\n"+
"G1 X102.67 Y144.01 Z0.3 F540.0 E143.239\n"+
"G1 X103.03 Y144.71 Z0.3 F540.0 E152.92\n"+
"G1 X103.5 Y145.35 Z0.3 F540.0 E162.579\n"+
"G1 X104.06 Y145.91 Z0.3 F540.0 E172.258\n"+
"G1 X104.7 Y146.38 Z0.3 F540.0 E181.917\n"+
"G1 X105.4 Y146.73 Z0.3 F540.0 E191.587\n"+
"G1 X106.15 Y146.98 Z0.3 F540.0 E201.25\n"+
"G1 X106.93 Y147.1 Z0.3 F540.0 E210.915\n"+
"G1 X107.73 Y147.1 Z0.3 F540.0 E220.595\n"+
"G1 X108.51 Y146.98 Z0.3 F540.0 E230.26\n"+
"G1 X109.26 Y146.73 Z0.3 F540.0 E239.923\n"+
"G1 X109.96 Y146.38 Z0.3 F540.0 E249.592\n"+
"G1 X110.6 Y145.91 Z0.3 F540.0 E259.251\n"+
"G1 X111.16 Y145.35 Z0.3 F540.0 E268.922\n"+
"G1 X111.63 Y144.71 Z0.3 F540.0 E278.588\n"+
"G1 X111.99 Y144.01 Z0.3 F540.0 E288.269\n"+
"G1 X112.23 Y143.25 Z0.3 F540.0 E297.92\n"+
"G1 X112.35 Y142.47 Z0.3 F540.0 E307.585\n"+
"G1 X112.35 Y141.68 Z0.3 F540.0 E317.265\n"+
"G1 X112.23 Y140.9 Z0.3 F540.0 E326.93\n"+
"G1 X111.99 Y140.15 Z0.3 F540.0 E336.593\n"+
"G1 X111.63 Y139.44 Z0.3 F540.0 E346.263\n"+
"G1 X111.16 Y138.8 Z0.3 F540.0 E355.929\n"+
"G1 X110.6 Y138.24 Z0.3 F540.0 E365.608\n"+
"G1 X109.96 Y137.78 Z0.3 F540.0 E375.26\n"+
"G1 X109.39 Y137.49 Z0.3 F540.0 E383.175\n"+
"G1 F240.0\n"+
"G1 E383.175\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X100.159 Y151.887 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.312 Y152.187 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.51 Y152.46 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.749 Y152.699 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.022 Y152.897 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.322 Y153.05 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.643 Y153.154 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.976 Y153.207 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.314 Y153.207 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.647 Y153.154 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.968 Y153.05 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.268 Y152.897 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.541 Y152.699 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.78 Y152.46 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y152.187 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y151.887 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.236 Y151.566 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y151.233 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y150.895 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.236 Y150.562 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y150.241 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y149.941 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.78 Y149.668 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.541 Y149.429 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.268 Y149.231 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.968 Y149.078 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.647 Y148.973 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.314 Y148.921 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.976 Y148.921 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.643 Y148.973 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.322 Y149.078 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.022 Y149.231 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.749 Y149.429 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.51 Y149.668 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.312 Y149.941 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.159 Y150.241 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y150.562 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y150.895 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y151.233 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y151.566 Z0.3 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X106.91 Y136.72 Z0.3 F3000.0\n"+
"G1 X106.07 Y136.85 Z0.3 F3000.0\n"+
"G1 X105.27 Y137.11 Z0.3 F3000.0\n"+
"G1 X104.52 Y137.49 Z0.3 F3000.0\n"+
"G1 X103.84 Y137.99 Z0.3 F3000.0\n"+
"G1 X103.24 Y138.59 Z0.3 F3000.0\n"+
"G1 X102.74 Y139.27 Z0.3 F3000.0\n"+
"G1 X102.36 Y140.02 Z0.3 F3000.0\n"+
"G1 X102.1 Y140.82 Z0.3 F3000.0\n"+
"G1 X101.97 Y141.66 Z0.3 F3000.0\n"+
"G1 X103.27 Y148.96 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.175\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.7 Y148.74 Z0.3 F540.0 E7.397\n"+
"G1 X101.96 Y148.68 Z0.3 F540.0 E16.542\n"+
"G1 X101.59 Y148.74 Z0.3 F540.0 E21.119\n"+
"G1 X100.9 Y149.03 Z0.3 F540.0 E30.265\n"+
"G1 X100.33 Y149.51 Z0.3 F540.0 E39.41\n"+
"G1 X100.11 Y149.82 Z0.3 F540.0 E43.987\n"+
"G1 X99.82 Y150.51 Z0.3 F540.0 E53.121\n"+
"G1 X99.76 Y151.25 Z0.3 F540.0 E62.278\n"+
"G1 X99.82 Y151.62 Z0.3 F540.0 E66.856\n"+
"G1 X100.11 Y152.31 Z0.3 F540.0 E76.001\n"+
"G1 X100.33 Y152.62 Z0.3 F540.0 E80.577\n"+
"G1 X100.9 Y153.1 Z0.3 F540.0 E89.723\n"+
"G1 X101.59 Y153.39 Z0.3 F540.0 E98.868\n"+
"G1 X102.33 Y153.45 Z0.3 F540.0 E108.014\n"+
"G1 X102.7 Y153.39 Z0.3 F540.0 E112.591\n"+
"G1 X103.39 Y153.1 Z0.3 F540.0 E121.736\n"+
"G1 X103.96 Y152.62 Z0.3 F540.0 E130.882\n"+
"G1 X104.18 Y152.31 Z0.3 F540.0 E135.459\n"+
"G1 X104.47 Y151.62 Z0.3 F540.0 E144.604\n"+
"G1 X104.53 Y150.88 Z0.3 F540.0 E153.749\n"+
"G1 X104.47 Y150.51 Z0.3 F540.0 E158.338\n"+
"G1 X104.18 Y149.82 Z0.3 F540.0 E167.472\n"+
"G1 X103.96 Y149.51 Z0.3 F540.0 E172.049\n"+
"G1 X103.51 Y149.11 Z0.3 F540.0 E179.434\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X78.894 Y163.827 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.236 Y164.498 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.679 Y165.107 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.212 Y165.64 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.821 Y166.082 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.492 Y166.425 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.208 Y166.657 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.952 Y166.775 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.706 Y166.775 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.45 Y166.657 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.166 Y166.425 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.837 Y166.082 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.446 Y165.64 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.979 Y165.107 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.422 Y164.498 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.764 Y163.827 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y163.111 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y162.367 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y161.613 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y160.868 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.764 Y160.153 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.422 Y159.482 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.979 Y158.873 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.446 Y158.34 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.837 Y157.897 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.166 Y157.555 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.45 Y157.323 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.706 Y157.205 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.952 Y157.205 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.208 Y157.323 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.492 Y157.555 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.821 Y157.897 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.212 Y158.34 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.679 Y158.873 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.236 Y159.482 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.894 Y160.153 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.662 Y160.868 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y161.613 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y162.367 Z0.3 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.662 Y163.111 Z0.3 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X101.93 Y148.35 Z0.3 F3000.0\n"+
"G1 X101.1 Y148.54 Z0.3 F3000.0\n"+
"G1 X87.54 Y159.24 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.16 Y158.72 Z0.3 F540.0 E7.901\n"+
"G1 X86.6 Y158.16 Z0.3 F540.0 E17.581\n"+
"G1 X85.96 Y157.69 Z0.3 F540.0 E27.24\n"+
"G1 X85.26 Y157.33 Z0.3 F540.0 E36.909\n"+
"G1 X84.51 Y157.09 Z0.3 F540.0 E46.572\n"+
"G1 X83.73 Y156.97 Z0.3 F540.0 E56.237\n"+
"G1 X82.93 Y156.97 Z0.3 F540.0 E65.917\n"+
"G1 X82.15 Y157.09 Z0.3 F540.0 E75.582\n"+
"G1 X81.4 Y157.33 Z0.3 F540.0 E85.245\n"+
"G1 X80.69 Y157.69 Z0.3 F540.0 E94.915\n"+
"G1 X80.06 Y158.16 Z0.3 F540.0 E104.574\n"+
"G1 X79.5 Y158.72 Z0.3 F540.0 E114.253\n"+
"G1 X79.03 Y159.36 Z0.3 F540.0 E123.912\n"+
"G1 X78.67 Y160.06 Z0.3 F540.0 E133.582\n"+
"G1 X78.43 Y160.81 Z0.3 F540.0 E143.245\n"+
"G1 X78.3 Y161.59 Z0.3 F540.0 E152.91\n"+
"G1 X78.3 Y162.39 Z0.3 F540.0 E162.59\n"+
"G1 X78.43 Y163.17 Z0.3 F540.0 E172.243\n"+
"G1 X78.67 Y163.92 Z0.3 F540.0 E181.917\n"+
"G1 X79.03 Y164.62 Z0.3 F540.0 E191.587\n"+
"G1 X79.5 Y165.26 Z0.3 F540.0 E201.246\n"+
"G1 X80.06 Y165.82 Z0.3 F540.0 E210.925\n"+
"G1 X80.69 Y166.29 Z0.3 F540.0 E220.584\n"+
"G1 X81.4 Y166.65 Z0.3 F540.0 E230.254\n"+
"G1 X82.15 Y166.89 Z0.3 F540.0 E239.917\n"+
"G1 X82.93 Y167.02 Z0.3 F540.0 E249.582\n"+
"G1 X83.73 Y167.02 Z0.3 F540.0 E259.262\n"+
"G1 X84.51 Y166.89 Z0.3 F540.0 E268.927\n"+
"G1 X85.26 Y166.65 Z0.3 F540.0 E278.59\n"+
"G1 X85.96 Y166.29 Z0.3 F540.0 E288.259\n"+
"G1 X86.6 Y165.82 Z0.3 F540.0 E297.918\n"+
"G1 X87.16 Y165.26 Z0.3 F540.0 E307.598\n"+
"G1 X87.63 Y164.62 Z0.3 F540.0 E317.257\n"+
"G1 X87.99 Y163.92 Z0.3 F540.0 E326.926\n"+
"G1 X88.23 Y163.17 Z0.3 F540.0 E336.601\n"+
"G1 X88.35 Y162.39 Z0.3 F540.0 E346.254\n"+
"G1 X88.35 Y161.59 Z0.3 F540.0 E355.934\n"+
"G1 X88.23 Y160.81 Z0.3 F540.0 E365.599\n"+
"G1 X87.99 Y160.06 Z0.3 F540.0 E375.262\n"+
"G1 X87.69 Y159.48 Z0.3 F540.0 E383.177\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<loop> inner )\n"+
"M108 S100.0\n"+
"M108 S100.0\n"+
"G1 X87.94 Y159.0 Z0.3 F1080.0 E386.218\n"+
"G1 X87.52 Y158.41 Z0.3 F1080.0 E390.215\n"+
"G1 X86.91 Y157.8 Z0.3 F1080.0 E395.023\n"+
"G1 X86.21 Y157.29 Z0.3 F1080.0 E399.819\n"+
"G1 X85.44 Y156.9 Z0.3 F1080.0 E404.624\n"+
"G1 X84.61 Y156.64 Z0.3 F1080.0 E409.426\n"+
"G1 X83.76 Y156.5 Z0.3 F1080.0 E414.218\n"+
"G1 X82.9 Y156.5 Z0.3 F1080.0 E419.029\n"+
"G1 X82.04 Y156.64 Z0.3 F1080.0 E423.827\n"+
"G1 X81.22 Y156.9 Z0.3 F1080.0 E428.624\n"+
"G1 X80.45 Y157.29 Z0.3 F1080.0 E433.429\n"+
"G1 X79.75 Y157.8 Z0.3 F1080.0 E438.225\n"+
"G1 X79.14 Y158.41 Z0.3 F1080.0 E443.033\n"+
"G1 X78.63 Y159.11 Z0.3 F1080.0 E447.829\n"+
"G1 X78.24 Y159.88 Z0.3 F1080.0 E452.634\n"+
"G1 X77.97 Y160.7 Z0.3 F1080.0 E457.431\n"+
"G1 X77.84 Y161.56 Z0.3 F1080.0 E462.228\n"+
"G1 X77.84 Y162.42 Z0.3 F1080.0 E467.04\n"+
"G1 X77.97 Y163.28 Z0.3 F1080.0 E471.837\n"+
"G1 X78.24 Y164.1 Z0.3 F1080.0 E476.634\n"+
"G1 X78.63 Y164.87 Z0.3 F1080.0 E481.439\n"+
"G1 X79.14 Y165.57 Z0.3 F1080.0 E486.235\n"+
"G1 X79.75 Y166.18 Z0.3 F1080.0 E491.043\n"+
"G1 X80.45 Y166.69 Z0.3 F1080.0 E495.839\n"+
"G1 X81.22 Y167.08 Z0.3 F1080.0 E500.644\n"+
"G1 X82.04 Y167.34 Z0.3 F1080.0 E505.439\n"+
"G1 X82.9 Y167.48 Z0.3 F1080.0 E510.238\n"+
"G1 X83.76 Y167.48 Z0.3 F1080.0 E515.049\n"+
"G1 X84.61 Y167.34 Z0.3 F1080.0 E519.842\n"+
"G1 X85.44 Y167.08 Z0.3 F1080.0 E524.642\n"+
"G1 X86.21 Y166.69 Z0.3 F1080.0 E529.447\n"+
"G1 X86.91 Y166.18 Z0.3 F1080.0 E534.243\n"+
"G1 X87.52 Y165.57 Z0.3 F1080.0 E539.051\n"+
"G1 X88.03 Y164.87 Z0.3 F1080.0 E543.847\n"+
"G1 X88.42 Y164.1 Z0.3 F1080.0 E548.653\n"+
"G1 X88.68 Y163.28 Z0.3 F1080.0 E553.449\n"+
"G1 X88.82 Y162.42 Z0.3 F1080.0 E558.247\n"+
"G1 X88.82 Y161.56 Z0.3 F1080.0 E563.058\n"+
"G1 X88.68 Y160.7 Z0.3 F1080.0 E567.856\n"+
"G1 X88.42 Y159.88 Z0.3 F1080.0 E572.652\n"+
"G1 X88.09 Y159.24 Z0.3 F1080.0 E576.66\n"+
"G1 F240.0\n"+
"G1 E576.66\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.79 Y152.67 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E576.66\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.29 Y153.24 Z0.3 F1080.0 E4.176\n"+
"G1 X100.65 Y153.5 Z0.3 F1080.0 E6.667\n"+
"G1 X101.05 Y153.7 Z0.3 F1080.0 E9.149\n"+
"G1 X101.48 Y153.84 Z0.3 F1080.0 E11.64\n"+
"G1 X101.92 Y153.91 Z0.3 F1080.0 E14.136\n"+
"G1 X102.37 Y153.91 Z0.3 F1080.0 E16.625\n"+
"G1 X102.81 Y153.84 Z0.3 F1080.0 E19.116\n"+
"G1 X103.24 Y153.7 Z0.3 F1080.0 E21.612\n"+
"G1 X103.64 Y153.5 Z0.3 F1080.0 E24.094\n"+
"G1 X104.0 Y153.24 Z0.3 F1080.0 E26.585\n"+
"G1 X104.32 Y152.92 Z0.3 F1080.0 E29.083\n"+
"G1 X104.58 Y152.56 Z0.3 F1080.0 E31.574\n"+
"G1 X104.78 Y152.16 Z0.3 F1080.0 E34.056\n"+
"G1 X104.92 Y151.73 Z0.3 F1080.0 E36.55\n"+
"G1 X104.99 Y151.29 Z0.3 F1080.0 E39.042\n"+
"G1 X104.99 Y150.84 Z0.3 F1080.0 E41.531\n"+
"G1 X104.92 Y150.4 Z0.3 F1080.0 E44.023\n"+
"G1 X104.78 Y149.97 Z0.3 F1080.0 E46.517\n"+
"G1 X104.58 Y149.57 Z0.3 F1080.0 E49.0\n"+
"G1 X104.32 Y149.21 Z0.3 F1080.0 E51.49\n"+
"G1 X104.0 Y148.89 Z0.3 F1080.0 E53.988\n"+
"G1 X103.64 Y148.63 Z0.3 F1080.0 E56.479\n"+
"G1 X103.24 Y148.43 Z0.3 F1080.0 E58.961\n"+
"G1 X102.81 Y148.29 Z0.3 F1080.0 E61.457\n"+
"G1 X102.37 Y148.22 Z0.3 F1080.0 E63.948\n"+
"G1 X101.92 Y148.22 Z0.3 F1080.0 E66.437\n"+
"G1 X101.48 Y148.29 Z0.3 F1080.0 E68.933\n"+
"G1 X101.05 Y148.43 Z0.3 F1080.0 E71.424\n"+
"G1 X100.65 Y148.63 Z0.3 F1080.0 E73.906\n"+
"G1 X100.29 Y148.89 Z0.3 F1080.0 E76.397\n"+
"G1 X99.97 Y149.21 Z0.3 F1080.0 E78.899\n"+
"G1 X99.71 Y149.57 Z0.3 F1080.0 E81.386\n"+
"G1 X99.51 Y149.97 Z0.3 F1080.0 E83.868\n"+
"G1 X99.37 Y150.4 Z0.3 F1080.0 E86.365\n"+
"G1 X99.3 Y150.84 Z0.3 F1080.0 E88.856\n"+
"G1 X99.3 Y151.29 Z0.3 F1080.0 E91.345\n"+
"G1 X99.37 Y151.73 Z0.3 F1080.0 E93.835\n"+
"G1 X99.64 Y152.43 Z0.3 F1080.0 E98.004\n"+
"G1 F240.0\n"+
"G1 E98.004\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.82 Y149.64 Z0.3 F3000.0\n"+
"G1 X104.22 Y146.6 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E98.004\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.22 Y147.17 Z0.3 F1080.0 E6.395\n"+
"G1 X106.04 Y147.43 Z0.3 F1080.0 E11.191\n"+
"G1 X106.9 Y147.57 Z0.3 F1080.0 E15.994\n"+
"G1 X107.76 Y147.57 Z0.3 F1080.0 E20.806\n"+
"G1 X108.61 Y147.43 Z0.3 F1080.0 E25.598\n"+
"G1 X109.44 Y147.17 Z0.3 F1080.0 E30.394\n"+
"G1 X110.21 Y146.77 Z0.3 F1080.0 E35.204\n"+
"G1 X110.91 Y146.26 Z0.3 F1080.0 E40.0\n"+
"G1 X111.52 Y145.65 Z0.3 F1080.0 E44.809\n"+
"G1 X112.03 Y144.96 Z0.3 F1080.0 E49.605\n"+
"G1 X112.42 Y144.18 Z0.3 F1080.0 E54.41\n"+
"G1 X112.68 Y143.36 Z0.3 F1080.0 E59.206\n"+
"G1 X112.82 Y142.51 Z0.3 F1080.0 E64.004\n"+
"G1 X112.82 Y141.64 Z0.3 F1080.0 E68.815\n"+
"G1 X112.68 Y140.79 Z0.3 F1080.0 E73.613\n"+
"G1 X112.42 Y139.97 Z0.3 F1080.0 E78.409\n"+
"G1 X112.03 Y139.2 Z0.3 F1080.0 E83.214\n"+
"G1 X111.52 Y138.5 Z0.3 F1080.0 E88.011\n"+
"G1 X110.91 Y137.89 Z0.3 F1080.0 E92.819\n"+
"G1 X110.21 Y137.38 Z0.3 F1080.0 E97.618\n"+
"G1 X109.44 Y136.99 Z0.3 F1080.0 E102.426\n"+
"G1 X108.61 Y136.72 Z0.3 F1080.0 E107.222\n"+
"G1 X107.76 Y136.59 Z0.3 F1080.0 E112.014\n"+
"G1 X106.9 Y136.59 Z0.3 F1080.0 E116.826\n"+
"G1 X106.04 Y136.72 Z0.3 F1080.0 E121.629\n"+
"G1 X105.22 Y136.99 Z0.3 F1080.0 E126.425\n"+
"G1 X104.45 Y137.38 Z0.3 F1080.0 E131.223\n"+
"G1 X103.75 Y137.89 Z0.3 F1080.0 E136.022\n"+
"G1 X103.14 Y138.5 Z0.3 F1080.0 E140.83\n"+
"G1 X102.63 Y139.2 Z0.3 F1080.0 E145.627\n"+
"G1 X102.24 Y139.97 Z0.3 F1080.0 E150.432\n"+
"G1 X101.97 Y140.79 Z0.3 F1080.0 E155.228\n"+
"G1 X101.84 Y141.64 Z0.3 F1080.0 E160.026\n"+
"G1 X101.84 Y142.51 Z0.3 F1080.0 E164.837\n"+
"G1 X101.97 Y143.36 Z0.3 F1080.0 E169.635\n"+
"G1 X102.24 Y144.18 Z0.3 F1080.0 E174.431\n"+
"G1 X102.63 Y144.96 Z0.3 F1080.0 E179.236\n"+
"G1 X103.14 Y145.65 Z0.3 F1080.0 E184.032\n"+
"G1 X103.98 Y146.43 Z0.3 F1080.0 E190.413\n"+
"G1 F240.0\n"+
"G1 E190.413\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X102.1 Y143.33 Z0.3 F3000.0\n"+
"G1 X101.97 Y142.5 Z0.3 F3000.0\n"+
"G1 X101.97 Y141.66 Z0.3 F3000.0\n"+
"G1 X111.45 Y116.71 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.413\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.16 Y116.82 Z0.3 F1080.0 E3.999\n"+
"G1 X113.02 Y116.82 Z0.3 F1080.0 E8.81\n"+
"G1 X113.88 Y116.68 Z0.3 F1080.0 E13.608\n"+
"G1 X114.7 Y116.42 Z0.3 F1080.0 E18.404\n"+
"G1 X115.47 Y116.02 Z0.3 F1080.0 E23.209\n"+
"G1 X116.17 Y115.52 Z0.3 F1080.0 E28.005\n"+
"G1 X116.78 Y114.9 Z0.3 F1080.0 E32.813\n"+
"G1 X117.29 Y114.21 Z0.3 F1080.0 E37.61\n"+
"G1 X117.68 Y113.43 Z0.3 F1080.0 E42.415\n"+
"G1 X117.95 Y112.61 Z0.3 F1080.0 E47.211\n"+
"G1 X118.08 Y111.76 Z0.3 F1080.0 E52.009\n"+
"G1 X118.08 Y110.89 Z0.3 F1080.0 E56.82\n"+
"G1 X117.95 Y110.04 Z0.3 F1080.0 E61.618\n"+
"G1 X117.68 Y109.22 Z0.3 F1080.0 E66.414\n"+
"G1 X117.29 Y108.45 Z0.3 F1080.0 E71.219\n"+
"G1 X116.78 Y107.75 Z0.3 F1080.0 E76.015\n"+
"G1 X116.17 Y107.14 Z0.3 F1080.0 E80.824\n"+
"G1 X115.47 Y106.63 Z0.3 F1080.0 E85.62\n"+
"G1 X114.7 Y106.24 Z0.3 F1080.0 E90.425\n"+
"G1 X113.88 Y105.97 Z0.3 F1080.0 E95.221\n"+
"G1 X113.02 Y105.84 Z0.3 F1080.0 E100.019\n"+
"G1 X112.16 Y105.84 Z0.3 F1080.0 E104.83\n"+
"G1 X111.3 Y105.97 Z0.3 F1080.0 E109.628\n"+
"G1 X110.48 Y106.24 Z0.3 F1080.0 E114.424\n"+
"G1 X109.71 Y106.63 Z0.3 F1080.0 E119.229\n"+
"G1 X109.01 Y107.14 Z0.3 F1080.0 E124.025\n"+
"G1 X108.4 Y107.75 Z0.3 F1080.0 E128.834\n"+
"G1 X107.89 Y108.45 Z0.3 F1080.0 E133.63\n"+
"G1 X107.5 Y109.22 Z0.3 F1080.0 E138.435\n"+
"G1 X107.24 Y110.04 Z0.3 F1080.0 E143.231\n"+
"G1 X107.1 Y110.89 Z0.3 F1080.0 E148.029\n"+
"G1 X107.1 Y111.76 Z0.3 F1080.0 E152.84\n"+
"G1 X107.24 Y112.61 Z0.3 F1080.0 E157.638\n"+
"G1 X107.5 Y113.43 Z0.3 F1080.0 E162.434\n"+
"G1 X107.89 Y114.21 Z0.3 F1080.0 E167.239\n"+
"G1 X108.4 Y114.9 Z0.3 F1080.0 E172.036\n"+
"G1 X109.01 Y115.52 Z0.3 F1080.0 E176.844\n"+
"G1 X109.71 Y116.02 Z0.3 F1080.0 E181.64\n"+
"G1 X110.48 Y116.42 Z0.3 F1080.0 E186.445\n"+
"G1 X111.17 Y116.64 Z0.3 F1080.0 E190.44\n"+
"G1 F240.0\n"+
"G1 E190.44\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X108.0 Y114.14 Z0.3 F3000.0\n"+
"G1 X107.62 Y113.39 Z0.3 F3000.0\n"+
"G1 X107.36 Y112.58 Z0.3 F3000.0\n"+
"G1 X107.23 Y111.75 Z0.3 F3000.0\n"+
"G1 X107.23 Y110.9 Z0.3 F3000.0\n"+
"G1 X111.45 Y102.78 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.44\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.52 Y102.78 Z0.3 F1080.0 E22.628\n"+
"G1 X115.52 Y88.37 Z0.3 F1080.0 E102.683\n"+
"G1 X109.11 Y88.37 Z0.3 F1080.0 E138.294\n"+
"G1 X109.11 Y102.78 Z0.3 F1080.0 E218.35\n"+
"G1 X111.16 Y102.78 Z0.3 F1080.0 E229.733\n"+
"G1 F240.0\n"+
"G1 E229.733\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X107.23 Y110.9 Z0.3 F3000.0\n"+
"G1 X112.39 Y130.22 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E229.733\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.65 Y130.35 Z0.3 F1080.0 E4.166\n"+
"G1 X111.24 Y130.52 Z0.3 F1080.0 E6.658\n"+
"G1 X110.85 Y130.76 Z0.3 F1080.0 E9.16\n"+
"G1 X110.51 Y131.05 Z0.3 F1080.0 E11.642\n"+
"G1 X110.22 Y131.39 Z0.3 F1080.0 E14.132\n"+
"G1 X109.99 Y131.77 Z0.3 F1080.0 E16.625\n"+
"G1 X109.82 Y132.19 Z0.3 F1080.0 E19.116\n"+
"G1 X109.71 Y132.62 Z0.3 F1080.0 E21.614\n"+
"G1 X109.68 Y133.07 Z0.3 F1080.0 E24.098\n"+
"G1 X109.71 Y133.52 Z0.3 F1080.0 E26.583\n"+
"G1 X109.82 Y133.95 Z0.3 F1080.0 E29.081\n"+
"G1 X109.99 Y134.37 Z0.3 F1080.0 E31.572\n"+
"G1 X110.22 Y134.75 Z0.3 F1080.0 E34.065\n"+
"G1 X110.51 Y135.09 Z0.3 F1080.0 E36.555\n"+
"G1 X110.85 Y135.38 Z0.3 F1080.0 E39.033\n"+
"G1 X111.24 Y135.62 Z0.3 F1080.0 E41.537\n"+
"G1 X111.65 Y135.79 Z0.3 F1080.0 E44.028\n"+
"G1 X112.09 Y135.89 Z0.3 F1080.0 E46.524\n"+
"G1 X112.53 Y135.93 Z0.3 F1080.0 E49.009\n"+
"G1 X112.98 Y135.89 Z0.3 F1080.0 E51.494\n"+
"G1 X113.42 Y135.79 Z0.3 F1080.0 E53.99\n"+
"G1 X113.83 Y135.62 Z0.3 F1080.0 E56.481\n"+
"G1 X114.21 Y135.38 Z0.3 F1080.0 E58.98\n"+
"G1 X114.55 Y135.09 Z0.3 F1080.0 E61.463\n"+
"G1 X114.84 Y134.75 Z0.3 F1080.0 E63.949\n"+
"G1 X115.08 Y134.37 Z0.3 F1080.0 E66.442\n"+
"G1 X115.25 Y133.95 Z0.3 F1080.0 E68.935\n"+
"G1 X115.36 Y133.52 Z0.3 F1080.0 E71.432\n"+
"G1 X115.39 Y133.07 Z0.3 F1080.0 E73.917\n"+
"G1 X115.36 Y132.62 Z0.3 F1080.0 E76.402\n"+
"G1 X115.25 Y132.19 Z0.3 F1080.0 E78.899\n"+
"G1 X115.08 Y131.77 Z0.3 F1080.0 E81.391\n"+
"G1 X114.84 Y131.39 Z0.3 F1080.0 E83.885\n"+
"G1 X114.55 Y131.05 Z0.3 F1080.0 E86.371\n"+
"G1 X114.21 Y130.76 Z0.3 F1080.0 E88.857\n"+
"G1 X113.83 Y130.52 Z0.3 F1080.0 E91.354\n"+
"G1 X113.42 Y130.35 Z0.3 F1080.0 E93.847\n"+
"G1 X112.68 Y130.22 Z0.3 F1080.0 E98.012\n"+
"G1 F240.0\n"+
"G1 E98.012\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> outer )\n"+
"G1 X124.68 Y137.39 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E98.012\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.91 Y162.98 Z0.3 F1080.0 E164.114\n"+
"G1 X90.49 Y174.18 Z0.3 F1080.0 E288.667\n"+
"G1 X78.77 Y171.04 Z0.3 F1080.0 E356.107\n"+
"G1 X73.08 Y161.18 Z0.3 F1080.0 E419.352\n"+
"G1 X76.32 Y149.65 Z0.3 F1080.0 E485.926\n"+
"G1 X93.57 Y139.69 Z0.3 F1080.0 E596.564\n"+
"G1 X98.22 Y131.74 Z0.3 F1080.0 E647.744\n"+
"G1 X98.22 Y111.55 Z0.3 F1080.0 E759.91\n"+
"G1 X105.52 Y104.25 Z0.3 F1080.0 E817.272\n"+
"G1 X105.52 Y88.37 Z0.3 F1080.0 E905.472\n"+
"G1 X104.02 Y88.37 Z0.3 F1080.0 E913.806\n"+
"G1 X104.02 Y85.78 Z0.3 F1080.0 E928.194\n"+
"G1 X120.61 Y85.78 Z0.3 F1080.0 E1020.361\n"+
"G1 X120.61 Y88.37 Z0.3 F1080.0 E1034.75\n"+
"G1 X119.11 Y88.37 Z0.3 F1080.0 E1043.083\n"+
"G1 X119.11 Y103.57 Z0.3 F1080.0 E1127.506\n"+
"G1 X126.96 Y111.42 Z0.3 F1080.0 E1189.189\n"+
"G1 X126.96 Y133.44 Z0.3 F1080.0 E1311.522\n"+
"G1 X124.82 Y137.14 Z0.3 F1080.0 E1335.272\n"+
"G1 F240.0\n"+
"G1 E1335.272\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"G1 X88.12 Y173.46 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E1335.272\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X125.11 Y136.47 Z0.3 F1080.0 E290.562\n"+
"G1 F240.0\n"+
"G1 E290.562\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X124.24 Y137.98 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E290.562\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.63 Y173.59 Z0.3 F1080.0 E279.79\n"+
"G1 F240.0\n"+
"G1 E279.79\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X89.13 Y173.73 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E279.79\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X123.37 Y139.49 Z0.3 F1080.0 E269.015\n"+
"G1 F240.0\n"+
"G1 E269.015\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X122.5 Y140.99 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E269.015\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X89.63 Y173.86 Z0.3 F1080.0 E258.243\n"+
"G1 F240.0\n"+
"G1 E258.243\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X90.13 Y173.99 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E258.243\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X121.63 Y142.5 Z0.3 F1080.0 E247.46\n"+
"G1 F240.0\n"+
"G1 E247.46\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.76 Y144.0 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E247.46\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X90.94 Y173.82 Z0.3 F1080.0 E234.296\n"+
"G1 F240.0\n"+
"G1 E234.296\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X92.45 Y172.95 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E234.296\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.89 Y145.51 Z0.3 F1080.0 E215.636\n"+
"G1 F240.0\n"+
"G1 E215.636\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y147.01 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E215.636\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X93.95 Y172.09 Z0.3 F1080.0 E196.976\n"+
"G1 F240.0\n"+
"G1 E196.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X95.46 Y171.22 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E196.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.15 Y148.52 Z0.3 F1080.0 E178.317\n"+
"G1 F240.0\n"+
"G1 E178.317\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.28 Y150.03 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E178.317\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X96.96 Y170.35 Z0.3 F1080.0 E159.657\n"+
"G1 F240.0\n"+
"G1 E159.657\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.47 Y169.48 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E159.657\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.41 Y151.53 Z0.3 F1080.0 E140.997\n"+
"G1 F240.0\n"+
"G1 E140.997\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.54 Y153.04 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E140.997\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.97 Y168.61 Z0.3 F1080.0 E122.337\n"+
"G1 F240.0\n"+
"G1 E122.337\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.48 Y167.74 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E122.337\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.67 Y154.54 Z0.3 F1080.0 E103.678\n"+
"G1 F240.0\n"+
"G1 E103.678\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.8 Y156.05 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E103.678\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.98 Y166.87 Z0.3 F1080.0 E85.014\n"+
"G1 F240.0\n"+
"G1 E85.014\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.49 Y166.0 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E85.014\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.94 Y157.55 Z0.3 F1080.0 E66.358\n"+
"G1 F240.0\n"+
"G1 E66.358\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.07 Y159.06 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E66.358\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.0 Y165.13 Z0.3 F1080.0 E47.694\n"+
"G1 F240.0\n"+
"G1 E47.694\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.5 Y164.26 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E47.694\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.2 Y160.57 Z0.3 F1080.0 E29.039\n"+
"G1 F240.0\n"+
"G1 E29.039\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.33 Y162.07 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E29.039\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.01 Y163.39 Z0.3 F1080.0 E10.383\n"+
"G1 F240.0\n"+
"G1 E10.383\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.41 Y153.72 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E10.383\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X84.61 Y172.52 Z0.3 F1080.0 E147.679\n"+
"G1 F240.0\n"+
"G1 E147.679\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X85.11 Y172.65 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E147.679\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y130.89 Z0.3 F1080.0 E328.098\n"+
"G1 F240.0\n"+
"G1 E328.098\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y130.25 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E328.098\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.04 Y145.08 Z0.3 F1080.0 E116.504\n"+
"G1 F240.0\n"+
"G1 E116.504\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.61 Y143.88 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E116.504\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y129.62 Z0.3 F1080.0 E112.045\n"+
"G1 F240.0\n"+
"G1 E112.045\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y128.98 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E112.045\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.83 Y143.02 Z0.3 F1080.0 E110.336\n"+
"G1 F240.0\n"+
"G1 E110.336\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.91 Y142.31 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E110.336\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y128.34 Z0.3 F1080.0 E109.704\n"+
"G1 F240.0\n"+
"G1 E109.704\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y127.71 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E109.704\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.91 Y141.67 Z0.3 F1080.0 E109.704\n"+
"G1 F240.0\n"+
"G1 E109.704\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.83 Y141.12 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E109.704\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y127.07 Z0.3 F1080.0 E110.352\n"+
"G1 F240.0\n"+
"G1 E110.352\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y126.44 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E110.352\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.71 Y140.59 Z0.3 F1080.0 E111.236\n"+
"G1 F240.0\n"+
"G1 E111.236\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.56 Y140.11 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E111.236\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y125.8 Z0.3 F1080.0 E112.457\n"+
"G1 F240.0\n"+
"G1 E112.457\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y125.16 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E112.457\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.36 Y139.67 Z0.3 F1080.0 E113.982\n"+
"G1 F240.0\n"+
"G1 E113.982\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.15 Y139.25 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E113.982\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y124.53 Z0.3 F1080.0 E115.663\n"+
"G1 F240.0\n"+
"G1 E115.663\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y123.89 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E115.663\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.89 Y138.87 Z0.3 F1080.0 E117.674\n"+
"G1 F240.0\n"+
"G1 E117.674\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X111.63 Y138.5 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E117.674\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y123.25 Z0.3 F1080.0 E119.784\n"+
"G1 F240.0\n"+
"G1 E119.784\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y122.62 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E119.784\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.22 Y134.27 Z0.3 F1080.0 E91.586\n"+
"G1 F240.0\n"+
"G1 E91.586\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.46 Y133.4 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E91.586\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y121.98 Z0.3 F1080.0 E89.7\n"+
"G1 F240.0\n"+
"G1 E89.7\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y121.34 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E89.7\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.46 Y132.76 Z0.3 F1080.0 E89.693\n"+
"G1 F240.0\n"+
"G1 E89.693\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.35 Y132.23 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E89.693\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y120.71 Z0.3 F1080.0 E90.506\n"+
"G1 F240.0\n"+
"G1 E90.506\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y120.07 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E90.506\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.18 Y131.77 Z0.3 F1080.0 E91.9\n"+
"G1 F240.0\n"+
"G1 E91.9\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.94 Y131.37 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E91.9\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y119.44 Z0.3 F1080.0 E93.77\n"+
"G1 F240.0\n"+
"G1 E93.77\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y118.8 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E93.77\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.65 Y131.02 Z0.3 F1080.0 E96.041\n"+
"G1 F240.0\n"+
"G1 E96.041\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.31 Y130.72 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E96.041\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y118.16 Z0.3 F1080.0 E98.696\n"+
"G1 F240.0\n"+
"G1 E98.696\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y117.53 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E98.696\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.92 Y130.48 Z0.3 F1080.0 E101.737\n"+
"G1 F240.0\n"+
"G1 E101.737\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y116.25 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E101.737\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.97 Y130.16 Z0.3 F1080.0 E109.232\n"+
"G1 F240.0\n"+
"G1 E109.232\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y114.98 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E109.232\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.56 Y130.29 Z0.3 F1080.0 E120.306\n"+
"G1 F240.0\n"+
"G1 E120.306\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.76 Y132.1 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E120.306\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.7 Y137.15 Z0.3 F1080.0 E39.743\n"+
"G1 F240.0\n"+
"G1 E39.743\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.77 Y136.72 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E39.743\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.6 Y132.89 Z0.3 F1080.0 E30.064\n"+
"G1 F240.0\n"+
"G1 E30.064\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.62 Y133.51 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E30.064\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.58 Y136.55 Z0.3 F1080.0 E23.892\n"+
"G1 F240.0\n"+
"G1 E23.892\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.26 Y136.5 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E23.892\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.75 Y134.02 Z0.3 F1080.0 E19.489\n"+
"G1 F240.0\n"+
"G1 E19.489\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.94 Y134.46 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E19.489\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.88 Y136.51 Z0.3 F1080.0 E16.146\n"+
"G1 F240.0\n"+
"G1 E16.146\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X108.43 Y136.6 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E16.146\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.19 Y134.85 Z0.3 F1080.0 E13.789\n"+
"G1 F240.0\n"+
"G1 E13.789\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.49 Y135.19 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E13.789\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.94 Y136.73 Z0.3 F1080.0 E12.154\n"+
"G1 F240.0\n"+
"G1 E12.154\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.42 Y136.89 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E12.154\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.83 Y135.47 Z0.3 F1080.0 E11.109\n"+
"G1 F240.0\n"+
"G1 E11.109\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X111.23 Y135.71 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E11.109\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.85 Y137.1 Z0.3 F1080.0 E10.882\n"+
"G1 F240.0\n"+
"G1 E10.882\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.27 Y137.31 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E10.882\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.69 Y135.89 Z0.3 F1080.0 E11.184\n"+
"G1 F240.0\n"+
"G1 E11.184\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.14 Y135.28 Z0.3 F3000.0\n"+
"G1 X126.87 Y115.62 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E11.184\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.35 Y130.14 Z0.3 F1080.0 E114.084\n"+
"G1 X112.22 Y135.99 Z0.3 F1080.0 E146.625\n"+
"G1 X110.64 Y137.58 Z0.3 F1080.0 E159.102\n"+
"G1 F240.0\n"+
"G1 E159.102\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.74 Y134.67 Z0.3 F3000.0\n"+
"G1 X126.87 Y116.89 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E159.102\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.48 Y130.28 Z0.3 F1080.0 E105.221\n"+
"G1 X112.86 Y135.99 Z0.3 F1080.0 E137.13\n"+
"G1 X111.0 Y137.85 Z0.3 F1080.0 E151.763\n"+
"G1 F240.0\n"+
"G1 E151.763\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.74 Y135.75 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E151.763\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.32 Y138.17 Z0.3 F1080.0 E19.021\n"+
"G1 F240.0\n"+
"G1 E19.021\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.69 Y142.5 Z0.3 F3000.0\n"+
"G1 X112.56 Y143.33 Z0.3 F3000.0\n"+
"G1 X110.33 Y146.79 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E19.021\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.8 Y152.33 Z0.3 F1080.0 E43.483\n"+
"G1 F240.0\n"+
"G1 E43.483\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.06 Y151.43 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E43.483\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.13 Y147.36 Z0.3 F1080.0 E31.961\n"+
"G1 F240.0\n"+
"G1 E31.961\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X108.28 Y147.58 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E31.961\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.07 Y150.78 Z0.3 F1080.0 E25.153\n"+
"G1 F240.0\n"+
"G1 E25.153\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.97 Y150.25 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E25.153\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.56 Y147.66 Z0.3 F1080.0 E20.349\n"+
"G1 F240.0\n"+
"G1 E20.349\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X106.92 Y147.66 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E20.349\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.79 Y149.79 Z0.3 F1080.0 E16.743\n"+
"G1 F240.0\n"+
"G1 E16.743\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.56 Y149.39 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E16.743\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.37 Y147.57 Z0.3 F1080.0 E14.232\n"+
"G1 F240.0\n"+
"G1 E14.232\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.85 Y147.46 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E14.232\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.27 Y149.04 Z0.3 F1080.0 E12.359\n"+
"G1 F240.0\n"+
"G1 E12.359\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.94 Y148.73 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E12.359\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.36 Y147.31 Z0.3 F1080.0 E11.215\n"+
"G1 F240.0\n"+
"G1 E11.215\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.92 Y147.11 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E11.215\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.55 Y148.48 Z0.3 F1080.0 E10.764\n"+
"G1 F240.0\n"+
"G1 E10.764\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.11 Y148.29 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E10.764\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.5 Y146.9 Z0.3 F1080.0 E10.917\n"+
"G1 F240.0\n"+
"G1 E10.917\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.12 Y146.64 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E10.917\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.6 Y148.16 Z0.3 F1080.0 E11.934\n"+
"G1 F240.0\n"+
"G1 E11.934\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X102.0 Y148.13 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E11.934\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.75 Y146.37 Z0.3 F1080.0 E13.765\n"+
"G1 F240.0\n"+
"G1 E13.765\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.43 Y146.06 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E13.765\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.21 Y148.28 Z0.3 F1080.0 E17.395\n"+
"G1 F240.0\n"+
"G1 E17.395\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X99.36 Y150.13 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E17.395\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.78 Y160.71 Z0.3 F1080.0 E83.144\n"+
"G1 F240.0\n"+
"G1 E83.144\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.62 Y160.23 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E83.144\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.11 Y145.75 Z0.3 F1080.0 E113.785\n"+
"G1 F240.0\n"+
"G1 E113.785\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X102.83 Y145.38 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E113.785\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.46 Y159.76 Z0.3 F1080.0 E112.956\n"+
"G1 F240.0\n"+
"G1 E112.956\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.24 Y159.34 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E112.956\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.57 Y145.01 Z0.3 F1080.0 E112.54\n"+
"G1 F240.0\n"+
"G1 E112.54\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X102.35 Y144.6 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E112.54\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.01 Y158.94 Z0.3 F1080.0 E112.674\n"+
"G1 F240.0\n"+
"G1 E112.674\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X87.74 Y158.57 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E112.674\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.14 Y144.17 Z0.3 F1080.0 E113.145\n"+
"G1 F240.0\n"+
"G1 E113.145\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.98 Y143.69 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E113.145\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.45 Y158.22 Z0.3 F1080.0 E114.186\n"+
"G1 F240.0\n"+
"G1 E114.186\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X87.13 Y157.9 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E114.186\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.85 Y143.18 Z0.3 F1080.0 E115.667\n"+
"G1 F240.0\n"+
"G1 E115.667\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.77 Y142.63 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E115.667\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X86.79 Y157.61 Z0.3 F1080.0 E117.67\n"+
"G1 F240.0\n"+
"G1 E117.67\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X86.42 Y157.34 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E117.67\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.75 Y142.01 Z0.3 F1080.0 E120.42\n"+
"G1 F240.0\n"+
"G1 E120.42\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.8 Y141.33 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E120.42\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X86.03 Y157.1 Z0.3 F1080.0 E123.928\n"+
"G1 F240.0\n"+
"G1 E123.928\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X85.6 Y156.89 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E123.928\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.97 Y140.52 Z0.3 F1080.0 E128.568\n"+
"G1 F240.0\n"+
"G1 E128.568\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X102.41 Y139.45 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E128.568\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X85.14 Y156.71 Z0.3 F1080.0 E135.655\n"+
"G1 F240.0\n"+
"G1 E135.655\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X84.66 Y156.56 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E135.655\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y114.34 Z0.3 F1080.0 E331.645\n"+
"G1 F240.0\n"+
"G1 E331.645\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y113.71 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E331.645\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X84.11 Y156.47 Z0.3 F1080.0 E335.939\n"+
"G1 F240.0\n"+
"G1 E335.939\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X83.53 Y156.41 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E335.939\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y113.07 Z0.3 F1080.0 E340.503\n"+
"G1 F240.0\n"+
"G1 E340.503\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y112.43 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E340.503\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X82.9 Y156.41 Z0.3 F1080.0 E345.508\n"+
"G1 F240.0\n"+
"G1 E345.508\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X82.14 Y156.53 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E345.508\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y111.8 Z0.3 F1080.0 E351.44\n"+
"G1 F240.0\n"+
"G1 E351.44\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.72 Y111.31 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E351.44\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X81.23 Y156.8 Z0.3 F1080.0 E357.442\n"+
"G1 F240.0\n"+
"G1 E357.442\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.14 Y159.89 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E357.442\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X74.52 Y163.51 Z0.3 F1080.0 E28.445\n"+
"G1 F240.0\n"+
"G1 E28.445\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X74.29 Y163.11 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E28.445\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.41 Y110.99 Z0.3 F1080.0 E409.466\n"+
"G1 F240.0\n"+
"G1 E409.466\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.09 Y110.67 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E409.466\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X74.06 Y162.7 Z0.3 F1080.0 E408.794\n"+
"G1 F240.0\n"+
"G1 E408.794\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X73.82 Y162.3 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E408.794\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X125.77 Y110.36 Z0.3 F1080.0 E408.126\n"+
"G1 F240.0\n"+
"G1 E408.126\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X125.45 Y110.04 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E408.126\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.59 Y161.9 Z0.3 F1080.0 E407.451\n"+
"G1 F240.0\n"+
"G1 E407.451\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X73.36 Y161.49 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E407.451\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X125.13 Y109.72 Z0.3 F1080.0 E406.783\n"+
"G1 F240.0\n"+
"G1 E406.783\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X124.82 Y109.4 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E406.783\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.22 Y160.99 Z0.3 F1080.0 E405.353\n"+
"G1 F240.0\n"+
"G1 E405.353\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X73.47 Y160.11 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E405.353\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X124.5 Y109.08 Z0.3 F1080.0 E400.89\n"+
"G1 F240.0\n"+
"G1 E400.89\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X124.18 Y108.76 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E400.89\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X94.27 Y138.67 Z0.3 F1080.0 E234.987\n"+
"G1 F240.0\n"+
"G1 E234.987\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X95.17 Y137.14 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E234.987\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X123.86 Y108.45 Z0.3 F1080.0 E225.441\n"+
"G1 F240.0\n"+
"G1 E225.441\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X123.54 Y108.13 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E225.441\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.22 Y114.45 Z0.3 F1080.0 E49.706\n"+
"G1 F240.0\n"+
"G1 E49.706\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.86 Y113.18 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E49.706\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X123.22 Y107.81 Z0.3 F1080.0 E42.171\n"+
"G1 F240.0\n"+
"G1 E42.171\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X122.91 Y107.49 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E42.171\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.08 Y112.31 Z0.3 F1080.0 E37.893\n"+
"G1 F240.0\n"+
"G1 E37.893\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X118.17 Y111.59 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E37.893\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X122.59 Y107.17 Z0.3 F1080.0 E34.707\n"+
"G1 F240.0\n"+
"G1 E34.707\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X122.27 Y106.86 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E34.707\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.17 Y110.95 Z0.3 F1080.0 E32.205\n"+
"G1 F240.0\n"+
"G1 E32.205\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X118.09 Y110.4 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E32.205\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X121.95 Y106.54 Z0.3 F1080.0 E30.323\n"+
"G1 F240.0\n"+
"G1 E30.323\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X121.63 Y106.22 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E30.323\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.98 Y109.87 Z0.3 F1080.0 E28.677\n"+
"G1 F240.0\n"+
"G1 E28.677\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.83 Y109.39 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E28.677\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X121.32 Y105.9 Z0.3 F1080.0 E27.4\n"+
"G1 F240.0\n"+
"G1 E27.4\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X121.0 Y105.58 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E27.4\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.64 Y108.94 Z0.3 F1080.0 E26.395\n"+
"G1 F240.0\n"+
"G1 E26.395\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.42 Y108.52 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.395\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.68 Y105.26 Z0.3 F1080.0 E25.574\n"+
"G1 F240.0\n"+
"G1 E25.574\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.36 Y104.95 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E25.574\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.17 Y108.14 Z0.3 F1080.0 E25.071\n"+
"G1 F240.0\n"+
"G1 E25.071\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X116.9 Y107.77 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E25.071\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.04 Y104.63 Z0.3 F1080.0 E24.678\n"+
"G1 F240.0\n"+
"G1 E24.678\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.72 Y104.31 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.678\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.59 Y107.44 Z0.3 F1080.0 E24.592\n"+
"G1 F240.0\n"+
"G1 E24.592\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X116.28 Y107.12 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.592\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.41 Y103.99 Z0.3 F1080.0 E24.596\n"+
"G1 F240.0\n"+
"G1 E24.596\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.09 Y103.67 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.596\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.92 Y106.85 Z0.3 F1080.0 E24.922\n"+
"G1 F240.0\n"+
"G1 E24.922\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.55 Y106.58 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.922\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y103.1 Z0.3 F1080.0 E27.294\n"+
"G1 F240.0\n"+
"G1 E27.294\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y102.47 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E27.294\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.13 Y106.36 Z0.3 F1080.0 E30.575\n"+
"G1 F240.0\n"+
"G1 E30.575\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.71 Y106.15 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E30.575\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y101.83 Z0.3 F1080.0 E33.91\n"+
"G1 F240.0\n"+
"G1 E33.91\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y101.19 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E33.91\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.22 Y105.99 Z0.3 F1080.0 E37.689\n"+
"G1 F240.0\n"+
"G1 E37.689\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.72 Y105.86 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E37.689\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y100.56 Z0.3 F1080.0 E41.641\n"+
"G1 F240.0\n"+
"G1 E41.641\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y99.92 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E41.641\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.17 Y105.77 Z0.3 F1080.0 E45.954\n"+
"G1 F240.0\n"+
"G1 E45.954\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.56 Y105.75 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E45.954\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.43 Y102.87 Z0.3 F1080.0 E22.58\n"+
"G1 F240.0\n"+
"G1 E22.58\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y102.69 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E22.58\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y99.28 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y98.65 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y102.06 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y101.42 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y98.01 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y97.38 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y100.79 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y100.15 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y96.74 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y96.1 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y99.51 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y98.88 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y95.47 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y94.83 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y98.24 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y97.6 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y94.19 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y93.56 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y96.97 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y96.33 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y92.92 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y92.28 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y95.69 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y95.06 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y91.65 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y91.01 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y94.42 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y93.79 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y90.38 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y89.74 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y93.15 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y92.51 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y89.1 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y88.47 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y91.88 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y91.24 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.52 Y86.33 Z0.3 F1080.0 E38.577\n"+
"G1 F240.0\n"+
"G1 E38.577\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.34 Y85.87 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E38.577\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y90.6 Z0.3 F1080.0 E37.158\n"+
"G1 F240.0\n"+
"G1 E37.158\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y89.97 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E37.158\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.7 Y85.87 Z0.3 F1080.0 E32.154\n"+
"G1 F240.0\n"+
"G1 E32.154\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.07 Y85.87 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E32.154\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y89.33 Z0.3 F1080.0 E27.161\n"+
"G1 F240.0\n"+
"G1 E27.161\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y88.69 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E27.161\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.43 Y85.87 Z0.3 F1080.0 E22.164\n"+
"G1 F240.0\n"+
"G1 E22.164\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.8 Y85.87 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E22.164\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.39 Y88.28 Z0.3 F1080.0 E18.935\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.75 Y88.28 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.16 Y85.87 Z0.3 F1080.0 E18.935\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X116.52 Y85.87 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.11 Y88.28 Z0.3 F1080.0 E18.935\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.48 Y88.28 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.89 Y85.87 Z0.3 F1080.0 E18.935\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.25 Y85.87 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.84 Y88.28 Z0.3 F1080.0 E18.935\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.2 Y88.28 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.61 Y85.87 Z0.3 F1080.0 E18.935\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.98 Y85.87 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.57 Y88.28 Z0.3 F1080.0 E18.939\n"+
"G1 F240.0\n"+
"G1 E18.939\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.93 Y88.28 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.939\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.34 Y85.87 Z0.3 F1080.0 E18.939\n"+
"G1 F240.0\n"+
"G1 E18.939\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.7 Y85.87 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.939\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.29 Y88.28 Z0.3 F1080.0 E18.931\n"+
"G1 F240.0\n"+
"G1 E18.931\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.66 Y88.28 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.931\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.07 Y85.87 Z0.3 F1080.0 E18.935\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X111.43 Y85.87 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y91.69 Z0.3 F1080.0 E45.726\n"+
"G1 F240.0\n"+
"G1 E45.726\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y91.06 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E45.726\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.8 Y85.87 Z0.3 F1080.0 E40.729\n"+
"G1 F240.0\n"+
"G1 E40.729\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.16 Y85.87 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E40.729\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y90.42 Z0.3 F1080.0 E35.725\n"+
"G1 F240.0\n"+
"G1 E35.725\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y89.78 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E35.725\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.52 Y85.87 Z0.3 F1080.0 E30.728\n"+
"G1 F240.0\n"+
"G1 E30.728\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X108.89 Y85.87 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E30.728\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y89.15 Z0.3 F1080.0 E25.731\n"+
"G1 F240.0\n"+
"G1 E25.731\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y88.51 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E25.731\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.25 Y85.87 Z0.3 F1080.0 E20.726\n"+
"G1 F240.0\n"+
"G1 E20.726\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.61 Y85.87 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E20.726\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.2 Y88.28 Z0.3 F1080.0 E18.935\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.57 Y88.28 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.98 Y85.87 Z0.3 F1080.0 E18.935\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X106.34 Y85.87 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.11 Y88.1 Z0.3 F1080.0 E17.513\n"+
"G1 F240.0\n"+
"G1 E17.513\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.11 Y87.47 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E17.513\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.7 Y85.87 Z0.3 F1080.0 E12.512\n"+
"G1 F240.0\n"+
"G1 E12.512\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.07 Y85.87 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E12.512\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.11 Y86.83 Z0.3 F1080.0 E7.507\n"+
"G1 F240.0\n"+
"G1 E7.507\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.11 Y86.19 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E7.507\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.43 Y85.87 Z0.3 F1080.0 E2.514\n"+
"G1 F240.0\n"+
"G1 E2.514\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y88.92 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E2.514\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y92.33 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y92.97 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y89.56 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y90.19 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y93.6 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y94.24 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y90.83 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y91.47 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y94.88 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y95.51 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y92.1 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y92.74 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y96.15 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y96.78 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y93.37 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y94.01 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y97.42 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y98.06 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y94.65 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y95.28 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y98.69 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y99.33 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y95.92 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y96.56 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y99.97 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y100.6 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y97.19 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y97.83 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y101.24 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y101.88 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y98.47 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y99.1 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y102.51 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y103.15 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y99.74 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y100.38 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y103.79 Z0.3 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.07 Y102.87 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y113.63 Z0.3 F1080.0 E84.523\n"+
"G1 F240.0\n"+
"G1 E84.523\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y114.27 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E84.523\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.71 Y102.87 Z0.3 F1080.0 E89.528\n"+
"G1 F240.0\n"+
"G1 E89.528\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.34 Y102.87 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E89.528\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y114.9 Z0.3 F1080.0 E94.521\n"+
"G1 F240.0\n"+
"G1 E94.521\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y115.54 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E94.521\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.98 Y102.87 Z0.3 F1080.0 E99.525\n"+
"G1 F240.0\n"+
"G1 E99.525\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X111.61 Y102.87 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E99.525\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y116.18 Z0.3 F1080.0 E104.526\n"+
"G1 F240.0\n"+
"G1 E104.526\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y116.81 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E104.526\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.25 Y102.87 Z0.3 F1080.0 E109.523\n"+
"G1 F240.0\n"+
"G1 E109.523\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.89 Y102.87 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E109.523\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y117.45 Z0.3 F1080.0 E114.528\n"+
"G1 F240.0\n"+
"G1 E114.528\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y118.09 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E114.528\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.63 Y108.76 Z0.3 F1080.0 E73.248\n"+
"G1 F240.0\n"+
"G1 E73.248\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.21 Y109.82 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E73.248\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y118.72 Z0.3 F1080.0 E69.945\n"+
"G1 F240.0\n"+
"G1 E69.945\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y119.36 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E69.945\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.05 Y110.62 Z0.3 F1080.0 E68.688\n"+
"G1 F240.0\n"+
"G1 E68.688\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.01 Y111.3 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E68.688\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y120.0 Z0.3 F1080.0 E68.354\n"+
"G1 F240.0\n"+
"G1 E68.354\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y120.63 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E68.354\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.03 Y111.91 Z0.3 F1080.0 E68.534\n"+
"G1 F240.0\n"+
"G1 E68.534\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.12 Y112.46 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E68.534\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y121.27 Z0.3 F1080.0 E69.218\n"+
"G1 F240.0\n"+
"G1 E69.218\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y121.91 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E69.218\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.25 Y112.96 Z0.3 F1080.0 E70.271\n"+
"G1 F240.0\n"+
"G1 E70.271\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.41 Y113.44 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E70.271\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y122.54 Z0.3 F1080.0 E71.488\n"+
"G1 F240.0\n"+
"G1 E71.488\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y123.18 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E71.488\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.62 Y113.87 Z0.3 F1080.0 E73.15\n"+
"G1 F240.0\n"+
"G1 E73.15\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.84 Y114.28 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E73.15\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y123.81 Z0.3 F1080.0 E74.875\n"+
"G1 F240.0\n"+
"G1 E74.875\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y124.45 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.875\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.11 Y114.65 Z0.3 F1080.0 E76.98\n"+
"G1 F240.0\n"+
"G1 E76.98\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X108.38 Y115.01 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E76.98\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y125.09 Z0.3 F1080.0 E79.149\n"+
"G1 F240.0\n"+
"G1 E79.149\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y125.72 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E79.149\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.7 Y115.33 Z0.3 F1080.0 E81.647\n"+
"G1 F240.0\n"+
"G1 E81.647\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.03 Y115.64 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E81.647\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y126.36 Z0.3 F1080.0 E84.228\n"+
"G1 F240.0\n"+
"G1 E84.228\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y127.0 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E84.228\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.4 Y115.91 Z0.3 F1080.0 E87.127\n"+
"G1 F240.0\n"+
"G1 E87.127\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.78 Y116.16 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E87.127\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y127.63 Z0.3 F1080.0 E90.133\n"+
"G1 F240.0\n"+
"G1 E90.133\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y128.27 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E90.133\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.2 Y116.37 Z0.3 F1080.0 E93.444\n"+
"G1 F240.0\n"+
"G1 E93.444\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.65 Y116.56 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E93.444\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y128.91 Z0.3 F1080.0 E96.956\n"+
"G1 F240.0\n"+
"G1 E96.956\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y129.54 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E96.956\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.13 Y116.72 Z0.3 F1080.0 E100.731\n"+
"G1 F240.0\n"+
"G1 E100.731\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X111.66 Y116.83 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E100.731\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y130.18 Z0.3 F1080.0 E104.88\n"+
"G1 F240.0\n"+
"G1 E104.88\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y130.81 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E104.88\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.22 Y116.91 Z0.3 F1080.0 E109.264\n"+
"G1 F240.0\n"+
"G1 E109.264\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.85 Y116.91 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E109.264\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y131.45 Z0.3 F1080.0 E114.257\n"+
"G1 F240.0\n"+
"G1 E114.257\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X97.86 Y132.54 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E114.257\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.58 Y116.82 Z0.3 F1080.0 E123.516\n"+
"G1 F240.0\n"+
"G1 E123.516\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.44 Y116.59 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E123.516\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X96.96 Y134.07 Z0.3 F1080.0 E137.34\n"+
"G1 F240.0\n"+
"G1 E137.34\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X96.06 Y135.61 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E137.34\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.72 Y115.95 Z0.3 F1080.0 E154.409\n"+
"G1 F240.0\n"+
"G1 E154.409\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.82 Y112.58 Z0.3 F3000.0\n"+
"G1 X117.95 Y111.75 Z0.3 F3000.0\n"+
"G1 X117.95 Y110.91 Z0.3 F3000.0\n"+
"G1 X117.82 Y110.07 Z0.3 F3000.0\n"+
"G1 X117.56 Y109.27 Z0.3 F3000.0\n"+
"G1 X117.18 Y108.52 Z0.3 F3000.0\n"+
"G1 X116.68 Y107.84 Z0.3 F3000.0\n"+
"G1 X116.08 Y107.24 Z0.3 F3000.0\n"+
"G1 X111.88 Y105.79 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E154.409\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.8 Y102.87 Z0.3 F1080.0 E22.918\n"+
"G1 F240.0\n"+
"G1 E22.918\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.16 Y102.87 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E22.918\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.08 Y105.95 Z0.3 F1080.0 E24.171\n"+
"G1 F240.0\n"+
"G1 E24.171\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.03 Y106.37 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.171\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.52 Y102.87 Z0.3 F1080.0 E27.475\n"+
"G1 F240.0\n"+
"G1 E27.475\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y102.28 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E27.475\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y113.0 Z0.3 F1080.0 E84.154\n"+
"G1 F240.0\n"+
"G1 E84.154\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y112.36 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E84.154\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y101.65 Z0.3 F1080.0 E84.154\n"+
"G1 F240.0\n"+
"G1 E84.154\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y101.01 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E84.154\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y111.72 Z0.3 F1080.0 E84.154\n"+
"G1 F240.0\n"+
"G1 E84.154\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.09 Y131.71 Z0.3 F3000.0\n"+
"G1 X92.57 Y140.37 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E84.154\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.72 Y159.22 Z0.3 F1080.0 E148.08\n"+
"G1 F240.0\n"+
"G1 E148.08\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X73.97 Y158.34 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E148.08\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X91.06 Y141.24 Z0.3 F1080.0 E134.295\n"+
"G1 F240.0\n"+
"G1 E134.295\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X89.56 Y142.11 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E134.295\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X74.22 Y157.45 Z0.3 F1080.0 E120.507\n"+
"G1 F240.0\n"+
"G1 E120.507\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X74.47 Y156.56 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E120.507\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.05 Y142.98 Z0.3 F1080.0 E106.718\n"+
"G1 F240.0\n"+
"G1 E106.718\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X86.55 Y143.85 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E106.718\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X74.72 Y155.68 Z0.3 F1080.0 E92.937\n"+
"G1 F240.0\n"+
"G1 E92.937\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X74.97 Y154.79 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E92.937\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X85.04 Y144.72 Z0.3 F1080.0 E79.141\n"+
"G1 F240.0\n"+
"G1 E79.141\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X83.54 Y145.59 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E79.141\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.22 Y153.91 Z0.3 F1080.0 E65.352\n"+
"G1 F240.0\n"+
"G1 E65.352\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X75.47 Y153.02 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E65.352\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X82.03 Y146.46 Z0.3 F1080.0 E51.568\n"+
"G1 F240.0\n"+
"G1 E51.568\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X80.52 Y147.33 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E51.568\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.72 Y152.14 Z0.3 F1080.0 E37.783\n"+
"G1 F240.0\n"+
"G1 E37.783\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X75.97 Y151.25 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E37.783\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.02 Y148.2 Z0.3 F1080.0 E23.994\n"+
"G1 F240.0\n"+
"G1 E23.994\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.51 Y149.07 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E23.994\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X76.21 Y150.36 Z0.3 F1080.0 E10.206\n"+
"G1 F240.0\n"+
"G1 E10.206\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X74.76 Y163.92 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E10.206\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.87 Y160.8 Z0.3 F1080.0 E24.458\n"+
"G1 F240.0\n"+
"G1 E24.458\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.75 Y161.56 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.458\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X74.99 Y164.32 Z0.3 F1080.0 E21.692\n"+
"G1 F240.0\n"+
"G1 E21.692\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X75.22 Y164.72 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E21.692\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.75 Y162.19 Z0.3 F1080.0 E19.858\n"+
"G1 F240.0\n"+
"G1 E19.858\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.8 Y162.78 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E19.858\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.45 Y165.13 Z0.3 F1080.0 E18.463\n"+
"G1 F240.0\n"+
"G1 E18.463\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X75.69 Y165.53 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.463\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.89 Y163.32 Z0.3 F1080.0 E17.34\n"+
"G1 F240.0\n"+
"G1 E17.34\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.05 Y163.8 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E17.34\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.92 Y165.93 Z0.3 F1080.0 E16.735\n"+
"G1 F240.0\n"+
"G1 E16.735\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X76.15 Y166.34 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E16.735\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X78.22 Y164.26 Z0.3 F1080.0 E16.271\n"+
"G1 F240.0\n"+
"G1 E16.271\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.44 Y164.69 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E16.271\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X76.39 Y166.74 Z0.3 F1080.0 E16.13\n"+
"G1 F240.0\n"+
"G1 E16.13\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X76.62 Y167.14 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E16.13\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X78.68 Y165.08 Z0.3 F1080.0 E16.177\n"+
"G1 F240.0\n"+
"G1 E16.177\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.95 Y165.45 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E16.177\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X76.85 Y167.55 Z0.3 F1080.0 E16.456\n"+
"G1 F240.0\n"+
"G1 E16.456\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.08 Y167.95 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E16.456\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.24 Y165.79 Z0.3 F1080.0 E16.939\n"+
"G1 F240.0\n"+
"G1 E16.939\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X79.56 Y166.11 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E16.939\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.32 Y168.35 Z0.3 F1080.0 E17.611\n"+
"G1 F240.0\n"+
"G1 E17.611\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.55 Y168.76 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E17.611\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.91 Y166.4 Z0.3 F1080.0 E18.499\n"+
"G1 F240.0\n"+
"G1 E18.499\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X80.28 Y166.67 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.499\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.78 Y169.16 Z0.3 F1080.0 E19.571\n"+
"G1 F240.0\n"+
"G1 E19.571\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.02 Y169.56 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E19.571\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X80.68 Y166.9 Z0.3 F1080.0 E20.907\n"+
"G1 F240.0\n"+
"G1 E20.907\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X81.1 Y167.12 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E20.907\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X78.25 Y169.97 Z0.3 F1080.0 E22.392\n"+
"G1 F240.0\n"+
"G1 E22.392\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.48 Y170.37 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E22.392\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X81.57 Y167.28 Z0.3 F1080.0 E24.242\n"+
"G1 F240.0\n"+
"G1 E24.242\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X82.05 Y167.44 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.242\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X78.72 Y170.77 Z0.3 F1080.0 E26.218\n"+
"G1 F240.0\n"+
"G1 E26.218\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X79.09 Y171.04 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.218\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X82.6 Y167.52 Z0.3 F1080.0 E27.593\n"+
"G1 F240.0\n"+
"G1 E27.593\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X83.19 Y167.57 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E27.593\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.59 Y171.17 Z0.3 F1080.0 E28.288\n"+
"G1 F240.0\n"+
"G1 E28.288\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X80.09 Y171.31 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E28.288\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X83.84 Y167.56 Z0.3 F1080.0 E29.435\n"+
"G1 F240.0\n"+
"G1 E29.435\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X84.6 Y167.44 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E29.435\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X80.6 Y171.44 Z0.3 F1080.0 E31.427\n"+
"G1 F240.0\n"+
"G1 E31.427\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X81.1 Y171.57 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E31.427\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X85.55 Y167.12 Z0.3 F1080.0 E34.974\n"+
"G1 F240.0\n"+
"G1 E34.974\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.46 Y164.21 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E34.974\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.82 Y152.86 Z0.3 F1080.0 E89.202\n"+
"G1 F240.0\n"+
"G1 E89.202\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X100.12 Y153.19 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E89.202\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X81.6 Y171.71 Z0.3 F1080.0 E145.479\n"+
"G1 F240.0\n"+
"G1 E145.479\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X82.1 Y171.84 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E145.479\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.47 Y153.48 Z0.3 F1080.0 E144.297\n"+
"G1 F240.0\n"+
"G1 E144.297\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X100.87 Y153.71 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E144.297\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X82.6 Y171.98 Z0.3 F1080.0 E143.511\n"+
"G1 F240.0\n"+
"G1 E143.511\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X83.11 Y172.11 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E143.511\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.33 Y153.89 Z0.3 F1080.0 E143.177\n"+
"G1 F240.0\n"+
"G1 E143.177\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.86 Y153.99 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E143.177\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X83.61 Y172.25 Z0.3 F1080.0 E143.401\n"+
"G1 F240.0\n"+
"G1 E143.401\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X84.11 Y172.38 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E143.401\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.51 Y153.98 Z0.3 F1080.0 E144.56\n"+
"G1 F240.0\n"+
"G1 E144.56\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.78 Y163.26 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E144.56\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.56 Y152.47 Z0.3 F1080.0 E84.739\n"+
"G1 F240.0\n"+
"G1 E84.739\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X99.37 Y152.03 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E84.739\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.9 Y162.5 Z0.3 F1080.0 E82.268\n"+
"G1 F240.0\n"+
"G1 E82.268\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.91 Y161.85 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E82.268\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.24 Y151.52 Z0.3 F1080.0 E81.188\n"+
"G1 F240.0\n"+
"G1 E81.188\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X99.21 Y150.92 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E81.188\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.86 Y161.26 Z0.3 F1080.0 E81.27\n"+
"G1 F240.0\n"+
"G1 E81.27\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.1 Y148.54 Z0.3 F3000.0\n"+
"G1 X101.93 Y148.35 Z0.3 F3000.0\n"+
"G1 X102.78 Y148.41 Z0.3 F3000.0\n"+
"G1 X103.57 Y148.74 Z0.3 F3000.0\n"+
"G1 X104.11 Y149.2 Z0.3 F3000.0\n"+
"G1 X107.27 Y147.44 Z0.3 F3000.0\n"+
"G1 X107.75 Y147.44 Z0.3 F3000.0\n"+
"G1 X108.59 Y147.31 Z0.3 F3000.0\n"+
"G1 X109.39 Y147.05 Z0.3 F3000.0\n"+
"G1 X126.87 Y131.53 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E81.27\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X85.61 Y172.78 Z0.3 F1080.0 E324.153\n"+
"G1 F240.0\n"+
"G1 E324.153\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X86.12 Y172.92 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E324.153\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y132.16 Z0.3 F1080.0 E320.209\n"+
"G1 F240.0\n"+
"G1 E320.209\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y132.8 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E320.209\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X86.62 Y173.05 Z0.3 F1080.0 E316.265\n"+
"G1 F240.0\n"+
"G1 E316.265\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X87.12 Y173.19 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E316.265\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.85 Y133.46 Z0.3 F1080.0 E312.109\n"+
"G1 F240.0\n"+
"G1 E312.109\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X125.98 Y134.97 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E312.109\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.62 Y173.32 Z0.3 F1080.0 E301.337\n"+
"G1 F240.0\n"+
"G1 E301.337\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X108.0 Y108.52 Z0.3 F3000.0\n"+
"G1 X108.5 Y107.84 Z0.3 F3000.0\n"+
"G1 X109.1 Y107.24 Z0.3 F3000.0\n"+
"G1 X109.78 Y106.74 Z0.3 F3000.0\n"+
"G1 X110.53 Y106.36 Z0.3 F3000.0\n"+
"G1 X111.33 Y106.1 Z0.3 F3000.0\n"+
"G1 X112.17 Y105.97 Z0.3 F3000.0\n"+
"G1 X112.42 Y105.97 Z0.3 F3000.0\n"+
"G1 X114.08 Y102.65 Z0.3 F3000.0\n"+
"G1 X115.39 Y102.65 Z0.3 F3000.0\n"+
"G1 X119.2 Y88.28 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E301.337\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.52 Y86.97 Z0.3 F1080.0 E10.351\n"+
"G1 F240.0\n"+
"G1 E10.351\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.52 Y87.6 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E10.351\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.84 Y88.28 Z0.3 F1080.0 E5.35\n"+
"G1 F240.0\n"+
"G1 E5.35\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.48 Y88.28 Z0.3 F3000.0\n"+
"G1 F240.0\n"+
"G1 E5.35\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.52 Y88.24 Z0.3 F1080.0 E0.354\n"+
"G1 F240.0\n"+
"G1 E0.354\n"+
"G1 F1080.0\n"+
";\n"+
"(</surroundingLoop>)\n"+
"G1 F30.0\n"+
"(<operatingLayerEnd> </operatingLayerEnd>)\n"+
"(<layer> 0.6 )\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X93.055 Y139.175 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y131.549 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y111.258 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y103.957 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y89.078 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y89.078 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y85.078 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y85.078 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y89.078 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y89.078 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y103.277 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y111.128 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y133.629 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.426 Y163.491 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X90.593 Y174.941 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.302 Y171.647 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X72.316 Y161.279 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X75.721 Y149.182 Z0.6 </boundaryPoint>)\n"+
"(<perimeter> outer )\n"+
"M108 S110.0\n"+
"M108 S110.0\n"+
"G1 X120.52 Y88.24 Z0.6 F30.0\n"+
"G91\n"+
"G1 F20\n"+
"G1 F1500\n"+
"G1 X-0.3 Y-0.3 F1500\n"+
"G90\n"+
"G4 P3000\n"+
"G92 X0;set x 0\n"+
"G1 X-1.0 F3000.0 \n"+
"G1 X-500.0  F3200.0 ;horizontal move\n"+
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
"G1 X120.52 Y88.24 Z0.6 F3000.0\n"+
"G1 X120.74 Y88.43 Z0.6 F3000.0\n"+
"G1 X121.08 Y88.72 Z0.6 F79.516\n"+
"G1 F240.0\n"+
"G1 E0.354\n"+
"G1 F79.516\n"+
"G92 E0\n"+
";\n"+
"G1 X121.08 Y88.84 Z0.6 F540.0 E1.418\n"+
"G1 X119.58 Y88.84 Z0.6 F540.0 E19.751\n"+
"G1 X119.58 Y103.38 Z0.6 F540.0 E197.438\n"+
"G1 X127.43 Y111.23 Z0.6 F540.0 E333.141\n"+
"G1 X127.43 Y133.57 Z0.6 F540.0 E606.161\n"+
"G1 X110.25 Y163.32 Z0.6 F540.0 E1026.028\n"+
"G1 X90.56 Y174.68 Z0.6 F540.0 E1303.924\n"+
"G1 X78.46 Y171.44 Z0.6 F540.0 E1457.014\n"+
"G1 X72.57 Y161.25 Z0.6 F540.0 E1600.895\n"+
"G1 X75.93 Y149.34 Z0.6 F540.0 E1752.07\n"+
"G1 X93.23 Y139.35 Z0.6 F540.0 E1996.279\n"+
"G1 X97.76 Y131.61 Z0.6 F540.0 E2105.828\n"+
"G1 X97.76 Y111.36 Z0.6 F540.0 E2353.413\n"+
"G1 X105.06 Y104.06 Z0.6 F540.0 E2479.61\n"+
"G1 X105.06 Y88.84 Z0.6 F540.0 E2665.608\n"+
"G1 X103.56 Y88.84 Z0.6 F540.0 E2683.941\n"+
"G1 X103.56 Y85.32 Z0.6 F540.0 E2726.963\n"+
"G1 X121.08 Y85.32 Z0.6 F540.0 E2941.097\n"+
"G1 X121.08 Y88.43 Z0.6 F540.0 E2979.181\n"+
"G1 F240.0\n"+
"G1 E2979.181\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X114.816 Y89.078 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y89.078 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y102.078 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.816 Y102.078 Z0.6 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X114.91 Y88.84 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E2979.181\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.58 Y88.84 Z0.6 F540.0 E65.218\n"+
"G1 X109.58 Y102.32 Z0.6 F540.0 E229.973\n"+
"G1 X115.06 Y102.32 Z0.6 F540.0 E296.951\n"+
"G1 X115.06 Y88.98 Z0.6 F540.0 E459.947\n"+
"G1 F240.0\n"+
"G1 E459.947\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X107.804 Y111.704 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.923 Y112.448 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.155 Y113.164 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.497 Y113.835 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.94 Y114.444 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.473 Y114.977 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.082 Y115.42 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.753 Y115.762 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.469 Y115.994 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.213 Y116.112 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.967 Y116.112 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.711 Y115.994 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.427 Y115.762 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.098 Y115.42 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.707 Y114.977 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.239 Y114.444 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.683 Y113.835 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.025 Y113.164 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y112.448 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y111.704 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y110.95 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y110.206 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.025 Y109.49 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.683 Y108.819 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.239 Y108.21 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.707 Y107.677 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.098 Y107.234 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.427 Y106.892 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.711 Y106.66 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.967 Y106.542 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.213 Y106.542 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.469 Y106.66 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.753 Y106.892 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.082 Y107.234 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.473 Y107.677 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.94 Y108.21 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.497 Y108.819 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.155 Y109.49 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.923 Y110.206 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.804 Y110.95 Z0.6 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X115.39 Y102.65 Z0.6 F3000.0\n"+
"G1 X112.84 Y106.3 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E459.947\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.19 Y106.3 Z0.6 F540.0 E7.92\n"+
"G1 X111.41 Y106.43 Z0.6 F540.0 E17.585\n"+
"G1 X110.66 Y106.67 Z0.6 F540.0 E27.248\n"+
"G1 X109.96 Y107.03 Z0.6 F540.0 E36.917\n"+
"G1 X109.32 Y107.49 Z0.6 F540.0 E46.586\n"+
"G1 X108.76 Y108.05 Z0.6 F540.0 E56.257\n"+
"G1 X108.29 Y108.69 Z0.6 F540.0 E65.916\n"+
"G1 X107.93 Y109.4 Z0.6 F540.0 E75.586\n"+
"G1 X107.69 Y110.15 Z0.6 F540.0 E85.249\n"+
"G1 X107.57 Y110.93 Z0.6 F540.0 E94.914\n"+
"G1 X107.57 Y111.72 Z0.6 F540.0 E104.594\n"+
"G1 X107.69 Y112.5 Z0.6 F540.0 E114.259\n"+
"G1 X107.93 Y113.26 Z0.6 F540.0 E123.922\n"+
"G1 X108.29 Y113.96 Z0.6 F540.0 E133.591\n"+
"G1 X108.76 Y114.6 Z0.6 F540.0 E143.25\n"+
"G1 X109.32 Y115.16 Z0.6 F540.0 E152.921\n"+
"G1 X109.96 Y115.63 Z0.6 F540.0 E162.59\n"+
"G1 X110.66 Y115.98 Z0.6 F540.0 E172.259\n"+
"G1 X111.41 Y116.23 Z0.6 F540.0 E181.922\n"+
"G1 X112.19 Y116.35 Z0.6 F540.0 E191.587\n"+
"G1 X112.99 Y116.35 Z0.6 F540.0 E201.267\n"+
"G1 X113.77 Y116.23 Z0.6 F540.0 E210.932\n"+
"G1 X114.52 Y115.98 Z0.6 F540.0 E220.595\n"+
"G1 X115.22 Y115.63 Z0.6 F540.0 E230.265\n"+
"G1 X115.86 Y115.16 Z0.6 F540.0 E239.924\n"+
"G1 X116.42 Y114.6 Z0.6 F540.0 E249.603\n"+
"G1 X116.89 Y113.96 Z0.6 F540.0 E259.262\n"+
"G1 X117.25 Y113.26 Z0.6 F540.0 E268.932\n"+
"G1 X117.49 Y112.5 Z0.6 F540.0 E278.595\n"+
"G1 X117.61 Y111.72 Z0.6 F540.0 E288.258\n"+
"G1 X117.61 Y110.93 Z0.6 F540.0 E297.938\n"+
"G1 X117.49 Y110.15 Z0.6 F540.0 E307.601\n"+
"G1 X117.25 Y109.4 Z0.6 F540.0 E317.264\n"+
"G1 X116.89 Y108.69 Z0.6 F540.0 E326.933\n"+
"G1 X116.42 Y108.05 Z0.6 F540.0 E336.592\n"+
"G1 X115.86 Y107.49 Z0.6 F540.0 E346.272\n"+
"G1 X115.22 Y107.03 Z0.6 F540.0 E355.931\n"+
"G1 X114.52 Y106.67 Z0.6 F540.0 E365.6\n"+
"G1 X113.77 Y106.43 Z0.6 F540.0 E375.263\n"+
"G1 X113.13 Y106.33 Z0.6 F540.0 E383.17\n"+
"G1 F240.0\n"+
"G1 E383.17\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X111.269 Y134.809 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y134.986 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y135.115 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y135.194 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y135.22 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y135.194 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y135.115 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y134.986 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y134.809 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y134.59 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y134.334 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y134.046 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y133.734 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y133.406 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.683 Y133.07 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y132.734 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y132.406 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y132.094 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y131.806 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y131.55 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y131.331 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y131.154 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y131.024 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y130.946 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y130.92 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y130.946 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y131.024 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y131.154 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.269 Y131.331 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y131.55 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y131.806 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y132.094 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y132.406 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y132.734 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.383 Y133.07 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y133.406 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y133.734 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y134.046 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y134.334 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y134.59 Z0.6 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X115.4 Y106.74 Z0.6 F3000.0\n"+
"G1 X116.08 Y107.24 Z0.6 F3000.0\n"+
"G1 X116.68 Y107.84 Z0.6 F3000.0\n"+
"G1 X117.18 Y108.52 Z0.6 F3000.0\n"+
"G1 X117.56 Y109.27 Z0.6 F3000.0\n"+
"G1 X117.82 Y110.07 Z0.6 F3000.0\n"+
"G1 X117.95 Y110.91 Z0.6 F3000.0\n"+
"G1 X112.39 Y130.69 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.17\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.8 Y130.8 Z0.6 F540.0 E7.375\n"+
"G1 X111.13 Y131.14 Z0.6 F540.0 E16.536\n"+
"G1 X110.6 Y131.66 Z0.6 F540.0 E25.662\n"+
"G1 X110.26 Y132.33 Z0.6 F540.0 E34.823\n"+
"G1 X110.17 Y132.7 Z0.6 F540.0 E39.4\n"+
"G1 X110.17 Y133.44 Z0.6 F540.0 E48.543\n"+
"G1 X110.26 Y133.81 Z0.6 F540.0 E53.12\n"+
"G1 X110.6 Y134.48 Z0.6 F540.0 E62.281\n"+
"G1 X111.13 Y135.0 Z0.6 F540.0 E71.407\n"+
"G1 X111.45 Y135.2 Z0.6 F540.0 E75.994\n"+
"G1 X112.16 Y135.43 Z0.6 F540.0 E85.146\n"+
"G1 X112.91 Y135.43 Z0.6 F540.0 E94.288\n"+
"G1 X113.27 Y135.34 Z0.6 F540.0 E98.866\n"+
"G1 X113.94 Y135.0 Z0.6 F540.0 E108.027\n"+
"G1 X114.47 Y134.48 Z0.6 F540.0 E117.153\n"+
"G1 X114.81 Y133.81 Z0.6 F540.0 E126.314\n"+
"G1 X114.9 Y133.44 Z0.6 F540.0 E130.891\n"+
"G1 X114.9 Y132.7 Z0.6 F540.0 E140.034\n"+
"G1 X114.81 Y132.33 Z0.6 F540.0 E144.611\n"+
"G1 X114.47 Y131.66 Z0.6 F540.0 E153.772\n"+
"G1 X113.94 Y131.14 Z0.6 F540.0 E162.898\n"+
"G1 X113.27 Y130.8 Z0.6 F540.0 E172.059\n"+
"G1 X112.68 Y130.69 Z0.6 F540.0 E179.434\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X103.236 Y144.585 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y145.194 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y145.727 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y146.17 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y146.512 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y146.743 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y146.862 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y146.862 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y146.743 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y146.512 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y146.17 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y145.727 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y145.194 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y144.585 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y143.914 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y143.198 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y142.454 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y141.7 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y140.956 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y140.24 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y139.569 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y138.96 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y138.427 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y137.984 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y137.642 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y137.41 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y137.291 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y137.291 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y137.41 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y137.642 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y137.984 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y138.427 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y138.96 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.236 Y139.569 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y140.24 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y140.956 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y141.7 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y142.454 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y143.198 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y143.914 Z0.6 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X110.93 Y130.86 Z0.6 F3000.0\n"+
"G1 X110.33 Y131.47 Z0.6 F3000.0\n"+
"G1 X109.12 Y137.38 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.51 Y137.18 Z0.6 F540.0 E7.904\n"+
"G1 X107.73 Y137.05 Z0.6 F540.0 E17.569\n"+
"G1 X106.93 Y137.05 Z0.6 F540.0 E27.249\n"+
"G1 X106.15 Y137.18 Z0.6 F540.0 E36.914\n"+
"G1 X105.4 Y137.42 Z0.6 F540.0 E46.577\n"+
"G1 X104.7 Y137.78 Z0.6 F540.0 E56.247\n"+
"G1 X104.06 Y138.24 Z0.6 F540.0 E65.899\n"+
"G1 X103.5 Y138.8 Z0.6 F540.0 E75.587\n"+
"G1 X103.03 Y139.44 Z0.6 F540.0 E85.246\n"+
"G1 X102.67 Y140.15 Z0.6 F540.0 E94.915\n"+
"G1 X102.43 Y140.9 Z0.6 F540.0 E104.578\n"+
"G1 X102.3 Y141.68 Z0.6 F540.0 E114.243\n"+
"G1 X102.3 Y142.47 Z0.6 F540.0 E123.923\n"+
"G1 X102.43 Y143.25 Z0.6 F540.0 E133.588\n"+
"G1 X102.67 Y144.01 Z0.6 F540.0 E143.239\n"+
"G1 X103.03 Y144.71 Z0.6 F540.0 E152.92\n"+
"G1 X103.5 Y145.35 Z0.6 F540.0 E162.579\n"+
"G1 X104.06 Y145.91 Z0.6 F540.0 E172.258\n"+
"G1 X104.7 Y146.38 Z0.6 F540.0 E181.917\n"+
"G1 X105.4 Y146.73 Z0.6 F540.0 E191.587\n"+
"G1 X106.15 Y146.98 Z0.6 F540.0 E201.25\n"+
"G1 X106.93 Y147.1 Z0.6 F540.0 E210.915\n"+
"G1 X107.73 Y147.1 Z0.6 F540.0 E220.595\n"+
"G1 X108.51 Y146.98 Z0.6 F540.0 E230.26\n"+
"G1 X109.26 Y146.73 Z0.6 F540.0 E239.923\n"+
"G1 X109.96 Y146.38 Z0.6 F540.0 E249.592\n"+
"G1 X110.6 Y145.91 Z0.6 F540.0 E259.251\n"+
"G1 X111.16 Y145.35 Z0.6 F540.0 E268.922\n"+
"G1 X111.63 Y144.71 Z0.6 F540.0 E278.588\n"+
"G1 X111.99 Y144.01 Z0.6 F540.0 E288.269\n"+
"G1 X112.23 Y143.25 Z0.6 F540.0 E297.92\n"+
"G1 X112.35 Y142.47 Z0.6 F540.0 E307.585\n"+
"G1 X112.35 Y141.68 Z0.6 F540.0 E317.265\n"+
"G1 X112.23 Y140.9 Z0.6 F540.0 E326.93\n"+
"G1 X111.99 Y140.15 Z0.6 F540.0 E336.593\n"+
"G1 X111.63 Y139.44 Z0.6 F540.0 E346.263\n"+
"G1 X111.16 Y138.8 Z0.6 F540.0 E355.929\n"+
"G1 X110.6 Y138.24 Z0.6 F540.0 E365.608\n"+
"G1 X109.96 Y137.78 Z0.6 F540.0 E375.26\n"+
"G1 X109.39 Y137.49 Z0.6 F540.0 E383.175\n"+
"G1 F240.0\n"+
"G1 E383.175\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X100.159 Y151.887 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.312 Y152.187 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.51 Y152.46 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.749 Y152.699 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.022 Y152.897 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.322 Y153.05 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.643 Y153.154 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.976 Y153.207 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.314 Y153.207 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.647 Y153.154 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.968 Y153.05 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.268 Y152.897 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.541 Y152.699 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.78 Y152.46 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y152.187 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y151.887 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.236 Y151.566 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y151.233 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y150.895 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.236 Y150.562 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y150.241 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y149.941 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.78 Y149.668 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.541 Y149.429 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.268 Y149.231 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.968 Y149.078 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.647 Y148.973 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.314 Y148.921 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.976 Y148.921 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.643 Y148.973 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.322 Y149.078 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.022 Y149.231 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.749 Y149.429 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.51 Y149.668 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.312 Y149.941 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.159 Y150.241 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y150.562 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y150.895 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y151.233 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y151.566 Z0.6 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X106.91 Y136.72 Z0.6 F3000.0\n"+
"G1 X106.07 Y136.85 Z0.6 F3000.0\n"+
"G1 X105.27 Y137.11 Z0.6 F3000.0\n"+
"G1 X104.52 Y137.49 Z0.6 F3000.0\n"+
"G1 X103.84 Y137.99 Z0.6 F3000.0\n"+
"G1 X103.24 Y138.59 Z0.6 F3000.0\n"+
"G1 X102.74 Y139.27 Z0.6 F3000.0\n"+
"G1 X102.36 Y140.02 Z0.6 F3000.0\n"+
"G1 X102.1 Y140.82 Z0.6 F3000.0\n"+
"G1 X101.97 Y141.66 Z0.6 F3000.0\n"+
"G1 X103.27 Y148.96 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.175\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.7 Y148.74 Z0.6 F540.0 E7.397\n"+
"G1 X101.96 Y148.68 Z0.6 F540.0 E16.542\n"+
"G1 X101.59 Y148.74 Z0.6 F540.0 E21.119\n"+
"G1 X100.9 Y149.03 Z0.6 F540.0 E30.265\n"+
"G1 X100.33 Y149.51 Z0.6 F540.0 E39.41\n"+
"G1 X100.11 Y149.82 Z0.6 F540.0 E43.987\n"+
"G1 X99.82 Y150.51 Z0.6 F540.0 E53.121\n"+
"G1 X99.76 Y151.25 Z0.6 F540.0 E62.278\n"+
"G1 X99.82 Y151.62 Z0.6 F540.0 E66.856\n"+
"G1 X100.11 Y152.31 Z0.6 F540.0 E76.001\n"+
"G1 X100.33 Y152.62 Z0.6 F540.0 E80.577\n"+
"G1 X100.9 Y153.1 Z0.6 F540.0 E89.723\n"+
"G1 X101.59 Y153.39 Z0.6 F540.0 E98.868\n"+
"G1 X102.33 Y153.45 Z0.6 F540.0 E108.014\n"+
"G1 X102.7 Y153.39 Z0.6 F540.0 E112.591\n"+
"G1 X103.39 Y153.1 Z0.6 F540.0 E121.736\n"+
"G1 X103.96 Y152.62 Z0.6 F540.0 E130.882\n"+
"G1 X104.18 Y152.31 Z0.6 F540.0 E135.459\n"+
"G1 X104.47 Y151.62 Z0.6 F540.0 E144.604\n"+
"G1 X104.53 Y150.88 Z0.6 F540.0 E153.749\n"+
"G1 X104.47 Y150.51 Z0.6 F540.0 E158.338\n"+
"G1 X104.18 Y149.82 Z0.6 F540.0 E167.472\n"+
"G1 X103.96 Y149.51 Z0.6 F540.0 E172.049\n"+
"G1 X103.51 Y149.11 Z0.6 F540.0 E179.434\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X78.894 Y163.827 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.236 Y164.498 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.679 Y165.107 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.212 Y165.64 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.821 Y166.082 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.492 Y166.425 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.208 Y166.657 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.952 Y166.775 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.706 Y166.775 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.45 Y166.657 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.166 Y166.425 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.837 Y166.082 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.446 Y165.64 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.979 Y165.107 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.422 Y164.498 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.764 Y163.827 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y163.111 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y162.367 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y161.613 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y160.868 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.764 Y160.153 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.422 Y159.482 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.979 Y158.873 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.446 Y158.34 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.837 Y157.897 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.166 Y157.555 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.45 Y157.323 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.706 Y157.205 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.952 Y157.205 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.208 Y157.323 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.492 Y157.555 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.821 Y157.897 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.212 Y158.34 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.679 Y158.873 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.236 Y159.482 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.894 Y160.153 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.662 Y160.868 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y161.613 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y162.367 Z0.6 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.662 Y163.111 Z0.6 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X101.93 Y148.35 Z0.6 F3000.0\n"+
"G1 X101.1 Y148.54 Z0.6 F3000.0\n"+
"G1 X87.54 Y159.24 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.16 Y158.72 Z0.6 F540.0 E7.901\n"+
"G1 X86.6 Y158.16 Z0.6 F540.0 E17.581\n"+
"G1 X85.96 Y157.69 Z0.6 F540.0 E27.24\n"+
"G1 X85.26 Y157.33 Z0.6 F540.0 E36.909\n"+
"G1 X84.51 Y157.09 Z0.6 F540.0 E46.572\n"+
"G1 X83.73 Y156.97 Z0.6 F540.0 E56.237\n"+
"G1 X82.93 Y156.97 Z0.6 F540.0 E65.917\n"+
"G1 X82.15 Y157.09 Z0.6 F540.0 E75.582\n"+
"G1 X81.4 Y157.33 Z0.6 F540.0 E85.245\n"+
"G1 X80.69 Y157.69 Z0.6 F540.0 E94.915\n"+
"G1 X80.06 Y158.16 Z0.6 F540.0 E104.574\n"+
"G1 X79.5 Y158.72 Z0.6 F540.0 E114.253\n"+
"G1 X79.03 Y159.36 Z0.6 F540.0 E123.912\n"+
"G1 X78.67 Y160.06 Z0.6 F540.0 E133.582\n"+
"G1 X78.43 Y160.81 Z0.6 F540.0 E143.245\n"+
"G1 X78.3 Y161.59 Z0.6 F540.0 E152.91\n"+
"G1 X78.3 Y162.39 Z0.6 F540.0 E162.59\n"+
"G1 X78.43 Y163.17 Z0.6 F540.0 E172.243\n"+
"G1 X78.67 Y163.92 Z0.6 F540.0 E181.917\n"+
"G1 X79.03 Y164.62 Z0.6 F540.0 E191.587\n"+
"G1 X79.5 Y165.26 Z0.6 F540.0 E201.246\n"+
"G1 X80.06 Y165.82 Z0.6 F540.0 E210.925\n"+
"G1 X80.69 Y166.29 Z0.6 F540.0 E220.584\n"+
"G1 X81.4 Y166.65 Z0.6 F540.0 E230.254\n"+
"G1 X82.15 Y166.89 Z0.6 F540.0 E239.917\n"+
"G1 X82.93 Y167.02 Z0.6 F540.0 E249.582\n"+
"G1 X83.73 Y167.02 Z0.6 F540.0 E259.262\n"+
"G1 X84.51 Y166.89 Z0.6 F540.0 E268.927\n"+
"G1 X85.26 Y166.65 Z0.6 F540.0 E278.59\n"+
"G1 X85.96 Y166.29 Z0.6 F540.0 E288.259\n"+
"G1 X86.6 Y165.82 Z0.6 F540.0 E297.918\n"+
"G1 X87.16 Y165.26 Z0.6 F540.0 E307.598\n"+
"G1 X87.63 Y164.62 Z0.6 F540.0 E317.257\n"+
"G1 X87.99 Y163.92 Z0.6 F540.0 E326.926\n"+
"G1 X88.23 Y163.17 Z0.6 F540.0 E336.601\n"+
"G1 X88.35 Y162.39 Z0.6 F540.0 E346.254\n"+
"G1 X88.35 Y161.59 Z0.6 F540.0 E355.934\n"+
"G1 X88.23 Y160.81 Z0.6 F540.0 E365.599\n"+
"G1 X87.99 Y160.06 Z0.6 F540.0 E375.262\n"+
"G1 X87.69 Y159.48 Z0.6 F540.0 E383.177\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<loop> inner )\n"+
"M108 S100.0\n"+
"M108 S100.0\n"+
"G1 X87.94 Y159.0 Z0.6 F1080.0 E386.218\n"+
"G1 X87.52 Y158.41 Z0.6 F1080.0 E390.215\n"+
"G1 X86.91 Y157.8 Z0.6 F1080.0 E395.023\n"+
"G1 X86.21 Y157.29 Z0.6 F1080.0 E399.819\n"+
"G1 X85.44 Y156.9 Z0.6 F1080.0 E404.624\n"+
"G1 X84.61 Y156.64 Z0.6 F1080.0 E409.426\n"+
"G1 X83.76 Y156.5 Z0.6 F1080.0 E414.218\n"+
"G1 X82.9 Y156.5 Z0.6 F1080.0 E419.029\n"+
"G1 X82.04 Y156.64 Z0.6 F1080.0 E423.827\n"+
"G1 X81.22 Y156.9 Z0.6 F1080.0 E428.624\n"+
"G1 X80.45 Y157.29 Z0.6 F1080.0 E433.429\n"+
"G1 X79.75 Y157.8 Z0.6 F1080.0 E438.225\n"+
"G1 X79.14 Y158.41 Z0.6 F1080.0 E443.033\n"+
"G1 X78.63 Y159.11 Z0.6 F1080.0 E447.829\n"+
"G1 X78.24 Y159.88 Z0.6 F1080.0 E452.634\n"+
"G1 X77.97 Y160.7 Z0.6 F1080.0 E457.431\n"+
"G1 X77.84 Y161.56 Z0.6 F1080.0 E462.228\n"+
"G1 X77.84 Y162.42 Z0.6 F1080.0 E467.04\n"+
"G1 X77.97 Y163.28 Z0.6 F1080.0 E471.837\n"+
"G1 X78.24 Y164.1 Z0.6 F1080.0 E476.634\n"+
"G1 X78.63 Y164.87 Z0.6 F1080.0 E481.439\n"+
"G1 X79.14 Y165.57 Z0.6 F1080.0 E486.235\n"+
"G1 X79.75 Y166.18 Z0.6 F1080.0 E491.043\n"+
"G1 X80.45 Y166.69 Z0.6 F1080.0 E495.839\n"+
"G1 X81.22 Y167.08 Z0.6 F1080.0 E500.644\n"+
"G1 X82.04 Y167.34 Z0.6 F1080.0 E505.439\n"+
"G1 X82.9 Y167.48 Z0.6 F1080.0 E510.238\n"+
"G1 X83.76 Y167.48 Z0.6 F1080.0 E515.049\n"+
"G1 X84.61 Y167.34 Z0.6 F1080.0 E519.842\n"+
"G1 X85.44 Y167.08 Z0.6 F1080.0 E524.642\n"+
"G1 X86.21 Y166.69 Z0.6 F1080.0 E529.447\n"+
"G1 X86.91 Y166.18 Z0.6 F1080.0 E534.243\n"+
"G1 X87.52 Y165.57 Z0.6 F1080.0 E539.051\n"+
"G1 X88.03 Y164.87 Z0.6 F1080.0 E543.847\n"+
"G1 X88.42 Y164.1 Z0.6 F1080.0 E548.653\n"+
"G1 X88.68 Y163.28 Z0.6 F1080.0 E553.449\n"+
"G1 X88.82 Y162.42 Z0.6 F1080.0 E558.247\n"+
"G1 X88.82 Y161.56 Z0.6 F1080.0 E563.058\n"+
"G1 X88.68 Y160.7 Z0.6 F1080.0 E567.856\n"+
"G1 X88.42 Y159.88 Z0.6 F1080.0 E572.652\n"+
"G1 X88.09 Y159.24 Z0.6 F1080.0 E576.66\n"+
"G1 F240.0\n"+
"G1 E576.66\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.79 Y152.67 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E576.66\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.29 Y153.24 Z0.6 F1080.0 E4.176\n"+
"G1 X100.65 Y153.5 Z0.6 F1080.0 E6.667\n"+
"G1 X101.05 Y153.7 Z0.6 F1080.0 E9.149\n"+
"G1 X101.48 Y153.84 Z0.6 F1080.0 E11.64\n"+
"G1 X101.92 Y153.91 Z0.6 F1080.0 E14.136\n"+
"G1 X102.37 Y153.91 Z0.6 F1080.0 E16.625\n"+
"G1 X102.81 Y153.84 Z0.6 F1080.0 E19.116\n"+
"G1 X103.24 Y153.7 Z0.6 F1080.0 E21.612\n"+
"G1 X103.64 Y153.5 Z0.6 F1080.0 E24.094\n"+
"G1 X104.0 Y153.24 Z0.6 F1080.0 E26.585\n"+
"G1 X104.32 Y152.92 Z0.6 F1080.0 E29.083\n"+
"G1 X104.58 Y152.56 Z0.6 F1080.0 E31.574\n"+
"G1 X104.78 Y152.16 Z0.6 F1080.0 E34.056\n"+
"G1 X104.92 Y151.73 Z0.6 F1080.0 E36.55\n"+
"G1 X104.99 Y151.29 Z0.6 F1080.0 E39.042\n"+
"G1 X104.99 Y150.84 Z0.6 F1080.0 E41.531\n"+
"G1 X104.92 Y150.4 Z0.6 F1080.0 E44.023\n"+
"G1 X104.78 Y149.97 Z0.6 F1080.0 E46.517\n"+
"G1 X104.58 Y149.57 Z0.6 F1080.0 E49.0\n"+
"G1 X104.32 Y149.21 Z0.6 F1080.0 E51.49\n"+
"G1 X104.0 Y148.89 Z0.6 F1080.0 E53.988\n"+
"G1 X103.64 Y148.63 Z0.6 F1080.0 E56.479\n"+
"G1 X103.24 Y148.43 Z0.6 F1080.0 E58.961\n"+
"G1 X102.81 Y148.29 Z0.6 F1080.0 E61.457\n"+
"G1 X102.37 Y148.22 Z0.6 F1080.0 E63.948\n"+
"G1 X101.92 Y148.22 Z0.6 F1080.0 E66.437\n"+
"G1 X101.48 Y148.29 Z0.6 F1080.0 E68.933\n"+
"G1 X101.05 Y148.43 Z0.6 F1080.0 E71.424\n"+
"G1 X100.65 Y148.63 Z0.6 F1080.0 E73.906\n"+
"G1 X100.29 Y148.89 Z0.6 F1080.0 E76.397\n"+
"G1 X99.97 Y149.21 Z0.6 F1080.0 E78.899\n"+
"G1 X99.71 Y149.57 Z0.6 F1080.0 E81.386\n"+
"G1 X99.51 Y149.97 Z0.6 F1080.0 E83.868\n"+
"G1 X99.37 Y150.4 Z0.6 F1080.0 E86.365\n"+
"G1 X99.3 Y150.84 Z0.6 F1080.0 E88.856\n"+
"G1 X99.3 Y151.29 Z0.6 F1080.0 E91.345\n"+
"G1 X99.37 Y151.73 Z0.6 F1080.0 E93.835\n"+
"G1 X99.64 Y152.43 Z0.6 F1080.0 E98.004\n"+
"G1 F240.0\n"+
"G1 E98.004\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.82 Y149.64 Z0.6 F3000.0\n"+
"G1 X104.22 Y146.6 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E98.004\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.22 Y147.17 Z0.6 F1080.0 E6.395\n"+
"G1 X106.04 Y147.43 Z0.6 F1080.0 E11.191\n"+
"G1 X106.9 Y147.57 Z0.6 F1080.0 E15.994\n"+
"G1 X107.76 Y147.57 Z0.6 F1080.0 E20.806\n"+
"G1 X108.61 Y147.43 Z0.6 F1080.0 E25.598\n"+
"G1 X109.44 Y147.17 Z0.6 F1080.0 E30.394\n"+
"G1 X110.21 Y146.77 Z0.6 F1080.0 E35.204\n"+
"G1 X110.91 Y146.26 Z0.6 F1080.0 E40.0\n"+
"G1 X111.52 Y145.65 Z0.6 F1080.0 E44.809\n"+
"G1 X112.03 Y144.96 Z0.6 F1080.0 E49.605\n"+
"G1 X112.42 Y144.18 Z0.6 F1080.0 E54.41\n"+
"G1 X112.68 Y143.36 Z0.6 F1080.0 E59.206\n"+
"G1 X112.82 Y142.51 Z0.6 F1080.0 E64.004\n"+
"G1 X112.82 Y141.64 Z0.6 F1080.0 E68.815\n"+
"G1 X112.68 Y140.79 Z0.6 F1080.0 E73.613\n"+
"G1 X112.42 Y139.97 Z0.6 F1080.0 E78.409\n"+
"G1 X112.03 Y139.2 Z0.6 F1080.0 E83.214\n"+
"G1 X111.52 Y138.5 Z0.6 F1080.0 E88.011\n"+
"G1 X110.91 Y137.89 Z0.6 F1080.0 E92.819\n"+
"G1 X110.21 Y137.38 Z0.6 F1080.0 E97.618\n"+
"G1 X109.44 Y136.99 Z0.6 F1080.0 E102.426\n"+
"G1 X108.61 Y136.72 Z0.6 F1080.0 E107.222\n"+
"G1 X107.76 Y136.59 Z0.6 F1080.0 E112.014\n"+
"G1 X106.9 Y136.59 Z0.6 F1080.0 E116.826\n"+
"G1 X106.04 Y136.72 Z0.6 F1080.0 E121.629\n"+
"G1 X105.22 Y136.99 Z0.6 F1080.0 E126.425\n"+
"G1 X104.45 Y137.38 Z0.6 F1080.0 E131.223\n"+
"G1 X103.75 Y137.89 Z0.6 F1080.0 E136.022\n"+
"G1 X103.14 Y138.5 Z0.6 F1080.0 E140.83\n"+
"G1 X102.63 Y139.2 Z0.6 F1080.0 E145.627\n"+
"G1 X102.24 Y139.97 Z0.6 F1080.0 E150.432\n"+
"G1 X101.97 Y140.79 Z0.6 F1080.0 E155.228\n"+
"G1 X101.84 Y141.64 Z0.6 F1080.0 E160.026\n"+
"G1 X101.84 Y142.51 Z0.6 F1080.0 E164.837\n"+
"G1 X101.97 Y143.36 Z0.6 F1080.0 E169.635\n"+
"G1 X102.24 Y144.18 Z0.6 F1080.0 E174.431\n"+
"G1 X102.63 Y144.96 Z0.6 F1080.0 E179.236\n"+
"G1 X103.14 Y145.65 Z0.6 F1080.0 E184.032\n"+
"G1 X103.98 Y146.43 Z0.6 F1080.0 E190.413\n"+
"G1 F240.0\n"+
"G1 E190.413\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X102.1 Y143.33 Z0.6 F3000.0\n"+
"G1 X101.97 Y142.5 Z0.6 F3000.0\n"+
"G1 X101.97 Y141.66 Z0.6 F3000.0\n"+
"G1 X111.45 Y116.71 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.413\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.16 Y116.82 Z0.6 F1080.0 E3.999\n"+
"G1 X113.02 Y116.82 Z0.6 F1080.0 E8.81\n"+
"G1 X113.88 Y116.68 Z0.6 F1080.0 E13.608\n"+
"G1 X114.7 Y116.42 Z0.6 F1080.0 E18.404\n"+
"G1 X115.47 Y116.02 Z0.6 F1080.0 E23.209\n"+
"G1 X116.17 Y115.52 Z0.6 F1080.0 E28.005\n"+
"G1 X116.78 Y114.9 Z0.6 F1080.0 E32.813\n"+
"G1 X117.29 Y114.21 Z0.6 F1080.0 E37.61\n"+
"G1 X117.68 Y113.43 Z0.6 F1080.0 E42.415\n"+
"G1 X117.95 Y112.61 Z0.6 F1080.0 E47.211\n"+
"G1 X118.08 Y111.76 Z0.6 F1080.0 E52.009\n"+
"G1 X118.08 Y110.89 Z0.6 F1080.0 E56.82\n"+
"G1 X117.95 Y110.04 Z0.6 F1080.0 E61.618\n"+
"G1 X117.68 Y109.22 Z0.6 F1080.0 E66.414\n"+
"G1 X117.29 Y108.45 Z0.6 F1080.0 E71.219\n"+
"G1 X116.78 Y107.75 Z0.6 F1080.0 E76.015\n"+
"G1 X116.17 Y107.14 Z0.6 F1080.0 E80.824\n"+
"G1 X115.47 Y106.63 Z0.6 F1080.0 E85.62\n"+
"G1 X114.7 Y106.24 Z0.6 F1080.0 E90.425\n"+
"G1 X113.88 Y105.97 Z0.6 F1080.0 E95.221\n"+
"G1 X113.02 Y105.84 Z0.6 F1080.0 E100.019\n"+
"G1 X112.16 Y105.84 Z0.6 F1080.0 E104.83\n"+
"G1 X111.3 Y105.97 Z0.6 F1080.0 E109.628\n"+
"G1 X110.48 Y106.24 Z0.6 F1080.0 E114.424\n"+
"G1 X109.71 Y106.63 Z0.6 F1080.0 E119.229\n"+
"G1 X109.01 Y107.14 Z0.6 F1080.0 E124.025\n"+
"G1 X108.4 Y107.75 Z0.6 F1080.0 E128.834\n"+
"G1 X107.89 Y108.45 Z0.6 F1080.0 E133.63\n"+
"G1 X107.5 Y109.22 Z0.6 F1080.0 E138.435\n"+
"G1 X107.24 Y110.04 Z0.6 F1080.0 E143.231\n"+
"G1 X107.1 Y110.89 Z0.6 F1080.0 E148.029\n"+
"G1 X107.1 Y111.76 Z0.6 F1080.0 E152.84\n"+
"G1 X107.24 Y112.61 Z0.6 F1080.0 E157.638\n"+
"G1 X107.5 Y113.43 Z0.6 F1080.0 E162.434\n"+
"G1 X107.89 Y114.21 Z0.6 F1080.0 E167.239\n"+
"G1 X108.4 Y114.9 Z0.6 F1080.0 E172.036\n"+
"G1 X109.01 Y115.52 Z0.6 F1080.0 E176.844\n"+
"G1 X109.71 Y116.02 Z0.6 F1080.0 E181.64\n"+
"G1 X110.48 Y116.42 Z0.6 F1080.0 E186.445\n"+
"G1 X111.17 Y116.64 Z0.6 F1080.0 E190.44\n"+
"G1 F240.0\n"+
"G1 E190.44\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X108.0 Y114.14 Z0.6 F3000.0\n"+
"G1 X107.62 Y113.39 Z0.6 F3000.0\n"+
"G1 X107.36 Y112.58 Z0.6 F3000.0\n"+
"G1 X107.23 Y111.75 Z0.6 F3000.0\n"+
"G1 X107.23 Y110.9 Z0.6 F3000.0\n"+
"G1 X111.45 Y102.78 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.44\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.52 Y102.78 Z0.6 F1080.0 E22.628\n"+
"G1 X115.52 Y88.37 Z0.6 F1080.0 E102.683\n"+
"G1 X109.11 Y88.37 Z0.6 F1080.0 E138.294\n"+
"G1 X109.11 Y102.78 Z0.6 F1080.0 E218.35\n"+
"G1 X111.16 Y102.78 Z0.6 F1080.0 E229.733\n"+
"G1 F240.0\n"+
"G1 E229.733\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X107.23 Y110.9 Z0.6 F3000.0\n"+
"G1 X112.39 Y130.22 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E229.733\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.65 Y130.35 Z0.6 F1080.0 E4.166\n"+
"G1 X111.24 Y130.52 Z0.6 F1080.0 E6.658\n"+
"G1 X110.85 Y130.76 Z0.6 F1080.0 E9.16\n"+
"G1 X110.51 Y131.05 Z0.6 F1080.0 E11.642\n"+
"G1 X110.22 Y131.39 Z0.6 F1080.0 E14.132\n"+
"G1 X109.99 Y131.77 Z0.6 F1080.0 E16.625\n"+
"G1 X109.82 Y132.19 Z0.6 F1080.0 E19.116\n"+
"G1 X109.71 Y132.62 Z0.6 F1080.0 E21.614\n"+
"G1 X109.68 Y133.07 Z0.6 F1080.0 E24.098\n"+
"G1 X109.71 Y133.52 Z0.6 F1080.0 E26.583\n"+
"G1 X109.82 Y133.95 Z0.6 F1080.0 E29.081\n"+
"G1 X109.99 Y134.37 Z0.6 F1080.0 E31.572\n"+
"G1 X110.22 Y134.75 Z0.6 F1080.0 E34.065\n"+
"G1 X110.51 Y135.09 Z0.6 F1080.0 E36.555\n"+
"G1 X110.85 Y135.38 Z0.6 F1080.0 E39.033\n"+
"G1 X111.24 Y135.62 Z0.6 F1080.0 E41.537\n"+
"G1 X111.65 Y135.79 Z0.6 F1080.0 E44.028\n"+
"G1 X112.09 Y135.89 Z0.6 F1080.0 E46.524\n"+
"G1 X112.53 Y135.93 Z0.6 F1080.0 E49.009\n"+
"G1 X112.98 Y135.89 Z0.6 F1080.0 E51.494\n"+
"G1 X113.42 Y135.79 Z0.6 F1080.0 E53.99\n"+
"G1 X113.83 Y135.62 Z0.6 F1080.0 E56.481\n"+
"G1 X114.21 Y135.38 Z0.6 F1080.0 E58.98\n"+
"G1 X114.55 Y135.09 Z0.6 F1080.0 E61.463\n"+
"G1 X114.84 Y134.75 Z0.6 F1080.0 E63.949\n"+
"G1 X115.08 Y134.37 Z0.6 F1080.0 E66.442\n"+
"G1 X115.25 Y133.95 Z0.6 F1080.0 E68.935\n"+
"G1 X115.36 Y133.52 Z0.6 F1080.0 E71.432\n"+
"G1 X115.39 Y133.07 Z0.6 F1080.0 E73.917\n"+
"G1 X115.36 Y132.62 Z0.6 F1080.0 E76.402\n"+
"G1 X115.25 Y132.19 Z0.6 F1080.0 E78.899\n"+
"G1 X115.08 Y131.77 Z0.6 F1080.0 E81.391\n"+
"G1 X114.84 Y131.39 Z0.6 F1080.0 E83.885\n"+
"G1 X114.55 Y131.05 Z0.6 F1080.0 E86.371\n"+
"G1 X114.21 Y130.76 Z0.6 F1080.0 E88.857\n"+
"G1 X113.83 Y130.52 Z0.6 F1080.0 E91.354\n"+
"G1 X113.42 Y130.35 Z0.6 F1080.0 E93.847\n"+
"G1 X112.68 Y130.22 Z0.6 F1080.0 E98.012\n"+
"G1 F240.0\n"+
"G1 E98.012\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> outer )\n"+
"G1 X124.68 Y137.39 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E98.012\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.91 Y162.98 Z0.6 F1080.0 E164.114\n"+
"G1 X90.49 Y174.18 Z0.6 F1080.0 E288.667\n"+
"G1 X78.77 Y171.04 Z0.6 F1080.0 E356.107\n"+
"G1 X73.08 Y161.18 Z0.6 F1080.0 E419.352\n"+
"G1 X76.32 Y149.65 Z0.6 F1080.0 E485.926\n"+
"G1 X93.57 Y139.69 Z0.6 F1080.0 E596.564\n"+
"G1 X98.22 Y131.74 Z0.6 F1080.0 E647.744\n"+
"G1 X98.22 Y111.55 Z0.6 F1080.0 E759.91\n"+
"G1 X105.52 Y104.25 Z0.6 F1080.0 E817.272\n"+
"G1 X105.52 Y88.37 Z0.6 F1080.0 E905.472\n"+
"G1 X104.02 Y88.37 Z0.6 F1080.0 E913.806\n"+
"G1 X104.02 Y85.78 Z0.6 F1080.0 E928.194\n"+
"G1 X120.61 Y85.78 Z0.6 F1080.0 E1020.361\n"+
"G1 X120.61 Y88.37 Z0.6 F1080.0 E1034.75\n"+
"G1 X119.11 Y88.37 Z0.6 F1080.0 E1043.083\n"+
"G1 X119.11 Y103.57 Z0.6 F1080.0 E1127.506\n"+
"G1 X126.96 Y111.42 Z0.6 F1080.0 E1189.189\n"+
"G1 X126.96 Y133.44 Z0.6 F1080.0 E1311.522\n"+
"G1 X124.82 Y137.14 Z0.6 F1080.0 E1335.272\n"+
"G1 F240.0\n"+
"G1 E1335.272\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"G1 X98.66 Y111.24 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E1335.272\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X124.66 Y137.24 Z0.6 F1080.0 E204.307\n"+
"G1 F240.0\n"+
"G1 E204.307\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X124.9 Y136.84 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E204.307\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.98 Y110.92 Z0.6 F1080.0 E203.639\n"+
"G1 F240.0\n"+
"G1 E203.639\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X99.3 Y110.6 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E203.639\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X125.13 Y136.44 Z0.6 F1080.0 E202.967\n"+
"G1 F240.0\n"+
"G1 E202.967\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X125.36 Y136.03 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E202.967\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.61 Y110.28 Z0.6 F1080.0 E202.295\n"+
"G1 F240.0\n"+
"G1 E202.295\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X99.93 Y109.97 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E202.295\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X125.6 Y135.63 Z0.6 F1080.0 E201.624\n"+
"G1 F240.0\n"+
"G1 E201.624\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X125.83 Y135.23 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E201.624\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.25 Y109.65 Z0.6 F1080.0 E200.96\n"+
"G1 F240.0\n"+
"G1 E200.96\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X100.57 Y109.33 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E200.96\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.06 Y134.82 Z0.6 F1080.0 E200.284\n"+
"G1 F240.0\n"+
"G1 E200.284\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.29 Y134.42 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E200.284\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.89 Y109.01 Z0.6 F1080.0 E199.612\n"+
"G1 F240.0\n"+
"G1 E199.612\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.21 Y108.69 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E199.612\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.53 Y134.01 Z0.6 F1080.0 E198.944\n"+
"G1 F240.0\n"+
"G1 E198.944\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.76 Y133.61 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E198.944\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.52 Y108.38 Z0.6 F1080.0 E198.273\n"+
"G1 F240.0\n"+
"G1 E198.273\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.84 Y108.06 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E198.273\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.59 Y113.8 Z0.6 F1080.0 E45.164\n"+
"G1 F240.0\n"+
"G1 E45.164\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.19 Y112.77 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E45.164\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.16 Y107.74 Z0.6 F1080.0 E39.539\n"+
"G1 F240.0\n"+
"G1 E39.539\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X102.48 Y107.42 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E39.539\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.05 Y111.99 Z0.6 F1080.0 E35.89\n"+
"G1 F240.0\n"+
"G1 E35.89\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.01 Y111.32 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E35.89\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.8 Y107.1 Z0.6 F1080.0 E33.108\n"+
"G1 F240.0\n"+
"G1 E33.108\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.11 Y106.78 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E33.108\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.04 Y110.71 Z0.6 F1080.0 E30.83\n"+
"G1 F240.0\n"+
"G1 E30.83\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.13 Y110.16 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E30.83\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.43 Y106.47 Z0.6 F1080.0 E29.023\n"+
"G1 F240.0\n"+
"G1 E29.023\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.75 Y106.15 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E29.023\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.26 Y109.66 Z0.6 F1080.0 E27.609\n"+
"G1 F240.0\n"+
"G1 E27.609\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.42 Y109.18 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E27.609\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.07 Y105.83 Z0.6 F1080.0 E26.336\n"+
"G1 F240.0\n"+
"G1 E26.336\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.39 Y105.51 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.336\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.64 Y108.76 Z0.6 F1080.0 E25.519\n"+
"G1 F240.0\n"+
"G1 E25.519\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.86 Y108.35 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E25.519\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.71 Y105.19 Z0.6 F1080.0 E24.772\n"+
"G1 F240.0\n"+
"G1 E24.772\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.02 Y104.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.772\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.13 Y107.98 Z0.6 F1080.0 E24.379\n"+
"G1 F240.0\n"+
"G1 E24.379\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X108.41 Y107.62 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.379\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.34 Y104.56 Z0.6 F1080.0 E24.077\n"+
"G1 F240.0\n"+
"G1 E24.077\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y104.19 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.077\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.72 Y107.3 Z0.6 F1080.0 E24.454\n"+
"G1 F240.0\n"+
"G1 E24.454\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.05 Y107.0 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.454\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y103.55 Z0.6 F1080.0 E27.059\n"+
"G1 F240.0\n"+
"G1 E27.059\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y102.92 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E27.059\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.42 Y106.73 Z0.6 F1080.0 E29.954\n"+
"G1 F240.0\n"+
"G1 E29.954\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.81 Y106.48 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E29.954\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y102.28 Z0.6 F1080.0 E32.994\n"+
"G1 F240.0\n"+
"G1 E32.994\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y101.64 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E32.994\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.23 Y106.27 Z0.6 F1080.0 E36.306\n"+
"G1 F240.0\n"+
"G1 E36.306\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.68 Y106.08 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E36.306\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y101.01 Z0.6 F1080.0 E39.845\n"+
"G1 F240.0\n"+
"G1 E39.845\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y100.37 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E39.845\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.16 Y105.92 Z0.6 F1080.0 E43.621\n"+
"G1 F240.0\n"+
"G1 E43.621\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X111.7 Y105.82 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E43.621\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y99.74 Z0.6 F1080.0 E47.8\n"+
"G1 F240.0\n"+
"G1 E47.8\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y99.1 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E47.8\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y102.51 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.39 Y102.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.26 Y105.75 Z0.6 F1080.0 E22.58\n"+
"G1 F240.0\n"+
"G1 E22.58\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.02 Y102.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E22.58\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.9 Y105.75 Z0.6 F1080.0 E22.58\n"+
"G1 F240.0\n"+
"G1 E22.58\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.63 Y105.84 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E22.58\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.66 Y102.87 Z0.6 F1080.0 E23.327\n"+
"G1 F240.0\n"+
"G1 E23.327\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X111.3 Y102.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E23.327\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.5 Y106.08 Z0.6 F1080.0 E25.204\n"+
"G1 F240.0\n"+
"G1 E25.204\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.87 Y106.81 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E25.204\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.93 Y102.87 Z0.6 F1080.0 E30.963\n"+
"G1 F240.0\n"+
"G1 E30.963\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y117.18 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E30.963\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.57 Y102.87 Z0.6 F1080.0 E112.383\n"+
"G1 F240.0\n"+
"G1 E112.383\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.2 Y102.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E112.383\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y116.54 Z0.6 F1080.0 E107.39\n"+
"G1 F240.0\n"+
"G1 E107.39\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.84 Y102.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E107.39\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y115.91 Z0.6 F1080.0 E102.389\n"+
"G1 F240.0\n"+
"G1 E102.389\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y115.27 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E102.389\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.48 Y102.87 Z0.6 F1080.0 E97.384\n"+
"G1 F240.0\n"+
"G1 E97.384\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.11 Y102.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E97.384\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y114.63 Z0.6 F1080.0 E92.387\n"+
"G1 F240.0\n"+
"G1 E92.387\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y114.0 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E92.387\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y102.73 Z0.6 F1080.0 E88.475\n"+
"G1 F240.0\n"+
"G1 E88.475\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y102.1 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E88.475\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y113.36 Z0.6 F1080.0 E88.475\n"+
"G1 F240.0\n"+
"G1 E88.475\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y112.72 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E88.475\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y101.46 Z0.6 F1080.0 E88.475\n"+
"G1 F240.0\n"+
"G1 E88.475\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y100.83 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E88.475\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y112.09 Z0.6 F1080.0 E88.475\n"+
"G1 F240.0\n"+
"G1 E88.475\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y117.81 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E88.475\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.1 Y108.05 Z0.6 F1080.0 E76.756\n"+
"G1 F240.0\n"+
"G1 E76.756\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.84 Y109.41 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E76.756\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y118.45 Z0.6 F1080.0 E70.994\n"+
"G1 F240.0\n"+
"G1 E70.994\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y119.09 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E70.994\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.08 Y110.29 Z0.6 F1080.0 E69.116\n"+
"G1 F240.0\n"+
"G1 E69.116\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X118.17 Y111.02 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E69.116\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y119.72 Z0.6 F1080.0 E68.369\n"+
"G1 F240.0\n"+
"G1 E68.369\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y120.36 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E68.369\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.17 Y111.66 Z0.6 F1080.0 E68.365\n"+
"G1 F240.0\n"+
"G1 E68.365\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X118.1 Y112.22 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E68.365\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y121.0 Z0.6 F1080.0 E68.935\n"+
"G1 F240.0\n"+
"G1 E68.935\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y121.63 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E68.935\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.99 Y112.75 Z0.6 F1080.0 E69.752\n"+
"G1 F240.0\n"+
"G1 E69.752\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.84 Y113.23 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E69.752\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y122.27 Z0.6 F1080.0 E70.982\n"+
"G1 F240.0\n"+
"G1 E70.982\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y122.91 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E70.982\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.65 Y113.69 Z0.6 F1080.0 E72.439\n"+
"G1 F240.0\n"+
"G1 E72.439\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.44 Y114.11 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E72.439\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y123.54 Z0.6 F1080.0 E74.128\n"+
"G1 F240.0\n"+
"G1 E74.128\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y124.18 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.128\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.19 Y114.49 Z0.6 F1080.0 E76.093\n"+
"G1 F240.0\n"+
"G1 E76.093\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X116.92 Y114.86 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E76.093\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y124.81 Z0.6 F1080.0 E78.194\n"+
"G1 F240.0\n"+
"G1 E78.194\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y125.45 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E78.194\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.61 Y115.19 Z0.6 F1080.0 E80.594\n"+
"G1 F240.0\n"+
"G1 E80.594\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X116.3 Y115.51 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E80.594\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y126.09 Z0.6 F1080.0 E83.085\n"+
"G1 F240.0\n"+
"G1 E83.085\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y126.72 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E83.085\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.94 Y115.79 Z0.6 F1080.0 E85.89\n"+
"G1 F240.0\n"+
"G1 E85.89\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.57 Y116.06 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E85.89\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y127.36 Z0.6 F1080.0 E88.789\n"+
"G1 F240.0\n"+
"G1 E88.789\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y128.0 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E88.789\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.16 Y116.28 Z0.6 F1080.0 E92.034\n"+
"G1 F240.0\n"+
"G1 E92.034\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.74 Y116.5 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E92.034\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y128.63 Z0.6 F1080.0 E95.349\n"+
"G1 F240.0\n"+
"G1 E95.349\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y129.27 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E95.349\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.26 Y116.65 Z0.6 F1080.0 E99.117\n"+
"G1 F240.0\n"+
"G1 E99.117\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.76 Y116.79 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E99.117\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y129.91 Z0.6 F1080.0 E103.033\n"+
"G1 F240.0\n"+
"G1 E103.033\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y130.54 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E103.033\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.21 Y116.88 Z0.6 F1080.0 E107.343\n"+
"G1 F240.0\n"+
"G1 E107.343\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.6 Y116.91 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E107.343\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y131.18 Z0.6 F1080.0 E112.124\n"+
"G1 F240.0\n"+
"G1 E112.124\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y131.82 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E112.124\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.93 Y116.87 Z0.6 F1080.0 E117.403\n"+
"G1 F240.0\n"+
"G1 E117.403\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X111.15 Y116.73 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E117.403\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y132.45 Z0.6 F1080.0 E123.555\n"+
"G1 F240.0\n"+
"G1 E123.555\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.11 Y116.33 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E123.555\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y133.09 Z0.6 F1080.0 E131.671\n"+
"G1 F240.0\n"+
"G1 E131.671\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X124.43 Y137.65 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E131.671\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.34 Y111.56 Z0.6 F1080.0 E204.975\n"+
"G1 F240.0\n"+
"G1 E204.975\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y112.16 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E204.975\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X124.2 Y138.05 Z0.6 F1080.0 E203.387\n"+
"G1 F240.0\n"+
"G1 E203.387\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X123.96 Y138.45 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E203.387\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y112.8 Z0.6 F1080.0 E201.561\n"+
"G1 F240.0\n"+
"G1 E201.561\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y113.44 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E201.561\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X123.73 Y138.86 Z0.6 F1080.0 E199.726\n"+
"G1 F240.0\n"+
"G1 E199.726\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X123.5 Y139.26 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E199.726\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y114.07 Z0.6 F1080.0 E197.896\n"+
"G1 F240.0\n"+
"G1 E197.896\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y114.71 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E197.896\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.42 Y130.82 Z0.6 F1080.0 E126.572\n"+
"G1 F240.0\n"+
"G1 E126.572\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.79 Y131.18 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E126.572\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X123.27 Y139.66 Z0.6 F1080.0 E66.625\n"+
"G1 F240.0\n"+
"G1 E66.625\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X123.03 Y140.07 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E66.625\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.4 Y132.44 Z0.6 F1080.0 E59.939\n"+
"G1 F240.0\n"+
"G1 E59.939\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.48 Y133.15 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E59.939\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X122.8 Y140.47 Z0.6 F1080.0 E57.543\n"+
"G1 F240.0\n"+
"G1 E57.543\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X122.57 Y140.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E57.543\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.4 Y133.71 Z0.6 F1080.0 E56.286\n"+
"G1 F240.0\n"+
"G1 E56.286\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.25 Y134.19 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E56.286\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X122.33 Y141.28 Z0.6 F1080.0 E55.665\n"+
"G1 F240.0\n"+
"G1 E55.665\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X122.1 Y141.68 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E55.665\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.03 Y134.61 Z0.6 F1080.0 E55.524\n"+
"G1 F240.0\n"+
"G1 E55.524\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.77 Y134.98 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E55.524\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X121.87 Y142.08 Z0.6 F1080.0 E55.806\n"+
"G1 F240.0\n"+
"G1 E55.806\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X121.64 Y142.49 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E55.806\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.45 Y135.3 Z0.6 F1080.0 E56.474\n"+
"G1 F240.0\n"+
"G1 E56.474\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.08 Y135.57 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E56.474\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X121.4 Y142.89 Z0.6 F1080.0 E57.531\n"+
"G1 F240.0\n"+
"G1 E57.531\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X121.17 Y143.29 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E57.531\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.66 Y135.78 Z0.6 F1080.0 E59.004\n"+
"G1 F240.0\n"+
"G1 E59.004\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.18 Y135.94 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E59.004\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.94 Y143.7 Z0.6 F1080.0 E60.964\n"+
"G1 F240.0\n"+
"G1 E60.964\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.7 Y144.1 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E60.964\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.61 Y136.01 Z0.6 F1080.0 E63.561\n"+
"G1 F240.0\n"+
"G1 E63.561\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X111.91 Y135.94 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E63.561\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.47 Y144.5 Z0.6 F1080.0 E67.269\n"+
"G1 F240.0\n"+
"G1 E67.269\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.24 Y144.91 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E67.269\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.68 Y135.35 Z0.6 F1080.0 E75.059\n"+
"G1 F240.0\n"+
"G1 E75.059\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.25 Y134.92 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E75.059\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y122.98 Z0.6 F1080.0 E93.798\n"+
"G1 F240.0\n"+
"G1 E93.798\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y122.34 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E93.798\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.66 Y133.7 Z0.6 F1080.0 E89.182\n"+
"G1 F240.0\n"+
"G1 E89.182\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.59 Y132.99 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E89.182\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y121.71 Z0.6 F1080.0 E88.64\n"+
"G1 F240.0\n"+
"G1 E88.64\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y121.07 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E88.64\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.67 Y132.43 Z0.6 F1080.0 E89.213\n"+
"G1 F240.0\n"+
"G1 E89.213\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.82 Y131.94 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E89.213\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y120.44 Z0.6 F1080.0 E90.423\n"+
"G1 F240.0\n"+
"G1 E90.423\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y119.8 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E90.423\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.04 Y131.52 Z0.6 F1080.0 E92.116\n"+
"G1 F240.0\n"+
"G1 E92.116\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.3 Y131.16 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E92.116\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y119.16 Z0.6 F1080.0 E94.234\n"+
"G1 F240.0\n"+
"G1 E94.234\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y118.53 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E94.234\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.62 Y130.84 Z0.6 F1080.0 E96.732\n"+
"G1 F240.0\n"+
"G1 E96.732\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.99 Y130.57 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E96.732\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y117.89 Z0.6 F1080.0 E99.616\n"+
"G1 F240.0\n"+
"G1 E99.616\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y117.25 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E99.616\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.41 Y130.35 Z0.6 F1080.0 E102.931\n"+
"G1 F240.0\n"+
"G1 E102.931\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X111.89 Y130.2 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E102.931\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y116.62 Z0.6 F1080.0 E106.726\n"+
"G1 F240.0\n"+
"G1 E106.726\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y115.98 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E106.726\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.46 Y130.13 Z0.6 F1080.0 E111.157\n"+
"G1 F240.0\n"+
"G1 E111.157\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.17 Y130.2 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E111.157\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y115.34 Z0.6 F1080.0 E116.72\n"+
"G1 F240.0\n"+
"G1 E116.72\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y123.62 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E116.72\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.0 Y145.31 Z0.6 F1080.0 E170.444\n"+
"G1 F240.0\n"+
"G1 E170.444\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.77 Y145.72 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E170.444\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y124.25 Z0.6 F1080.0 E168.614\n"+
"G1 F240.0\n"+
"G1 E168.614\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y124.89 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E168.614\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.54 Y146.12 Z0.6 F1080.0 E166.783\n"+
"G1 F240.0\n"+
"G1 E166.783\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.3 Y146.52 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E166.783\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.28 Y139.49 Z0.6 F1080.0 E55.233\n"+
"G1 F240.0\n"+
"G1 E55.233\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.7 Y140.55 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E55.233\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.07 Y146.93 Z0.6 F1080.0 E50.051\n"+
"G1 F240.0\n"+
"G1 E50.051\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X118.84 Y147.33 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.051\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.86 Y141.35 Z0.6 F1080.0 E46.948\n"+
"G1 F240.0\n"+
"G1 E46.948\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.91 Y142.04 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E46.948\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.61 Y147.73 Z0.6 F1080.0 E44.764\n"+
"G1 F240.0\n"+
"G1 E44.764\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X118.37 Y148.14 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E44.764\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.89 Y142.65 Z0.6 F1080.0 E43.102\n"+
"G1 F240.0\n"+
"G1 E43.102\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.8 Y143.2 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E43.102\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.14 Y148.54 Z0.6 F1080.0 E41.955\n"+
"G1 F240.0\n"+
"G1 E41.955\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.91 Y148.94 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E41.955\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.67 Y143.7 Z0.6 F1080.0 E41.169\n"+
"G1 F240.0\n"+
"G1 E41.169\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.51 Y144.18 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E41.169\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.68 Y149.35 Z0.6 F1080.0 E40.56\n"+
"G1 F240.0\n"+
"G1 E40.56\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.44 Y149.75 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E40.56\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.3 Y144.61 Z0.6 F1080.0 E40.38\n"+
"G1 F240.0\n"+
"G1 E40.38\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.08 Y145.03 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E40.38\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.21 Y150.15 Z0.6 F1080.0 E40.274\n"+
"G1 F240.0\n"+
"G1 E40.274\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X116.98 Y150.56 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E40.274\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.82 Y145.4 Z0.6 F1080.0 E40.545\n"+
"G1 F240.0\n"+
"G1 E40.545\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X111.54 Y145.76 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E40.545\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.74 Y150.96 Z0.6 F1080.0 E40.879\n"+
"G1 F240.0\n"+
"G1 E40.879\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X116.51 Y151.36 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E40.879\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.22 Y146.07 Z0.6 F1080.0 E41.55\n"+
"G1 F240.0\n"+
"G1 E41.55\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.89 Y146.38 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E41.55\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.28 Y151.77 Z0.6 F1080.0 E42.293\n"+
"G1 F240.0\n"+
"G1 E42.293\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X116.04 Y152.17 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E42.293\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.53 Y146.65 Z0.6 F1080.0 E43.354\n"+
"G1 F240.0\n"+
"G1 E43.354\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.14 Y146.91 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E43.354\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.81 Y152.57 Z0.6 F1080.0 E44.524\n"+
"G1 F240.0\n"+
"G1 E44.524\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.58 Y152.98 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E44.524\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.72 Y147.12 Z0.6 F1080.0 E46.013\n"+
"G1 F240.0\n"+
"G1 E46.013\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.28 Y147.31 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E46.013\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.35 Y153.38 Z0.6 F1080.0 E47.675\n"+
"G1 F240.0\n"+
"G1 E47.675\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.11 Y153.78 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E47.675\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.8 Y147.47 Z0.6 F1080.0 E49.623\n"+
"G1 F240.0\n"+
"G1 E49.623\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X108.27 Y147.58 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E49.623\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.88 Y154.19 Z0.6 F1080.0 E51.925\n"+
"G1 F240.0\n"+
"G1 E51.925\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.65 Y154.59 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E51.925\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.71 Y147.66 Z0.6 F1080.0 E54.479\n"+
"G1 F240.0\n"+
"G1 E54.479\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.08 Y147.66 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E54.479\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.41 Y154.99 Z0.6 F1080.0 E57.645\n"+
"G1 F240.0\n"+
"G1 E57.645\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.18 Y155.4 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E57.645\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.36 Y147.57 Z0.6 F1080.0 E61.487\n"+
"G1 F240.0\n"+
"G1 E61.487\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.5 Y147.35 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E61.487\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.95 Y155.8 Z0.6 F1080.0 E66.405\n"+
"G1 F240.0\n"+
"G1 E66.405\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.72 Y156.21 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E66.405\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.24 Y146.73 Z0.6 F1080.0 E74.427\n"+
"G1 F240.0\n"+
"G1 E74.427\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.34 Y148.38 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.427\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X94.04 Y139.07 Z0.6 F1080.0 E73.095\n"+
"G1 F240.0\n"+
"G1 E73.095\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X94.27 Y138.67 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E73.095\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.02 Y157.42 Z0.6 F1080.0 E147.275\n"+
"G1 F240.0\n"+
"G1 E147.275\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.78 Y157.82 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E147.275\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.83 Y149.87 Z0.6 F1080.0 E62.461\n"+
"G1 F240.0\n"+
"G1 E62.461\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.07 Y150.74 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E62.461\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.55 Y158.22 Z0.6 F1080.0 E58.784\n"+
"G1 F240.0\n"+
"G1 E58.784\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.32 Y158.63 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E58.784\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.07 Y151.38 Z0.6 F1080.0 E56.934\n"+
"G1 F240.0\n"+
"G1 E56.934\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.96 Y151.91 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E56.934\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.08 Y159.03 Z0.6 F1080.0 E55.964\n"+
"G1 F240.0\n"+
"G1 E55.964\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X111.85 Y159.43 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E55.964\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.78 Y152.36 Z0.6 F1080.0 E55.547\n"+
"G1 F240.0\n"+
"G1 E55.547\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.54 Y152.76 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E55.547\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.62 Y159.84 Z0.6 F1080.0 E55.583\n"+
"G1 F240.0\n"+
"G1 E55.583\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X111.39 Y160.24 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E55.583\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.26 Y153.11 Z0.6 F1080.0 E56.019\n"+
"G1 F240.0\n"+
"G1 E56.019\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.92 Y153.41 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E56.019\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.15 Y160.64 Z0.6 F1080.0 E56.836\n"+
"G1 F240.0\n"+
"G1 E56.836\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.92 Y161.05 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E56.836\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.53 Y153.66 Z0.6 F1080.0 E58.065\n"+
"G1 F240.0\n"+
"G1 E58.065\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.08 Y153.85 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E58.065\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.69 Y161.45 Z0.6 F1080.0 E59.731\n"+
"G1 F240.0\n"+
"G1 E59.731\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.45 Y161.85 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E59.731\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.57 Y153.97 Z0.6 F1080.0 E61.923\n"+
"G1 F240.0\n"+
"G1 E61.923\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.97 Y154.0 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E61.923\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.22 Y162.26 Z0.6 F1080.0 E64.861\n"+
"G1 F240.0\n"+
"G1 E64.861\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.99 Y162.66 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E64.861\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.16 Y153.83 Z0.6 F1080.0 E69.344\n"+
"G1 F240.0\n"+
"G1 E69.344\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X99.38 Y152.05 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E69.344\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X89.48 Y142.15 Z0.6 F1080.0 E77.723\n"+
"G1 F240.0\n"+
"G1 E77.723\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X89.89 Y141.92 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E77.723\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.21 Y151.24 Z0.6 F1080.0 E73.233\n"+
"G1 F240.0\n"+
"G1 E73.233\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X99.24 Y150.64 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E73.233\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X90.29 Y141.69 Z0.6 F1080.0 E70.302\n"+
"G1 F240.0\n"+
"G1 E70.302\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X90.69 Y141.46 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E70.302\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.36 Y150.12 Z0.6 F1080.0 E68.102\n"+
"G1 F240.0\n"+
"G1 E68.102\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X99.55 Y149.68 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E68.102\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X91.1 Y141.22 Z0.6 F1080.0 E66.444\n"+
"G1 F240.0\n"+
"G1 E66.444\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X91.5 Y140.99 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E66.444\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.8 Y149.29 Z0.6 F1080.0 E65.215\n"+
"G1 F240.0\n"+
"G1 E65.215\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X100.1 Y148.95 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E65.215\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X91.9 Y140.76 Z0.6 F1080.0 E64.394\n"+
"G1 F240.0\n"+
"G1 E64.394\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X92.31 Y140.53 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E64.394\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.45 Y148.67 Z0.6 F1080.0 E63.958\n"+
"G1 F240.0\n"+
"G1 E63.958\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X100.85 Y148.43 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E63.958\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X92.71 Y140.29 Z0.6 F1080.0 E63.922\n"+
"G1 F240.0\n"+
"G1 E63.922\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X93.11 Y140.06 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E63.922\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.3 Y148.25 Z0.6 F1080.0 E64.339\n"+
"G1 F240.0\n"+
"G1 E64.339\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.83 Y148.14 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E64.339\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X93.52 Y139.83 Z0.6 F1080.0 E65.313\n"+
"G1 F240.0\n"+
"G1 E65.313\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X93.8 Y139.47 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E65.313\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.47 Y148.14 Z0.6 F1080.0 E68.102\n"+
"G1 F240.0\n"+
"G1 E68.102\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X102.67 Y145.16 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E68.102\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X94.98 Y137.47 Z0.6 F1080.0 E60.481\n"+
"G1 F240.0\n"+
"G1 E60.481\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X94.74 Y137.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E60.481\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.48 Y156.61 Z0.6 F1080.0 E147.243\n"+
"G1 F240.0\n"+
"G1 E147.243\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.25 Y157.01 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E147.243\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X94.51 Y138.27 Z0.6 F1080.0 E147.259\n"+
"G1 F240.0\n"+
"G1 E147.259\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X95.21 Y137.06 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E147.259\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.06 Y143.91 Z0.6 F1080.0 E53.791\n"+
"G1 F240.0\n"+
"G1 E53.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.83 Y143.05 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E53.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X95.45 Y136.66 Z0.6 F1080.0 E50.193\n"+
"G1 F240.0\n"+
"G1 E50.193\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X95.68 Y136.26 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.193\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.75 Y142.33 Z0.6 F1080.0 E47.683\n"+
"G1 F240.0\n"+
"G1 E47.683\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.75 Y141.69 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E47.683\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X95.92 Y135.86 Z0.6 F1080.0 E45.836\n"+
"G1 F240.0\n"+
"G1 E45.836\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X96.15 Y135.46 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E45.836\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.83 Y141.14 Z0.6 F1080.0 E44.611\n"+
"G1 F240.0\n"+
"G1 E44.611\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.94 Y140.61 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E44.611\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X96.39 Y135.06 Z0.6 F1080.0 E43.632\n"+
"G1 F240.0\n"+
"G1 E43.632\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X96.62 Y134.65 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E43.632\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.09 Y140.13 Z0.6 F1080.0 E43.012\n"+
"G1 F240.0\n"+
"G1 E43.012\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X102.29 Y139.68 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E43.012\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X96.85 Y134.25 Z0.6 F1080.0 E42.67\n"+
"G1 F240.0\n"+
"G1 E42.67\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X97.09 Y133.85 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E42.67\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.5 Y139.26 Z0.6 F1080.0 E42.509\n"+
"G1 F240.0\n"+
"G1 E42.509\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X102.75 Y138.88 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E42.509\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X97.32 Y133.45 Z0.6 F1080.0 E42.662\n"+
"G1 F240.0\n"+
"G1 E42.662\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X97.56 Y133.05 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E42.662\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.02 Y138.51 Z0.6 F1080.0 E42.921\n"+
"G1 F240.0\n"+
"G1 E42.921\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.33 Y138.18 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E42.921\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X97.79 Y132.65 Z0.6 F1080.0 E43.503\n"+
"G1 F240.0\n"+
"G1 E43.503\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.03 Y132.25 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E43.503\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.65 Y137.87 Z0.6 F1080.0 E44.159\n"+
"G1 F240.0\n"+
"G1 E44.159\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.01 Y137.59 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E44.159\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.26 Y131.84 Z0.6 F1080.0 E45.149\n"+
"G1 F240.0\n"+
"G1 E45.149\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y131.25 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E45.149\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.38 Y137.32 Z0.6 F1080.0 E47.683\n"+
"G1 F240.0\n"+
"G1 E47.683\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.8 Y137.1 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E47.683\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y130.62 Z0.6 F1080.0 E50.963\n"+
"G1 F240.0\n"+
"G1 E50.963\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y129.98 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.963\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.22 Y136.89 Z0.6 F1080.0 E54.306\n"+
"G1 F240.0\n"+
"G1 E54.306\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.7 Y136.74 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E54.306\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y129.35 Z0.6 F1080.0 E58.085\n"+
"G1 F240.0\n"+
"G1 E58.085\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y128.71 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E58.085\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.21 Y136.6 Z0.6 F1080.0 E62.045\n"+
"G1 F240.0\n"+
"G1 E62.045\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X106.76 Y136.52 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E62.045\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y128.07 Z0.6 F1080.0 E66.354\n"+
"G1 F240.0\n"+
"G1 E66.354\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y127.44 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E66.354\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.37 Y136.5 Z0.6 F1080.0 E71.19\n"+
"G1 F240.0\n"+
"G1 E71.19\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X108.05 Y136.54 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E71.19\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y126.8 Z0.6 F1080.0 E76.544\n"+
"G1 F240.0\n"+
"G1 E76.544\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y126.16 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E76.544\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.85 Y136.7 Z0.6 F1080.0 E82.822\n"+
"G1 F240.0\n"+
"G1 E82.822\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.92 Y137.13 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E82.822\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y125.53 Z0.6 F1080.0 E91.174\n"+
"G1 F240.0\n"+
"G1 E91.174\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.09 Y131.71 Z0.6 F3000.0\n"+
"G1 X93.48 Y139.6 Z0.6 F3000.0\n"+
"G1 X89.08 Y142.39 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E91.174\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.69 Y163.0 Z0.6 F1080.0 E161.931\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.29 Y163.23 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.68 Y142.62 Z0.6 F1080.0 E161.927\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.27 Y142.85 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.88 Y163.46 Z0.6 F1080.0 E161.931\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X108.48 Y163.7 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.87 Y143.09 Z0.6 F1080.0 E161.927\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X87.47 Y143.32 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.08 Y163.93 Z0.6 F1080.0 E161.927\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.67 Y164.16 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.06 Y143.55 Z0.6 F1080.0 E161.927\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X86.66 Y143.79 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.27 Y164.4 Z0.6 F1080.0 E161.927\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X106.86 Y164.63 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X86.26 Y144.02 Z0.6 F1080.0 E161.924\n"+
"G1 F240.0\n"+
"G1 E161.924\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X85.85 Y144.25 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.924\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.46 Y164.86 Z0.6 F1080.0 E161.931\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X106.06 Y165.1 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X85.45 Y144.48 Z0.6 F1080.0 E161.931\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X85.05 Y144.72 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.66 Y165.33 Z0.6 F1080.0 E161.927\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.25 Y165.56 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X84.64 Y144.95 Z0.6 F1080.0 E161.927\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X84.24 Y145.18 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.85 Y165.79 Z0.6 F1080.0 E161.927\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.44 Y166.03 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X83.83 Y145.42 Z0.6 F1080.0 E161.927\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X83.43 Y145.65 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.04 Y166.26 Z0.6 F1080.0 E161.927\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.64 Y166.49 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X83.03 Y145.88 Z0.6 F1080.0 E161.931\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X82.62 Y146.12 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.23 Y166.73 Z0.6 F1080.0 E161.924\n"+
"G1 F240.0\n"+
"G1 E161.924\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X102.83 Y166.96 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.924\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X82.22 Y146.35 Z0.6 F1080.0 E161.927\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X81.82 Y146.58 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.43 Y167.19 Z0.6 F1080.0 E161.927\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X102.02 Y167.42 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X81.41 Y146.81 Z0.6 F1080.0 E161.931\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X81.01 Y147.05 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.62 Y167.66 Z0.6 F1080.0 E161.927\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.22 Y167.89 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X80.61 Y147.28 Z0.6 F1080.0 E161.931\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X80.2 Y147.51 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.81 Y168.12 Z0.6 F1080.0 E161.931\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X100.41 Y168.36 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.8 Y147.75 Z0.6 F1080.0 E161.931\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X79.4 Y147.98 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.01 Y168.59 Z0.6 F1080.0 E161.931\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X99.6 Y168.82 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X78.99 Y148.21 Z0.6 F1080.0 E161.92\n"+
"G1 F240.0\n"+
"G1 E161.92\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.59 Y148.44 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.92\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.2 Y169.05 Z0.6 F1080.0 E161.927\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.8 Y169.29 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X78.19 Y148.68 Z0.6 F1080.0 E161.927\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.78 Y148.91 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.927\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X85.92 Y157.05 Z0.6 F1080.0 E63.922\n"+
"G1 F240.0\n"+
"G1 E63.922\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X84.85 Y156.62 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E63.922\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.38 Y149.14 Z0.6 F1080.0 E58.733\n"+
"G1 F240.0\n"+
"G1 E58.733\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X76.97 Y149.38 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E58.733\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X84.06 Y156.46 Z0.6 F1080.0 E55.622\n"+
"G1 F240.0\n"+
"G1 E55.622\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X83.37 Y156.41 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E55.622\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X76.57 Y149.61 Z0.6 F1080.0 E53.434\n"+
"G1 F240.0\n"+
"G1 E53.434\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X76.32 Y149.99 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E53.434\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X82.76 Y156.43 Z0.6 F1080.0 E50.59\n"+
"G1 F240.0\n"+
"G1 E50.59\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X82.21 Y156.52 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.59\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X76.18 Y150.49 Z0.6 F1080.0 E47.364\n"+
"G1 F240.0\n"+
"G1 E47.364\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X76.04 Y150.99 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E47.364\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X81.7 Y156.65 Z0.6 F1080.0 E44.508\n"+
"G1 F240.0\n"+
"G1 E44.508\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X81.22 Y156.81 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E44.508\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.9 Y151.48 Z0.6 F1080.0 E41.833\n"+
"G1 F240.0\n"+
"G1 E41.833\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X75.76 Y151.98 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E41.833\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X80.8 Y157.02 Z0.6 F1080.0 E39.582\n"+
"G1 F240.0\n"+
"G1 E39.582\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X80.38 Y157.24 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E39.582\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.62 Y152.48 Z0.6 F1080.0 E37.398\n"+
"G1 F240.0\n"+
"G1 E37.398\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X75.48 Y152.97 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E37.398\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X80.01 Y157.5 Z0.6 F1080.0 E35.599\n"+
"G1 F240.0\n"+
"G1 E35.599\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X79.65 Y157.78 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E35.599\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.34 Y153.47 Z0.6 F1080.0 E33.863\n"+
"G1 F240.0\n"+
"G1 E33.863\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X75.2 Y153.97 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E33.863\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.33 Y158.1 Z0.6 F1080.0 E32.456\n"+
"G1 F240.0\n"+
"G1 E32.456\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X79.02 Y158.42 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E32.456\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.06 Y154.46 Z0.6 F1080.0 E31.128\n"+
"G1 F240.0\n"+
"G1 E31.128\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X74.92 Y154.96 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E31.128\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X78.76 Y158.79 Z0.6 F1080.0 E30.119\n"+
"G1 F240.0\n"+
"G1 E30.119\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.5 Y159.17 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E30.119\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X74.78 Y155.46 Z0.6 F1080.0 E29.223\n"+
"G1 F240.0\n"+
"G1 E29.223\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X74.64 Y155.95 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E29.223\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X78.29 Y159.6 Z0.6 F1080.0 E28.634\n"+
"G1 F240.0\n"+
"G1 E28.634\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.1 Y160.04 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E28.634\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X74.5 Y156.45 Z0.6 F1080.0 E28.229\n"+
"G1 F240.0\n"+
"G1 E28.229\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X74.36 Y156.95 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E28.229\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.94 Y160.52 Z0.6 F1080.0 E28.104\n"+
"G1 F240.0\n"+
"G1 E28.104\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.83 Y161.05 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E28.104\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X74.22 Y157.44 Z0.6 F1080.0 E28.339\n"+
"G1 F240.0\n"+
"G1 E28.339\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X74.08 Y157.94 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E28.339\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.75 Y161.6 Z0.6 F1080.0 E28.811\n"+
"G1 F240.0\n"+
"G1 E28.811\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.75 Y162.24 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E28.811\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.94 Y158.44 Z0.6 F1080.0 E29.903\n"+
"G1 F240.0\n"+
"G1 E29.903\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X73.8 Y158.93 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E29.903\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.83 Y162.96 Z0.6 F1080.0 E31.667\n"+
"G1 F240.0\n"+
"G1 E31.667\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.06 Y163.82 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E31.667\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.66 Y159.43 Z0.6 F1080.0 E34.515\n"+
"G1 F240.0\n"+
"G1 E34.515\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X73.52 Y159.92 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E34.515\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X78.67 Y165.07 Z0.6 F1080.0 E40.439\n"+
"G1 F240.0\n"+
"G1 E40.439\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X80.25 Y166.65 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E40.439\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X86.66 Y173.07 Z0.6 F1080.0 E50.409\n"+
"G1 F240.0\n"+
"G1 E50.409\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X87.53 Y173.3 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.409\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X81.5 Y167.26 Z0.6 F1080.0 E47.415\n"+
"G1 F240.0\n"+
"G1 E47.415\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X82.36 Y167.49 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E47.415\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.4 Y173.53 Z0.6 F1080.0 E47.498\n"+
"G1 F240.0\n"+
"G1 E47.498\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X89.27 Y173.76 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E47.498\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X83.08 Y167.57 Z0.6 F1080.0 E48.665\n"+
"G1 F240.0\n"+
"G1 E48.665\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X83.71 Y167.57 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E48.665\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X90.14 Y174.0 Z0.6 F1080.0 E50.495\n"+
"G1 F240.0\n"+
"G1 E50.495\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X90.73 Y173.95 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.495\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X84.27 Y167.49 Z0.6 F1080.0 E50.719\n"+
"G1 F240.0\n"+
"G1 E50.719\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X84.8 Y167.38 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.719\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X91.13 Y173.71 Z0.6 F1080.0 E49.757\n"+
"G1 F240.0\n"+
"G1 E49.757\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X91.53 Y173.48 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E49.757\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X85.28 Y167.22 Z0.6 F1080.0 E49.152\n"+
"G1 F240.0\n"+
"G1 E49.152\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X85.72 Y167.03 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E49.152\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X91.94 Y173.25 Z0.6 F1080.0 E48.822\n"+
"G1 F240.0\n"+
"G1 E48.822\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X92.34 Y173.01 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E48.822\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X86.15 Y166.82 Z0.6 F1080.0 E48.676\n"+
"G1 F240.0\n"+
"G1 E48.676\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X86.53 Y166.56 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E48.676\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X92.74 Y172.78 Z0.6 F1080.0 E48.845\n"+
"G1 F240.0\n"+
"G1 E48.845\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X93.15 Y172.55 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E48.845\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X86.9 Y166.3 Z0.6 F1080.0 E49.12\n"+
"G1 F240.0\n"+
"G1 E49.12\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X87.22 Y165.99 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E49.12\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X93.55 Y172.32 Z0.6 F1080.0 E49.717\n"+
"G1 F240.0\n"+
"G1 E49.717\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X93.95 Y172.08 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E49.717\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.54 Y165.67 Z0.6 F1080.0 E50.385\n"+
"G1 F240.0\n"+
"G1 E50.385\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X87.82 Y165.31 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.385\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X94.36 Y171.85 Z0.6 F1080.0 E51.399\n"+
"G1 F240.0\n"+
"G1 E51.399\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X94.76 Y171.62 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E51.399\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.08 Y164.94 Z0.6 F1080.0 E52.463\n"+
"G1 F240.0\n"+
"G1 E52.463\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.3 Y164.52 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E52.463\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X95.17 Y171.38 Z0.6 F1080.0 E53.921\n"+
"G1 F240.0\n"+
"G1 E53.921\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X95.57 Y171.15 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E53.921\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.51 Y164.1 Z0.6 F1080.0 E55.433\n"+
"G1 F240.0\n"+
"G1 E55.433\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.67 Y163.62 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E55.433\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X95.97 Y170.92 Z0.6 F1080.0 E57.374\n"+
"G1 F240.0\n"+
"G1 E57.374\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X96.38 Y170.69 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E57.374\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.8 Y163.11 Z0.6 F1080.0 E59.507\n"+
"G1 F240.0\n"+
"G1 E59.507\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.89 Y162.56 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E59.507\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X96.78 Y170.45 Z0.6 F1080.0 E61.998\n"+
"G1 F240.0\n"+
"G1 E61.998\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X97.18 Y170.22 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E61.998\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.91 Y161.95 Z0.6 F1080.0 E64.999\n"+
"G1 F240.0\n"+
"G1 E64.999\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.86 Y161.26 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E64.999\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X97.59 Y169.99 Z0.6 F1080.0 E68.527\n"+
"G1 F240.0\n"+
"G1 E68.527\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X97.99 Y169.75 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E68.527\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.7 Y160.47 Z0.6 F1080.0 E72.973\n"+
"G1 F240.0\n"+
"G1 E72.973\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.27 Y159.4 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E72.973\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.39 Y169.52 Z0.6 F1080.0 E79.502\n"+
"G1 F240.0\n"+
"G1 E79.502\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X85.8 Y172.83 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E79.502\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.38 Y160.42 Z0.6 F1080.0 E97.514\n"+
"G1 F240.0\n"+
"G1 E97.514\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X73.24 Y160.92 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E97.514\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X84.93 Y172.6 Z0.6 F1080.0 E91.779\n"+
"G1 F240.0\n"+
"G1 E91.779\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X84.06 Y172.37 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E91.779\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.6 Y161.91 Z0.6 F1080.0 E82.182\n"+
"G1 F240.0\n"+
"G1 E82.182\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X74.47 Y163.41 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E82.182\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X83.19 Y172.13 Z0.6 F1080.0 E68.523\n"+
"G1 F240.0\n"+
"G1 E68.523\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X82.32 Y171.9 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E68.523\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.33 Y164.92 Z0.6 F1080.0 E54.864\n"+
"G1 F240.0\n"+
"G1 E54.864\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X76.2 Y166.42 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E54.864\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X81.45 Y171.67 Z0.6 F1080.0 E41.201\n"+
"G1 F240.0\n"+
"G1 E41.201\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X80.58 Y171.44 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E41.201\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.07 Y167.93 Z0.6 F1080.0 E27.546\n"+
"G1 F240.0\n"+
"G1 E27.546\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.94 Y169.44 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E27.546\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.71 Y171.2 Z0.6 F1080.0 E13.887\n"+
"G1 F240.0\n"+
"G1 E13.887\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X87.92 Y164.8 Z0.6 F3000.0\n"+
"G1 X88.3 Y164.05 Z0.6 F3000.0\n"+
"G1 X88.56 Y163.25 Z0.6 F3000.0\n"+
"G1 X88.69 Y162.41 Z0.6 F3000.0\n"+
"G1 X88.69 Y161.57 Z0.6 F3000.0\n"+
"G1 X88.56 Y160.73 Z0.6 F3000.0\n"+
"G1 X88.3 Y159.93 Z0.6 F3000.0\n"+
"G1 X87.92 Y159.18 Z0.6 F3000.0\n"+
"G1 X87.42 Y158.5 Z0.6 F3000.0\n"+
"G1 X86.82 Y157.9 Z0.6 F3000.0\n"+
"G1 X86.14 Y157.4 Z0.6 F3000.0\n"+
"G1 X85.69 Y157.17 Z0.6 F3000.0\n"+
"G1 X94.26 Y138.26 Z0.6 F3000.0\n"+
"G1 X98.09 Y131.71 Z0.6 F3000.0\n"+
"G1 X109.02 Y101.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E13.887\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y98.46 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y97.83 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y101.24 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y100.6 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y97.19 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y96.55 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y99.96 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y99.33 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y95.92 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y95.28 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y98.69 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y98.05 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y94.64 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y94.01 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y97.42 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y96.78 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y93.37 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y92.73 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y96.14 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y95.51 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y92.1 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y91.46 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y94.87 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y94.24 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y90.83 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y90.19 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y93.6 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y92.96 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y89.55 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y88.92 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y92.33 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y91.69 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.11 Y86.78 Z0.6 F1080.0 E38.577\n"+
"G1 F240.0\n"+
"G1 E38.577\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.11 Y87.42 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E38.577\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.98 Y88.28 Z0.6 F1080.0 E6.808\n"+
"G1 F240.0\n"+
"G1 E6.808\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.34 Y88.28 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E6.808\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.11 Y88.05 Z0.6 F1080.0 E1.815\n"+
"G1 F240.0\n"+
"G1 E1.815\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.11 Y86.14 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E1.815\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y91.05 Z0.6 F1080.0 E38.577\n"+
"G1 F240.0\n"+
"G1 E38.577\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y90.42 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E38.577\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.48 Y85.87 Z0.6 F1080.0 E35.701\n"+
"G1 F240.0\n"+
"G1 E35.701\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.11 Y85.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E35.701\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y89.78 Z0.6 F1080.0 E30.704\n"+
"G1 F240.0\n"+
"G1 E30.704\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y89.14 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E30.704\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.75 Y85.87 Z0.6 F1080.0 E25.699\n"+
"G1 F240.0\n"+
"G1 E25.699\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X106.39 Y85.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E25.699\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y88.51 Z0.6 F1080.0 E20.703\n"+
"G1 F240.0\n"+
"G1 E20.703\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.43 Y88.28 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E20.703\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.02 Y85.87 Z0.6 F1080.0 E18.935\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.66 Y85.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.07 Y88.28 Z0.6 F1080.0 E18.935\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.71 Y88.28 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.3 Y85.87 Z0.6 F1080.0 E18.935\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X108.93 Y85.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.34 Y88.28 Z0.6 F1080.0 E18.935\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X111.98 Y88.28 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.57 Y85.87 Z0.6 F1080.0 E18.931\n"+
"G1 F240.0\n"+
"G1 E18.931\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.21 Y85.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.931\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.61 Y88.28 Z0.6 F1080.0 E18.931\n"+
"G1 F240.0\n"+
"G1 E18.931\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.25 Y88.28 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.931\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.84 Y85.87 Z0.6 F1080.0 E18.939\n"+
"G1 F240.0\n"+
"G1 E18.939\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X111.48 Y85.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.939\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.89 Y88.28 Z0.6 F1080.0 E18.935\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.52 Y88.28 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.11 Y85.87 Z0.6 F1080.0 E18.935\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.75 Y85.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.16 Y88.28 Z0.6 F1080.0 E18.935\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y92.14 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.935\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y88.73 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y89.37 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y92.78 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y93.42 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y90.01 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y90.64 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y94.05 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y94.69 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y91.28 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y91.92 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y95.33 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y95.96 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y92.55 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y93.19 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y96.6 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y97.24 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y93.83 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y94.46 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y97.87 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y98.51 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y95.1 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y95.73 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y99.14 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y99.78 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y96.37 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y97.01 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y100.42 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y101.05 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y97.64 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y98.28 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y101.69 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y102.33 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y98.92 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y99.55 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y102.96 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y103.6 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.61 Y100.19 Z0.6 F1080.0 E26.791\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y91.51 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.791\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.39 Y85.87 Z0.6 F1080.0 E44.265\n"+
"G1 F240.0\n"+
"G1 E44.265\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.02 Y85.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E44.265\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y90.87 Z0.6 F1080.0 E39.268\n"+
"G1 F240.0\n"+
"G1 E39.268\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y90.24 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E39.268\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.66 Y85.87 Z0.6 F1080.0 E34.271\n"+
"G1 F240.0\n"+
"G1 E34.271\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.3 Y85.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E34.271\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y89.6 Z0.6 F1080.0 E29.266\n"+
"G1 F240.0\n"+
"G1 E29.266\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y88.96 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E29.266\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.93 Y85.87 Z0.6 F1080.0 E24.269\n"+
"G1 F240.0\n"+
"G1 E24.269\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X116.57 Y85.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.269\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.02 Y88.33 Z0.6 F1080.0 E19.265\n"+
"G1 F240.0\n"+
"G1 E19.265\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.61 Y88.28 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E19.265\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.21 Y85.87 Z0.6 F1080.0 E18.931\n"+
"G1 F240.0\n"+
"G1 E18.931\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.84 Y85.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.931\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.25 Y88.28 Z0.6 F1080.0 E18.939\n"+
"G1 F240.0\n"+
"G1 E18.939\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.52 Y87.92 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E18.939\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.48 Y85.87 Z0.6 F1080.0 E16.055\n"+
"G1 F240.0\n"+
"G1 E16.055\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.11 Y85.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E16.055\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.52 Y87.28 Z0.6 F1080.0 E11.054\n"+
"G1 F240.0\n"+
"G1 E11.054\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.52 Y86.64 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E11.054\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.75 Y85.87 Z0.6 F1080.0 E6.05\n"+
"G1 F240.0\n"+
"G1 E6.05\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.39 Y85.87 Z0.6 F3000.0\n"+
"G1 F240.0\n"+
"G1 E6.05\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.52 Y86.01 Z0.6 F1080.0 E1.053\n"+
"G1 F240.0\n"+
"G1 E1.053\n"+
"G1 F1080.0\n"+
";\n"+
"(</surroundingLoop>)\n"+
"G1 F30.0\n"+
"(<layer> 0.9 )\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X93.055 Y139.175 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y131.549 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y111.258 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y103.957 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y89.078 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y89.078 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y85.078 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y85.078 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y89.078 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y89.078 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y103.277 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y111.128 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y133.629 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.426 Y163.491 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X90.593 Y174.941 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.302 Y171.647 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X72.316 Y161.279 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X75.721 Y149.182 Z0.9 </boundaryPoint>)\n"+
"(<perimeter> outer )\n"+
"M108 S110.0\n"+
"M108 S110.0\n"+
"G1 X120.52 Y86.01 Z0.9 F30.0\n"+
"G91\n"+
"G1 F20\n"+
"G1 F1500\n"+
"G1 X-0.3 Y-0.3 F1500\n"+
"G90\n"+
"G4 P3000\n"+
"G92 X0;set x 0\n"+
"G1 X-1.0 F3000.0 \n"+
"G1 X-500.0  F3200.0 ;horizontal move\n"+
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
"G1 X120.52 Y86.01 Z0.9 F3000.0\n"+
"G1 X120.66 Y86.04 Z0.9 F3000.0\n"+
"G1 X121.08 Y86.12 Z0.9 F64.165\n"+
"G1 F240.0\n"+
"G1 E1.053\n"+
"G1 F64.165\n"+
"G92 E0\n"+
";\n"+
"G1 X121.08 Y88.84 Z0.9 F540.0 E33.171\n"+
"G1 X119.58 Y88.84 Z0.9 F540.0 E51.504\n"+
"G1 X119.58 Y103.38 Z0.9 F540.0 E229.191\n"+
"G1 X127.43 Y111.23 Z0.9 F540.0 E364.894\n"+
"G1 X127.43 Y133.57 Z0.9 F540.0 E637.914\n"+
"G1 X110.25 Y163.32 Z0.9 F540.0 E1057.781\n"+
"G1 X90.56 Y174.68 Z0.9 F540.0 E1335.677\n"+
"G1 X78.46 Y171.44 Z0.9 F540.0 E1488.767\n"+
"G1 X72.57 Y161.25 Z0.9 F540.0 E1632.649\n"+
"G1 X75.93 Y149.34 Z0.9 F540.0 E1783.824\n"+
"G1 X93.23 Y139.35 Z0.9 F540.0 E2028.032\n"+
"G1 X97.76 Y131.61 Z0.9 F540.0 E2137.581\n"+
"G1 X97.76 Y111.36 Z0.9 F540.0 E2385.167\n"+
"G1 X105.06 Y104.06 Z0.9 F540.0 E2511.363\n"+
"G1 X105.06 Y88.84 Z0.9 F540.0 E2697.361\n"+
"G1 X103.56 Y88.84 Z0.9 F540.0 E2715.694\n"+
"G1 X103.56 Y85.32 Z0.9 F540.0 E2758.717\n"+
"G1 X121.08 Y85.32 Z0.9 F540.0 E2972.85\n"+
"G1 X121.08 Y85.84 Z0.9 F540.0 E2979.181\n"+
"G1 F240.0\n"+
"G1 E2979.181\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X114.816 Y89.078 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y89.078 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y102.078 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.816 Y102.078 Z0.9 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X114.91 Y88.84 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E2979.181\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.58 Y88.84 Z0.9 F540.0 E65.218\n"+
"G1 X109.58 Y102.32 Z0.9 F540.0 E229.973\n"+
"G1 X115.06 Y102.32 Z0.9 F540.0 E296.951\n"+
"G1 X115.06 Y88.98 Z0.9 F540.0 E459.947\n"+
"G1 F240.0\n"+
"G1 E459.947\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X107.804 Y111.704 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.923 Y112.448 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.155 Y113.164 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.497 Y113.835 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.94 Y114.444 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.473 Y114.977 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.082 Y115.42 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.753 Y115.762 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.469 Y115.994 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.213 Y116.112 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.967 Y116.112 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.711 Y115.994 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.427 Y115.762 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.098 Y115.42 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.707 Y114.977 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.239 Y114.444 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.683 Y113.835 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.025 Y113.164 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y112.448 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y111.704 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y110.95 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y110.206 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.025 Y109.49 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.683 Y108.819 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.239 Y108.21 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.707 Y107.677 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.098 Y107.234 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.427 Y106.892 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.711 Y106.66 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.967 Y106.542 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.213 Y106.542 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.469 Y106.66 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.753 Y106.892 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.082 Y107.234 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.473 Y107.677 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.94 Y108.21 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.497 Y108.819 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.155 Y109.49 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.923 Y110.206 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.804 Y110.95 Z0.9 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X115.39 Y102.65 Z0.9 F3000.0\n"+
"G1 X112.84 Y106.3 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E459.947\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.19 Y106.3 Z0.9 F540.0 E7.92\n"+
"G1 X111.41 Y106.43 Z0.9 F540.0 E17.585\n"+
"G1 X110.66 Y106.67 Z0.9 F540.0 E27.248\n"+
"G1 X109.96 Y107.03 Z0.9 F540.0 E36.917\n"+
"G1 X109.32 Y107.49 Z0.9 F540.0 E46.586\n"+
"G1 X108.76 Y108.05 Z0.9 F540.0 E56.257\n"+
"G1 X108.29 Y108.69 Z0.9 F540.0 E65.916\n"+
"G1 X107.93 Y109.4 Z0.9 F540.0 E75.586\n"+
"G1 X107.69 Y110.15 Z0.9 F540.0 E85.249\n"+
"G1 X107.57 Y110.93 Z0.9 F540.0 E94.914\n"+
"G1 X107.57 Y111.72 Z0.9 F540.0 E104.594\n"+
"G1 X107.69 Y112.5 Z0.9 F540.0 E114.259\n"+
"G1 X107.93 Y113.26 Z0.9 F540.0 E123.922\n"+
"G1 X108.29 Y113.96 Z0.9 F540.0 E133.591\n"+
"G1 X108.76 Y114.6 Z0.9 F540.0 E143.25\n"+
"G1 X109.32 Y115.16 Z0.9 F540.0 E152.921\n"+
"G1 X109.96 Y115.63 Z0.9 F540.0 E162.59\n"+
"G1 X110.66 Y115.98 Z0.9 F540.0 E172.259\n"+
"G1 X111.41 Y116.23 Z0.9 F540.0 E181.922\n"+
"G1 X112.19 Y116.35 Z0.9 F540.0 E191.587\n"+
"G1 X112.99 Y116.35 Z0.9 F540.0 E201.267\n"+
"G1 X113.77 Y116.23 Z0.9 F540.0 E210.932\n"+
"G1 X114.52 Y115.98 Z0.9 F540.0 E220.595\n"+
"G1 X115.22 Y115.63 Z0.9 F540.0 E230.265\n"+
"G1 X115.86 Y115.16 Z0.9 F540.0 E239.924\n"+
"G1 X116.42 Y114.6 Z0.9 F540.0 E249.603\n"+
"G1 X116.89 Y113.96 Z0.9 F540.0 E259.262\n"+
"G1 X117.25 Y113.26 Z0.9 F540.0 E268.932\n"+
"G1 X117.49 Y112.5 Z0.9 F540.0 E278.595\n"+
"G1 X117.61 Y111.72 Z0.9 F540.0 E288.258\n"+
"G1 X117.61 Y110.93 Z0.9 F540.0 E297.938\n"+
"G1 X117.49 Y110.15 Z0.9 F540.0 E307.601\n"+
"G1 X117.25 Y109.4 Z0.9 F540.0 E317.264\n"+
"G1 X116.89 Y108.69 Z0.9 F540.0 E326.933\n"+
"G1 X116.42 Y108.05 Z0.9 F540.0 E336.592\n"+
"G1 X115.86 Y107.49 Z0.9 F540.0 E346.272\n"+
"G1 X115.22 Y107.03 Z0.9 F540.0 E355.931\n"+
"G1 X114.52 Y106.67 Z0.9 F540.0 E365.6\n"+
"G1 X113.77 Y106.43 Z0.9 F540.0 E375.263\n"+
"G1 X113.13 Y106.33 Z0.9 F540.0 E383.17\n"+
"G1 F240.0\n"+
"G1 E383.17\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X111.269 Y134.809 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y134.986 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y135.115 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y135.194 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y135.22 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y135.194 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y135.115 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y134.986 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y134.809 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y134.59 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y134.334 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y134.046 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y133.734 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y133.406 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.683 Y133.07 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y132.734 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y132.406 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y132.094 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y131.806 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y131.55 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y131.331 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y131.154 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y131.024 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y130.946 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y130.92 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y130.946 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y131.024 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y131.154 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.269 Y131.331 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y131.55 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y131.806 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y132.094 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y132.406 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y132.734 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.383 Y133.07 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y133.406 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y133.734 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y134.046 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y134.334 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y134.59 Z0.9 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X115.4 Y106.74 Z0.9 F3000.0\n"+
"G1 X116.08 Y107.24 Z0.9 F3000.0\n"+
"G1 X116.68 Y107.84 Z0.9 F3000.0\n"+
"G1 X117.18 Y108.52 Z0.9 F3000.0\n"+
"G1 X117.56 Y109.27 Z0.9 F3000.0\n"+
"G1 X117.82 Y110.07 Z0.9 F3000.0\n"+
"G1 X117.95 Y110.91 Z0.9 F3000.0\n"+
"G1 X112.39 Y130.69 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.17\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.8 Y130.8 Z0.9 F540.0 E7.375\n"+
"G1 X111.13 Y131.14 Z0.9 F540.0 E16.536\n"+
"G1 X110.6 Y131.66 Z0.9 F540.0 E25.662\n"+
"G1 X110.26 Y132.33 Z0.9 F540.0 E34.823\n"+
"G1 X110.17 Y132.7 Z0.9 F540.0 E39.4\n"+
"G1 X110.17 Y133.44 Z0.9 F540.0 E48.543\n"+
"G1 X110.26 Y133.81 Z0.9 F540.0 E53.12\n"+
"G1 X110.6 Y134.48 Z0.9 F540.0 E62.281\n"+
"G1 X111.13 Y135.0 Z0.9 F540.0 E71.407\n"+
"G1 X111.45 Y135.2 Z0.9 F540.0 E75.994\n"+
"G1 X112.16 Y135.43 Z0.9 F540.0 E85.146\n"+
"G1 X112.91 Y135.43 Z0.9 F540.0 E94.288\n"+
"G1 X113.27 Y135.34 Z0.9 F540.0 E98.866\n"+
"G1 X113.94 Y135.0 Z0.9 F540.0 E108.027\n"+
"G1 X114.47 Y134.48 Z0.9 F540.0 E117.153\n"+
"G1 X114.81 Y133.81 Z0.9 F540.0 E126.314\n"+
"G1 X114.9 Y133.44 Z0.9 F540.0 E130.891\n"+
"G1 X114.9 Y132.7 Z0.9 F540.0 E140.034\n"+
"G1 X114.81 Y132.33 Z0.9 F540.0 E144.611\n"+
"G1 X114.47 Y131.66 Z0.9 F540.0 E153.772\n"+
"G1 X113.94 Y131.14 Z0.9 F540.0 E162.898\n"+
"G1 X113.27 Y130.8 Z0.9 F540.0 E172.059\n"+
"G1 X112.68 Y130.69 Z0.9 F540.0 E179.434\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X103.236 Y144.585 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y145.194 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y145.727 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y146.17 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y146.512 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y146.743 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y146.862 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y146.862 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y146.743 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y146.512 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y146.17 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y145.727 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y145.194 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y144.585 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y143.914 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y143.198 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y142.454 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y141.7 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y140.956 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y140.24 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y139.569 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y138.96 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y138.427 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y137.984 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y137.642 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y137.41 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y137.291 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y137.291 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y137.41 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y137.642 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y137.984 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y138.427 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y138.96 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.236 Y139.569 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y140.24 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y140.956 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y141.7 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y142.454 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y143.198 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y143.914 Z0.9 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X110.93 Y130.86 Z0.9 F3000.0\n"+
"G1 X110.33 Y131.47 Z0.9 F3000.0\n"+
"G1 X109.12 Y137.38 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.51 Y137.18 Z0.9 F540.0 E7.904\n"+
"G1 X107.73 Y137.05 Z0.9 F540.0 E17.569\n"+
"G1 X106.93 Y137.05 Z0.9 F540.0 E27.249\n"+
"G1 X106.15 Y137.18 Z0.9 F540.0 E36.914\n"+
"G1 X105.4 Y137.42 Z0.9 F540.0 E46.577\n"+
"G1 X104.7 Y137.78 Z0.9 F540.0 E56.247\n"+
"G1 X104.06 Y138.24 Z0.9 F540.0 E65.899\n"+
"G1 X103.5 Y138.8 Z0.9 F540.0 E75.587\n"+
"G1 X103.03 Y139.44 Z0.9 F540.0 E85.246\n"+
"G1 X102.67 Y140.15 Z0.9 F540.0 E94.915\n"+
"G1 X102.43 Y140.9 Z0.9 F540.0 E104.578\n"+
"G1 X102.3 Y141.68 Z0.9 F540.0 E114.243\n"+
"G1 X102.3 Y142.47 Z0.9 F540.0 E123.923\n"+
"G1 X102.43 Y143.25 Z0.9 F540.0 E133.588\n"+
"G1 X102.67 Y144.01 Z0.9 F540.0 E143.239\n"+
"G1 X103.03 Y144.71 Z0.9 F540.0 E152.92\n"+
"G1 X103.5 Y145.35 Z0.9 F540.0 E162.579\n"+
"G1 X104.06 Y145.91 Z0.9 F540.0 E172.258\n"+
"G1 X104.7 Y146.38 Z0.9 F540.0 E181.917\n"+
"G1 X105.4 Y146.73 Z0.9 F540.0 E191.587\n"+
"G1 X106.15 Y146.98 Z0.9 F540.0 E201.25\n"+
"G1 X106.93 Y147.1 Z0.9 F540.0 E210.915\n"+
"G1 X107.73 Y147.1 Z0.9 F540.0 E220.595\n"+
"G1 X108.51 Y146.98 Z0.9 F540.0 E230.26\n"+
"G1 X109.26 Y146.73 Z0.9 F540.0 E239.923\n"+
"G1 X109.96 Y146.38 Z0.9 F540.0 E249.592\n"+
"G1 X110.6 Y145.91 Z0.9 F540.0 E259.251\n"+
"G1 X111.16 Y145.35 Z0.9 F540.0 E268.922\n"+
"G1 X111.63 Y144.71 Z0.9 F540.0 E278.588\n"+
"G1 X111.99 Y144.01 Z0.9 F540.0 E288.269\n"+
"G1 X112.23 Y143.25 Z0.9 F540.0 E297.92\n"+
"G1 X112.35 Y142.47 Z0.9 F540.0 E307.585\n"+
"G1 X112.35 Y141.68 Z0.9 F540.0 E317.265\n"+
"G1 X112.23 Y140.9 Z0.9 F540.0 E326.93\n"+
"G1 X111.99 Y140.15 Z0.9 F540.0 E336.593\n"+
"G1 X111.63 Y139.44 Z0.9 F540.0 E346.263\n"+
"G1 X111.16 Y138.8 Z0.9 F540.0 E355.929\n"+
"G1 X110.6 Y138.24 Z0.9 F540.0 E365.608\n"+
"G1 X109.96 Y137.78 Z0.9 F540.0 E375.26\n"+
"G1 X109.39 Y137.49 Z0.9 F540.0 E383.175\n"+
"G1 F240.0\n"+
"G1 E383.175\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X100.159 Y151.887 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.312 Y152.187 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.51 Y152.46 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.749 Y152.699 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.022 Y152.897 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.322 Y153.05 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.643 Y153.154 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.976 Y153.207 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.314 Y153.207 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.647 Y153.154 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.968 Y153.05 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.268 Y152.897 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.541 Y152.699 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.78 Y152.46 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y152.187 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y151.887 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.236 Y151.566 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y151.233 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y150.895 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.236 Y150.562 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y150.241 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y149.941 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.78 Y149.668 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.541 Y149.429 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.268 Y149.231 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.968 Y149.078 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.647 Y148.973 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.314 Y148.921 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.976 Y148.921 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.643 Y148.973 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.322 Y149.078 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.022 Y149.231 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.749 Y149.429 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.51 Y149.668 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.312 Y149.941 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.159 Y150.241 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y150.562 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y150.895 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y151.233 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y151.566 Z0.9 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X106.91 Y136.72 Z0.9 F3000.0\n"+
"G1 X106.07 Y136.85 Z0.9 F3000.0\n"+
"G1 X105.27 Y137.11 Z0.9 F3000.0\n"+
"G1 X104.52 Y137.49 Z0.9 F3000.0\n"+
"G1 X103.84 Y137.99 Z0.9 F3000.0\n"+
"G1 X103.24 Y138.59 Z0.9 F3000.0\n"+
"G1 X102.74 Y139.27 Z0.9 F3000.0\n"+
"G1 X102.36 Y140.02 Z0.9 F3000.0\n"+
"G1 X102.1 Y140.82 Z0.9 F3000.0\n"+
"G1 X101.97 Y141.66 Z0.9 F3000.0\n"+
"G1 X103.27 Y148.96 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.175\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.7 Y148.74 Z0.9 F540.0 E7.397\n"+
"G1 X101.96 Y148.68 Z0.9 F540.0 E16.542\n"+
"G1 X101.59 Y148.74 Z0.9 F540.0 E21.119\n"+
"G1 X100.9 Y149.03 Z0.9 F540.0 E30.265\n"+
"G1 X100.33 Y149.51 Z0.9 F540.0 E39.41\n"+
"G1 X100.11 Y149.82 Z0.9 F540.0 E43.987\n"+
"G1 X99.82 Y150.51 Z0.9 F540.0 E53.121\n"+
"G1 X99.76 Y151.25 Z0.9 F540.0 E62.278\n"+
"G1 X99.82 Y151.62 Z0.9 F540.0 E66.856\n"+
"G1 X100.11 Y152.31 Z0.9 F540.0 E76.001\n"+
"G1 X100.33 Y152.62 Z0.9 F540.0 E80.577\n"+
"G1 X100.9 Y153.1 Z0.9 F540.0 E89.723\n"+
"G1 X101.59 Y153.39 Z0.9 F540.0 E98.868\n"+
"G1 X102.33 Y153.45 Z0.9 F540.0 E108.014\n"+
"G1 X102.7 Y153.39 Z0.9 F540.0 E112.591\n"+
"G1 X103.39 Y153.1 Z0.9 F540.0 E121.736\n"+
"G1 X103.96 Y152.62 Z0.9 F540.0 E130.882\n"+
"G1 X104.18 Y152.31 Z0.9 F540.0 E135.459\n"+
"G1 X104.47 Y151.62 Z0.9 F540.0 E144.604\n"+
"G1 X104.53 Y150.88 Z0.9 F540.0 E153.749\n"+
"G1 X104.47 Y150.51 Z0.9 F540.0 E158.338\n"+
"G1 X104.18 Y149.82 Z0.9 F540.0 E167.472\n"+
"G1 X103.96 Y149.51 Z0.9 F540.0 E172.049\n"+
"G1 X103.51 Y149.11 Z0.9 F540.0 E179.434\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X78.894 Y163.827 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.236 Y164.498 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.679 Y165.107 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.212 Y165.64 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.821 Y166.082 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.492 Y166.425 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.208 Y166.657 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.952 Y166.775 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.706 Y166.775 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.45 Y166.657 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.166 Y166.425 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.837 Y166.082 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.446 Y165.64 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.979 Y165.107 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.422 Y164.498 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.764 Y163.827 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y163.111 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y162.367 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y161.613 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y160.868 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.764 Y160.153 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.422 Y159.482 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.979 Y158.873 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.446 Y158.34 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.837 Y157.897 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.166 Y157.555 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.45 Y157.323 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.706 Y157.205 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.952 Y157.205 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.208 Y157.323 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.492 Y157.555 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.821 Y157.897 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.212 Y158.34 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.679 Y158.873 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.236 Y159.482 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.894 Y160.153 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.662 Y160.868 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y161.613 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y162.367 Z0.9 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.662 Y163.111 Z0.9 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X101.93 Y148.35 Z0.9 F3000.0\n"+
"G1 X101.1 Y148.54 Z0.9 F3000.0\n"+
"G1 X87.54 Y159.24 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.16 Y158.72 Z0.9 F540.0 E7.901\n"+
"G1 X86.6 Y158.16 Z0.9 F540.0 E17.581\n"+
"G1 X85.96 Y157.69 Z0.9 F540.0 E27.24\n"+
"G1 X85.26 Y157.33 Z0.9 F540.0 E36.909\n"+
"G1 X84.51 Y157.09 Z0.9 F540.0 E46.572\n"+
"G1 X83.73 Y156.97 Z0.9 F540.0 E56.237\n"+
"G1 X82.93 Y156.97 Z0.9 F540.0 E65.917\n"+
"G1 X82.15 Y157.09 Z0.9 F540.0 E75.582\n"+
"G1 X81.4 Y157.33 Z0.9 F540.0 E85.245\n"+
"G1 X80.69 Y157.69 Z0.9 F540.0 E94.915\n"+
"G1 X80.06 Y158.16 Z0.9 F540.0 E104.574\n"+
"G1 X79.5 Y158.72 Z0.9 F540.0 E114.253\n"+
"G1 X79.03 Y159.36 Z0.9 F540.0 E123.912\n"+
"G1 X78.67 Y160.06 Z0.9 F540.0 E133.582\n"+
"G1 X78.43 Y160.81 Z0.9 F540.0 E143.245\n"+
"G1 X78.3 Y161.59 Z0.9 F540.0 E152.91\n"+
"G1 X78.3 Y162.39 Z0.9 F540.0 E162.59\n"+
"G1 X78.43 Y163.17 Z0.9 F540.0 E172.243\n"+
"G1 X78.67 Y163.92 Z0.9 F540.0 E181.917\n"+
"G1 X79.03 Y164.62 Z0.9 F540.0 E191.587\n"+
"G1 X79.5 Y165.26 Z0.9 F540.0 E201.246\n"+
"G1 X80.06 Y165.82 Z0.9 F540.0 E210.925\n"+
"G1 X80.69 Y166.29 Z0.9 F540.0 E220.584\n"+
"G1 X81.4 Y166.65 Z0.9 F540.0 E230.254\n"+
"G1 X82.15 Y166.89 Z0.9 F540.0 E239.917\n"+
"G1 X82.93 Y167.02 Z0.9 F540.0 E249.582\n"+
"G1 X83.73 Y167.02 Z0.9 F540.0 E259.262\n"+
"G1 X84.51 Y166.89 Z0.9 F540.0 E268.927\n"+
"G1 X85.26 Y166.65 Z0.9 F540.0 E278.59\n"+
"G1 X85.96 Y166.29 Z0.9 F540.0 E288.259\n"+
"G1 X86.6 Y165.82 Z0.9 F540.0 E297.918\n"+
"G1 X87.16 Y165.26 Z0.9 F540.0 E307.598\n"+
"G1 X87.63 Y164.62 Z0.9 F540.0 E317.257\n"+
"G1 X87.99 Y163.92 Z0.9 F540.0 E326.926\n"+
"G1 X88.23 Y163.17 Z0.9 F540.0 E336.601\n"+
"G1 X88.35 Y162.39 Z0.9 F540.0 E346.254\n"+
"G1 X88.35 Y161.59 Z0.9 F540.0 E355.934\n"+
"G1 X88.23 Y160.81 Z0.9 F540.0 E365.599\n"+
"G1 X87.99 Y160.06 Z0.9 F540.0 E375.262\n"+
"G1 X87.69 Y159.48 Z0.9 F540.0 E383.177\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<loop> inner )\n"+
"M108 S100.0\n"+
"M108 S100.0\n"+
"G1 X87.94 Y159.0 Z0.9 F1080.0 E386.218\n"+
"G1 X87.52 Y158.41 Z0.9 F1080.0 E390.215\n"+
"G1 X86.91 Y157.8 Z0.9 F1080.0 E395.023\n"+
"G1 X86.21 Y157.29 Z0.9 F1080.0 E399.819\n"+
"G1 X85.44 Y156.9 Z0.9 F1080.0 E404.624\n"+
"G1 X84.61 Y156.64 Z0.9 F1080.0 E409.426\n"+
"G1 X83.76 Y156.5 Z0.9 F1080.0 E414.218\n"+
"G1 X82.9 Y156.5 Z0.9 F1080.0 E419.029\n"+
"G1 X82.04 Y156.64 Z0.9 F1080.0 E423.827\n"+
"G1 X81.22 Y156.9 Z0.9 F1080.0 E428.624\n"+
"G1 X80.45 Y157.29 Z0.9 F1080.0 E433.429\n"+
"G1 X79.75 Y157.8 Z0.9 F1080.0 E438.225\n"+
"G1 X79.14 Y158.41 Z0.9 F1080.0 E443.033\n"+
"G1 X78.63 Y159.11 Z0.9 F1080.0 E447.829\n"+
"G1 X78.24 Y159.88 Z0.9 F1080.0 E452.634\n"+
"G1 X77.97 Y160.7 Z0.9 F1080.0 E457.431\n"+
"G1 X77.84 Y161.56 Z0.9 F1080.0 E462.228\n"+
"G1 X77.84 Y162.42 Z0.9 F1080.0 E467.04\n"+
"G1 X77.97 Y163.28 Z0.9 F1080.0 E471.837\n"+
"G1 X78.24 Y164.1 Z0.9 F1080.0 E476.634\n"+
"G1 X78.63 Y164.87 Z0.9 F1080.0 E481.439\n"+
"G1 X79.14 Y165.57 Z0.9 F1080.0 E486.235\n"+
"G1 X79.75 Y166.18 Z0.9 F1080.0 E491.043\n"+
"G1 X80.45 Y166.69 Z0.9 F1080.0 E495.839\n"+
"G1 X81.22 Y167.08 Z0.9 F1080.0 E500.644\n"+
"G1 X82.04 Y167.34 Z0.9 F1080.0 E505.439\n"+
"G1 X82.9 Y167.48 Z0.9 F1080.0 E510.238\n"+
"G1 X83.76 Y167.48 Z0.9 F1080.0 E515.049\n"+
"G1 X84.61 Y167.34 Z0.9 F1080.0 E519.842\n"+
"G1 X85.44 Y167.08 Z0.9 F1080.0 E524.642\n"+
"G1 X86.21 Y166.69 Z0.9 F1080.0 E529.447\n"+
"G1 X86.91 Y166.18 Z0.9 F1080.0 E534.243\n"+
"G1 X87.52 Y165.57 Z0.9 F1080.0 E539.051\n"+
"G1 X88.03 Y164.87 Z0.9 F1080.0 E543.847\n"+
"G1 X88.42 Y164.1 Z0.9 F1080.0 E548.653\n"+
"G1 X88.68 Y163.28 Z0.9 F1080.0 E553.449\n"+
"G1 X88.82 Y162.42 Z0.9 F1080.0 E558.247\n"+
"G1 X88.82 Y161.56 Z0.9 F1080.0 E563.058\n"+
"G1 X88.68 Y160.7 Z0.9 F1080.0 E567.856\n"+
"G1 X88.42 Y159.88 Z0.9 F1080.0 E572.652\n"+
"G1 X88.09 Y159.24 Z0.9 F1080.0 E576.66\n"+
"G1 F240.0\n"+
"G1 E576.66\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.79 Y152.67 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E576.66\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.29 Y153.24 Z0.9 F1080.0 E4.176\n"+
"G1 X100.65 Y153.5 Z0.9 F1080.0 E6.667\n"+
"G1 X101.05 Y153.7 Z0.9 F1080.0 E9.149\n"+
"G1 X101.48 Y153.84 Z0.9 F1080.0 E11.64\n"+
"G1 X101.92 Y153.91 Z0.9 F1080.0 E14.136\n"+
"G1 X102.37 Y153.91 Z0.9 F1080.0 E16.625\n"+
"G1 X102.81 Y153.84 Z0.9 F1080.0 E19.116\n"+
"G1 X103.24 Y153.7 Z0.9 F1080.0 E21.612\n"+
"G1 X103.64 Y153.5 Z0.9 F1080.0 E24.094\n"+
"G1 X104.0 Y153.24 Z0.9 F1080.0 E26.585\n"+
"G1 X104.32 Y152.92 Z0.9 F1080.0 E29.083\n"+
"G1 X104.58 Y152.56 Z0.9 F1080.0 E31.574\n"+
"G1 X104.78 Y152.16 Z0.9 F1080.0 E34.056\n"+
"G1 X104.92 Y151.73 Z0.9 F1080.0 E36.55\n"+
"G1 X104.99 Y151.29 Z0.9 F1080.0 E39.042\n"+
"G1 X104.99 Y150.84 Z0.9 F1080.0 E41.531\n"+
"G1 X104.92 Y150.4 Z0.9 F1080.0 E44.023\n"+
"G1 X104.78 Y149.97 Z0.9 F1080.0 E46.517\n"+
"G1 X104.58 Y149.57 Z0.9 F1080.0 E49.0\n"+
"G1 X104.32 Y149.21 Z0.9 F1080.0 E51.49\n"+
"G1 X104.0 Y148.89 Z0.9 F1080.0 E53.988\n"+
"G1 X103.64 Y148.63 Z0.9 F1080.0 E56.479\n"+
"G1 X103.24 Y148.43 Z0.9 F1080.0 E58.961\n"+
"G1 X102.81 Y148.29 Z0.9 F1080.0 E61.457\n"+
"G1 X102.37 Y148.22 Z0.9 F1080.0 E63.948\n"+
"G1 X101.92 Y148.22 Z0.9 F1080.0 E66.437\n"+
"G1 X101.48 Y148.29 Z0.9 F1080.0 E68.933\n"+
"G1 X101.05 Y148.43 Z0.9 F1080.0 E71.424\n"+
"G1 X100.65 Y148.63 Z0.9 F1080.0 E73.906\n"+
"G1 X100.29 Y148.89 Z0.9 F1080.0 E76.397\n"+
"G1 X99.97 Y149.21 Z0.9 F1080.0 E78.899\n"+
"G1 X99.71 Y149.57 Z0.9 F1080.0 E81.386\n"+
"G1 X99.51 Y149.97 Z0.9 F1080.0 E83.868\n"+
"G1 X99.37 Y150.4 Z0.9 F1080.0 E86.365\n"+
"G1 X99.3 Y150.84 Z0.9 F1080.0 E88.856\n"+
"G1 X99.3 Y151.29 Z0.9 F1080.0 E91.345\n"+
"G1 X99.37 Y151.73 Z0.9 F1080.0 E93.835\n"+
"G1 X99.64 Y152.43 Z0.9 F1080.0 E98.004\n"+
"G1 F240.0\n"+
"G1 E98.004\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.82 Y149.64 Z0.9 F3000.0\n"+
"G1 X104.22 Y146.6 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E98.004\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.22 Y147.17 Z0.9 F1080.0 E6.395\n"+
"G1 X106.04 Y147.43 Z0.9 F1080.0 E11.191\n"+
"G1 X106.9 Y147.57 Z0.9 F1080.0 E15.994\n"+
"G1 X107.76 Y147.57 Z0.9 F1080.0 E20.806\n"+
"G1 X108.61 Y147.43 Z0.9 F1080.0 E25.598\n"+
"G1 X109.44 Y147.17 Z0.9 F1080.0 E30.394\n"+
"G1 X110.21 Y146.77 Z0.9 F1080.0 E35.204\n"+
"G1 X110.91 Y146.26 Z0.9 F1080.0 E40.0\n"+
"G1 X111.52 Y145.65 Z0.9 F1080.0 E44.809\n"+
"G1 X112.03 Y144.96 Z0.9 F1080.0 E49.605\n"+
"G1 X112.42 Y144.18 Z0.9 F1080.0 E54.41\n"+
"G1 X112.68 Y143.36 Z0.9 F1080.0 E59.206\n"+
"G1 X112.82 Y142.51 Z0.9 F1080.0 E64.004\n"+
"G1 X112.82 Y141.64 Z0.9 F1080.0 E68.815\n"+
"G1 X112.68 Y140.79 Z0.9 F1080.0 E73.613\n"+
"G1 X112.42 Y139.97 Z0.9 F1080.0 E78.409\n"+
"G1 X112.03 Y139.2 Z0.9 F1080.0 E83.214\n"+
"G1 X111.52 Y138.5 Z0.9 F1080.0 E88.011\n"+
"G1 X110.91 Y137.89 Z0.9 F1080.0 E92.819\n"+
"G1 X110.21 Y137.38 Z0.9 F1080.0 E97.618\n"+
"G1 X109.44 Y136.99 Z0.9 F1080.0 E102.426\n"+
"G1 X108.61 Y136.72 Z0.9 F1080.0 E107.222\n"+
"G1 X107.76 Y136.59 Z0.9 F1080.0 E112.014\n"+
"G1 X106.9 Y136.59 Z0.9 F1080.0 E116.826\n"+
"G1 X106.04 Y136.72 Z0.9 F1080.0 E121.629\n"+
"G1 X105.22 Y136.99 Z0.9 F1080.0 E126.425\n"+
"G1 X104.45 Y137.38 Z0.9 F1080.0 E131.223\n"+
"G1 X103.75 Y137.89 Z0.9 F1080.0 E136.022\n"+
"G1 X103.14 Y138.5 Z0.9 F1080.0 E140.83\n"+
"G1 X102.63 Y139.2 Z0.9 F1080.0 E145.627\n"+
"G1 X102.24 Y139.97 Z0.9 F1080.0 E150.432\n"+
"G1 X101.97 Y140.79 Z0.9 F1080.0 E155.228\n"+
"G1 X101.84 Y141.64 Z0.9 F1080.0 E160.026\n"+
"G1 X101.84 Y142.51 Z0.9 F1080.0 E164.837\n"+
"G1 X101.97 Y143.36 Z0.9 F1080.0 E169.635\n"+
"G1 X102.24 Y144.18 Z0.9 F1080.0 E174.431\n"+
"G1 X102.63 Y144.96 Z0.9 F1080.0 E179.236\n"+
"G1 X103.14 Y145.65 Z0.9 F1080.0 E184.032\n"+
"G1 X103.98 Y146.43 Z0.9 F1080.0 E190.413\n"+
"G1 F240.0\n"+
"G1 E190.413\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X102.1 Y143.33 Z0.9 F3000.0\n"+
"G1 X101.97 Y142.5 Z0.9 F3000.0\n"+
"G1 X101.97 Y141.66 Z0.9 F3000.0\n"+
"G1 X111.45 Y116.71 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.413\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.16 Y116.82 Z0.9 F1080.0 E3.999\n"+
"G1 X113.02 Y116.82 Z0.9 F1080.0 E8.81\n"+
"G1 X113.88 Y116.68 Z0.9 F1080.0 E13.608\n"+
"G1 X114.7 Y116.42 Z0.9 F1080.0 E18.404\n"+
"G1 X115.47 Y116.02 Z0.9 F1080.0 E23.209\n"+
"G1 X116.17 Y115.52 Z0.9 F1080.0 E28.005\n"+
"G1 X116.78 Y114.9 Z0.9 F1080.0 E32.813\n"+
"G1 X117.29 Y114.21 Z0.9 F1080.0 E37.61\n"+
"G1 X117.68 Y113.43 Z0.9 F1080.0 E42.415\n"+
"G1 X117.95 Y112.61 Z0.9 F1080.0 E47.211\n"+
"G1 X118.08 Y111.76 Z0.9 F1080.0 E52.009\n"+
"G1 X118.08 Y110.89 Z0.9 F1080.0 E56.82\n"+
"G1 X117.95 Y110.04 Z0.9 F1080.0 E61.618\n"+
"G1 X117.68 Y109.22 Z0.9 F1080.0 E66.414\n"+
"G1 X117.29 Y108.45 Z0.9 F1080.0 E71.219\n"+
"G1 X116.78 Y107.75 Z0.9 F1080.0 E76.015\n"+
"G1 X116.17 Y107.14 Z0.9 F1080.0 E80.824\n"+
"G1 X115.47 Y106.63 Z0.9 F1080.0 E85.62\n"+
"G1 X114.7 Y106.24 Z0.9 F1080.0 E90.425\n"+
"G1 X113.88 Y105.97 Z0.9 F1080.0 E95.221\n"+
"G1 X113.02 Y105.84 Z0.9 F1080.0 E100.019\n"+
"G1 X112.16 Y105.84 Z0.9 F1080.0 E104.83\n"+
"G1 X111.3 Y105.97 Z0.9 F1080.0 E109.628\n"+
"G1 X110.48 Y106.24 Z0.9 F1080.0 E114.424\n"+
"G1 X109.71 Y106.63 Z0.9 F1080.0 E119.229\n"+
"G1 X109.01 Y107.14 Z0.9 F1080.0 E124.025\n"+
"G1 X108.4 Y107.75 Z0.9 F1080.0 E128.834\n"+
"G1 X107.89 Y108.45 Z0.9 F1080.0 E133.63\n"+
"G1 X107.5 Y109.22 Z0.9 F1080.0 E138.435\n"+
"G1 X107.24 Y110.04 Z0.9 F1080.0 E143.231\n"+
"G1 X107.1 Y110.89 Z0.9 F1080.0 E148.029\n"+
"G1 X107.1 Y111.76 Z0.9 F1080.0 E152.84\n"+
"G1 X107.24 Y112.61 Z0.9 F1080.0 E157.638\n"+
"G1 X107.5 Y113.43 Z0.9 F1080.0 E162.434\n"+
"G1 X107.89 Y114.21 Z0.9 F1080.0 E167.239\n"+
"G1 X108.4 Y114.9 Z0.9 F1080.0 E172.036\n"+
"G1 X109.01 Y115.52 Z0.9 F1080.0 E176.844\n"+
"G1 X109.71 Y116.02 Z0.9 F1080.0 E181.64\n"+
"G1 X110.48 Y116.42 Z0.9 F1080.0 E186.445\n"+
"G1 X111.17 Y116.64 Z0.9 F1080.0 E190.44\n"+
"G1 F240.0\n"+
"G1 E190.44\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X108.0 Y114.14 Z0.9 F3000.0\n"+
"G1 X107.62 Y113.39 Z0.9 F3000.0\n"+
"G1 X107.36 Y112.58 Z0.9 F3000.0\n"+
"G1 X107.23 Y111.75 Z0.9 F3000.0\n"+
"G1 X107.23 Y110.9 Z0.9 F3000.0\n"+
"G1 X111.45 Y102.78 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.44\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.52 Y102.78 Z0.9 F1080.0 E22.628\n"+
"G1 X115.52 Y88.37 Z0.9 F1080.0 E102.683\n"+
"G1 X109.11 Y88.37 Z0.9 F1080.0 E138.294\n"+
"G1 X109.11 Y102.78 Z0.9 F1080.0 E218.35\n"+
"G1 X111.16 Y102.78 Z0.9 F1080.0 E229.733\n"+
"G1 F240.0\n"+
"G1 E229.733\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X107.23 Y110.9 Z0.9 F3000.0\n"+
"G1 X112.39 Y130.22 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E229.733\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.65 Y130.35 Z0.9 F1080.0 E4.166\n"+
"G1 X111.24 Y130.52 Z0.9 F1080.0 E6.658\n"+
"G1 X110.85 Y130.76 Z0.9 F1080.0 E9.16\n"+
"G1 X110.51 Y131.05 Z0.9 F1080.0 E11.642\n"+
"G1 X110.22 Y131.39 Z0.9 F1080.0 E14.132\n"+
"G1 X109.99 Y131.77 Z0.9 F1080.0 E16.625\n"+
"G1 X109.82 Y132.19 Z0.9 F1080.0 E19.116\n"+
"G1 X109.71 Y132.62 Z0.9 F1080.0 E21.614\n"+
"G1 X109.68 Y133.07 Z0.9 F1080.0 E24.098\n"+
"G1 X109.71 Y133.52 Z0.9 F1080.0 E26.583\n"+
"G1 X109.82 Y133.95 Z0.9 F1080.0 E29.081\n"+
"G1 X109.99 Y134.37 Z0.9 F1080.0 E31.572\n"+
"G1 X110.22 Y134.75 Z0.9 F1080.0 E34.065\n"+
"G1 X110.51 Y135.09 Z0.9 F1080.0 E36.555\n"+
"G1 X110.85 Y135.38 Z0.9 F1080.0 E39.033\n"+
"G1 X111.24 Y135.62 Z0.9 F1080.0 E41.537\n"+
"G1 X111.65 Y135.79 Z0.9 F1080.0 E44.028\n"+
"G1 X112.09 Y135.89 Z0.9 F1080.0 E46.524\n"+
"G1 X112.53 Y135.93 Z0.9 F1080.0 E49.009\n"+
"G1 X112.98 Y135.89 Z0.9 F1080.0 E51.494\n"+
"G1 X113.42 Y135.79 Z0.9 F1080.0 E53.99\n"+
"G1 X113.83 Y135.62 Z0.9 F1080.0 E56.481\n"+
"G1 X114.21 Y135.38 Z0.9 F1080.0 E58.98\n"+
"G1 X114.55 Y135.09 Z0.9 F1080.0 E61.463\n"+
"G1 X114.84 Y134.75 Z0.9 F1080.0 E63.949\n"+
"G1 X115.08 Y134.37 Z0.9 F1080.0 E66.442\n"+
"G1 X115.25 Y133.95 Z0.9 F1080.0 E68.935\n"+
"G1 X115.36 Y133.52 Z0.9 F1080.0 E71.432\n"+
"G1 X115.39 Y133.07 Z0.9 F1080.0 E73.917\n"+
"G1 X115.36 Y132.62 Z0.9 F1080.0 E76.402\n"+
"G1 X115.25 Y132.19 Z0.9 F1080.0 E78.899\n"+
"G1 X115.08 Y131.77 Z0.9 F1080.0 E81.391\n"+
"G1 X114.84 Y131.39 Z0.9 F1080.0 E83.885\n"+
"G1 X114.55 Y131.05 Z0.9 F1080.0 E86.371\n"+
"G1 X114.21 Y130.76 Z0.9 F1080.0 E88.857\n"+
"G1 X113.83 Y130.52 Z0.9 F1080.0 E91.354\n"+
"G1 X113.42 Y130.35 Z0.9 F1080.0 E93.847\n"+
"G1 X112.68 Y130.22 Z0.9 F1080.0 E98.012\n"+
"G1 F240.0\n"+
"G1 E98.012\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> outer )\n"+
"G1 X124.68 Y137.39 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E98.012\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.91 Y162.98 Z0.9 F1080.0 E164.114\n"+
"G1 X90.49 Y174.18 Z0.9 F1080.0 E288.667\n"+
"G1 X78.77 Y171.04 Z0.9 F1080.0 E356.107\n"+
"G1 X73.08 Y161.18 Z0.9 F1080.0 E419.352\n"+
"G1 X76.32 Y149.65 Z0.9 F1080.0 E485.926\n"+
"G1 X93.57 Y139.69 Z0.9 F1080.0 E596.564\n"+
"G1 X98.22 Y131.74 Z0.9 F1080.0 E647.744\n"+
"G1 X98.22 Y111.55 Z0.9 F1080.0 E759.91\n"+
"G1 X105.52 Y104.25 Z0.9 F1080.0 E817.272\n"+
"G1 X105.52 Y88.37 Z0.9 F1080.0 E905.472\n"+
"G1 X104.02 Y88.37 Z0.9 F1080.0 E913.806\n"+
"G1 X104.02 Y85.78 Z0.9 F1080.0 E928.194\n"+
"G1 X120.61 Y85.78 Z0.9 F1080.0 E1020.361\n"+
"G1 X120.61 Y88.37 Z0.9 F1080.0 E1034.75\n"+
"G1 X119.11 Y88.37 Z0.9 F1080.0 E1043.083\n"+
"G1 X119.11 Y103.57 Z0.9 F1080.0 E1127.506\n"+
"G1 X126.96 Y111.42 Z0.9 F1080.0 E1189.189\n"+
"G1 X126.96 Y133.44 Z0.9 F1080.0 E1311.522\n"+
"G1 X124.82 Y137.14 Z0.9 F1080.0 E1335.272\n"+
"G1 F240.0\n"+
"G1 E1335.272\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"G1 X87.62 Y173.32 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E1335.272\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X125.98 Y134.97 Z0.9 F1080.0 E301.337\n"+
"G1 F240.0\n"+
"G1 E301.337\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y132.8 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E301.337\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X86.62 Y173.05 Z0.9 F1080.0 E316.265\n"+
"G1 F240.0\n"+
"G1 E316.265\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X85.11 Y172.65 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E316.265\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y130.89 Z0.9 F1080.0 E328.098\n"+
"G1 F240.0\n"+
"G1 E328.098\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y129.62 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E328.098\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.61 Y143.88 Z0.9 F1080.0 E112.045\n"+
"G1 F240.0\n"+
"G1 E112.045\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.91 Y141.67 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E112.045\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y128.34 Z0.9 F1080.0 E105.44\n"+
"G1 X126.87 Y127.71 Z0.9 F1080.0 E109.768\n"+
"G1 F240.0\n"+
"G1 E109.768\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y126.44 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E109.768\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.99 Y139.97 Z0.9 F1080.0 E107.744\n"+
"G1 X112.71 Y140.59 Z0.9 F1080.0 E111.5\n"+
"G1 F240.0\n"+
"G1 E111.5\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.15 Y139.25 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E111.5\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y125.16 Z0.9 F1080.0 E111.399\n"+
"G1 X126.87 Y124.53 Z0.9 F1080.0 E115.728\n"+
"G1 F240.0\n"+
"G1 E115.728\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y123.25 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E115.728\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.63 Y138.5 Z0.9 F1080.0 E119.784\n"+
"G1 X112.22 Y135.99 Z0.9 F1080.0 E134.096\n"+
"G1 X110.64 Y137.58 Z0.9 F1080.0 E146.572\n"+
"G1 X110.53 Y136.95 Z0.9 F1080.0 E150.131\n"+
"G1 X111.23 Y135.71 Z0.9 F1080.0 E158.027\n"+
"G1 X110.6 Y135.86 Z0.9 F1080.0 E161.618\n"+
"G1 X109.85 Y137.1 Z0.9 F1080.0 E169.667\n"+
"G1 X109.62 Y136.48 Z0.9 F1080.0 E173.305\n"+
"G1 X110.15 Y135.48 Z0.9 F1080.0 E179.602\n"+
"G1 X110.19 Y134.85 Z0.9 F1080.0 E183.142\n"+
"G1 X109.56 Y134.7 Z0.9 F1080.0 E186.722\n"+
"G1 X109.05 Y136.3 Z0.9 F1080.0 E196.018\n"+
"G1 X108.43 Y136.6 Z0.9 F1080.0 E199.847\n"+
"G1 F240.0\n"+
"G1 E199.847\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.26 Y136.5 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E199.847\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.75 Y134.02 Z0.9 F1080.0 E19.489\n"+
"G1 F240.0\n"+
"G1 E19.489\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.76 Y132.1 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E19.489\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.16 Y132.8 Z0.9 F1080.0 E5.14\n"+
"G1 X104.7 Y137.15 Z0.9 F1080.0 E39.764\n"+
"G1 F240.0\n"+
"G1 E39.764\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X102.41 Y139.45 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E39.764\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X85.76 Y156.46 Z0.9 F1080.0 E132.253\n"+
"G1 X85.14 Y156.71 Z0.9 F1080.0 E135.966\n"+
"G1 F240.0\n"+
"G1 E135.966\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X84.11 Y156.47 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E135.966\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y113.71 Z0.9 F1080.0 E335.939\n"+
"G1 F240.0\n"+
"G1 E335.939\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y114.98 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E335.939\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y115.62 Z0.9 F1080.0 E4.328\n"+
"G1 X111.56 Y130.29 Z0.9 F1080.0 E120.371\n"+
"G1 F240.0\n"+
"G1 E120.371\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.48 Y130.28 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E120.371\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y116.89 Z0.9 F1080.0 E105.221\n"+
"G1 F240.0\n"+
"G1 E105.221\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y118.16 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E105.221\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y118.8 Z0.9 F1080.0 E4.328\n"+
"G1 X114.95 Y130.69 Z0.9 F1080.0 E96.121\n"+
"G1 X114.31 Y130.72 Z0.9 F1080.0 E99.661\n"+
"G1 F240.0\n"+
"G1 E99.661\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y120.07 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E99.661\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y120.71 Z0.9 F1080.0 E4.333\n"+
"G1 X115.32 Y131.14 Z0.9 F1080.0 E88.947\n"+
"G1 X115.18 Y131.77 Z0.9 F1080.0 E92.538\n"+
"G1 X126.87 Y121.34 Z0.9 F1080.0 E179.582\n"+
"G1 X126.42 Y121.98 Z0.9 F1080.0 E183.91\n"+
"G1 X115.46 Y132.76 Z0.9 F1080.0 E269.34\n"+
"G1 F240.0\n"+
"G1 E269.34\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X123.37 Y139.49 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E269.34\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X89.13 Y173.73 Z0.9 F1080.0 E269.015\n"+
"G1 F240.0\n"+
"G1 E269.015\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X90.13 Y173.99 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E269.015\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X121.63 Y142.5 Z0.9 F1080.0 E247.46\n"+
"G1 F240.0\n"+
"G1 E247.46\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y147.01 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E247.46\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X93.95 Y172.09 Z0.9 F1080.0 E196.976\n"+
"G1 F240.0\n"+
"G1 E196.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X96.96 Y170.35 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E196.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.28 Y150.03 Z0.9 F1080.0 E159.657\n"+
"G1 F240.0\n"+
"G1 E159.657\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.67 Y154.54 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E159.657\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.48 Y167.74 Z0.9 F1080.0 E103.678\n"+
"G1 F240.0\n"+
"G1 E103.678\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.49 Y166.0 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E103.678\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.94 Y157.55 Z0.9 F1080.0 E66.358\n"+
"G1 F240.0\n"+
"G1 E66.358\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.33 Y162.07 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E66.358\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.01 Y163.39 Z0.9 F1080.0 E10.383\n"+
"G1 F240.0\n"+
"G1 E10.383\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X84.11 Y172.38 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E10.383\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.87 Y154.44 Z0.9 F1080.0 E140.233\n"+
"G1 X102.51 Y153.98 Z0.9 F1080.0 E144.618\n"+
"G1 F240.0\n"+
"G1 E144.618\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X82.6 Y171.98 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E144.618\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X83.22 Y171.68 Z0.9 F1080.0 E3.816\n"+
"G1 X100.87 Y153.71 Z0.9 F1080.0 E143.727\n"+
"G1 F240.0\n"+
"G1 E143.727\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X100.12 Y153.19 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E143.727\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X82.22 Y171.41 Z0.9 F1080.0 E141.883\n"+
"G1 X81.6 Y171.71 Z0.9 F1080.0 E145.697\n"+
"G1 F240.0\n"+
"G1 E145.697\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X79.09 Y171.04 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E145.697\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.71 Y170.74 Z0.9 F1080.0 E3.821\n"+
"G1 X81.98 Y167.88 Z0.9 F1080.0 E24.091\n"+
"G1 X82.6 Y167.52 Z0.9 F1080.0 E28.069\n"+
"G1 X80.09 Y171.31 Z0.9 F1080.0 E53.275\n"+
"G1 X80.71 Y171.01 Z0.9 F1080.0 E57.092\n"+
"G1 X83.84 Y167.56 Z0.9 F1080.0 E82.951\n"+
"G1 F240.0\n"+
"G1 E82.951\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.25 Y169.97 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E82.951\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X81.1 Y167.12 Z0.9 F1080.0 E22.392\n"+
"G1 F240.0\n"+
"G1 E22.392\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X80.28 Y166.67 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E22.392\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.64 Y166.77 Z0.9 F1080.0 E3.562\n"+
"G1 X77.94 Y168.53 Z0.9 F1080.0 E17.184\n"+
"G1 X77.78 Y169.16 Z0.9 F1080.0 E20.781\n"+
"G1 F240.0\n"+
"G1 E20.781\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.08 Y167.95 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E20.781\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.24 Y165.79 Z0.9 F1080.0 E16.939\n"+
"G1 F240.0\n"+
"G1 E16.939\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.05 Y163.8 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E16.939\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.8 Y164.42 Z0.9 F1080.0 E3.713\n"+
"G1 X76.08 Y165.3 Z0.9 F1080.0 E14.476\n"+
"G1 X75.92 Y165.93 Z0.9 F1080.0 E18.078\n"+
"G1 X78.68 Y165.08 Z0.9 F1080.0 E34.11\n"+
"G1 X76.78 Y166.51 Z0.9 F1080.0 E47.333\n"+
"G1 X76.62 Y167.14 Z0.9 F1080.0 E50.929\n"+
"G1 F240.0\n"+
"G1 E50.929\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.8 Y162.78 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.929\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.61 Y164.5 Z0.9 F1080.0 E15.49\n"+
"G1 X75.45 Y165.13 Z0.9 F1080.0 E19.087\n"+
"G1 F240.0\n"+
"G1 E19.087\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X79.84 Y157.9 Z0.9 F3000.0\n"+
"G1 X126.41 Y110.99 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E19.087\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X125.77 Y110.99 Z0.9 F1080.0 E3.533\n"+
"G1 X74.45 Y162.48 Z0.9 F1080.0 E407.418\n"+
"G1 X74.29 Y163.11 Z0.9 F1080.0 E411.018\n"+
"G1 X77.87 Y160.8 Z0.9 F1080.0 E434.666\n"+
"G1 X77.3 Y161.49 Z0.9 F1080.0 E439.6\n"+
"G1 X74.76 Y163.92 Z0.9 F1080.0 E459.154\n"+
"G1 F240.0\n"+
"G1 E459.154\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X125.45 Y110.04 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E459.154\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.59 Y161.9 Z0.9 F1080.0 E407.451\n"+
"G1 F240.0\n"+
"G1 E407.451\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X73.22 Y160.99 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E407.451\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X124.82 Y109.4 Z0.9 F1080.0 E405.353\n"+
"G1 F240.0\n"+
"G1 E405.353\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X95.17 Y137.14 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E405.353\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X123.86 Y108.45 Z0.9 F1080.0 E225.441\n"+
"G1 F240.0\n"+
"G1 E225.441\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X123.22 Y107.81 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E225.441\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.86 Y113.18 Z0.9 F1080.0 E42.171\n"+
"G1 F240.0\n"+
"G1 E42.171\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X118.17 Y110.95 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E42.171\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X122.27 Y106.86 Z0.9 F1080.0 E32.205\n"+
"G1 F240.0\n"+
"G1 E32.205\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X121.63 Y106.22 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E32.205\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X121.0 Y106.22 Z0.9 F1080.0 E3.533\n"+
"G1 X118.26 Y109.25 Z0.9 F1080.0 E26.236\n"+
"G1 X117.98 Y109.87 Z0.9 F1080.0 E29.995\n"+
"G1 F240.0\n"+
"G1 E29.995\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.42 Y108.52 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E29.995\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.68 Y105.26 Z0.9 F1080.0 E25.574\n"+
"G1 F240.0\n"+
"G1 E25.574\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.04 Y104.63 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E25.574\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.9 Y107.77 Z0.9 F1080.0 E24.678\n"+
"G1 F240.0\n"+
"G1 E24.678\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.92 Y106.85 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.678\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.55 Y106.76 Z0.9 F1080.0 E3.545\n"+
"G1 X119.09 Y104.31 Z0.9 F1080.0 E23.166\n"+
"G1 X119.09 Y103.67 Z0.9 F1080.0 E26.7\n"+
"G1 F240.0\n"+
"G1 E26.7\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y102.47 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.7\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.13 Y106.36 Z0.9 F1080.0 E30.575\n"+
"G1 F240.0\n"+
"G1 E30.575\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.72 Y105.86 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E30.575\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.34 Y105.56 Z0.9 F1080.0 E3.824\n"+
"G1 X118.57 Y101.19 Z0.9 F1080.0 E37.584\n"+
"G1 X119.02 Y100.56 Z0.9 F1080.0 E41.917\n"+
"G1 F240.0\n"+
"G1 E41.917\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y102.69 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E41.917\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y102.06 Z0.9 F1080.0 E4.325\n"+
"G1 X118.57 Y99.92 Z0.9 F1080.0 E22.643\n"+
"G1 X119.02 Y99.28 Z0.9 F1080.0 E26.976\n"+
"G1 X115.61 Y100.79 Z0.9 F1080.0 E47.675\n"+
"G1 X118.57 Y98.01 Z0.9 F1080.0 E70.208\n"+
"G1 X119.02 Y97.38 Z0.9 F1080.0 E74.541\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y99.51 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y98.88 Z0.9 F1080.0 E4.325\n"+
"G1 X118.57 Y96.74 Z0.9 F1080.0 E22.643\n"+
"G1 X119.02 Y96.1 Z0.9 F1080.0 E26.976\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y94.19 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.57 Y94.83 Z0.9 F1080.0 E4.333\n"+
"G1 X115.61 Y97.6 Z0.9 F1080.0 E26.866\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y96.33 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y95.69 Z0.9 F1080.0 E4.325\n"+
"G1 X118.57 Y93.56 Z0.9 F1080.0 E22.643\n"+
"G1 X119.02 Y92.92 Z0.9 F1080.0 E26.976\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y91.01 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.57 Y91.65 Z0.9 F1080.0 E4.333\n"+
"G1 X115.61 Y94.42 Z0.9 F1080.0 E26.866\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y93.15 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y92.51 Z0.9 F1080.0 E4.325\n"+
"G1 X118.57 Y90.38 Z0.9 F1080.0 E22.643\n"+
"G1 X119.02 Y89.74 Z0.9 F1080.0 E26.976\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.48 Y88.28 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.52 Y88.24 Z0.9 F1080.0 E0.354\n"+
"G1 F240.0\n"+
"G1 E0.354\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.52 Y86.33 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E0.354\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.07 Y86.97 Z0.9 F1080.0 E4.333\n"+
"G1 X115.61 Y91.24 Z0.9 F1080.0 E38.647\n"+
"G1 F240.0\n"+
"G1 E38.647\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y89.97 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E38.647\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.7 Y85.87 Z0.9 F1080.0 E32.154\n"+
"G1 F240.0\n"+
"G1 E32.154\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.24 Y88.5 Z0.9 F3000.0\n"+
"G1 X105.61 Y93.6 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E32.154\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.06 Y92.97 Z0.9 F1080.0 E4.325\n"+
"G1 X108.57 Y90.83 Z0.9 F1080.0 E22.643\n"+
"G1 X109.02 Y90.19 Z0.9 F1080.0 E26.976\n"+
"G1 X105.61 Y91.69 Z0.9 F1080.0 E47.675\n"+
"G1 X108.57 Y88.92 Z0.9 F1080.0 E70.208\n"+
"G1 X109.02 Y88.28 Z0.9 F1080.0 E74.541\n"+
"G1 X109.66 Y87.83 Z0.9 F1080.0 E78.874\n"+
"G1 X110.8 Y86.32 Z0.9 F1080.0 E89.375\n"+
"G1 X111.43 Y85.87 Z0.9 F1080.0 E93.703\n"+
"G1 X110.93 Y88.28 Z0.9 F1080.0 E107.379\n"+
"G1 X111.57 Y87.83 Z0.9 F1080.0 E111.712\n"+
"G1 X112.7 Y86.32 Z0.9 F1080.0 E122.213\n"+
"G1 X113.34 Y85.87 Z0.9 F1080.0 E126.546\n"+
"G1 X112.2 Y88.28 Z0.9 F1080.0 E141.35\n"+
"G1 X112.84 Y87.83 Z0.9 F1080.0 E145.683\n"+
"G1 X114.61 Y85.87 Z0.9 F1080.0 E160.366\n"+
"G1 X114.11 Y88.28 Z0.9 F1080.0 E174.041\n"+
"G1 X114.75 Y87.83 Z0.9 F1080.0 E178.374\n"+
"G1 X115.89 Y86.32 Z0.9 F1080.0 E188.875\n"+
"G1 X116.52 Y85.87 Z0.9 F1080.0 E193.204\n"+
"G1 X115.39 Y88.28 Z0.9 F1080.0 E208.008\n"+
"G1 X117.8 Y85.87 Z0.9 F1080.0 E226.943\n"+
"G1 F240.0\n"+
"G1 E226.943\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.16 Y85.87 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E226.943\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y90.42 Z0.9 F1080.0 E35.725\n"+
"G1 F240.0\n"+
"G1 E35.725\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y88.51 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E35.725\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.25 Y85.87 Z0.9 F1080.0 E20.726\n"+
"G1 F240.0\n"+
"G1 E20.726\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X106.98 Y85.87 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E20.726\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.57 Y88.28 Z0.9 F1080.0 E18.935\n"+
"G1 X105.07 Y85.87 Z0.9 F1080.0 E32.609\n"+
"G1 X104.11 Y86.83 Z0.9 F1080.0 E40.116\n"+
"G1 F240.0\n"+
"G1 E40.116\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.11 Y86.19 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E40.116\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.43 Y85.87 Z0.9 F1080.0 E2.514\n"+
"G1 F240.0\n"+
"G1 E2.514\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.39 Y89.43 Z0.9 F3000.0\n"+
"G1 X105.61 Y96.78 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E2.514\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.06 Y96.15 Z0.9 F1080.0 E4.325\n"+
"G1 X108.57 Y94.01 Z0.9 F1080.0 E22.643\n"+
"G1 X109.02 Y93.37 Z0.9 F1080.0 E26.976\n"+
"G1 X105.61 Y94.88 Z0.9 F1080.0 E47.675\n"+
"G1 X108.57 Y92.1 Z0.9 F1080.0 E70.208\n"+
"G1 X109.02 Y91.47 Z0.9 F1080.0 E74.541\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y99.97 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.06 Y99.33 Z0.9 F1080.0 E4.325\n"+
"G1 X108.57 Y97.19 Z0.9 F1080.0 E22.643\n"+
"G1 X109.02 Y96.56 Z0.9 F1080.0 E26.976\n"+
"G1 X105.61 Y98.06 Z0.9 F1080.0 E47.675\n"+
"G1 X108.57 Y95.28 Z0.9 F1080.0 E70.208\n"+
"G1 X109.02 Y94.65 Z0.9 F1080.0 E74.541\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y103.15 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.06 Y102.51 Z0.9 F1080.0 E4.325\n"+
"G1 X108.57 Y100.38 Z0.9 F1080.0 E22.643\n"+
"G1 X109.02 Y99.74 Z0.9 F1080.0 E26.976\n"+
"G1 X105.61 Y101.24 Z0.9 F1080.0 E47.675\n"+
"G1 X108.57 Y98.47 Z0.9 F1080.0 E70.208\n"+
"G1 X109.02 Y97.83 Z0.9 F1080.0 E74.541\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.39 Y104.2 Z0.9 F3000.0\n"+
"G1 X98.31 Y111.72 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.57 Y101.65 Z0.9 F1080.0 E79.887\n"+
"G1 X109.02 Y101.01 Z0.9 F1080.0 E84.22\n"+
"G1 F240.0\n"+
"G1 E84.22\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.07 Y102.87 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E84.22\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y113.0 Z0.9 F1080.0 E80.26\n"+
"G1 X98.31 Y113.63 Z0.9 F1080.0 E84.588\n"+
"G1 F240.0\n"+
"G1 E84.588\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y114.9 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E84.588\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.34 Y102.87 Z0.9 F1080.0 E94.521\n"+
"G1 F240.0\n"+
"G1 E94.521\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.25 Y102.87 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E94.521\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y116.81 Z0.9 F1080.0 E109.523\n"+
"G1 F240.0\n"+
"G1 E109.523\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y118.09 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E109.523\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.63 Y108.76 Z0.9 F1080.0 E73.248\n"+
"G1 F240.0\n"+
"G1 E73.248\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.01 Y111.3 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E73.248\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y119.36 Z0.9 F1080.0 E64.088\n"+
"G1 X98.31 Y120.0 Z0.9 F1080.0 E68.421\n"+
"G1 F240.0\n"+
"G1 E68.421\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y121.27 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E68.421\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.82 Y113.08 Z0.9 F1080.0 E65.616\n"+
"G1 X107.12 Y112.46 Z0.9 F1080.0 E69.44\n"+
"G1 F240.0\n"+
"G1 E69.44\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.62 Y113.87 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E69.44\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y122.54 Z0.9 F1080.0 E68.888\n"+
"G1 X98.31 Y123.18 Z0.9 F1080.0 E73.216\n"+
"G1 F240.0\n"+
"G1 E73.216\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y124.45 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E73.216\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.03 Y115.29 Z0.9 F1080.0 E74.203\n"+
"G1 X108.11 Y114.65 Z0.9 F1080.0 E77.754\n"+
"G1 F240.0\n"+
"G1 E77.754\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.03 Y115.64 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E77.754\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.4 Y115.66 Z0.9 F1080.0 E3.535\n"+
"G1 X98.76 Y125.72 Z0.9 F1080.0 E80.939\n"+
"G1 X98.31 Y126.36 Z0.9 F1080.0 E85.262\n"+
"G1 F240.0\n"+
"G1 E85.262\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y127.63 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E85.262\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.78 Y116.16 Z0.9 F1080.0 E90.133\n"+
"G1 F240.0\n"+
"G1 E90.133\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X111.13 Y116.72 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E90.133\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.51 Y116.99 Z0.9 F1080.0 E3.758\n"+
"G1 X98.76 Y128.91 Z0.9 F1080.0 E96.722\n"+
"G1 X98.31 Y129.54 Z0.9 F1080.0 E101.05\n"+
"G1 F240.0\n"+
"G1 E101.05\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y130.81 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E101.05\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.22 Y116.91 Z0.9 F1080.0 E109.264\n"+
"G1 F240.0\n"+
"G1 E109.264\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.44 Y116.59 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E109.264\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X96.96 Y134.07 Z0.9 F1080.0 E137.34\n"+
"G1 F240.0\n"+
"G1 E137.34\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X86.42 Y157.34 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E137.34\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.75 Y142.01 Z0.9 F1080.0 E120.42\n"+
"G1 F240.0\n"+
"G1 E120.42\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.85 Y143.18 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E120.42\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.55 Y143.8 Z0.9 F1080.0 E3.829\n"+
"G1 X87.13 Y157.9 Z0.9 F1080.0 E115.877\n"+
"G1 F240.0\n"+
"G1 E115.877\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.01 Y158.94 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E115.877\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.1 Y158.3 Z0.9 F1080.0 E3.562\n"+
"G1 X102.35 Y144.6 Z0.9 F1080.0 E113.389\n"+
"G1 F240.0\n"+
"G1 E113.389\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.85 Y147.46 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E113.389\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.23 Y147.73 Z0.9 F1080.0 E3.756\n"+
"G1 X104.91 Y149.1 Z0.9 F1080.0 E11.561\n"+
"G1 X104.27 Y149.04 Z0.9 F1080.0 E15.103\n"+
"G1 X104.24 Y148.4 Z0.9 F1080.0 E18.642\n"+
"G1 X104.72 Y147.51 Z0.9 F1080.0 E24.232\n"+
"G1 X104.5 Y146.9 Z0.9 F1080.0 E27.862\n"+
"G1 X103.73 Y148.07 Z0.9 F1080.0 E35.646\n"+
"G1 X103.11 Y148.29 Z0.9 F1080.0 E39.311\n"+
"G1 X103.85 Y147.01 Z0.9 F1080.0 E47.55\n"+
"G1 X103.75 Y146.37 Z0.9 F1080.0 E51.102\n"+
"G1 X102.0 Y148.13 Z0.9 F1080.0 E64.867\n"+
"G1 X102.83 Y145.38 Z0.9 F1080.0 E80.795\n"+
"G1 X88.46 Y159.76 Z0.9 F1080.0 E193.751\n"+
"G1 F240.0\n"+
"G1 E193.751\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.9 Y162.5 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E193.751\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.15 Y152.65 Z0.9 F1080.0 E78.984\n"+
"G1 X99.37 Y152.03 Z0.9 F1080.0 E82.649\n"+
"G1 X88.86 Y161.26 Z0.9 F1080.0 E160.352\n"+
"G1 X89.22 Y160.64 Z0.9 F1080.0 E164.33\n"+
"G1 X99.21 Y150.92 Z0.9 F1080.0 E241.765\n"+
"G1 F240.0\n"+
"G1 E241.765\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.1 Y148.54 Z0.9 F3000.0\n"+
"G1 X101.93 Y148.35 Z0.9 F3000.0\n"+
"G1 X102.78 Y148.41 Z0.9 F3000.0\n"+
"G1 X104.79 Y149.79 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E241.765\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.92 Y147.66 Z0.9 F1080.0 E16.743\n"+
"G1 F240.0\n"+
"G1 E16.743\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.13 Y147.36 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E16.743\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.52 Y150.79 Z0.9 F1080.0 E27.641\n"+
"G1 X105.06 Y151.43 Z0.9 F1080.0 E32.026\n"+
"G1 F240.0\n"+
"G1 E32.026\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.57 Y148.74 Z0.9 F3000.0\n"+
"G1 X91.06 Y141.24 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E32.026\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.97 Y158.34 Z0.9 F1080.0 E134.295\n"+
"G1 F240.0\n"+
"G1 E134.295\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X74.47 Y156.56 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E134.295\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.05 Y142.98 Z0.9 F1080.0 E106.718\n"+
"G1 F240.0\n"+
"G1 E106.718\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X83.54 Y145.59 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E106.718\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.22 Y153.91 Z0.9 F1080.0 E65.352\n"+
"G1 F240.0\n"+
"G1 E65.352\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X75.72 Y152.14 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E65.352\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X80.52 Y147.33 Z0.9 F1080.0 E37.783\n"+
"G1 F240.0\n"+
"G1 E37.783\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.51 Y149.07 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E37.783\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X76.21 Y150.36 Z0.9 F1080.0 E10.206\n"+
"G1 F240.0\n"+
"G1 E10.206\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X82.14 Y156.53 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E10.206\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y112.43 Z0.9 F1080.0 E347.174\n"+
"G1 X126.87 Y111.8 Z0.9 F1080.0 E351.503\n"+
"G1 F240.0\n"+
"G1 E351.503\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.43 Y102.87 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E351.503\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.8 Y103.32 Z0.9 F1080.0 E4.328\n"+
"G1 X112.56 Y105.75 Z0.9 F1080.0 E22.657\n"+
"G1 F240.0\n"+
"G1 E22.657\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.03 Y106.37 Z0.9 F3000.0\n"+
"G1 F240.0\n"+
"G1 E22.657\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.52 Y102.87 Z0.9 F1080.0 E27.475\n"+
"G1 F240.0\n"+
"G1 E27.475\n"+
"G1 F1080.0\n"+
";\n"+
"(</surroundingLoop>)\n"+
"G1 F30.0\n"+
"(<layer> 1.2 )\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X93.055 Y139.175 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y131.549 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y111.258 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y103.957 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y89.078 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y89.078 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y85.078 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y85.078 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y89.078 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y89.078 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y103.277 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y111.128 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y133.629 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.426 Y163.491 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X90.593 Y174.941 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.302 Y171.647 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X72.316 Y161.279 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X75.721 Y149.182 Z1.2 </boundaryPoint>)\n"+
"(<perimeter> outer )\n"+
"M108 S110.0\n"+
"M108 S110.0\n"+
"G1 X113.52 Y102.87 Z1.2 F30.0\n"+
"G91\n"+
"G1 F20\n"+
"G1 F1500\n"+
"G1 X-0.3 Y-0.3 F1500\n"+
"G90\n"+
"G4 P3000\n"+
"G92 X0;set x 0\n"+
"G1 X-1.0 F3000.0 \n"+
"G1 X-500.0  F3200.0 ;horizontal move\n"+
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
"G1 X113.52 Y102.87 Z1.2 F3000.0\n"+
"G1 X119.1 Y102.64 Z1.2 F3000.0\n"+
"G1 X119.58 Y102.62 Z1.2 F606.554\n"+
"G1 F240.0\n"+
"G1 E27.475\n"+
"G1 F606.554\n"+
"G92 E0\n"+
";\n"+
"G1 X119.58 Y103.38 Z1.2 F540.0 E9.191\n"+
"G1 X127.43 Y111.23 Z1.2 F540.0 E144.894\n"+
"G1 X127.43 Y133.57 Z1.2 F540.0 E417.914\n"+
"G1 X110.25 Y163.32 Z1.2 F540.0 E837.781\n"+
"G1 X90.56 Y174.68 Z1.2 F540.0 E1115.677\n"+
"G1 X78.46 Y171.44 Z1.2 F540.0 E1268.767\n"+
"G1 X72.57 Y161.25 Z1.2 F540.0 E1412.649\n"+
"G1 X75.93 Y149.34 Z1.2 F540.0 E1563.824\n"+
"G1 X93.23 Y139.35 Z1.2 F540.0 E1808.032\n"+
"G1 X97.76 Y131.61 Z1.2 F540.0 E1917.581\n"+
"G1 X97.76 Y111.36 Z1.2 F540.0 E2165.167\n"+
"G1 X105.06 Y104.06 Z1.2 F540.0 E2291.363\n"+
"G1 X105.06 Y88.84 Z1.2 F540.0 E2477.361\n"+
"G1 X103.56 Y88.84 Z1.2 F540.0 E2495.694\n"+
"G1 X103.56 Y85.32 Z1.2 F540.0 E2538.717\n"+
"G1 X121.08 Y85.32 Z1.2 F540.0 E2752.85\n"+
"G1 X121.08 Y88.84 Z1.2 F540.0 E2795.872\n"+
"G1 X119.58 Y88.84 Z1.2 F540.0 E2814.205\n"+
"G1 X119.58 Y102.34 Z1.2 F540.0 E2979.181\n"+
"G1 F240.0\n"+
"G1 E2979.181\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X114.816 Y89.078 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y89.078 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y102.078 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.816 Y102.078 Z1.2 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X115.06 Y102.17 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E2979.181\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.06 Y88.84 Z1.2 F540.0 E162.996\n"+
"G1 X109.58 Y88.84 Z1.2 F540.0 E229.973\n"+
"G1 X109.58 Y102.32 Z1.2 F540.0 E394.729\n"+
"G1 X114.91 Y102.32 Z1.2 F540.0 E459.947\n"+
"G1 F240.0\n"+
"G1 E459.947\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X107.804 Y111.704 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.923 Y112.448 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.155 Y113.164 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.497 Y113.835 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.94 Y114.444 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.473 Y114.977 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.082 Y115.42 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.753 Y115.762 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.469 Y115.994 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.213 Y116.112 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.967 Y116.112 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.711 Y115.994 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.427 Y115.762 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.098 Y115.42 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.707 Y114.977 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.239 Y114.444 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.683 Y113.835 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.025 Y113.164 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y112.448 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y111.704 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y110.95 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y110.206 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.025 Y109.49 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.683 Y108.819 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.239 Y108.21 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.707 Y107.677 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.098 Y107.234 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.427 Y106.892 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.711 Y106.66 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.967 Y106.542 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.213 Y106.542 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.469 Y106.66 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.753 Y106.892 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.082 Y107.234 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.473 Y107.677 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.94 Y108.21 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.497 Y108.819 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.155 Y109.49 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.923 Y110.206 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.804 Y110.95 Z1.2 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X113.63 Y106.4 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E459.947\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.99 Y106.3 Z1.2 F540.0 E7.907\n"+
"G1 X112.19 Y106.3 Z1.2 F540.0 E17.587\n"+
"G1 X111.41 Y106.43 Z1.2 F540.0 E27.252\n"+
"G1 X110.66 Y106.67 Z1.2 F540.0 E36.915\n"+
"G1 X109.96 Y107.03 Z1.2 F540.0 E46.584\n"+
"G1 X109.32 Y107.49 Z1.2 F540.0 E56.253\n"+
"G1 X108.76 Y108.05 Z1.2 F540.0 E65.924\n"+
"G1 X108.29 Y108.69 Z1.2 F540.0 E75.583\n"+
"G1 X107.93 Y109.4 Z1.2 F540.0 E85.253\n"+
"G1 X107.69 Y110.15 Z1.2 F540.0 E94.916\n"+
"G1 X107.57 Y110.93 Z1.2 F540.0 E104.581\n"+
"G1 X107.57 Y111.72 Z1.2 F540.0 E114.261\n"+
"G1 X107.69 Y112.5 Z1.2 F540.0 E123.926\n"+
"G1 X107.93 Y113.26 Z1.2 F540.0 E133.589\n"+
"G1 X108.29 Y113.96 Z1.2 F540.0 E143.258\n"+
"G1 X108.76 Y114.6 Z1.2 F540.0 E152.917\n"+
"G1 X109.32 Y115.16 Z1.2 F540.0 E162.588\n"+
"G1 X109.96 Y115.63 Z1.2 F540.0 E172.257\n"+
"G1 X110.66 Y115.98 Z1.2 F540.0 E181.926\n"+
"G1 X111.41 Y116.23 Z1.2 F540.0 E191.589\n"+
"G1 X112.19 Y116.35 Z1.2 F540.0 E201.254\n"+
"G1 X112.99 Y116.35 Z1.2 F540.0 E210.934\n"+
"G1 X113.77 Y116.23 Z1.2 F540.0 E220.599\n"+
"G1 X114.52 Y115.98 Z1.2 F540.0 E230.262\n"+
"G1 X115.22 Y115.63 Z1.2 F540.0 E239.932\n"+
"G1 X115.86 Y115.16 Z1.2 F540.0 E249.591\n"+
"G1 X116.42 Y114.6 Z1.2 F540.0 E259.27\n"+
"G1 X116.89 Y113.96 Z1.2 F540.0 E268.929\n"+
"G1 X117.25 Y113.26 Z1.2 F540.0 E278.599\n"+
"G1 X117.49 Y112.5 Z1.2 F540.0 E288.262\n"+
"G1 X117.61 Y111.72 Z1.2 F540.0 E297.925\n"+
"G1 X117.61 Y110.93 Z1.2 F540.0 E307.605\n"+
"G1 X117.49 Y110.15 Z1.2 F540.0 E317.268\n"+
"G1 X117.25 Y109.4 Z1.2 F540.0 E326.931\n"+
"G1 X116.89 Y108.69 Z1.2 F540.0 E336.6\n"+
"G1 X116.42 Y108.05 Z1.2 F540.0 E346.259\n"+
"G1 X115.86 Y107.49 Z1.2 F540.0 E355.939\n"+
"G1 X115.22 Y107.03 Z1.2 F540.0 E365.598\n"+
"G1 X114.52 Y106.67 Z1.2 F540.0 E375.267\n"+
"G1 X113.9 Y106.47 Z1.2 F540.0 E383.172\n"+
"G1 F240.0\n"+
"G1 E383.172\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X111.269 Y134.809 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y134.986 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y135.115 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y135.194 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y135.22 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y135.194 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y135.115 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y134.986 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y134.809 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y134.59 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y134.334 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y134.046 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y133.734 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y133.406 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.683 Y133.07 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y132.734 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y132.406 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y132.094 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y131.806 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y131.55 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y131.331 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y131.154 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y131.024 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y130.946 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y130.92 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y130.946 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y131.024 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y131.154 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.269 Y131.331 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y131.55 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y131.806 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y132.094 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y132.406 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y132.734 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.383 Y133.07 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y133.406 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y133.734 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y134.046 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y134.334 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y134.59 Z1.2 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X116.08 Y107.24 Z1.2 F3000.0\n"+
"G1 X116.68 Y107.84 Z1.2 F3000.0\n"+
"G1 X117.18 Y108.52 Z1.2 F3000.0\n"+
"G1 X117.56 Y109.27 Z1.2 F3000.0\n"+
"G1 X117.82 Y110.07 Z1.2 F3000.0\n"+
"G1 X117.95 Y110.91 Z1.2 F3000.0\n"+
"G1 X112.39 Y130.69 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.172\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.8 Y130.8 Z1.2 F540.0 E7.375\n"+
"G1 X111.13 Y131.14 Z1.2 F540.0 E16.536\n"+
"G1 X110.6 Y131.66 Z1.2 F540.0 E25.662\n"+
"G1 X110.26 Y132.33 Z1.2 F540.0 E34.823\n"+
"G1 X110.17 Y132.7 Z1.2 F540.0 E39.4\n"+
"G1 X110.17 Y133.44 Z1.2 F540.0 E48.543\n"+
"G1 X110.26 Y133.81 Z1.2 F540.0 E53.12\n"+
"G1 X110.6 Y134.48 Z1.2 F540.0 E62.281\n"+
"G1 X111.13 Y135.0 Z1.2 F540.0 E71.407\n"+
"G1 X111.45 Y135.2 Z1.2 F540.0 E75.994\n"+
"G1 X112.16 Y135.43 Z1.2 F540.0 E85.146\n"+
"G1 X112.91 Y135.43 Z1.2 F540.0 E94.288\n"+
"G1 X113.27 Y135.34 Z1.2 F540.0 E98.866\n"+
"G1 X113.94 Y135.0 Z1.2 F540.0 E108.027\n"+
"G1 X114.47 Y134.48 Z1.2 F540.0 E117.153\n"+
"G1 X114.81 Y133.81 Z1.2 F540.0 E126.314\n"+
"G1 X114.9 Y133.44 Z1.2 F540.0 E130.891\n"+
"G1 X114.9 Y132.7 Z1.2 F540.0 E140.034\n"+
"G1 X114.81 Y132.33 Z1.2 F540.0 E144.611\n"+
"G1 X114.47 Y131.66 Z1.2 F540.0 E153.772\n"+
"G1 X113.94 Y131.14 Z1.2 F540.0 E162.898\n"+
"G1 X113.27 Y130.8 Z1.2 F540.0 E172.059\n"+
"G1 X112.68 Y130.69 Z1.2 F540.0 E179.434\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X103.236 Y144.585 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y145.194 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y145.727 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y146.17 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y146.512 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y146.743 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y146.862 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y146.862 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y146.743 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y146.512 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y146.17 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y145.727 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y145.194 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y144.585 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y143.914 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y143.198 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y142.454 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y141.7 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y140.956 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y140.24 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y139.569 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y138.96 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y138.427 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y137.984 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y137.642 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y137.41 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y137.291 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y137.291 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y137.41 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y137.642 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y137.984 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y138.427 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y138.96 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.236 Y139.569 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y140.24 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y140.956 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y141.7 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y142.454 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y143.198 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y143.914 Z1.2 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X110.93 Y130.86 Z1.2 F3000.0\n"+
"G1 X110.33 Y131.47 Z1.2 F3000.0\n"+
"G1 X109.12 Y137.38 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.51 Y137.18 Z1.2 F540.0 E7.904\n"+
"G1 X107.73 Y137.05 Z1.2 F540.0 E17.569\n"+
"G1 X106.93 Y137.05 Z1.2 F540.0 E27.249\n"+
"G1 X106.15 Y137.18 Z1.2 F540.0 E36.914\n"+
"G1 X105.4 Y137.42 Z1.2 F540.0 E46.577\n"+
"G1 X104.7 Y137.78 Z1.2 F540.0 E56.247\n"+
"G1 X104.06 Y138.24 Z1.2 F540.0 E65.899\n"+
"G1 X103.5 Y138.8 Z1.2 F540.0 E75.587\n"+
"G1 X103.03 Y139.44 Z1.2 F540.0 E85.246\n"+
"G1 X102.67 Y140.15 Z1.2 F540.0 E94.915\n"+
"G1 X102.43 Y140.9 Z1.2 F540.0 E104.578\n"+
"G1 X102.3 Y141.68 Z1.2 F540.0 E114.243\n"+
"G1 X102.3 Y142.47 Z1.2 F540.0 E123.923\n"+
"G1 X102.43 Y143.25 Z1.2 F540.0 E133.588\n"+
"G1 X102.67 Y144.01 Z1.2 F540.0 E143.239\n"+
"G1 X103.03 Y144.71 Z1.2 F540.0 E152.92\n"+
"G1 X103.5 Y145.35 Z1.2 F540.0 E162.579\n"+
"G1 X104.06 Y145.91 Z1.2 F540.0 E172.258\n"+
"G1 X104.7 Y146.38 Z1.2 F540.0 E181.917\n"+
"G1 X105.4 Y146.73 Z1.2 F540.0 E191.587\n"+
"G1 X106.15 Y146.98 Z1.2 F540.0 E201.25\n"+
"G1 X106.93 Y147.1 Z1.2 F540.0 E210.915\n"+
"G1 X107.73 Y147.1 Z1.2 F540.0 E220.595\n"+
"G1 X108.51 Y146.98 Z1.2 F540.0 E230.26\n"+
"G1 X109.26 Y146.73 Z1.2 F540.0 E239.923\n"+
"G1 X109.96 Y146.38 Z1.2 F540.0 E249.592\n"+
"G1 X110.6 Y145.91 Z1.2 F540.0 E259.251\n"+
"G1 X111.16 Y145.35 Z1.2 F540.0 E268.922\n"+
"G1 X111.63 Y144.71 Z1.2 F540.0 E278.588\n"+
"G1 X111.99 Y144.01 Z1.2 F540.0 E288.269\n"+
"G1 X112.23 Y143.25 Z1.2 F540.0 E297.92\n"+
"G1 X112.35 Y142.47 Z1.2 F540.0 E307.585\n"+
"G1 X112.35 Y141.68 Z1.2 F540.0 E317.265\n"+
"G1 X112.23 Y140.9 Z1.2 F540.0 E326.93\n"+
"G1 X111.99 Y140.15 Z1.2 F540.0 E336.593\n"+
"G1 X111.63 Y139.44 Z1.2 F540.0 E346.263\n"+
"G1 X111.16 Y138.8 Z1.2 F540.0 E355.929\n"+
"G1 X110.6 Y138.24 Z1.2 F540.0 E365.608\n"+
"G1 X109.96 Y137.78 Z1.2 F540.0 E375.26\n"+
"G1 X109.39 Y137.49 Z1.2 F540.0 E383.175\n"+
"G1 F240.0\n"+
"G1 E383.175\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X100.159 Y151.887 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.312 Y152.187 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.51 Y152.46 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.749 Y152.699 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.022 Y152.897 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.322 Y153.05 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.643 Y153.154 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.976 Y153.207 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.314 Y153.207 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.647 Y153.154 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.968 Y153.05 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.268 Y152.897 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.541 Y152.699 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.78 Y152.46 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y152.187 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y151.887 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.236 Y151.566 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y151.233 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y150.895 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.236 Y150.562 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y150.241 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y149.941 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.78 Y149.668 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.541 Y149.429 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.268 Y149.231 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.968 Y149.078 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.647 Y148.973 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.314 Y148.921 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.976 Y148.921 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.643 Y148.973 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.322 Y149.078 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.022 Y149.231 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.749 Y149.429 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.51 Y149.668 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.312 Y149.941 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.159 Y150.241 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y150.562 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y150.895 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y151.233 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y151.566 Z1.2 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X106.91 Y136.72 Z1.2 F3000.0\n"+
"G1 X106.07 Y136.85 Z1.2 F3000.0\n"+
"G1 X105.27 Y137.11 Z1.2 F3000.0\n"+
"G1 X104.52 Y137.49 Z1.2 F3000.0\n"+
"G1 X103.84 Y137.99 Z1.2 F3000.0\n"+
"G1 X103.24 Y138.59 Z1.2 F3000.0\n"+
"G1 X102.74 Y139.27 Z1.2 F3000.0\n"+
"G1 X102.36 Y140.02 Z1.2 F3000.0\n"+
"G1 X102.1 Y140.82 Z1.2 F3000.0\n"+
"G1 X101.97 Y141.66 Z1.2 F3000.0\n"+
"G1 X103.27 Y148.96 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.175\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.7 Y148.74 Z1.2 F540.0 E7.397\n"+
"G1 X101.96 Y148.68 Z1.2 F540.0 E16.542\n"+
"G1 X101.59 Y148.74 Z1.2 F540.0 E21.119\n"+
"G1 X100.9 Y149.03 Z1.2 F540.0 E30.265\n"+
"G1 X100.33 Y149.51 Z1.2 F540.0 E39.41\n"+
"G1 X100.11 Y149.82 Z1.2 F540.0 E43.987\n"+
"G1 X99.82 Y150.51 Z1.2 F540.0 E53.121\n"+
"G1 X99.76 Y151.25 Z1.2 F540.0 E62.278\n"+
"G1 X99.82 Y151.62 Z1.2 F540.0 E66.856\n"+
"G1 X100.11 Y152.31 Z1.2 F540.0 E76.001\n"+
"G1 X100.33 Y152.62 Z1.2 F540.0 E80.577\n"+
"G1 X100.9 Y153.1 Z1.2 F540.0 E89.723\n"+
"G1 X101.59 Y153.39 Z1.2 F540.0 E98.868\n"+
"G1 X102.33 Y153.45 Z1.2 F540.0 E108.014\n"+
"G1 X102.7 Y153.39 Z1.2 F540.0 E112.591\n"+
"G1 X103.39 Y153.1 Z1.2 F540.0 E121.736\n"+
"G1 X103.96 Y152.62 Z1.2 F540.0 E130.882\n"+
"G1 X104.18 Y152.31 Z1.2 F540.0 E135.459\n"+
"G1 X104.47 Y151.62 Z1.2 F540.0 E144.604\n"+
"G1 X104.53 Y150.88 Z1.2 F540.0 E153.749\n"+
"G1 X104.47 Y150.51 Z1.2 F540.0 E158.338\n"+
"G1 X104.18 Y149.82 Z1.2 F540.0 E167.472\n"+
"G1 X103.96 Y149.51 Z1.2 F540.0 E172.049\n"+
"G1 X103.51 Y149.11 Z1.2 F540.0 E179.434\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X78.894 Y163.827 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.236 Y164.498 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.679 Y165.107 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.212 Y165.64 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.821 Y166.082 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.492 Y166.425 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.208 Y166.657 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.952 Y166.775 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.706 Y166.775 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.45 Y166.657 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.166 Y166.425 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.837 Y166.082 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.446 Y165.64 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.979 Y165.107 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.422 Y164.498 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.764 Y163.827 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y163.111 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y162.367 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y161.613 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y160.868 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.764 Y160.153 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.422 Y159.482 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.979 Y158.873 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.446 Y158.34 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.837 Y157.897 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.166 Y157.555 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.45 Y157.323 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.706 Y157.205 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.952 Y157.205 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.208 Y157.323 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.492 Y157.555 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.821 Y157.897 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.212 Y158.34 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.679 Y158.873 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.236 Y159.482 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.894 Y160.153 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.662 Y160.868 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y161.613 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y162.367 Z1.2 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.662 Y163.111 Z1.2 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X101.93 Y148.35 Z1.2 F3000.0\n"+
"G1 X101.1 Y148.54 Z1.2 F3000.0\n"+
"G1 X87.54 Y159.24 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.16 Y158.72 Z1.2 F540.0 E7.901\n"+
"G1 X86.6 Y158.16 Z1.2 F540.0 E17.581\n"+
"G1 X85.96 Y157.69 Z1.2 F540.0 E27.24\n"+
"G1 X85.26 Y157.33 Z1.2 F540.0 E36.909\n"+
"G1 X84.51 Y157.09 Z1.2 F540.0 E46.572\n"+
"G1 X83.73 Y156.97 Z1.2 F540.0 E56.237\n"+
"G1 X82.93 Y156.97 Z1.2 F540.0 E65.917\n"+
"G1 X82.15 Y157.09 Z1.2 F540.0 E75.582\n"+
"G1 X81.4 Y157.33 Z1.2 F540.0 E85.245\n"+
"G1 X80.69 Y157.69 Z1.2 F540.0 E94.915\n"+
"G1 X80.06 Y158.16 Z1.2 F540.0 E104.574\n"+
"G1 X79.5 Y158.72 Z1.2 F540.0 E114.253\n"+
"G1 X79.03 Y159.36 Z1.2 F540.0 E123.912\n"+
"G1 X78.67 Y160.06 Z1.2 F540.0 E133.582\n"+
"G1 X78.43 Y160.81 Z1.2 F540.0 E143.245\n"+
"G1 X78.3 Y161.59 Z1.2 F540.0 E152.91\n"+
"G1 X78.3 Y162.39 Z1.2 F540.0 E162.59\n"+
"G1 X78.43 Y163.17 Z1.2 F540.0 E172.243\n"+
"G1 X78.67 Y163.92 Z1.2 F540.0 E181.917\n"+
"G1 X79.03 Y164.62 Z1.2 F540.0 E191.587\n"+
"G1 X79.5 Y165.26 Z1.2 F540.0 E201.246\n"+
"G1 X80.06 Y165.82 Z1.2 F540.0 E210.925\n"+
"G1 X80.69 Y166.29 Z1.2 F540.0 E220.584\n"+
"G1 X81.4 Y166.65 Z1.2 F540.0 E230.254\n"+
"G1 X82.15 Y166.89 Z1.2 F540.0 E239.917\n"+
"G1 X82.93 Y167.02 Z1.2 F540.0 E249.582\n"+
"G1 X83.73 Y167.02 Z1.2 F540.0 E259.262\n"+
"G1 X84.51 Y166.89 Z1.2 F540.0 E268.927\n"+
"G1 X85.26 Y166.65 Z1.2 F540.0 E278.59\n"+
"G1 X85.96 Y166.29 Z1.2 F540.0 E288.259\n"+
"G1 X86.6 Y165.82 Z1.2 F540.0 E297.918\n"+
"G1 X87.16 Y165.26 Z1.2 F540.0 E307.598\n"+
"G1 X87.63 Y164.62 Z1.2 F540.0 E317.257\n"+
"G1 X87.99 Y163.92 Z1.2 F540.0 E326.926\n"+
"G1 X88.23 Y163.17 Z1.2 F540.0 E336.601\n"+
"G1 X88.35 Y162.39 Z1.2 F540.0 E346.254\n"+
"G1 X88.35 Y161.59 Z1.2 F540.0 E355.934\n"+
"G1 X88.23 Y160.81 Z1.2 F540.0 E365.599\n"+
"G1 X87.99 Y160.06 Z1.2 F540.0 E375.262\n"+
"G1 X87.69 Y159.48 Z1.2 F540.0 E383.177\n"+
"G1 F240.0\n"+
"G1 E383.177\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<loop> inner )\n"+
"M108 S100.0\n"+
"M108 S100.0\n"+
"G1 X87.94 Y159.0 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.177\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.52 Y158.41 Z1.2 F1080.0 E3.997\n"+
"G1 X86.91 Y157.8 Z1.2 F1080.0 E8.805\n"+
"G1 X86.21 Y157.29 Z1.2 F1080.0 E13.601\n"+
"G1 X85.44 Y156.9 Z1.2 F1080.0 E18.407\n"+
"G1 X84.61 Y156.64 Z1.2 F1080.0 E23.208\n"+
"G1 X83.76 Y156.5 Z1.2 F1080.0 E28.001\n"+
"G1 X82.9 Y156.5 Z1.2 F1080.0 E32.812\n"+
"G1 X82.04 Y156.64 Z1.2 F1080.0 E37.61\n"+
"G1 X81.22 Y156.9 Z1.2 F1080.0 E42.406\n"+
"G1 X80.45 Y157.29 Z1.2 F1080.0 E47.211\n"+
"G1 X79.75 Y157.8 Z1.2 F1080.0 E52.007\n"+
"G1 X79.14 Y158.41 Z1.2 F1080.0 E56.815\n"+
"G1 X78.63 Y159.11 Z1.2 F1080.0 E61.611\n"+
"G1 X78.24 Y159.88 Z1.2 F1080.0 E66.417\n"+
"G1 X77.97 Y160.7 Z1.2 F1080.0 E71.213\n"+
"G1 X77.84 Y161.56 Z1.2 F1080.0 E76.011\n"+
"G1 X77.84 Y162.42 Z1.2 F1080.0 E80.822\n"+
"G1 X77.97 Y163.28 Z1.2 F1080.0 E85.62\n"+
"G1 X78.24 Y164.1 Z1.2 F1080.0 E90.416\n"+
"G1 X78.63 Y164.87 Z1.2 F1080.0 E95.221\n"+
"G1 X79.14 Y165.57 Z1.2 F1080.0 E100.017\n"+
"G1 X79.75 Y166.18 Z1.2 F1080.0 E104.825\n"+
"G1 X80.45 Y166.69 Z1.2 F1080.0 E109.622\n"+
"G1 X81.22 Y167.08 Z1.2 F1080.0 E114.427\n"+
"G1 X82.04 Y167.34 Z1.2 F1080.0 E119.221\n"+
"G1 X82.9 Y167.48 Z1.2 F1080.0 E124.02\n"+
"G1 X83.76 Y167.48 Z1.2 F1080.0 E128.831\n"+
"G1 X84.61 Y167.34 Z1.2 F1080.0 E133.624\n"+
"G1 X85.44 Y167.08 Z1.2 F1080.0 E138.424\n"+
"G1 X86.21 Y166.69 Z1.2 F1080.0 E143.229\n"+
"G1 X86.91 Y166.18 Z1.2 F1080.0 E148.025\n"+
"G1 X87.52 Y165.57 Z1.2 F1080.0 E152.834\n"+
"G1 X88.03 Y164.87 Z1.2 F1080.0 E157.63\n"+
"G1 X88.42 Y164.1 Z1.2 F1080.0 E162.435\n"+
"G1 X88.68 Y163.28 Z1.2 F1080.0 E167.231\n"+
"G1 X88.82 Y162.42 Z1.2 F1080.0 E172.029\n"+
"G1 X88.82 Y161.56 Z1.2 F1080.0 E176.84\n"+
"G1 X88.68 Y160.7 Z1.2 F1080.0 E181.638\n"+
"G1 X88.42 Y159.88 Z1.2 F1080.0 E186.434\n"+
"G1 X88.09 Y159.24 Z1.2 F1080.0 E190.442\n"+
"G1 F240.0\n"+
"G1 E190.442\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.79 Y152.67 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.442\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.29 Y153.24 Z1.2 F1080.0 E4.176\n"+
"G1 X100.65 Y153.5 Z1.2 F1080.0 E6.667\n"+
"G1 X101.05 Y153.7 Z1.2 F1080.0 E9.149\n"+
"G1 X101.48 Y153.84 Z1.2 F1080.0 E11.64\n"+
"G1 X101.92 Y153.91 Z1.2 F1080.0 E14.136\n"+
"G1 X102.37 Y153.91 Z1.2 F1080.0 E16.625\n"+
"G1 X102.81 Y153.84 Z1.2 F1080.0 E19.116\n"+
"G1 X103.24 Y153.7 Z1.2 F1080.0 E21.612\n"+
"G1 X103.64 Y153.5 Z1.2 F1080.0 E24.094\n"+
"G1 X104.0 Y153.24 Z1.2 F1080.0 E26.585\n"+
"G1 X104.32 Y152.92 Z1.2 F1080.0 E29.083\n"+
"G1 X104.58 Y152.56 Z1.2 F1080.0 E31.574\n"+
"G1 X104.78 Y152.16 Z1.2 F1080.0 E34.056\n"+
"G1 X104.92 Y151.73 Z1.2 F1080.0 E36.55\n"+
"G1 X104.99 Y151.29 Z1.2 F1080.0 E39.042\n"+
"G1 X104.99 Y150.84 Z1.2 F1080.0 E41.531\n"+
"G1 X104.92 Y150.4 Z1.2 F1080.0 E44.023\n"+
"G1 X104.78 Y149.97 Z1.2 F1080.0 E46.517\n"+
"G1 X104.58 Y149.57 Z1.2 F1080.0 E49.0\n"+
"G1 X104.32 Y149.21 Z1.2 F1080.0 E51.49\n"+
"G1 X104.0 Y148.89 Z1.2 F1080.0 E53.988\n"+
"G1 X103.64 Y148.63 Z1.2 F1080.0 E56.479\n"+
"G1 X103.24 Y148.43 Z1.2 F1080.0 E58.961\n"+
"G1 X102.81 Y148.29 Z1.2 F1080.0 E61.457\n"+
"G1 X102.37 Y148.22 Z1.2 F1080.0 E63.948\n"+
"G1 X101.92 Y148.22 Z1.2 F1080.0 E66.437\n"+
"G1 X101.48 Y148.29 Z1.2 F1080.0 E68.933\n"+
"G1 X101.05 Y148.43 Z1.2 F1080.0 E71.424\n"+
"G1 X100.65 Y148.63 Z1.2 F1080.0 E73.906\n"+
"G1 X100.29 Y148.89 Z1.2 F1080.0 E76.397\n"+
"G1 X99.97 Y149.21 Z1.2 F1080.0 E78.899\n"+
"G1 X99.71 Y149.57 Z1.2 F1080.0 E81.386\n"+
"G1 X99.51 Y149.97 Z1.2 F1080.0 E83.868\n"+
"G1 X99.37 Y150.4 Z1.2 F1080.0 E86.365\n"+
"G1 X99.3 Y150.84 Z1.2 F1080.0 E88.856\n"+
"G1 X99.3 Y151.29 Z1.2 F1080.0 E91.345\n"+
"G1 X99.37 Y151.73 Z1.2 F1080.0 E93.835\n"+
"G1 X99.64 Y152.43 Z1.2 F1080.0 E98.004\n"+
"G1 F240.0\n"+
"G1 E98.004\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.82 Y149.64 Z1.2 F3000.0\n"+
"G1 X104.22 Y146.6 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E98.004\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.22 Y147.17 Z1.2 F1080.0 E6.395\n"+
"G1 X106.04 Y147.43 Z1.2 F1080.0 E11.191\n"+
"G1 X106.9 Y147.57 Z1.2 F1080.0 E15.994\n"+
"G1 X107.76 Y147.57 Z1.2 F1080.0 E20.806\n"+
"G1 X108.61 Y147.43 Z1.2 F1080.0 E25.598\n"+
"G1 X109.44 Y147.17 Z1.2 F1080.0 E30.394\n"+
"G1 X110.21 Y146.77 Z1.2 F1080.0 E35.204\n"+
"G1 X110.91 Y146.26 Z1.2 F1080.0 E40.0\n"+
"G1 X111.52 Y145.65 Z1.2 F1080.0 E44.809\n"+
"G1 X112.03 Y144.96 Z1.2 F1080.0 E49.605\n"+
"G1 X112.42 Y144.18 Z1.2 F1080.0 E54.41\n"+
"G1 X112.68 Y143.36 Z1.2 F1080.0 E59.206\n"+
"G1 X112.82 Y142.51 Z1.2 F1080.0 E64.004\n"+
"G1 X112.82 Y141.64 Z1.2 F1080.0 E68.815\n"+
"G1 X112.68 Y140.79 Z1.2 F1080.0 E73.613\n"+
"G1 X112.42 Y139.97 Z1.2 F1080.0 E78.409\n"+
"G1 X112.03 Y139.2 Z1.2 F1080.0 E83.214\n"+
"G1 X111.52 Y138.5 Z1.2 F1080.0 E88.011\n"+
"G1 X110.91 Y137.89 Z1.2 F1080.0 E92.819\n"+
"G1 X110.21 Y137.38 Z1.2 F1080.0 E97.618\n"+
"G1 X109.44 Y136.99 Z1.2 F1080.0 E102.426\n"+
"G1 X108.61 Y136.72 Z1.2 F1080.0 E107.222\n"+
"G1 X107.76 Y136.59 Z1.2 F1080.0 E112.014\n"+
"G1 X106.9 Y136.59 Z1.2 F1080.0 E116.826\n"+
"G1 X106.04 Y136.72 Z1.2 F1080.0 E121.629\n"+
"G1 X105.22 Y136.99 Z1.2 F1080.0 E126.425\n"+
"G1 X104.45 Y137.38 Z1.2 F1080.0 E131.223\n"+
"G1 X103.75 Y137.89 Z1.2 F1080.0 E136.022\n"+
"G1 X103.14 Y138.5 Z1.2 F1080.0 E140.83\n"+
"G1 X102.63 Y139.2 Z1.2 F1080.0 E145.627\n"+
"G1 X102.24 Y139.97 Z1.2 F1080.0 E150.432\n"+
"G1 X101.97 Y140.79 Z1.2 F1080.0 E155.228\n"+
"G1 X101.84 Y141.64 Z1.2 F1080.0 E160.026\n"+
"G1 X101.84 Y142.51 Z1.2 F1080.0 E164.837\n"+
"G1 X101.97 Y143.36 Z1.2 F1080.0 E169.635\n"+
"G1 X102.24 Y144.18 Z1.2 F1080.0 E174.431\n"+
"G1 X102.63 Y144.96 Z1.2 F1080.0 E179.236\n"+
"G1 X103.14 Y145.65 Z1.2 F1080.0 E184.032\n"+
"G1 X103.98 Y146.43 Z1.2 F1080.0 E190.413\n"+
"G1 F240.0\n"+
"G1 E190.413\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X102.1 Y143.33 Z1.2 F3000.0\n"+
"G1 X101.97 Y142.5 Z1.2 F3000.0\n"+
"G1 X101.97 Y141.66 Z1.2 F3000.0\n"+
"G1 X111.45 Y116.71 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.413\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.16 Y116.82 Z1.2 F1080.0 E3.999\n"+
"G1 X113.02 Y116.82 Z1.2 F1080.0 E8.81\n"+
"G1 X113.88 Y116.68 Z1.2 F1080.0 E13.608\n"+
"G1 X114.7 Y116.42 Z1.2 F1080.0 E18.404\n"+
"G1 X115.47 Y116.02 Z1.2 F1080.0 E23.209\n"+
"G1 X116.17 Y115.52 Z1.2 F1080.0 E28.005\n"+
"G1 X116.78 Y114.9 Z1.2 F1080.0 E32.813\n"+
"G1 X117.29 Y114.21 Z1.2 F1080.0 E37.61\n"+
"G1 X117.68 Y113.43 Z1.2 F1080.0 E42.415\n"+
"G1 X117.95 Y112.61 Z1.2 F1080.0 E47.211\n"+
"G1 X118.08 Y111.76 Z1.2 F1080.0 E52.009\n"+
"G1 X118.08 Y110.89 Z1.2 F1080.0 E56.82\n"+
"G1 X117.95 Y110.04 Z1.2 F1080.0 E61.618\n"+
"G1 X117.68 Y109.22 Z1.2 F1080.0 E66.414\n"+
"G1 X117.29 Y108.45 Z1.2 F1080.0 E71.219\n"+
"G1 X116.78 Y107.75 Z1.2 F1080.0 E76.015\n"+
"G1 X116.17 Y107.14 Z1.2 F1080.0 E80.824\n"+
"G1 X115.47 Y106.63 Z1.2 F1080.0 E85.62\n"+
"G1 X114.7 Y106.24 Z1.2 F1080.0 E90.425\n"+
"G1 X113.88 Y105.97 Z1.2 F1080.0 E95.221\n"+
"G1 X113.02 Y105.84 Z1.2 F1080.0 E100.019\n"+
"G1 X112.16 Y105.84 Z1.2 F1080.0 E104.83\n"+
"G1 X111.3 Y105.97 Z1.2 F1080.0 E109.628\n"+
"G1 X110.48 Y106.24 Z1.2 F1080.0 E114.424\n"+
"G1 X109.71 Y106.63 Z1.2 F1080.0 E119.229\n"+
"G1 X109.01 Y107.14 Z1.2 F1080.0 E124.025\n"+
"G1 X108.4 Y107.75 Z1.2 F1080.0 E128.834\n"+
"G1 X107.89 Y108.45 Z1.2 F1080.0 E133.63\n"+
"G1 X107.5 Y109.22 Z1.2 F1080.0 E138.435\n"+
"G1 X107.24 Y110.04 Z1.2 F1080.0 E143.231\n"+
"G1 X107.1 Y110.89 Z1.2 F1080.0 E148.029\n"+
"G1 X107.1 Y111.76 Z1.2 F1080.0 E152.84\n"+
"G1 X107.24 Y112.61 Z1.2 F1080.0 E157.638\n"+
"G1 X107.5 Y113.43 Z1.2 F1080.0 E162.434\n"+
"G1 X107.89 Y114.21 Z1.2 F1080.0 E167.239\n"+
"G1 X108.4 Y114.9 Z1.2 F1080.0 E172.036\n"+
"G1 X109.01 Y115.52 Z1.2 F1080.0 E176.844\n"+
"G1 X109.71 Y116.02 Z1.2 F1080.0 E181.64\n"+
"G1 X110.48 Y116.42 Z1.2 F1080.0 E186.445\n"+
"G1 X111.17 Y116.64 Z1.2 F1080.0 E190.44\n"+
"G1 F240.0\n"+
"G1 E190.44\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X108.0 Y114.14 Z1.2 F3000.0\n"+
"G1 X107.62 Y113.39 Z1.2 F3000.0\n"+
"G1 X107.36 Y112.58 Z1.2 F3000.0\n"+
"G1 X107.23 Y111.75 Z1.2 F3000.0\n"+
"G1 X107.23 Y110.9 Z1.2 F3000.0\n"+
"G1 X111.45 Y102.78 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.44\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.52 Y102.78 Z1.2 F1080.0 E22.628\n"+
"G1 X115.52 Y88.37 Z1.2 F1080.0 E102.683\n"+
"G1 X109.11 Y88.37 Z1.2 F1080.0 E138.294\n"+
"G1 X109.11 Y102.78 Z1.2 F1080.0 E218.35\n"+
"G1 X111.16 Y102.78 Z1.2 F1080.0 E229.733\n"+
"G1 F240.0\n"+
"G1 E229.733\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X107.23 Y110.9 Z1.2 F3000.0\n"+
"G1 X112.39 Y130.22 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E229.733\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.65 Y130.35 Z1.2 F1080.0 E4.166\n"+
"G1 X111.24 Y130.52 Z1.2 F1080.0 E6.658\n"+
"G1 X110.85 Y130.76 Z1.2 F1080.0 E9.16\n"+
"G1 X110.51 Y131.05 Z1.2 F1080.0 E11.642\n"+
"G1 X110.22 Y131.39 Z1.2 F1080.0 E14.132\n"+
"G1 X109.99 Y131.77 Z1.2 F1080.0 E16.625\n"+
"G1 X109.82 Y132.19 Z1.2 F1080.0 E19.116\n"+
"G1 X109.71 Y132.62 Z1.2 F1080.0 E21.614\n"+
"G1 X109.68 Y133.07 Z1.2 F1080.0 E24.098\n"+
"G1 X109.71 Y133.52 Z1.2 F1080.0 E26.583\n"+
"G1 X109.82 Y133.95 Z1.2 F1080.0 E29.081\n"+
"G1 X109.99 Y134.37 Z1.2 F1080.0 E31.572\n"+
"G1 X110.22 Y134.75 Z1.2 F1080.0 E34.065\n"+
"G1 X110.51 Y135.09 Z1.2 F1080.0 E36.555\n"+
"G1 X110.85 Y135.38 Z1.2 F1080.0 E39.033\n"+
"G1 X111.24 Y135.62 Z1.2 F1080.0 E41.537\n"+
"G1 X111.65 Y135.79 Z1.2 F1080.0 E44.028\n"+
"G1 X112.09 Y135.89 Z1.2 F1080.0 E46.524\n"+
"G1 X112.53 Y135.93 Z1.2 F1080.0 E49.009\n"+
"G1 X112.98 Y135.89 Z1.2 F1080.0 E51.494\n"+
"G1 X113.42 Y135.79 Z1.2 F1080.0 E53.99\n"+
"G1 X113.83 Y135.62 Z1.2 F1080.0 E56.481\n"+
"G1 X114.21 Y135.38 Z1.2 F1080.0 E58.98\n"+
"G1 X114.55 Y135.09 Z1.2 F1080.0 E61.463\n"+
"G1 X114.84 Y134.75 Z1.2 F1080.0 E63.949\n"+
"G1 X115.08 Y134.37 Z1.2 F1080.0 E66.442\n"+
"G1 X115.25 Y133.95 Z1.2 F1080.0 E68.935\n"+
"G1 X115.36 Y133.52 Z1.2 F1080.0 E71.432\n"+
"G1 X115.39 Y133.07 Z1.2 F1080.0 E73.917\n"+
"G1 X115.36 Y132.62 Z1.2 F1080.0 E76.402\n"+
"G1 X115.25 Y132.19 Z1.2 F1080.0 E78.899\n"+
"G1 X115.08 Y131.77 Z1.2 F1080.0 E81.391\n"+
"G1 X114.84 Y131.39 Z1.2 F1080.0 E83.885\n"+
"G1 X114.55 Y131.05 Z1.2 F1080.0 E86.371\n"+
"G1 X114.21 Y130.76 Z1.2 F1080.0 E88.857\n"+
"G1 X113.83 Y130.52 Z1.2 F1080.0 E91.354\n"+
"G1 X113.42 Y130.35 Z1.2 F1080.0 E93.847\n"+
"G1 X112.68 Y130.22 Z1.2 F1080.0 E98.012\n"+
"G1 F240.0\n"+
"G1 E98.012\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> outer )\n"+
"G1 X124.68 Y137.39 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E98.012\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.91 Y162.98 Z1.2 F1080.0 E164.114\n"+
"G1 X90.49 Y174.18 Z1.2 F1080.0 E288.667\n"+
"G1 X78.77 Y171.04 Z1.2 F1080.0 E356.107\n"+
"G1 X73.08 Y161.18 Z1.2 F1080.0 E419.352\n"+
"G1 X76.32 Y149.65 Z1.2 F1080.0 E485.926\n"+
"G1 X93.57 Y139.69 Z1.2 F1080.0 E596.564\n"+
"G1 X98.22 Y131.74 Z1.2 F1080.0 E647.744\n"+
"G1 X98.22 Y111.55 Z1.2 F1080.0 E759.91\n"+
"G1 X105.52 Y104.25 Z1.2 F1080.0 E817.272\n"+
"G1 X105.52 Y88.37 Z1.2 F1080.0 E905.472\n"+
"G1 X104.02 Y88.37 Z1.2 F1080.0 E913.806\n"+
"G1 X104.02 Y85.78 Z1.2 F1080.0 E928.194\n"+
"G1 X120.61 Y85.78 Z1.2 F1080.0 E1020.361\n"+
"G1 X120.61 Y88.37 Z1.2 F1080.0 E1034.75\n"+
"G1 X119.11 Y88.37 Z1.2 F1080.0 E1043.083\n"+
"G1 X119.11 Y103.57 Z1.2 F1080.0 E1127.506\n"+
"G1 X126.96 Y111.42 Z1.2 F1080.0 E1189.189\n"+
"G1 X126.96 Y133.44 Z1.2 F1080.0 E1311.522\n"+
"G1 X124.82 Y137.14 Z1.2 F1080.0 E1335.272\n"+
"G1 F240.0\n"+
"G1 E1335.272\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"G1 X98.98 Y110.92 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E1335.272\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.61 Y110.92 Z1.2 F1080.0 E3.539\n"+
"G1 X124.74 Y136.21 Z1.2 F1080.0 E201.589\n"+
"G1 X124.9 Y136.84 Z1.2 F1080.0 E205.19\n"+
"G1 F240.0\n"+
"G1 E205.19\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X124.43 Y137.65 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E205.19\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y112.19 Z1.2 F1080.0 E200.863\n"+
"G1 X98.34 Y111.56 Z1.2 F1080.0 E205.057\n"+
"G1 F240.0\n"+
"G1 E205.057\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y113.44 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E205.057\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y114.07 Z1.2 F1080.0 E4.328\n"+
"G1 X123.57 Y138.23 Z1.2 F1080.0 E196.722\n"+
"G1 X123.73 Y138.86 Z1.2 F1080.0 E200.318\n"+
"G1 F240.0\n"+
"G1 E200.318\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X123.27 Y139.66 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E200.318\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.79 Y131.18 Z1.2 F1080.0 E66.625\n"+
"G1 F240.0\n"+
"G1 E66.625\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.42 Y130.82 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E66.625\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y115.34 Z1.2 F1080.0 E122.308\n"+
"G1 X98.31 Y114.71 Z1.2 F1080.0 E126.636\n"+
"G1 F240.0\n"+
"G1 E126.636\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y116.62 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E126.636\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.89 Y130.2 Z1.2 F1080.0 E106.726\n"+
"G1 F240.0\n"+
"G1 E106.726\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.99 Y130.57 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E106.726\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y117.89 Z1.2 F1080.0 E99.616\n"+
"G1 F240.0\n"+
"G1 E99.616\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y119.8 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E99.616\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.94 Y130.89 Z1.2 F1080.0 E89.286\n"+
"G1 X110.04 Y131.52 Z1.2 F1080.0 E92.841\n"+
"G1 F240.0\n"+
"G1 E92.841\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.67 Y132.43 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E92.841\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y121.07 Z1.2 F1080.0 E89.213\n"+
"G1 F240.0\n"+
"G1 E89.213\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y122.98 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E89.213\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.25 Y134.92 Z1.2 F1080.0 E93.798\n"+
"G1 F240.0\n"+
"G1 E93.798\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.68 Y135.35 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E93.798\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.08 Y144.28 Z1.2 F1080.0 E71.995\n"+
"G1 X120.24 Y144.91 Z1.2 F1080.0 E75.597\n"+
"G1 F240.0\n"+
"G1 E75.597\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.77 Y145.72 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E75.597\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.61 Y145.09 Z1.2 F1080.0 E3.602\n"+
"G1 X98.76 Y124.89 Z1.2 F1080.0 E164.882\n"+
"G1 X98.31 Y124.25 Z1.2 F1080.0 E169.21\n"+
"G1 F240.0\n"+
"G1 E169.21\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y126.16 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E169.21\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.85 Y136.7 Z1.2 F1080.0 E82.822\n"+
"G1 F240.0\n"+
"G1 E82.822\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.37 Y136.5 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E82.822\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y127.44 Z1.2 F1080.0 E71.19\n"+
"G1 F240.0\n"+
"G1 E71.19\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y129.35 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E71.19\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.7 Y136.74 Z1.2 F1080.0 E58.085\n"+
"G1 F240.0\n"+
"G1 E58.085\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.8 Y137.1 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E58.085\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y130.62 Z1.2 F1080.0 E50.963\n"+
"G1 F240.0\n"+
"G1 E50.963\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.03 Y132.25 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.963\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.65 Y137.87 Z1.2 F1080.0 E44.159\n"+
"G1 F240.0\n"+
"G1 E44.159\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.02 Y138.51 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E44.159\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X97.56 Y133.05 Z1.2 F1080.0 E42.921\n"+
"G1 F240.0\n"+
"G1 E42.921\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X96.85 Y134.25 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E42.921\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.1 Y139.06 Z1.2 F1080.0 E39.518\n"+
"G1 X102.29 Y139.68 Z1.2 F1080.0 E43.146\n"+
"G1 F240.0\n"+
"G1 E43.146\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.94 Y140.61 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E43.146\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X96.39 Y135.06 Z1.2 F1080.0 E43.632\n"+
"G1 F240.0\n"+
"G1 E43.632\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X95.68 Y136.26 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E43.632\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.3 Y141.69 Z1.2 F1080.0 E43.419\n"+
"G1 X101.75 Y142.33 Z1.2 F1080.0 E47.752\n"+
"G1 F240.0\n"+
"G1 E47.752\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X102.06 Y143.91 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E47.752\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X95.36 Y137.69 Z1.2 F1080.0 E50.754\n"+
"G1 X95.21 Y137.06 Z1.2 F1080.0 E54.35\n"+
"G1 F240.0\n"+
"G1 E54.35\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X94.51 Y138.27 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E54.35\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.09 Y156.38 Z1.2 F1080.0 E144.183\n"+
"G1 X113.25 Y157.01 Z1.2 F1080.0 E147.785\n"+
"G1 F240.0\n"+
"G1 E147.785\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.78 Y157.82 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E147.785\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.63 Y157.19 Z1.2 F1080.0 E3.602\n"+
"G1 X104.83 Y149.87 Z1.2 F1080.0 E63.004\n"+
"G1 F240.0\n"+
"G1 E63.004\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.96 Y151.91 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E63.004\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.93 Y158.4 Z1.2 F1080.0 E52.908\n"+
"G1 X112.08 Y159.03 Z1.2 F1080.0 E56.51\n"+
"G1 X104.54 Y152.76 Z1.2 F1080.0 E110.983\n"+
"G1 X104.6 Y153.4 Z1.2 F1080.0 E114.525\n"+
"G1 X111.46 Y159.21 Z1.2 F1080.0 E164.472\n"+
"G1 X111.62 Y159.84 Z1.2 F1080.0 E168.072\n"+
"G1 F240.0\n"+
"G1 E168.072\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.53 Y153.66 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E168.072\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.92 Y161.05 Z1.2 F1080.0 E58.065\n"+
"G1 F240.0\n"+
"G1 E58.065\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.45 Y161.85 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E58.065\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.57 Y153.97 Z1.2 F1080.0 E61.923\n"+
"G1 F240.0\n"+
"G1 E61.923\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X100.07 Y152.84 Z1.2 F3000.0\n"+
"G1 X99.24 Y150.64 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E61.923\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X90.29 Y141.69 Z1.2 F1080.0 E70.302\n"+
"G1 F240.0\n"+
"G1 E70.302\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X91.1 Y141.22 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E70.302\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X91.73 Y141.38 Z1.2 F1080.0 E3.602\n"+
"G1 X99.42 Y149.05 Z1.2 F1080.0 E63.965\n"+
"G1 X99.55 Y149.68 Z1.2 F1080.0 E67.545\n"+
"G1 F240.0\n"+
"G1 E67.545\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X92.31 Y140.53 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E67.545\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X92.94 Y140.68 Z1.2 F1080.0 E3.6\n"+
"G1 X99.81 Y148.61 Z1.2 F1080.0 E61.898\n"+
"G1 X100.45 Y148.67 Z1.2 F1080.0 E65.44\n"+
"G1 X93.11 Y140.06 Z1.2 F1080.0 E128.258\n"+
"G1 X93.74 Y140.22 Z1.2 F1080.0 E131.859\n"+
"G1 X101.3 Y148.25 Z1.2 F1080.0 E193.138\n"+
"G1 F240.0\n"+
"G1 E193.138\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.34 Y148.38 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E193.138\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X94.04 Y139.07 Z1.2 F1080.0 E73.095\n"+
"G1 F240.0\n"+
"G1 E73.095\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X89.08 Y142.39 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E73.095\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.69 Y163.0 Z1.2 F1080.0 E161.931\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X108.88 Y163.46 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.25 Y163.31 Z1.2 F1080.0 E3.602\n"+
"G1 X88.27 Y142.85 Z1.2 F1080.0 E162.456\n"+
"G1 F240.0\n"+
"G1 E162.456\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X87.06 Y143.55 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E162.456\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.69 Y143.71 Z1.2 F1080.0 E3.602\n"+
"G1 X107.04 Y164.01 Z1.2 F1080.0 E159.398\n"+
"G1 X107.67 Y164.16 Z1.2 F1080.0 E162.995\n"+
"G1 F240.0\n"+
"G1 E162.995\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X106.86 Y164.63 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E162.995\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.24 Y164.47 Z1.2 F1080.0 E3.591\n"+
"G1 X86.26 Y144.02 Z1.2 F1080.0 E162.445\n"+
"G1 F240.0\n"+
"G1 E162.445\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X85.05 Y144.72 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E162.445\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X85.67 Y144.87 Z1.2 F1080.0 E3.596\n"+
"G1 X105.03 Y165.17 Z1.2 F1080.0 E159.4\n"+
"G1 X105.66 Y165.33 Z1.2 F1080.0 E163.001\n"+
"G1 F240.0\n"+
"G1 E163.001\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.85 Y165.79 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E163.001\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.22 Y165.64 Z1.2 F1080.0 E3.6\n"+
"G1 X84.24 Y145.18 Z1.2 F1080.0 E162.455\n"+
"G1 F240.0\n"+
"G1 E162.455\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X83.03 Y145.88 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E162.455\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.64 Y166.49 Z1.2 F1080.0 E161.931\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X102.83 Y166.96 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.2 Y166.8 Z1.2 F1080.0 E3.6\n"+
"G1 X82.85 Y146.51 Z1.2 F1080.0 E159.4\n"+
"G1 X82.22 Y146.35 Z1.2 F1080.0 E163.002\n"+
"G1 F240.0\n"+
"G1 E163.002\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X81.01 Y147.05 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E163.002\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X81.64 Y147.2 Z1.2 F1080.0 E3.595\n"+
"G1 X101.62 Y167.66 Z1.2 F1080.0 E162.453\n"+
"G1 F240.0\n"+
"G1 E162.453\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X100.81 Y168.12 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E162.453\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.19 Y167.97 Z1.2 F1080.0 E3.596\n"+
"G1 X80.83 Y147.67 Z1.2 F1080.0 E159.4\n"+
"G1 X80.2 Y147.51 Z1.2 F1080.0 E163.002\n"+
"G1 F240.0\n"+
"G1 E163.002\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.99 Y148.21 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E163.002\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.62 Y148.37 Z1.2 F1080.0 E3.596\n"+
"G1 X99.6 Y168.82 Z1.2 F1080.0 E162.443\n"+
"G1 F240.0\n"+
"G1 E162.443\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.8 Y169.29 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E162.443\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.17 Y169.13 Z1.2 F1080.0 E3.602\n"+
"G1 X78.81 Y148.83 Z1.2 F1080.0 E159.402\n"+
"G1 X78.19 Y148.68 Z1.2 F1080.0 E162.998\n"+
"G1 X84.06 Y156.46 Z1.2 F1080.0 E217.13\n"+
"G1 X76.97 Y149.38 Z1.2 F1080.0 E272.752\n"+
"G1 F240.0\n"+
"G1 E272.752\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X82.76 Y156.43 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E272.752\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X76.32 Y149.99 Z1.2 F1080.0 E50.59\n"+
"G1 F240.0\n"+
"G1 E50.59\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X75.9 Y151.48 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.59\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X81.22 Y156.81 Z1.2 F1080.0 E41.833\n"+
"G1 F240.0\n"+
"G1 E41.833\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X80.38 Y157.24 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E41.833\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.62 Y152.48 Z1.2 F1080.0 E37.398\n"+
"G1 F240.0\n"+
"G1 E37.398\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X75.2 Y153.97 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E37.398\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.33 Y158.1 Z1.2 F1080.0 E32.456\n"+
"G1 F240.0\n"+
"G1 E32.456\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.76 Y158.79 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E32.456\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X74.92 Y154.96 Z1.2 F1080.0 E30.119\n"+
"G1 F240.0\n"+
"G1 E30.119\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X74.5 Y156.45 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E30.119\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X78.1 Y160.04 Z1.2 F1080.0 E28.229\n"+
"G1 F240.0\n"+
"G1 E28.229\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.83 Y161.05 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E28.229\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X74.52 Y158.06 Z1.2 F1080.0 E24.79\n"+
"G1 X74.22 Y157.44 Z1.2 F1080.0 E28.594\n"+
"G1 F240.0\n"+
"G1 E28.594\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X73.8 Y158.93 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E28.594\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.3 Y162.29 Z1.2 F1080.0 E26.958\n"+
"G1 X77.83 Y162.96 Z1.2 F1080.0 E31.703\n"+
"G1 F240.0\n"+
"G1 E31.703\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.67 Y165.07 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E31.703\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.52 Y159.92 Z1.2 F1080.0 E40.439\n"+
"G1 F240.0\n"+
"G1 E40.439\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X73.6 Y161.91 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E40.439\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X84.06 Y172.37 Z1.2 F1080.0 E82.182\n"+
"G1 F240.0\n"+
"G1 E82.182\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X82.32 Y171.9 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E82.182\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.33 Y164.92 Z1.2 F1080.0 E54.864\n"+
"G1 F240.0\n"+
"G1 E54.864\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X80.25 Y166.65 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E54.864\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X86.66 Y173.07 Z1.2 F1080.0 E50.409\n"+
"G1 F240.0\n"+
"G1 E50.409\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.4 Y173.53 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.409\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X82.36 Y167.49 Z1.2 F1080.0 E47.498\n"+
"G1 F240.0\n"+
"G1 E47.498\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X84.27 Y167.49 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E47.498\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X89.16 Y173.33 Z1.2 F1080.0 E42.301\n"+
"G1 X90.1 Y173.55 Z1.2 F1080.0 E47.681\n"+
"G1 X90.73 Y173.95 Z1.2 F1080.0 E51.792\n"+
"G1 F240.0\n"+
"G1 E51.792\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X91.53 Y173.48 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E51.792\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X85.28 Y167.22 Z1.2 F1080.0 E49.152\n"+
"G1 F240.0\n"+
"G1 E49.152\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X86.53 Y166.56 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E49.152\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X92.11 Y172.62 Z1.2 F1080.0 E45.791\n"+
"G1 X92.74 Y172.78 Z1.2 F1080.0 E49.398\n"+
"G1 X87.22 Y165.99 Z1.2 F1080.0 E98.034\n"+
"G1 X93.55 Y172.32 Z1.2 F1080.0 E147.752\n"+
"G1 F240.0\n"+
"G1 E147.752\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.08 Y164.94 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E147.752\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X94.76 Y171.62 Z1.2 F1080.0 E52.463\n"+
"G1 F240.0\n"+
"G1 E52.463\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X95.57 Y171.15 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E52.463\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.51 Y164.1 Z1.2 F1080.0 E55.433\n"+
"G1 F240.0\n"+
"G1 E55.433\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.89 Y162.56 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E55.433\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X96.78 Y170.45 Z1.2 F1080.0 E61.998\n"+
"G1 F240.0\n"+
"G1 E61.998\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X97.59 Y169.99 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E61.998\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.86 Y161.26 Z1.2 F1080.0 E68.527\n"+
"G1 F240.0\n"+
"G1 E68.527\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X87.42 Y165.48 Z1.2 F3000.0\n"+
"G1 X79.71 Y171.2 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E68.527\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.94 Y169.44 Z1.2 F1080.0 E13.887\n"+
"G1 F240.0\n"+
"G1 E13.887\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X86.82 Y166.08 Z1.2 F3000.0\n"+
"G1 X87.42 Y165.48 Z1.2 F3000.0\n"+
"G1 X87.92 Y164.8 Z1.2 F3000.0\n"+
"G1 X88.3 Y164.05 Z1.2 F3000.0\n"+
"G1 X88.56 Y163.25 Z1.2 F3000.0\n"+
"G1 X88.69 Y162.41 Z1.2 F3000.0\n"+
"G1 X88.69 Y161.57 Z1.2 F3000.0\n"+
"G1 X88.64 Y161.23 Z1.2 F3000.0\n"+
"G1 X99.55 Y151.81 Z1.2 F3000.0\n"+
"G1 X99.43 Y151.28 Z1.2 F3000.0\n"+
"G1 X99.49 Y150.43 Z1.2 F3000.0\n"+
"G1 X99.82 Y149.64 Z1.2 F3000.0\n"+
"G1 X100.37 Y148.99 Z1.2 F3000.0\n"+
"G1 X105.5 Y147.35 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E13.887\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.79 Y155.17 Z1.2 F1080.0 E63.352\n"+
"G1 X113.95 Y155.8 Z1.2 F1080.0 E66.947\n"+
"G1 F240.0\n"+
"G1 E66.947\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.41 Y154.99 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E66.947\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.08 Y147.66 Z1.2 F1080.0 E57.645\n"+
"G1 F240.0\n"+
"G1 E57.645\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X108.8 Y147.47 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E57.645\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.96 Y153.16 Z1.2 F1080.0 E46.58\n"+
"G1 X115.11 Y153.78 Z1.2 F1080.0 E50.175\n"+
"G1 F240.0\n"+
"G1 E50.175\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.58 Y152.98 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.175\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.42 Y152.35 Z1.2 F1080.0 E3.595\n"+
"G1 X110.35 Y147.31 Z1.2 F1080.0 E43.335\n"+
"G1 X109.72 Y147.12 Z1.2 F1080.0 E46.968\n"+
"G1 F240.0\n"+
"G1 E46.968\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.89 Y146.38 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E46.968\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.12 Y151.14 Z1.2 F1080.0 E39.249\n"+
"G1 X116.28 Y151.77 Z1.2 F1080.0 E42.851\n"+
"G1 F240.0\n"+
"G1 E42.851\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X116.74 Y150.96 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E42.851\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.59 Y150.33 Z1.2 F1080.0 E3.602\n"+
"G1 X111.54 Y145.76 Z1.2 F1080.0 E41.438\n"+
"G1 F240.0\n"+
"G1 E41.438\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.3 Y144.61 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E41.438\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.29 Y149.12 Z1.2 F1080.0 E37.346\n"+
"G1 X117.44 Y149.75 Z1.2 F1080.0 E40.941\n"+
"G1 F240.0\n"+
"G1 E40.941\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.91 Y148.94 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E40.941\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.75 Y148.31 Z1.2 F1080.0 E3.596\n"+
"G1 X112.67 Y143.7 Z1.2 F1080.0 E41.727\n"+
"G1 F240.0\n"+
"G1 E41.727\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.91 Y142.04 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E41.727\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.34 Y142.67 Z1.2 F1080.0 E4.234\n"+
"G1 X118.45 Y147.1 Z1.2 F1080.0 E41.847\n"+
"G1 X118.61 Y147.73 Z1.2 F1080.0 E45.444\n"+
"G1 F240.0\n"+
"G1 E45.444\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.07 Y146.93 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E45.444\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.92 Y146.3 Z1.2 F1080.0 E3.595\n"+
"G1 X112.7 Y140.55 Z1.2 F1080.0 E50.603\n"+
"G1 F240.0\n"+
"G1 E50.603\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.18 Y135.94 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.603\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.78 Y143.07 Z1.2 F1080.0 E57.91\n"+
"G1 X120.94 Y143.7 Z1.2 F1080.0 E61.511\n"+
"G1 F240.0\n"+
"G1 E61.511\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X121.4 Y142.89 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E61.511\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X121.25 Y142.26 Z1.2 F1080.0 E3.602\n"+
"G1 X114.71 Y135.66 Z1.2 F1080.0 E55.19\n"+
"G1 X114.08 Y135.57 Z1.2 F1080.0 E58.745\n"+
"G1 F240.0\n"+
"G1 E58.745\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.03 Y134.61 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E58.745\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.13 Y135.25 Z1.2 F1080.0 E3.555\n"+
"G1 X121.94 Y141.05 Z1.2 F1080.0 E53.298\n"+
"G1 X122.1 Y141.68 Z1.2 F1080.0 E56.894\n"+
"G1 F240.0\n"+
"G1 E56.894\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X122.57 Y140.87 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E56.894\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X122.41 Y140.25 Z1.2 F1080.0 E3.595\n"+
"G1 X115.4 Y133.71 Z1.2 F1080.0 E56.833\n"+
"G1 F240.0\n"+
"G1 E56.833\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X125.6 Y135.63 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E56.833\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.93 Y109.97 Z1.2 F1080.0 E201.624\n"+
"G1 F240.0\n"+
"G1 E201.624\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X100.57 Y109.33 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E201.624\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.06 Y134.82 Z1.2 F1080.0 E200.284\n"+
"G1 F240.0\n"+
"G1 E200.284\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.52 Y108.38 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E200.284\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.76 Y133.61 Z1.2 F1080.0 E198.273\n"+
"G1 F240.0\n"+
"G1 E198.273\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y132.45 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E198.273\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.15 Y116.73 Z1.2 F1080.0 E123.555\n"+
"G1 F240.0\n"+
"G1 E123.555\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.21 Y116.88 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E123.555\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y130.54 Z1.2 F1080.0 E107.343\n"+
"G1 F240.0\n"+
"G1 E107.343\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y129.27 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E107.343\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.26 Y116.65 Z1.2 F1080.0 E99.117\n"+
"G1 F240.0\n"+
"G1 E99.117\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.57 Y116.06 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E99.117\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y127.36 Z1.2 F1080.0 E88.789\n"+
"G1 F240.0\n"+
"G1 E88.789\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y126.09 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E88.789\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.3 Y115.51 Z1.2 F1080.0 E83.085\n"+
"G1 F240.0\n"+
"G1 E83.085\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.19 Y114.49 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E83.085\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.28 Y115.13 Z1.2 F1080.0 E3.557\n"+
"G1 X126.42 Y123.54 Z1.2 F1080.0 E72.574\n"+
"G1 X126.87 Y124.18 Z1.2 F1080.0 E76.907\n"+
"G1 F240.0\n"+
"G1 E76.907\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y122.91 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E76.907\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y122.27 Z1.2 F1080.0 E4.328\n"+
"G1 X117.65 Y113.69 Z1.2 F1080.0 E72.505\n"+
"G1 F240.0\n"+
"G1 E72.505\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X118.1 Y112.22 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E72.505\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y120.36 Z1.2 F1080.0 E64.665\n"+
"G1 X126.87 Y121.0 Z1.2 F1080.0 E69.003\n"+
"G1 F240.0\n"+
"G1 E69.003\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y119.72 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E69.003\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y119.09 Z1.2 F1080.0 E4.328\n"+
"G1 X118.17 Y111.02 Z1.2 F1080.0 E68.436\n"+
"G1 F240.0\n"+
"G1 E68.436\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y117.81 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E68.436\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.1 Y108.05 Z1.2 F1080.0 E76.756\n"+
"G1 F240.0\n"+
"G1 E76.756\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.87 Y106.81 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E76.756\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.93 Y102.87 Z1.2 F1080.0 E30.963\n"+
"G1 X112.9 Y105.75 Z1.2 F1080.0 E47.806\n"+
"G1 X110.02 Y102.87 Z1.2 F1080.0 E70.386\n"+
"G1 F240.0\n"+
"G1 E70.386\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y101.87 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E70.386\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.57 Y101.24 Z1.2 F1080.0 E4.328\n"+
"G1 X106.06 Y99.1 Z1.2 F1080.0 E22.65\n"+
"G1 X105.61 Y98.46 Z1.2 F1080.0 E26.975\n"+
"G1 X109.02 Y99.96 Z1.2 F1080.0 E47.674\n"+
"G1 X106.06 Y97.19 Z1.2 F1080.0 E70.215\n"+
"G1 X105.61 Y96.55 Z1.2 F1080.0 E74.54\n"+
"G1 F240.0\n"+
"G1 E74.54\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y99.74 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.54\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.7 Y105.82 Z1.2 F1080.0 E47.8\n"+
"G1 F240.0\n"+
"G1 E47.8\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.23 Y106.27 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E47.8\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y101.64 Z1.2 F1080.0 E36.306\n"+
"G1 F240.0\n"+
"G1 E36.306\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y102.92 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E36.306\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.06 Y103.55 Z1.2 F1080.0 E4.325\n"+
"G1 X108.79 Y106.63 Z1.2 F1080.0 E27.198\n"+
"G1 X109.42 Y106.73 Z1.2 F1080.0 E30.75\n"+
"G1 F240.0\n"+
"G1 E30.75\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X108.41 Y107.62 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E30.75\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.34 Y104.56 Z1.2 F1080.0 E24.077\n"+
"G1 F240.0\n"+
"G1 E24.077\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.71 Y105.19 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.077\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.86 Y108.35 Z1.2 F1080.0 E24.772\n"+
"G1 F240.0\n"+
"G1 E24.772\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.26 Y109.66 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.772\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.75 Y106.15 Z1.2 F1080.0 E27.609\n"+
"G1 F240.0\n"+
"G1 E27.609\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.11 Y106.78 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E27.609\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.04 Y110.71 Z1.2 F1080.0 E30.83\n"+
"G1 F240.0\n"+
"G1 E30.83\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.19 Y112.77 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E30.83\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.16 Y107.74 Z1.2 F1080.0 E39.539\n"+
"G1 F240.0\n"+
"G1 E39.539\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y98.69 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E39.539\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.57 Y98.05 Z1.2 F1080.0 E4.328\n"+
"G1 X106.06 Y95.92 Z1.2 F1080.0 E22.65\n"+
"G1 X105.61 Y95.28 Z1.2 F1080.0 E26.975\n"+
"G1 X109.02 Y96.78 Z1.2 F1080.0 E47.674\n"+
"G1 X106.06 Y94.01 Z1.2 F1080.0 E70.215\n"+
"G1 X105.61 Y93.37 Z1.2 F1080.0 E74.54\n"+
"G1 F240.0\n"+
"G1 E74.54\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y95.51 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.54\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.57 Y94.87 Z1.2 F1080.0 E4.328\n"+
"G1 X106.06 Y92.73 Z1.2 F1080.0 E22.65\n"+
"G1 X105.61 Y92.1 Z1.2 F1080.0 E26.975\n"+
"G1 X109.02 Y93.6 Z1.2 F1080.0 E47.674\n"+
"G1 X106.06 Y90.83 Z1.2 F1080.0 E70.215\n"+
"G1 X105.61 Y90.19 Z1.2 F1080.0 E74.54\n"+
"G1 F240.0\n"+
"G1 E74.54\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.11 Y88.05 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.54\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.34 Y88.28 Z1.2 F1080.0 E1.815\n"+
"G1 F240.0\n"+
"G1 E1.815\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y92.33 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E1.815\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.57 Y91.69 Z1.2 F1080.0 E4.328\n"+
"G1 X106.06 Y89.55 Z1.2 F1080.0 E22.65\n"+
"G1 X105.61 Y88.92 Z1.2 F1080.0 E26.975\n"+
"G1 X109.02 Y90.42 Z1.2 F1080.0 E47.674\n"+
"G1 X104.48 Y85.87 Z1.2 F1080.0 E83.375\n"+
"G1 X104.98 Y88.28 Z1.2 F1080.0 E97.049\n"+
"G1 X104.11 Y87.42 Z1.2 F1080.0 E103.857\n"+
"G1 F240.0\n"+
"G1 E103.857\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.75 Y85.87 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E103.857\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y89.14 Z1.2 F1080.0 E25.699\n"+
"G1 F240.0\n"+
"G1 E25.699\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.66 Y85.87 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E25.699\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.43 Y87.83 Z1.2 F1080.0 E14.687\n"+
"G1 X110.07 Y88.28 Z1.2 F1080.0 E19.015\n"+
"G1 X108.93 Y85.87 Z1.2 F1080.0 E33.819\n"+
"G1 X109.57 Y86.32 Z1.2 F1080.0 E38.148\n"+
"G1 X110.71 Y87.83 Z1.2 F1080.0 E48.649\n"+
"G1 X111.34 Y88.28 Z1.2 F1080.0 E52.982\n"+
"G1 X110.84 Y85.87 Z1.2 F1080.0 E66.658\n"+
"G1 X112.61 Y87.83 Z1.2 F1080.0 E81.345\n"+
"G1 X113.25 Y88.28 Z1.2 F1080.0 E85.677\n"+
"G1 X112.11 Y85.87 Z1.2 F1080.0 E100.482\n"+
"G1 X112.75 Y86.32 Z1.2 F1080.0 E104.81\n"+
"G1 X113.89 Y87.83 Z1.2 F1080.0 E115.311\n"+
"G1 X114.52 Y88.28 Z1.2 F1080.0 E119.644\n"+
"G1 X114.02 Y85.87 Z1.2 F1080.0 E133.319\n"+
"G1 X119.02 Y90.87 Z1.2 F1080.0 E172.587\n"+
"G1 X115.61 Y89.37 Z1.2 F1080.0 E193.286\n"+
"G1 X116.06 Y90.01 Z1.2 F1080.0 E197.615\n"+
"G1 X118.57 Y92.14 Z1.2 F1080.0 E215.933\n"+
"G1 X119.02 Y92.78 Z1.2 F1080.0 E220.262\n"+
"G1 F240.0\n"+
"G1 E220.262\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y90.64 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E220.262\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y91.28 Z1.2 F1080.0 E4.325\n"+
"G1 X119.02 Y94.05 Z1.2 F1080.0 E26.866\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y95.96 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.57 Y95.33 Z1.2 F1080.0 E4.328\n"+
"G1 X116.06 Y93.19 Z1.2 F1080.0 E22.646\n"+
"G1 X115.61 Y92.55 Z1.2 F1080.0 E26.976\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y93.83 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y94.46 Z1.2 F1080.0 E4.325\n"+
"G1 X119.02 Y97.24 Z1.2 F1080.0 E26.866\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y99.14 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.57 Y98.51 Z1.2 F1080.0 E4.328\n"+
"G1 X116.06 Y96.37 Z1.2 F1080.0 E22.646\n"+
"G1 X115.61 Y95.73 Z1.2 F1080.0 E26.976\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y97.01 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y97.64 Z1.2 F1080.0 E4.325\n"+
"G1 X119.02 Y100.42 Z1.2 F1080.0 E26.866\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y102.33 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.57 Y101.69 Z1.2 F1080.0 E4.328\n"+
"G1 X116.06 Y99.55 Z1.2 F1080.0 E22.65\n"+
"G1 X115.61 Y98.92 Z1.2 F1080.0 E26.975\n"+
"G1 F240.0\n"+
"G1 E26.975\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y100.19 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.975\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y100.83 Z1.2 F1080.0 E4.325\n"+
"G1 X119.02 Y103.6 Z1.2 F1080.0 E26.866\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y102.1 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.51 Y111.83 Z1.2 F1080.0 E81.14\n"+
"G1 X126.42 Y112.72 Z1.2 F1080.0 E86.145\n"+
"G1 X126.87 Y113.36 Z1.2 F1080.0 E90.473\n"+
"G1 F240.0\n"+
"G1 E90.473\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y114.63 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E90.473\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.11 Y102.87 Z1.2 F1080.0 E92.387\n"+
"G1 F240.0\n"+
"G1 E92.387\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.2 Y102.87 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E92.387\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y116.54 Z1.2 F1080.0 E107.39\n"+
"G1 F240.0\n"+
"G1 E107.39\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.24 Y103.52 Z1.2 F3000.0\n"+
"G1 X119.02 Y89.6 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E107.39\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.3 Y85.87 Z1.2 F1080.0 E29.266\n"+
"G1 F240.0\n"+
"G1 E29.266\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.21 Y85.87 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E29.266\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.99 Y87.88 Z1.2 F1080.0 E14.906\n"+
"G1 X119.61 Y88.28 Z1.2 F1080.0 E19.046\n"+
"G1 F240.0\n"+
"G1 E19.046\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.52 Y87.92 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E19.046\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.48 Y85.87 Z1.2 F1080.0 E16.055\n"+
"G1 F240.0\n"+
"G1 E16.055\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.39 Y85.87 Z1.2 F3000.0\n"+
"G1 F240.0\n"+
"G1 E16.055\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.52 Y86.01 Z1.2 F1080.0 E1.053\n"+
"G1 F240.0\n"+
"G1 E1.053\n"+
"G1 F1080.0\n"+
";\n"+
"(</surroundingLoop>)\n"+
"G1 F30.0\n"+
"(<layer> 1.5 )\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X93.055 Y139.175 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y131.549 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y111.258 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y103.957 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y89.078 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y89.078 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y85.078 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y85.078 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y89.078 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y89.078 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y103.277 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y111.128 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y133.629 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.426 Y163.491 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X90.593 Y174.941 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.302 Y171.647 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X72.316 Y161.279 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X75.721 Y149.182 Z1.5 </boundaryPoint>)\n"+
"(<perimeter> outer )\n"+
"M108 S110.0\n"+
"M108 S110.0\n"+
"G1 X120.52 Y86.01 Z1.5 F30.0\n"+
"G91\n"+
"G1 F20\n"+
"G1 F1500\n"+
"G1 X-0.3 Y-0.3 F1500\n"+
"G90\n"+
"G4 P3000\n"+
"G92 X0;set x 0\n"+
"G1 X-1.0 F3000.0 \n"+
"G1 X-500.0  F3200.0 ;horizontal move\n"+
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
"G1 X120.52 Y86.01 Z1.5 F3000.0\n"+
"G1 X120.71 Y86.12 Z1.5 F3000.0\n"+
"G1 X121.08 Y86.35 Z1.5 F71.858\n"+
"G1 F240.0\n"+
"G1 E1.053\n"+
"G1 F71.858\n"+
"G92 E0\n"+
";\n"+
"G1 X121.08 Y88.84 Z1.5 F540.0 E30.397\n"+
"G1 X119.58 Y88.84 Z1.5 F540.0 E48.73\n"+
"G1 X119.58 Y103.38 Z1.5 F540.0 E226.417\n"+
"G1 X127.43 Y111.23 Z1.5 F540.0 E362.12\n"+
"G1 X127.43 Y133.57 Z1.5 F540.0 E635.14\n"+
"G1 X110.25 Y163.32 Z1.5 F540.0 E1055.007\n"+
"G1 X90.56 Y174.68 Z1.5 F540.0 E1332.902\n"+
"G1 X78.46 Y171.44 Z1.5 F540.0 E1485.993\n"+
"G1 X72.57 Y161.25 Z1.5 F540.0 E1629.874\n"+
"G1 X75.93 Y149.34 Z1.5 F540.0 E1781.049\n"+
"G1 X93.23 Y139.35 Z1.5 F540.0 E2025.258\n"+
"G1 X97.76 Y131.61 Z1.5 F540.0 E2134.807\n"+
"G1 X97.76 Y111.36 Z1.5 F540.0 E2382.392\n"+
"G1 X105.06 Y104.06 Z1.5 F540.0 E2508.589\n"+
"G1 X105.06 Y88.84 Z1.5 F540.0 E2694.587\n"+
"G1 X103.56 Y88.84 Z1.5 F540.0 E2712.92\n"+
"G1 X103.56 Y85.32 Z1.5 F540.0 E2755.942\n"+
"G1 X121.08 Y85.32 Z1.5 F540.0 E2970.075\n"+
"G1 X121.08 Y86.06 Z1.5 F540.0 E2979.181\n"+
"G1 F240.0\n"+
"G1 E2979.181\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X114.816 Y89.078 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y89.078 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y102.078 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.816 Y102.078 Z1.5 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X114.91 Y88.84 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E2979.181\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.58 Y88.84 Z1.5 F540.0 E65.218\n"+
"G1 X109.58 Y102.32 Z1.5 F540.0 E229.973\n"+
"G1 X115.06 Y102.32 Z1.5 F540.0 E296.951\n"+
"G1 X115.06 Y88.98 Z1.5 F540.0 E459.947\n"+
"G1 F240.0\n"+
"G1 E459.947\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X107.804 Y111.704 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.923 Y112.448 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.155 Y113.164 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.497 Y113.835 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.94 Y114.444 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.473 Y114.977 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.082 Y115.42 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.753 Y115.762 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.469 Y115.994 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.213 Y116.112 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.967 Y116.112 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.711 Y115.994 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.427 Y115.762 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.098 Y115.42 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.707 Y114.977 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.239 Y114.444 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.683 Y113.835 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.025 Y113.164 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y112.448 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y111.704 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y110.95 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y110.206 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.025 Y109.49 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.683 Y108.819 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.239 Y108.21 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.707 Y107.677 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.098 Y107.234 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.427 Y106.892 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.711 Y106.66 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.967 Y106.542 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.213 Y106.542 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.469 Y106.66 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.753 Y106.892 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.082 Y107.234 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.473 Y107.677 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.94 Y108.21 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.497 Y108.819 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.155 Y109.49 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.923 Y110.206 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.804 Y110.95 Z1.5 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X115.39 Y102.65 Z1.5 F3000.0\n"+
"G1 X112.84 Y106.3 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E459.947\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.19 Y106.3 Z1.5 F540.0 E7.92\n"+
"G1 X111.41 Y106.43 Z1.5 F540.0 E17.585\n"+
"G1 X110.66 Y106.67 Z1.5 F540.0 E27.248\n"+
"G1 X109.96 Y107.03 Z1.5 F540.0 E36.917\n"+
"G1 X109.32 Y107.49 Z1.5 F540.0 E46.586\n"+
"G1 X108.76 Y108.05 Z1.5 F540.0 E56.257\n"+
"G1 X108.29 Y108.69 Z1.5 F540.0 E65.916\n"+
"G1 X107.93 Y109.4 Z1.5 F540.0 E75.586\n"+
"G1 X107.69 Y110.15 Z1.5 F540.0 E85.249\n"+
"G1 X107.57 Y110.93 Z1.5 F540.0 E94.914\n"+
"G1 X107.57 Y111.72 Z1.5 F540.0 E104.594\n"+
"G1 X107.69 Y112.5 Z1.5 F540.0 E114.259\n"+
"G1 X107.93 Y113.26 Z1.5 F540.0 E123.922\n"+
"G1 X108.29 Y113.96 Z1.5 F540.0 E133.591\n"+
"G1 X108.76 Y114.6 Z1.5 F540.0 E143.25\n"+
"G1 X109.32 Y115.16 Z1.5 F540.0 E152.921\n"+
"G1 X109.96 Y115.63 Z1.5 F540.0 E162.59\n"+
"G1 X110.66 Y115.98 Z1.5 F540.0 E172.259\n"+
"G1 X111.41 Y116.23 Z1.5 F540.0 E181.922\n"+
"G1 X112.19 Y116.35 Z1.5 F540.0 E191.587\n"+
"G1 X112.99 Y116.35 Z1.5 F540.0 E201.267\n"+
"G1 X113.77 Y116.23 Z1.5 F540.0 E210.932\n"+
"G1 X114.52 Y115.98 Z1.5 F540.0 E220.595\n"+
"G1 X115.22 Y115.63 Z1.5 F540.0 E230.265\n"+
"G1 X115.86 Y115.16 Z1.5 F540.0 E239.924\n"+
"G1 X116.42 Y114.6 Z1.5 F540.0 E249.603\n"+
"G1 X116.89 Y113.96 Z1.5 F540.0 E259.262\n"+
"G1 X117.25 Y113.26 Z1.5 F540.0 E268.932\n"+
"G1 X117.49 Y112.5 Z1.5 F540.0 E278.595\n"+
"G1 X117.61 Y111.72 Z1.5 F540.0 E288.258\n"+
"G1 X117.61 Y110.93 Z1.5 F540.0 E297.938\n"+
"G1 X117.49 Y110.15 Z1.5 F540.0 E307.601\n"+
"G1 X117.25 Y109.4 Z1.5 F540.0 E317.264\n"+
"G1 X116.89 Y108.69 Z1.5 F540.0 E326.933\n"+
"G1 X116.42 Y108.05 Z1.5 F540.0 E336.592\n"+
"G1 X115.86 Y107.49 Z1.5 F540.0 E346.272\n"+
"G1 X115.22 Y107.03 Z1.5 F540.0 E355.931\n"+
"G1 X114.52 Y106.67 Z1.5 F540.0 E365.6\n"+
"G1 X113.77 Y106.43 Z1.5 F540.0 E375.263\n"+
"G1 X113.13 Y106.33 Z1.5 F540.0 E383.17\n"+
"G1 F240.0\n"+
"G1 E383.17\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X111.269 Y134.809 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y134.986 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y135.115 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y135.194 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y135.22 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y135.194 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y135.115 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y134.986 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y134.809 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y134.59 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y134.334 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y134.046 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y133.734 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y133.406 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.683 Y133.07 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y132.734 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y132.406 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y132.094 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y131.806 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y131.55 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y131.331 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y131.154 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y131.024 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y130.946 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y130.92 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y130.946 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y131.024 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y131.154 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.269 Y131.331 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y131.55 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y131.806 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y132.094 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y132.406 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y132.734 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.383 Y133.07 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y133.406 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y133.734 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y134.046 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y134.334 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y134.59 Z1.5 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X115.4 Y106.74 Z1.5 F3000.0\n"+
"G1 X116.08 Y107.24 Z1.5 F3000.0\n"+
"G1 X116.68 Y107.84 Z1.5 F3000.0\n"+
"G1 X117.18 Y108.52 Z1.5 F3000.0\n"+
"G1 X117.56 Y109.27 Z1.5 F3000.0\n"+
"G1 X117.82 Y110.07 Z1.5 F3000.0\n"+
"G1 X117.95 Y110.91 Z1.5 F3000.0\n"+
"G1 X112.39 Y130.69 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.17\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.8 Y130.8 Z1.5 F540.0 E7.375\n"+
"G1 X111.13 Y131.14 Z1.5 F540.0 E16.536\n"+
"G1 X110.6 Y131.66 Z1.5 F540.0 E25.662\n"+
"G1 X110.26 Y132.33 Z1.5 F540.0 E34.823\n"+
"G1 X110.17 Y132.7 Z1.5 F540.0 E39.4\n"+
"G1 X110.17 Y133.44 Z1.5 F540.0 E48.543\n"+
"G1 X110.26 Y133.81 Z1.5 F540.0 E53.12\n"+
"G1 X110.6 Y134.48 Z1.5 F540.0 E62.281\n"+
"G1 X111.13 Y135.0 Z1.5 F540.0 E71.407\n"+
"G1 X111.45 Y135.2 Z1.5 F540.0 E75.994\n"+
"G1 X112.16 Y135.43 Z1.5 F540.0 E85.146\n"+
"G1 X112.91 Y135.43 Z1.5 F540.0 E94.288\n"+
"G1 X113.27 Y135.34 Z1.5 F540.0 E98.866\n"+
"G1 X113.94 Y135.0 Z1.5 F540.0 E108.027\n"+
"G1 X114.47 Y134.48 Z1.5 F540.0 E117.153\n"+
"G1 X114.81 Y133.81 Z1.5 F540.0 E126.314\n"+
"G1 X114.9 Y133.44 Z1.5 F540.0 E130.891\n"+
"G1 X114.9 Y132.7 Z1.5 F540.0 E140.034\n"+
"G1 X114.81 Y132.33 Z1.5 F540.0 E144.611\n"+
"G1 X114.47 Y131.66 Z1.5 F540.0 E153.772\n"+
"G1 X113.94 Y131.14 Z1.5 F540.0 E162.898\n"+
"G1 X113.27 Y130.8 Z1.5 F540.0 E172.059\n"+
"G1 X112.68 Y130.69 Z1.5 F540.0 E179.434\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X103.236 Y144.585 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y145.194 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y145.727 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y146.17 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y146.512 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y146.743 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y146.862 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y146.862 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y146.743 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y146.512 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y146.17 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y145.727 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y145.194 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y144.585 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y143.914 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y143.198 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y142.454 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y141.7 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y140.956 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y140.24 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y139.569 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y138.96 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y138.427 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y137.984 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y137.642 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y137.41 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y137.291 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y137.291 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y137.41 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y137.642 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y137.984 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y138.427 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y138.96 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.236 Y139.569 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y140.24 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y140.956 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y141.7 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y142.454 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y143.198 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y143.914 Z1.5 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X110.93 Y130.86 Z1.5 F3000.0\n"+
"G1 X110.33 Y131.47 Z1.5 F3000.0\n"+
"G1 X109.12 Y137.38 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.51 Y137.18 Z1.5 F540.0 E7.904\n"+
"G1 X107.73 Y137.05 Z1.5 F540.0 E17.569\n"+
"G1 X106.93 Y137.05 Z1.5 F540.0 E27.249\n"+
"G1 X106.15 Y137.18 Z1.5 F540.0 E36.914\n"+
"G1 X105.4 Y137.42 Z1.5 F540.0 E46.577\n"+
"G1 X104.7 Y137.78 Z1.5 F540.0 E56.247\n"+
"G1 X104.06 Y138.24 Z1.5 F540.0 E65.899\n"+
"G1 X103.5 Y138.8 Z1.5 F540.0 E75.587\n"+
"G1 X103.03 Y139.44 Z1.5 F540.0 E85.246\n"+
"G1 X102.67 Y140.15 Z1.5 F540.0 E94.915\n"+
"G1 X102.43 Y140.9 Z1.5 F540.0 E104.578\n"+
"G1 X102.3 Y141.68 Z1.5 F540.0 E114.243\n"+
"G1 X102.3 Y142.47 Z1.5 F540.0 E123.923\n"+
"G1 X102.43 Y143.25 Z1.5 F540.0 E133.588\n"+
"G1 X102.67 Y144.01 Z1.5 F540.0 E143.239\n"+
"G1 X103.03 Y144.71 Z1.5 F540.0 E152.92\n"+
"G1 X103.5 Y145.35 Z1.5 F540.0 E162.579\n"+
"G1 X104.06 Y145.91 Z1.5 F540.0 E172.258\n"+
"G1 X104.7 Y146.38 Z1.5 F540.0 E181.917\n"+
"G1 X105.4 Y146.73 Z1.5 F540.0 E191.587\n"+
"G1 X106.15 Y146.98 Z1.5 F540.0 E201.25\n"+
"G1 X106.93 Y147.1 Z1.5 F540.0 E210.915\n"+
"G1 X107.73 Y147.1 Z1.5 F540.0 E220.595\n"+
"G1 X108.51 Y146.98 Z1.5 F540.0 E230.26\n"+
"G1 X109.26 Y146.73 Z1.5 F540.0 E239.923\n"+
"G1 X109.96 Y146.38 Z1.5 F540.0 E249.592\n"+
"G1 X110.6 Y145.91 Z1.5 F540.0 E259.251\n"+
"G1 X111.16 Y145.35 Z1.5 F540.0 E268.922\n"+
"G1 X111.63 Y144.71 Z1.5 F540.0 E278.588\n"+
"G1 X111.99 Y144.01 Z1.5 F540.0 E288.269\n"+
"G1 X112.23 Y143.25 Z1.5 F540.0 E297.92\n"+
"G1 X112.35 Y142.47 Z1.5 F540.0 E307.585\n"+
"G1 X112.35 Y141.68 Z1.5 F540.0 E317.265\n"+
"G1 X112.23 Y140.9 Z1.5 F540.0 E326.93\n"+
"G1 X111.99 Y140.15 Z1.5 F540.0 E336.593\n"+
"G1 X111.63 Y139.44 Z1.5 F540.0 E346.263\n"+
"G1 X111.16 Y138.8 Z1.5 F540.0 E355.929\n"+
"G1 X110.6 Y138.24 Z1.5 F540.0 E365.608\n"+
"G1 X109.96 Y137.78 Z1.5 F540.0 E375.26\n"+
"G1 X109.39 Y137.49 Z1.5 F540.0 E383.175\n"+
"G1 F240.0\n"+
"G1 E383.175\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X100.159 Y151.887 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.312 Y152.187 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.51 Y152.46 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.749 Y152.699 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.022 Y152.897 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.322 Y153.05 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.643 Y153.154 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.976 Y153.207 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.314 Y153.207 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.647 Y153.154 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.968 Y153.05 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.268 Y152.897 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.541 Y152.699 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.78 Y152.46 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y152.187 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y151.887 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.236 Y151.566 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y151.233 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y150.895 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.236 Y150.562 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y150.241 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y149.941 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.78 Y149.668 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.541 Y149.429 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.268 Y149.231 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.968 Y149.078 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.647 Y148.973 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.314 Y148.921 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.976 Y148.921 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.643 Y148.973 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.322 Y149.078 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.022 Y149.231 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.749 Y149.429 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.51 Y149.668 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.312 Y149.941 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.159 Y150.241 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y150.562 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y150.895 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y151.233 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y151.566 Z1.5 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X106.91 Y136.72 Z1.5 F3000.0\n"+
"G1 X106.07 Y136.85 Z1.5 F3000.0\n"+
"G1 X105.27 Y137.11 Z1.5 F3000.0\n"+
"G1 X104.52 Y137.49 Z1.5 F3000.0\n"+
"G1 X103.84 Y137.99 Z1.5 F3000.0\n"+
"G1 X103.24 Y138.59 Z1.5 F3000.0\n"+
"G1 X102.74 Y139.27 Z1.5 F3000.0\n"+
"G1 X102.36 Y140.02 Z1.5 F3000.0\n"+
"G1 X102.1 Y140.82 Z1.5 F3000.0\n"+
"G1 X101.97 Y141.66 Z1.5 F3000.0\n"+
"G1 X103.27 Y148.96 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.175\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.7 Y148.74 Z1.5 F540.0 E7.397\n"+
"G1 X101.96 Y148.68 Z1.5 F540.0 E16.542\n"+
"G1 X101.59 Y148.74 Z1.5 F540.0 E21.119\n"+
"G1 X100.9 Y149.03 Z1.5 F540.0 E30.265\n"+
"G1 X100.33 Y149.51 Z1.5 F540.0 E39.41\n"+
"G1 X100.11 Y149.82 Z1.5 F540.0 E43.987\n"+
"G1 X99.82 Y150.51 Z1.5 F540.0 E53.121\n"+
"G1 X99.76 Y151.25 Z1.5 F540.0 E62.278\n"+
"G1 X99.82 Y151.62 Z1.5 F540.0 E66.856\n"+
"G1 X100.11 Y152.31 Z1.5 F540.0 E76.001\n"+
"G1 X100.33 Y152.62 Z1.5 F540.0 E80.577\n"+
"G1 X100.9 Y153.1 Z1.5 F540.0 E89.723\n"+
"G1 X101.59 Y153.39 Z1.5 F540.0 E98.868\n"+
"G1 X102.33 Y153.45 Z1.5 F540.0 E108.014\n"+
"G1 X102.7 Y153.39 Z1.5 F540.0 E112.591\n"+
"G1 X103.39 Y153.1 Z1.5 F540.0 E121.736\n"+
"G1 X103.96 Y152.62 Z1.5 F540.0 E130.882\n"+
"G1 X104.18 Y152.31 Z1.5 F540.0 E135.459\n"+
"G1 X104.47 Y151.62 Z1.5 F540.0 E144.604\n"+
"G1 X104.53 Y150.88 Z1.5 F540.0 E153.749\n"+
"G1 X104.47 Y150.51 Z1.5 F540.0 E158.338\n"+
"G1 X104.18 Y149.82 Z1.5 F540.0 E167.472\n"+
"G1 X103.96 Y149.51 Z1.5 F540.0 E172.049\n"+
"G1 X103.51 Y149.11 Z1.5 F540.0 E179.434\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X78.894 Y163.827 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.236 Y164.498 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.679 Y165.107 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.212 Y165.64 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.821 Y166.082 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.492 Y166.425 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.208 Y166.657 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.952 Y166.775 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.706 Y166.775 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.45 Y166.657 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.166 Y166.425 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.837 Y166.082 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.446 Y165.64 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.979 Y165.107 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.422 Y164.498 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.764 Y163.827 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y163.111 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y162.367 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y161.613 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y160.868 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.764 Y160.153 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.422 Y159.482 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.979 Y158.873 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.446 Y158.34 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.837 Y157.897 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.166 Y157.555 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.45 Y157.323 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.706 Y157.205 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.952 Y157.205 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.208 Y157.323 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.492 Y157.555 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.821 Y157.897 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.212 Y158.34 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.679 Y158.873 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.236 Y159.482 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.894 Y160.153 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.662 Y160.868 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y161.613 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y162.367 Z1.5 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.662 Y163.111 Z1.5 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X101.93 Y148.35 Z1.5 F3000.0\n"+
"G1 X101.1 Y148.54 Z1.5 F3000.0\n"+
"G1 X87.54 Y159.24 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.16 Y158.72 Z1.5 F540.0 E7.901\n"+
"G1 X86.6 Y158.16 Z1.5 F540.0 E17.581\n"+
"G1 X85.96 Y157.69 Z1.5 F540.0 E27.24\n"+
"G1 X85.26 Y157.33 Z1.5 F540.0 E36.909\n"+
"G1 X84.51 Y157.09 Z1.5 F540.0 E46.572\n"+
"G1 X83.73 Y156.97 Z1.5 F540.0 E56.237\n"+
"G1 X82.93 Y156.97 Z1.5 F540.0 E65.917\n"+
"G1 X82.15 Y157.09 Z1.5 F540.0 E75.582\n"+
"G1 X81.4 Y157.33 Z1.5 F540.0 E85.245\n"+
"G1 X80.69 Y157.69 Z1.5 F540.0 E94.915\n"+
"G1 X80.06 Y158.16 Z1.5 F540.0 E104.574\n"+
"G1 X79.5 Y158.72 Z1.5 F540.0 E114.253\n"+
"G1 X79.03 Y159.36 Z1.5 F540.0 E123.912\n"+
"G1 X78.67 Y160.06 Z1.5 F540.0 E133.582\n"+
"G1 X78.43 Y160.81 Z1.5 F540.0 E143.245\n"+
"G1 X78.3 Y161.59 Z1.5 F540.0 E152.91\n"+
"G1 X78.3 Y162.39 Z1.5 F540.0 E162.59\n"+
"G1 X78.43 Y163.17 Z1.5 F540.0 E172.243\n"+
"G1 X78.67 Y163.92 Z1.5 F540.0 E181.917\n"+
"G1 X79.03 Y164.62 Z1.5 F540.0 E191.587\n"+
"G1 X79.5 Y165.26 Z1.5 F540.0 E201.246\n"+
"G1 X80.06 Y165.82 Z1.5 F540.0 E210.925\n"+
"G1 X80.69 Y166.29 Z1.5 F540.0 E220.584\n"+
"G1 X81.4 Y166.65 Z1.5 F540.0 E230.254\n"+
"G1 X82.15 Y166.89 Z1.5 F540.0 E239.917\n"+
"G1 X82.93 Y167.02 Z1.5 F540.0 E249.582\n"+
"G1 X83.73 Y167.02 Z1.5 F540.0 E259.262\n"+
"G1 X84.51 Y166.89 Z1.5 F540.0 E268.927\n"+
"G1 X85.26 Y166.65 Z1.5 F540.0 E278.59\n"+
"G1 X85.96 Y166.29 Z1.5 F540.0 E288.259\n"+
"G1 X86.6 Y165.82 Z1.5 F540.0 E297.918\n"+
"G1 X87.16 Y165.26 Z1.5 F540.0 E307.598\n"+
"G1 X87.63 Y164.62 Z1.5 F540.0 E317.257\n"+
"G1 X87.99 Y163.92 Z1.5 F540.0 E326.926\n"+
"G1 X88.23 Y163.17 Z1.5 F540.0 E336.601\n"+
"G1 X88.35 Y162.39 Z1.5 F540.0 E346.254\n"+
"G1 X88.35 Y161.59 Z1.5 F540.0 E355.934\n"+
"G1 X88.23 Y160.81 Z1.5 F540.0 E365.599\n"+
"G1 X87.99 Y160.06 Z1.5 F540.0 E375.262\n"+
"G1 X87.69 Y159.48 Z1.5 F540.0 E383.177\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<loop> inner )\n"+
"M108 S100.0\n"+
"M108 S100.0\n"+
"G1 X87.94 Y159.0 Z1.5 F1080.0 E386.218\n"+
"G1 X87.52 Y158.41 Z1.5 F1080.0 E390.215\n"+
"G1 X86.91 Y157.8 Z1.5 F1080.0 E395.023\n"+
"G1 X86.21 Y157.29 Z1.5 F1080.0 E399.819\n"+
"G1 X85.44 Y156.9 Z1.5 F1080.0 E404.624\n"+
"G1 X84.61 Y156.64 Z1.5 F1080.0 E409.426\n"+
"G1 X83.76 Y156.5 Z1.5 F1080.0 E414.218\n"+
"G1 X82.9 Y156.5 Z1.5 F1080.0 E419.029\n"+
"G1 X82.04 Y156.64 Z1.5 F1080.0 E423.827\n"+
"G1 X81.22 Y156.9 Z1.5 F1080.0 E428.624\n"+
"G1 X80.45 Y157.29 Z1.5 F1080.0 E433.429\n"+
"G1 X79.75 Y157.8 Z1.5 F1080.0 E438.225\n"+
"G1 X79.14 Y158.41 Z1.5 F1080.0 E443.033\n"+
"G1 X78.63 Y159.11 Z1.5 F1080.0 E447.829\n"+
"G1 X78.24 Y159.88 Z1.5 F1080.0 E452.634\n"+
"G1 X77.97 Y160.7 Z1.5 F1080.0 E457.431\n"+
"G1 X77.84 Y161.56 Z1.5 F1080.0 E462.228\n"+
"G1 X77.84 Y162.42 Z1.5 F1080.0 E467.04\n"+
"G1 X77.97 Y163.28 Z1.5 F1080.0 E471.837\n"+
"G1 X78.24 Y164.1 Z1.5 F1080.0 E476.634\n"+
"G1 X78.63 Y164.87 Z1.5 F1080.0 E481.439\n"+
"G1 X79.14 Y165.57 Z1.5 F1080.0 E486.235\n"+
"G1 X79.75 Y166.18 Z1.5 F1080.0 E491.043\n"+
"G1 X80.45 Y166.69 Z1.5 F1080.0 E495.839\n"+
"G1 X81.22 Y167.08 Z1.5 F1080.0 E500.644\n"+
"G1 X82.04 Y167.34 Z1.5 F1080.0 E505.439\n"+
"G1 X82.9 Y167.48 Z1.5 F1080.0 E510.238\n"+
"G1 X83.76 Y167.48 Z1.5 F1080.0 E515.049\n"+
"G1 X84.61 Y167.34 Z1.5 F1080.0 E519.842\n"+
"G1 X85.44 Y167.08 Z1.5 F1080.0 E524.642\n"+
"G1 X86.21 Y166.69 Z1.5 F1080.0 E529.447\n"+
"G1 X86.91 Y166.18 Z1.5 F1080.0 E534.243\n"+
"G1 X87.52 Y165.57 Z1.5 F1080.0 E539.051\n"+
"G1 X88.03 Y164.87 Z1.5 F1080.0 E543.847\n"+
"G1 X88.42 Y164.1 Z1.5 F1080.0 E548.653\n"+
"G1 X88.68 Y163.28 Z1.5 F1080.0 E553.449\n"+
"G1 X88.82 Y162.42 Z1.5 F1080.0 E558.247\n"+
"G1 X88.82 Y161.56 Z1.5 F1080.0 E563.058\n"+
"G1 X88.68 Y160.7 Z1.5 F1080.0 E567.856\n"+
"G1 X88.42 Y159.88 Z1.5 F1080.0 E572.652\n"+
"G1 X88.09 Y159.24 Z1.5 F1080.0 E576.66\n"+
"G1 F240.0\n"+
"G1 E576.66\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.79 Y152.67 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E576.66\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.29 Y153.24 Z1.5 F1080.0 E4.176\n"+
"G1 X100.65 Y153.5 Z1.5 F1080.0 E6.667\n"+
"G1 X101.05 Y153.7 Z1.5 F1080.0 E9.149\n"+
"G1 X101.48 Y153.84 Z1.5 F1080.0 E11.64\n"+
"G1 X101.92 Y153.91 Z1.5 F1080.0 E14.136\n"+
"G1 X102.37 Y153.91 Z1.5 F1080.0 E16.625\n"+
"G1 X102.81 Y153.84 Z1.5 F1080.0 E19.116\n"+
"G1 X103.24 Y153.7 Z1.5 F1080.0 E21.612\n"+
"G1 X103.64 Y153.5 Z1.5 F1080.0 E24.094\n"+
"G1 X104.0 Y153.24 Z1.5 F1080.0 E26.585\n"+
"G1 X104.32 Y152.92 Z1.5 F1080.0 E29.083\n"+
"G1 X104.58 Y152.56 Z1.5 F1080.0 E31.574\n"+
"G1 X104.78 Y152.16 Z1.5 F1080.0 E34.056\n"+
"G1 X104.92 Y151.73 Z1.5 F1080.0 E36.55\n"+
"G1 X104.99 Y151.29 Z1.5 F1080.0 E39.042\n"+
"G1 X104.99 Y150.84 Z1.5 F1080.0 E41.531\n"+
"G1 X104.92 Y150.4 Z1.5 F1080.0 E44.023\n"+
"G1 X104.78 Y149.97 Z1.5 F1080.0 E46.517\n"+
"G1 X104.58 Y149.57 Z1.5 F1080.0 E49.0\n"+
"G1 X104.32 Y149.21 Z1.5 F1080.0 E51.49\n"+
"G1 X104.0 Y148.89 Z1.5 F1080.0 E53.988\n"+
"G1 X103.64 Y148.63 Z1.5 F1080.0 E56.479\n"+
"G1 X103.24 Y148.43 Z1.5 F1080.0 E58.961\n"+
"G1 X102.81 Y148.29 Z1.5 F1080.0 E61.457\n"+
"G1 X102.37 Y148.22 Z1.5 F1080.0 E63.948\n"+
"G1 X101.92 Y148.22 Z1.5 F1080.0 E66.437\n"+
"G1 X101.48 Y148.29 Z1.5 F1080.0 E68.933\n"+
"G1 X101.05 Y148.43 Z1.5 F1080.0 E71.424\n"+
"G1 X100.65 Y148.63 Z1.5 F1080.0 E73.906\n"+
"G1 X100.29 Y148.89 Z1.5 F1080.0 E76.397\n"+
"G1 X99.97 Y149.21 Z1.5 F1080.0 E78.899\n"+
"G1 X99.71 Y149.57 Z1.5 F1080.0 E81.386\n"+
"G1 X99.51 Y149.97 Z1.5 F1080.0 E83.868\n"+
"G1 X99.37 Y150.4 Z1.5 F1080.0 E86.365\n"+
"G1 X99.3 Y150.84 Z1.5 F1080.0 E88.856\n"+
"G1 X99.3 Y151.29 Z1.5 F1080.0 E91.345\n"+
"G1 X99.37 Y151.73 Z1.5 F1080.0 E93.835\n"+
"G1 X99.64 Y152.43 Z1.5 F1080.0 E98.004\n"+
"G1 F240.0\n"+
"G1 E98.004\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.82 Y149.64 Z1.5 F3000.0\n"+
"G1 X104.22 Y146.6 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E98.004\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.22 Y147.17 Z1.5 F1080.0 E6.395\n"+
"G1 X106.04 Y147.43 Z1.5 F1080.0 E11.191\n"+
"G1 X106.9 Y147.57 Z1.5 F1080.0 E15.994\n"+
"G1 X107.76 Y147.57 Z1.5 F1080.0 E20.806\n"+
"G1 X108.61 Y147.43 Z1.5 F1080.0 E25.598\n"+
"G1 X109.44 Y147.17 Z1.5 F1080.0 E30.394\n"+
"G1 X110.21 Y146.77 Z1.5 F1080.0 E35.204\n"+
"G1 X110.91 Y146.26 Z1.5 F1080.0 E40.0\n"+
"G1 X111.52 Y145.65 Z1.5 F1080.0 E44.809\n"+
"G1 X112.03 Y144.96 Z1.5 F1080.0 E49.605\n"+
"G1 X112.42 Y144.18 Z1.5 F1080.0 E54.41\n"+
"G1 X112.68 Y143.36 Z1.5 F1080.0 E59.206\n"+
"G1 X112.82 Y142.51 Z1.5 F1080.0 E64.004\n"+
"G1 X112.82 Y141.64 Z1.5 F1080.0 E68.815\n"+
"G1 X112.68 Y140.79 Z1.5 F1080.0 E73.613\n"+
"G1 X112.42 Y139.97 Z1.5 F1080.0 E78.409\n"+
"G1 X112.03 Y139.2 Z1.5 F1080.0 E83.214\n"+
"G1 X111.52 Y138.5 Z1.5 F1080.0 E88.011\n"+
"G1 X110.91 Y137.89 Z1.5 F1080.0 E92.819\n"+
"G1 X110.21 Y137.38 Z1.5 F1080.0 E97.618\n"+
"G1 X109.44 Y136.99 Z1.5 F1080.0 E102.426\n"+
"G1 X108.61 Y136.72 Z1.5 F1080.0 E107.222\n"+
"G1 X107.76 Y136.59 Z1.5 F1080.0 E112.014\n"+
"G1 X106.9 Y136.59 Z1.5 F1080.0 E116.826\n"+
"G1 X106.04 Y136.72 Z1.5 F1080.0 E121.629\n"+
"G1 X105.22 Y136.99 Z1.5 F1080.0 E126.425\n"+
"G1 X104.45 Y137.38 Z1.5 F1080.0 E131.223\n"+
"G1 X103.75 Y137.89 Z1.5 F1080.0 E136.022\n"+
"G1 X103.14 Y138.5 Z1.5 F1080.0 E140.83\n"+
"G1 X102.63 Y139.2 Z1.5 F1080.0 E145.627\n"+
"G1 X102.24 Y139.97 Z1.5 F1080.0 E150.432\n"+
"G1 X101.97 Y140.79 Z1.5 F1080.0 E155.228\n"+
"G1 X101.84 Y141.64 Z1.5 F1080.0 E160.026\n"+
"G1 X101.84 Y142.51 Z1.5 F1080.0 E164.837\n"+
"G1 X101.97 Y143.36 Z1.5 F1080.0 E169.635\n"+
"G1 X102.24 Y144.18 Z1.5 F1080.0 E174.431\n"+
"G1 X102.63 Y144.96 Z1.5 F1080.0 E179.236\n"+
"G1 X103.14 Y145.65 Z1.5 F1080.0 E184.032\n"+
"G1 X103.98 Y146.43 Z1.5 F1080.0 E190.413\n"+
"G1 F240.0\n"+
"G1 E190.413\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X102.1 Y143.33 Z1.5 F3000.0\n"+
"G1 X101.97 Y142.5 Z1.5 F3000.0\n"+
"G1 X101.97 Y141.66 Z1.5 F3000.0\n"+
"G1 X111.45 Y116.71 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.413\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.16 Y116.82 Z1.5 F1080.0 E3.999\n"+
"G1 X113.02 Y116.82 Z1.5 F1080.0 E8.81\n"+
"G1 X113.88 Y116.68 Z1.5 F1080.0 E13.608\n"+
"G1 X114.7 Y116.42 Z1.5 F1080.0 E18.404\n"+
"G1 X115.47 Y116.02 Z1.5 F1080.0 E23.209\n"+
"G1 X116.17 Y115.52 Z1.5 F1080.0 E28.005\n"+
"G1 X116.78 Y114.9 Z1.5 F1080.0 E32.813\n"+
"G1 X117.29 Y114.21 Z1.5 F1080.0 E37.61\n"+
"G1 X117.68 Y113.43 Z1.5 F1080.0 E42.415\n"+
"G1 X117.95 Y112.61 Z1.5 F1080.0 E47.211\n"+
"G1 X118.08 Y111.76 Z1.5 F1080.0 E52.009\n"+
"G1 X118.08 Y110.89 Z1.5 F1080.0 E56.82\n"+
"G1 X117.95 Y110.04 Z1.5 F1080.0 E61.618\n"+
"G1 X117.68 Y109.22 Z1.5 F1080.0 E66.414\n"+
"G1 X117.29 Y108.45 Z1.5 F1080.0 E71.219\n"+
"G1 X116.78 Y107.75 Z1.5 F1080.0 E76.015\n"+
"G1 X116.17 Y107.14 Z1.5 F1080.0 E80.824\n"+
"G1 X115.47 Y106.63 Z1.5 F1080.0 E85.62\n"+
"G1 X114.7 Y106.24 Z1.5 F1080.0 E90.425\n"+
"G1 X113.88 Y105.97 Z1.5 F1080.0 E95.221\n"+
"G1 X113.02 Y105.84 Z1.5 F1080.0 E100.019\n"+
"G1 X112.16 Y105.84 Z1.5 F1080.0 E104.83\n"+
"G1 X111.3 Y105.97 Z1.5 F1080.0 E109.628\n"+
"G1 X110.48 Y106.24 Z1.5 F1080.0 E114.424\n"+
"G1 X109.71 Y106.63 Z1.5 F1080.0 E119.229\n"+
"G1 X109.01 Y107.14 Z1.5 F1080.0 E124.025\n"+
"G1 X108.4 Y107.75 Z1.5 F1080.0 E128.834\n"+
"G1 X107.89 Y108.45 Z1.5 F1080.0 E133.63\n"+
"G1 X107.5 Y109.22 Z1.5 F1080.0 E138.435\n"+
"G1 X107.24 Y110.04 Z1.5 F1080.0 E143.231\n"+
"G1 X107.1 Y110.89 Z1.5 F1080.0 E148.029\n"+
"G1 X107.1 Y111.76 Z1.5 F1080.0 E152.84\n"+
"G1 X107.24 Y112.61 Z1.5 F1080.0 E157.638\n"+
"G1 X107.5 Y113.43 Z1.5 F1080.0 E162.434\n"+
"G1 X107.89 Y114.21 Z1.5 F1080.0 E167.239\n"+
"G1 X108.4 Y114.9 Z1.5 F1080.0 E172.036\n"+
"G1 X109.01 Y115.52 Z1.5 F1080.0 E176.844\n"+
"G1 X109.71 Y116.02 Z1.5 F1080.0 E181.64\n"+
"G1 X110.48 Y116.42 Z1.5 F1080.0 E186.445\n"+
"G1 X111.17 Y116.64 Z1.5 F1080.0 E190.44\n"+
"G1 F240.0\n"+
"G1 E190.44\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X108.0 Y114.14 Z1.5 F3000.0\n"+
"G1 X107.62 Y113.39 Z1.5 F3000.0\n"+
"G1 X107.36 Y112.58 Z1.5 F3000.0\n"+
"G1 X107.23 Y111.75 Z1.5 F3000.0\n"+
"G1 X107.23 Y110.9 Z1.5 F3000.0\n"+
"G1 X111.45 Y102.78 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.44\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.52 Y102.78 Z1.5 F1080.0 E22.628\n"+
"G1 X115.52 Y88.37 Z1.5 F1080.0 E102.683\n"+
"G1 X109.11 Y88.37 Z1.5 F1080.0 E138.294\n"+
"G1 X109.11 Y102.78 Z1.5 F1080.0 E218.35\n"+
"G1 X111.16 Y102.78 Z1.5 F1080.0 E229.733\n"+
"G1 F240.0\n"+
"G1 E229.733\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X107.23 Y110.9 Z1.5 F3000.0\n"+
"G1 X112.39 Y130.22 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E229.733\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.65 Y130.35 Z1.5 F1080.0 E4.166\n"+
"G1 X111.24 Y130.52 Z1.5 F1080.0 E6.658\n"+
"G1 X110.85 Y130.76 Z1.5 F1080.0 E9.16\n"+
"G1 X110.51 Y131.05 Z1.5 F1080.0 E11.642\n"+
"G1 X110.22 Y131.39 Z1.5 F1080.0 E14.132\n"+
"G1 X109.99 Y131.77 Z1.5 F1080.0 E16.625\n"+
"G1 X109.82 Y132.19 Z1.5 F1080.0 E19.116\n"+
"G1 X109.71 Y132.62 Z1.5 F1080.0 E21.614\n"+
"G1 X109.68 Y133.07 Z1.5 F1080.0 E24.098\n"+
"G1 X109.71 Y133.52 Z1.5 F1080.0 E26.583\n"+
"G1 X109.82 Y133.95 Z1.5 F1080.0 E29.081\n"+
"G1 X109.99 Y134.37 Z1.5 F1080.0 E31.572\n"+
"G1 X110.22 Y134.75 Z1.5 F1080.0 E34.065\n"+
"G1 X110.51 Y135.09 Z1.5 F1080.0 E36.555\n"+
"G1 X110.85 Y135.38 Z1.5 F1080.0 E39.033\n"+
"G1 X111.24 Y135.62 Z1.5 F1080.0 E41.537\n"+
"G1 X111.65 Y135.79 Z1.5 F1080.0 E44.028\n"+
"G1 X112.09 Y135.89 Z1.5 F1080.0 E46.524\n"+
"G1 X112.53 Y135.93 Z1.5 F1080.0 E49.009\n"+
"G1 X112.98 Y135.89 Z1.5 F1080.0 E51.494\n"+
"G1 X113.42 Y135.79 Z1.5 F1080.0 E53.99\n"+
"G1 X113.83 Y135.62 Z1.5 F1080.0 E56.481\n"+
"G1 X114.21 Y135.38 Z1.5 F1080.0 E58.98\n"+
"G1 X114.55 Y135.09 Z1.5 F1080.0 E61.463\n"+
"G1 X114.84 Y134.75 Z1.5 F1080.0 E63.949\n"+
"G1 X115.08 Y134.37 Z1.5 F1080.0 E66.442\n"+
"G1 X115.25 Y133.95 Z1.5 F1080.0 E68.935\n"+
"G1 X115.36 Y133.52 Z1.5 F1080.0 E71.432\n"+
"G1 X115.39 Y133.07 Z1.5 F1080.0 E73.917\n"+
"G1 X115.36 Y132.62 Z1.5 F1080.0 E76.402\n"+
"G1 X115.25 Y132.19 Z1.5 F1080.0 E78.899\n"+
"G1 X115.08 Y131.77 Z1.5 F1080.0 E81.391\n"+
"G1 X114.84 Y131.39 Z1.5 F1080.0 E83.885\n"+
"G1 X114.55 Y131.05 Z1.5 F1080.0 E86.371\n"+
"G1 X114.21 Y130.76 Z1.5 F1080.0 E88.857\n"+
"G1 X113.83 Y130.52 Z1.5 F1080.0 E91.354\n"+
"G1 X113.42 Y130.35 Z1.5 F1080.0 E93.847\n"+
"G1 X112.68 Y130.22 Z1.5 F1080.0 E98.012\n"+
"G1 F240.0\n"+
"G1 E98.012\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> outer )\n"+
"G1 X124.68 Y137.39 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E98.012\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.91 Y162.98 Z1.5 F1080.0 E164.114\n"+
"G1 X90.49 Y174.18 Z1.5 F1080.0 E288.667\n"+
"G1 X78.77 Y171.04 Z1.5 F1080.0 E356.107\n"+
"G1 X73.08 Y161.18 Z1.5 F1080.0 E419.352\n"+
"G1 X76.32 Y149.65 Z1.5 F1080.0 E485.926\n"+
"G1 X93.57 Y139.69 Z1.5 F1080.0 E596.564\n"+
"G1 X98.22 Y131.74 Z1.5 F1080.0 E647.744\n"+
"G1 X98.22 Y111.55 Z1.5 F1080.0 E759.91\n"+
"G1 X105.52 Y104.25 Z1.5 F1080.0 E817.272\n"+
"G1 X105.52 Y88.37 Z1.5 F1080.0 E905.472\n"+
"G1 X104.02 Y88.37 Z1.5 F1080.0 E913.806\n"+
"G1 X104.02 Y85.78 Z1.5 F1080.0 E928.194\n"+
"G1 X120.61 Y85.78 Z1.5 F1080.0 E1020.361\n"+
"G1 X120.61 Y88.37 Z1.5 F1080.0 E1034.75\n"+
"G1 X119.11 Y88.37 Z1.5 F1080.0 E1043.083\n"+
"G1 X119.11 Y103.57 Z1.5 F1080.0 E1127.506\n"+
"G1 X126.96 Y111.42 Z1.5 F1080.0 E1189.189\n"+
"G1 X126.96 Y133.44 Z1.5 F1080.0 E1311.522\n"+
"G1 X124.82 Y137.14 Z1.5 F1080.0 E1335.272\n"+
"G1 F240.0\n"+
"G1 E1335.272\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"G1 X87.62 Y173.32 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E1335.272\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X125.98 Y134.97 Z1.5 F1080.0 E301.337\n"+
"G1 F240.0\n"+
"G1 E301.337\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y132.8 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E301.337\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X86.62 Y173.05 Z1.5 F1080.0 E316.265\n"+
"G1 F240.0\n"+
"G1 E316.265\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X85.11 Y172.65 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E316.265\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y130.89 Z1.5 F1080.0 E328.098\n"+
"G1 F240.0\n"+
"G1 E328.098\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y129.62 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E328.098\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.61 Y143.88 Z1.5 F1080.0 E112.045\n"+
"G1 F240.0\n"+
"G1 E112.045\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.91 Y141.67 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E112.045\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y128.34 Z1.5 F1080.0 E105.44\n"+
"G1 X126.87 Y127.71 Z1.5 F1080.0 E109.768\n"+
"G1 F240.0\n"+
"G1 E109.768\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y126.44 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E109.768\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.99 Y139.97 Z1.5 F1080.0 E107.744\n"+
"G1 X112.71 Y140.59 Z1.5 F1080.0 E111.5\n"+
"G1 F240.0\n"+
"G1 E111.5\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.15 Y139.25 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E111.5\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y125.16 Z1.5 F1080.0 E111.399\n"+
"G1 X126.87 Y124.53 Z1.5 F1080.0 E115.728\n"+
"G1 F240.0\n"+
"G1 E115.728\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y123.25 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E115.728\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.63 Y138.5 Z1.5 F1080.0 E119.784\n"+
"G1 X112.22 Y135.99 Z1.5 F1080.0 E134.096\n"+
"G1 X110.64 Y137.58 Z1.5 F1080.0 E146.572\n"+
"G1 X110.53 Y136.95 Z1.5 F1080.0 E150.131\n"+
"G1 X111.23 Y135.71 Z1.5 F1080.0 E158.027\n"+
"G1 X110.6 Y135.86 Z1.5 F1080.0 E161.618\n"+
"G1 X109.85 Y137.1 Z1.5 F1080.0 E169.667\n"+
"G1 X109.62 Y136.48 Z1.5 F1080.0 E173.305\n"+
"G1 X110.15 Y135.48 Z1.5 F1080.0 E179.602\n"+
"G1 X110.19 Y134.85 Z1.5 F1080.0 E183.142\n"+
"G1 X109.56 Y134.7 Z1.5 F1080.0 E186.722\n"+
"G1 X109.05 Y136.3 Z1.5 F1080.0 E196.018\n"+
"G1 X108.43 Y136.6 Z1.5 F1080.0 E199.847\n"+
"G1 F240.0\n"+
"G1 E199.847\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.26 Y136.5 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E199.847\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.75 Y134.02 Z1.5 F1080.0 E19.489\n"+
"G1 F240.0\n"+
"G1 E19.489\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.76 Y132.1 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E19.489\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.16 Y132.8 Z1.5 F1080.0 E5.14\n"+
"G1 X104.7 Y137.15 Z1.5 F1080.0 E39.764\n"+
"G1 F240.0\n"+
"G1 E39.764\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X102.41 Y139.45 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E39.764\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X85.76 Y156.46 Z1.5 F1080.0 E132.253\n"+
"G1 X85.14 Y156.71 Z1.5 F1080.0 E135.966\n"+
"G1 F240.0\n"+
"G1 E135.966\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X84.11 Y156.47 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E135.966\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y113.71 Z1.5 F1080.0 E335.939\n"+
"G1 F240.0\n"+
"G1 E335.939\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y114.98 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E335.939\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y115.62 Z1.5 F1080.0 E4.328\n"+
"G1 X111.56 Y130.29 Z1.5 F1080.0 E120.371\n"+
"G1 F240.0\n"+
"G1 E120.371\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.48 Y130.28 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E120.371\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y116.89 Z1.5 F1080.0 E105.221\n"+
"G1 F240.0\n"+
"G1 E105.221\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y118.16 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E105.221\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y118.8 Z1.5 F1080.0 E4.328\n"+
"G1 X114.95 Y130.69 Z1.5 F1080.0 E96.121\n"+
"G1 X114.31 Y130.72 Z1.5 F1080.0 E99.661\n"+
"G1 F240.0\n"+
"G1 E99.661\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y120.07 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E99.661\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y120.71 Z1.5 F1080.0 E4.333\n"+
"G1 X115.32 Y131.14 Z1.5 F1080.0 E88.947\n"+
"G1 X115.18 Y131.77 Z1.5 F1080.0 E92.538\n"+
"G1 X126.87 Y121.34 Z1.5 F1080.0 E179.582\n"+
"G1 X126.42 Y121.98 Z1.5 F1080.0 E183.91\n"+
"G1 X115.46 Y132.76 Z1.5 F1080.0 E269.34\n"+
"G1 F240.0\n"+
"G1 E269.34\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X123.37 Y139.49 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E269.34\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X89.13 Y173.73 Z1.5 F1080.0 E269.015\n"+
"G1 F240.0\n"+
"G1 E269.015\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X90.13 Y173.99 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E269.015\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X121.63 Y142.5 Z1.5 F1080.0 E247.46\n"+
"G1 F240.0\n"+
"G1 E247.46\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y147.01 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E247.46\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X93.95 Y172.09 Z1.5 F1080.0 E196.976\n"+
"G1 F240.0\n"+
"G1 E196.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X96.96 Y170.35 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E196.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.28 Y150.03 Z1.5 F1080.0 E159.657\n"+
"G1 F240.0\n"+
"G1 E159.657\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.67 Y154.54 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E159.657\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.48 Y167.74 Z1.5 F1080.0 E103.678\n"+
"G1 F240.0\n"+
"G1 E103.678\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.49 Y166.0 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E103.678\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.94 Y157.55 Z1.5 F1080.0 E66.358\n"+
"G1 F240.0\n"+
"G1 E66.358\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.33 Y162.07 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E66.358\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.01 Y163.39 Z1.5 F1080.0 E10.383\n"+
"G1 F240.0\n"+
"G1 E10.383\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X84.11 Y172.38 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E10.383\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.87 Y154.44 Z1.5 F1080.0 E140.233\n"+
"G1 X102.51 Y153.98 Z1.5 F1080.0 E144.618\n"+
"G1 F240.0\n"+
"G1 E144.618\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X82.6 Y171.98 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E144.618\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X83.22 Y171.68 Z1.5 F1080.0 E3.816\n"+
"G1 X100.87 Y153.71 Z1.5 F1080.0 E143.727\n"+
"G1 F240.0\n"+
"G1 E143.727\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X100.12 Y153.19 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E143.727\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X82.22 Y171.41 Z1.5 F1080.0 E141.883\n"+
"G1 X81.6 Y171.71 Z1.5 F1080.0 E145.697\n"+
"G1 F240.0\n"+
"G1 E145.697\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X79.09 Y171.04 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E145.697\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.71 Y170.74 Z1.5 F1080.0 E3.821\n"+
"G1 X81.98 Y167.88 Z1.5 F1080.0 E24.091\n"+
"G1 X82.6 Y167.52 Z1.5 F1080.0 E28.069\n"+
"G1 X80.09 Y171.31 Z1.5 F1080.0 E53.275\n"+
"G1 X80.71 Y171.01 Z1.5 F1080.0 E57.092\n"+
"G1 X83.84 Y167.56 Z1.5 F1080.0 E82.951\n"+
"G1 F240.0\n"+
"G1 E82.951\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.25 Y169.97 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E82.951\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X81.1 Y167.12 Z1.5 F1080.0 E22.392\n"+
"G1 F240.0\n"+
"G1 E22.392\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X80.28 Y166.67 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E22.392\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.64 Y166.77 Z1.5 F1080.0 E3.562\n"+
"G1 X77.94 Y168.53 Z1.5 F1080.0 E17.184\n"+
"G1 X77.78 Y169.16 Z1.5 F1080.0 E20.781\n"+
"G1 F240.0\n"+
"G1 E20.781\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.08 Y167.95 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E20.781\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.24 Y165.79 Z1.5 F1080.0 E16.939\n"+
"G1 F240.0\n"+
"G1 E16.939\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.05 Y163.8 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E16.939\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.8 Y164.42 Z1.5 F1080.0 E3.713\n"+
"G1 X76.08 Y165.3 Z1.5 F1080.0 E14.476\n"+
"G1 X75.92 Y165.93 Z1.5 F1080.0 E18.078\n"+
"G1 X78.68 Y165.08 Z1.5 F1080.0 E34.11\n"+
"G1 X76.78 Y166.51 Z1.5 F1080.0 E47.333\n"+
"G1 X76.62 Y167.14 Z1.5 F1080.0 E50.929\n"+
"G1 F240.0\n"+
"G1 E50.929\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.8 Y162.78 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.929\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.61 Y164.5 Z1.5 F1080.0 E15.49\n"+
"G1 X75.45 Y165.13 Z1.5 F1080.0 E19.087\n"+
"G1 F240.0\n"+
"G1 E19.087\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X79.84 Y157.9 Z1.5 F3000.0\n"+
"G1 X126.41 Y110.99 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E19.087\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X125.77 Y110.99 Z1.5 F1080.0 E3.533\n"+
"G1 X74.45 Y162.48 Z1.5 F1080.0 E407.418\n"+
"G1 X74.29 Y163.11 Z1.5 F1080.0 E411.018\n"+
"G1 X77.87 Y160.8 Z1.5 F1080.0 E434.666\n"+
"G1 X77.3 Y161.49 Z1.5 F1080.0 E439.6\n"+
"G1 X74.76 Y163.92 Z1.5 F1080.0 E459.154\n"+
"G1 F240.0\n"+
"G1 E459.154\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X125.45 Y110.04 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E459.154\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.59 Y161.9 Z1.5 F1080.0 E407.451\n"+
"G1 F240.0\n"+
"G1 E407.451\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X73.22 Y160.99 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E407.451\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X124.82 Y109.4 Z1.5 F1080.0 E405.353\n"+
"G1 F240.0\n"+
"G1 E405.353\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X95.17 Y137.14 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E405.353\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X123.86 Y108.45 Z1.5 F1080.0 E225.441\n"+
"G1 F240.0\n"+
"G1 E225.441\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X123.22 Y107.81 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E225.441\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.86 Y113.18 Z1.5 F1080.0 E42.171\n"+
"G1 F240.0\n"+
"G1 E42.171\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X118.17 Y110.95 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E42.171\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X122.27 Y106.86 Z1.5 F1080.0 E32.205\n"+
"G1 F240.0\n"+
"G1 E32.205\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X121.63 Y106.22 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E32.205\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X121.0 Y106.22 Z1.5 F1080.0 E3.533\n"+
"G1 X118.26 Y109.25 Z1.5 F1080.0 E26.236\n"+
"G1 X117.98 Y109.87 Z1.5 F1080.0 E29.995\n"+
"G1 F240.0\n"+
"G1 E29.995\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.42 Y108.52 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E29.995\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.68 Y105.26 Z1.5 F1080.0 E25.574\n"+
"G1 F240.0\n"+
"G1 E25.574\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.04 Y104.63 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E25.574\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.9 Y107.77 Z1.5 F1080.0 E24.678\n"+
"G1 F240.0\n"+
"G1 E24.678\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.92 Y106.85 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.678\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.55 Y106.76 Z1.5 F1080.0 E3.545\n"+
"G1 X119.09 Y104.31 Z1.5 F1080.0 E23.166\n"+
"G1 X119.09 Y103.67 Z1.5 F1080.0 E26.7\n"+
"G1 F240.0\n"+
"G1 E26.7\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y102.47 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.7\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.13 Y106.36 Z1.5 F1080.0 E30.575\n"+
"G1 F240.0\n"+
"G1 E30.575\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.72 Y105.86 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E30.575\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.34 Y105.56 Z1.5 F1080.0 E3.824\n"+
"G1 X118.57 Y101.19 Z1.5 F1080.0 E37.584\n"+
"G1 X119.02 Y100.56 Z1.5 F1080.0 E41.917\n"+
"G1 F240.0\n"+
"G1 E41.917\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y102.69 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E41.917\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y102.06 Z1.5 F1080.0 E4.325\n"+
"G1 X118.57 Y99.92 Z1.5 F1080.0 E22.643\n"+
"G1 X119.02 Y99.28 Z1.5 F1080.0 E26.976\n"+
"G1 X115.61 Y100.79 Z1.5 F1080.0 E47.675\n"+
"G1 X118.57 Y98.01 Z1.5 F1080.0 E70.208\n"+
"G1 X119.02 Y97.38 Z1.5 F1080.0 E74.541\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y99.51 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y98.88 Z1.5 F1080.0 E4.325\n"+
"G1 X118.57 Y96.74 Z1.5 F1080.0 E22.643\n"+
"G1 X119.02 Y96.1 Z1.5 F1080.0 E26.976\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y94.19 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.57 Y94.83 Z1.5 F1080.0 E4.333\n"+
"G1 X115.61 Y97.6 Z1.5 F1080.0 E26.866\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y96.33 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y95.69 Z1.5 F1080.0 E4.325\n"+
"G1 X118.57 Y93.56 Z1.5 F1080.0 E22.643\n"+
"G1 X119.02 Y92.92 Z1.5 F1080.0 E26.976\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y91.01 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.57 Y91.65 Z1.5 F1080.0 E4.333\n"+
"G1 X115.61 Y94.42 Z1.5 F1080.0 E26.866\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y93.15 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y92.51 Z1.5 F1080.0 E4.325\n"+
"G1 X118.57 Y90.38 Z1.5 F1080.0 E22.643\n"+
"G1 X119.02 Y89.74 Z1.5 F1080.0 E26.976\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.48 Y88.28 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.52 Y88.24 Z1.5 F1080.0 E0.354\n"+
"G1 F240.0\n"+
"G1 E0.354\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.52 Y86.33 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E0.354\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.07 Y86.97 Z1.5 F1080.0 E4.333\n"+
"G1 X115.61 Y91.24 Z1.5 F1080.0 E38.647\n"+
"G1 F240.0\n"+
"G1 E38.647\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y89.97 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E38.647\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.7 Y85.87 Z1.5 F1080.0 E32.154\n"+
"G1 F240.0\n"+
"G1 E32.154\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.24 Y88.5 Z1.5 F3000.0\n"+
"G1 X105.61 Y93.6 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E32.154\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.06 Y92.97 Z1.5 F1080.0 E4.325\n"+
"G1 X108.57 Y90.83 Z1.5 F1080.0 E22.643\n"+
"G1 X109.02 Y90.19 Z1.5 F1080.0 E26.976\n"+
"G1 X105.61 Y91.69 Z1.5 F1080.0 E47.675\n"+
"G1 X108.57 Y88.92 Z1.5 F1080.0 E70.208\n"+
"G1 X109.02 Y88.28 Z1.5 F1080.0 E74.541\n"+
"G1 X109.66 Y87.83 Z1.5 F1080.0 E78.874\n"+
"G1 X110.8 Y86.32 Z1.5 F1080.0 E89.375\n"+
"G1 X111.43 Y85.87 Z1.5 F1080.0 E93.703\n"+
"G1 X110.93 Y88.28 Z1.5 F1080.0 E107.379\n"+
"G1 X111.57 Y87.83 Z1.5 F1080.0 E111.712\n"+
"G1 X112.7 Y86.32 Z1.5 F1080.0 E122.213\n"+
"G1 X113.34 Y85.87 Z1.5 F1080.0 E126.546\n"+
"G1 X112.2 Y88.28 Z1.5 F1080.0 E141.35\n"+
"G1 X112.84 Y87.83 Z1.5 F1080.0 E145.683\n"+
"G1 X114.61 Y85.87 Z1.5 F1080.0 E160.366\n"+
"G1 X114.11 Y88.28 Z1.5 F1080.0 E174.041\n"+
"G1 X114.75 Y87.83 Z1.5 F1080.0 E178.374\n"+
"G1 X115.89 Y86.32 Z1.5 F1080.0 E188.875\n"+
"G1 X116.52 Y85.87 Z1.5 F1080.0 E193.204\n"+
"G1 X115.39 Y88.28 Z1.5 F1080.0 E208.008\n"+
"G1 X117.8 Y85.87 Z1.5 F1080.0 E226.943\n"+
"G1 F240.0\n"+
"G1 E226.943\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.16 Y85.87 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E226.943\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y90.42 Z1.5 F1080.0 E35.725\n"+
"G1 F240.0\n"+
"G1 E35.725\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y88.51 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E35.725\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.25 Y85.87 Z1.5 F1080.0 E20.726\n"+
"G1 F240.0\n"+
"G1 E20.726\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X106.98 Y85.87 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E20.726\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.57 Y88.28 Z1.5 F1080.0 E18.935\n"+
"G1 X105.07 Y85.87 Z1.5 F1080.0 E32.609\n"+
"G1 X104.11 Y86.83 Z1.5 F1080.0 E40.116\n"+
"G1 F240.0\n"+
"G1 E40.116\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.11 Y86.19 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E40.116\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.43 Y85.87 Z1.5 F1080.0 E2.514\n"+
"G1 F240.0\n"+
"G1 E2.514\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.39 Y89.43 Z1.5 F3000.0\n"+
"G1 X105.61 Y96.78 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E2.514\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.06 Y96.15 Z1.5 F1080.0 E4.325\n"+
"G1 X108.57 Y94.01 Z1.5 F1080.0 E22.643\n"+
"G1 X109.02 Y93.37 Z1.5 F1080.0 E26.976\n"+
"G1 X105.61 Y94.88 Z1.5 F1080.0 E47.675\n"+
"G1 X108.57 Y92.1 Z1.5 F1080.0 E70.208\n"+
"G1 X109.02 Y91.47 Z1.5 F1080.0 E74.541\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y99.97 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.06 Y99.33 Z1.5 F1080.0 E4.325\n"+
"G1 X108.57 Y97.19 Z1.5 F1080.0 E22.643\n"+
"G1 X109.02 Y96.56 Z1.5 F1080.0 E26.976\n"+
"G1 X105.61 Y98.06 Z1.5 F1080.0 E47.675\n"+
"G1 X108.57 Y95.28 Z1.5 F1080.0 E70.208\n"+
"G1 X109.02 Y94.65 Z1.5 F1080.0 E74.541\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y103.15 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.06 Y102.51 Z1.5 F1080.0 E4.325\n"+
"G1 X108.57 Y100.38 Z1.5 F1080.0 E22.643\n"+
"G1 X109.02 Y99.74 Z1.5 F1080.0 E26.976\n"+
"G1 X105.61 Y101.24 Z1.5 F1080.0 E47.675\n"+
"G1 X108.57 Y98.47 Z1.5 F1080.0 E70.208\n"+
"G1 X109.02 Y97.83 Z1.5 F1080.0 E74.541\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.39 Y104.2 Z1.5 F3000.0\n"+
"G1 X98.31 Y111.72 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.57 Y101.65 Z1.5 F1080.0 E79.887\n"+
"G1 X109.02 Y101.01 Z1.5 F1080.0 E84.22\n"+
"G1 F240.0\n"+
"G1 E84.22\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.07 Y102.87 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E84.22\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y113.0 Z1.5 F1080.0 E80.26\n"+
"G1 X98.31 Y113.63 Z1.5 F1080.0 E84.588\n"+
"G1 F240.0\n"+
"G1 E84.588\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y114.9 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E84.588\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.34 Y102.87 Z1.5 F1080.0 E94.521\n"+
"G1 F240.0\n"+
"G1 E94.521\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.25 Y102.87 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E94.521\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y116.81 Z1.5 F1080.0 E109.523\n"+
"G1 F240.0\n"+
"G1 E109.523\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y118.09 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E109.523\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.63 Y108.76 Z1.5 F1080.0 E73.248\n"+
"G1 F240.0\n"+
"G1 E73.248\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.01 Y111.3 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E73.248\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y119.36 Z1.5 F1080.0 E64.088\n"+
"G1 X98.31 Y120.0 Z1.5 F1080.0 E68.421\n"+
"G1 F240.0\n"+
"G1 E68.421\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y121.27 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E68.421\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.82 Y113.08 Z1.5 F1080.0 E65.616\n"+
"G1 X107.12 Y112.46 Z1.5 F1080.0 E69.44\n"+
"G1 F240.0\n"+
"G1 E69.44\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.62 Y113.87 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E69.44\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y122.54 Z1.5 F1080.0 E68.888\n"+
"G1 X98.31 Y123.18 Z1.5 F1080.0 E73.216\n"+
"G1 F240.0\n"+
"G1 E73.216\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y124.45 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E73.216\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.03 Y115.29 Z1.5 F1080.0 E74.203\n"+
"G1 X108.11 Y114.65 Z1.5 F1080.0 E77.754\n"+
"G1 F240.0\n"+
"G1 E77.754\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.03 Y115.64 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E77.754\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.4 Y115.66 Z1.5 F1080.0 E3.535\n"+
"G1 X98.76 Y125.72 Z1.5 F1080.0 E80.939\n"+
"G1 X98.31 Y126.36 Z1.5 F1080.0 E85.262\n"+
"G1 F240.0\n"+
"G1 E85.262\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y127.63 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E85.262\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.78 Y116.16 Z1.5 F1080.0 E90.133\n"+
"G1 F240.0\n"+
"G1 E90.133\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X111.13 Y116.72 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E90.133\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.51 Y116.99 Z1.5 F1080.0 E3.758\n"+
"G1 X98.76 Y128.91 Z1.5 F1080.0 E96.722\n"+
"G1 X98.31 Y129.54 Z1.5 F1080.0 E101.05\n"+
"G1 F240.0\n"+
"G1 E101.05\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y130.81 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E101.05\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.22 Y116.91 Z1.5 F1080.0 E109.264\n"+
"G1 F240.0\n"+
"G1 E109.264\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.44 Y116.59 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E109.264\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X96.96 Y134.07 Z1.5 F1080.0 E137.34\n"+
"G1 F240.0\n"+
"G1 E137.34\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X86.42 Y157.34 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E137.34\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.75 Y142.01 Z1.5 F1080.0 E120.42\n"+
"G1 F240.0\n"+
"G1 E120.42\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.85 Y143.18 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E120.42\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.55 Y143.8 Z1.5 F1080.0 E3.829\n"+
"G1 X87.13 Y157.9 Z1.5 F1080.0 E115.877\n"+
"G1 F240.0\n"+
"G1 E115.877\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.01 Y158.94 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E115.877\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.1 Y158.3 Z1.5 F1080.0 E3.562\n"+
"G1 X102.35 Y144.6 Z1.5 F1080.0 E113.389\n"+
"G1 F240.0\n"+
"G1 E113.389\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.85 Y147.46 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E113.389\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.23 Y147.73 Z1.5 F1080.0 E3.756\n"+
"G1 X104.91 Y149.1 Z1.5 F1080.0 E11.561\n"+
"G1 X104.27 Y149.04 Z1.5 F1080.0 E15.103\n"+
"G1 X104.24 Y148.4 Z1.5 F1080.0 E18.642\n"+
"G1 X104.72 Y147.51 Z1.5 F1080.0 E24.232\n"+
"G1 X104.5 Y146.9 Z1.5 F1080.0 E27.862\n"+
"G1 X103.73 Y148.07 Z1.5 F1080.0 E35.646\n"+
"G1 X103.11 Y148.29 Z1.5 F1080.0 E39.311\n"+
"G1 X103.85 Y147.01 Z1.5 F1080.0 E47.55\n"+
"G1 X103.75 Y146.37 Z1.5 F1080.0 E51.102\n"+
"G1 X102.0 Y148.13 Z1.5 F1080.0 E64.867\n"+
"G1 X102.83 Y145.38 Z1.5 F1080.0 E80.795\n"+
"G1 X88.46 Y159.76 Z1.5 F1080.0 E193.751\n"+
"G1 F240.0\n"+
"G1 E193.751\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.9 Y162.5 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E193.751\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.15 Y152.65 Z1.5 F1080.0 E78.984\n"+
"G1 X99.37 Y152.03 Z1.5 F1080.0 E82.649\n"+
"G1 X88.86 Y161.26 Z1.5 F1080.0 E160.352\n"+
"G1 X89.22 Y160.64 Z1.5 F1080.0 E164.33\n"+
"G1 X99.21 Y150.92 Z1.5 F1080.0 E241.765\n"+
"G1 F240.0\n"+
"G1 E241.765\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.1 Y148.54 Z1.5 F3000.0\n"+
"G1 X101.93 Y148.35 Z1.5 F3000.0\n"+
"G1 X102.78 Y148.41 Z1.5 F3000.0\n"+
"G1 X104.79 Y149.79 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E241.765\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.92 Y147.66 Z1.5 F1080.0 E16.743\n"+
"G1 F240.0\n"+
"G1 E16.743\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.13 Y147.36 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E16.743\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.52 Y150.79 Z1.5 F1080.0 E27.641\n"+
"G1 X105.06 Y151.43 Z1.5 F1080.0 E32.026\n"+
"G1 F240.0\n"+
"G1 E32.026\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.57 Y148.74 Z1.5 F3000.0\n"+
"G1 X91.06 Y141.24 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E32.026\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.97 Y158.34 Z1.5 F1080.0 E134.295\n"+
"G1 F240.0\n"+
"G1 E134.295\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X74.47 Y156.56 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E134.295\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.05 Y142.98 Z1.5 F1080.0 E106.718\n"+
"G1 F240.0\n"+
"G1 E106.718\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X83.54 Y145.59 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E106.718\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.22 Y153.91 Z1.5 F1080.0 E65.352\n"+
"G1 F240.0\n"+
"G1 E65.352\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X75.72 Y152.14 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E65.352\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X80.52 Y147.33 Z1.5 F1080.0 E37.783\n"+
"G1 F240.0\n"+
"G1 E37.783\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.51 Y149.07 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E37.783\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X76.21 Y150.36 Z1.5 F1080.0 E10.206\n"+
"G1 F240.0\n"+
"G1 E10.206\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X82.14 Y156.53 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E10.206\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y112.43 Z1.5 F1080.0 E347.174\n"+
"G1 X126.87 Y111.8 Z1.5 F1080.0 E351.503\n"+
"G1 F240.0\n"+
"G1 E351.503\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.43 Y102.87 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E351.503\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.8 Y103.32 Z1.5 F1080.0 E4.328\n"+
"G1 X112.56 Y105.75 Z1.5 F1080.0 E22.657\n"+
"G1 F240.0\n"+
"G1 E22.657\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.03 Y106.37 Z1.5 F3000.0\n"+
"G1 F240.0\n"+
"G1 E22.657\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.52 Y102.87 Z1.5 F1080.0 E27.475\n"+
"G1 F240.0\n"+
"G1 E27.475\n"+
"G1 F1080.0\n"+
";\n"+
"(</surroundingLoop>)\n"+
"G1 F30.0\n"+
"(<layer> 1.8 )\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X93.055 Y139.175 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y131.549 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y111.258 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y103.957 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y89.078 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y89.078 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y85.078 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y85.078 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y89.078 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y89.078 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y103.277 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y111.128 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y133.629 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.426 Y163.491 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X90.593 Y174.941 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.302 Y171.647 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X72.316 Y161.279 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X75.721 Y149.182 Z1.8 </boundaryPoint>)\n"+
"(<perimeter> outer )\n"+
"M108 S110.0\n"+
"M108 S110.0\n"+
"G1 X113.52 Y102.87 Z1.8 F30.0\n"+
"G91\n"+
"G1 F20\n"+
"G1 F1500\n"+
"G1 X-0.3 Y-0.3 F1500\n"+
"G90\n"+
"G4 P3000\n"+
"G92 X0;set x 0\n"+
"G1 X-1.0 F3000.0 \n"+
"G1 X-500.0  F3200.0 ;horizontal move\n"+
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
"G1 X113.52 Y102.87 Z1.8 F3000.0\n"+
"G1 X119.1 Y102.85 Z1.8 F3000.0\n"+
"G1 X119.58 Y102.85 Z1.8 F606.047\n"+
"G1 F240.0\n"+
"G1 E27.475\n"+
"G1 F606.047\n"+
"G92 E0\n"+
";\n"+
"G1 X119.58 Y103.38 Z1.8 F540.0 E6.429\n"+
"G1 X127.43 Y111.23 Z1.8 F540.0 E142.132\n"+
"G1 X127.43 Y133.57 Z1.8 F540.0 E415.152\n"+
"G1 X110.25 Y163.32 Z1.8 F540.0 E835.019\n"+
"G1 X90.56 Y174.68 Z1.8 F540.0 E1112.915\n"+
"G1 X78.46 Y171.44 Z1.8 F540.0 E1266.005\n"+
"G1 X72.57 Y161.25 Z1.8 F540.0 E1409.887\n"+
"G1 X75.93 Y149.34 Z1.8 F540.0 E1561.061\n"+
"G1 X93.23 Y139.35 Z1.8 F540.0 E1805.27\n"+
"G1 X97.76 Y131.61 Z1.8 F540.0 E1914.819\n"+
"G1 X97.76 Y111.36 Z1.8 F540.0 E2162.404\n"+
"G1 X105.06 Y104.06 Z1.8 F540.0 E2288.601\n"+
"G1 X105.06 Y88.84 Z1.8 F540.0 E2474.599\n"+
"G1 X103.56 Y88.84 Z1.8 F540.0 E2492.932\n"+
"G1 X103.56 Y85.32 Z1.8 F540.0 E2535.954\n"+
"G1 X121.08 Y85.32 Z1.8 F540.0 E2750.088\n"+
"G1 X121.08 Y88.84 Z1.8 F540.0 E2793.11\n"+
"G1 X119.58 Y88.84 Z1.8 F540.0 E2811.443\n"+
"G1 X119.58 Y102.56 Z1.8 F540.0 E2979.181\n"+
"G1 F240.0\n"+
"G1 E2979.181\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X114.816 Y89.078 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y89.078 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y102.078 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.816 Y102.078 Z1.8 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X115.06 Y102.17 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E2979.181\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.06 Y88.84 Z1.8 F540.0 E162.996\n"+
"G1 X109.58 Y88.84 Z1.8 F540.0 E229.973\n"+
"G1 X109.58 Y102.32 Z1.8 F540.0 E394.729\n"+
"G1 X114.91 Y102.32 Z1.8 F540.0 E459.947\n"+
"G1 F240.0\n"+
"G1 E459.947\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X107.804 Y111.704 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.923 Y112.448 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.155 Y113.164 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.497 Y113.835 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.94 Y114.444 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.473 Y114.977 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.082 Y115.42 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.753 Y115.762 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.469 Y115.994 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.213 Y116.112 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.967 Y116.112 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.711 Y115.994 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.427 Y115.762 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.098 Y115.42 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.707 Y114.977 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.239 Y114.444 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.683 Y113.835 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.025 Y113.164 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y112.448 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y111.704 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y110.95 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y110.206 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.025 Y109.49 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.683 Y108.819 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.239 Y108.21 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.707 Y107.677 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.098 Y107.234 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.427 Y106.892 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.711 Y106.66 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.967 Y106.542 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.213 Y106.542 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.469 Y106.66 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.753 Y106.892 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.082 Y107.234 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.473 Y107.677 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.94 Y108.21 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.497 Y108.819 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.155 Y109.49 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.923 Y110.206 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.804 Y110.95 Z1.8 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X113.63 Y106.4 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E459.947\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.99 Y106.3 Z1.8 F540.0 E7.907\n"+
"G1 X112.19 Y106.3 Z1.8 F540.0 E17.587\n"+
"G1 X111.41 Y106.43 Z1.8 F540.0 E27.252\n"+
"G1 X110.66 Y106.67 Z1.8 F540.0 E36.915\n"+
"G1 X109.96 Y107.03 Z1.8 F540.0 E46.584\n"+
"G1 X109.32 Y107.49 Z1.8 F540.0 E56.253\n"+
"G1 X108.76 Y108.05 Z1.8 F540.0 E65.924\n"+
"G1 X108.29 Y108.69 Z1.8 F540.0 E75.583\n"+
"G1 X107.93 Y109.4 Z1.8 F540.0 E85.253\n"+
"G1 X107.69 Y110.15 Z1.8 F540.0 E94.916\n"+
"G1 X107.57 Y110.93 Z1.8 F540.0 E104.581\n"+
"G1 X107.57 Y111.72 Z1.8 F540.0 E114.261\n"+
"G1 X107.69 Y112.5 Z1.8 F540.0 E123.926\n"+
"G1 X107.93 Y113.26 Z1.8 F540.0 E133.589\n"+
"G1 X108.29 Y113.96 Z1.8 F540.0 E143.258\n"+
"G1 X108.76 Y114.6 Z1.8 F540.0 E152.917\n"+
"G1 X109.32 Y115.16 Z1.8 F540.0 E162.588\n"+
"G1 X109.96 Y115.63 Z1.8 F540.0 E172.257\n"+
"G1 X110.66 Y115.98 Z1.8 F540.0 E181.926\n"+
"G1 X111.41 Y116.23 Z1.8 F540.0 E191.589\n"+
"G1 X112.19 Y116.35 Z1.8 F540.0 E201.254\n"+
"G1 X112.99 Y116.35 Z1.8 F540.0 E210.934\n"+
"G1 X113.77 Y116.23 Z1.8 F540.0 E220.599\n"+
"G1 X114.52 Y115.98 Z1.8 F540.0 E230.262\n"+
"G1 X115.22 Y115.63 Z1.8 F540.0 E239.932\n"+
"G1 X115.86 Y115.16 Z1.8 F540.0 E249.591\n"+
"G1 X116.42 Y114.6 Z1.8 F540.0 E259.27\n"+
"G1 X116.89 Y113.96 Z1.8 F540.0 E268.929\n"+
"G1 X117.25 Y113.26 Z1.8 F540.0 E278.599\n"+
"G1 X117.49 Y112.5 Z1.8 F540.0 E288.262\n"+
"G1 X117.61 Y111.72 Z1.8 F540.0 E297.925\n"+
"G1 X117.61 Y110.93 Z1.8 F540.0 E307.605\n"+
"G1 X117.49 Y110.15 Z1.8 F540.0 E317.268\n"+
"G1 X117.25 Y109.4 Z1.8 F540.0 E326.931\n"+
"G1 X116.89 Y108.69 Z1.8 F540.0 E336.6\n"+
"G1 X116.42 Y108.05 Z1.8 F540.0 E346.259\n"+
"G1 X115.86 Y107.49 Z1.8 F540.0 E355.939\n"+
"G1 X115.22 Y107.03 Z1.8 F540.0 E365.598\n"+
"G1 X114.52 Y106.67 Z1.8 F540.0 E375.267\n"+
"G1 X113.9 Y106.47 Z1.8 F540.0 E383.172\n"+
"G1 F240.0\n"+
"G1 E383.172\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X111.269 Y134.809 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y134.986 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y135.115 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y135.194 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y135.22 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y135.194 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y135.115 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y134.986 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y134.809 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y134.59 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y134.334 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y134.046 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y133.734 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y133.406 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.683 Y133.07 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y132.734 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y132.406 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y132.094 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y131.806 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y131.55 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y131.331 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y131.154 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y131.024 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y130.946 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y130.92 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y130.946 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y131.024 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y131.154 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.269 Y131.331 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y131.55 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y131.806 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y132.094 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y132.406 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y132.734 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.383 Y133.07 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y133.406 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y133.734 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y134.046 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y134.334 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y134.59 Z1.8 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X116.08 Y107.24 Z1.8 F3000.0\n"+
"G1 X116.68 Y107.84 Z1.8 F3000.0\n"+
"G1 X117.18 Y108.52 Z1.8 F3000.0\n"+
"G1 X117.56 Y109.27 Z1.8 F3000.0\n"+
"G1 X117.82 Y110.07 Z1.8 F3000.0\n"+
"G1 X117.95 Y110.91 Z1.8 F3000.0\n"+
"G1 X112.39 Y130.69 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.172\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.8 Y130.8 Z1.8 F540.0 E7.375\n"+
"G1 X111.13 Y131.14 Z1.8 F540.0 E16.536\n"+
"G1 X110.6 Y131.66 Z1.8 F540.0 E25.662\n"+
"G1 X110.26 Y132.33 Z1.8 F540.0 E34.823\n"+
"G1 X110.17 Y132.7 Z1.8 F540.0 E39.4\n"+
"G1 X110.17 Y133.44 Z1.8 F540.0 E48.543\n"+
"G1 X110.26 Y133.81 Z1.8 F540.0 E53.12\n"+
"G1 X110.6 Y134.48 Z1.8 F540.0 E62.281\n"+
"G1 X111.13 Y135.0 Z1.8 F540.0 E71.407\n"+
"G1 X111.45 Y135.2 Z1.8 F540.0 E75.994\n"+
"G1 X112.16 Y135.43 Z1.8 F540.0 E85.146\n"+
"G1 X112.91 Y135.43 Z1.8 F540.0 E94.288\n"+
"G1 X113.27 Y135.34 Z1.8 F540.0 E98.866\n"+
"G1 X113.94 Y135.0 Z1.8 F540.0 E108.027\n"+
"G1 X114.47 Y134.48 Z1.8 F540.0 E117.153\n"+
"G1 X114.81 Y133.81 Z1.8 F540.0 E126.314\n"+
"G1 X114.9 Y133.44 Z1.8 F540.0 E130.891\n"+
"G1 X114.9 Y132.7 Z1.8 F540.0 E140.034\n"+
"G1 X114.81 Y132.33 Z1.8 F540.0 E144.611\n"+
"G1 X114.47 Y131.66 Z1.8 F540.0 E153.772\n"+
"G1 X113.94 Y131.14 Z1.8 F540.0 E162.898\n"+
"G1 X113.27 Y130.8 Z1.8 F540.0 E172.059\n"+
"G1 X112.68 Y130.69 Z1.8 F540.0 E179.434\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X103.236 Y144.585 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y145.194 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y145.727 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y146.17 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y146.512 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y146.743 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y146.862 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y146.862 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y146.743 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y146.512 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y146.17 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y145.727 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y145.194 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y144.585 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y143.914 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y143.198 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y142.454 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y141.7 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y140.956 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y140.24 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y139.569 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y138.96 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y138.427 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y137.984 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y137.642 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y137.41 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y137.291 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y137.291 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y137.41 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y137.642 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y137.984 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y138.427 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y138.96 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.236 Y139.569 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y140.24 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y140.956 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y141.7 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y142.454 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y143.198 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y143.914 Z1.8 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X110.93 Y130.86 Z1.8 F3000.0\n"+
"G1 X110.33 Y131.47 Z1.8 F3000.0\n"+
"G1 X109.12 Y137.38 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.51 Y137.18 Z1.8 F540.0 E7.904\n"+
"G1 X107.73 Y137.05 Z1.8 F540.0 E17.569\n"+
"G1 X106.93 Y137.05 Z1.8 F540.0 E27.249\n"+
"G1 X106.15 Y137.18 Z1.8 F540.0 E36.914\n"+
"G1 X105.4 Y137.42 Z1.8 F540.0 E46.577\n"+
"G1 X104.7 Y137.78 Z1.8 F540.0 E56.247\n"+
"G1 X104.06 Y138.24 Z1.8 F540.0 E65.899\n"+
"G1 X103.5 Y138.8 Z1.8 F540.0 E75.587\n"+
"G1 X103.03 Y139.44 Z1.8 F540.0 E85.246\n"+
"G1 X102.67 Y140.15 Z1.8 F540.0 E94.915\n"+
"G1 X102.43 Y140.9 Z1.8 F540.0 E104.578\n"+
"G1 X102.3 Y141.68 Z1.8 F540.0 E114.243\n"+
"G1 X102.3 Y142.47 Z1.8 F540.0 E123.923\n"+
"G1 X102.43 Y143.25 Z1.8 F540.0 E133.588\n"+
"G1 X102.67 Y144.01 Z1.8 F540.0 E143.239\n"+
"G1 X103.03 Y144.71 Z1.8 F540.0 E152.92\n"+
"G1 X103.5 Y145.35 Z1.8 F540.0 E162.579\n"+
"G1 X104.06 Y145.91 Z1.8 F540.0 E172.258\n"+
"G1 X104.7 Y146.38 Z1.8 F540.0 E181.917\n"+
"G1 X105.4 Y146.73 Z1.8 F540.0 E191.587\n"+
"G1 X106.15 Y146.98 Z1.8 F540.0 E201.25\n"+
"G1 X106.93 Y147.1 Z1.8 F540.0 E210.915\n"+
"G1 X107.73 Y147.1 Z1.8 F540.0 E220.595\n"+
"G1 X108.51 Y146.98 Z1.8 F540.0 E230.26\n"+
"G1 X109.26 Y146.73 Z1.8 F540.0 E239.923\n"+
"G1 X109.96 Y146.38 Z1.8 F540.0 E249.592\n"+
"G1 X110.6 Y145.91 Z1.8 F540.0 E259.251\n"+
"G1 X111.16 Y145.35 Z1.8 F540.0 E268.922\n"+
"G1 X111.63 Y144.71 Z1.8 F540.0 E278.588\n"+
"G1 X111.99 Y144.01 Z1.8 F540.0 E288.269\n"+
"G1 X112.23 Y143.25 Z1.8 F540.0 E297.92\n"+
"G1 X112.35 Y142.47 Z1.8 F540.0 E307.585\n"+
"G1 X112.35 Y141.68 Z1.8 F540.0 E317.265\n"+
"G1 X112.23 Y140.9 Z1.8 F540.0 E326.93\n"+
"G1 X111.99 Y140.15 Z1.8 F540.0 E336.593\n"+
"G1 X111.63 Y139.44 Z1.8 F540.0 E346.263\n"+
"G1 X111.16 Y138.8 Z1.8 F540.0 E355.929\n"+
"G1 X110.6 Y138.24 Z1.8 F540.0 E365.608\n"+
"G1 X109.96 Y137.78 Z1.8 F540.0 E375.26\n"+
"G1 X109.39 Y137.49 Z1.8 F540.0 E383.175\n"+
"G1 F240.0\n"+
"G1 E383.175\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X100.159 Y151.887 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.312 Y152.187 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.51 Y152.46 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.749 Y152.699 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.022 Y152.897 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.322 Y153.05 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.643 Y153.154 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.976 Y153.207 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.314 Y153.207 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.647 Y153.154 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.968 Y153.05 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.268 Y152.897 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.541 Y152.699 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.78 Y152.46 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y152.187 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y151.887 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.236 Y151.566 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y151.233 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y150.895 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.236 Y150.562 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y150.241 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y149.941 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.78 Y149.668 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.541 Y149.429 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.268 Y149.231 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.968 Y149.078 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.647 Y148.973 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.314 Y148.921 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.976 Y148.921 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.643 Y148.973 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.322 Y149.078 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.022 Y149.231 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.749 Y149.429 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.51 Y149.668 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.312 Y149.941 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.159 Y150.241 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y150.562 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y150.895 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y151.233 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y151.566 Z1.8 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X106.91 Y136.72 Z1.8 F3000.0\n"+
"G1 X106.07 Y136.85 Z1.8 F3000.0\n"+
"G1 X105.27 Y137.11 Z1.8 F3000.0\n"+
"G1 X104.52 Y137.49 Z1.8 F3000.0\n"+
"G1 X103.84 Y137.99 Z1.8 F3000.0\n"+
"G1 X103.24 Y138.59 Z1.8 F3000.0\n"+
"G1 X102.74 Y139.27 Z1.8 F3000.0\n"+
"G1 X102.36 Y140.02 Z1.8 F3000.0\n"+
"G1 X102.1 Y140.82 Z1.8 F3000.0\n"+
"G1 X101.97 Y141.66 Z1.8 F3000.0\n"+
"G1 X103.27 Y148.96 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.175\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.7 Y148.74 Z1.8 F540.0 E7.397\n"+
"G1 X101.96 Y148.68 Z1.8 F540.0 E16.542\n"+
"G1 X101.59 Y148.74 Z1.8 F540.0 E21.119\n"+
"G1 X100.9 Y149.03 Z1.8 F540.0 E30.265\n"+
"G1 X100.33 Y149.51 Z1.8 F540.0 E39.41\n"+
"G1 X100.11 Y149.82 Z1.8 F540.0 E43.987\n"+
"G1 X99.82 Y150.51 Z1.8 F540.0 E53.121\n"+
"G1 X99.76 Y151.25 Z1.8 F540.0 E62.278\n"+
"G1 X99.82 Y151.62 Z1.8 F540.0 E66.856\n"+
"G1 X100.11 Y152.31 Z1.8 F540.0 E76.001\n"+
"G1 X100.33 Y152.62 Z1.8 F540.0 E80.577\n"+
"G1 X100.9 Y153.1 Z1.8 F540.0 E89.723\n"+
"G1 X101.59 Y153.39 Z1.8 F540.0 E98.868\n"+
"G1 X102.33 Y153.45 Z1.8 F540.0 E108.014\n"+
"G1 X102.7 Y153.39 Z1.8 F540.0 E112.591\n"+
"G1 X103.39 Y153.1 Z1.8 F540.0 E121.736\n"+
"G1 X103.96 Y152.62 Z1.8 F540.0 E130.882\n"+
"G1 X104.18 Y152.31 Z1.8 F540.0 E135.459\n"+
"G1 X104.47 Y151.62 Z1.8 F540.0 E144.604\n"+
"G1 X104.53 Y150.88 Z1.8 F540.0 E153.749\n"+
"G1 X104.47 Y150.51 Z1.8 F540.0 E158.338\n"+
"G1 X104.18 Y149.82 Z1.8 F540.0 E167.472\n"+
"G1 X103.96 Y149.51 Z1.8 F540.0 E172.049\n"+
"G1 X103.51 Y149.11 Z1.8 F540.0 E179.434\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X78.894 Y163.827 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.236 Y164.498 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.679 Y165.107 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.212 Y165.64 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.821 Y166.082 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.492 Y166.425 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.208 Y166.657 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.952 Y166.775 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.706 Y166.775 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.45 Y166.657 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.166 Y166.425 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.837 Y166.082 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.446 Y165.64 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.979 Y165.107 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.422 Y164.498 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.764 Y163.827 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y163.111 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y162.367 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y161.613 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y160.868 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.764 Y160.153 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.422 Y159.482 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.979 Y158.873 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.446 Y158.34 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.837 Y157.897 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.166 Y157.555 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.45 Y157.323 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.706 Y157.205 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.952 Y157.205 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.208 Y157.323 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.492 Y157.555 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.821 Y157.897 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.212 Y158.34 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.679 Y158.873 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.236 Y159.482 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.894 Y160.153 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.662 Y160.868 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y161.613 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y162.367 Z1.8 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.662 Y163.111 Z1.8 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X101.93 Y148.35 Z1.8 F3000.0\n"+
"G1 X101.1 Y148.54 Z1.8 F3000.0\n"+
"G1 X87.54 Y159.24 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.16 Y158.72 Z1.8 F540.0 E7.901\n"+
"G1 X86.6 Y158.16 Z1.8 F540.0 E17.581\n"+
"G1 X85.96 Y157.69 Z1.8 F540.0 E27.24\n"+
"G1 X85.26 Y157.33 Z1.8 F540.0 E36.909\n"+
"G1 X84.51 Y157.09 Z1.8 F540.0 E46.572\n"+
"G1 X83.73 Y156.97 Z1.8 F540.0 E56.237\n"+
"G1 X82.93 Y156.97 Z1.8 F540.0 E65.917\n"+
"G1 X82.15 Y157.09 Z1.8 F540.0 E75.582\n"+
"G1 X81.4 Y157.33 Z1.8 F540.0 E85.245\n"+
"G1 X80.69 Y157.69 Z1.8 F540.0 E94.915\n"+
"G1 X80.06 Y158.16 Z1.8 F540.0 E104.574\n"+
"G1 X79.5 Y158.72 Z1.8 F540.0 E114.253\n"+
"G1 X79.03 Y159.36 Z1.8 F540.0 E123.912\n"+
"G1 X78.67 Y160.06 Z1.8 F540.0 E133.582\n"+
"G1 X78.43 Y160.81 Z1.8 F540.0 E143.245\n"+
"G1 X78.3 Y161.59 Z1.8 F540.0 E152.91\n"+
"G1 X78.3 Y162.39 Z1.8 F540.0 E162.59\n"+
"G1 X78.43 Y163.17 Z1.8 F540.0 E172.243\n"+
"G1 X78.67 Y163.92 Z1.8 F540.0 E181.917\n"+
"G1 X79.03 Y164.62 Z1.8 F540.0 E191.587\n"+
"G1 X79.5 Y165.26 Z1.8 F540.0 E201.246\n"+
"G1 X80.06 Y165.82 Z1.8 F540.0 E210.925\n"+
"G1 X80.69 Y166.29 Z1.8 F540.0 E220.584\n"+
"G1 X81.4 Y166.65 Z1.8 F540.0 E230.254\n"+
"G1 X82.15 Y166.89 Z1.8 F540.0 E239.917\n"+
"G1 X82.93 Y167.02 Z1.8 F540.0 E249.582\n"+
"G1 X83.73 Y167.02 Z1.8 F540.0 E259.262\n"+
"G1 X84.51 Y166.89 Z1.8 F540.0 E268.927\n"+
"G1 X85.26 Y166.65 Z1.8 F540.0 E278.59\n"+
"G1 X85.96 Y166.29 Z1.8 F540.0 E288.259\n"+
"G1 X86.6 Y165.82 Z1.8 F540.0 E297.918\n"+
"G1 X87.16 Y165.26 Z1.8 F540.0 E307.598\n"+
"G1 X87.63 Y164.62 Z1.8 F540.0 E317.257\n"+
"G1 X87.99 Y163.92 Z1.8 F540.0 E326.926\n"+
"G1 X88.23 Y163.17 Z1.8 F540.0 E336.601\n"+
"G1 X88.35 Y162.39 Z1.8 F540.0 E346.254\n"+
"G1 X88.35 Y161.59 Z1.8 F540.0 E355.934\n"+
"G1 X88.23 Y160.81 Z1.8 F540.0 E365.599\n"+
"G1 X87.99 Y160.06 Z1.8 F540.0 E375.262\n"+
"G1 X87.69 Y159.48 Z1.8 F540.0 E383.177\n"+
"G1 F240.0\n"+
"G1 E383.177\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<loop> inner )\n"+
"M108 S100.0\n"+
"M108 S100.0\n"+
"G1 X87.94 Y159.0 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.177\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.52 Y158.41 Z1.8 F1080.0 E3.997\n"+
"G1 X86.91 Y157.8 Z1.8 F1080.0 E8.805\n"+
"G1 X86.21 Y157.29 Z1.8 F1080.0 E13.601\n"+
"G1 X85.44 Y156.9 Z1.8 F1080.0 E18.407\n"+
"G1 X84.61 Y156.64 Z1.8 F1080.0 E23.208\n"+
"G1 X83.76 Y156.5 Z1.8 F1080.0 E28.001\n"+
"G1 X82.9 Y156.5 Z1.8 F1080.0 E32.812\n"+
"G1 X82.04 Y156.64 Z1.8 F1080.0 E37.61\n"+
"G1 X81.22 Y156.9 Z1.8 F1080.0 E42.406\n"+
"G1 X80.45 Y157.29 Z1.8 F1080.0 E47.211\n"+
"G1 X79.75 Y157.8 Z1.8 F1080.0 E52.007\n"+
"G1 X79.14 Y158.41 Z1.8 F1080.0 E56.815\n"+
"G1 X78.63 Y159.11 Z1.8 F1080.0 E61.611\n"+
"G1 X78.24 Y159.88 Z1.8 F1080.0 E66.417\n"+
"G1 X77.97 Y160.7 Z1.8 F1080.0 E71.213\n"+
"G1 X77.84 Y161.56 Z1.8 F1080.0 E76.011\n"+
"G1 X77.84 Y162.42 Z1.8 F1080.0 E80.822\n"+
"G1 X77.97 Y163.28 Z1.8 F1080.0 E85.62\n"+
"G1 X78.24 Y164.1 Z1.8 F1080.0 E90.416\n"+
"G1 X78.63 Y164.87 Z1.8 F1080.0 E95.221\n"+
"G1 X79.14 Y165.57 Z1.8 F1080.0 E100.017\n"+
"G1 X79.75 Y166.18 Z1.8 F1080.0 E104.825\n"+
"G1 X80.45 Y166.69 Z1.8 F1080.0 E109.622\n"+
"G1 X81.22 Y167.08 Z1.8 F1080.0 E114.427\n"+
"G1 X82.04 Y167.34 Z1.8 F1080.0 E119.221\n"+
"G1 X82.9 Y167.48 Z1.8 F1080.0 E124.02\n"+
"G1 X83.76 Y167.48 Z1.8 F1080.0 E128.831\n"+
"G1 X84.61 Y167.34 Z1.8 F1080.0 E133.624\n"+
"G1 X85.44 Y167.08 Z1.8 F1080.0 E138.424\n"+
"G1 X86.21 Y166.69 Z1.8 F1080.0 E143.229\n"+
"G1 X86.91 Y166.18 Z1.8 F1080.0 E148.025\n"+
"G1 X87.52 Y165.57 Z1.8 F1080.0 E152.834\n"+
"G1 X88.03 Y164.87 Z1.8 F1080.0 E157.63\n"+
"G1 X88.42 Y164.1 Z1.8 F1080.0 E162.435\n"+
"G1 X88.68 Y163.28 Z1.8 F1080.0 E167.231\n"+
"G1 X88.82 Y162.42 Z1.8 F1080.0 E172.029\n"+
"G1 X88.82 Y161.56 Z1.8 F1080.0 E176.84\n"+
"G1 X88.68 Y160.7 Z1.8 F1080.0 E181.638\n"+
"G1 X88.42 Y159.88 Z1.8 F1080.0 E186.434\n"+
"G1 X88.09 Y159.24 Z1.8 F1080.0 E190.442\n"+
"G1 F240.0\n"+
"G1 E190.442\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.79 Y152.67 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.442\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.29 Y153.24 Z1.8 F1080.0 E4.176\n"+
"G1 X100.65 Y153.5 Z1.8 F1080.0 E6.667\n"+
"G1 X101.05 Y153.7 Z1.8 F1080.0 E9.149\n"+
"G1 X101.48 Y153.84 Z1.8 F1080.0 E11.64\n"+
"G1 X101.92 Y153.91 Z1.8 F1080.0 E14.136\n"+
"G1 X102.37 Y153.91 Z1.8 F1080.0 E16.625\n"+
"G1 X102.81 Y153.84 Z1.8 F1080.0 E19.116\n"+
"G1 X103.24 Y153.7 Z1.8 F1080.0 E21.612\n"+
"G1 X103.64 Y153.5 Z1.8 F1080.0 E24.094\n"+
"G1 X104.0 Y153.24 Z1.8 F1080.0 E26.585\n"+
"G1 X104.32 Y152.92 Z1.8 F1080.0 E29.083\n"+
"G1 X104.58 Y152.56 Z1.8 F1080.0 E31.574\n"+
"G1 X104.78 Y152.16 Z1.8 F1080.0 E34.056\n"+
"G1 X104.92 Y151.73 Z1.8 F1080.0 E36.55\n"+
"G1 X104.99 Y151.29 Z1.8 F1080.0 E39.042\n"+
"G1 X104.99 Y150.84 Z1.8 F1080.0 E41.531\n"+
"G1 X104.92 Y150.4 Z1.8 F1080.0 E44.023\n"+
"G1 X104.78 Y149.97 Z1.8 F1080.0 E46.517\n"+
"G1 X104.58 Y149.57 Z1.8 F1080.0 E49.0\n"+
"G1 X104.32 Y149.21 Z1.8 F1080.0 E51.49\n"+
"G1 X104.0 Y148.89 Z1.8 F1080.0 E53.988\n"+
"G1 X103.64 Y148.63 Z1.8 F1080.0 E56.479\n"+
"G1 X103.24 Y148.43 Z1.8 F1080.0 E58.961\n"+
"G1 X102.81 Y148.29 Z1.8 F1080.0 E61.457\n"+
"G1 X102.37 Y148.22 Z1.8 F1080.0 E63.948\n"+
"G1 X101.92 Y148.22 Z1.8 F1080.0 E66.437\n"+
"G1 X101.48 Y148.29 Z1.8 F1080.0 E68.933\n"+
"G1 X101.05 Y148.43 Z1.8 F1080.0 E71.424\n"+
"G1 X100.65 Y148.63 Z1.8 F1080.0 E73.906\n"+
"G1 X100.29 Y148.89 Z1.8 F1080.0 E76.397\n"+
"G1 X99.97 Y149.21 Z1.8 F1080.0 E78.899\n"+
"G1 X99.71 Y149.57 Z1.8 F1080.0 E81.386\n"+
"G1 X99.51 Y149.97 Z1.8 F1080.0 E83.868\n"+
"G1 X99.37 Y150.4 Z1.8 F1080.0 E86.365\n"+
"G1 X99.3 Y150.84 Z1.8 F1080.0 E88.856\n"+
"G1 X99.3 Y151.29 Z1.8 F1080.0 E91.345\n"+
"G1 X99.37 Y151.73 Z1.8 F1080.0 E93.835\n"+
"G1 X99.64 Y152.43 Z1.8 F1080.0 E98.004\n"+
"G1 F240.0\n"+
"G1 E98.004\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.82 Y149.64 Z1.8 F3000.0\n"+
"G1 X104.22 Y146.6 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E98.004\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.22 Y147.17 Z1.8 F1080.0 E6.395\n"+
"G1 X106.04 Y147.43 Z1.8 F1080.0 E11.191\n"+
"G1 X106.9 Y147.57 Z1.8 F1080.0 E15.994\n"+
"G1 X107.76 Y147.57 Z1.8 F1080.0 E20.806\n"+
"G1 X108.61 Y147.43 Z1.8 F1080.0 E25.598\n"+
"G1 X109.44 Y147.17 Z1.8 F1080.0 E30.394\n"+
"G1 X110.21 Y146.77 Z1.8 F1080.0 E35.204\n"+
"G1 X110.91 Y146.26 Z1.8 F1080.0 E40.0\n"+
"G1 X111.52 Y145.65 Z1.8 F1080.0 E44.809\n"+
"G1 X112.03 Y144.96 Z1.8 F1080.0 E49.605\n"+
"G1 X112.42 Y144.18 Z1.8 F1080.0 E54.41\n"+
"G1 X112.68 Y143.36 Z1.8 F1080.0 E59.206\n"+
"G1 X112.82 Y142.51 Z1.8 F1080.0 E64.004\n"+
"G1 X112.82 Y141.64 Z1.8 F1080.0 E68.815\n"+
"G1 X112.68 Y140.79 Z1.8 F1080.0 E73.613\n"+
"G1 X112.42 Y139.97 Z1.8 F1080.0 E78.409\n"+
"G1 X112.03 Y139.2 Z1.8 F1080.0 E83.214\n"+
"G1 X111.52 Y138.5 Z1.8 F1080.0 E88.011\n"+
"G1 X110.91 Y137.89 Z1.8 F1080.0 E92.819\n"+
"G1 X110.21 Y137.38 Z1.8 F1080.0 E97.618\n"+
"G1 X109.44 Y136.99 Z1.8 F1080.0 E102.426\n"+
"G1 X108.61 Y136.72 Z1.8 F1080.0 E107.222\n"+
"G1 X107.76 Y136.59 Z1.8 F1080.0 E112.014\n"+
"G1 X106.9 Y136.59 Z1.8 F1080.0 E116.826\n"+
"G1 X106.04 Y136.72 Z1.8 F1080.0 E121.629\n"+
"G1 X105.22 Y136.99 Z1.8 F1080.0 E126.425\n"+
"G1 X104.45 Y137.38 Z1.8 F1080.0 E131.223\n"+
"G1 X103.75 Y137.89 Z1.8 F1080.0 E136.022\n"+
"G1 X103.14 Y138.5 Z1.8 F1080.0 E140.83\n"+
"G1 X102.63 Y139.2 Z1.8 F1080.0 E145.627\n"+
"G1 X102.24 Y139.97 Z1.8 F1080.0 E150.432\n"+
"G1 X101.97 Y140.79 Z1.8 F1080.0 E155.228\n"+
"G1 X101.84 Y141.64 Z1.8 F1080.0 E160.026\n"+
"G1 X101.84 Y142.51 Z1.8 F1080.0 E164.837\n"+
"G1 X101.97 Y143.36 Z1.8 F1080.0 E169.635\n"+
"G1 X102.24 Y144.18 Z1.8 F1080.0 E174.431\n"+
"G1 X102.63 Y144.96 Z1.8 F1080.0 E179.236\n"+
"G1 X103.14 Y145.65 Z1.8 F1080.0 E184.032\n"+
"G1 X103.98 Y146.43 Z1.8 F1080.0 E190.413\n"+
"G1 F240.0\n"+
"G1 E190.413\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X102.1 Y143.33 Z1.8 F3000.0\n"+
"G1 X101.97 Y142.5 Z1.8 F3000.0\n"+
"G1 X101.97 Y141.66 Z1.8 F3000.0\n"+
"G1 X111.45 Y116.71 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.413\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.16 Y116.82 Z1.8 F1080.0 E3.999\n"+
"G1 X113.02 Y116.82 Z1.8 F1080.0 E8.81\n"+
"G1 X113.88 Y116.68 Z1.8 F1080.0 E13.608\n"+
"G1 X114.7 Y116.42 Z1.8 F1080.0 E18.404\n"+
"G1 X115.47 Y116.02 Z1.8 F1080.0 E23.209\n"+
"G1 X116.17 Y115.52 Z1.8 F1080.0 E28.005\n"+
"G1 X116.78 Y114.9 Z1.8 F1080.0 E32.813\n"+
"G1 X117.29 Y114.21 Z1.8 F1080.0 E37.61\n"+
"G1 X117.68 Y113.43 Z1.8 F1080.0 E42.415\n"+
"G1 X117.95 Y112.61 Z1.8 F1080.0 E47.211\n"+
"G1 X118.08 Y111.76 Z1.8 F1080.0 E52.009\n"+
"G1 X118.08 Y110.89 Z1.8 F1080.0 E56.82\n"+
"G1 X117.95 Y110.04 Z1.8 F1080.0 E61.618\n"+
"G1 X117.68 Y109.22 Z1.8 F1080.0 E66.414\n"+
"G1 X117.29 Y108.45 Z1.8 F1080.0 E71.219\n"+
"G1 X116.78 Y107.75 Z1.8 F1080.0 E76.015\n"+
"G1 X116.17 Y107.14 Z1.8 F1080.0 E80.824\n"+
"G1 X115.47 Y106.63 Z1.8 F1080.0 E85.62\n"+
"G1 X114.7 Y106.24 Z1.8 F1080.0 E90.425\n"+
"G1 X113.88 Y105.97 Z1.8 F1080.0 E95.221\n"+
"G1 X113.02 Y105.84 Z1.8 F1080.0 E100.019\n"+
"G1 X112.16 Y105.84 Z1.8 F1080.0 E104.83\n"+
"G1 X111.3 Y105.97 Z1.8 F1080.0 E109.628\n"+
"G1 X110.48 Y106.24 Z1.8 F1080.0 E114.424\n"+
"G1 X109.71 Y106.63 Z1.8 F1080.0 E119.229\n"+
"G1 X109.01 Y107.14 Z1.8 F1080.0 E124.025\n"+
"G1 X108.4 Y107.75 Z1.8 F1080.0 E128.834\n"+
"G1 X107.89 Y108.45 Z1.8 F1080.0 E133.63\n"+
"G1 X107.5 Y109.22 Z1.8 F1080.0 E138.435\n"+
"G1 X107.24 Y110.04 Z1.8 F1080.0 E143.231\n"+
"G1 X107.1 Y110.89 Z1.8 F1080.0 E148.029\n"+
"G1 X107.1 Y111.76 Z1.8 F1080.0 E152.84\n"+
"G1 X107.24 Y112.61 Z1.8 F1080.0 E157.638\n"+
"G1 X107.5 Y113.43 Z1.8 F1080.0 E162.434\n"+
"G1 X107.89 Y114.21 Z1.8 F1080.0 E167.239\n"+
"G1 X108.4 Y114.9 Z1.8 F1080.0 E172.036\n"+
"G1 X109.01 Y115.52 Z1.8 F1080.0 E176.844\n"+
"G1 X109.71 Y116.02 Z1.8 F1080.0 E181.64\n"+
"G1 X110.48 Y116.42 Z1.8 F1080.0 E186.445\n"+
"G1 X111.17 Y116.64 Z1.8 F1080.0 E190.44\n"+
"G1 F240.0\n"+
"G1 E190.44\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X108.0 Y114.14 Z1.8 F3000.0\n"+
"G1 X107.62 Y113.39 Z1.8 F3000.0\n"+
"G1 X107.36 Y112.58 Z1.8 F3000.0\n"+
"G1 X107.23 Y111.75 Z1.8 F3000.0\n"+
"G1 X107.23 Y110.9 Z1.8 F3000.0\n"+
"G1 X111.45 Y102.78 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.44\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.52 Y102.78 Z1.8 F1080.0 E22.628\n"+
"G1 X115.52 Y88.37 Z1.8 F1080.0 E102.683\n"+
"G1 X109.11 Y88.37 Z1.8 F1080.0 E138.294\n"+
"G1 X109.11 Y102.78 Z1.8 F1080.0 E218.35\n"+
"G1 X111.16 Y102.78 Z1.8 F1080.0 E229.733\n"+
"G1 F240.0\n"+
"G1 E229.733\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X107.23 Y110.9 Z1.8 F3000.0\n"+
"G1 X112.39 Y130.22 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E229.733\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.65 Y130.35 Z1.8 F1080.0 E4.166\n"+
"G1 X111.24 Y130.52 Z1.8 F1080.0 E6.658\n"+
"G1 X110.85 Y130.76 Z1.8 F1080.0 E9.16\n"+
"G1 X110.51 Y131.05 Z1.8 F1080.0 E11.642\n"+
"G1 X110.22 Y131.39 Z1.8 F1080.0 E14.132\n"+
"G1 X109.99 Y131.77 Z1.8 F1080.0 E16.625\n"+
"G1 X109.82 Y132.19 Z1.8 F1080.0 E19.116\n"+
"G1 X109.71 Y132.62 Z1.8 F1080.0 E21.614\n"+
"G1 X109.68 Y133.07 Z1.8 F1080.0 E24.098\n"+
"G1 X109.71 Y133.52 Z1.8 F1080.0 E26.583\n"+
"G1 X109.82 Y133.95 Z1.8 F1080.0 E29.081\n"+
"G1 X109.99 Y134.37 Z1.8 F1080.0 E31.572\n"+
"G1 X110.22 Y134.75 Z1.8 F1080.0 E34.065\n"+
"G1 X110.51 Y135.09 Z1.8 F1080.0 E36.555\n"+
"G1 X110.85 Y135.38 Z1.8 F1080.0 E39.033\n"+
"G1 X111.24 Y135.62 Z1.8 F1080.0 E41.537\n"+
"G1 X111.65 Y135.79 Z1.8 F1080.0 E44.028\n"+
"G1 X112.09 Y135.89 Z1.8 F1080.0 E46.524\n"+
"G1 X112.53 Y135.93 Z1.8 F1080.0 E49.009\n"+
"G1 X112.98 Y135.89 Z1.8 F1080.0 E51.494\n"+
"G1 X113.42 Y135.79 Z1.8 F1080.0 E53.99\n"+
"G1 X113.83 Y135.62 Z1.8 F1080.0 E56.481\n"+
"G1 X114.21 Y135.38 Z1.8 F1080.0 E58.98\n"+
"G1 X114.55 Y135.09 Z1.8 F1080.0 E61.463\n"+
"G1 X114.84 Y134.75 Z1.8 F1080.0 E63.949\n"+
"G1 X115.08 Y134.37 Z1.8 F1080.0 E66.442\n"+
"G1 X115.25 Y133.95 Z1.8 F1080.0 E68.935\n"+
"G1 X115.36 Y133.52 Z1.8 F1080.0 E71.432\n"+
"G1 X115.39 Y133.07 Z1.8 F1080.0 E73.917\n"+
"G1 X115.36 Y132.62 Z1.8 F1080.0 E76.402\n"+
"G1 X115.25 Y132.19 Z1.8 F1080.0 E78.899\n"+
"G1 X115.08 Y131.77 Z1.8 F1080.0 E81.391\n"+
"G1 X114.84 Y131.39 Z1.8 F1080.0 E83.885\n"+
"G1 X114.55 Y131.05 Z1.8 F1080.0 E86.371\n"+
"G1 X114.21 Y130.76 Z1.8 F1080.0 E88.857\n"+
"G1 X113.83 Y130.52 Z1.8 F1080.0 E91.354\n"+
"G1 X113.42 Y130.35 Z1.8 F1080.0 E93.847\n"+
"G1 X112.68 Y130.22 Z1.8 F1080.0 E98.012\n"+
"G1 F240.0\n"+
"G1 E98.012\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> outer )\n"+
"G1 X124.68 Y137.39 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E98.012\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.91 Y162.98 Z1.8 F1080.0 E164.114\n"+
"G1 X90.49 Y174.18 Z1.8 F1080.0 E288.667\n"+
"G1 X78.77 Y171.04 Z1.8 F1080.0 E356.107\n"+
"G1 X73.08 Y161.18 Z1.8 F1080.0 E419.352\n"+
"G1 X76.32 Y149.65 Z1.8 F1080.0 E485.926\n"+
"G1 X93.57 Y139.69 Z1.8 F1080.0 E596.564\n"+
"G1 X98.22 Y131.74 Z1.8 F1080.0 E647.744\n"+
"G1 X98.22 Y111.55 Z1.8 F1080.0 E759.91\n"+
"G1 X105.52 Y104.25 Z1.8 F1080.0 E817.272\n"+
"G1 X105.52 Y88.37 Z1.8 F1080.0 E905.472\n"+
"G1 X104.02 Y88.37 Z1.8 F1080.0 E913.806\n"+
"G1 X104.02 Y85.78 Z1.8 F1080.0 E928.194\n"+
"G1 X120.61 Y85.78 Z1.8 F1080.0 E1020.361\n"+
"G1 X120.61 Y88.37 Z1.8 F1080.0 E1034.75\n"+
"G1 X119.11 Y88.37 Z1.8 F1080.0 E1043.083\n"+
"G1 X119.11 Y103.57 Z1.8 F1080.0 E1127.506\n"+
"G1 X126.96 Y111.42 Z1.8 F1080.0 E1189.189\n"+
"G1 X126.96 Y133.44 Z1.8 F1080.0 E1311.522\n"+
"G1 X124.82 Y137.14 Z1.8 F1080.0 E1335.272\n"+
"G1 F240.0\n"+
"G1 E1335.272\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"G1 X98.98 Y110.92 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E1335.272\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.61 Y110.92 Z1.8 F1080.0 E3.539\n"+
"G1 X124.74 Y136.21 Z1.8 F1080.0 E201.589\n"+
"G1 X124.9 Y136.84 Z1.8 F1080.0 E205.19\n"+
"G1 F240.0\n"+
"G1 E205.19\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X124.43 Y137.65 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E205.19\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y112.19 Z1.8 F1080.0 E200.863\n"+
"G1 X98.34 Y111.56 Z1.8 F1080.0 E205.057\n"+
"G1 F240.0\n"+
"G1 E205.057\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y113.44 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E205.057\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y114.07 Z1.8 F1080.0 E4.328\n"+
"G1 X123.57 Y138.23 Z1.8 F1080.0 E196.722\n"+
"G1 X123.73 Y138.86 Z1.8 F1080.0 E200.318\n"+
"G1 F240.0\n"+
"G1 E200.318\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X123.27 Y139.66 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E200.318\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.79 Y131.18 Z1.8 F1080.0 E66.625\n"+
"G1 F240.0\n"+
"G1 E66.625\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.42 Y130.82 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E66.625\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y115.34 Z1.8 F1080.0 E122.308\n"+
"G1 X98.31 Y114.71 Z1.8 F1080.0 E126.636\n"+
"G1 F240.0\n"+
"G1 E126.636\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y116.62 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E126.636\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.89 Y130.2 Z1.8 F1080.0 E106.726\n"+
"G1 F240.0\n"+
"G1 E106.726\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.99 Y130.57 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E106.726\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y117.89 Z1.8 F1080.0 E99.616\n"+
"G1 F240.0\n"+
"G1 E99.616\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y119.8 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E99.616\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.94 Y130.89 Z1.8 F1080.0 E89.286\n"+
"G1 X110.04 Y131.52 Z1.8 F1080.0 E92.841\n"+
"G1 F240.0\n"+
"G1 E92.841\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.67 Y132.43 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E92.841\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y121.07 Z1.8 F1080.0 E89.213\n"+
"G1 F240.0\n"+
"G1 E89.213\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y122.98 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E89.213\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.25 Y134.92 Z1.8 F1080.0 E93.798\n"+
"G1 F240.0\n"+
"G1 E93.798\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.68 Y135.35 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E93.798\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.08 Y144.28 Z1.8 F1080.0 E71.995\n"+
"G1 X120.24 Y144.91 Z1.8 F1080.0 E75.597\n"+
"G1 F240.0\n"+
"G1 E75.597\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.77 Y145.72 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E75.597\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.61 Y145.09 Z1.8 F1080.0 E3.602\n"+
"G1 X98.76 Y124.89 Z1.8 F1080.0 E164.882\n"+
"G1 X98.31 Y124.25 Z1.8 F1080.0 E169.21\n"+
"G1 F240.0\n"+
"G1 E169.21\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y126.16 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E169.21\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.85 Y136.7 Z1.8 F1080.0 E82.822\n"+
"G1 F240.0\n"+
"G1 E82.822\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.37 Y136.5 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E82.822\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y127.44 Z1.8 F1080.0 E71.19\n"+
"G1 F240.0\n"+
"G1 E71.19\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y129.35 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E71.19\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.7 Y136.74 Z1.8 F1080.0 E58.085\n"+
"G1 F240.0\n"+
"G1 E58.085\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.8 Y137.1 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E58.085\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y130.62 Z1.8 F1080.0 E50.963\n"+
"G1 F240.0\n"+
"G1 E50.963\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.03 Y132.25 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.963\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.65 Y137.87 Z1.8 F1080.0 E44.159\n"+
"G1 F240.0\n"+
"G1 E44.159\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.02 Y138.51 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E44.159\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X97.56 Y133.05 Z1.8 F1080.0 E42.921\n"+
"G1 F240.0\n"+
"G1 E42.921\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X96.85 Y134.25 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E42.921\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.1 Y139.06 Z1.8 F1080.0 E39.518\n"+
"G1 X102.29 Y139.68 Z1.8 F1080.0 E43.146\n"+
"G1 F240.0\n"+
"G1 E43.146\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.94 Y140.61 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E43.146\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X96.39 Y135.06 Z1.8 F1080.0 E43.632\n"+
"G1 F240.0\n"+
"G1 E43.632\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X95.68 Y136.26 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E43.632\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.3 Y141.69 Z1.8 F1080.0 E43.419\n"+
"G1 X101.75 Y142.33 Z1.8 F1080.0 E47.752\n"+
"G1 F240.0\n"+
"G1 E47.752\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X102.06 Y143.91 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E47.752\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X95.36 Y137.69 Z1.8 F1080.0 E50.754\n"+
"G1 X95.21 Y137.06 Z1.8 F1080.0 E54.35\n"+
"G1 F240.0\n"+
"G1 E54.35\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X94.51 Y138.27 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E54.35\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.09 Y156.38 Z1.8 F1080.0 E144.183\n"+
"G1 X113.25 Y157.01 Z1.8 F1080.0 E147.785\n"+
"G1 F240.0\n"+
"G1 E147.785\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.78 Y157.82 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E147.785\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.63 Y157.19 Z1.8 F1080.0 E3.602\n"+
"G1 X104.83 Y149.87 Z1.8 F1080.0 E63.004\n"+
"G1 F240.0\n"+
"G1 E63.004\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.96 Y151.91 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E63.004\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.93 Y158.4 Z1.8 F1080.0 E52.908\n"+
"G1 X112.08 Y159.03 Z1.8 F1080.0 E56.51\n"+
"G1 X104.54 Y152.76 Z1.8 F1080.0 E110.983\n"+
"G1 X104.6 Y153.4 Z1.8 F1080.0 E114.525\n"+
"G1 X111.46 Y159.21 Z1.8 F1080.0 E164.472\n"+
"G1 X111.62 Y159.84 Z1.8 F1080.0 E168.072\n"+
"G1 F240.0\n"+
"G1 E168.072\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.53 Y153.66 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E168.072\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.92 Y161.05 Z1.8 F1080.0 E58.065\n"+
"G1 F240.0\n"+
"G1 E58.065\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.45 Y161.85 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E58.065\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.57 Y153.97 Z1.8 F1080.0 E61.923\n"+
"G1 F240.0\n"+
"G1 E61.923\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X100.07 Y152.84 Z1.8 F3000.0\n"+
"G1 X99.24 Y150.64 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E61.923\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X90.29 Y141.69 Z1.8 F1080.0 E70.302\n"+
"G1 F240.0\n"+
"G1 E70.302\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X91.1 Y141.22 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E70.302\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X91.73 Y141.38 Z1.8 F1080.0 E3.602\n"+
"G1 X99.42 Y149.05 Z1.8 F1080.0 E63.965\n"+
"G1 X99.55 Y149.68 Z1.8 F1080.0 E67.545\n"+
"G1 F240.0\n"+
"G1 E67.545\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X92.31 Y140.53 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E67.545\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X92.94 Y140.68 Z1.8 F1080.0 E3.6\n"+
"G1 X99.81 Y148.61 Z1.8 F1080.0 E61.898\n"+
"G1 X100.45 Y148.67 Z1.8 F1080.0 E65.44\n"+
"G1 X93.11 Y140.06 Z1.8 F1080.0 E128.258\n"+
"G1 X93.74 Y140.22 Z1.8 F1080.0 E131.859\n"+
"G1 X101.3 Y148.25 Z1.8 F1080.0 E193.138\n"+
"G1 F240.0\n"+
"G1 E193.138\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.34 Y148.38 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E193.138\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X94.04 Y139.07 Z1.8 F1080.0 E73.095\n"+
"G1 F240.0\n"+
"G1 E73.095\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X89.08 Y142.39 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E73.095\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.69 Y163.0 Z1.8 F1080.0 E161.931\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X108.88 Y163.46 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.25 Y163.31 Z1.8 F1080.0 E3.602\n"+
"G1 X88.27 Y142.85 Z1.8 F1080.0 E162.456\n"+
"G1 F240.0\n"+
"G1 E162.456\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X87.06 Y143.55 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E162.456\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.69 Y143.71 Z1.8 F1080.0 E3.602\n"+
"G1 X107.04 Y164.01 Z1.8 F1080.0 E159.398\n"+
"G1 X107.67 Y164.16 Z1.8 F1080.0 E162.995\n"+
"G1 F240.0\n"+
"G1 E162.995\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X106.86 Y164.63 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E162.995\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.24 Y164.47 Z1.8 F1080.0 E3.591\n"+
"G1 X86.26 Y144.02 Z1.8 F1080.0 E162.445\n"+
"G1 F240.0\n"+
"G1 E162.445\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X85.05 Y144.72 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E162.445\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X85.67 Y144.87 Z1.8 F1080.0 E3.596\n"+
"G1 X105.03 Y165.17 Z1.8 F1080.0 E159.4\n"+
"G1 X105.66 Y165.33 Z1.8 F1080.0 E163.001\n"+
"G1 F240.0\n"+
"G1 E163.001\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.85 Y165.79 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E163.001\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.22 Y165.64 Z1.8 F1080.0 E3.6\n"+
"G1 X84.24 Y145.18 Z1.8 F1080.0 E162.455\n"+
"G1 F240.0\n"+
"G1 E162.455\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X83.03 Y145.88 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E162.455\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.64 Y166.49 Z1.8 F1080.0 E161.931\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X102.83 Y166.96 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.2 Y166.8 Z1.8 F1080.0 E3.6\n"+
"G1 X82.85 Y146.51 Z1.8 F1080.0 E159.4\n"+
"G1 X82.22 Y146.35 Z1.8 F1080.0 E163.002\n"+
"G1 F240.0\n"+
"G1 E163.002\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X81.01 Y147.05 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E163.002\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X81.64 Y147.2 Z1.8 F1080.0 E3.595\n"+
"G1 X101.62 Y167.66 Z1.8 F1080.0 E162.453\n"+
"G1 F240.0\n"+
"G1 E162.453\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X100.81 Y168.12 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E162.453\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.19 Y167.97 Z1.8 F1080.0 E3.596\n"+
"G1 X80.83 Y147.67 Z1.8 F1080.0 E159.4\n"+
"G1 X80.2 Y147.51 Z1.8 F1080.0 E163.002\n"+
"G1 F240.0\n"+
"G1 E163.002\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.99 Y148.21 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E163.002\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.62 Y148.37 Z1.8 F1080.0 E3.596\n"+
"G1 X99.6 Y168.82 Z1.8 F1080.0 E162.443\n"+
"G1 F240.0\n"+
"G1 E162.443\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.8 Y169.29 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E162.443\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.17 Y169.13 Z1.8 F1080.0 E3.602\n"+
"G1 X78.81 Y148.83 Z1.8 F1080.0 E159.402\n"+
"G1 X78.19 Y148.68 Z1.8 F1080.0 E162.998\n"+
"G1 X84.06 Y156.46 Z1.8 F1080.0 E217.13\n"+
"G1 X76.97 Y149.38 Z1.8 F1080.0 E272.752\n"+
"G1 F240.0\n"+
"G1 E272.752\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X82.76 Y156.43 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E272.752\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X76.32 Y149.99 Z1.8 F1080.0 E50.59\n"+
"G1 F240.0\n"+
"G1 E50.59\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X75.9 Y151.48 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.59\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X81.22 Y156.81 Z1.8 F1080.0 E41.833\n"+
"G1 F240.0\n"+
"G1 E41.833\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X80.38 Y157.24 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E41.833\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.62 Y152.48 Z1.8 F1080.0 E37.398\n"+
"G1 F240.0\n"+
"G1 E37.398\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X75.2 Y153.97 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E37.398\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.33 Y158.1 Z1.8 F1080.0 E32.456\n"+
"G1 F240.0\n"+
"G1 E32.456\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.76 Y158.79 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E32.456\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X74.92 Y154.96 Z1.8 F1080.0 E30.119\n"+
"G1 F240.0\n"+
"G1 E30.119\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X74.5 Y156.45 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E30.119\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X78.1 Y160.04 Z1.8 F1080.0 E28.229\n"+
"G1 F240.0\n"+
"G1 E28.229\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.83 Y161.05 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E28.229\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X74.52 Y158.06 Z1.8 F1080.0 E24.79\n"+
"G1 X74.22 Y157.44 Z1.8 F1080.0 E28.594\n"+
"G1 F240.0\n"+
"G1 E28.594\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X73.8 Y158.93 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E28.594\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.3 Y162.29 Z1.8 F1080.0 E26.958\n"+
"G1 X77.83 Y162.96 Z1.8 F1080.0 E31.703\n"+
"G1 F240.0\n"+
"G1 E31.703\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.67 Y165.07 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E31.703\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.52 Y159.92 Z1.8 F1080.0 E40.439\n"+
"G1 F240.0\n"+
"G1 E40.439\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X73.6 Y161.91 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E40.439\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X84.06 Y172.37 Z1.8 F1080.0 E82.182\n"+
"G1 F240.0\n"+
"G1 E82.182\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X82.32 Y171.9 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E82.182\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.33 Y164.92 Z1.8 F1080.0 E54.864\n"+
"G1 F240.0\n"+
"G1 E54.864\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X80.25 Y166.65 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E54.864\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X86.66 Y173.07 Z1.8 F1080.0 E50.409\n"+
"G1 F240.0\n"+
"G1 E50.409\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.4 Y173.53 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.409\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X82.36 Y167.49 Z1.8 F1080.0 E47.498\n"+
"G1 F240.0\n"+
"G1 E47.498\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X84.27 Y167.49 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E47.498\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X89.16 Y173.33 Z1.8 F1080.0 E42.301\n"+
"G1 X90.1 Y173.55 Z1.8 F1080.0 E47.681\n"+
"G1 X90.73 Y173.95 Z1.8 F1080.0 E51.792\n"+
"G1 F240.0\n"+
"G1 E51.792\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X91.53 Y173.48 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E51.792\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X85.28 Y167.22 Z1.8 F1080.0 E49.152\n"+
"G1 F240.0\n"+
"G1 E49.152\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X86.53 Y166.56 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E49.152\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X92.11 Y172.62 Z1.8 F1080.0 E45.791\n"+
"G1 X92.74 Y172.78 Z1.8 F1080.0 E49.398\n"+
"G1 X87.22 Y165.99 Z1.8 F1080.0 E98.034\n"+
"G1 X93.55 Y172.32 Z1.8 F1080.0 E147.752\n"+
"G1 F240.0\n"+
"G1 E147.752\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.08 Y164.94 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E147.752\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X94.76 Y171.62 Z1.8 F1080.0 E52.463\n"+
"G1 F240.0\n"+
"G1 E52.463\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X95.57 Y171.15 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E52.463\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.51 Y164.1 Z1.8 F1080.0 E55.433\n"+
"G1 F240.0\n"+
"G1 E55.433\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.89 Y162.56 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E55.433\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X96.78 Y170.45 Z1.8 F1080.0 E61.998\n"+
"G1 F240.0\n"+
"G1 E61.998\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X97.59 Y169.99 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E61.998\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.86 Y161.26 Z1.8 F1080.0 E68.527\n"+
"G1 F240.0\n"+
"G1 E68.527\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X87.42 Y165.48 Z1.8 F3000.0\n"+
"G1 X79.71 Y171.2 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E68.527\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.94 Y169.44 Z1.8 F1080.0 E13.887\n"+
"G1 F240.0\n"+
"G1 E13.887\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X86.82 Y166.08 Z1.8 F3000.0\n"+
"G1 X87.42 Y165.48 Z1.8 F3000.0\n"+
"G1 X87.92 Y164.8 Z1.8 F3000.0\n"+
"G1 X88.3 Y164.05 Z1.8 F3000.0\n"+
"G1 X88.56 Y163.25 Z1.8 F3000.0\n"+
"G1 X88.69 Y162.41 Z1.8 F3000.0\n"+
"G1 X88.69 Y161.57 Z1.8 F3000.0\n"+
"G1 X88.64 Y161.23 Z1.8 F3000.0\n"+
"G1 X99.55 Y151.81 Z1.8 F3000.0\n"+
"G1 X99.43 Y151.28 Z1.8 F3000.0\n"+
"G1 X99.49 Y150.43 Z1.8 F3000.0\n"+
"G1 X99.82 Y149.64 Z1.8 F3000.0\n"+
"G1 X100.37 Y148.99 Z1.8 F3000.0\n"+
"G1 X105.5 Y147.35 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E13.887\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.79 Y155.17 Z1.8 F1080.0 E63.352\n"+
"G1 X113.95 Y155.8 Z1.8 F1080.0 E66.947\n"+
"G1 F240.0\n"+
"G1 E66.947\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.41 Y154.99 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E66.947\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.08 Y147.66 Z1.8 F1080.0 E57.645\n"+
"G1 F240.0\n"+
"G1 E57.645\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X108.8 Y147.47 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E57.645\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.96 Y153.16 Z1.8 F1080.0 E46.58\n"+
"G1 X115.11 Y153.78 Z1.8 F1080.0 E50.175\n"+
"G1 F240.0\n"+
"G1 E50.175\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.58 Y152.98 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.175\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.42 Y152.35 Z1.8 F1080.0 E3.595\n"+
"G1 X110.35 Y147.31 Z1.8 F1080.0 E43.335\n"+
"G1 X109.72 Y147.12 Z1.8 F1080.0 E46.968\n"+
"G1 F240.0\n"+
"G1 E46.968\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.89 Y146.38 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E46.968\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.12 Y151.14 Z1.8 F1080.0 E39.249\n"+
"G1 X116.28 Y151.77 Z1.8 F1080.0 E42.851\n"+
"G1 F240.0\n"+
"G1 E42.851\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X116.74 Y150.96 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E42.851\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.59 Y150.33 Z1.8 F1080.0 E3.602\n"+
"G1 X111.54 Y145.76 Z1.8 F1080.0 E41.438\n"+
"G1 F240.0\n"+
"G1 E41.438\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.3 Y144.61 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E41.438\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.29 Y149.12 Z1.8 F1080.0 E37.346\n"+
"G1 X117.44 Y149.75 Z1.8 F1080.0 E40.941\n"+
"G1 F240.0\n"+
"G1 E40.941\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.91 Y148.94 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E40.941\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.75 Y148.31 Z1.8 F1080.0 E3.596\n"+
"G1 X112.67 Y143.7 Z1.8 F1080.0 E41.727\n"+
"G1 F240.0\n"+
"G1 E41.727\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.91 Y142.04 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E41.727\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.34 Y142.67 Z1.8 F1080.0 E4.234\n"+
"G1 X118.45 Y147.1 Z1.8 F1080.0 E41.847\n"+
"G1 X118.61 Y147.73 Z1.8 F1080.0 E45.444\n"+
"G1 F240.0\n"+
"G1 E45.444\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.07 Y146.93 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E45.444\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.92 Y146.3 Z1.8 F1080.0 E3.595\n"+
"G1 X112.7 Y140.55 Z1.8 F1080.0 E50.603\n"+
"G1 F240.0\n"+
"G1 E50.603\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.18 Y135.94 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.603\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.78 Y143.07 Z1.8 F1080.0 E57.91\n"+
"G1 X120.94 Y143.7 Z1.8 F1080.0 E61.511\n"+
"G1 F240.0\n"+
"G1 E61.511\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X121.4 Y142.89 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E61.511\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X121.25 Y142.26 Z1.8 F1080.0 E3.602\n"+
"G1 X114.71 Y135.66 Z1.8 F1080.0 E55.19\n"+
"G1 X114.08 Y135.57 Z1.8 F1080.0 E58.745\n"+
"G1 F240.0\n"+
"G1 E58.745\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.03 Y134.61 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E58.745\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.13 Y135.25 Z1.8 F1080.0 E3.555\n"+
"G1 X121.94 Y141.05 Z1.8 F1080.0 E53.298\n"+
"G1 X122.1 Y141.68 Z1.8 F1080.0 E56.894\n"+
"G1 F240.0\n"+
"G1 E56.894\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X122.57 Y140.87 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E56.894\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X122.41 Y140.25 Z1.8 F1080.0 E3.595\n"+
"G1 X115.4 Y133.71 Z1.8 F1080.0 E56.833\n"+
"G1 F240.0\n"+
"G1 E56.833\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X125.6 Y135.63 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E56.833\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.93 Y109.97 Z1.8 F1080.0 E201.624\n"+
"G1 F240.0\n"+
"G1 E201.624\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X100.57 Y109.33 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E201.624\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.06 Y134.82 Z1.8 F1080.0 E200.284\n"+
"G1 F240.0\n"+
"G1 E200.284\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.52 Y108.38 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E200.284\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.76 Y133.61 Z1.8 F1080.0 E198.273\n"+
"G1 F240.0\n"+
"G1 E198.273\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y132.45 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E198.273\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.15 Y116.73 Z1.8 F1080.0 E123.555\n"+
"G1 F240.0\n"+
"G1 E123.555\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.21 Y116.88 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E123.555\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y130.54 Z1.8 F1080.0 E107.343\n"+
"G1 F240.0\n"+
"G1 E107.343\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y129.27 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E107.343\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.26 Y116.65 Z1.8 F1080.0 E99.117\n"+
"G1 F240.0\n"+
"G1 E99.117\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.57 Y116.06 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E99.117\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y127.36 Z1.8 F1080.0 E88.789\n"+
"G1 F240.0\n"+
"G1 E88.789\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y126.09 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E88.789\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.3 Y115.51 Z1.8 F1080.0 E83.085\n"+
"G1 F240.0\n"+
"G1 E83.085\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.19 Y114.49 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E83.085\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.28 Y115.13 Z1.8 F1080.0 E3.557\n"+
"G1 X126.42 Y123.54 Z1.8 F1080.0 E72.574\n"+
"G1 X126.87 Y124.18 Z1.8 F1080.0 E76.907\n"+
"G1 F240.0\n"+
"G1 E76.907\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y122.91 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E76.907\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y122.27 Z1.8 F1080.0 E4.328\n"+
"G1 X117.65 Y113.69 Z1.8 F1080.0 E72.505\n"+
"G1 F240.0\n"+
"G1 E72.505\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X118.1 Y112.22 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E72.505\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y120.36 Z1.8 F1080.0 E64.665\n"+
"G1 X126.87 Y121.0 Z1.8 F1080.0 E69.003\n"+
"G1 F240.0\n"+
"G1 E69.003\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y119.72 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E69.003\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y119.09 Z1.8 F1080.0 E4.328\n"+
"G1 X118.17 Y111.02 Z1.8 F1080.0 E68.436\n"+
"G1 F240.0\n"+
"G1 E68.436\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y117.81 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E68.436\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.1 Y108.05 Z1.8 F1080.0 E76.756\n"+
"G1 F240.0\n"+
"G1 E76.756\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.87 Y106.81 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E76.756\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.93 Y102.87 Z1.8 F1080.0 E30.963\n"+
"G1 X112.9 Y105.75 Z1.8 F1080.0 E47.806\n"+
"G1 X110.02 Y102.87 Z1.8 F1080.0 E70.386\n"+
"G1 F240.0\n"+
"G1 E70.386\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y101.87 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E70.386\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.57 Y101.24 Z1.8 F1080.0 E4.328\n"+
"G1 X106.06 Y99.1 Z1.8 F1080.0 E22.65\n"+
"G1 X105.61 Y98.46 Z1.8 F1080.0 E26.975\n"+
"G1 X109.02 Y99.96 Z1.8 F1080.0 E47.674\n"+
"G1 X106.06 Y97.19 Z1.8 F1080.0 E70.215\n"+
"G1 X105.61 Y96.55 Z1.8 F1080.0 E74.54\n"+
"G1 F240.0\n"+
"G1 E74.54\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y99.74 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.54\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.7 Y105.82 Z1.8 F1080.0 E47.8\n"+
"G1 F240.0\n"+
"G1 E47.8\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.23 Y106.27 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E47.8\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y101.64 Z1.8 F1080.0 E36.306\n"+
"G1 F240.0\n"+
"G1 E36.306\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y102.92 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E36.306\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.06 Y103.55 Z1.8 F1080.0 E4.325\n"+
"G1 X108.79 Y106.63 Z1.8 F1080.0 E27.198\n"+
"G1 X109.42 Y106.73 Z1.8 F1080.0 E30.75\n"+
"G1 F240.0\n"+
"G1 E30.75\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X108.41 Y107.62 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E30.75\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.34 Y104.56 Z1.8 F1080.0 E24.077\n"+
"G1 F240.0\n"+
"G1 E24.077\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.71 Y105.19 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.077\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.86 Y108.35 Z1.8 F1080.0 E24.772\n"+
"G1 F240.0\n"+
"G1 E24.772\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.26 Y109.66 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.772\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.75 Y106.15 Z1.8 F1080.0 E27.609\n"+
"G1 F240.0\n"+
"G1 E27.609\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.11 Y106.78 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E27.609\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.04 Y110.71 Z1.8 F1080.0 E30.83\n"+
"G1 F240.0\n"+
"G1 E30.83\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.19 Y112.77 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E30.83\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.16 Y107.74 Z1.8 F1080.0 E39.539\n"+
"G1 F240.0\n"+
"G1 E39.539\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y98.69 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E39.539\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.57 Y98.05 Z1.8 F1080.0 E4.328\n"+
"G1 X106.06 Y95.92 Z1.8 F1080.0 E22.65\n"+
"G1 X105.61 Y95.28 Z1.8 F1080.0 E26.975\n"+
"G1 X109.02 Y96.78 Z1.8 F1080.0 E47.674\n"+
"G1 X106.06 Y94.01 Z1.8 F1080.0 E70.215\n"+
"G1 X105.61 Y93.37 Z1.8 F1080.0 E74.54\n"+
"G1 F240.0\n"+
"G1 E74.54\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y95.51 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.54\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.57 Y94.87 Z1.8 F1080.0 E4.328\n"+
"G1 X106.06 Y92.73 Z1.8 F1080.0 E22.65\n"+
"G1 X105.61 Y92.1 Z1.8 F1080.0 E26.975\n"+
"G1 X109.02 Y93.6 Z1.8 F1080.0 E47.674\n"+
"G1 X106.06 Y90.83 Z1.8 F1080.0 E70.215\n"+
"G1 X105.61 Y90.19 Z1.8 F1080.0 E74.54\n"+
"G1 F240.0\n"+
"G1 E74.54\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.11 Y88.05 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.54\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.34 Y88.28 Z1.8 F1080.0 E1.815\n"+
"G1 F240.0\n"+
"G1 E1.815\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y92.33 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E1.815\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.57 Y91.69 Z1.8 F1080.0 E4.328\n"+
"G1 X106.06 Y89.55 Z1.8 F1080.0 E22.65\n"+
"G1 X105.61 Y88.92 Z1.8 F1080.0 E26.975\n"+
"G1 X109.02 Y90.42 Z1.8 F1080.0 E47.674\n"+
"G1 X104.48 Y85.87 Z1.8 F1080.0 E83.375\n"+
"G1 X104.98 Y88.28 Z1.8 F1080.0 E97.049\n"+
"G1 X104.11 Y87.42 Z1.8 F1080.0 E103.857\n"+
"G1 F240.0\n"+
"G1 E103.857\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.75 Y85.87 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E103.857\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y89.14 Z1.8 F1080.0 E25.699\n"+
"G1 F240.0\n"+
"G1 E25.699\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.66 Y85.87 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E25.699\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.43 Y87.83 Z1.8 F1080.0 E14.687\n"+
"G1 X110.07 Y88.28 Z1.8 F1080.0 E19.015\n"+
"G1 X108.93 Y85.87 Z1.8 F1080.0 E33.819\n"+
"G1 X109.57 Y86.32 Z1.8 F1080.0 E38.148\n"+
"G1 X110.71 Y87.83 Z1.8 F1080.0 E48.649\n"+
"G1 X111.34 Y88.28 Z1.8 F1080.0 E52.982\n"+
"G1 X110.84 Y85.87 Z1.8 F1080.0 E66.658\n"+
"G1 X112.61 Y87.83 Z1.8 F1080.0 E81.345\n"+
"G1 X113.25 Y88.28 Z1.8 F1080.0 E85.677\n"+
"G1 X112.11 Y85.87 Z1.8 F1080.0 E100.482\n"+
"G1 X112.75 Y86.32 Z1.8 F1080.0 E104.81\n"+
"G1 X113.89 Y87.83 Z1.8 F1080.0 E115.311\n"+
"G1 X114.52 Y88.28 Z1.8 F1080.0 E119.644\n"+
"G1 X114.02 Y85.87 Z1.8 F1080.0 E133.319\n"+
"G1 X119.02 Y90.87 Z1.8 F1080.0 E172.587\n"+
"G1 X115.61 Y89.37 Z1.8 F1080.0 E193.286\n"+
"G1 X116.06 Y90.01 Z1.8 F1080.0 E197.615\n"+
"G1 X118.57 Y92.14 Z1.8 F1080.0 E215.933\n"+
"G1 X119.02 Y92.78 Z1.8 F1080.0 E220.262\n"+
"G1 F240.0\n"+
"G1 E220.262\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y90.64 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E220.262\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y91.28 Z1.8 F1080.0 E4.325\n"+
"G1 X119.02 Y94.05 Z1.8 F1080.0 E26.866\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y95.96 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.57 Y95.33 Z1.8 F1080.0 E4.328\n"+
"G1 X116.06 Y93.19 Z1.8 F1080.0 E22.646\n"+
"G1 X115.61 Y92.55 Z1.8 F1080.0 E26.976\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y93.83 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y94.46 Z1.8 F1080.0 E4.325\n"+
"G1 X119.02 Y97.24 Z1.8 F1080.0 E26.866\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y99.14 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.57 Y98.51 Z1.8 F1080.0 E4.328\n"+
"G1 X116.06 Y96.37 Z1.8 F1080.0 E22.646\n"+
"G1 X115.61 Y95.73 Z1.8 F1080.0 E26.976\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y97.01 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y97.64 Z1.8 F1080.0 E4.325\n"+
"G1 X119.02 Y100.42 Z1.8 F1080.0 E26.866\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y102.33 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.57 Y101.69 Z1.8 F1080.0 E4.328\n"+
"G1 X116.06 Y99.55 Z1.8 F1080.0 E22.65\n"+
"G1 X115.61 Y98.92 Z1.8 F1080.0 E26.975\n"+
"G1 F240.0\n"+
"G1 E26.975\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y100.19 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.975\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y100.83 Z1.8 F1080.0 E4.325\n"+
"G1 X119.02 Y103.6 Z1.8 F1080.0 E26.866\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y102.1 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.51 Y111.83 Z1.8 F1080.0 E81.14\n"+
"G1 X126.42 Y112.72 Z1.8 F1080.0 E86.145\n"+
"G1 X126.87 Y113.36 Z1.8 F1080.0 E90.473\n"+
"G1 F240.0\n"+
"G1 E90.473\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y114.63 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E90.473\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.11 Y102.87 Z1.8 F1080.0 E92.387\n"+
"G1 F240.0\n"+
"G1 E92.387\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.2 Y102.87 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E92.387\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y116.54 Z1.8 F1080.0 E107.39\n"+
"G1 F240.0\n"+
"G1 E107.39\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.24 Y103.52 Z1.8 F3000.0\n"+
"G1 X119.02 Y89.6 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E107.39\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.3 Y85.87 Z1.8 F1080.0 E29.266\n"+
"G1 F240.0\n"+
"G1 E29.266\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.21 Y85.87 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E29.266\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.99 Y87.88 Z1.8 F1080.0 E14.906\n"+
"G1 X119.61 Y88.28 Z1.8 F1080.0 E19.046\n"+
"G1 F240.0\n"+
"G1 E19.046\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.52 Y87.92 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E19.046\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.48 Y85.87 Z1.8 F1080.0 E16.055\n"+
"G1 F240.0\n"+
"G1 E16.055\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.39 Y85.87 Z1.8 F3000.0\n"+
"G1 F240.0\n"+
"G1 E16.055\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.52 Y86.01 Z1.8 F1080.0 E1.053\n"+
"G1 F240.0\n"+
"G1 E1.053\n"+
"G1 F1080.0\n"+
";\n"+
"(</surroundingLoop>)\n"+
"G1 F30.0\n"+
"(<layer> 2.1 )\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X93.055 Y139.175 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y131.549 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y111.258 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y103.957 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y89.078 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y89.078 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y85.078 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y85.078 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y89.078 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y89.078 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y103.277 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y111.128 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y133.629 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.426 Y163.491 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X90.593 Y174.941 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.302 Y171.647 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X72.316 Y161.279 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X75.721 Y149.182 Z2.1 </boundaryPoint>)\n"+
"(<perimeter> outer )\n"+
"M108 S110.0\n"+
"M108 S110.0\n"+
"G1 X120.52 Y86.01 Z2.1 F30.0\n"+
"G91\n"+
"G1 F20\n"+
"G1 F1500\n"+
"G1 X-0.3 Y-0.3 F1500\n"+
"G90\n"+
"G4 P3000\n"+
"G92 X0;set x 0\n"+
"G1 X-1.0 F3000.0 \n"+
"G1 X-500.0  F3200.0 ;horizontal move\n"+
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
"G1 X120.52 Y86.01 Z2.1 F3000.0\n"+
"G1 X120.76 Y86.26 Z2.1 F3000.0\n"+
"G1 X121.08 Y86.58 Z2.1 F85.092\n"+
"G1 F240.0\n"+
"G1 E1.053\n"+
"G1 F85.092\n"+
"G92 E0\n"+
";\n"+
"G1 X121.08 Y88.84 Z2.1 F540.0 E27.622\n"+
"G1 X119.58 Y88.84 Z2.1 F540.0 E45.956\n"+
"G1 X119.58 Y103.38 Z2.1 F540.0 E223.642\n"+
"G1 X127.43 Y111.23 Z2.1 F540.0 E359.345\n"+
"G1 X127.43 Y133.57 Z2.1 F540.0 E632.365\n"+
"G1 X110.25 Y163.32 Z2.1 F540.0 E1052.232\n"+
"G1 X90.56 Y174.68 Z2.1 F540.0 E1330.128\n"+
"G1 X78.46 Y171.44 Z2.1 F540.0 E1483.218\n"+
"G1 X72.57 Y161.25 Z2.1 F540.0 E1627.1\n"+
"G1 X75.93 Y149.34 Z2.1 F540.0 E1778.275\n"+
"G1 X93.23 Y139.35 Z2.1 F540.0 E2022.483\n"+
"G1 X97.76 Y131.61 Z2.1 F540.0 E2132.032\n"+
"G1 X97.76 Y111.36 Z2.1 F540.0 E2379.618\n"+
"G1 X105.06 Y104.06 Z2.1 F540.0 E2505.814\n"+
"G1 X105.06 Y88.84 Z2.1 F540.0 E2691.812\n"+
"G1 X103.56 Y88.84 Z2.1 F540.0 E2710.145\n"+
"G1 X103.56 Y85.32 Z2.1 F540.0 E2753.168\n"+
"G1 X121.08 Y85.32 Z2.1 F540.0 E2967.301\n"+
"G1 X121.08 Y86.29 Z2.1 F540.0 E2979.181\n"+
"G1 F240.0\n"+
"G1 E2979.181\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X114.816 Y89.078 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y89.078 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y102.078 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.816 Y102.078 Z2.1 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X114.91 Y88.84 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E2979.181\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.58 Y88.84 Z2.1 F540.0 E65.218\n"+
"G1 X109.58 Y102.32 Z2.1 F540.0 E229.973\n"+
"G1 X115.06 Y102.32 Z2.1 F540.0 E296.951\n"+
"G1 X115.06 Y88.98 Z2.1 F540.0 E459.947\n"+
"G1 F240.0\n"+
"G1 E459.947\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X107.804 Y111.704 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.923 Y112.448 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.155 Y113.164 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.497 Y113.835 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.94 Y114.444 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.473 Y114.977 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.082 Y115.42 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.753 Y115.762 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.469 Y115.994 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.213 Y116.112 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.967 Y116.112 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.711 Y115.994 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.427 Y115.762 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.098 Y115.42 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.707 Y114.977 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.239 Y114.444 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.683 Y113.835 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.025 Y113.164 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y112.448 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y111.704 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y110.95 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y110.206 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.025 Y109.49 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.683 Y108.819 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.239 Y108.21 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.707 Y107.677 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.098 Y107.234 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.427 Y106.892 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.711 Y106.66 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.967 Y106.542 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.213 Y106.542 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.469 Y106.66 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.753 Y106.892 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.082 Y107.234 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.473 Y107.677 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.94 Y108.21 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.497 Y108.819 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.155 Y109.49 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.923 Y110.206 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.804 Y110.95 Z2.1 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X115.39 Y102.65 Z2.1 F3000.0\n"+
"G1 X112.84 Y106.3 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E459.947\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.19 Y106.3 Z2.1 F540.0 E7.92\n"+
"G1 X111.41 Y106.43 Z2.1 F540.0 E17.585\n"+
"G1 X110.66 Y106.67 Z2.1 F540.0 E27.248\n"+
"G1 X109.96 Y107.03 Z2.1 F540.0 E36.917\n"+
"G1 X109.32 Y107.49 Z2.1 F540.0 E46.586\n"+
"G1 X108.76 Y108.05 Z2.1 F540.0 E56.257\n"+
"G1 X108.29 Y108.69 Z2.1 F540.0 E65.916\n"+
"G1 X107.93 Y109.4 Z2.1 F540.0 E75.586\n"+
"G1 X107.69 Y110.15 Z2.1 F540.0 E85.249\n"+
"G1 X107.57 Y110.93 Z2.1 F540.0 E94.914\n"+
"G1 X107.57 Y111.72 Z2.1 F540.0 E104.594\n"+
"G1 X107.69 Y112.5 Z2.1 F540.0 E114.259\n"+
"G1 X107.93 Y113.26 Z2.1 F540.0 E123.922\n"+
"G1 X108.29 Y113.96 Z2.1 F540.0 E133.591\n"+
"G1 X108.76 Y114.6 Z2.1 F540.0 E143.25\n"+
"G1 X109.32 Y115.16 Z2.1 F540.0 E152.921\n"+
"G1 X109.96 Y115.63 Z2.1 F540.0 E162.59\n"+
"G1 X110.66 Y115.98 Z2.1 F540.0 E172.259\n"+
"G1 X111.41 Y116.23 Z2.1 F540.0 E181.922\n"+
"G1 X112.19 Y116.35 Z2.1 F540.0 E191.587\n"+
"G1 X112.99 Y116.35 Z2.1 F540.0 E201.267\n"+
"G1 X113.77 Y116.23 Z2.1 F540.0 E210.932\n"+
"G1 X114.52 Y115.98 Z2.1 F540.0 E220.595\n"+
"G1 X115.22 Y115.63 Z2.1 F540.0 E230.265\n"+
"G1 X115.86 Y115.16 Z2.1 F540.0 E239.924\n"+
"G1 X116.42 Y114.6 Z2.1 F540.0 E249.603\n"+
"G1 X116.89 Y113.96 Z2.1 F540.0 E259.262\n"+
"G1 X117.25 Y113.26 Z2.1 F540.0 E268.932\n"+
"G1 X117.49 Y112.5 Z2.1 F540.0 E278.595\n"+
"G1 X117.61 Y111.72 Z2.1 F540.0 E288.258\n"+
"G1 X117.61 Y110.93 Z2.1 F540.0 E297.938\n"+
"G1 X117.49 Y110.15 Z2.1 F540.0 E307.601\n"+
"G1 X117.25 Y109.4 Z2.1 F540.0 E317.264\n"+
"G1 X116.89 Y108.69 Z2.1 F540.0 E326.933\n"+
"G1 X116.42 Y108.05 Z2.1 F540.0 E336.592\n"+
"G1 X115.86 Y107.49 Z2.1 F540.0 E346.272\n"+
"G1 X115.22 Y107.03 Z2.1 F540.0 E355.931\n"+
"G1 X114.52 Y106.67 Z2.1 F540.0 E365.6\n"+
"G1 X113.77 Y106.43 Z2.1 F540.0 E375.263\n"+
"G1 X113.13 Y106.33 Z2.1 F540.0 E383.17\n"+
"G1 F240.0\n"+
"G1 E383.17\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X111.269 Y134.809 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y134.986 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y135.115 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y135.194 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y135.22 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y135.194 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y135.115 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y134.986 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y134.809 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y134.59 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y134.334 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y134.046 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y133.734 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y133.406 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.683 Y133.07 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y132.734 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y132.406 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y132.094 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y131.806 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y131.55 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y131.331 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y131.154 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y131.024 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y130.946 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y130.92 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y130.946 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y131.024 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y131.154 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.269 Y131.331 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y131.55 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y131.806 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y132.094 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y132.406 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y132.734 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.383 Y133.07 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y133.406 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y133.734 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y134.046 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y134.334 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y134.59 Z2.1 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X115.4 Y106.74 Z2.1 F3000.0\n"+
"G1 X116.08 Y107.24 Z2.1 F3000.0\n"+
"G1 X116.68 Y107.84 Z2.1 F3000.0\n"+
"G1 X117.18 Y108.52 Z2.1 F3000.0\n"+
"G1 X117.56 Y109.27 Z2.1 F3000.0\n"+
"G1 X117.82 Y110.07 Z2.1 F3000.0\n"+
"G1 X117.95 Y110.91 Z2.1 F3000.0\n"+
"G1 X112.39 Y130.69 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.17\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.8 Y130.8 Z2.1 F540.0 E7.375\n"+
"G1 X111.13 Y131.14 Z2.1 F540.0 E16.536\n"+
"G1 X110.6 Y131.66 Z2.1 F540.0 E25.662\n"+
"G1 X110.26 Y132.33 Z2.1 F540.0 E34.823\n"+
"G1 X110.17 Y132.7 Z2.1 F540.0 E39.4\n"+
"G1 X110.17 Y133.44 Z2.1 F540.0 E48.543\n"+
"G1 X110.26 Y133.81 Z2.1 F540.0 E53.12\n"+
"G1 X110.6 Y134.48 Z2.1 F540.0 E62.281\n"+
"G1 X111.13 Y135.0 Z2.1 F540.0 E71.407\n"+
"G1 X111.45 Y135.2 Z2.1 F540.0 E75.994\n"+
"G1 X112.16 Y135.43 Z2.1 F540.0 E85.146\n"+
"G1 X112.91 Y135.43 Z2.1 F540.0 E94.288\n"+
"G1 X113.27 Y135.34 Z2.1 F540.0 E98.866\n"+
"G1 X113.94 Y135.0 Z2.1 F540.0 E108.027\n"+
"G1 X114.47 Y134.48 Z2.1 F540.0 E117.153\n"+
"G1 X114.81 Y133.81 Z2.1 F540.0 E126.314\n"+
"G1 X114.9 Y133.44 Z2.1 F540.0 E130.891\n"+
"G1 X114.9 Y132.7 Z2.1 F540.0 E140.034\n"+
"G1 X114.81 Y132.33 Z2.1 F540.0 E144.611\n"+
"G1 X114.47 Y131.66 Z2.1 F540.0 E153.772\n"+
"G1 X113.94 Y131.14 Z2.1 F540.0 E162.898\n"+
"G1 X113.27 Y130.8 Z2.1 F540.0 E172.059\n"+
"G1 X112.68 Y130.69 Z2.1 F540.0 E179.434\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X103.236 Y144.585 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y145.194 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y145.727 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y146.17 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y146.512 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y146.743 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y146.862 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y146.862 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y146.743 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y146.512 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y146.17 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y145.727 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y145.194 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y144.585 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y143.914 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y143.198 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y142.454 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y141.7 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y140.956 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y140.24 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y139.569 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y138.96 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y138.427 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y137.984 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y137.642 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y137.41 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y137.291 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y137.291 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y137.41 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y137.642 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y137.984 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y138.427 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y138.96 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.236 Y139.569 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y140.24 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y140.956 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y141.7 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y142.454 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y143.198 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y143.914 Z2.1 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X110.93 Y130.86 Z2.1 F3000.0\n"+
"G1 X110.33 Y131.47 Z2.1 F3000.0\n"+
"G1 X109.12 Y137.38 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.51 Y137.18 Z2.1 F540.0 E7.904\n"+
"G1 X107.73 Y137.05 Z2.1 F540.0 E17.569\n"+
"G1 X106.93 Y137.05 Z2.1 F540.0 E27.249\n"+
"G1 X106.15 Y137.18 Z2.1 F540.0 E36.914\n"+
"G1 X105.4 Y137.42 Z2.1 F540.0 E46.577\n"+
"G1 X104.7 Y137.78 Z2.1 F540.0 E56.247\n"+
"G1 X104.06 Y138.24 Z2.1 F540.0 E65.899\n"+
"G1 X103.5 Y138.8 Z2.1 F540.0 E75.587\n"+
"G1 X103.03 Y139.44 Z2.1 F540.0 E85.246\n"+
"G1 X102.67 Y140.15 Z2.1 F540.0 E94.915\n"+
"G1 X102.43 Y140.9 Z2.1 F540.0 E104.578\n"+
"G1 X102.3 Y141.68 Z2.1 F540.0 E114.243\n"+
"G1 X102.3 Y142.47 Z2.1 F540.0 E123.923\n"+
"G1 X102.43 Y143.25 Z2.1 F540.0 E133.588\n"+
"G1 X102.67 Y144.01 Z2.1 F540.0 E143.239\n"+
"G1 X103.03 Y144.71 Z2.1 F540.0 E152.92\n"+
"G1 X103.5 Y145.35 Z2.1 F540.0 E162.579\n"+
"G1 X104.06 Y145.91 Z2.1 F540.0 E172.258\n"+
"G1 X104.7 Y146.38 Z2.1 F540.0 E181.917\n"+
"G1 X105.4 Y146.73 Z2.1 F540.0 E191.587\n"+
"G1 X106.15 Y146.98 Z2.1 F540.0 E201.25\n"+
"G1 X106.93 Y147.1 Z2.1 F540.0 E210.915\n"+
"G1 X107.73 Y147.1 Z2.1 F540.0 E220.595\n"+
"G1 X108.51 Y146.98 Z2.1 F540.0 E230.26\n"+
"G1 X109.26 Y146.73 Z2.1 F540.0 E239.923\n"+
"G1 X109.96 Y146.38 Z2.1 F540.0 E249.592\n"+
"G1 X110.6 Y145.91 Z2.1 F540.0 E259.251\n"+
"G1 X111.16 Y145.35 Z2.1 F540.0 E268.922\n"+
"G1 X111.63 Y144.71 Z2.1 F540.0 E278.588\n"+
"G1 X111.99 Y144.01 Z2.1 F540.0 E288.269\n"+
"G1 X112.23 Y143.25 Z2.1 F540.0 E297.92\n"+
"G1 X112.35 Y142.47 Z2.1 F540.0 E307.585\n"+
"G1 X112.35 Y141.68 Z2.1 F540.0 E317.265\n"+
"G1 X112.23 Y140.9 Z2.1 F540.0 E326.93\n"+
"G1 X111.99 Y140.15 Z2.1 F540.0 E336.593\n"+
"G1 X111.63 Y139.44 Z2.1 F540.0 E346.263\n"+
"G1 X111.16 Y138.8 Z2.1 F540.0 E355.929\n"+
"G1 X110.6 Y138.24 Z2.1 F540.0 E365.608\n"+
"G1 X109.96 Y137.78 Z2.1 F540.0 E375.26\n"+
"G1 X109.39 Y137.49 Z2.1 F540.0 E383.175\n"+
"G1 F240.0\n"+
"G1 E383.175\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X100.159 Y151.887 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.312 Y152.187 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.51 Y152.46 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.749 Y152.699 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.022 Y152.897 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.322 Y153.05 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.643 Y153.154 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.976 Y153.207 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.314 Y153.207 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.647 Y153.154 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.968 Y153.05 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.268 Y152.897 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.541 Y152.699 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.78 Y152.46 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y152.187 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y151.887 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.236 Y151.566 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y151.233 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y150.895 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.236 Y150.562 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y150.241 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y149.941 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.78 Y149.668 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.541 Y149.429 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.268 Y149.231 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.968 Y149.078 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.647 Y148.973 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.314 Y148.921 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.976 Y148.921 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.643 Y148.973 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.322 Y149.078 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.022 Y149.231 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.749 Y149.429 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.51 Y149.668 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.312 Y149.941 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.159 Y150.241 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y150.562 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y150.895 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y151.233 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y151.566 Z2.1 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X106.91 Y136.72 Z2.1 F3000.0\n"+
"G1 X106.07 Y136.85 Z2.1 F3000.0\n"+
"G1 X105.27 Y137.11 Z2.1 F3000.0\n"+
"G1 X104.52 Y137.49 Z2.1 F3000.0\n"+
"G1 X103.84 Y137.99 Z2.1 F3000.0\n"+
"G1 X103.24 Y138.59 Z2.1 F3000.0\n"+
"G1 X102.74 Y139.27 Z2.1 F3000.0\n"+
"G1 X102.36 Y140.02 Z2.1 F3000.0\n"+
"G1 X102.1 Y140.82 Z2.1 F3000.0\n"+
"G1 X101.97 Y141.66 Z2.1 F3000.0\n"+
"G1 X103.27 Y148.96 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.175\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.7 Y148.74 Z2.1 F540.0 E7.397\n"+
"G1 X101.96 Y148.68 Z2.1 F540.0 E16.542\n"+
"G1 X101.59 Y148.74 Z2.1 F540.0 E21.119\n"+
"G1 X100.9 Y149.03 Z2.1 F540.0 E30.265\n"+
"G1 X100.33 Y149.51 Z2.1 F540.0 E39.41\n"+
"G1 X100.11 Y149.82 Z2.1 F540.0 E43.987\n"+
"G1 X99.82 Y150.51 Z2.1 F540.0 E53.121\n"+
"G1 X99.76 Y151.25 Z2.1 F540.0 E62.278\n"+
"G1 X99.82 Y151.62 Z2.1 F540.0 E66.856\n"+
"G1 X100.11 Y152.31 Z2.1 F540.0 E76.001\n"+
"G1 X100.33 Y152.62 Z2.1 F540.0 E80.577\n"+
"G1 X100.9 Y153.1 Z2.1 F540.0 E89.723\n"+
"G1 X101.59 Y153.39 Z2.1 F540.0 E98.868\n"+
"G1 X102.33 Y153.45 Z2.1 F540.0 E108.014\n"+
"G1 X102.7 Y153.39 Z2.1 F540.0 E112.591\n"+
"G1 X103.39 Y153.1 Z2.1 F540.0 E121.736\n"+
"G1 X103.96 Y152.62 Z2.1 F540.0 E130.882\n"+
"G1 X104.18 Y152.31 Z2.1 F540.0 E135.459\n"+
"G1 X104.47 Y151.62 Z2.1 F540.0 E144.604\n"+
"G1 X104.53 Y150.88 Z2.1 F540.0 E153.749\n"+
"G1 X104.47 Y150.51 Z2.1 F540.0 E158.338\n"+
"G1 X104.18 Y149.82 Z2.1 F540.0 E167.472\n"+
"G1 X103.96 Y149.51 Z2.1 F540.0 E172.049\n"+
"G1 X103.51 Y149.11 Z2.1 F540.0 E179.434\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X78.894 Y163.827 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.236 Y164.498 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.679 Y165.107 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.212 Y165.64 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.821 Y166.082 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.492 Y166.425 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.208 Y166.657 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.952 Y166.775 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.706 Y166.775 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.45 Y166.657 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.166 Y166.425 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.837 Y166.082 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.446 Y165.64 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.979 Y165.107 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.422 Y164.498 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.764 Y163.827 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y163.111 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y162.367 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y161.613 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y160.868 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.764 Y160.153 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.422 Y159.482 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.979 Y158.873 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.446 Y158.34 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.837 Y157.897 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.166 Y157.555 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.45 Y157.323 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.706 Y157.205 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.952 Y157.205 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.208 Y157.323 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.492 Y157.555 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.821 Y157.897 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.212 Y158.34 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.679 Y158.873 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.236 Y159.482 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.894 Y160.153 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.662 Y160.868 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y161.613 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y162.367 Z2.1 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.662 Y163.111 Z2.1 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X101.93 Y148.35 Z2.1 F3000.0\n"+
"G1 X101.1 Y148.54 Z2.1 F3000.0\n"+
"G1 X87.54 Y159.24 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.16 Y158.72 Z2.1 F540.0 E7.901\n"+
"G1 X86.6 Y158.16 Z2.1 F540.0 E17.581\n"+
"G1 X85.96 Y157.69 Z2.1 F540.0 E27.24\n"+
"G1 X85.26 Y157.33 Z2.1 F540.0 E36.909\n"+
"G1 X84.51 Y157.09 Z2.1 F540.0 E46.572\n"+
"G1 X83.73 Y156.97 Z2.1 F540.0 E56.237\n"+
"G1 X82.93 Y156.97 Z2.1 F540.0 E65.917\n"+
"G1 X82.15 Y157.09 Z2.1 F540.0 E75.582\n"+
"G1 X81.4 Y157.33 Z2.1 F540.0 E85.245\n"+
"G1 X80.69 Y157.69 Z2.1 F540.0 E94.915\n"+
"G1 X80.06 Y158.16 Z2.1 F540.0 E104.574\n"+
"G1 X79.5 Y158.72 Z2.1 F540.0 E114.253\n"+
"G1 X79.03 Y159.36 Z2.1 F540.0 E123.912\n"+
"G1 X78.67 Y160.06 Z2.1 F540.0 E133.582\n"+
"G1 X78.43 Y160.81 Z2.1 F540.0 E143.245\n"+
"G1 X78.3 Y161.59 Z2.1 F540.0 E152.91\n"+
"G1 X78.3 Y162.39 Z2.1 F540.0 E162.59\n"+
"G1 X78.43 Y163.17 Z2.1 F540.0 E172.243\n"+
"G1 X78.67 Y163.92 Z2.1 F540.0 E181.917\n"+
"G1 X79.03 Y164.62 Z2.1 F540.0 E191.587\n"+
"G1 X79.5 Y165.26 Z2.1 F540.0 E201.246\n"+
"G1 X80.06 Y165.82 Z2.1 F540.0 E210.925\n"+
"G1 X80.69 Y166.29 Z2.1 F540.0 E220.584\n"+
"G1 X81.4 Y166.65 Z2.1 F540.0 E230.254\n"+
"G1 X82.15 Y166.89 Z2.1 F540.0 E239.917\n"+
"G1 X82.93 Y167.02 Z2.1 F540.0 E249.582\n"+
"G1 X83.73 Y167.02 Z2.1 F540.0 E259.262\n"+
"G1 X84.51 Y166.89 Z2.1 F540.0 E268.927\n"+
"G1 X85.26 Y166.65 Z2.1 F540.0 E278.59\n"+
"G1 X85.96 Y166.29 Z2.1 F540.0 E288.259\n"+
"G1 X86.6 Y165.82 Z2.1 F540.0 E297.918\n"+
"G1 X87.16 Y165.26 Z2.1 F540.0 E307.598\n"+
"G1 X87.63 Y164.62 Z2.1 F540.0 E317.257\n"+
"G1 X87.99 Y163.92 Z2.1 F540.0 E326.926\n"+
"G1 X88.23 Y163.17 Z2.1 F540.0 E336.601\n"+
"G1 X88.35 Y162.39 Z2.1 F540.0 E346.254\n"+
"G1 X88.35 Y161.59 Z2.1 F540.0 E355.934\n"+
"G1 X88.23 Y160.81 Z2.1 F540.0 E365.599\n"+
"G1 X87.99 Y160.06 Z2.1 F540.0 E375.262\n"+
"G1 X87.69 Y159.48 Z2.1 F540.0 E383.177\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<loop> inner )\n"+
"M108 S100.0\n"+
"M108 S100.0\n"+
"G1 X87.94 Y159.0 Z2.1 F1080.0 E386.218\n"+
"G1 X87.52 Y158.41 Z2.1 F1080.0 E390.215\n"+
"G1 X86.91 Y157.8 Z2.1 F1080.0 E395.023\n"+
"G1 X86.21 Y157.29 Z2.1 F1080.0 E399.819\n"+
"G1 X85.44 Y156.9 Z2.1 F1080.0 E404.624\n"+
"G1 X84.61 Y156.64 Z2.1 F1080.0 E409.426\n"+
"G1 X83.76 Y156.5 Z2.1 F1080.0 E414.218\n"+
"G1 X82.9 Y156.5 Z2.1 F1080.0 E419.029\n"+
"G1 X82.04 Y156.64 Z2.1 F1080.0 E423.827\n"+
"G1 X81.22 Y156.9 Z2.1 F1080.0 E428.624\n"+
"G1 X80.45 Y157.29 Z2.1 F1080.0 E433.429\n"+
"G1 X79.75 Y157.8 Z2.1 F1080.0 E438.225\n"+
"G1 X79.14 Y158.41 Z2.1 F1080.0 E443.033\n"+
"G1 X78.63 Y159.11 Z2.1 F1080.0 E447.829\n"+
"G1 X78.24 Y159.88 Z2.1 F1080.0 E452.634\n"+
"G1 X77.97 Y160.7 Z2.1 F1080.0 E457.431\n"+
"G1 X77.84 Y161.56 Z2.1 F1080.0 E462.228\n"+
"G1 X77.84 Y162.42 Z2.1 F1080.0 E467.04\n"+
"G1 X77.97 Y163.28 Z2.1 F1080.0 E471.837\n"+
"G1 X78.24 Y164.1 Z2.1 F1080.0 E476.634\n"+
"G1 X78.63 Y164.87 Z2.1 F1080.0 E481.439\n"+
"G1 X79.14 Y165.57 Z2.1 F1080.0 E486.235\n"+
"G1 X79.75 Y166.18 Z2.1 F1080.0 E491.043\n"+
"G1 X80.45 Y166.69 Z2.1 F1080.0 E495.839\n"+
"G1 X81.22 Y167.08 Z2.1 F1080.0 E500.644\n"+
"G1 X82.04 Y167.34 Z2.1 F1080.0 E505.439\n"+
"G1 X82.9 Y167.48 Z2.1 F1080.0 E510.238\n"+
"G1 X83.76 Y167.48 Z2.1 F1080.0 E515.049\n"+
"G1 X84.61 Y167.34 Z2.1 F1080.0 E519.842\n"+
"G1 X85.44 Y167.08 Z2.1 F1080.0 E524.642\n"+
"G1 X86.21 Y166.69 Z2.1 F1080.0 E529.447\n"+
"G1 X86.91 Y166.18 Z2.1 F1080.0 E534.243\n"+
"G1 X87.52 Y165.57 Z2.1 F1080.0 E539.051\n"+
"G1 X88.03 Y164.87 Z2.1 F1080.0 E543.847\n"+
"G1 X88.42 Y164.1 Z2.1 F1080.0 E548.653\n"+
"G1 X88.68 Y163.28 Z2.1 F1080.0 E553.449\n"+
"G1 X88.82 Y162.42 Z2.1 F1080.0 E558.247\n"+
"G1 X88.82 Y161.56 Z2.1 F1080.0 E563.058\n"+
"G1 X88.68 Y160.7 Z2.1 F1080.0 E567.856\n"+
"G1 X88.42 Y159.88 Z2.1 F1080.0 E572.652\n"+
"G1 X88.09 Y159.24 Z2.1 F1080.0 E576.66\n"+
"G1 F240.0\n"+
"G1 E576.66\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.79 Y152.67 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E576.66\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.29 Y153.24 Z2.1 F1080.0 E4.176\n"+
"G1 X100.65 Y153.5 Z2.1 F1080.0 E6.667\n"+
"G1 X101.05 Y153.7 Z2.1 F1080.0 E9.149\n"+
"G1 X101.48 Y153.84 Z2.1 F1080.0 E11.64\n"+
"G1 X101.92 Y153.91 Z2.1 F1080.0 E14.136\n"+
"G1 X102.37 Y153.91 Z2.1 F1080.0 E16.625\n"+
"G1 X102.81 Y153.84 Z2.1 F1080.0 E19.116\n"+
"G1 X103.24 Y153.7 Z2.1 F1080.0 E21.612\n"+
"G1 X103.64 Y153.5 Z2.1 F1080.0 E24.094\n"+
"G1 X104.0 Y153.24 Z2.1 F1080.0 E26.585\n"+
"G1 X104.32 Y152.92 Z2.1 F1080.0 E29.083\n"+
"G1 X104.58 Y152.56 Z2.1 F1080.0 E31.574\n"+
"G1 X104.78 Y152.16 Z2.1 F1080.0 E34.056\n"+
"G1 X104.92 Y151.73 Z2.1 F1080.0 E36.55\n"+
"G1 X104.99 Y151.29 Z2.1 F1080.0 E39.042\n"+
"G1 X104.99 Y150.84 Z2.1 F1080.0 E41.531\n"+
"G1 X104.92 Y150.4 Z2.1 F1080.0 E44.023\n"+
"G1 X104.78 Y149.97 Z2.1 F1080.0 E46.517\n"+
"G1 X104.58 Y149.57 Z2.1 F1080.0 E49.0\n"+
"G1 X104.32 Y149.21 Z2.1 F1080.0 E51.49\n"+
"G1 X104.0 Y148.89 Z2.1 F1080.0 E53.988\n"+
"G1 X103.64 Y148.63 Z2.1 F1080.0 E56.479\n"+
"G1 X103.24 Y148.43 Z2.1 F1080.0 E58.961\n"+
"G1 X102.81 Y148.29 Z2.1 F1080.0 E61.457\n"+
"G1 X102.37 Y148.22 Z2.1 F1080.0 E63.948\n"+
"G1 X101.92 Y148.22 Z2.1 F1080.0 E66.437\n"+
"G1 X101.48 Y148.29 Z2.1 F1080.0 E68.933\n"+
"G1 X101.05 Y148.43 Z2.1 F1080.0 E71.424\n"+
"G1 X100.65 Y148.63 Z2.1 F1080.0 E73.906\n"+
"G1 X100.29 Y148.89 Z2.1 F1080.0 E76.397\n"+
"G1 X99.97 Y149.21 Z2.1 F1080.0 E78.899\n"+
"G1 X99.71 Y149.57 Z2.1 F1080.0 E81.386\n"+
"G1 X99.51 Y149.97 Z2.1 F1080.0 E83.868\n"+
"G1 X99.37 Y150.4 Z2.1 F1080.0 E86.365\n"+
"G1 X99.3 Y150.84 Z2.1 F1080.0 E88.856\n"+
"G1 X99.3 Y151.29 Z2.1 F1080.0 E91.345\n"+
"G1 X99.37 Y151.73 Z2.1 F1080.0 E93.835\n"+
"G1 X99.64 Y152.43 Z2.1 F1080.0 E98.004\n"+
"G1 F240.0\n"+
"G1 E98.004\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.82 Y149.64 Z2.1 F3000.0\n"+
"G1 X104.22 Y146.6 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E98.004\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.22 Y147.17 Z2.1 F1080.0 E6.395\n"+
"G1 X106.04 Y147.43 Z2.1 F1080.0 E11.191\n"+
"G1 X106.9 Y147.57 Z2.1 F1080.0 E15.994\n"+
"G1 X107.76 Y147.57 Z2.1 F1080.0 E20.806\n"+
"G1 X108.61 Y147.43 Z2.1 F1080.0 E25.598\n"+
"G1 X109.44 Y147.17 Z2.1 F1080.0 E30.394\n"+
"G1 X110.21 Y146.77 Z2.1 F1080.0 E35.204\n"+
"G1 X110.91 Y146.26 Z2.1 F1080.0 E40.0\n"+
"G1 X111.52 Y145.65 Z2.1 F1080.0 E44.809\n"+
"G1 X112.03 Y144.96 Z2.1 F1080.0 E49.605\n"+
"G1 X112.42 Y144.18 Z2.1 F1080.0 E54.41\n"+
"G1 X112.68 Y143.36 Z2.1 F1080.0 E59.206\n"+
"G1 X112.82 Y142.51 Z2.1 F1080.0 E64.004\n"+
"G1 X112.82 Y141.64 Z2.1 F1080.0 E68.815\n"+
"G1 X112.68 Y140.79 Z2.1 F1080.0 E73.613\n"+
"G1 X112.42 Y139.97 Z2.1 F1080.0 E78.409\n"+
"G1 X112.03 Y139.2 Z2.1 F1080.0 E83.214\n"+
"G1 X111.52 Y138.5 Z2.1 F1080.0 E88.011\n"+
"G1 X110.91 Y137.89 Z2.1 F1080.0 E92.819\n"+
"G1 X110.21 Y137.38 Z2.1 F1080.0 E97.618\n"+
"G1 X109.44 Y136.99 Z2.1 F1080.0 E102.426\n"+
"G1 X108.61 Y136.72 Z2.1 F1080.0 E107.222\n"+
"G1 X107.76 Y136.59 Z2.1 F1080.0 E112.014\n"+
"G1 X106.9 Y136.59 Z2.1 F1080.0 E116.826\n"+
"G1 X106.04 Y136.72 Z2.1 F1080.0 E121.629\n"+
"G1 X105.22 Y136.99 Z2.1 F1080.0 E126.425\n"+
"G1 X104.45 Y137.38 Z2.1 F1080.0 E131.223\n"+
"G1 X103.75 Y137.89 Z2.1 F1080.0 E136.022\n"+
"G1 X103.14 Y138.5 Z2.1 F1080.0 E140.83\n"+
"G1 X102.63 Y139.2 Z2.1 F1080.0 E145.627\n"+
"G1 X102.24 Y139.97 Z2.1 F1080.0 E150.432\n"+
"G1 X101.97 Y140.79 Z2.1 F1080.0 E155.228\n"+
"G1 X101.84 Y141.64 Z2.1 F1080.0 E160.026\n"+
"G1 X101.84 Y142.51 Z2.1 F1080.0 E164.837\n"+
"G1 X101.97 Y143.36 Z2.1 F1080.0 E169.635\n"+
"G1 X102.24 Y144.18 Z2.1 F1080.0 E174.431\n"+
"G1 X102.63 Y144.96 Z2.1 F1080.0 E179.236\n"+
"G1 X103.14 Y145.65 Z2.1 F1080.0 E184.032\n"+
"G1 X103.98 Y146.43 Z2.1 F1080.0 E190.413\n"+
"G1 F240.0\n"+
"G1 E190.413\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X102.1 Y143.33 Z2.1 F3000.0\n"+
"G1 X101.97 Y142.5 Z2.1 F3000.0\n"+
"G1 X101.97 Y141.66 Z2.1 F3000.0\n"+
"G1 X111.45 Y116.71 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.413\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.16 Y116.82 Z2.1 F1080.0 E3.999\n"+
"G1 X113.02 Y116.82 Z2.1 F1080.0 E8.81\n"+
"G1 X113.88 Y116.68 Z2.1 F1080.0 E13.608\n"+
"G1 X114.7 Y116.42 Z2.1 F1080.0 E18.404\n"+
"G1 X115.47 Y116.02 Z2.1 F1080.0 E23.209\n"+
"G1 X116.17 Y115.52 Z2.1 F1080.0 E28.005\n"+
"G1 X116.78 Y114.9 Z2.1 F1080.0 E32.813\n"+
"G1 X117.29 Y114.21 Z2.1 F1080.0 E37.61\n"+
"G1 X117.68 Y113.43 Z2.1 F1080.0 E42.415\n"+
"G1 X117.95 Y112.61 Z2.1 F1080.0 E47.211\n"+
"G1 X118.08 Y111.76 Z2.1 F1080.0 E52.009\n"+
"G1 X118.08 Y110.89 Z2.1 F1080.0 E56.82\n"+
"G1 X117.95 Y110.04 Z2.1 F1080.0 E61.618\n"+
"G1 X117.68 Y109.22 Z2.1 F1080.0 E66.414\n"+
"G1 X117.29 Y108.45 Z2.1 F1080.0 E71.219\n"+
"G1 X116.78 Y107.75 Z2.1 F1080.0 E76.015\n"+
"G1 X116.17 Y107.14 Z2.1 F1080.0 E80.824\n"+
"G1 X115.47 Y106.63 Z2.1 F1080.0 E85.62\n"+
"G1 X114.7 Y106.24 Z2.1 F1080.0 E90.425\n"+
"G1 X113.88 Y105.97 Z2.1 F1080.0 E95.221\n"+
"G1 X113.02 Y105.84 Z2.1 F1080.0 E100.019\n"+
"G1 X112.16 Y105.84 Z2.1 F1080.0 E104.83\n"+
"G1 X111.3 Y105.97 Z2.1 F1080.0 E109.628\n"+
"G1 X110.48 Y106.24 Z2.1 F1080.0 E114.424\n"+
"G1 X109.71 Y106.63 Z2.1 F1080.0 E119.229\n"+
"G1 X109.01 Y107.14 Z2.1 F1080.0 E124.025\n"+
"G1 X108.4 Y107.75 Z2.1 F1080.0 E128.834\n"+
"G1 X107.89 Y108.45 Z2.1 F1080.0 E133.63\n"+
"G1 X107.5 Y109.22 Z2.1 F1080.0 E138.435\n"+
"G1 X107.24 Y110.04 Z2.1 F1080.0 E143.231\n"+
"G1 X107.1 Y110.89 Z2.1 F1080.0 E148.029\n"+
"G1 X107.1 Y111.76 Z2.1 F1080.0 E152.84\n"+
"G1 X107.24 Y112.61 Z2.1 F1080.0 E157.638\n"+
"G1 X107.5 Y113.43 Z2.1 F1080.0 E162.434\n"+
"G1 X107.89 Y114.21 Z2.1 F1080.0 E167.239\n"+
"G1 X108.4 Y114.9 Z2.1 F1080.0 E172.036\n"+
"G1 X109.01 Y115.52 Z2.1 F1080.0 E176.844\n"+
"G1 X109.71 Y116.02 Z2.1 F1080.0 E181.64\n"+
"G1 X110.48 Y116.42 Z2.1 F1080.0 E186.445\n"+
"G1 X111.17 Y116.64 Z2.1 F1080.0 E190.44\n"+
"G1 F240.0\n"+
"G1 E190.44\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X108.0 Y114.14 Z2.1 F3000.0\n"+
"G1 X107.62 Y113.39 Z2.1 F3000.0\n"+
"G1 X107.36 Y112.58 Z2.1 F3000.0\n"+
"G1 X107.23 Y111.75 Z2.1 F3000.0\n"+
"G1 X107.23 Y110.9 Z2.1 F3000.0\n"+
"G1 X111.45 Y102.78 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.44\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.52 Y102.78 Z2.1 F1080.0 E22.628\n"+
"G1 X115.52 Y88.37 Z2.1 F1080.0 E102.683\n"+
"G1 X109.11 Y88.37 Z2.1 F1080.0 E138.294\n"+
"G1 X109.11 Y102.78 Z2.1 F1080.0 E218.35\n"+
"G1 X111.16 Y102.78 Z2.1 F1080.0 E229.733\n"+
"G1 F240.0\n"+
"G1 E229.733\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X107.23 Y110.9 Z2.1 F3000.0\n"+
"G1 X112.39 Y130.22 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E229.733\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.65 Y130.35 Z2.1 F1080.0 E4.166\n"+
"G1 X111.24 Y130.52 Z2.1 F1080.0 E6.658\n"+
"G1 X110.85 Y130.76 Z2.1 F1080.0 E9.16\n"+
"G1 X110.51 Y131.05 Z2.1 F1080.0 E11.642\n"+
"G1 X110.22 Y131.39 Z2.1 F1080.0 E14.132\n"+
"G1 X109.99 Y131.77 Z2.1 F1080.0 E16.625\n"+
"G1 X109.82 Y132.19 Z2.1 F1080.0 E19.116\n"+
"G1 X109.71 Y132.62 Z2.1 F1080.0 E21.614\n"+
"G1 X109.68 Y133.07 Z2.1 F1080.0 E24.098\n"+
"G1 X109.71 Y133.52 Z2.1 F1080.0 E26.583\n"+
"G1 X109.82 Y133.95 Z2.1 F1080.0 E29.081\n"+
"G1 X109.99 Y134.37 Z2.1 F1080.0 E31.572\n"+
"G1 X110.22 Y134.75 Z2.1 F1080.0 E34.065\n"+
"G1 X110.51 Y135.09 Z2.1 F1080.0 E36.555\n"+
"G1 X110.85 Y135.38 Z2.1 F1080.0 E39.033\n"+
"G1 X111.24 Y135.62 Z2.1 F1080.0 E41.537\n"+
"G1 X111.65 Y135.79 Z2.1 F1080.0 E44.028\n"+
"G1 X112.09 Y135.89 Z2.1 F1080.0 E46.524\n"+
"G1 X112.53 Y135.93 Z2.1 F1080.0 E49.009\n"+
"G1 X112.98 Y135.89 Z2.1 F1080.0 E51.494\n"+
"G1 X113.42 Y135.79 Z2.1 F1080.0 E53.99\n"+
"G1 X113.83 Y135.62 Z2.1 F1080.0 E56.481\n"+
"G1 X114.21 Y135.38 Z2.1 F1080.0 E58.98\n"+
"G1 X114.55 Y135.09 Z2.1 F1080.0 E61.463\n"+
"G1 X114.84 Y134.75 Z2.1 F1080.0 E63.949\n"+
"G1 X115.08 Y134.37 Z2.1 F1080.0 E66.442\n"+
"G1 X115.25 Y133.95 Z2.1 F1080.0 E68.935\n"+
"G1 X115.36 Y133.52 Z2.1 F1080.0 E71.432\n"+
"G1 X115.39 Y133.07 Z2.1 F1080.0 E73.917\n"+
"G1 X115.36 Y132.62 Z2.1 F1080.0 E76.402\n"+
"G1 X115.25 Y132.19 Z2.1 F1080.0 E78.899\n"+
"G1 X115.08 Y131.77 Z2.1 F1080.0 E81.391\n"+
"G1 X114.84 Y131.39 Z2.1 F1080.0 E83.885\n"+
"G1 X114.55 Y131.05 Z2.1 F1080.0 E86.371\n"+
"G1 X114.21 Y130.76 Z2.1 F1080.0 E88.857\n"+
"G1 X113.83 Y130.52 Z2.1 F1080.0 E91.354\n"+
"G1 X113.42 Y130.35 Z2.1 F1080.0 E93.847\n"+
"G1 X112.68 Y130.22 Z2.1 F1080.0 E98.012\n"+
"G1 F240.0\n"+
"G1 E98.012\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> outer )\n"+
"G1 X124.68 Y137.39 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E98.012\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.91 Y162.98 Z2.1 F1080.0 E164.114\n"+
"G1 X90.49 Y174.18 Z2.1 F1080.0 E288.667\n"+
"G1 X78.77 Y171.04 Z2.1 F1080.0 E356.107\n"+
"G1 X73.08 Y161.18 Z2.1 F1080.0 E419.352\n"+
"G1 X76.32 Y149.65 Z2.1 F1080.0 E485.926\n"+
"G1 X93.57 Y139.69 Z2.1 F1080.0 E596.564\n"+
"G1 X98.22 Y131.74 Z2.1 F1080.0 E647.744\n"+
"G1 X98.22 Y111.55 Z2.1 F1080.0 E759.91\n"+
"G1 X105.52 Y104.25 Z2.1 F1080.0 E817.272\n"+
"G1 X105.52 Y88.37 Z2.1 F1080.0 E905.472\n"+
"G1 X104.02 Y88.37 Z2.1 F1080.0 E913.806\n"+
"G1 X104.02 Y85.78 Z2.1 F1080.0 E928.194\n"+
"G1 X120.61 Y85.78 Z2.1 F1080.0 E1020.361\n"+
"G1 X120.61 Y88.37 Z2.1 F1080.0 E1034.75\n"+
"G1 X119.11 Y88.37 Z2.1 F1080.0 E1043.083\n"+
"G1 X119.11 Y103.57 Z2.1 F1080.0 E1127.506\n"+
"G1 X126.96 Y111.42 Z2.1 F1080.0 E1189.189\n"+
"G1 X126.96 Y133.44 Z2.1 F1080.0 E1311.522\n"+
"G1 X124.82 Y137.14 Z2.1 F1080.0 E1335.272\n"+
"G1 F240.0\n"+
"G1 E1335.272\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"G1 X87.62 Y173.32 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E1335.272\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X125.98 Y134.97 Z2.1 F1080.0 E301.337\n"+
"G1 F240.0\n"+
"G1 E301.337\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y132.8 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E301.337\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X86.62 Y173.05 Z2.1 F1080.0 E316.265\n"+
"G1 F240.0\n"+
"G1 E316.265\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X85.11 Y172.65 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E316.265\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y130.89 Z2.1 F1080.0 E328.098\n"+
"G1 F240.0\n"+
"G1 E328.098\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y129.62 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E328.098\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.61 Y143.88 Z2.1 F1080.0 E112.045\n"+
"G1 F240.0\n"+
"G1 E112.045\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.91 Y141.67 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E112.045\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y128.34 Z2.1 F1080.0 E105.44\n"+
"G1 X126.87 Y127.71 Z2.1 F1080.0 E109.768\n"+
"G1 F240.0\n"+
"G1 E109.768\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y126.44 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E109.768\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.99 Y139.97 Z2.1 F1080.0 E107.744\n"+
"G1 X112.71 Y140.59 Z2.1 F1080.0 E111.5\n"+
"G1 F240.0\n"+
"G1 E111.5\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.15 Y139.25 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E111.5\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y125.16 Z2.1 F1080.0 E111.399\n"+
"G1 X126.87 Y124.53 Z2.1 F1080.0 E115.728\n"+
"G1 F240.0\n"+
"G1 E115.728\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y123.25 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E115.728\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.63 Y138.5 Z2.1 F1080.0 E119.784\n"+
"G1 X112.22 Y135.99 Z2.1 F1080.0 E134.096\n"+
"G1 X110.64 Y137.58 Z2.1 F1080.0 E146.572\n"+
"G1 X110.53 Y136.95 Z2.1 F1080.0 E150.131\n"+
"G1 X111.23 Y135.71 Z2.1 F1080.0 E158.027\n"+
"G1 X110.6 Y135.86 Z2.1 F1080.0 E161.618\n"+
"G1 X109.85 Y137.1 Z2.1 F1080.0 E169.667\n"+
"G1 X109.62 Y136.48 Z2.1 F1080.0 E173.305\n"+
"G1 X110.15 Y135.48 Z2.1 F1080.0 E179.602\n"+
"G1 X110.19 Y134.85 Z2.1 F1080.0 E183.142\n"+
"G1 X109.56 Y134.7 Z2.1 F1080.0 E186.722\n"+
"G1 X109.05 Y136.3 Z2.1 F1080.0 E196.018\n"+
"G1 X108.43 Y136.6 Z2.1 F1080.0 E199.847\n"+
"G1 F240.0\n"+
"G1 E199.847\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.26 Y136.5 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E199.847\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.75 Y134.02 Z2.1 F1080.0 E19.489\n"+
"G1 F240.0\n"+
"G1 E19.489\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.76 Y132.1 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E19.489\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.16 Y132.8 Z2.1 F1080.0 E5.14\n"+
"G1 X104.7 Y137.15 Z2.1 F1080.0 E39.764\n"+
"G1 F240.0\n"+
"G1 E39.764\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X102.41 Y139.45 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E39.764\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X85.76 Y156.46 Z2.1 F1080.0 E132.253\n"+
"G1 X85.14 Y156.71 Z2.1 F1080.0 E135.966\n"+
"G1 F240.0\n"+
"G1 E135.966\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X84.11 Y156.47 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E135.966\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y113.71 Z2.1 F1080.0 E335.939\n"+
"G1 F240.0\n"+
"G1 E335.939\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y114.98 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E335.939\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y115.62 Z2.1 F1080.0 E4.328\n"+
"G1 X111.56 Y130.29 Z2.1 F1080.0 E120.371\n"+
"G1 F240.0\n"+
"G1 E120.371\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.48 Y130.28 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E120.371\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y116.89 Z2.1 F1080.0 E105.221\n"+
"G1 F240.0\n"+
"G1 E105.221\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y118.16 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E105.221\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y118.8 Z2.1 F1080.0 E4.328\n"+
"G1 X114.95 Y130.69 Z2.1 F1080.0 E96.121\n"+
"G1 X114.31 Y130.72 Z2.1 F1080.0 E99.661\n"+
"G1 F240.0\n"+
"G1 E99.661\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y120.07 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E99.661\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y120.71 Z2.1 F1080.0 E4.333\n"+
"G1 X115.32 Y131.14 Z2.1 F1080.0 E88.947\n"+
"G1 X115.18 Y131.77 Z2.1 F1080.0 E92.538\n"+
"G1 X126.87 Y121.34 Z2.1 F1080.0 E179.582\n"+
"G1 X126.42 Y121.98 Z2.1 F1080.0 E183.91\n"+
"G1 X115.46 Y132.76 Z2.1 F1080.0 E269.34\n"+
"G1 F240.0\n"+
"G1 E269.34\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X123.37 Y139.49 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E269.34\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X89.13 Y173.73 Z2.1 F1080.0 E269.015\n"+
"G1 F240.0\n"+
"G1 E269.015\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X90.13 Y173.99 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E269.015\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X121.63 Y142.5 Z2.1 F1080.0 E247.46\n"+
"G1 F240.0\n"+
"G1 E247.46\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y147.01 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E247.46\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X93.95 Y172.09 Z2.1 F1080.0 E196.976\n"+
"G1 F240.0\n"+
"G1 E196.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X96.96 Y170.35 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E196.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.28 Y150.03 Z2.1 F1080.0 E159.657\n"+
"G1 F240.0\n"+
"G1 E159.657\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.67 Y154.54 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E159.657\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.48 Y167.74 Z2.1 F1080.0 E103.678\n"+
"G1 F240.0\n"+
"G1 E103.678\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.49 Y166.0 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E103.678\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.94 Y157.55 Z2.1 F1080.0 E66.358\n"+
"G1 F240.0\n"+
"G1 E66.358\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.33 Y162.07 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E66.358\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.01 Y163.39 Z2.1 F1080.0 E10.383\n"+
"G1 F240.0\n"+
"G1 E10.383\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X84.11 Y172.38 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E10.383\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.87 Y154.44 Z2.1 F1080.0 E140.233\n"+
"G1 X102.51 Y153.98 Z2.1 F1080.0 E144.618\n"+
"G1 F240.0\n"+
"G1 E144.618\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X82.6 Y171.98 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E144.618\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X83.22 Y171.68 Z2.1 F1080.0 E3.816\n"+
"G1 X100.87 Y153.71 Z2.1 F1080.0 E143.727\n"+
"G1 F240.0\n"+
"G1 E143.727\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X100.12 Y153.19 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E143.727\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X82.22 Y171.41 Z2.1 F1080.0 E141.883\n"+
"G1 X81.6 Y171.71 Z2.1 F1080.0 E145.697\n"+
"G1 F240.0\n"+
"G1 E145.697\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X79.09 Y171.04 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E145.697\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.71 Y170.74 Z2.1 F1080.0 E3.821\n"+
"G1 X81.98 Y167.88 Z2.1 F1080.0 E24.091\n"+
"G1 X82.6 Y167.52 Z2.1 F1080.0 E28.069\n"+
"G1 X80.09 Y171.31 Z2.1 F1080.0 E53.275\n"+
"G1 X80.71 Y171.01 Z2.1 F1080.0 E57.092\n"+
"G1 X83.84 Y167.56 Z2.1 F1080.0 E82.951\n"+
"G1 F240.0\n"+
"G1 E82.951\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.25 Y169.97 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E82.951\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X81.1 Y167.12 Z2.1 F1080.0 E22.392\n"+
"G1 F240.0\n"+
"G1 E22.392\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X80.28 Y166.67 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E22.392\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.64 Y166.77 Z2.1 F1080.0 E3.562\n"+
"G1 X77.94 Y168.53 Z2.1 F1080.0 E17.184\n"+
"G1 X77.78 Y169.16 Z2.1 F1080.0 E20.781\n"+
"G1 F240.0\n"+
"G1 E20.781\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.08 Y167.95 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E20.781\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.24 Y165.79 Z2.1 F1080.0 E16.939\n"+
"G1 F240.0\n"+
"G1 E16.939\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.05 Y163.8 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E16.939\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.8 Y164.42 Z2.1 F1080.0 E3.713\n"+
"G1 X76.08 Y165.3 Z2.1 F1080.0 E14.476\n"+
"G1 X75.92 Y165.93 Z2.1 F1080.0 E18.078\n"+
"G1 X78.68 Y165.08 Z2.1 F1080.0 E34.11\n"+
"G1 X76.78 Y166.51 Z2.1 F1080.0 E47.333\n"+
"G1 X76.62 Y167.14 Z2.1 F1080.0 E50.929\n"+
"G1 F240.0\n"+
"G1 E50.929\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.8 Y162.78 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.929\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.61 Y164.5 Z2.1 F1080.0 E15.49\n"+
"G1 X75.45 Y165.13 Z2.1 F1080.0 E19.087\n"+
"G1 F240.0\n"+
"G1 E19.087\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X79.84 Y157.9 Z2.1 F3000.0\n"+
"G1 X126.41 Y110.99 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E19.087\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X125.77 Y110.99 Z2.1 F1080.0 E3.533\n"+
"G1 X74.45 Y162.48 Z2.1 F1080.0 E407.418\n"+
"G1 X74.29 Y163.11 Z2.1 F1080.0 E411.018\n"+
"G1 X77.87 Y160.8 Z2.1 F1080.0 E434.666\n"+
"G1 X77.3 Y161.49 Z2.1 F1080.0 E439.6\n"+
"G1 X74.76 Y163.92 Z2.1 F1080.0 E459.154\n"+
"G1 F240.0\n"+
"G1 E459.154\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X125.45 Y110.04 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E459.154\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.59 Y161.9 Z2.1 F1080.0 E407.451\n"+
"G1 F240.0\n"+
"G1 E407.451\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X73.22 Y160.99 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E407.451\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X124.82 Y109.4 Z2.1 F1080.0 E405.353\n"+
"G1 F240.0\n"+
"G1 E405.353\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X95.17 Y137.14 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E405.353\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X123.86 Y108.45 Z2.1 F1080.0 E225.441\n"+
"G1 F240.0\n"+
"G1 E225.441\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X123.22 Y107.81 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E225.441\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.86 Y113.18 Z2.1 F1080.0 E42.171\n"+
"G1 F240.0\n"+
"G1 E42.171\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X118.17 Y110.95 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E42.171\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X122.27 Y106.86 Z2.1 F1080.0 E32.205\n"+
"G1 F240.0\n"+
"G1 E32.205\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X121.63 Y106.22 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E32.205\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X121.0 Y106.22 Z2.1 F1080.0 E3.533\n"+
"G1 X118.26 Y109.25 Z2.1 F1080.0 E26.236\n"+
"G1 X117.98 Y109.87 Z2.1 F1080.0 E29.995\n"+
"G1 F240.0\n"+
"G1 E29.995\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.42 Y108.52 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E29.995\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.68 Y105.26 Z2.1 F1080.0 E25.574\n"+
"G1 F240.0\n"+
"G1 E25.574\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.04 Y104.63 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E25.574\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.9 Y107.77 Z2.1 F1080.0 E24.678\n"+
"G1 F240.0\n"+
"G1 E24.678\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.92 Y106.85 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.678\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.55 Y106.76 Z2.1 F1080.0 E3.545\n"+
"G1 X119.09 Y104.31 Z2.1 F1080.0 E23.166\n"+
"G1 X119.09 Y103.67 Z2.1 F1080.0 E26.7\n"+
"G1 F240.0\n"+
"G1 E26.7\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y102.47 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.7\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.13 Y106.36 Z2.1 F1080.0 E30.575\n"+
"G1 F240.0\n"+
"G1 E30.575\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.72 Y105.86 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E30.575\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.34 Y105.56 Z2.1 F1080.0 E3.824\n"+
"G1 X118.57 Y101.19 Z2.1 F1080.0 E37.584\n"+
"G1 X119.02 Y100.56 Z2.1 F1080.0 E41.917\n"+
"G1 F240.0\n"+
"G1 E41.917\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y102.69 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E41.917\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y102.06 Z2.1 F1080.0 E4.325\n"+
"G1 X118.57 Y99.92 Z2.1 F1080.0 E22.643\n"+
"G1 X119.02 Y99.28 Z2.1 F1080.0 E26.976\n"+
"G1 X115.61 Y100.79 Z2.1 F1080.0 E47.675\n"+
"G1 X118.57 Y98.01 Z2.1 F1080.0 E70.208\n"+
"G1 X119.02 Y97.38 Z2.1 F1080.0 E74.541\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y99.51 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y98.88 Z2.1 F1080.0 E4.325\n"+
"G1 X118.57 Y96.74 Z2.1 F1080.0 E22.643\n"+
"G1 X119.02 Y96.1 Z2.1 F1080.0 E26.976\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y94.19 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.57 Y94.83 Z2.1 F1080.0 E4.333\n"+
"G1 X115.61 Y97.6 Z2.1 F1080.0 E26.866\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y96.33 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y95.69 Z2.1 F1080.0 E4.325\n"+
"G1 X118.57 Y93.56 Z2.1 F1080.0 E22.643\n"+
"G1 X119.02 Y92.92 Z2.1 F1080.0 E26.976\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y91.01 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.57 Y91.65 Z2.1 F1080.0 E4.333\n"+
"G1 X115.61 Y94.42 Z2.1 F1080.0 E26.866\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y93.15 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y92.51 Z2.1 F1080.0 E4.325\n"+
"G1 X118.57 Y90.38 Z2.1 F1080.0 E22.643\n"+
"G1 X119.02 Y89.74 Z2.1 F1080.0 E26.976\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.48 Y88.28 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.52 Y88.24 Z2.1 F1080.0 E0.354\n"+
"G1 F240.0\n"+
"G1 E0.354\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.52 Y86.33 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E0.354\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.07 Y86.97 Z2.1 F1080.0 E4.333\n"+
"G1 X115.61 Y91.24 Z2.1 F1080.0 E38.647\n"+
"G1 F240.0\n"+
"G1 E38.647\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y89.97 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E38.647\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.7 Y85.87 Z2.1 F1080.0 E32.154\n"+
"G1 F240.0\n"+
"G1 E32.154\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.24 Y88.5 Z2.1 F3000.0\n"+
"G1 X105.61 Y93.6 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E32.154\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.06 Y92.97 Z2.1 F1080.0 E4.325\n"+
"G1 X108.57 Y90.83 Z2.1 F1080.0 E22.643\n"+
"G1 X109.02 Y90.19 Z2.1 F1080.0 E26.976\n"+
"G1 X105.61 Y91.69 Z2.1 F1080.0 E47.675\n"+
"G1 X108.57 Y88.92 Z2.1 F1080.0 E70.208\n"+
"G1 X109.02 Y88.28 Z2.1 F1080.0 E74.541\n"+
"G1 X109.66 Y87.83 Z2.1 F1080.0 E78.874\n"+
"G1 X110.8 Y86.32 Z2.1 F1080.0 E89.375\n"+
"G1 X111.43 Y85.87 Z2.1 F1080.0 E93.703\n"+
"G1 X110.93 Y88.28 Z2.1 F1080.0 E107.379\n"+
"G1 X111.57 Y87.83 Z2.1 F1080.0 E111.712\n"+
"G1 X112.7 Y86.32 Z2.1 F1080.0 E122.213\n"+
"G1 X113.34 Y85.87 Z2.1 F1080.0 E126.546\n"+
"G1 X112.2 Y88.28 Z2.1 F1080.0 E141.35\n"+
"G1 X112.84 Y87.83 Z2.1 F1080.0 E145.683\n"+
"G1 X114.61 Y85.87 Z2.1 F1080.0 E160.366\n"+
"G1 X114.11 Y88.28 Z2.1 F1080.0 E174.041\n"+
"G1 X114.75 Y87.83 Z2.1 F1080.0 E178.374\n"+
"G1 X115.89 Y86.32 Z2.1 F1080.0 E188.875\n"+
"G1 X116.52 Y85.87 Z2.1 F1080.0 E193.204\n"+
"G1 X115.39 Y88.28 Z2.1 F1080.0 E208.008\n"+
"G1 X117.8 Y85.87 Z2.1 F1080.0 E226.943\n"+
"G1 F240.0\n"+
"G1 E226.943\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.16 Y85.87 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E226.943\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y90.42 Z2.1 F1080.0 E35.725\n"+
"G1 F240.0\n"+
"G1 E35.725\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y88.51 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E35.725\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.25 Y85.87 Z2.1 F1080.0 E20.726\n"+
"G1 F240.0\n"+
"G1 E20.726\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X106.98 Y85.87 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E20.726\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.57 Y88.28 Z2.1 F1080.0 E18.935\n"+
"G1 X105.07 Y85.87 Z2.1 F1080.0 E32.609\n"+
"G1 X104.11 Y86.83 Z2.1 F1080.0 E40.116\n"+
"G1 F240.0\n"+
"G1 E40.116\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.11 Y86.19 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E40.116\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.43 Y85.87 Z2.1 F1080.0 E2.514\n"+
"G1 F240.0\n"+
"G1 E2.514\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.39 Y89.43 Z2.1 F3000.0\n"+
"G1 X105.61 Y96.78 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E2.514\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.06 Y96.15 Z2.1 F1080.0 E4.325\n"+
"G1 X108.57 Y94.01 Z2.1 F1080.0 E22.643\n"+
"G1 X109.02 Y93.37 Z2.1 F1080.0 E26.976\n"+
"G1 X105.61 Y94.88 Z2.1 F1080.0 E47.675\n"+
"G1 X108.57 Y92.1 Z2.1 F1080.0 E70.208\n"+
"G1 X109.02 Y91.47 Z2.1 F1080.0 E74.541\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y99.97 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.06 Y99.33 Z2.1 F1080.0 E4.325\n"+
"G1 X108.57 Y97.19 Z2.1 F1080.0 E22.643\n"+
"G1 X109.02 Y96.56 Z2.1 F1080.0 E26.976\n"+
"G1 X105.61 Y98.06 Z2.1 F1080.0 E47.675\n"+
"G1 X108.57 Y95.28 Z2.1 F1080.0 E70.208\n"+
"G1 X109.02 Y94.65 Z2.1 F1080.0 E74.541\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y103.15 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.06 Y102.51 Z2.1 F1080.0 E4.325\n"+
"G1 X108.57 Y100.38 Z2.1 F1080.0 E22.643\n"+
"G1 X109.02 Y99.74 Z2.1 F1080.0 E26.976\n"+
"G1 X105.61 Y101.24 Z2.1 F1080.0 E47.675\n"+
"G1 X108.57 Y98.47 Z2.1 F1080.0 E70.208\n"+
"G1 X109.02 Y97.83 Z2.1 F1080.0 E74.541\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.39 Y104.2 Z2.1 F3000.0\n"+
"G1 X98.31 Y111.72 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.57 Y101.65 Z2.1 F1080.0 E79.887\n"+
"G1 X109.02 Y101.01 Z2.1 F1080.0 E84.22\n"+
"G1 F240.0\n"+
"G1 E84.22\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.07 Y102.87 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E84.22\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y113.0 Z2.1 F1080.0 E80.26\n"+
"G1 X98.31 Y113.63 Z2.1 F1080.0 E84.588\n"+
"G1 F240.0\n"+
"G1 E84.588\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y114.9 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E84.588\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.34 Y102.87 Z2.1 F1080.0 E94.521\n"+
"G1 F240.0\n"+
"G1 E94.521\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.25 Y102.87 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E94.521\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y116.81 Z2.1 F1080.0 E109.523\n"+
"G1 F240.0\n"+
"G1 E109.523\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y118.09 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E109.523\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.63 Y108.76 Z2.1 F1080.0 E73.248\n"+
"G1 F240.0\n"+
"G1 E73.248\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.01 Y111.3 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E73.248\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y119.36 Z2.1 F1080.0 E64.088\n"+
"G1 X98.31 Y120.0 Z2.1 F1080.0 E68.421\n"+
"G1 F240.0\n"+
"G1 E68.421\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y121.27 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E68.421\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.82 Y113.08 Z2.1 F1080.0 E65.616\n"+
"G1 X107.12 Y112.46 Z2.1 F1080.0 E69.44\n"+
"G1 F240.0\n"+
"G1 E69.44\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.62 Y113.87 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E69.44\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y122.54 Z2.1 F1080.0 E68.888\n"+
"G1 X98.31 Y123.18 Z2.1 F1080.0 E73.216\n"+
"G1 F240.0\n"+
"G1 E73.216\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y124.45 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E73.216\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.03 Y115.29 Z2.1 F1080.0 E74.203\n"+
"G1 X108.11 Y114.65 Z2.1 F1080.0 E77.754\n"+
"G1 F240.0\n"+
"G1 E77.754\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.03 Y115.64 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E77.754\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.4 Y115.66 Z2.1 F1080.0 E3.535\n"+
"G1 X98.76 Y125.72 Z2.1 F1080.0 E80.939\n"+
"G1 X98.31 Y126.36 Z2.1 F1080.0 E85.262\n"+
"G1 F240.0\n"+
"G1 E85.262\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y127.63 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E85.262\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.78 Y116.16 Z2.1 F1080.0 E90.133\n"+
"G1 F240.0\n"+
"G1 E90.133\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X111.13 Y116.72 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E90.133\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.51 Y116.99 Z2.1 F1080.0 E3.758\n"+
"G1 X98.76 Y128.91 Z2.1 F1080.0 E96.722\n"+
"G1 X98.31 Y129.54 Z2.1 F1080.0 E101.05\n"+
"G1 F240.0\n"+
"G1 E101.05\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y130.81 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E101.05\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.22 Y116.91 Z2.1 F1080.0 E109.264\n"+
"G1 F240.0\n"+
"G1 E109.264\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.44 Y116.59 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E109.264\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X96.96 Y134.07 Z2.1 F1080.0 E137.34\n"+
"G1 F240.0\n"+
"G1 E137.34\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X86.42 Y157.34 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E137.34\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.75 Y142.01 Z2.1 F1080.0 E120.42\n"+
"G1 F240.0\n"+
"G1 E120.42\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.85 Y143.18 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E120.42\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.55 Y143.8 Z2.1 F1080.0 E3.829\n"+
"G1 X87.13 Y157.9 Z2.1 F1080.0 E115.877\n"+
"G1 F240.0\n"+
"G1 E115.877\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.01 Y158.94 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E115.877\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.1 Y158.3 Z2.1 F1080.0 E3.562\n"+
"G1 X102.35 Y144.6 Z2.1 F1080.0 E113.389\n"+
"G1 F240.0\n"+
"G1 E113.389\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.85 Y147.46 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E113.389\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.23 Y147.73 Z2.1 F1080.0 E3.756\n"+
"G1 X104.91 Y149.1 Z2.1 F1080.0 E11.561\n"+
"G1 X104.27 Y149.04 Z2.1 F1080.0 E15.103\n"+
"G1 X104.24 Y148.4 Z2.1 F1080.0 E18.642\n"+
"G1 X104.72 Y147.51 Z2.1 F1080.0 E24.232\n"+
"G1 X104.5 Y146.9 Z2.1 F1080.0 E27.862\n"+
"G1 X103.73 Y148.07 Z2.1 F1080.0 E35.646\n"+
"G1 X103.11 Y148.29 Z2.1 F1080.0 E39.311\n"+
"G1 X103.85 Y147.01 Z2.1 F1080.0 E47.55\n"+
"G1 X103.75 Y146.37 Z2.1 F1080.0 E51.102\n"+
"G1 X102.0 Y148.13 Z2.1 F1080.0 E64.867\n"+
"G1 X102.83 Y145.38 Z2.1 F1080.0 E80.795\n"+
"G1 X88.46 Y159.76 Z2.1 F1080.0 E193.751\n"+
"G1 F240.0\n"+
"G1 E193.751\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.9 Y162.5 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E193.751\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.15 Y152.65 Z2.1 F1080.0 E78.984\n"+
"G1 X99.37 Y152.03 Z2.1 F1080.0 E82.649\n"+
"G1 X88.86 Y161.26 Z2.1 F1080.0 E160.352\n"+
"G1 X89.22 Y160.64 Z2.1 F1080.0 E164.33\n"+
"G1 X99.21 Y150.92 Z2.1 F1080.0 E241.765\n"+
"G1 F240.0\n"+
"G1 E241.765\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.1 Y148.54 Z2.1 F3000.0\n"+
"G1 X101.93 Y148.35 Z2.1 F3000.0\n"+
"G1 X102.78 Y148.41 Z2.1 F3000.0\n"+
"G1 X104.79 Y149.79 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E241.765\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.92 Y147.66 Z2.1 F1080.0 E16.743\n"+
"G1 F240.0\n"+
"G1 E16.743\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.13 Y147.36 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E16.743\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.52 Y150.79 Z2.1 F1080.0 E27.641\n"+
"G1 X105.06 Y151.43 Z2.1 F1080.0 E32.026\n"+
"G1 F240.0\n"+
"G1 E32.026\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.57 Y148.74 Z2.1 F3000.0\n"+
"G1 X91.06 Y141.24 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E32.026\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.97 Y158.34 Z2.1 F1080.0 E134.295\n"+
"G1 F240.0\n"+
"G1 E134.295\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X74.47 Y156.56 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E134.295\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.05 Y142.98 Z2.1 F1080.0 E106.718\n"+
"G1 F240.0\n"+
"G1 E106.718\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X83.54 Y145.59 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E106.718\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.22 Y153.91 Z2.1 F1080.0 E65.352\n"+
"G1 F240.0\n"+
"G1 E65.352\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X75.72 Y152.14 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E65.352\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X80.52 Y147.33 Z2.1 F1080.0 E37.783\n"+
"G1 F240.0\n"+
"G1 E37.783\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.51 Y149.07 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E37.783\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X76.21 Y150.36 Z2.1 F1080.0 E10.206\n"+
"G1 F240.0\n"+
"G1 E10.206\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X82.14 Y156.53 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E10.206\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y112.43 Z2.1 F1080.0 E347.174\n"+
"G1 X126.87 Y111.8 Z2.1 F1080.0 E351.503\n"+
"G1 F240.0\n"+
"G1 E351.503\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.43 Y102.87 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E351.503\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.8 Y103.32 Z2.1 F1080.0 E4.328\n"+
"G1 X112.56 Y105.75 Z2.1 F1080.0 E22.657\n"+
"G1 F240.0\n"+
"G1 E22.657\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.03 Y106.37 Z2.1 F3000.0\n"+
"G1 F240.0\n"+
"G1 E22.657\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.52 Y102.87 Z2.1 F1080.0 E27.475\n"+
"G1 F240.0\n"+
"G1 E27.475\n"+
"G1 F1080.0\n"+
";\n"+
"(</surroundingLoop>)\n"+
"G1 F30.0\n"+
"(<layer> 2.4 )\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X93.055 Y139.175 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y131.549 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y111.258 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y103.957 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y89.078 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y89.078 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y85.078 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y85.078 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y89.078 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y89.078 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y103.277 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y111.128 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y133.629 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.426 Y163.491 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X90.593 Y174.941 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.302 Y171.647 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X72.316 Y161.279 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X75.721 Y149.182 Z2.4 </boundaryPoint>)\n"+
"(<perimeter> outer )\n"+
"M108 S110.0\n"+
"M108 S110.0\n"+
"G1 X113.52 Y102.87 Z2.4 F30.0\n"+
"G91\n"+
"G1 F20\n"+
"G1 F1500\n"+
"G1 X-0.3 Y-0.3 F1500\n"+
"G90\n"+
"G4 P3000\n"+
"G92 X0;set x 0\n"+
"G1 X-1.0 F3000.0 \n"+
"G1 X-500.0  F3200.0 ;horizontal move\n"+
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
"G1 X113.52 Y102.87 Z2.4 F3000.0\n"+
"G1 X119.1 Y103.06 Z2.4 F3000.0\n"+
"G1 X119.58 Y103.08 Z2.4 F606.386\n"+
"G1 F240.0\n"+
"G1 E27.475\n"+
"G1 F606.386\n"+
"G92 E0\n"+
";\n"+
"G1 X119.58 Y103.38 Z2.4 F540.0 E3.654\n"+
"G1 X127.43 Y111.23 Z2.4 F540.0 E139.358\n"+
"G1 X127.43 Y133.57 Z2.4 F540.0 E412.378\n"+
"G1 X110.25 Y163.32 Z2.4 F540.0 E832.245\n"+
"G1 X90.56 Y174.68 Z2.4 F540.0 E1110.14\n"+
"G1 X78.46 Y171.44 Z2.4 F540.0 E1263.23\n"+
"G1 X72.57 Y161.25 Z2.4 F540.0 E1407.112\n"+
"G1 X75.93 Y149.34 Z2.4 F540.0 E1558.287\n"+
"G1 X93.23 Y139.35 Z2.4 F540.0 E1802.496\n"+
"G1 X97.76 Y131.61 Z2.4 F540.0 E1912.044\n"+
"G1 X97.76 Y111.36 Z2.4 F540.0 E2159.63\n"+
"G1 X105.06 Y104.06 Z2.4 F540.0 E2285.827\n"+
"G1 X105.06 Y88.84 Z2.4 F540.0 E2471.824\n"+
"G1 X103.56 Y88.84 Z2.4 F540.0 E2490.158\n"+
"G1 X103.56 Y85.32 Z2.4 F540.0 E2533.18\n"+
"G1 X121.08 Y85.32 Z2.4 F540.0 E2747.313\n"+
"G1 X121.08 Y88.84 Z2.4 F540.0 E2790.335\n"+
"G1 X119.58 Y88.84 Z2.4 F540.0 E2808.669\n"+
"G1 X119.58 Y102.79 Z2.4 F540.0 E2979.181\n"+
"G1 F240.0\n"+
"G1 E2979.181\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X114.816 Y89.078 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y89.078 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y102.078 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.816 Y102.078 Z2.4 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X115.06 Y102.17 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E2979.181\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.06 Y88.84 Z2.4 F540.0 E162.996\n"+
"G1 X109.58 Y88.84 Z2.4 F540.0 E229.973\n"+
"G1 X109.58 Y102.32 Z2.4 F540.0 E394.729\n"+
"G1 X114.91 Y102.32 Z2.4 F540.0 E459.947\n"+
"G1 F240.0\n"+
"G1 E459.947\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X107.804 Y111.704 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.923 Y112.448 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.155 Y113.164 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.497 Y113.835 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.94 Y114.444 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.473 Y114.977 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.082 Y115.42 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.753 Y115.762 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.469 Y115.994 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.213 Y116.112 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.967 Y116.112 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.711 Y115.994 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.427 Y115.762 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.098 Y115.42 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.707 Y114.977 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.239 Y114.444 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.683 Y113.835 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.025 Y113.164 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y112.448 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y111.704 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y110.95 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y110.206 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.025 Y109.49 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.683 Y108.819 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.239 Y108.21 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.707 Y107.677 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.098 Y107.234 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.427 Y106.892 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.711 Y106.66 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.967 Y106.542 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.213 Y106.542 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.469 Y106.66 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.753 Y106.892 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.082 Y107.234 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.473 Y107.677 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.94 Y108.21 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.497 Y108.819 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.155 Y109.49 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.923 Y110.206 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.804 Y110.95 Z2.4 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X113.63 Y106.4 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E459.947\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.99 Y106.3 Z2.4 F540.0 E7.907\n"+
"G1 X112.19 Y106.3 Z2.4 F540.0 E17.587\n"+
"G1 X111.41 Y106.43 Z2.4 F540.0 E27.252\n"+
"G1 X110.66 Y106.67 Z2.4 F540.0 E36.915\n"+
"G1 X109.96 Y107.03 Z2.4 F540.0 E46.584\n"+
"G1 X109.32 Y107.49 Z2.4 F540.0 E56.253\n"+
"G1 X108.76 Y108.05 Z2.4 F540.0 E65.924\n"+
"G1 X108.29 Y108.69 Z2.4 F540.0 E75.583\n"+
"G1 X107.93 Y109.4 Z2.4 F540.0 E85.253\n"+
"G1 X107.69 Y110.15 Z2.4 F540.0 E94.916\n"+
"G1 X107.57 Y110.93 Z2.4 F540.0 E104.581\n"+
"G1 X107.57 Y111.72 Z2.4 F540.0 E114.261\n"+
"G1 X107.69 Y112.5 Z2.4 F540.0 E123.926\n"+
"G1 X107.93 Y113.26 Z2.4 F540.0 E133.589\n"+
"G1 X108.29 Y113.96 Z2.4 F540.0 E143.258\n"+
"G1 X108.76 Y114.6 Z2.4 F540.0 E152.917\n"+
"G1 X109.32 Y115.16 Z2.4 F540.0 E162.588\n"+
"G1 X109.96 Y115.63 Z2.4 F540.0 E172.257\n"+
"G1 X110.66 Y115.98 Z2.4 F540.0 E181.926\n"+
"G1 X111.41 Y116.23 Z2.4 F540.0 E191.589\n"+
"G1 X112.19 Y116.35 Z2.4 F540.0 E201.254\n"+
"G1 X112.99 Y116.35 Z2.4 F540.0 E210.934\n"+
"G1 X113.77 Y116.23 Z2.4 F540.0 E220.599\n"+
"G1 X114.52 Y115.98 Z2.4 F540.0 E230.262\n"+
"G1 X115.22 Y115.63 Z2.4 F540.0 E239.932\n"+
"G1 X115.86 Y115.16 Z2.4 F540.0 E249.591\n"+
"G1 X116.42 Y114.6 Z2.4 F540.0 E259.27\n"+
"G1 X116.89 Y113.96 Z2.4 F540.0 E268.929\n"+
"G1 X117.25 Y113.26 Z2.4 F540.0 E278.599\n"+
"G1 X117.49 Y112.5 Z2.4 F540.0 E288.262\n"+
"G1 X117.61 Y111.72 Z2.4 F540.0 E297.925\n"+
"G1 X117.61 Y110.93 Z2.4 F540.0 E307.605\n"+
"G1 X117.49 Y110.15 Z2.4 F540.0 E317.268\n"+
"G1 X117.25 Y109.4 Z2.4 F540.0 E326.931\n"+
"G1 X116.89 Y108.69 Z2.4 F540.0 E336.6\n"+
"G1 X116.42 Y108.05 Z2.4 F540.0 E346.259\n"+
"G1 X115.86 Y107.49 Z2.4 F540.0 E355.939\n"+
"G1 X115.22 Y107.03 Z2.4 F540.0 E365.598\n"+
"G1 X114.52 Y106.67 Z2.4 F540.0 E375.267\n"+
"G1 X113.9 Y106.47 Z2.4 F540.0 E383.172\n"+
"G1 F240.0\n"+
"G1 E383.172\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X111.269 Y134.809 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y134.986 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y135.115 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y135.194 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y135.22 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y135.194 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y135.115 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y134.986 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y134.809 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y134.59 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y134.334 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y134.046 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y133.734 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y133.406 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.683 Y133.07 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y132.734 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y132.406 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y132.094 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y131.806 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y131.55 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y131.331 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y131.154 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y131.024 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y130.946 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y130.92 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y130.946 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y131.024 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y131.154 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.269 Y131.331 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y131.55 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y131.806 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y132.094 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y132.406 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y132.734 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.383 Y133.07 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y133.406 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y133.734 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y134.046 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y134.334 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y134.59 Z2.4 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X116.08 Y107.24 Z2.4 F3000.0\n"+
"G1 X116.68 Y107.84 Z2.4 F3000.0\n"+
"G1 X117.18 Y108.52 Z2.4 F3000.0\n"+
"G1 X117.56 Y109.27 Z2.4 F3000.0\n"+
"G1 X117.82 Y110.07 Z2.4 F3000.0\n"+
"G1 X117.95 Y110.91 Z2.4 F3000.0\n"+
"G1 X112.39 Y130.69 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.172\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.8 Y130.8 Z2.4 F540.0 E7.375\n"+
"G1 X111.13 Y131.14 Z2.4 F540.0 E16.536\n"+
"G1 X110.6 Y131.66 Z2.4 F540.0 E25.662\n"+
"G1 X110.26 Y132.33 Z2.4 F540.0 E34.823\n"+
"G1 X110.17 Y132.7 Z2.4 F540.0 E39.4\n"+
"G1 X110.17 Y133.44 Z2.4 F540.0 E48.543\n"+
"G1 X110.26 Y133.81 Z2.4 F540.0 E53.12\n"+
"G1 X110.6 Y134.48 Z2.4 F540.0 E62.281\n"+
"G1 X111.13 Y135.0 Z2.4 F540.0 E71.407\n"+
"G1 X111.45 Y135.2 Z2.4 F540.0 E75.994\n"+
"G1 X112.16 Y135.43 Z2.4 F540.0 E85.146\n"+
"G1 X112.91 Y135.43 Z2.4 F540.0 E94.288\n"+
"G1 X113.27 Y135.34 Z2.4 F540.0 E98.866\n"+
"G1 X113.94 Y135.0 Z2.4 F540.0 E108.027\n"+
"G1 X114.47 Y134.48 Z2.4 F540.0 E117.153\n"+
"G1 X114.81 Y133.81 Z2.4 F540.0 E126.314\n"+
"G1 X114.9 Y133.44 Z2.4 F540.0 E130.891\n"+
"G1 X114.9 Y132.7 Z2.4 F540.0 E140.034\n"+
"G1 X114.81 Y132.33 Z2.4 F540.0 E144.611\n"+
"G1 X114.47 Y131.66 Z2.4 F540.0 E153.772\n"+
"G1 X113.94 Y131.14 Z2.4 F540.0 E162.898\n"+
"G1 X113.27 Y130.8 Z2.4 F540.0 E172.059\n"+
"G1 X112.68 Y130.69 Z2.4 F540.0 E179.434\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X103.236 Y144.585 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y145.194 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y145.727 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y146.17 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y146.512 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y146.743 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y146.862 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y146.862 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y146.743 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y146.512 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y146.17 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y145.727 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y145.194 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y144.585 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y143.914 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y143.198 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y142.454 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y141.7 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y140.956 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y140.24 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y139.569 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y138.96 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y138.427 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y137.984 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y137.642 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y137.41 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y137.291 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y137.291 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y137.41 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y137.642 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y137.984 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y138.427 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y138.96 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.236 Y139.569 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y140.24 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y140.956 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y141.7 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y142.454 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y143.198 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y143.914 Z2.4 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X110.93 Y130.86 Z2.4 F3000.0\n"+
"G1 X110.33 Y131.47 Z2.4 F3000.0\n"+
"G1 X109.12 Y137.38 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.51 Y137.18 Z2.4 F540.0 E7.904\n"+
"G1 X107.73 Y137.05 Z2.4 F540.0 E17.569\n"+
"G1 X106.93 Y137.05 Z2.4 F540.0 E27.249\n"+
"G1 X106.15 Y137.18 Z2.4 F540.0 E36.914\n"+
"G1 X105.4 Y137.42 Z2.4 F540.0 E46.577\n"+
"G1 X104.7 Y137.78 Z2.4 F540.0 E56.247\n"+
"G1 X104.06 Y138.24 Z2.4 F540.0 E65.899\n"+
"G1 X103.5 Y138.8 Z2.4 F540.0 E75.587\n"+
"G1 X103.03 Y139.44 Z2.4 F540.0 E85.246\n"+
"G1 X102.67 Y140.15 Z2.4 F540.0 E94.915\n"+
"G1 X102.43 Y140.9 Z2.4 F540.0 E104.578\n"+
"G1 X102.3 Y141.68 Z2.4 F540.0 E114.243\n"+
"G1 X102.3 Y142.47 Z2.4 F540.0 E123.923\n"+
"G1 X102.43 Y143.25 Z2.4 F540.0 E133.588\n"+
"G1 X102.67 Y144.01 Z2.4 F540.0 E143.239\n"+
"G1 X103.03 Y144.71 Z2.4 F540.0 E152.92\n"+
"G1 X103.5 Y145.35 Z2.4 F540.0 E162.579\n"+
"G1 X104.06 Y145.91 Z2.4 F540.0 E172.258\n"+
"G1 X104.7 Y146.38 Z2.4 F540.0 E181.917\n"+
"G1 X105.4 Y146.73 Z2.4 F540.0 E191.587\n"+
"G1 X106.15 Y146.98 Z2.4 F540.0 E201.25\n"+
"G1 X106.93 Y147.1 Z2.4 F540.0 E210.915\n"+
"G1 X107.73 Y147.1 Z2.4 F540.0 E220.595\n"+
"G1 X108.51 Y146.98 Z2.4 F540.0 E230.26\n"+
"G1 X109.26 Y146.73 Z2.4 F540.0 E239.923\n"+
"G1 X109.96 Y146.38 Z2.4 F540.0 E249.592\n"+
"G1 X110.6 Y145.91 Z2.4 F540.0 E259.251\n"+
"G1 X111.16 Y145.35 Z2.4 F540.0 E268.922\n"+
"G1 X111.63 Y144.71 Z2.4 F540.0 E278.588\n"+
"G1 X111.99 Y144.01 Z2.4 F540.0 E288.269\n"+
"G1 X112.23 Y143.25 Z2.4 F540.0 E297.92\n"+
"G1 X112.35 Y142.47 Z2.4 F540.0 E307.585\n"+
"G1 X112.35 Y141.68 Z2.4 F540.0 E317.265\n"+
"G1 X112.23 Y140.9 Z2.4 F540.0 E326.93\n"+
"G1 X111.99 Y140.15 Z2.4 F540.0 E336.593\n"+
"G1 X111.63 Y139.44 Z2.4 F540.0 E346.263\n"+
"G1 X111.16 Y138.8 Z2.4 F540.0 E355.929\n"+
"G1 X110.6 Y138.24 Z2.4 F540.0 E365.608\n"+
"G1 X109.96 Y137.78 Z2.4 F540.0 E375.26\n"+
"G1 X109.39 Y137.49 Z2.4 F540.0 E383.175\n"+
"G1 F240.0\n"+
"G1 E383.175\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X100.159 Y151.887 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.312 Y152.187 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.51 Y152.46 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.749 Y152.699 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.022 Y152.897 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.322 Y153.05 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.643 Y153.154 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.976 Y153.207 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.314 Y153.207 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.647 Y153.154 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.968 Y153.05 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.268 Y152.897 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.541 Y152.699 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.78 Y152.46 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y152.187 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y151.887 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.236 Y151.566 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y151.233 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y150.895 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.236 Y150.562 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y150.241 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y149.941 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.78 Y149.668 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.541 Y149.429 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.268 Y149.231 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.968 Y149.078 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.647 Y148.973 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.314 Y148.921 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.976 Y148.921 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.643 Y148.973 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.322 Y149.078 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.022 Y149.231 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.749 Y149.429 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.51 Y149.668 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.312 Y149.941 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.159 Y150.241 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y150.562 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y150.895 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y151.233 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y151.566 Z2.4 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X106.91 Y136.72 Z2.4 F3000.0\n"+
"G1 X106.07 Y136.85 Z2.4 F3000.0\n"+
"G1 X105.27 Y137.11 Z2.4 F3000.0\n"+
"G1 X104.52 Y137.49 Z2.4 F3000.0\n"+
"G1 X103.84 Y137.99 Z2.4 F3000.0\n"+
"G1 X103.24 Y138.59 Z2.4 F3000.0\n"+
"G1 X102.74 Y139.27 Z2.4 F3000.0\n"+
"G1 X102.36 Y140.02 Z2.4 F3000.0\n"+
"G1 X102.1 Y140.82 Z2.4 F3000.0\n"+
"G1 X101.97 Y141.66 Z2.4 F3000.0\n"+
"G1 X103.27 Y148.96 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.175\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.7 Y148.74 Z2.4 F540.0 E7.397\n"+
"G1 X101.96 Y148.68 Z2.4 F540.0 E16.542\n"+
"G1 X101.59 Y148.74 Z2.4 F540.0 E21.119\n"+
"G1 X100.9 Y149.03 Z2.4 F540.0 E30.265\n"+
"G1 X100.33 Y149.51 Z2.4 F540.0 E39.41\n"+
"G1 X100.11 Y149.82 Z2.4 F540.0 E43.987\n"+
"G1 X99.82 Y150.51 Z2.4 F540.0 E53.121\n"+
"G1 X99.76 Y151.25 Z2.4 F540.0 E62.278\n"+
"G1 X99.82 Y151.62 Z2.4 F540.0 E66.856\n"+
"G1 X100.11 Y152.31 Z2.4 F540.0 E76.001\n"+
"G1 X100.33 Y152.62 Z2.4 F540.0 E80.577\n"+
"G1 X100.9 Y153.1 Z2.4 F540.0 E89.723\n"+
"G1 X101.59 Y153.39 Z2.4 F540.0 E98.868\n"+
"G1 X102.33 Y153.45 Z2.4 F540.0 E108.014\n"+
"G1 X102.7 Y153.39 Z2.4 F540.0 E112.591\n"+
"G1 X103.39 Y153.1 Z2.4 F540.0 E121.736\n"+
"G1 X103.96 Y152.62 Z2.4 F540.0 E130.882\n"+
"G1 X104.18 Y152.31 Z2.4 F540.0 E135.459\n"+
"G1 X104.47 Y151.62 Z2.4 F540.0 E144.604\n"+
"G1 X104.53 Y150.88 Z2.4 F540.0 E153.749\n"+
"G1 X104.47 Y150.51 Z2.4 F540.0 E158.338\n"+
"G1 X104.18 Y149.82 Z2.4 F540.0 E167.472\n"+
"G1 X103.96 Y149.51 Z2.4 F540.0 E172.049\n"+
"G1 X103.51 Y149.11 Z2.4 F540.0 E179.434\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X78.894 Y163.827 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.236 Y164.498 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.679 Y165.107 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.212 Y165.64 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.821 Y166.082 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.492 Y166.425 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.208 Y166.657 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.952 Y166.775 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.706 Y166.775 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.45 Y166.657 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.166 Y166.425 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.837 Y166.082 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.446 Y165.64 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.979 Y165.107 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.422 Y164.498 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.764 Y163.827 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y163.111 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y162.367 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y161.613 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y160.868 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.764 Y160.153 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.422 Y159.482 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.979 Y158.873 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.446 Y158.34 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.837 Y157.897 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.166 Y157.555 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.45 Y157.323 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.706 Y157.205 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.952 Y157.205 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.208 Y157.323 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.492 Y157.555 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.821 Y157.897 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.212 Y158.34 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.679 Y158.873 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.236 Y159.482 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.894 Y160.153 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.662 Y160.868 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y161.613 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y162.367 Z2.4 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.662 Y163.111 Z2.4 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X101.93 Y148.35 Z2.4 F3000.0\n"+
"G1 X101.1 Y148.54 Z2.4 F3000.0\n"+
"G1 X87.54 Y159.24 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.16 Y158.72 Z2.4 F540.0 E7.901\n"+
"G1 X86.6 Y158.16 Z2.4 F540.0 E17.581\n"+
"G1 X85.96 Y157.69 Z2.4 F540.0 E27.24\n"+
"G1 X85.26 Y157.33 Z2.4 F540.0 E36.909\n"+
"G1 X84.51 Y157.09 Z2.4 F540.0 E46.572\n"+
"G1 X83.73 Y156.97 Z2.4 F540.0 E56.237\n"+
"G1 X82.93 Y156.97 Z2.4 F540.0 E65.917\n"+
"G1 X82.15 Y157.09 Z2.4 F540.0 E75.582\n"+
"G1 X81.4 Y157.33 Z2.4 F540.0 E85.245\n"+
"G1 X80.69 Y157.69 Z2.4 F540.0 E94.915\n"+
"G1 X80.06 Y158.16 Z2.4 F540.0 E104.574\n"+
"G1 X79.5 Y158.72 Z2.4 F540.0 E114.253\n"+
"G1 X79.03 Y159.36 Z2.4 F540.0 E123.912\n"+
"G1 X78.67 Y160.06 Z2.4 F540.0 E133.582\n"+
"G1 X78.43 Y160.81 Z2.4 F540.0 E143.245\n"+
"G1 X78.3 Y161.59 Z2.4 F540.0 E152.91\n"+
"G1 X78.3 Y162.39 Z2.4 F540.0 E162.59\n"+
"G1 X78.43 Y163.17 Z2.4 F540.0 E172.243\n"+
"G1 X78.67 Y163.92 Z2.4 F540.0 E181.917\n"+
"G1 X79.03 Y164.62 Z2.4 F540.0 E191.587\n"+
"G1 X79.5 Y165.26 Z2.4 F540.0 E201.246\n"+
"G1 X80.06 Y165.82 Z2.4 F540.0 E210.925\n"+
"G1 X80.69 Y166.29 Z2.4 F540.0 E220.584\n"+
"G1 X81.4 Y166.65 Z2.4 F540.0 E230.254\n"+
"G1 X82.15 Y166.89 Z2.4 F540.0 E239.917\n"+
"G1 X82.93 Y167.02 Z2.4 F540.0 E249.582\n"+
"G1 X83.73 Y167.02 Z2.4 F540.0 E259.262\n"+
"G1 X84.51 Y166.89 Z2.4 F540.0 E268.927\n"+
"G1 X85.26 Y166.65 Z2.4 F540.0 E278.59\n"+
"G1 X85.96 Y166.29 Z2.4 F540.0 E288.259\n"+
"G1 X86.6 Y165.82 Z2.4 F540.0 E297.918\n"+
"G1 X87.16 Y165.26 Z2.4 F540.0 E307.598\n"+
"G1 X87.63 Y164.62 Z2.4 F540.0 E317.257\n"+
"G1 X87.99 Y163.92 Z2.4 F540.0 E326.926\n"+
"G1 X88.23 Y163.17 Z2.4 F540.0 E336.601\n"+
"G1 X88.35 Y162.39 Z2.4 F540.0 E346.254\n"+
"G1 X88.35 Y161.59 Z2.4 F540.0 E355.934\n"+
"G1 X88.23 Y160.81 Z2.4 F540.0 E365.599\n"+
"G1 X87.99 Y160.06 Z2.4 F540.0 E375.262\n"+
"G1 X87.69 Y159.48 Z2.4 F540.0 E383.177\n"+
"G1 F240.0\n"+
"G1 E383.177\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<loop> inner )\n"+
"M108 S100.0\n"+
"M108 S100.0\n"+
"G1 X87.94 Y159.0 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.177\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.52 Y158.41 Z2.4 F1080.0 E3.997\n"+
"G1 X86.91 Y157.8 Z2.4 F1080.0 E8.805\n"+
"G1 X86.21 Y157.29 Z2.4 F1080.0 E13.601\n"+
"G1 X85.44 Y156.9 Z2.4 F1080.0 E18.407\n"+
"G1 X84.61 Y156.64 Z2.4 F1080.0 E23.208\n"+
"G1 X83.76 Y156.5 Z2.4 F1080.0 E28.001\n"+
"G1 X82.9 Y156.5 Z2.4 F1080.0 E32.812\n"+
"G1 X82.04 Y156.64 Z2.4 F1080.0 E37.61\n"+
"G1 X81.22 Y156.9 Z2.4 F1080.0 E42.406\n"+
"G1 X80.45 Y157.29 Z2.4 F1080.0 E47.211\n"+
"G1 X79.75 Y157.8 Z2.4 F1080.0 E52.007\n"+
"G1 X79.14 Y158.41 Z2.4 F1080.0 E56.815\n"+
"G1 X78.63 Y159.11 Z2.4 F1080.0 E61.611\n"+
"G1 X78.24 Y159.88 Z2.4 F1080.0 E66.417\n"+
"G1 X77.97 Y160.7 Z2.4 F1080.0 E71.213\n"+
"G1 X77.84 Y161.56 Z2.4 F1080.0 E76.011\n"+
"G1 X77.84 Y162.42 Z2.4 F1080.0 E80.822\n"+
"G1 X77.97 Y163.28 Z2.4 F1080.0 E85.62\n"+
"G1 X78.24 Y164.1 Z2.4 F1080.0 E90.416\n"+
"G1 X78.63 Y164.87 Z2.4 F1080.0 E95.221\n"+
"G1 X79.14 Y165.57 Z2.4 F1080.0 E100.017\n"+
"G1 X79.75 Y166.18 Z2.4 F1080.0 E104.825\n"+
"G1 X80.45 Y166.69 Z2.4 F1080.0 E109.622\n"+
"G1 X81.22 Y167.08 Z2.4 F1080.0 E114.427\n"+
"G1 X82.04 Y167.34 Z2.4 F1080.0 E119.221\n"+
"G1 X82.9 Y167.48 Z2.4 F1080.0 E124.02\n"+
"G1 X83.76 Y167.48 Z2.4 F1080.0 E128.831\n"+
"G1 X84.61 Y167.34 Z2.4 F1080.0 E133.624\n"+
"G1 X85.44 Y167.08 Z2.4 F1080.0 E138.424\n"+
"G1 X86.21 Y166.69 Z2.4 F1080.0 E143.229\n"+
"G1 X86.91 Y166.18 Z2.4 F1080.0 E148.025\n"+
"G1 X87.52 Y165.57 Z2.4 F1080.0 E152.834\n"+
"G1 X88.03 Y164.87 Z2.4 F1080.0 E157.63\n"+
"G1 X88.42 Y164.1 Z2.4 F1080.0 E162.435\n"+
"G1 X88.68 Y163.28 Z2.4 F1080.0 E167.231\n"+
"G1 X88.82 Y162.42 Z2.4 F1080.0 E172.029\n"+
"G1 X88.82 Y161.56 Z2.4 F1080.0 E176.84\n"+
"G1 X88.68 Y160.7 Z2.4 F1080.0 E181.638\n"+
"G1 X88.42 Y159.88 Z2.4 F1080.0 E186.434\n"+
"G1 X88.09 Y159.24 Z2.4 F1080.0 E190.442\n"+
"G1 F240.0\n"+
"G1 E190.442\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.79 Y152.67 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.442\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.29 Y153.24 Z2.4 F1080.0 E4.176\n"+
"G1 X100.65 Y153.5 Z2.4 F1080.0 E6.667\n"+
"G1 X101.05 Y153.7 Z2.4 F1080.0 E9.149\n"+
"G1 X101.48 Y153.84 Z2.4 F1080.0 E11.64\n"+
"G1 X101.92 Y153.91 Z2.4 F1080.0 E14.136\n"+
"G1 X102.37 Y153.91 Z2.4 F1080.0 E16.625\n"+
"G1 X102.81 Y153.84 Z2.4 F1080.0 E19.116\n"+
"G1 X103.24 Y153.7 Z2.4 F1080.0 E21.612\n"+
"G1 X103.64 Y153.5 Z2.4 F1080.0 E24.094\n"+
"G1 X104.0 Y153.24 Z2.4 F1080.0 E26.585\n"+
"G1 X104.32 Y152.92 Z2.4 F1080.0 E29.083\n"+
"G1 X104.58 Y152.56 Z2.4 F1080.0 E31.574\n"+
"G1 X104.78 Y152.16 Z2.4 F1080.0 E34.056\n"+
"G1 X104.92 Y151.73 Z2.4 F1080.0 E36.55\n"+
"G1 X104.99 Y151.29 Z2.4 F1080.0 E39.042\n"+
"G1 X104.99 Y150.84 Z2.4 F1080.0 E41.531\n"+
"G1 X104.92 Y150.4 Z2.4 F1080.0 E44.023\n"+
"G1 X104.78 Y149.97 Z2.4 F1080.0 E46.517\n"+
"G1 X104.58 Y149.57 Z2.4 F1080.0 E49.0\n"+
"G1 X104.32 Y149.21 Z2.4 F1080.0 E51.49\n"+
"G1 X104.0 Y148.89 Z2.4 F1080.0 E53.988\n"+
"G1 X103.64 Y148.63 Z2.4 F1080.0 E56.479\n"+
"G1 X103.24 Y148.43 Z2.4 F1080.0 E58.961\n"+
"G1 X102.81 Y148.29 Z2.4 F1080.0 E61.457\n"+
"G1 X102.37 Y148.22 Z2.4 F1080.0 E63.948\n"+
"G1 X101.92 Y148.22 Z2.4 F1080.0 E66.437\n"+
"G1 X101.48 Y148.29 Z2.4 F1080.0 E68.933\n"+
"G1 X101.05 Y148.43 Z2.4 F1080.0 E71.424\n"+
"G1 X100.65 Y148.63 Z2.4 F1080.0 E73.906\n"+
"G1 X100.29 Y148.89 Z2.4 F1080.0 E76.397\n"+
"G1 X99.97 Y149.21 Z2.4 F1080.0 E78.899\n"+
"G1 X99.71 Y149.57 Z2.4 F1080.0 E81.386\n"+
"G1 X99.51 Y149.97 Z2.4 F1080.0 E83.868\n"+
"G1 X99.37 Y150.4 Z2.4 F1080.0 E86.365\n"+
"G1 X99.3 Y150.84 Z2.4 F1080.0 E88.856\n"+
"G1 X99.3 Y151.29 Z2.4 F1080.0 E91.345\n"+
"G1 X99.37 Y151.73 Z2.4 F1080.0 E93.835\n"+
"G1 X99.64 Y152.43 Z2.4 F1080.0 E98.004\n"+
"G1 F240.0\n"+
"G1 E98.004\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.82 Y149.64 Z2.4 F3000.0\n"+
"G1 X104.22 Y146.6 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E98.004\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.22 Y147.17 Z2.4 F1080.0 E6.395\n"+
"G1 X106.04 Y147.43 Z2.4 F1080.0 E11.191\n"+
"G1 X106.9 Y147.57 Z2.4 F1080.0 E15.994\n"+
"G1 X107.76 Y147.57 Z2.4 F1080.0 E20.806\n"+
"G1 X108.61 Y147.43 Z2.4 F1080.0 E25.598\n"+
"G1 X109.44 Y147.17 Z2.4 F1080.0 E30.394\n"+
"G1 X110.21 Y146.77 Z2.4 F1080.0 E35.204\n"+
"G1 X110.91 Y146.26 Z2.4 F1080.0 E40.0\n"+
"G1 X111.52 Y145.65 Z2.4 F1080.0 E44.809\n"+
"G1 X112.03 Y144.96 Z2.4 F1080.0 E49.605\n"+
"G1 X112.42 Y144.18 Z2.4 F1080.0 E54.41\n"+
"G1 X112.68 Y143.36 Z2.4 F1080.0 E59.206\n"+
"G1 X112.82 Y142.51 Z2.4 F1080.0 E64.004\n"+
"G1 X112.82 Y141.64 Z2.4 F1080.0 E68.815\n"+
"G1 X112.68 Y140.79 Z2.4 F1080.0 E73.613\n"+
"G1 X112.42 Y139.97 Z2.4 F1080.0 E78.409\n"+
"G1 X112.03 Y139.2 Z2.4 F1080.0 E83.214\n"+
"G1 X111.52 Y138.5 Z2.4 F1080.0 E88.011\n"+
"G1 X110.91 Y137.89 Z2.4 F1080.0 E92.819\n"+
"G1 X110.21 Y137.38 Z2.4 F1080.0 E97.618\n"+
"G1 X109.44 Y136.99 Z2.4 F1080.0 E102.426\n"+
"G1 X108.61 Y136.72 Z2.4 F1080.0 E107.222\n"+
"G1 X107.76 Y136.59 Z2.4 F1080.0 E112.014\n"+
"G1 X106.9 Y136.59 Z2.4 F1080.0 E116.826\n"+
"G1 X106.04 Y136.72 Z2.4 F1080.0 E121.629\n"+
"G1 X105.22 Y136.99 Z2.4 F1080.0 E126.425\n"+
"G1 X104.45 Y137.38 Z2.4 F1080.0 E131.223\n"+
"G1 X103.75 Y137.89 Z2.4 F1080.0 E136.022\n"+
"G1 X103.14 Y138.5 Z2.4 F1080.0 E140.83\n"+
"G1 X102.63 Y139.2 Z2.4 F1080.0 E145.627\n"+
"G1 X102.24 Y139.97 Z2.4 F1080.0 E150.432\n"+
"G1 X101.97 Y140.79 Z2.4 F1080.0 E155.228\n"+
"G1 X101.84 Y141.64 Z2.4 F1080.0 E160.026\n"+
"G1 X101.84 Y142.51 Z2.4 F1080.0 E164.837\n"+
"G1 X101.97 Y143.36 Z2.4 F1080.0 E169.635\n"+
"G1 X102.24 Y144.18 Z2.4 F1080.0 E174.431\n"+
"G1 X102.63 Y144.96 Z2.4 F1080.0 E179.236\n"+
"G1 X103.14 Y145.65 Z2.4 F1080.0 E184.032\n"+
"G1 X103.98 Y146.43 Z2.4 F1080.0 E190.413\n"+
"G1 F240.0\n"+
"G1 E190.413\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X102.1 Y143.33 Z2.4 F3000.0\n"+
"G1 X101.97 Y142.5 Z2.4 F3000.0\n"+
"G1 X101.97 Y141.66 Z2.4 F3000.0\n"+
"G1 X111.45 Y116.71 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.413\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.16 Y116.82 Z2.4 F1080.0 E3.999\n"+
"G1 X113.02 Y116.82 Z2.4 F1080.0 E8.81\n"+
"G1 X113.88 Y116.68 Z2.4 F1080.0 E13.608\n"+
"G1 X114.7 Y116.42 Z2.4 F1080.0 E18.404\n"+
"G1 X115.47 Y116.02 Z2.4 F1080.0 E23.209\n"+
"G1 X116.17 Y115.52 Z2.4 F1080.0 E28.005\n"+
"G1 X116.78 Y114.9 Z2.4 F1080.0 E32.813\n"+
"G1 X117.29 Y114.21 Z2.4 F1080.0 E37.61\n"+
"G1 X117.68 Y113.43 Z2.4 F1080.0 E42.415\n"+
"G1 X117.95 Y112.61 Z2.4 F1080.0 E47.211\n"+
"G1 X118.08 Y111.76 Z2.4 F1080.0 E52.009\n"+
"G1 X118.08 Y110.89 Z2.4 F1080.0 E56.82\n"+
"G1 X117.95 Y110.04 Z2.4 F1080.0 E61.618\n"+
"G1 X117.68 Y109.22 Z2.4 F1080.0 E66.414\n"+
"G1 X117.29 Y108.45 Z2.4 F1080.0 E71.219\n"+
"G1 X116.78 Y107.75 Z2.4 F1080.0 E76.015\n"+
"G1 X116.17 Y107.14 Z2.4 F1080.0 E80.824\n"+
"G1 X115.47 Y106.63 Z2.4 F1080.0 E85.62\n"+
"G1 X114.7 Y106.24 Z2.4 F1080.0 E90.425\n"+
"G1 X113.88 Y105.97 Z2.4 F1080.0 E95.221\n"+
"G1 X113.02 Y105.84 Z2.4 F1080.0 E100.019\n"+
"G1 X112.16 Y105.84 Z2.4 F1080.0 E104.83\n"+
"G1 X111.3 Y105.97 Z2.4 F1080.0 E109.628\n"+
"G1 X110.48 Y106.24 Z2.4 F1080.0 E114.424\n"+
"G1 X109.71 Y106.63 Z2.4 F1080.0 E119.229\n"+
"G1 X109.01 Y107.14 Z2.4 F1080.0 E124.025\n"+
"G1 X108.4 Y107.75 Z2.4 F1080.0 E128.834\n"+
"G1 X107.89 Y108.45 Z2.4 F1080.0 E133.63\n"+
"G1 X107.5 Y109.22 Z2.4 F1080.0 E138.435\n"+
"G1 X107.24 Y110.04 Z2.4 F1080.0 E143.231\n"+
"G1 X107.1 Y110.89 Z2.4 F1080.0 E148.029\n"+
"G1 X107.1 Y111.76 Z2.4 F1080.0 E152.84\n"+
"G1 X107.24 Y112.61 Z2.4 F1080.0 E157.638\n"+
"G1 X107.5 Y113.43 Z2.4 F1080.0 E162.434\n"+
"G1 X107.89 Y114.21 Z2.4 F1080.0 E167.239\n"+
"G1 X108.4 Y114.9 Z2.4 F1080.0 E172.036\n"+
"G1 X109.01 Y115.52 Z2.4 F1080.0 E176.844\n"+
"G1 X109.71 Y116.02 Z2.4 F1080.0 E181.64\n"+
"G1 X110.48 Y116.42 Z2.4 F1080.0 E186.445\n"+
"G1 X111.17 Y116.64 Z2.4 F1080.0 E190.44\n"+
"G1 F240.0\n"+
"G1 E190.44\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X108.0 Y114.14 Z2.4 F3000.0\n"+
"G1 X107.62 Y113.39 Z2.4 F3000.0\n"+
"G1 X107.36 Y112.58 Z2.4 F3000.0\n"+
"G1 X107.23 Y111.75 Z2.4 F3000.0\n"+
"G1 X107.23 Y110.9 Z2.4 F3000.0\n"+
"G1 X111.45 Y102.78 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.44\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.52 Y102.78 Z2.4 F1080.0 E22.628\n"+
"G1 X115.52 Y88.37 Z2.4 F1080.0 E102.683\n"+
"G1 X109.11 Y88.37 Z2.4 F1080.0 E138.294\n"+
"G1 X109.11 Y102.78 Z2.4 F1080.0 E218.35\n"+
"G1 X111.16 Y102.78 Z2.4 F1080.0 E229.733\n"+
"G1 F240.0\n"+
"G1 E229.733\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X107.23 Y110.9 Z2.4 F3000.0\n"+
"G1 X112.39 Y130.22 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E229.733\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.65 Y130.35 Z2.4 F1080.0 E4.166\n"+
"G1 X111.24 Y130.52 Z2.4 F1080.0 E6.658\n"+
"G1 X110.85 Y130.76 Z2.4 F1080.0 E9.16\n"+
"G1 X110.51 Y131.05 Z2.4 F1080.0 E11.642\n"+
"G1 X110.22 Y131.39 Z2.4 F1080.0 E14.132\n"+
"G1 X109.99 Y131.77 Z2.4 F1080.0 E16.625\n"+
"G1 X109.82 Y132.19 Z2.4 F1080.0 E19.116\n"+
"G1 X109.71 Y132.62 Z2.4 F1080.0 E21.614\n"+
"G1 X109.68 Y133.07 Z2.4 F1080.0 E24.098\n"+
"G1 X109.71 Y133.52 Z2.4 F1080.0 E26.583\n"+
"G1 X109.82 Y133.95 Z2.4 F1080.0 E29.081\n"+
"G1 X109.99 Y134.37 Z2.4 F1080.0 E31.572\n"+
"G1 X110.22 Y134.75 Z2.4 F1080.0 E34.065\n"+
"G1 X110.51 Y135.09 Z2.4 F1080.0 E36.555\n"+
"G1 X110.85 Y135.38 Z2.4 F1080.0 E39.033\n"+
"G1 X111.24 Y135.62 Z2.4 F1080.0 E41.537\n"+
"G1 X111.65 Y135.79 Z2.4 F1080.0 E44.028\n"+
"G1 X112.09 Y135.89 Z2.4 F1080.0 E46.524\n"+
"G1 X112.53 Y135.93 Z2.4 F1080.0 E49.009\n"+
"G1 X112.98 Y135.89 Z2.4 F1080.0 E51.494\n"+
"G1 X113.42 Y135.79 Z2.4 F1080.0 E53.99\n"+
"G1 X113.83 Y135.62 Z2.4 F1080.0 E56.481\n"+
"G1 X114.21 Y135.38 Z2.4 F1080.0 E58.98\n"+
"G1 X114.55 Y135.09 Z2.4 F1080.0 E61.463\n"+
"G1 X114.84 Y134.75 Z2.4 F1080.0 E63.949\n"+
"G1 X115.08 Y134.37 Z2.4 F1080.0 E66.442\n"+
"G1 X115.25 Y133.95 Z2.4 F1080.0 E68.935\n"+
"G1 X115.36 Y133.52 Z2.4 F1080.0 E71.432\n"+
"G1 X115.39 Y133.07 Z2.4 F1080.0 E73.917\n"+
"G1 X115.36 Y132.62 Z2.4 F1080.0 E76.402\n"+
"G1 X115.25 Y132.19 Z2.4 F1080.0 E78.899\n"+
"G1 X115.08 Y131.77 Z2.4 F1080.0 E81.391\n"+
"G1 X114.84 Y131.39 Z2.4 F1080.0 E83.885\n"+
"G1 X114.55 Y131.05 Z2.4 F1080.0 E86.371\n"+
"G1 X114.21 Y130.76 Z2.4 F1080.0 E88.857\n"+
"G1 X113.83 Y130.52 Z2.4 F1080.0 E91.354\n"+
"G1 X113.42 Y130.35 Z2.4 F1080.0 E93.847\n"+
"G1 X112.68 Y130.22 Z2.4 F1080.0 E98.012\n"+
"G1 F240.0\n"+
"G1 E98.012\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> outer )\n"+
"G1 X124.68 Y137.39 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E98.012\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.91 Y162.98 Z2.4 F1080.0 E164.114\n"+
"G1 X90.49 Y174.18 Z2.4 F1080.0 E288.667\n"+
"G1 X78.77 Y171.04 Z2.4 F1080.0 E356.107\n"+
"G1 X73.08 Y161.18 Z2.4 F1080.0 E419.352\n"+
"G1 X76.32 Y149.65 Z2.4 F1080.0 E485.926\n"+
"G1 X93.57 Y139.69 Z2.4 F1080.0 E596.564\n"+
"G1 X98.22 Y131.74 Z2.4 F1080.0 E647.744\n"+
"G1 X98.22 Y111.55 Z2.4 F1080.0 E759.91\n"+
"G1 X105.52 Y104.25 Z2.4 F1080.0 E817.272\n"+
"G1 X105.52 Y88.37 Z2.4 F1080.0 E905.472\n"+
"G1 X104.02 Y88.37 Z2.4 F1080.0 E913.806\n"+
"G1 X104.02 Y85.78 Z2.4 F1080.0 E928.194\n"+
"G1 X120.61 Y85.78 Z2.4 F1080.0 E1020.361\n"+
"G1 X120.61 Y88.37 Z2.4 F1080.0 E1034.75\n"+
"G1 X119.11 Y88.37 Z2.4 F1080.0 E1043.083\n"+
"G1 X119.11 Y103.57 Z2.4 F1080.0 E1127.506\n"+
"G1 X126.96 Y111.42 Z2.4 F1080.0 E1189.189\n"+
"G1 X126.96 Y133.44 Z2.4 F1080.0 E1311.522\n"+
"G1 X124.82 Y137.14 Z2.4 F1080.0 E1335.272\n"+
"G1 F240.0\n"+
"G1 E1335.272\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"G1 X98.98 Y110.92 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E1335.272\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.61 Y110.92 Z2.4 F1080.0 E3.539\n"+
"G1 X124.74 Y136.21 Z2.4 F1080.0 E201.589\n"+
"G1 X124.9 Y136.84 Z2.4 F1080.0 E205.19\n"+
"G1 F240.0\n"+
"G1 E205.19\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X124.43 Y137.65 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E205.19\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y112.19 Z2.4 F1080.0 E200.863\n"+
"G1 X98.34 Y111.56 Z2.4 F1080.0 E205.057\n"+
"G1 F240.0\n"+
"G1 E205.057\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y113.44 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E205.057\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y114.07 Z2.4 F1080.0 E4.328\n"+
"G1 X123.57 Y138.23 Z2.4 F1080.0 E196.722\n"+
"G1 X123.73 Y138.86 Z2.4 F1080.0 E200.318\n"+
"G1 F240.0\n"+
"G1 E200.318\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X123.27 Y139.66 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E200.318\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.79 Y131.18 Z2.4 F1080.0 E66.625\n"+
"G1 F240.0\n"+
"G1 E66.625\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.42 Y130.82 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E66.625\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y115.34 Z2.4 F1080.0 E122.308\n"+
"G1 X98.31 Y114.71 Z2.4 F1080.0 E126.636\n"+
"G1 F240.0\n"+
"G1 E126.636\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y116.62 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E126.636\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.89 Y130.2 Z2.4 F1080.0 E106.726\n"+
"G1 F240.0\n"+
"G1 E106.726\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.99 Y130.57 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E106.726\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y117.89 Z2.4 F1080.0 E99.616\n"+
"G1 F240.0\n"+
"G1 E99.616\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y119.8 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E99.616\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.94 Y130.89 Z2.4 F1080.0 E89.286\n"+
"G1 X110.04 Y131.52 Z2.4 F1080.0 E92.841\n"+
"G1 F240.0\n"+
"G1 E92.841\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.67 Y132.43 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E92.841\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y121.07 Z2.4 F1080.0 E89.213\n"+
"G1 F240.0\n"+
"G1 E89.213\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y122.98 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E89.213\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.25 Y134.92 Z2.4 F1080.0 E93.798\n"+
"G1 F240.0\n"+
"G1 E93.798\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.68 Y135.35 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E93.798\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.08 Y144.28 Z2.4 F1080.0 E71.995\n"+
"G1 X120.24 Y144.91 Z2.4 F1080.0 E75.597\n"+
"G1 F240.0\n"+
"G1 E75.597\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.77 Y145.72 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E75.597\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.61 Y145.09 Z2.4 F1080.0 E3.602\n"+
"G1 X98.76 Y124.89 Z2.4 F1080.0 E164.882\n"+
"G1 X98.31 Y124.25 Z2.4 F1080.0 E169.21\n"+
"G1 F240.0\n"+
"G1 E169.21\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y126.16 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E169.21\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.85 Y136.7 Z2.4 F1080.0 E82.822\n"+
"G1 F240.0\n"+
"G1 E82.822\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.37 Y136.5 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E82.822\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y127.44 Z2.4 F1080.0 E71.19\n"+
"G1 F240.0\n"+
"G1 E71.19\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y129.35 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E71.19\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.7 Y136.74 Z2.4 F1080.0 E58.085\n"+
"G1 F240.0\n"+
"G1 E58.085\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.8 Y137.1 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E58.085\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y130.62 Z2.4 F1080.0 E50.963\n"+
"G1 F240.0\n"+
"G1 E50.963\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.03 Y132.25 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.963\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.65 Y137.87 Z2.4 F1080.0 E44.159\n"+
"G1 F240.0\n"+
"G1 E44.159\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.02 Y138.51 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E44.159\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X97.56 Y133.05 Z2.4 F1080.0 E42.921\n"+
"G1 F240.0\n"+
"G1 E42.921\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X96.85 Y134.25 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E42.921\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.1 Y139.06 Z2.4 F1080.0 E39.518\n"+
"G1 X102.29 Y139.68 Z2.4 F1080.0 E43.146\n"+
"G1 F240.0\n"+
"G1 E43.146\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.94 Y140.61 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E43.146\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X96.39 Y135.06 Z2.4 F1080.0 E43.632\n"+
"G1 F240.0\n"+
"G1 E43.632\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X95.68 Y136.26 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E43.632\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.3 Y141.69 Z2.4 F1080.0 E43.419\n"+
"G1 X101.75 Y142.33 Z2.4 F1080.0 E47.752\n"+
"G1 F240.0\n"+
"G1 E47.752\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X102.06 Y143.91 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E47.752\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X95.36 Y137.69 Z2.4 F1080.0 E50.754\n"+
"G1 X95.21 Y137.06 Z2.4 F1080.0 E54.35\n"+
"G1 F240.0\n"+
"G1 E54.35\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X94.51 Y138.27 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E54.35\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.09 Y156.38 Z2.4 F1080.0 E144.183\n"+
"G1 X113.25 Y157.01 Z2.4 F1080.0 E147.785\n"+
"G1 F240.0\n"+
"G1 E147.785\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.78 Y157.82 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E147.785\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.63 Y157.19 Z2.4 F1080.0 E3.602\n"+
"G1 X104.83 Y149.87 Z2.4 F1080.0 E63.004\n"+
"G1 F240.0\n"+
"G1 E63.004\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.96 Y151.91 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E63.004\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.93 Y158.4 Z2.4 F1080.0 E52.908\n"+
"G1 X112.08 Y159.03 Z2.4 F1080.0 E56.51\n"+
"G1 X104.54 Y152.76 Z2.4 F1080.0 E110.983\n"+
"G1 X104.6 Y153.4 Z2.4 F1080.0 E114.525\n"+
"G1 X111.46 Y159.21 Z2.4 F1080.0 E164.472\n"+
"G1 X111.62 Y159.84 Z2.4 F1080.0 E168.072\n"+
"G1 F240.0\n"+
"G1 E168.072\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.53 Y153.66 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E168.072\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.92 Y161.05 Z2.4 F1080.0 E58.065\n"+
"G1 F240.0\n"+
"G1 E58.065\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.45 Y161.85 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E58.065\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.57 Y153.97 Z2.4 F1080.0 E61.923\n"+
"G1 F240.0\n"+
"G1 E61.923\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X100.07 Y152.84 Z2.4 F3000.0\n"+
"G1 X99.24 Y150.64 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E61.923\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X90.29 Y141.69 Z2.4 F1080.0 E70.302\n"+
"G1 F240.0\n"+
"G1 E70.302\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X91.1 Y141.22 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E70.302\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X91.73 Y141.38 Z2.4 F1080.0 E3.602\n"+
"G1 X99.42 Y149.05 Z2.4 F1080.0 E63.965\n"+
"G1 X99.55 Y149.68 Z2.4 F1080.0 E67.545\n"+
"G1 F240.0\n"+
"G1 E67.545\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X92.31 Y140.53 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E67.545\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X92.94 Y140.68 Z2.4 F1080.0 E3.6\n"+
"G1 X99.81 Y148.61 Z2.4 F1080.0 E61.898\n"+
"G1 X100.45 Y148.67 Z2.4 F1080.0 E65.44\n"+
"G1 X93.11 Y140.06 Z2.4 F1080.0 E128.258\n"+
"G1 X93.74 Y140.22 Z2.4 F1080.0 E131.859\n"+
"G1 X101.3 Y148.25 Z2.4 F1080.0 E193.138\n"+
"G1 F240.0\n"+
"G1 E193.138\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.34 Y148.38 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E193.138\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X94.04 Y139.07 Z2.4 F1080.0 E73.095\n"+
"G1 F240.0\n"+
"G1 E73.095\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X89.08 Y142.39 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E73.095\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.69 Y163.0 Z2.4 F1080.0 E161.931\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X108.88 Y163.46 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.25 Y163.31 Z2.4 F1080.0 E3.602\n"+
"G1 X88.27 Y142.85 Z2.4 F1080.0 E162.456\n"+
"G1 F240.0\n"+
"G1 E162.456\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X87.06 Y143.55 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E162.456\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.69 Y143.71 Z2.4 F1080.0 E3.602\n"+
"G1 X107.04 Y164.01 Z2.4 F1080.0 E159.398\n"+
"G1 X107.67 Y164.16 Z2.4 F1080.0 E162.995\n"+
"G1 F240.0\n"+
"G1 E162.995\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X106.86 Y164.63 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E162.995\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.24 Y164.47 Z2.4 F1080.0 E3.591\n"+
"G1 X86.26 Y144.02 Z2.4 F1080.0 E162.445\n"+
"G1 F240.0\n"+
"G1 E162.445\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X85.05 Y144.72 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E162.445\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X85.67 Y144.87 Z2.4 F1080.0 E3.596\n"+
"G1 X105.03 Y165.17 Z2.4 F1080.0 E159.4\n"+
"G1 X105.66 Y165.33 Z2.4 F1080.0 E163.001\n"+
"G1 F240.0\n"+
"G1 E163.001\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.85 Y165.79 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E163.001\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.22 Y165.64 Z2.4 F1080.0 E3.6\n"+
"G1 X84.24 Y145.18 Z2.4 F1080.0 E162.455\n"+
"G1 F240.0\n"+
"G1 E162.455\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X83.03 Y145.88 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E162.455\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.64 Y166.49 Z2.4 F1080.0 E161.931\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X102.83 Y166.96 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E161.931\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.2 Y166.8 Z2.4 F1080.0 E3.6\n"+
"G1 X82.85 Y146.51 Z2.4 F1080.0 E159.4\n"+
"G1 X82.22 Y146.35 Z2.4 F1080.0 E163.002\n"+
"G1 F240.0\n"+
"G1 E163.002\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X81.01 Y147.05 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E163.002\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X81.64 Y147.2 Z2.4 F1080.0 E3.595\n"+
"G1 X101.62 Y167.66 Z2.4 F1080.0 E162.453\n"+
"G1 F240.0\n"+
"G1 E162.453\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X100.81 Y168.12 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E162.453\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.19 Y167.97 Z2.4 F1080.0 E3.596\n"+
"G1 X80.83 Y147.67 Z2.4 F1080.0 E159.4\n"+
"G1 X80.2 Y147.51 Z2.4 F1080.0 E163.002\n"+
"G1 F240.0\n"+
"G1 E163.002\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.99 Y148.21 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E163.002\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.62 Y148.37 Z2.4 F1080.0 E3.596\n"+
"G1 X99.6 Y168.82 Z2.4 F1080.0 E162.443\n"+
"G1 F240.0\n"+
"G1 E162.443\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.8 Y169.29 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E162.443\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.17 Y169.13 Z2.4 F1080.0 E3.602\n"+
"G1 X78.81 Y148.83 Z2.4 F1080.0 E159.402\n"+
"G1 X78.19 Y148.68 Z2.4 F1080.0 E162.998\n"+
"G1 X84.06 Y156.46 Z2.4 F1080.0 E217.13\n"+
"G1 X76.97 Y149.38 Z2.4 F1080.0 E272.752\n"+
"G1 F240.0\n"+
"G1 E272.752\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X82.76 Y156.43 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E272.752\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X76.32 Y149.99 Z2.4 F1080.0 E50.59\n"+
"G1 F240.0\n"+
"G1 E50.59\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X75.9 Y151.48 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.59\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X81.22 Y156.81 Z2.4 F1080.0 E41.833\n"+
"G1 F240.0\n"+
"G1 E41.833\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X80.38 Y157.24 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E41.833\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.62 Y152.48 Z2.4 F1080.0 E37.398\n"+
"G1 F240.0\n"+
"G1 E37.398\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X75.2 Y153.97 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E37.398\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.33 Y158.1 Z2.4 F1080.0 E32.456\n"+
"G1 F240.0\n"+
"G1 E32.456\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.76 Y158.79 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E32.456\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X74.92 Y154.96 Z2.4 F1080.0 E30.119\n"+
"G1 F240.0\n"+
"G1 E30.119\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X74.5 Y156.45 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E30.119\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X78.1 Y160.04 Z2.4 F1080.0 E28.229\n"+
"G1 F240.0\n"+
"G1 E28.229\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.83 Y161.05 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E28.229\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X74.52 Y158.06 Z2.4 F1080.0 E24.79\n"+
"G1 X74.22 Y157.44 Z2.4 F1080.0 E28.594\n"+
"G1 F240.0\n"+
"G1 E28.594\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X73.8 Y158.93 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E28.594\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.3 Y162.29 Z2.4 F1080.0 E26.958\n"+
"G1 X77.83 Y162.96 Z2.4 F1080.0 E31.703\n"+
"G1 F240.0\n"+
"G1 E31.703\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.67 Y165.07 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E31.703\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.52 Y159.92 Z2.4 F1080.0 E40.439\n"+
"G1 F240.0\n"+
"G1 E40.439\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X73.6 Y161.91 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E40.439\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X84.06 Y172.37 Z2.4 F1080.0 E82.182\n"+
"G1 F240.0\n"+
"G1 E82.182\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X82.32 Y171.9 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E82.182\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.33 Y164.92 Z2.4 F1080.0 E54.864\n"+
"G1 F240.0\n"+
"G1 E54.864\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X80.25 Y166.65 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E54.864\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X86.66 Y173.07 Z2.4 F1080.0 E50.409\n"+
"G1 F240.0\n"+
"G1 E50.409\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.4 Y173.53 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.409\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X82.36 Y167.49 Z2.4 F1080.0 E47.498\n"+
"G1 F240.0\n"+
"G1 E47.498\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X84.27 Y167.49 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E47.498\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X89.16 Y173.33 Z2.4 F1080.0 E42.301\n"+
"G1 X90.1 Y173.55 Z2.4 F1080.0 E47.681\n"+
"G1 X90.73 Y173.95 Z2.4 F1080.0 E51.792\n"+
"G1 F240.0\n"+
"G1 E51.792\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X91.53 Y173.48 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E51.792\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X85.28 Y167.22 Z2.4 F1080.0 E49.152\n"+
"G1 F240.0\n"+
"G1 E49.152\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X86.53 Y166.56 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E49.152\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X92.11 Y172.62 Z2.4 F1080.0 E45.791\n"+
"G1 X92.74 Y172.78 Z2.4 F1080.0 E49.398\n"+
"G1 X87.22 Y165.99 Z2.4 F1080.0 E98.034\n"+
"G1 X93.55 Y172.32 Z2.4 F1080.0 E147.752\n"+
"G1 F240.0\n"+
"G1 E147.752\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.08 Y164.94 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E147.752\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X94.76 Y171.62 Z2.4 F1080.0 E52.463\n"+
"G1 F240.0\n"+
"G1 E52.463\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X95.57 Y171.15 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E52.463\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.51 Y164.1 Z2.4 F1080.0 E55.433\n"+
"G1 F240.0\n"+
"G1 E55.433\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.89 Y162.56 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E55.433\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X96.78 Y170.45 Z2.4 F1080.0 E61.998\n"+
"G1 F240.0\n"+
"G1 E61.998\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X97.59 Y169.99 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E61.998\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.86 Y161.26 Z2.4 F1080.0 E68.527\n"+
"G1 F240.0\n"+
"G1 E68.527\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X87.42 Y165.48 Z2.4 F3000.0\n"+
"G1 X79.71 Y171.2 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E68.527\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.94 Y169.44 Z2.4 F1080.0 E13.887\n"+
"G1 F240.0\n"+
"G1 E13.887\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X86.82 Y166.08 Z2.4 F3000.0\n"+
"G1 X87.42 Y165.48 Z2.4 F3000.0\n"+
"G1 X87.92 Y164.8 Z2.4 F3000.0\n"+
"G1 X88.3 Y164.05 Z2.4 F3000.0\n"+
"G1 X88.56 Y163.25 Z2.4 F3000.0\n"+
"G1 X88.69 Y162.41 Z2.4 F3000.0\n"+
"G1 X88.69 Y161.57 Z2.4 F3000.0\n"+
"G1 X88.64 Y161.23 Z2.4 F3000.0\n"+
"G1 X99.55 Y151.81 Z2.4 F3000.0\n"+
"G1 X99.43 Y151.28 Z2.4 F3000.0\n"+
"G1 X99.49 Y150.43 Z2.4 F3000.0\n"+
"G1 X99.82 Y149.64 Z2.4 F3000.0\n"+
"G1 X100.37 Y148.99 Z2.4 F3000.0\n"+
"G1 X105.5 Y147.35 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E13.887\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.79 Y155.17 Z2.4 F1080.0 E63.352\n"+
"G1 X113.95 Y155.8 Z2.4 F1080.0 E66.947\n"+
"G1 F240.0\n"+
"G1 E66.947\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.41 Y154.99 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E66.947\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.08 Y147.66 Z2.4 F1080.0 E57.645\n"+
"G1 F240.0\n"+
"G1 E57.645\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X108.8 Y147.47 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E57.645\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.96 Y153.16 Z2.4 F1080.0 E46.58\n"+
"G1 X115.11 Y153.78 Z2.4 F1080.0 E50.175\n"+
"G1 F240.0\n"+
"G1 E50.175\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.58 Y152.98 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.175\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.42 Y152.35 Z2.4 F1080.0 E3.595\n"+
"G1 X110.35 Y147.31 Z2.4 F1080.0 E43.335\n"+
"G1 X109.72 Y147.12 Z2.4 F1080.0 E46.968\n"+
"G1 F240.0\n"+
"G1 E46.968\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.89 Y146.38 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E46.968\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.12 Y151.14 Z2.4 F1080.0 E39.249\n"+
"G1 X116.28 Y151.77 Z2.4 F1080.0 E42.851\n"+
"G1 F240.0\n"+
"G1 E42.851\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X116.74 Y150.96 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E42.851\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.59 Y150.33 Z2.4 F1080.0 E3.602\n"+
"G1 X111.54 Y145.76 Z2.4 F1080.0 E41.438\n"+
"G1 F240.0\n"+
"G1 E41.438\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.3 Y144.61 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E41.438\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.29 Y149.12 Z2.4 F1080.0 E37.346\n"+
"G1 X117.44 Y149.75 Z2.4 F1080.0 E40.941\n"+
"G1 F240.0\n"+
"G1 E40.941\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.91 Y148.94 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E40.941\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.75 Y148.31 Z2.4 F1080.0 E3.596\n"+
"G1 X112.67 Y143.7 Z2.4 F1080.0 E41.727\n"+
"G1 F240.0\n"+
"G1 E41.727\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.91 Y142.04 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E41.727\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.34 Y142.67 Z2.4 F1080.0 E4.234\n"+
"G1 X118.45 Y147.1 Z2.4 F1080.0 E41.847\n"+
"G1 X118.61 Y147.73 Z2.4 F1080.0 E45.444\n"+
"G1 F240.0\n"+
"G1 E45.444\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.07 Y146.93 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E45.444\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.92 Y146.3 Z2.4 F1080.0 E3.595\n"+
"G1 X112.7 Y140.55 Z2.4 F1080.0 E50.603\n"+
"G1 F240.0\n"+
"G1 E50.603\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.18 Y135.94 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.603\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.78 Y143.07 Z2.4 F1080.0 E57.91\n"+
"G1 X120.94 Y143.7 Z2.4 F1080.0 E61.511\n"+
"G1 F240.0\n"+
"G1 E61.511\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X121.4 Y142.89 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E61.511\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X121.25 Y142.26 Z2.4 F1080.0 E3.602\n"+
"G1 X114.71 Y135.66 Z2.4 F1080.0 E55.19\n"+
"G1 X114.08 Y135.57 Z2.4 F1080.0 E58.745\n"+
"G1 F240.0\n"+
"G1 E58.745\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.03 Y134.61 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E58.745\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.13 Y135.25 Z2.4 F1080.0 E3.555\n"+
"G1 X121.94 Y141.05 Z2.4 F1080.0 E53.298\n"+
"G1 X122.1 Y141.68 Z2.4 F1080.0 E56.894\n"+
"G1 F240.0\n"+
"G1 E56.894\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X122.57 Y140.87 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E56.894\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X122.41 Y140.25 Z2.4 F1080.0 E3.595\n"+
"G1 X115.4 Y133.71 Z2.4 F1080.0 E56.833\n"+
"G1 F240.0\n"+
"G1 E56.833\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X125.6 Y135.63 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E56.833\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.93 Y109.97 Z2.4 F1080.0 E201.624\n"+
"G1 F240.0\n"+
"G1 E201.624\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X100.57 Y109.33 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E201.624\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.06 Y134.82 Z2.4 F1080.0 E200.284\n"+
"G1 F240.0\n"+
"G1 E200.284\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.52 Y108.38 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E200.284\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.76 Y133.61 Z2.4 F1080.0 E198.273\n"+
"G1 F240.0\n"+
"G1 E198.273\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y132.45 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E198.273\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.15 Y116.73 Z2.4 F1080.0 E123.555\n"+
"G1 F240.0\n"+
"G1 E123.555\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.21 Y116.88 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E123.555\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y130.54 Z2.4 F1080.0 E107.343\n"+
"G1 F240.0\n"+
"G1 E107.343\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y129.27 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E107.343\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.26 Y116.65 Z2.4 F1080.0 E99.117\n"+
"G1 F240.0\n"+
"G1 E99.117\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.57 Y116.06 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E99.117\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y127.36 Z2.4 F1080.0 E88.789\n"+
"G1 F240.0\n"+
"G1 E88.789\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y126.09 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E88.789\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.3 Y115.51 Z2.4 F1080.0 E83.085\n"+
"G1 F240.0\n"+
"G1 E83.085\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.19 Y114.49 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E83.085\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.28 Y115.13 Z2.4 F1080.0 E3.557\n"+
"G1 X126.42 Y123.54 Z2.4 F1080.0 E72.574\n"+
"G1 X126.87 Y124.18 Z2.4 F1080.0 E76.907\n"+
"G1 F240.0\n"+
"G1 E76.907\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y122.91 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E76.907\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y122.27 Z2.4 F1080.0 E4.328\n"+
"G1 X117.65 Y113.69 Z2.4 F1080.0 E72.505\n"+
"G1 F240.0\n"+
"G1 E72.505\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X118.1 Y112.22 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E72.505\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y120.36 Z2.4 F1080.0 E64.665\n"+
"G1 X126.87 Y121.0 Z2.4 F1080.0 E69.003\n"+
"G1 F240.0\n"+
"G1 E69.003\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y119.72 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E69.003\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y119.09 Z2.4 F1080.0 E4.328\n"+
"G1 X118.17 Y111.02 Z2.4 F1080.0 E68.436\n"+
"G1 F240.0\n"+
"G1 E68.436\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y117.81 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E68.436\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.1 Y108.05 Z2.4 F1080.0 E76.756\n"+
"G1 F240.0\n"+
"G1 E76.756\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.87 Y106.81 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E76.756\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.93 Y102.87 Z2.4 F1080.0 E30.963\n"+
"G1 X112.9 Y105.75 Z2.4 F1080.0 E47.806\n"+
"G1 X110.02 Y102.87 Z2.4 F1080.0 E70.386\n"+
"G1 F240.0\n"+
"G1 E70.386\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y101.87 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E70.386\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.57 Y101.24 Z2.4 F1080.0 E4.328\n"+
"G1 X106.06 Y99.1 Z2.4 F1080.0 E22.65\n"+
"G1 X105.61 Y98.46 Z2.4 F1080.0 E26.975\n"+
"G1 X109.02 Y99.96 Z2.4 F1080.0 E47.674\n"+
"G1 X106.06 Y97.19 Z2.4 F1080.0 E70.215\n"+
"G1 X105.61 Y96.55 Z2.4 F1080.0 E74.54\n"+
"G1 F240.0\n"+
"G1 E74.54\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y99.74 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.54\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.7 Y105.82 Z2.4 F1080.0 E47.8\n"+
"G1 F240.0\n"+
"G1 E47.8\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.23 Y106.27 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E47.8\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y101.64 Z2.4 F1080.0 E36.306\n"+
"G1 F240.0\n"+
"G1 E36.306\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y102.92 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E36.306\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.06 Y103.55 Z2.4 F1080.0 E4.325\n"+
"G1 X108.79 Y106.63 Z2.4 F1080.0 E27.198\n"+
"G1 X109.42 Y106.73 Z2.4 F1080.0 E30.75\n"+
"G1 F240.0\n"+
"G1 E30.75\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X108.41 Y107.62 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E30.75\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.34 Y104.56 Z2.4 F1080.0 E24.077\n"+
"G1 F240.0\n"+
"G1 E24.077\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.71 Y105.19 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.077\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.86 Y108.35 Z2.4 F1080.0 E24.772\n"+
"G1 F240.0\n"+
"G1 E24.772\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.26 Y109.66 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.772\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X103.75 Y106.15 Z2.4 F1080.0 E27.609\n"+
"G1 F240.0\n"+
"G1 E27.609\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.11 Y106.78 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E27.609\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.04 Y110.71 Z2.4 F1080.0 E30.83\n"+
"G1 F240.0\n"+
"G1 E30.83\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.19 Y112.77 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E30.83\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.16 Y107.74 Z2.4 F1080.0 E39.539\n"+
"G1 F240.0\n"+
"G1 E39.539\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y98.69 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E39.539\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.57 Y98.05 Z2.4 F1080.0 E4.328\n"+
"G1 X106.06 Y95.92 Z2.4 F1080.0 E22.65\n"+
"G1 X105.61 Y95.28 Z2.4 F1080.0 E26.975\n"+
"G1 X109.02 Y96.78 Z2.4 F1080.0 E47.674\n"+
"G1 X106.06 Y94.01 Z2.4 F1080.0 E70.215\n"+
"G1 X105.61 Y93.37 Z2.4 F1080.0 E74.54\n"+
"G1 F240.0\n"+
"G1 E74.54\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y95.51 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.54\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.57 Y94.87 Z2.4 F1080.0 E4.328\n"+
"G1 X106.06 Y92.73 Z2.4 F1080.0 E22.65\n"+
"G1 X105.61 Y92.1 Z2.4 F1080.0 E26.975\n"+
"G1 X109.02 Y93.6 Z2.4 F1080.0 E47.674\n"+
"G1 X106.06 Y90.83 Z2.4 F1080.0 E70.215\n"+
"G1 X105.61 Y90.19 Z2.4 F1080.0 E74.54\n"+
"G1 F240.0\n"+
"G1 E74.54\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.11 Y88.05 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.54\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.34 Y88.28 Z2.4 F1080.0 E1.815\n"+
"G1 F240.0\n"+
"G1 E1.815\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.02 Y92.33 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E1.815\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.57 Y91.69 Z2.4 F1080.0 E4.328\n"+
"G1 X106.06 Y89.55 Z2.4 F1080.0 E22.65\n"+
"G1 X105.61 Y88.92 Z2.4 F1080.0 E26.975\n"+
"G1 X109.02 Y90.42 Z2.4 F1080.0 E47.674\n"+
"G1 X104.48 Y85.87 Z2.4 F1080.0 E83.375\n"+
"G1 X104.98 Y88.28 Z2.4 F1080.0 E97.049\n"+
"G1 X104.11 Y87.42 Z2.4 F1080.0 E103.857\n"+
"G1 F240.0\n"+
"G1 E103.857\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.75 Y85.87 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E103.857\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.02 Y89.14 Z2.4 F1080.0 E25.699\n"+
"G1 F240.0\n"+
"G1 E25.699\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.66 Y85.87 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E25.699\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.43 Y87.83 Z2.4 F1080.0 E14.687\n"+
"G1 X110.07 Y88.28 Z2.4 F1080.0 E19.015\n"+
"G1 X108.93 Y85.87 Z2.4 F1080.0 E33.819\n"+
"G1 X109.57 Y86.32 Z2.4 F1080.0 E38.148\n"+
"G1 X110.71 Y87.83 Z2.4 F1080.0 E48.649\n"+
"G1 X111.34 Y88.28 Z2.4 F1080.0 E52.982\n"+
"G1 X110.84 Y85.87 Z2.4 F1080.0 E66.658\n"+
"G1 X112.61 Y87.83 Z2.4 F1080.0 E81.345\n"+
"G1 X113.25 Y88.28 Z2.4 F1080.0 E85.677\n"+
"G1 X112.11 Y85.87 Z2.4 F1080.0 E100.482\n"+
"G1 X112.75 Y86.32 Z2.4 F1080.0 E104.81\n"+
"G1 X113.89 Y87.83 Z2.4 F1080.0 E115.311\n"+
"G1 X114.52 Y88.28 Z2.4 F1080.0 E119.644\n"+
"G1 X114.02 Y85.87 Z2.4 F1080.0 E133.319\n"+
"G1 X119.02 Y90.87 Z2.4 F1080.0 E172.587\n"+
"G1 X115.61 Y89.37 Z2.4 F1080.0 E193.286\n"+
"G1 X116.06 Y90.01 Z2.4 F1080.0 E197.615\n"+
"G1 X118.57 Y92.14 Z2.4 F1080.0 E215.933\n"+
"G1 X119.02 Y92.78 Z2.4 F1080.0 E220.262\n"+
"G1 F240.0\n"+
"G1 E220.262\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y90.64 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E220.262\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y91.28 Z2.4 F1080.0 E4.325\n"+
"G1 X119.02 Y94.05 Z2.4 F1080.0 E26.866\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y95.96 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.57 Y95.33 Z2.4 F1080.0 E4.328\n"+
"G1 X116.06 Y93.19 Z2.4 F1080.0 E22.646\n"+
"G1 X115.61 Y92.55 Z2.4 F1080.0 E26.976\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y93.83 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y94.46 Z2.4 F1080.0 E4.325\n"+
"G1 X119.02 Y97.24 Z2.4 F1080.0 E26.866\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y99.14 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.57 Y98.51 Z2.4 F1080.0 E4.328\n"+
"G1 X116.06 Y96.37 Z2.4 F1080.0 E22.646\n"+
"G1 X115.61 Y95.73 Z2.4 F1080.0 E26.976\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y97.01 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y97.64 Z2.4 F1080.0 E4.325\n"+
"G1 X119.02 Y100.42 Z2.4 F1080.0 E26.866\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y102.33 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.57 Y101.69 Z2.4 F1080.0 E4.328\n"+
"G1 X116.06 Y99.55 Z2.4 F1080.0 E22.65\n"+
"G1 X115.61 Y98.92 Z2.4 F1080.0 E26.975\n"+
"G1 F240.0\n"+
"G1 E26.975\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y100.19 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.975\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y100.83 Z2.4 F1080.0 E4.325\n"+
"G1 X119.02 Y103.6 Z2.4 F1080.0 E26.866\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y102.1 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.51 Y111.83 Z2.4 F1080.0 E81.14\n"+
"G1 X126.42 Y112.72 Z2.4 F1080.0 E86.145\n"+
"G1 X126.87 Y113.36 Z2.4 F1080.0 E90.473\n"+
"G1 F240.0\n"+
"G1 E90.473\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y114.63 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E90.473\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.11 Y102.87 Z2.4 F1080.0 E92.387\n"+
"G1 F240.0\n"+
"G1 E92.387\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.2 Y102.87 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E92.387\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y116.54 Z2.4 F1080.0 E107.39\n"+
"G1 F240.0\n"+
"G1 E107.39\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.24 Y103.52 Z2.4 F3000.0\n"+
"G1 X119.02 Y89.6 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E107.39\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.3 Y85.87 Z2.4 F1080.0 E29.266\n"+
"G1 F240.0\n"+
"G1 E29.266\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.21 Y85.87 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E29.266\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.99 Y87.88 Z2.4 F1080.0 E14.906\n"+
"G1 X119.61 Y88.28 Z2.4 F1080.0 E19.046\n"+
"G1 F240.0\n"+
"G1 E19.046\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.52 Y87.92 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E19.046\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.48 Y85.87 Z2.4 F1080.0 E16.055\n"+
"G1 F240.0\n"+
"G1 E16.055\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.39 Y85.87 Z2.4 F3000.0\n"+
"G1 F240.0\n"+
"G1 E16.055\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.52 Y86.01 Z2.4 F1080.0 E1.053\n"+
"G1 F240.0\n"+
"G1 E1.053\n"+
"G1 F1080.0\n"+
";\n"+
"(</surroundingLoop>)\n"+
"G1 F30.0\n"+
"(<layer> 2.7 )\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X93.055 Y139.175 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y131.549 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y111.258 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y103.957 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y89.078 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y89.078 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y85.078 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y85.078 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y89.078 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y89.078 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y103.277 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y111.128 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y133.629 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.426 Y163.491 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X90.593 Y174.941 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.302 Y171.647 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X72.316 Y161.279 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X75.721 Y149.182 Z2.7 </boundaryPoint>)\n"+
"(<perimeter> outer )\n"+
"M108 S110.0\n"+
"M108 S110.0\n"+
"G1 X120.52 Y86.01 Z2.7 F30.0\n"+
"G91\n"+
"G1 F20\n"+
"G1 F1500\n"+
"G1 X-0.3 Y-0.3 F1500\n"+
"G90\n"+
"G4 P3000\n"+
"G92 X0;set x 0\n"+
"G1 X-1.0 F3000.0 \n"+
"G1 X-500.0  F3200.0 ;horizontal move\n"+
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
"G1 X120.52 Y86.01 Z2.7 F3000.0\n"+
"G1 X120.67 Y85.96 Z2.7 F3000.0\n"+
"G1 X121.08 Y85.84 Z2.7 F65.161\n"+
"G1 F240.0\n"+
"G1 E1.053\n"+
"G1 F65.161\n"+
"G92 E0\n"+
";\n"+
"G1 X121.08 Y88.84 Z2.7 F540.0 E36.593\n"+
"G1 X119.58 Y88.84 Z2.7 F540.0 E54.927\n"+
"G1 X119.58 Y103.38 Z2.7 F540.0 E232.613\n"+
"G1 X127.43 Y111.23 Z2.7 F540.0 E368.317\n"+
"G1 X127.43 Y133.57 Z2.7 F540.0 E641.337\n"+
"G1 X110.25 Y163.32 Z2.7 F540.0 E1061.204\n"+
"G1 X90.56 Y174.68 Z2.7 F540.0 E1339.099\n"+
"G1 X78.46 Y171.44 Z2.7 F540.0 E1492.189\n"+
"G1 X72.57 Y161.25 Z2.7 F540.0 E1636.071\n"+
"G1 X75.93 Y149.34 Z2.7 F540.0 E1787.246\n"+
"G1 X93.23 Y139.35 Z2.7 F540.0 E2031.455\n"+
"G1 X97.76 Y131.61 Z2.7 F540.0 E2141.003\n"+
"G1 X97.76 Y111.36 Z2.7 F540.0 E2388.589\n"+
"G1 X105.06 Y104.06 Z2.7 F540.0 E2514.785\n"+
"G1 X105.06 Y88.84 Z2.7 F540.0 E2700.783\n"+
"G1 X103.56 Y88.84 Z2.7 F540.0 E2719.117\n"+
"G1 X103.56 Y85.32 Z2.7 F540.0 E2762.139\n"+
"G1 X121.08 Y85.32 Z2.7 F540.0 E2976.272\n"+
"G1 X121.08 Y85.56 Z2.7 F540.0 E2979.181\n"+
"G1 F240.0\n"+
"G1 E2979.181\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X114.816 Y89.078 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y89.078 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y102.078 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.816 Y102.078 Z2.7 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X114.91 Y88.84 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E2979.181\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.58 Y88.84 Z2.7 F540.0 E65.218\n"+
"G1 X109.58 Y102.32 Z2.7 F540.0 E229.973\n"+
"G1 X115.06 Y102.32 Z2.7 F540.0 E296.951\n"+
"G1 X115.06 Y88.98 Z2.7 F540.0 E459.947\n"+
"G1 F240.0\n"+
"G1 E459.947\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X107.804 Y111.704 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.923 Y112.448 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.155 Y113.164 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.497 Y113.835 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.94 Y114.444 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.473 Y114.977 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.082 Y115.42 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.753 Y115.762 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.469 Y115.994 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.213 Y116.112 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.967 Y116.112 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.711 Y115.994 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.427 Y115.762 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.098 Y115.42 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.707 Y114.977 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.239 Y114.444 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.683 Y113.835 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.025 Y113.164 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y112.448 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y111.704 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y110.95 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y110.206 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.025 Y109.49 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.683 Y108.819 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.239 Y108.21 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.707 Y107.677 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.098 Y107.234 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.427 Y106.892 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.711 Y106.66 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.967 Y106.542 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.213 Y106.542 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.469 Y106.66 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.753 Y106.892 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.082 Y107.234 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.473 Y107.677 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.94 Y108.21 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.497 Y108.819 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.155 Y109.49 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.923 Y110.206 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.804 Y110.95 Z2.7 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X115.39 Y102.65 Z2.7 F3000.0\n"+
"G1 X112.84 Y106.3 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E459.947\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.19 Y106.3 Z2.7 F540.0 E7.92\n"+
"G1 X111.41 Y106.43 Z2.7 F540.0 E17.585\n"+
"G1 X110.66 Y106.67 Z2.7 F540.0 E27.248\n"+
"G1 X109.96 Y107.03 Z2.7 F540.0 E36.917\n"+
"G1 X109.32 Y107.49 Z2.7 F540.0 E46.586\n"+
"G1 X108.76 Y108.05 Z2.7 F540.0 E56.257\n"+
"G1 X108.29 Y108.69 Z2.7 F540.0 E65.916\n"+
"G1 X107.93 Y109.4 Z2.7 F540.0 E75.586\n"+
"G1 X107.69 Y110.15 Z2.7 F540.0 E85.249\n"+
"G1 X107.57 Y110.93 Z2.7 F540.0 E94.914\n"+
"G1 X107.57 Y111.72 Z2.7 F540.0 E104.594\n"+
"G1 X107.69 Y112.5 Z2.7 F540.0 E114.259\n"+
"G1 X107.93 Y113.26 Z2.7 F540.0 E123.922\n"+
"G1 X108.29 Y113.96 Z2.7 F540.0 E133.591\n"+
"G1 X108.76 Y114.6 Z2.7 F540.0 E143.25\n"+
"G1 X109.32 Y115.16 Z2.7 F540.0 E152.921\n"+
"G1 X109.96 Y115.63 Z2.7 F540.0 E162.59\n"+
"G1 X110.66 Y115.98 Z2.7 F540.0 E172.259\n"+
"G1 X111.41 Y116.23 Z2.7 F540.0 E181.922\n"+
"G1 X112.19 Y116.35 Z2.7 F540.0 E191.587\n"+
"G1 X112.99 Y116.35 Z2.7 F540.0 E201.267\n"+
"G1 X113.77 Y116.23 Z2.7 F540.0 E210.932\n"+
"G1 X114.52 Y115.98 Z2.7 F540.0 E220.595\n"+
"G1 X115.22 Y115.63 Z2.7 F540.0 E230.265\n"+
"G1 X115.86 Y115.16 Z2.7 F540.0 E239.924\n"+
"G1 X116.42 Y114.6 Z2.7 F540.0 E249.603\n"+
"G1 X116.89 Y113.96 Z2.7 F540.0 E259.262\n"+
"G1 X117.25 Y113.26 Z2.7 F540.0 E268.932\n"+
"G1 X117.49 Y112.5 Z2.7 F540.0 E278.595\n"+
"G1 X117.61 Y111.72 Z2.7 F540.0 E288.258\n"+
"G1 X117.61 Y110.93 Z2.7 F540.0 E297.938\n"+
"G1 X117.49 Y110.15 Z2.7 F540.0 E307.601\n"+
"G1 X117.25 Y109.4 Z2.7 F540.0 E317.264\n"+
"G1 X116.89 Y108.69 Z2.7 F540.0 E326.933\n"+
"G1 X116.42 Y108.05 Z2.7 F540.0 E336.592\n"+
"G1 X115.86 Y107.49 Z2.7 F540.0 E346.272\n"+
"G1 X115.22 Y107.03 Z2.7 F540.0 E355.931\n"+
"G1 X114.52 Y106.67 Z2.7 F540.0 E365.6\n"+
"G1 X113.77 Y106.43 Z2.7 F540.0 E375.263\n"+
"G1 X113.13 Y106.33 Z2.7 F540.0 E383.17\n"+
"G1 F240.0\n"+
"G1 E383.17\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X111.269 Y134.809 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y134.986 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y135.115 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y135.194 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y135.22 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y135.194 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y135.115 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y134.986 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y134.809 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y134.59 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y134.334 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y134.046 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y133.734 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y133.406 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.683 Y133.07 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y132.734 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y132.406 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y132.094 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y131.806 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y131.55 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y131.331 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y131.154 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y131.024 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y130.946 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y130.92 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y130.946 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y131.024 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y131.154 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.269 Y131.331 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y131.55 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y131.806 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y132.094 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y132.406 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y132.734 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.383 Y133.07 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y133.406 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y133.734 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y134.046 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y134.334 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y134.59 Z2.7 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X115.4 Y106.74 Z2.7 F3000.0\n"+
"G1 X116.08 Y107.24 Z2.7 F3000.0\n"+
"G1 X116.68 Y107.84 Z2.7 F3000.0\n"+
"G1 X117.18 Y108.52 Z2.7 F3000.0\n"+
"G1 X117.56 Y109.27 Z2.7 F3000.0\n"+
"G1 X117.82 Y110.07 Z2.7 F3000.0\n"+
"G1 X117.95 Y110.91 Z2.7 F3000.0\n"+
"G1 X112.39 Y130.69 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.17\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.8 Y130.8 Z2.7 F540.0 E7.375\n"+
"G1 X111.13 Y131.14 Z2.7 F540.0 E16.536\n"+
"G1 X110.6 Y131.66 Z2.7 F540.0 E25.662\n"+
"G1 X110.26 Y132.33 Z2.7 F540.0 E34.823\n"+
"G1 X110.17 Y132.7 Z2.7 F540.0 E39.4\n"+
"G1 X110.17 Y133.44 Z2.7 F540.0 E48.543\n"+
"G1 X110.26 Y133.81 Z2.7 F540.0 E53.12\n"+
"G1 X110.6 Y134.48 Z2.7 F540.0 E62.281\n"+
"G1 X111.13 Y135.0 Z2.7 F540.0 E71.407\n"+
"G1 X111.45 Y135.2 Z2.7 F540.0 E75.994\n"+
"G1 X112.16 Y135.43 Z2.7 F540.0 E85.146\n"+
"G1 X112.91 Y135.43 Z2.7 F540.0 E94.288\n"+
"G1 X113.27 Y135.34 Z2.7 F540.0 E98.866\n"+
"G1 X113.94 Y135.0 Z2.7 F540.0 E108.027\n"+
"G1 X114.47 Y134.48 Z2.7 F540.0 E117.153\n"+
"G1 X114.81 Y133.81 Z2.7 F540.0 E126.314\n"+
"G1 X114.9 Y133.44 Z2.7 F540.0 E130.891\n"+
"G1 X114.9 Y132.7 Z2.7 F540.0 E140.034\n"+
"G1 X114.81 Y132.33 Z2.7 F540.0 E144.611\n"+
"G1 X114.47 Y131.66 Z2.7 F540.0 E153.772\n"+
"G1 X113.94 Y131.14 Z2.7 F540.0 E162.898\n"+
"G1 X113.27 Y130.8 Z2.7 F540.0 E172.059\n"+
"G1 X112.68 Y130.69 Z2.7 F540.0 E179.434\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X103.236 Y144.585 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y145.194 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y145.727 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y146.17 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y146.512 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y146.743 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y146.862 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y146.862 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y146.743 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y146.512 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y146.17 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y145.727 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y145.194 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y144.585 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y143.914 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y143.198 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y142.454 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y141.7 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y140.956 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y140.24 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y139.569 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y138.96 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y138.427 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y137.984 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y137.642 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y137.41 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y137.291 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y137.291 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y137.41 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y137.642 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y137.984 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y138.427 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y138.96 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.236 Y139.569 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y140.24 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y140.956 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y141.7 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y142.454 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y143.198 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y143.914 Z2.7 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X110.93 Y130.86 Z2.7 F3000.0\n"+
"G1 X110.33 Y131.47 Z2.7 F3000.0\n"+
"G1 X109.12 Y137.38 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.51 Y137.18 Z2.7 F540.0 E7.904\n"+
"G1 X107.73 Y137.05 Z2.7 F540.0 E17.569\n"+
"G1 X106.93 Y137.05 Z2.7 F540.0 E27.249\n"+
"G1 X106.15 Y137.18 Z2.7 F540.0 E36.914\n"+
"G1 X105.4 Y137.42 Z2.7 F540.0 E46.577\n"+
"G1 X104.7 Y137.78 Z2.7 F540.0 E56.247\n"+
"G1 X104.06 Y138.24 Z2.7 F540.0 E65.899\n"+
"G1 X103.5 Y138.8 Z2.7 F540.0 E75.587\n"+
"G1 X103.03 Y139.44 Z2.7 F540.0 E85.246\n"+
"G1 X102.67 Y140.15 Z2.7 F540.0 E94.915\n"+
"G1 X102.43 Y140.9 Z2.7 F540.0 E104.578\n"+
"G1 X102.3 Y141.68 Z2.7 F540.0 E114.243\n"+
"G1 X102.3 Y142.47 Z2.7 F540.0 E123.923\n"+
"G1 X102.43 Y143.25 Z2.7 F540.0 E133.588\n"+
"G1 X102.67 Y144.01 Z2.7 F540.0 E143.239\n"+
"G1 X103.03 Y144.71 Z2.7 F540.0 E152.92\n"+
"G1 X103.5 Y145.35 Z2.7 F540.0 E162.579\n"+
"G1 X104.06 Y145.91 Z2.7 F540.0 E172.258\n"+
"G1 X104.7 Y146.38 Z2.7 F540.0 E181.917\n"+
"G1 X105.4 Y146.73 Z2.7 F540.0 E191.587\n"+
"G1 X106.15 Y146.98 Z2.7 F540.0 E201.25\n"+
"G1 X106.93 Y147.1 Z2.7 F540.0 E210.915\n"+
"G1 X107.73 Y147.1 Z2.7 F540.0 E220.595\n"+
"G1 X108.51 Y146.98 Z2.7 F540.0 E230.26\n"+
"G1 X109.26 Y146.73 Z2.7 F540.0 E239.923\n"+
"G1 X109.96 Y146.38 Z2.7 F540.0 E249.592\n"+
"G1 X110.6 Y145.91 Z2.7 F540.0 E259.251\n"+
"G1 X111.16 Y145.35 Z2.7 F540.0 E268.922\n"+
"G1 X111.63 Y144.71 Z2.7 F540.0 E278.588\n"+
"G1 X111.99 Y144.01 Z2.7 F540.0 E288.269\n"+
"G1 X112.23 Y143.25 Z2.7 F540.0 E297.92\n"+
"G1 X112.35 Y142.47 Z2.7 F540.0 E307.585\n"+
"G1 X112.35 Y141.68 Z2.7 F540.0 E317.265\n"+
"G1 X112.23 Y140.9 Z2.7 F540.0 E326.93\n"+
"G1 X111.99 Y140.15 Z2.7 F540.0 E336.593\n"+
"G1 X111.63 Y139.44 Z2.7 F540.0 E346.263\n"+
"G1 X111.16 Y138.8 Z2.7 F540.0 E355.929\n"+
"G1 X110.6 Y138.24 Z2.7 F540.0 E365.608\n"+
"G1 X109.96 Y137.78 Z2.7 F540.0 E375.26\n"+
"G1 X109.39 Y137.49 Z2.7 F540.0 E383.175\n"+
"G1 F240.0\n"+
"G1 E383.175\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X100.159 Y151.887 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.312 Y152.187 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.51 Y152.46 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.749 Y152.699 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.022 Y152.897 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.322 Y153.05 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.643 Y153.154 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.976 Y153.207 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.314 Y153.207 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.647 Y153.154 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.968 Y153.05 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.268 Y152.897 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.541 Y152.699 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.78 Y152.46 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y152.187 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y151.887 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.236 Y151.566 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y151.233 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y150.895 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.236 Y150.562 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y150.241 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y149.941 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.78 Y149.668 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.541 Y149.429 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.268 Y149.231 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.968 Y149.078 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.647 Y148.973 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.314 Y148.921 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.976 Y148.921 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.643 Y148.973 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.322 Y149.078 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.022 Y149.231 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.749 Y149.429 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.51 Y149.668 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.312 Y149.941 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.159 Y150.241 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y150.562 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y150.895 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y151.233 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y151.566 Z2.7 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X106.91 Y136.72 Z2.7 F3000.0\n"+
"G1 X106.07 Y136.85 Z2.7 F3000.0\n"+
"G1 X105.27 Y137.11 Z2.7 F3000.0\n"+
"G1 X104.52 Y137.49 Z2.7 F3000.0\n"+
"G1 X103.84 Y137.99 Z2.7 F3000.0\n"+
"G1 X103.24 Y138.59 Z2.7 F3000.0\n"+
"G1 X102.74 Y139.27 Z2.7 F3000.0\n"+
"G1 X102.36 Y140.02 Z2.7 F3000.0\n"+
"G1 X102.1 Y140.82 Z2.7 F3000.0\n"+
"G1 X101.97 Y141.66 Z2.7 F3000.0\n"+
"G1 X103.27 Y148.96 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.175\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.7 Y148.74 Z2.7 F540.0 E7.397\n"+
"G1 X101.96 Y148.68 Z2.7 F540.0 E16.542\n"+
"G1 X101.59 Y148.74 Z2.7 F540.0 E21.119\n"+
"G1 X100.9 Y149.03 Z2.7 F540.0 E30.265\n"+
"G1 X100.33 Y149.51 Z2.7 F540.0 E39.41\n"+
"G1 X100.11 Y149.82 Z2.7 F540.0 E43.987\n"+
"G1 X99.82 Y150.51 Z2.7 F540.0 E53.121\n"+
"G1 X99.76 Y151.25 Z2.7 F540.0 E62.278\n"+
"G1 X99.82 Y151.62 Z2.7 F540.0 E66.856\n"+
"G1 X100.11 Y152.31 Z2.7 F540.0 E76.001\n"+
"G1 X100.33 Y152.62 Z2.7 F540.0 E80.577\n"+
"G1 X100.9 Y153.1 Z2.7 F540.0 E89.723\n"+
"G1 X101.59 Y153.39 Z2.7 F540.0 E98.868\n"+
"G1 X102.33 Y153.45 Z2.7 F540.0 E108.014\n"+
"G1 X102.7 Y153.39 Z2.7 F540.0 E112.591\n"+
"G1 X103.39 Y153.1 Z2.7 F540.0 E121.736\n"+
"G1 X103.96 Y152.62 Z2.7 F540.0 E130.882\n"+
"G1 X104.18 Y152.31 Z2.7 F540.0 E135.459\n"+
"G1 X104.47 Y151.62 Z2.7 F540.0 E144.604\n"+
"G1 X104.53 Y150.88 Z2.7 F540.0 E153.749\n"+
"G1 X104.47 Y150.51 Z2.7 F540.0 E158.338\n"+
"G1 X104.18 Y149.82 Z2.7 F540.0 E167.472\n"+
"G1 X103.96 Y149.51 Z2.7 F540.0 E172.049\n"+
"G1 X103.51 Y149.11 Z2.7 F540.0 E179.434\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X78.894 Y163.827 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.236 Y164.498 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.679 Y165.107 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.212 Y165.64 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.821 Y166.082 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.492 Y166.425 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.208 Y166.657 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.952 Y166.775 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.706 Y166.775 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.45 Y166.657 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.166 Y166.425 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.837 Y166.082 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.446 Y165.64 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.979 Y165.107 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.422 Y164.498 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.764 Y163.827 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y163.111 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y162.367 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y161.613 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y160.868 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.764 Y160.153 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.422 Y159.482 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.979 Y158.873 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.446 Y158.34 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.837 Y157.897 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.166 Y157.555 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.45 Y157.323 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.706 Y157.205 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.952 Y157.205 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.208 Y157.323 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.492 Y157.555 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.821 Y157.897 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.212 Y158.34 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.679 Y158.873 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.236 Y159.482 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.894 Y160.153 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.662 Y160.868 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y161.613 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y162.367 Z2.7 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.662 Y163.111 Z2.7 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X101.93 Y148.35 Z2.7 F3000.0\n"+
"G1 X101.1 Y148.54 Z2.7 F3000.0\n"+
"G1 X87.54 Y159.24 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.16 Y158.72 Z2.7 F540.0 E7.901\n"+
"G1 X86.6 Y158.16 Z2.7 F540.0 E17.581\n"+
"G1 X85.96 Y157.69 Z2.7 F540.0 E27.24\n"+
"G1 X85.26 Y157.33 Z2.7 F540.0 E36.909\n"+
"G1 X84.51 Y157.09 Z2.7 F540.0 E46.572\n"+
"G1 X83.73 Y156.97 Z2.7 F540.0 E56.237\n"+
"G1 X82.93 Y156.97 Z2.7 F540.0 E65.917\n"+
"G1 X82.15 Y157.09 Z2.7 F540.0 E75.582\n"+
"G1 X81.4 Y157.33 Z2.7 F540.0 E85.245\n"+
"G1 X80.69 Y157.69 Z2.7 F540.0 E94.915\n"+
"G1 X80.06 Y158.16 Z2.7 F540.0 E104.574\n"+
"G1 X79.5 Y158.72 Z2.7 F540.0 E114.253\n"+
"G1 X79.03 Y159.36 Z2.7 F540.0 E123.912\n"+
"G1 X78.67 Y160.06 Z2.7 F540.0 E133.582\n"+
"G1 X78.43 Y160.81 Z2.7 F540.0 E143.245\n"+
"G1 X78.3 Y161.59 Z2.7 F540.0 E152.91\n"+
"G1 X78.3 Y162.39 Z2.7 F540.0 E162.59\n"+
"G1 X78.43 Y163.17 Z2.7 F540.0 E172.243\n"+
"G1 X78.67 Y163.92 Z2.7 F540.0 E181.917\n"+
"G1 X79.03 Y164.62 Z2.7 F540.0 E191.587\n"+
"G1 X79.5 Y165.26 Z2.7 F540.0 E201.246\n"+
"G1 X80.06 Y165.82 Z2.7 F540.0 E210.925\n"+
"G1 X80.69 Y166.29 Z2.7 F540.0 E220.584\n"+
"G1 X81.4 Y166.65 Z2.7 F540.0 E230.254\n"+
"G1 X82.15 Y166.89 Z2.7 F540.0 E239.917\n"+
"G1 X82.93 Y167.02 Z2.7 F540.0 E249.582\n"+
"G1 X83.73 Y167.02 Z2.7 F540.0 E259.262\n"+
"G1 X84.51 Y166.89 Z2.7 F540.0 E268.927\n"+
"G1 X85.26 Y166.65 Z2.7 F540.0 E278.59\n"+
"G1 X85.96 Y166.29 Z2.7 F540.0 E288.259\n"+
"G1 X86.6 Y165.82 Z2.7 F540.0 E297.918\n"+
"G1 X87.16 Y165.26 Z2.7 F540.0 E307.598\n"+
"G1 X87.63 Y164.62 Z2.7 F540.0 E317.257\n"+
"G1 X87.99 Y163.92 Z2.7 F540.0 E326.926\n"+
"G1 X88.23 Y163.17 Z2.7 F540.0 E336.601\n"+
"G1 X88.35 Y162.39 Z2.7 F540.0 E346.254\n"+
"G1 X88.35 Y161.59 Z2.7 F540.0 E355.934\n"+
"G1 X88.23 Y160.81 Z2.7 F540.0 E365.599\n"+
"G1 X87.99 Y160.06 Z2.7 F540.0 E375.262\n"+
"G1 X87.69 Y159.48 Z2.7 F540.0 E383.177\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<loop> inner )\n"+
"M108 S100.0\n"+
"M108 S100.0\n"+
"G1 X87.94 Y159.0 Z2.7 F1080.0 E386.218\n"+
"G1 X87.52 Y158.41 Z2.7 F1080.0 E390.215\n"+
"G1 X86.91 Y157.8 Z2.7 F1080.0 E395.023\n"+
"G1 X86.21 Y157.29 Z2.7 F1080.0 E399.819\n"+
"G1 X85.44 Y156.9 Z2.7 F1080.0 E404.624\n"+
"G1 X84.61 Y156.64 Z2.7 F1080.0 E409.426\n"+
"G1 X83.76 Y156.5 Z2.7 F1080.0 E414.218\n"+
"G1 X82.9 Y156.5 Z2.7 F1080.0 E419.029\n"+
"G1 X82.04 Y156.64 Z2.7 F1080.0 E423.827\n"+
"G1 X81.22 Y156.9 Z2.7 F1080.0 E428.624\n"+
"G1 X80.45 Y157.29 Z2.7 F1080.0 E433.429\n"+
"G1 X79.75 Y157.8 Z2.7 F1080.0 E438.225\n"+
"G1 X79.14 Y158.41 Z2.7 F1080.0 E443.033\n"+
"G1 X78.63 Y159.11 Z2.7 F1080.0 E447.829\n"+
"G1 X78.24 Y159.88 Z2.7 F1080.0 E452.634\n"+
"G1 X77.97 Y160.7 Z2.7 F1080.0 E457.431\n"+
"G1 X77.84 Y161.56 Z2.7 F1080.0 E462.228\n"+
"G1 X77.84 Y162.42 Z2.7 F1080.0 E467.04\n"+
"G1 X77.97 Y163.28 Z2.7 F1080.0 E471.837\n"+
"G1 X78.24 Y164.1 Z2.7 F1080.0 E476.634\n"+
"G1 X78.63 Y164.87 Z2.7 F1080.0 E481.439\n"+
"G1 X79.14 Y165.57 Z2.7 F1080.0 E486.235\n"+
"G1 X79.75 Y166.18 Z2.7 F1080.0 E491.043\n"+
"G1 X80.45 Y166.69 Z2.7 F1080.0 E495.839\n"+
"G1 X81.22 Y167.08 Z2.7 F1080.0 E500.644\n"+
"G1 X82.04 Y167.34 Z2.7 F1080.0 E505.439\n"+
"G1 X82.9 Y167.48 Z2.7 F1080.0 E510.238\n"+
"G1 X83.76 Y167.48 Z2.7 F1080.0 E515.049\n"+
"G1 X84.61 Y167.34 Z2.7 F1080.0 E519.842\n"+
"G1 X85.44 Y167.08 Z2.7 F1080.0 E524.642\n"+
"G1 X86.21 Y166.69 Z2.7 F1080.0 E529.447\n"+
"G1 X86.91 Y166.18 Z2.7 F1080.0 E534.243\n"+
"G1 X87.52 Y165.57 Z2.7 F1080.0 E539.051\n"+
"G1 X88.03 Y164.87 Z2.7 F1080.0 E543.847\n"+
"G1 X88.42 Y164.1 Z2.7 F1080.0 E548.653\n"+
"G1 X88.68 Y163.28 Z2.7 F1080.0 E553.449\n"+
"G1 X88.82 Y162.42 Z2.7 F1080.0 E558.247\n"+
"G1 X88.82 Y161.56 Z2.7 F1080.0 E563.058\n"+
"G1 X88.68 Y160.7 Z2.7 F1080.0 E567.856\n"+
"G1 X88.42 Y159.88 Z2.7 F1080.0 E572.652\n"+
"G1 X88.09 Y159.24 Z2.7 F1080.0 E576.66\n"+
"G1 F240.0\n"+
"G1 E576.66\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.79 Y152.67 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E576.66\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.29 Y153.24 Z2.7 F1080.0 E4.176\n"+
"G1 X100.65 Y153.5 Z2.7 F1080.0 E6.667\n"+
"G1 X101.05 Y153.7 Z2.7 F1080.0 E9.149\n"+
"G1 X101.48 Y153.84 Z2.7 F1080.0 E11.64\n"+
"G1 X101.92 Y153.91 Z2.7 F1080.0 E14.136\n"+
"G1 X102.37 Y153.91 Z2.7 F1080.0 E16.625\n"+
"G1 X102.81 Y153.84 Z2.7 F1080.0 E19.116\n"+
"G1 X103.24 Y153.7 Z2.7 F1080.0 E21.612\n"+
"G1 X103.64 Y153.5 Z2.7 F1080.0 E24.094\n"+
"G1 X104.0 Y153.24 Z2.7 F1080.0 E26.585\n"+
"G1 X104.32 Y152.92 Z2.7 F1080.0 E29.083\n"+
"G1 X104.58 Y152.56 Z2.7 F1080.0 E31.574\n"+
"G1 X104.78 Y152.16 Z2.7 F1080.0 E34.056\n"+
"G1 X104.92 Y151.73 Z2.7 F1080.0 E36.55\n"+
"G1 X104.99 Y151.29 Z2.7 F1080.0 E39.042\n"+
"G1 X104.99 Y150.84 Z2.7 F1080.0 E41.531\n"+
"G1 X104.92 Y150.4 Z2.7 F1080.0 E44.023\n"+
"G1 X104.78 Y149.97 Z2.7 F1080.0 E46.517\n"+
"G1 X104.58 Y149.57 Z2.7 F1080.0 E49.0\n"+
"G1 X104.32 Y149.21 Z2.7 F1080.0 E51.49\n"+
"G1 X104.0 Y148.89 Z2.7 F1080.0 E53.988\n"+
"G1 X103.64 Y148.63 Z2.7 F1080.0 E56.479\n"+
"G1 X103.24 Y148.43 Z2.7 F1080.0 E58.961\n"+
"G1 X102.81 Y148.29 Z2.7 F1080.0 E61.457\n"+
"G1 X102.37 Y148.22 Z2.7 F1080.0 E63.948\n"+
"G1 X101.92 Y148.22 Z2.7 F1080.0 E66.437\n"+
"G1 X101.48 Y148.29 Z2.7 F1080.0 E68.933\n"+
"G1 X101.05 Y148.43 Z2.7 F1080.0 E71.424\n"+
"G1 X100.65 Y148.63 Z2.7 F1080.0 E73.906\n"+
"G1 X100.29 Y148.89 Z2.7 F1080.0 E76.397\n"+
"G1 X99.97 Y149.21 Z2.7 F1080.0 E78.899\n"+
"G1 X99.71 Y149.57 Z2.7 F1080.0 E81.386\n"+
"G1 X99.51 Y149.97 Z2.7 F1080.0 E83.868\n"+
"G1 X99.37 Y150.4 Z2.7 F1080.0 E86.365\n"+
"G1 X99.3 Y150.84 Z2.7 F1080.0 E88.856\n"+
"G1 X99.3 Y151.29 Z2.7 F1080.0 E91.345\n"+
"G1 X99.37 Y151.73 Z2.7 F1080.0 E93.835\n"+
"G1 X99.64 Y152.43 Z2.7 F1080.0 E98.004\n"+
"G1 F240.0\n"+
"G1 E98.004\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.82 Y149.64 Z2.7 F3000.0\n"+
"G1 X104.22 Y146.6 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E98.004\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.22 Y147.17 Z2.7 F1080.0 E6.395\n"+
"G1 X106.04 Y147.43 Z2.7 F1080.0 E11.191\n"+
"G1 X106.9 Y147.57 Z2.7 F1080.0 E15.994\n"+
"G1 X107.76 Y147.57 Z2.7 F1080.0 E20.806\n"+
"G1 X108.61 Y147.43 Z2.7 F1080.0 E25.598\n"+
"G1 X109.44 Y147.17 Z2.7 F1080.0 E30.394\n"+
"G1 X110.21 Y146.77 Z2.7 F1080.0 E35.204\n"+
"G1 X110.91 Y146.26 Z2.7 F1080.0 E40.0\n"+
"G1 X111.52 Y145.65 Z2.7 F1080.0 E44.809\n"+
"G1 X112.03 Y144.96 Z2.7 F1080.0 E49.605\n"+
"G1 X112.42 Y144.18 Z2.7 F1080.0 E54.41\n"+
"G1 X112.68 Y143.36 Z2.7 F1080.0 E59.206\n"+
"G1 X112.82 Y142.51 Z2.7 F1080.0 E64.004\n"+
"G1 X112.82 Y141.64 Z2.7 F1080.0 E68.815\n"+
"G1 X112.68 Y140.79 Z2.7 F1080.0 E73.613\n"+
"G1 X112.42 Y139.97 Z2.7 F1080.0 E78.409\n"+
"G1 X112.03 Y139.2 Z2.7 F1080.0 E83.214\n"+
"G1 X111.52 Y138.5 Z2.7 F1080.0 E88.011\n"+
"G1 X110.91 Y137.89 Z2.7 F1080.0 E92.819\n"+
"G1 X110.21 Y137.38 Z2.7 F1080.0 E97.618\n"+
"G1 X109.44 Y136.99 Z2.7 F1080.0 E102.426\n"+
"G1 X108.61 Y136.72 Z2.7 F1080.0 E107.222\n"+
"G1 X107.76 Y136.59 Z2.7 F1080.0 E112.014\n"+
"G1 X106.9 Y136.59 Z2.7 F1080.0 E116.826\n"+
"G1 X106.04 Y136.72 Z2.7 F1080.0 E121.629\n"+
"G1 X105.22 Y136.99 Z2.7 F1080.0 E126.425\n"+
"G1 X104.45 Y137.38 Z2.7 F1080.0 E131.223\n"+
"G1 X103.75 Y137.89 Z2.7 F1080.0 E136.022\n"+
"G1 X103.14 Y138.5 Z2.7 F1080.0 E140.83\n"+
"G1 X102.63 Y139.2 Z2.7 F1080.0 E145.627\n"+
"G1 X102.24 Y139.97 Z2.7 F1080.0 E150.432\n"+
"G1 X101.97 Y140.79 Z2.7 F1080.0 E155.228\n"+
"G1 X101.84 Y141.64 Z2.7 F1080.0 E160.026\n"+
"G1 X101.84 Y142.51 Z2.7 F1080.0 E164.837\n"+
"G1 X101.97 Y143.36 Z2.7 F1080.0 E169.635\n"+
"G1 X102.24 Y144.18 Z2.7 F1080.0 E174.431\n"+
"G1 X102.63 Y144.96 Z2.7 F1080.0 E179.236\n"+
"G1 X103.14 Y145.65 Z2.7 F1080.0 E184.032\n"+
"G1 X103.98 Y146.43 Z2.7 F1080.0 E190.413\n"+
"G1 F240.0\n"+
"G1 E190.413\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X102.1 Y143.33 Z2.7 F3000.0\n"+
"G1 X101.97 Y142.5 Z2.7 F3000.0\n"+
"G1 X101.97 Y141.66 Z2.7 F3000.0\n"+
"G1 X111.45 Y116.71 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.413\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.16 Y116.82 Z2.7 F1080.0 E3.999\n"+
"G1 X113.02 Y116.82 Z2.7 F1080.0 E8.81\n"+
"G1 X113.88 Y116.68 Z2.7 F1080.0 E13.608\n"+
"G1 X114.7 Y116.42 Z2.7 F1080.0 E18.404\n"+
"G1 X115.47 Y116.02 Z2.7 F1080.0 E23.209\n"+
"G1 X116.17 Y115.52 Z2.7 F1080.0 E28.005\n"+
"G1 X116.78 Y114.9 Z2.7 F1080.0 E32.813\n"+
"G1 X117.29 Y114.21 Z2.7 F1080.0 E37.61\n"+
"G1 X117.68 Y113.43 Z2.7 F1080.0 E42.415\n"+
"G1 X117.95 Y112.61 Z2.7 F1080.0 E47.211\n"+
"G1 X118.08 Y111.76 Z2.7 F1080.0 E52.009\n"+
"G1 X118.08 Y110.89 Z2.7 F1080.0 E56.82\n"+
"G1 X117.95 Y110.04 Z2.7 F1080.0 E61.618\n"+
"G1 X117.68 Y109.22 Z2.7 F1080.0 E66.414\n"+
"G1 X117.29 Y108.45 Z2.7 F1080.0 E71.219\n"+
"G1 X116.78 Y107.75 Z2.7 F1080.0 E76.015\n"+
"G1 X116.17 Y107.14 Z2.7 F1080.0 E80.824\n"+
"G1 X115.47 Y106.63 Z2.7 F1080.0 E85.62\n"+
"G1 X114.7 Y106.24 Z2.7 F1080.0 E90.425\n"+
"G1 X113.88 Y105.97 Z2.7 F1080.0 E95.221\n"+
"G1 X113.02 Y105.84 Z2.7 F1080.0 E100.019\n"+
"G1 X112.16 Y105.84 Z2.7 F1080.0 E104.83\n"+
"G1 X111.3 Y105.97 Z2.7 F1080.0 E109.628\n"+
"G1 X110.48 Y106.24 Z2.7 F1080.0 E114.424\n"+
"G1 X109.71 Y106.63 Z2.7 F1080.0 E119.229\n"+
"G1 X109.01 Y107.14 Z2.7 F1080.0 E124.025\n"+
"G1 X108.4 Y107.75 Z2.7 F1080.0 E128.834\n"+
"G1 X107.89 Y108.45 Z2.7 F1080.0 E133.63\n"+
"G1 X107.5 Y109.22 Z2.7 F1080.0 E138.435\n"+
"G1 X107.24 Y110.04 Z2.7 F1080.0 E143.231\n"+
"G1 X107.1 Y110.89 Z2.7 F1080.0 E148.029\n"+
"G1 X107.1 Y111.76 Z2.7 F1080.0 E152.84\n"+
"G1 X107.24 Y112.61 Z2.7 F1080.0 E157.638\n"+
"G1 X107.5 Y113.43 Z2.7 F1080.0 E162.434\n"+
"G1 X107.89 Y114.21 Z2.7 F1080.0 E167.239\n"+
"G1 X108.4 Y114.9 Z2.7 F1080.0 E172.036\n"+
"G1 X109.01 Y115.52 Z2.7 F1080.0 E176.844\n"+
"G1 X109.71 Y116.02 Z2.7 F1080.0 E181.64\n"+
"G1 X110.48 Y116.42 Z2.7 F1080.0 E186.445\n"+
"G1 X111.17 Y116.64 Z2.7 F1080.0 E190.44\n"+
"G1 F240.0\n"+
"G1 E190.44\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X108.0 Y114.14 Z2.7 F3000.0\n"+
"G1 X107.62 Y113.39 Z2.7 F3000.0\n"+
"G1 X107.36 Y112.58 Z2.7 F3000.0\n"+
"G1 X107.23 Y111.75 Z2.7 F3000.0\n"+
"G1 X107.23 Y110.9 Z2.7 F3000.0\n"+
"G1 X111.45 Y102.78 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.44\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.52 Y102.78 Z2.7 F1080.0 E22.628\n"+
"G1 X115.52 Y88.37 Z2.7 F1080.0 E102.683\n"+
"G1 X109.11 Y88.37 Z2.7 F1080.0 E138.294\n"+
"G1 X109.11 Y102.78 Z2.7 F1080.0 E218.35\n"+
"G1 X111.16 Y102.78 Z2.7 F1080.0 E229.733\n"+
"G1 F240.0\n"+
"G1 E229.733\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X107.23 Y110.9 Z2.7 F3000.0\n"+
"G1 X112.39 Y130.22 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E229.733\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.65 Y130.35 Z2.7 F1080.0 E4.166\n"+
"G1 X111.24 Y130.52 Z2.7 F1080.0 E6.658\n"+
"G1 X110.85 Y130.76 Z2.7 F1080.0 E9.16\n"+
"G1 X110.51 Y131.05 Z2.7 F1080.0 E11.642\n"+
"G1 X110.22 Y131.39 Z2.7 F1080.0 E14.132\n"+
"G1 X109.99 Y131.77 Z2.7 F1080.0 E16.625\n"+
"G1 X109.82 Y132.19 Z2.7 F1080.0 E19.116\n"+
"G1 X109.71 Y132.62 Z2.7 F1080.0 E21.614\n"+
"G1 X109.68 Y133.07 Z2.7 F1080.0 E24.098\n"+
"G1 X109.71 Y133.52 Z2.7 F1080.0 E26.583\n"+
"G1 X109.82 Y133.95 Z2.7 F1080.0 E29.081\n"+
"G1 X109.99 Y134.37 Z2.7 F1080.0 E31.572\n"+
"G1 X110.22 Y134.75 Z2.7 F1080.0 E34.065\n"+
"G1 X110.51 Y135.09 Z2.7 F1080.0 E36.555\n"+
"G1 X110.85 Y135.38 Z2.7 F1080.0 E39.033\n"+
"G1 X111.24 Y135.62 Z2.7 F1080.0 E41.537\n"+
"G1 X111.65 Y135.79 Z2.7 F1080.0 E44.028\n"+
"G1 X112.09 Y135.89 Z2.7 F1080.0 E46.524\n"+
"G1 X112.53 Y135.93 Z2.7 F1080.0 E49.009\n"+
"G1 X112.98 Y135.89 Z2.7 F1080.0 E51.494\n"+
"G1 X113.42 Y135.79 Z2.7 F1080.0 E53.99\n"+
"G1 X113.83 Y135.62 Z2.7 F1080.0 E56.481\n"+
"G1 X114.21 Y135.38 Z2.7 F1080.0 E58.98\n"+
"G1 X114.55 Y135.09 Z2.7 F1080.0 E61.463\n"+
"G1 X114.84 Y134.75 Z2.7 F1080.0 E63.949\n"+
"G1 X115.08 Y134.37 Z2.7 F1080.0 E66.442\n"+
"G1 X115.25 Y133.95 Z2.7 F1080.0 E68.935\n"+
"G1 X115.36 Y133.52 Z2.7 F1080.0 E71.432\n"+
"G1 X115.39 Y133.07 Z2.7 F1080.0 E73.917\n"+
"G1 X115.36 Y132.62 Z2.7 F1080.0 E76.402\n"+
"G1 X115.25 Y132.19 Z2.7 F1080.0 E78.899\n"+
"G1 X115.08 Y131.77 Z2.7 F1080.0 E81.391\n"+
"G1 X114.84 Y131.39 Z2.7 F1080.0 E83.885\n"+
"G1 X114.55 Y131.05 Z2.7 F1080.0 E86.371\n"+
"G1 X114.21 Y130.76 Z2.7 F1080.0 E88.857\n"+
"G1 X113.83 Y130.52 Z2.7 F1080.0 E91.354\n"+
"G1 X113.42 Y130.35 Z2.7 F1080.0 E93.847\n"+
"G1 X112.68 Y130.22 Z2.7 F1080.0 E98.012\n"+
"G1 F240.0\n"+
"G1 E98.012\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> outer )\n"+
"G1 X124.68 Y137.39 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E98.012\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.91 Y162.98 Z2.7 F1080.0 E164.114\n"+
"G1 X90.49 Y174.18 Z2.7 F1080.0 E288.667\n"+
"G1 X78.77 Y171.04 Z2.7 F1080.0 E356.107\n"+
"G1 X73.08 Y161.18 Z2.7 F1080.0 E419.352\n"+
"G1 X76.32 Y149.65 Z2.7 F1080.0 E485.926\n"+
"G1 X93.57 Y139.69 Z2.7 F1080.0 E596.564\n"+
"G1 X98.22 Y131.74 Z2.7 F1080.0 E647.744\n"+
"G1 X98.22 Y111.55 Z2.7 F1080.0 E759.91\n"+
"G1 X105.52 Y104.25 Z2.7 F1080.0 E817.272\n"+
"G1 X105.52 Y88.37 Z2.7 F1080.0 E905.472\n"+
"G1 X104.02 Y88.37 Z2.7 F1080.0 E913.806\n"+
"G1 X104.02 Y85.78 Z2.7 F1080.0 E928.194\n"+
"G1 X120.61 Y85.78 Z2.7 F1080.0 E1020.361\n"+
"G1 X120.61 Y88.37 Z2.7 F1080.0 E1034.75\n"+
"G1 X119.11 Y88.37 Z2.7 F1080.0 E1043.083\n"+
"G1 X119.11 Y103.57 Z2.7 F1080.0 E1127.506\n"+
"G1 X126.96 Y111.42 Z2.7 F1080.0 E1189.189\n"+
"G1 X126.96 Y133.44 Z2.7 F1080.0 E1311.522\n"+
"G1 X124.82 Y137.14 Z2.7 F1080.0 E1335.272\n"+
"G1 F240.0\n"+
"G1 E1335.272\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"G1 X87.62 Y173.32 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E1335.272\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X125.98 Y134.97 Z2.7 F1080.0 E301.337\n"+
"G1 F240.0\n"+
"G1 E301.337\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y132.8 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E301.337\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X86.62 Y173.05 Z2.7 F1080.0 E316.265\n"+
"G1 F240.0\n"+
"G1 E316.265\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X85.11 Y172.65 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E316.265\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y130.89 Z2.7 F1080.0 E328.098\n"+
"G1 F240.0\n"+
"G1 E328.098\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y129.62 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E328.098\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.61 Y143.88 Z2.7 F1080.0 E112.045\n"+
"G1 F240.0\n"+
"G1 E112.045\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.91 Y141.67 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E112.045\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y128.34 Z2.7 F1080.0 E105.44\n"+
"G1 X126.87 Y127.71 Z2.7 F1080.0 E109.768\n"+
"G1 F240.0\n"+
"G1 E109.768\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y126.44 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E109.768\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.99 Y139.97 Z2.7 F1080.0 E107.744\n"+
"G1 X112.71 Y140.59 Z2.7 F1080.0 E111.5\n"+
"G1 F240.0\n"+
"G1 E111.5\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.15 Y139.25 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E111.5\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y125.16 Z2.7 F1080.0 E111.399\n"+
"G1 X126.87 Y124.53 Z2.7 F1080.0 E115.728\n"+
"G1 F240.0\n"+
"G1 E115.728\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y123.25 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E115.728\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.63 Y138.5 Z2.7 F1080.0 E119.784\n"+
"G1 X112.22 Y135.99 Z2.7 F1080.0 E134.096\n"+
"G1 X110.64 Y137.58 Z2.7 F1080.0 E146.572\n"+
"G1 X110.53 Y136.95 Z2.7 F1080.0 E150.131\n"+
"G1 X111.23 Y135.71 Z2.7 F1080.0 E158.027\n"+
"G1 X110.6 Y135.86 Z2.7 F1080.0 E161.618\n"+
"G1 X109.85 Y137.1 Z2.7 F1080.0 E169.667\n"+
"G1 X109.62 Y136.48 Z2.7 F1080.0 E173.305\n"+
"G1 X110.15 Y135.48 Z2.7 F1080.0 E179.602\n"+
"G1 X110.19 Y134.85 Z2.7 F1080.0 E183.142\n"+
"G1 X109.56 Y134.7 Z2.7 F1080.0 E186.722\n"+
"G1 X109.05 Y136.3 Z2.7 F1080.0 E196.018\n"+
"G1 X108.43 Y136.6 Z2.7 F1080.0 E199.847\n"+
"G1 F240.0\n"+
"G1 E199.847\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.26 Y136.5 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E199.847\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.75 Y134.02 Z2.7 F1080.0 E19.489\n"+
"G1 F240.0\n"+
"G1 E19.489\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.76 Y132.1 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E19.489\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.16 Y132.8 Z2.7 F1080.0 E5.14\n"+
"G1 X104.7 Y137.15 Z2.7 F1080.0 E39.764\n"+
"G1 F240.0\n"+
"G1 E39.764\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X102.41 Y139.45 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E39.764\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X85.76 Y156.46 Z2.7 F1080.0 E132.253\n"+
"G1 X85.14 Y156.71 Z2.7 F1080.0 E135.966\n"+
"G1 F240.0\n"+
"G1 E135.966\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X84.11 Y156.47 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E135.966\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y113.71 Z2.7 F1080.0 E335.939\n"+
"G1 F240.0\n"+
"G1 E335.939\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y114.98 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E335.939\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y115.62 Z2.7 F1080.0 E4.328\n"+
"G1 X111.56 Y130.29 Z2.7 F1080.0 E120.371\n"+
"G1 F240.0\n"+
"G1 E120.371\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.48 Y130.28 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E120.371\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.87 Y116.89 Z2.7 F1080.0 E105.221\n"+
"G1 F240.0\n"+
"G1 E105.221\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y118.16 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E105.221\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y118.8 Z2.7 F1080.0 E4.328\n"+
"G1 X114.95 Y130.69 Z2.7 F1080.0 E96.121\n"+
"G1 X114.31 Y130.72 Z2.7 F1080.0 E99.661\n"+
"G1 F240.0\n"+
"G1 E99.661\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X126.87 Y120.07 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E99.661\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y120.71 Z2.7 F1080.0 E4.333\n"+
"G1 X115.32 Y131.14 Z2.7 F1080.0 E88.947\n"+
"G1 X115.18 Y131.77 Z2.7 F1080.0 E92.538\n"+
"G1 X126.87 Y121.34 Z2.7 F1080.0 E179.582\n"+
"G1 X126.42 Y121.98 Z2.7 F1080.0 E183.91\n"+
"G1 X115.46 Y132.76 Z2.7 F1080.0 E269.34\n"+
"G1 F240.0\n"+
"G1 E269.34\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X123.37 Y139.49 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E269.34\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X89.13 Y173.73 Z2.7 F1080.0 E269.015\n"+
"G1 F240.0\n"+
"G1 E269.015\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X90.13 Y173.99 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E269.015\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X121.63 Y142.5 Z2.7 F1080.0 E247.46\n"+
"G1 F240.0\n"+
"G1 E247.46\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y147.01 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E247.46\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X93.95 Y172.09 Z2.7 F1080.0 E196.976\n"+
"G1 F240.0\n"+
"G1 E196.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X96.96 Y170.35 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E196.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.28 Y150.03 Z2.7 F1080.0 E159.657\n"+
"G1 F240.0\n"+
"G1 E159.657\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.67 Y154.54 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E159.657\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.48 Y167.74 Z2.7 F1080.0 E103.678\n"+
"G1 F240.0\n"+
"G1 E103.678\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.49 Y166.0 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E103.678\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.94 Y157.55 Z2.7 F1080.0 E66.358\n"+
"G1 F240.0\n"+
"G1 E66.358\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.33 Y162.07 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E66.358\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.01 Y163.39 Z2.7 F1080.0 E10.383\n"+
"G1 F240.0\n"+
"G1 E10.383\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X84.11 Y172.38 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E10.383\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.87 Y154.44 Z2.7 F1080.0 E140.233\n"+
"G1 X102.51 Y153.98 Z2.7 F1080.0 E144.618\n"+
"G1 F240.0\n"+
"G1 E144.618\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X82.6 Y171.98 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E144.618\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X83.22 Y171.68 Z2.7 F1080.0 E3.816\n"+
"G1 X100.87 Y153.71 Z2.7 F1080.0 E143.727\n"+
"G1 F240.0\n"+
"G1 E143.727\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X100.12 Y153.19 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E143.727\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X82.22 Y171.41 Z2.7 F1080.0 E141.883\n"+
"G1 X81.6 Y171.71 Z2.7 F1080.0 E145.697\n"+
"G1 F240.0\n"+
"G1 E145.697\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X79.09 Y171.04 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E145.697\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.71 Y170.74 Z2.7 F1080.0 E3.821\n"+
"G1 X81.98 Y167.88 Z2.7 F1080.0 E24.091\n"+
"G1 X82.6 Y167.52 Z2.7 F1080.0 E28.069\n"+
"G1 X80.09 Y171.31 Z2.7 F1080.0 E53.275\n"+
"G1 X80.71 Y171.01 Z2.7 F1080.0 E57.092\n"+
"G1 X83.84 Y167.56 Z2.7 F1080.0 E82.951\n"+
"G1 F240.0\n"+
"G1 E82.951\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.25 Y169.97 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E82.951\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X81.1 Y167.12 Z2.7 F1080.0 E22.392\n"+
"G1 F240.0\n"+
"G1 E22.392\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X80.28 Y166.67 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E22.392\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.64 Y166.77 Z2.7 F1080.0 E3.562\n"+
"G1 X77.94 Y168.53 Z2.7 F1080.0 E17.184\n"+
"G1 X77.78 Y169.16 Z2.7 F1080.0 E20.781\n"+
"G1 F240.0\n"+
"G1 E20.781\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.08 Y167.95 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E20.781\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X79.24 Y165.79 Z2.7 F1080.0 E16.939\n"+
"G1 F240.0\n"+
"G1 E16.939\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X78.05 Y163.8 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E16.939\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X77.8 Y164.42 Z2.7 F1080.0 E3.713\n"+
"G1 X76.08 Y165.3 Z2.7 F1080.0 E14.476\n"+
"G1 X75.92 Y165.93 Z2.7 F1080.0 E18.078\n"+
"G1 X78.68 Y165.08 Z2.7 F1080.0 E34.11\n"+
"G1 X76.78 Y166.51 Z2.7 F1080.0 E47.333\n"+
"G1 X76.62 Y167.14 Z2.7 F1080.0 E50.929\n"+
"G1 F240.0\n"+
"G1 E50.929\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.8 Y162.78 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E50.929\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.61 Y164.5 Z2.7 F1080.0 E15.49\n"+
"G1 X75.45 Y165.13 Z2.7 F1080.0 E19.087\n"+
"G1 F240.0\n"+
"G1 E19.087\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X79.84 Y157.9 Z2.7 F3000.0\n"+
"G1 X126.41 Y110.99 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E19.087\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X125.77 Y110.99 Z2.7 F1080.0 E3.533\n"+
"G1 X74.45 Y162.48 Z2.7 F1080.0 E407.418\n"+
"G1 X74.29 Y163.11 Z2.7 F1080.0 E411.018\n"+
"G1 X77.87 Y160.8 Z2.7 F1080.0 E434.666\n"+
"G1 X77.3 Y161.49 Z2.7 F1080.0 E439.6\n"+
"G1 X74.76 Y163.92 Z2.7 F1080.0 E459.154\n"+
"G1 F240.0\n"+
"G1 E459.154\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X125.45 Y110.04 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E459.154\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.59 Y161.9 Z2.7 F1080.0 E407.451\n"+
"G1 F240.0\n"+
"G1 E407.451\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X73.22 Y160.99 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E407.451\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X124.82 Y109.4 Z2.7 F1080.0 E405.353\n"+
"G1 F240.0\n"+
"G1 E405.353\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X95.17 Y137.14 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E405.353\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X123.86 Y108.45 Z2.7 F1080.0 E225.441\n"+
"G1 F240.0\n"+
"G1 E225.441\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X123.22 Y107.81 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E225.441\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X117.86 Y113.18 Z2.7 F1080.0 E42.171\n"+
"G1 F240.0\n"+
"G1 E42.171\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X118.17 Y110.95 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E42.171\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X122.27 Y106.86 Z2.7 F1080.0 E32.205\n"+
"G1 F240.0\n"+
"G1 E32.205\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X121.63 Y106.22 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E32.205\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X121.0 Y106.22 Z2.7 F1080.0 E3.533\n"+
"G1 X118.26 Y109.25 Z2.7 F1080.0 E26.236\n"+
"G1 X117.98 Y109.87 Z2.7 F1080.0 E29.995\n"+
"G1 F240.0\n"+
"G1 E29.995\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X117.42 Y108.52 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E29.995\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.68 Y105.26 Z2.7 F1080.0 E25.574\n"+
"G1 F240.0\n"+
"G1 E25.574\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.04 Y104.63 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E25.574\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.9 Y107.77 Z2.7 F1080.0 E24.678\n"+
"G1 F240.0\n"+
"G1 E24.678\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.92 Y106.85 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E24.678\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.55 Y106.76 Z2.7 F1080.0 E3.545\n"+
"G1 X119.09 Y104.31 Z2.7 F1080.0 E23.166\n"+
"G1 X119.09 Y103.67 Z2.7 F1080.0 E26.7\n"+
"G1 F240.0\n"+
"G1 E26.7\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y102.47 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.7\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.13 Y106.36 Z2.7 F1080.0 E30.575\n"+
"G1 F240.0\n"+
"G1 E30.575\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X113.72 Y105.86 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E30.575\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.34 Y105.56 Z2.7 F1080.0 E3.824\n"+
"G1 X118.57 Y101.19 Z2.7 F1080.0 E37.584\n"+
"G1 X119.02 Y100.56 Z2.7 F1080.0 E41.917\n"+
"G1 F240.0\n"+
"G1 E41.917\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y102.69 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E41.917\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y102.06 Z2.7 F1080.0 E4.325\n"+
"G1 X118.57 Y99.92 Z2.7 F1080.0 E22.643\n"+
"G1 X119.02 Y99.28 Z2.7 F1080.0 E26.976\n"+
"G1 X115.61 Y100.79 Z2.7 F1080.0 E47.675\n"+
"G1 X118.57 Y98.01 Z2.7 F1080.0 E70.208\n"+
"G1 X119.02 Y97.38 Z2.7 F1080.0 E74.541\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y99.51 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y98.88 Z2.7 F1080.0 E4.325\n"+
"G1 X118.57 Y96.74 Z2.7 F1080.0 E22.643\n"+
"G1 X119.02 Y96.1 Z2.7 F1080.0 E26.976\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y94.19 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.57 Y94.83 Z2.7 F1080.0 E4.333\n"+
"G1 X115.61 Y97.6 Z2.7 F1080.0 E26.866\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y96.33 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y95.69 Z2.7 F1080.0 E4.325\n"+
"G1 X118.57 Y93.56 Z2.7 F1080.0 E22.643\n"+
"G1 X119.02 Y92.92 Z2.7 F1080.0 E26.976\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.02 Y91.01 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X118.57 Y91.65 Z2.7 F1080.0 E4.333\n"+
"G1 X115.61 Y94.42 Z2.7 F1080.0 E26.866\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y93.15 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.866\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X116.06 Y92.51 Z2.7 F1080.0 E4.325\n"+
"G1 X118.57 Y90.38 Z2.7 F1080.0 E22.643\n"+
"G1 X119.02 Y89.74 Z2.7 F1080.0 E26.976\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.48 Y88.28 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E26.976\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.52 Y88.24 Z2.7 F1080.0 E0.354\n"+
"G1 F240.0\n"+
"G1 E0.354\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X120.52 Y86.33 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E0.354\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.07 Y86.97 Z2.7 F1080.0 E4.333\n"+
"G1 X115.61 Y91.24 Z2.7 F1080.0 E38.647\n"+
"G1 F240.0\n"+
"G1 E38.647\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.61 Y89.97 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E38.647\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.7 Y85.87 Z2.7 F1080.0 E32.154\n"+
"G1 F240.0\n"+
"G1 E32.154\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.24 Y88.5 Z2.7 F3000.0\n"+
"G1 X105.61 Y93.6 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E32.154\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.06 Y92.97 Z2.7 F1080.0 E4.325\n"+
"G1 X108.57 Y90.83 Z2.7 F1080.0 E22.643\n"+
"G1 X109.02 Y90.19 Z2.7 F1080.0 E26.976\n"+
"G1 X105.61 Y91.69 Z2.7 F1080.0 E47.675\n"+
"G1 X108.57 Y88.92 Z2.7 F1080.0 E70.208\n"+
"G1 X109.02 Y88.28 Z2.7 F1080.0 E74.541\n"+
"G1 X109.66 Y87.83 Z2.7 F1080.0 E78.874\n"+
"G1 X110.8 Y86.32 Z2.7 F1080.0 E89.375\n"+
"G1 X111.43 Y85.87 Z2.7 F1080.0 E93.703\n"+
"G1 X110.93 Y88.28 Z2.7 F1080.0 E107.379\n"+
"G1 X111.57 Y87.83 Z2.7 F1080.0 E111.712\n"+
"G1 X112.7 Y86.32 Z2.7 F1080.0 E122.213\n"+
"G1 X113.34 Y85.87 Z2.7 F1080.0 E126.546\n"+
"G1 X112.2 Y88.28 Z2.7 F1080.0 E141.35\n"+
"G1 X112.84 Y87.83 Z2.7 F1080.0 E145.683\n"+
"G1 X114.61 Y85.87 Z2.7 F1080.0 E160.366\n"+
"G1 X114.11 Y88.28 Z2.7 F1080.0 E174.041\n"+
"G1 X114.75 Y87.83 Z2.7 F1080.0 E178.374\n"+
"G1 X115.89 Y86.32 Z2.7 F1080.0 E188.875\n"+
"G1 X116.52 Y85.87 Z2.7 F1080.0 E193.204\n"+
"G1 X115.39 Y88.28 Z2.7 F1080.0 E208.008\n"+
"G1 X117.8 Y85.87 Z2.7 F1080.0 E226.943\n"+
"G1 F240.0\n"+
"G1 E226.943\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.16 Y85.87 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E226.943\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.61 Y90.42 Z2.7 F1080.0 E35.725\n"+
"G1 F240.0\n"+
"G1 E35.725\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y88.51 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E35.725\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.25 Y85.87 Z2.7 F1080.0 E20.726\n"+
"G1 F240.0\n"+
"G1 E20.726\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X106.98 Y85.87 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E20.726\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.57 Y88.28 Z2.7 F1080.0 E18.935\n"+
"G1 X105.07 Y85.87 Z2.7 F1080.0 E32.609\n"+
"G1 X104.11 Y86.83 Z2.7 F1080.0 E40.116\n"+
"G1 F240.0\n"+
"G1 E40.116\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X104.11 Y86.19 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E40.116\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X104.43 Y85.87 Z2.7 F1080.0 E2.514\n"+
"G1 F240.0\n"+
"G1 E2.514\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.39 Y89.43 Z2.7 F3000.0\n"+
"G1 X105.61 Y96.78 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E2.514\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.06 Y96.15 Z2.7 F1080.0 E4.325\n"+
"G1 X108.57 Y94.01 Z2.7 F1080.0 E22.643\n"+
"G1 X109.02 Y93.37 Z2.7 F1080.0 E26.976\n"+
"G1 X105.61 Y94.88 Z2.7 F1080.0 E47.675\n"+
"G1 X108.57 Y92.1 Z2.7 F1080.0 E70.208\n"+
"G1 X109.02 Y91.47 Z2.7 F1080.0 E74.541\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y99.97 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.06 Y99.33 Z2.7 F1080.0 E4.325\n"+
"G1 X108.57 Y97.19 Z2.7 F1080.0 E22.643\n"+
"G1 X109.02 Y96.56 Z2.7 F1080.0 E26.976\n"+
"G1 X105.61 Y98.06 Z2.7 F1080.0 E47.675\n"+
"G1 X108.57 Y95.28 Z2.7 F1080.0 E70.208\n"+
"G1 X109.02 Y94.65 Z2.7 F1080.0 E74.541\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.61 Y103.15 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.06 Y102.51 Z2.7 F1080.0 E4.325\n"+
"G1 X108.57 Y100.38 Z2.7 F1080.0 E22.643\n"+
"G1 X109.02 Y99.74 Z2.7 F1080.0 E26.976\n"+
"G1 X105.61 Y101.24 Z2.7 F1080.0 E47.675\n"+
"G1 X108.57 Y98.47 Z2.7 F1080.0 E70.208\n"+
"G1 X109.02 Y97.83 Z2.7 F1080.0 E74.541\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.39 Y104.2 Z2.7 F3000.0\n"+
"G1 X98.31 Y111.72 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E74.541\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.57 Y101.65 Z2.7 F1080.0 E79.887\n"+
"G1 X109.02 Y101.01 Z2.7 F1080.0 E84.22\n"+
"G1 F240.0\n"+
"G1 E84.22\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.07 Y102.87 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E84.22\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y113.0 Z2.7 F1080.0 E80.26\n"+
"G1 X98.31 Y113.63 Z2.7 F1080.0 E84.588\n"+
"G1 F240.0\n"+
"G1 E84.588\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y114.9 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E84.588\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.34 Y102.87 Z2.7 F1080.0 E94.521\n"+
"G1 F240.0\n"+
"G1 E94.521\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X112.25 Y102.87 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E94.521\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y116.81 Z2.7 F1080.0 E109.523\n"+
"G1 F240.0\n"+
"G1 E109.523\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y118.09 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E109.523\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X107.63 Y108.76 Z2.7 F1080.0 E73.248\n"+
"G1 F240.0\n"+
"G1 E73.248\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.01 Y111.3 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E73.248\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y119.36 Z2.7 F1080.0 E64.088\n"+
"G1 X98.31 Y120.0 Z2.7 F1080.0 E68.421\n"+
"G1 F240.0\n"+
"G1 E68.421\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y121.27 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E68.421\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.82 Y113.08 Z2.7 F1080.0 E65.616\n"+
"G1 X107.12 Y112.46 Z2.7 F1080.0 E69.44\n"+
"G1 F240.0\n"+
"G1 E69.44\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X107.62 Y113.87 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E69.44\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y122.54 Z2.7 F1080.0 E68.888\n"+
"G1 X98.31 Y123.18 Z2.7 F1080.0 E73.216\n"+
"G1 F240.0\n"+
"G1 E73.216\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y124.45 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E73.216\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.03 Y115.29 Z2.7 F1080.0 E74.203\n"+
"G1 X108.11 Y114.65 Z2.7 F1080.0 E77.754\n"+
"G1 F240.0\n"+
"G1 E77.754\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.03 Y115.64 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E77.754\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.4 Y115.66 Z2.7 F1080.0 E3.535\n"+
"G1 X98.76 Y125.72 Z2.7 F1080.0 E80.939\n"+
"G1 X98.31 Y126.36 Z2.7 F1080.0 E85.262\n"+
"G1 F240.0\n"+
"G1 E85.262\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y127.63 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E85.262\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.78 Y116.16 Z2.7 F1080.0 E90.133\n"+
"G1 F240.0\n"+
"G1 E90.133\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X111.13 Y116.72 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E90.133\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.51 Y116.99 Z2.7 F1080.0 E3.758\n"+
"G1 X98.76 Y128.91 Z2.7 F1080.0 E96.722\n"+
"G1 X98.31 Y129.54 Z2.7 F1080.0 E101.05\n"+
"G1 F240.0\n"+
"G1 E101.05\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y130.81 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E101.05\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.22 Y116.91 Z2.7 F1080.0 E109.264\n"+
"G1 F240.0\n"+
"G1 E109.264\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.44 Y116.59 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E109.264\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X96.96 Y134.07 Z2.7 F1080.0 E137.34\n"+
"G1 F240.0\n"+
"G1 E137.34\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X86.42 Y157.34 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E137.34\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.75 Y142.01 Z2.7 F1080.0 E120.42\n"+
"G1 F240.0\n"+
"G1 E120.42\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.85 Y143.18 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E120.42\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X101.55 Y143.8 Z2.7 F1080.0 E3.829\n"+
"G1 X87.13 Y157.9 Z2.7 F1080.0 E115.877\n"+
"G1 F240.0\n"+
"G1 E115.877\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.01 Y158.94 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E115.877\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.1 Y158.3 Z2.7 F1080.0 E3.562\n"+
"G1 X102.35 Y144.6 Z2.7 F1080.0 E113.389\n"+
"G1 F240.0\n"+
"G1 E113.389\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X105.85 Y147.46 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E113.389\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.23 Y147.73 Z2.7 F1080.0 E3.756\n"+
"G1 X104.91 Y149.1 Z2.7 F1080.0 E11.561\n"+
"G1 X104.27 Y149.04 Z2.7 F1080.0 E15.103\n"+
"G1 X104.24 Y148.4 Z2.7 F1080.0 E18.642\n"+
"G1 X104.72 Y147.51 Z2.7 F1080.0 E24.232\n"+
"G1 X104.5 Y146.9 Z2.7 F1080.0 E27.862\n"+
"G1 X103.73 Y148.07 Z2.7 F1080.0 E35.646\n"+
"G1 X103.11 Y148.29 Z2.7 F1080.0 E39.311\n"+
"G1 X103.85 Y147.01 Z2.7 F1080.0 E47.55\n"+
"G1 X103.75 Y146.37 Z2.7 F1080.0 E51.102\n"+
"G1 X102.0 Y148.13 Z2.7 F1080.0 E64.867\n"+
"G1 X102.83 Y145.38 Z2.7 F1080.0 E80.795\n"+
"G1 X88.46 Y159.76 Z2.7 F1080.0 E193.751\n"+
"G1 F240.0\n"+
"G1 E193.751\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X88.9 Y162.5 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E193.751\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.15 Y152.65 Z2.7 F1080.0 E78.984\n"+
"G1 X99.37 Y152.03 Z2.7 F1080.0 E82.649\n"+
"G1 X88.86 Y161.26 Z2.7 F1080.0 E160.352\n"+
"G1 X89.22 Y160.64 Z2.7 F1080.0 E164.33\n"+
"G1 X99.21 Y150.92 Z2.7 F1080.0 E241.765\n"+
"G1 F240.0\n"+
"G1 E241.765\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X101.1 Y148.54 Z2.7 F3000.0\n"+
"G1 X101.93 Y148.35 Z2.7 F3000.0\n"+
"G1 X102.78 Y148.41 Z2.7 F3000.0\n"+
"G1 X104.79 Y149.79 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E241.765\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X106.92 Y147.66 Z2.7 F1080.0 E16.743\n"+
"G1 F240.0\n"+
"G1 E16.743\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.13 Y147.36 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E16.743\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.52 Y150.79 Z2.7 F1080.0 E27.641\n"+
"G1 X105.06 Y151.43 Z2.7 F1080.0 E32.026\n"+
"G1 F240.0\n"+
"G1 E32.026\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X103.57 Y148.74 Z2.7 F3000.0\n"+
"G1 X91.06 Y141.24 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E32.026\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X73.97 Y158.34 Z2.7 F1080.0 E134.295\n"+
"G1 F240.0\n"+
"G1 E134.295\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X74.47 Y156.56 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E134.295\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X88.05 Y142.98 Z2.7 F1080.0 E106.718\n"+
"G1 F240.0\n"+
"G1 E106.718\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X83.54 Y145.59 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E106.718\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X75.22 Y153.91 Z2.7 F1080.0 E65.352\n"+
"G1 F240.0\n"+
"G1 E65.352\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X75.72 Y152.14 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E65.352\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X80.52 Y147.33 Z2.7 F1080.0 E37.783\n"+
"G1 F240.0\n"+
"G1 E37.783\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X77.51 Y149.07 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E37.783\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X76.21 Y150.36 Z2.7 F1080.0 E10.206\n"+
"G1 F240.0\n"+
"G1 E10.206\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X82.14 Y156.53 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E10.206\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X126.42 Y112.43 Z2.7 F1080.0 E347.174\n"+
"G1 X126.87 Y111.8 Z2.7 F1080.0 E351.503\n"+
"G1 F240.0\n"+
"G1 E351.503\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X115.43 Y102.87 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E351.503\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.8 Y103.32 Z2.7 F1080.0 E4.328\n"+
"G1 X112.56 Y105.75 Z2.7 F1080.0 E22.657\n"+
"G1 F240.0\n"+
"G1 E22.657\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.03 Y106.37 Z2.7 F3000.0\n"+
"G1 F240.0\n"+
"G1 E22.657\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X113.52 Y102.87 Z2.7 F1080.0 E27.475\n"+
"G1 F240.0\n"+
"G1 E27.475\n"+
"G1 F1080.0\n"+
";\n"+
"(</surroundingLoop>)\n"+
"G1 F30.0\n"+
"(<layer> 3.0 )\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X93.055 Y139.175 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y131.549 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X97.515 Y111.258 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y103.957 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.816 Y89.078 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y89.078 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.316 Y85.078 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y85.078 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X121.316 Y89.078 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y89.078 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X119.816 Y103.277 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y111.128 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X127.667 Y133.629 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.426 Y163.491 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X90.593 Y174.941 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.302 Y171.647 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X72.316 Y161.279 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X75.721 Y149.182 Z3.0 </boundaryPoint>)\n"+
"(<perimeter> outer )\n"+
"M108 S110.0\n"+
"M108 S110.0\n"+
"G1 X113.52 Y102.87 Z3.0 F30.0\n"+
"G91\n"+
"G1 F20\n"+
"G1 F1500\n"+
"G1 X-0.3 Y-0.3 F1500\n"+
"G90\n"+
"G4 P3000\n"+
"G92 X0;set x 0\n"+
"G1 X-1.0 F3000.0 \n"+
"G1 X-500.0  F3200.0 ;horizontal move\n"+
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
"G1 X113.52 Y102.87 Z3.0 F3000.0\n"+
"G1 X119.1 Y103.27 Z3.0 F3000.0\n"+
"G1 X119.58 Y103.3 Z3.0 F607.567\n"+
"G1 F240.0\n"+
"G1 E27.475\n"+
"G1 F607.567\n"+
"G92 E0\n"+
";\n"+
"G1 X119.58 Y103.38 Z3.0 F540.0 E0.892\n"+
"G1 X127.43 Y111.23 Z3.0 F540.0 E136.595\n"+
"G1 X127.43 Y133.57 Z3.0 F540.0 E409.615\n"+
"G1 X110.25 Y163.32 Z3.0 F540.0 E829.482\n"+
"G1 X90.56 Y174.68 Z3.0 F540.0 E1107.378\n"+
"G1 X78.46 Y171.44 Z3.0 F540.0 E1260.468\n"+
"G1 X72.57 Y161.25 Z3.0 F540.0 E1404.35\n"+
"G1 X75.93 Y149.34 Z3.0 F540.0 E1555.525\n"+
"G1 X93.23 Y139.35 Z3.0 F540.0 E1799.733\n"+
"G1 X97.76 Y131.61 Z3.0 F540.0 E1909.282\n"+
"G1 X97.76 Y111.36 Z3.0 F540.0 E2156.868\n"+
"G1 X105.06 Y104.06 Z3.0 F540.0 E2283.064\n"+
"G1 X105.06 Y88.84 Z3.0 F540.0 E2469.062\n"+
"G1 X103.56 Y88.84 Z3.0 F540.0 E2487.395\n"+
"G1 X103.56 Y85.32 Z3.0 F540.0 E2530.418\n"+
"G1 X121.08 Y85.32 Z3.0 F540.0 E2744.551\n"+
"G1 X121.08 Y88.84 Z3.0 F540.0 E2787.573\n"+
"G1 X119.58 Y88.84 Z3.0 F540.0 E2805.907\n"+
"G1 X119.58 Y103.02 Z3.0 F540.0 E2979.181\n"+
"G1 F240.0\n"+
"G1 E2979.181\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X114.816 Y89.078 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y89.078 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.816 Y102.078 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.816 Y102.078 Z3.0 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X115.06 Y102.17 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E2979.181\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.06 Y88.84 Z3.0 F540.0 E162.996\n"+
"G1 X109.58 Y88.84 Z3.0 F540.0 E229.973\n"+
"G1 X109.58 Y102.32 Z3.0 F540.0 E394.729\n"+
"G1 X114.91 Y102.32 Z3.0 F540.0 E459.947\n"+
"G1 F240.0\n"+
"G1 E459.947\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X107.804 Y111.704 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.923 Y112.448 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.155 Y113.164 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.497 Y113.835 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.94 Y114.444 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.473 Y114.977 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.082 Y115.42 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.753 Y115.762 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.469 Y115.994 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.213 Y116.112 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.967 Y116.112 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.711 Y115.994 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.427 Y115.762 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.098 Y115.42 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.707 Y114.977 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.239 Y114.444 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.683 Y113.835 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.025 Y113.164 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y112.448 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y111.704 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.375 Y110.95 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.257 Y110.206 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X117.025 Y109.49 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.683 Y108.819 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X116.239 Y108.21 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.707 Y107.677 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X115.098 Y107.234 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.427 Y106.892 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.711 Y106.66 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.967 Y106.542 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.213 Y106.542 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.469 Y106.66 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.753 Y106.892 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.082 Y107.234 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.473 Y107.677 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.94 Y108.21 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.497 Y108.819 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.155 Y109.49 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.923 Y110.206 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.804 Y110.95 Z3.0 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X113.63 Y106.4 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E459.947\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.99 Y106.3 Z3.0 F540.0 E7.907\n"+
"G1 X112.19 Y106.3 Z3.0 F540.0 E17.587\n"+
"G1 X111.41 Y106.43 Z3.0 F540.0 E27.252\n"+
"G1 X110.66 Y106.67 Z3.0 F540.0 E36.915\n"+
"G1 X109.96 Y107.03 Z3.0 F540.0 E46.584\n"+
"G1 X109.32 Y107.49 Z3.0 F540.0 E56.253\n"+
"G1 X108.76 Y108.05 Z3.0 F540.0 E65.924\n"+
"G1 X108.29 Y108.69 Z3.0 F540.0 E75.583\n"+
"G1 X107.93 Y109.4 Z3.0 F540.0 E85.253\n"+
"G1 X107.69 Y110.15 Z3.0 F540.0 E94.916\n"+
"G1 X107.57 Y110.93 Z3.0 F540.0 E104.581\n"+
"G1 X107.57 Y111.72 Z3.0 F540.0 E114.261\n"+
"G1 X107.69 Y112.5 Z3.0 F540.0 E123.926\n"+
"G1 X107.93 Y113.26 Z3.0 F540.0 E133.589\n"+
"G1 X108.29 Y113.96 Z3.0 F540.0 E143.258\n"+
"G1 X108.76 Y114.6 Z3.0 F540.0 E152.917\n"+
"G1 X109.32 Y115.16 Z3.0 F540.0 E162.588\n"+
"G1 X109.96 Y115.63 Z3.0 F540.0 E172.257\n"+
"G1 X110.66 Y115.98 Z3.0 F540.0 E181.926\n"+
"G1 X111.41 Y116.23 Z3.0 F540.0 E191.589\n"+
"G1 X112.19 Y116.35 Z3.0 F540.0 E201.254\n"+
"G1 X112.99 Y116.35 Z3.0 F540.0 E210.934\n"+
"G1 X113.77 Y116.23 Z3.0 F540.0 E220.599\n"+
"G1 X114.52 Y115.98 Z3.0 F540.0 E230.262\n"+
"G1 X115.22 Y115.63 Z3.0 F540.0 E239.932\n"+
"G1 X115.86 Y115.16 Z3.0 F540.0 E249.591\n"+
"G1 X116.42 Y114.6 Z3.0 F540.0 E259.27\n"+
"G1 X116.89 Y113.96 Z3.0 F540.0 E268.929\n"+
"G1 X117.25 Y113.26 Z3.0 F540.0 E278.599\n"+
"G1 X117.49 Y112.5 Z3.0 F540.0 E288.262\n"+
"G1 X117.61 Y111.72 Z3.0 F540.0 E297.925\n"+
"G1 X117.61 Y110.93 Z3.0 F540.0 E307.605\n"+
"G1 X117.49 Y110.15 Z3.0 F540.0 E317.268\n"+
"G1 X117.25 Y109.4 Z3.0 F540.0 E326.931\n"+
"G1 X116.89 Y108.69 Z3.0 F540.0 E336.6\n"+
"G1 X116.42 Y108.05 Z3.0 F540.0 E346.259\n"+
"G1 X115.86 Y107.49 Z3.0 F540.0 E355.939\n"+
"G1 X115.22 Y107.03 Z3.0 F540.0 E365.598\n"+
"G1 X114.52 Y106.67 Z3.0 F540.0 E375.267\n"+
"G1 X113.9 Y106.47 Z3.0 F540.0 E383.172\n"+
"G1 F240.0\n"+
"G1 E383.172\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X111.269 Y134.809 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y134.986 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y135.115 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y135.194 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y135.22 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y135.194 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y135.115 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y134.986 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y134.809 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y134.59 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y134.334 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y134.046 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y133.734 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y133.406 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.683 Y133.07 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.657 Y132.734 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.578 Y132.406 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.449 Y132.094 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.272 Y131.806 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X114.053 Y131.55 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.797 Y131.331 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.509 Y131.154 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X113.197 Y131.024 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.869 Y130.946 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.533 Y130.92 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.197 Y130.946 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.869 Y131.024 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.557 Y131.154 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.269 Y131.331 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y131.55 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y131.806 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y132.094 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y132.406 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y132.734 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.383 Y133.07 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.409 Y133.406 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.488 Y133.734 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.617 Y134.046 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.794 Y134.334 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.013 Y134.59 Z3.0 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X116.08 Y107.24 Z3.0 F3000.0\n"+
"G1 X116.68 Y107.84 Z3.0 F3000.0\n"+
"G1 X117.18 Y108.52 Z3.0 F3000.0\n"+
"G1 X117.56 Y109.27 Z3.0 F3000.0\n"+
"G1 X117.82 Y110.07 Z3.0 F3000.0\n"+
"G1 X117.95 Y110.91 Z3.0 F3000.0\n"+
"G1 X112.39 Y130.69 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.172\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.8 Y130.8 Z3.0 F540.0 E7.375\n"+
"G1 X111.13 Y131.14 Z3.0 F540.0 E16.536\n"+
"G1 X110.6 Y131.66 Z3.0 F540.0 E25.662\n"+
"G1 X110.26 Y132.33 Z3.0 F540.0 E34.823\n"+
"G1 X110.17 Y132.7 Z3.0 F540.0 E39.4\n"+
"G1 X110.17 Y133.44 Z3.0 F540.0 E48.543\n"+
"G1 X110.26 Y133.81 Z3.0 F540.0 E53.12\n"+
"G1 X110.6 Y134.48 Z3.0 F540.0 E62.281\n"+
"G1 X111.13 Y135.0 Z3.0 F540.0 E71.407\n"+
"G1 X111.45 Y135.2 Z3.0 F540.0 E75.994\n"+
"G1 X112.16 Y135.43 Z3.0 F540.0 E85.146\n"+
"G1 X112.91 Y135.43 Z3.0 F540.0 E94.288\n"+
"G1 X113.27 Y135.34 Z3.0 F540.0 E98.866\n"+
"G1 X113.94 Y135.0 Z3.0 F540.0 E108.027\n"+
"G1 X114.47 Y134.48 Z3.0 F540.0 E117.153\n"+
"G1 X114.81 Y133.81 Z3.0 F540.0 E126.314\n"+
"G1 X114.9 Y133.44 Z3.0 F540.0 E130.891\n"+
"G1 X114.9 Y132.7 Z3.0 F540.0 E140.034\n"+
"G1 X114.81 Y132.33 Z3.0 F540.0 E144.611\n"+
"G1 X114.47 Y131.66 Z3.0 F540.0 E153.772\n"+
"G1 X113.94 Y131.14 Z3.0 F540.0 E162.898\n"+
"G1 X113.27 Y130.8 Z3.0 F540.0 E172.059\n"+
"G1 X112.68 Y130.69 Z3.0 F540.0 E179.434\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X103.236 Y144.585 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y145.194 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y145.727 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y146.17 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y146.512 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y146.743 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y146.862 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y146.862 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y146.743 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y146.512 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y146.17 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y145.727 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y145.194 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y144.585 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y143.914 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y143.198 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y142.454 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X112.114 Y141.7 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.996 Y140.956 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.764 Y140.24 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X111.422 Y139.569 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.979 Y138.96 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X110.446 Y138.427 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.837 Y137.984 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X109.166 Y137.642 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X108.45 Y137.41 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X107.706 Y137.291 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.952 Y137.291 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X106.208 Y137.41 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X105.492 Y137.642 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.821 Y137.984 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.212 Y138.427 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.679 Y138.96 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.236 Y139.569 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y140.24 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y140.956 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y141.7 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.544 Y142.454 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.662 Y143.198 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.894 Y143.914 Z3.0 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X110.93 Y130.86 Z3.0 F3000.0\n"+
"G1 X110.33 Y131.47 Z3.0 F3000.0\n"+
"G1 X109.12 Y137.38 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X108.51 Y137.18 Z3.0 F540.0 E7.904\n"+
"G1 X107.73 Y137.05 Z3.0 F540.0 E17.569\n"+
"G1 X106.93 Y137.05 Z3.0 F540.0 E27.249\n"+
"G1 X106.15 Y137.18 Z3.0 F540.0 E36.914\n"+
"G1 X105.4 Y137.42 Z3.0 F540.0 E46.577\n"+
"G1 X104.7 Y137.78 Z3.0 F540.0 E56.247\n"+
"G1 X104.06 Y138.24 Z3.0 F540.0 E65.899\n"+
"G1 X103.5 Y138.8 Z3.0 F540.0 E75.587\n"+
"G1 X103.03 Y139.44 Z3.0 F540.0 E85.246\n"+
"G1 X102.67 Y140.15 Z3.0 F540.0 E94.915\n"+
"G1 X102.43 Y140.9 Z3.0 F540.0 E104.578\n"+
"G1 X102.3 Y141.68 Z3.0 F540.0 E114.243\n"+
"G1 X102.3 Y142.47 Z3.0 F540.0 E123.923\n"+
"G1 X102.43 Y143.25 Z3.0 F540.0 E133.588\n"+
"G1 X102.67 Y144.01 Z3.0 F540.0 E143.239\n"+
"G1 X103.03 Y144.71 Z3.0 F540.0 E152.92\n"+
"G1 X103.5 Y145.35 Z3.0 F540.0 E162.579\n"+
"G1 X104.06 Y145.91 Z3.0 F540.0 E172.258\n"+
"G1 X104.7 Y146.38 Z3.0 F540.0 E181.917\n"+
"G1 X105.4 Y146.73 Z3.0 F540.0 E191.587\n"+
"G1 X106.15 Y146.98 Z3.0 F540.0 E201.25\n"+
"G1 X106.93 Y147.1 Z3.0 F540.0 E210.915\n"+
"G1 X107.73 Y147.1 Z3.0 F540.0 E220.595\n"+
"G1 X108.51 Y146.98 Z3.0 F540.0 E230.26\n"+
"G1 X109.26 Y146.73 Z3.0 F540.0 E239.923\n"+
"G1 X109.96 Y146.38 Z3.0 F540.0 E249.592\n"+
"G1 X110.6 Y145.91 Z3.0 F540.0 E259.251\n"+
"G1 X111.16 Y145.35 Z3.0 F540.0 E268.922\n"+
"G1 X111.63 Y144.71 Z3.0 F540.0 E278.588\n"+
"G1 X111.99 Y144.01 Z3.0 F540.0 E288.269\n"+
"G1 X112.23 Y143.25 Z3.0 F540.0 E297.92\n"+
"G1 X112.35 Y142.47 Z3.0 F540.0 E307.585\n"+
"G1 X112.35 Y141.68 Z3.0 F540.0 E317.265\n"+
"G1 X112.23 Y140.9 Z3.0 F540.0 E326.93\n"+
"G1 X111.99 Y140.15 Z3.0 F540.0 E336.593\n"+
"G1 X111.63 Y139.44 Z3.0 F540.0 E346.263\n"+
"G1 X111.16 Y138.8 Z3.0 F540.0 E355.929\n"+
"G1 X110.6 Y138.24 Z3.0 F540.0 E365.608\n"+
"G1 X109.96 Y137.78 Z3.0 F540.0 E375.26\n"+
"G1 X109.39 Y137.49 Z3.0 F540.0 E383.175\n"+
"G1 F240.0\n"+
"G1 E383.175\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X100.159 Y151.887 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.312 Y152.187 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.51 Y152.46 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.749 Y152.699 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.022 Y152.897 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.322 Y153.05 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.643 Y153.154 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.976 Y153.207 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.314 Y153.207 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.647 Y153.154 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.968 Y153.05 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.268 Y152.897 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.541 Y152.699 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.78 Y152.46 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y152.187 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y151.887 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.236 Y151.566 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y151.233 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.288 Y150.895 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.236 Y150.562 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X104.131 Y150.241 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.977 Y149.941 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.78 Y149.668 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.541 Y149.429 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X103.268 Y149.231 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.968 Y149.078 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.647 Y148.973 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X102.314 Y148.921 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.976 Y148.921 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.643 Y148.973 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.322 Y149.078 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X101.022 Y149.231 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.749 Y149.429 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.51 Y149.668 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.312 Y149.941 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.159 Y150.241 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y150.562 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y150.895 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.002 Y151.233 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X100.054 Y151.566 Z3.0 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X106.91 Y136.72 Z3.0 F3000.0\n"+
"G1 X106.07 Y136.85 Z3.0 F3000.0\n"+
"G1 X105.27 Y137.11 Z3.0 F3000.0\n"+
"G1 X104.52 Y137.49 Z3.0 F3000.0\n"+
"G1 X103.84 Y137.99 Z3.0 F3000.0\n"+
"G1 X103.24 Y138.59 Z3.0 F3000.0\n"+
"G1 X102.74 Y139.27 Z3.0 F3000.0\n"+
"G1 X102.36 Y140.02 Z3.0 F3000.0\n"+
"G1 X102.1 Y140.82 Z3.0 F3000.0\n"+
"G1 X101.97 Y141.66 Z3.0 F3000.0\n"+
"G1 X103.27 Y148.96 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.175\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X102.7 Y148.74 Z3.0 F540.0 E7.397\n"+
"G1 X101.96 Y148.68 Z3.0 F540.0 E16.542\n"+
"G1 X101.59 Y148.74 Z3.0 F540.0 E21.119\n"+
"G1 X100.9 Y149.03 Z3.0 F540.0 E30.265\n"+
"G1 X100.33 Y149.51 Z3.0 F540.0 E39.41\n"+
"G1 X100.11 Y149.82 Z3.0 F540.0 E43.987\n"+
"G1 X99.82 Y150.51 Z3.0 F540.0 E53.121\n"+
"G1 X99.76 Y151.25 Z3.0 F540.0 E62.278\n"+
"G1 X99.82 Y151.62 Z3.0 F540.0 E66.856\n"+
"G1 X100.11 Y152.31 Z3.0 F540.0 E76.001\n"+
"G1 X100.33 Y152.62 Z3.0 F540.0 E80.577\n"+
"G1 X100.9 Y153.1 Z3.0 F540.0 E89.723\n"+
"G1 X101.59 Y153.39 Z3.0 F540.0 E98.868\n"+
"G1 X102.33 Y153.45 Z3.0 F540.0 E108.014\n"+
"G1 X102.7 Y153.39 Z3.0 F540.0 E112.591\n"+
"G1 X103.39 Y153.1 Z3.0 F540.0 E121.736\n"+
"G1 X103.96 Y152.62 Z3.0 F540.0 E130.882\n"+
"G1 X104.18 Y152.31 Z3.0 F540.0 E135.459\n"+
"G1 X104.47 Y151.62 Z3.0 F540.0 E144.604\n"+
"G1 X104.53 Y150.88 Z3.0 F540.0 E153.749\n"+
"G1 X104.47 Y150.51 Z3.0 F540.0 E158.338\n"+
"G1 X104.18 Y149.82 Z3.0 F540.0 E167.472\n"+
"G1 X103.96 Y149.51 Z3.0 F540.0 E172.049\n"+
"G1 X103.51 Y149.11 Z3.0 F540.0 E179.434\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<surroundingLoop>)\n"+
"(<boundaryPerimeter>)\n"+
"(<boundaryPoint> X78.894 Y163.827 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.236 Y164.498 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.679 Y165.107 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.212 Y165.64 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.821 Y166.082 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.492 Y166.425 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.208 Y166.657 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.952 Y166.775 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.706 Y166.775 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.45 Y166.657 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.166 Y166.425 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.837 Y166.082 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.446 Y165.64 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.979 Y165.107 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.422 Y164.498 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.764 Y163.827 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y163.111 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y162.367 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X88.114 Y161.613 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.996 Y160.868 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.764 Y160.153 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X87.422 Y159.482 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.979 Y158.873 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X86.446 Y158.34 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.837 Y157.897 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X85.166 Y157.555 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X84.45 Y157.323 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X83.706 Y157.205 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.952 Y157.205 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X82.208 Y157.323 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X81.492 Y157.555 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.821 Y157.897 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X80.212 Y158.34 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.679 Y158.873 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X79.236 Y159.482 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.894 Y160.153 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.662 Y160.868 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y161.613 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.544 Y162.367 Z3.0 </boundaryPoint>)\n"+
"(<boundaryPoint> X78.662 Y163.111 Z3.0 </boundaryPoint>)\n"+
"(<perimeter> inner )\n"+
"G1 X101.93 Y148.35 Z3.0 F3000.0\n"+
"G1 X101.1 Y148.54 Z3.0 F3000.0\n"+
"G1 X87.54 Y159.24 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E179.434\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.16 Y158.72 Z3.0 F540.0 E7.901\n"+
"G1 X86.6 Y158.16 Z3.0 F540.0 E17.581\n"+
"G1 X85.96 Y157.69 Z3.0 F540.0 E27.24\n"+
"G1 X85.26 Y157.33 Z3.0 F540.0 E36.909\n"+
"G1 X84.51 Y157.09 Z3.0 F540.0 E46.572\n"+
"G1 X83.73 Y156.97 Z3.0 F540.0 E56.237\n"+
"G1 X82.93 Y156.97 Z3.0 F540.0 E65.917\n"+
"G1 X82.15 Y157.09 Z3.0 F540.0 E75.582\n"+
"G1 X81.4 Y157.33 Z3.0 F540.0 E85.245\n"+
"G1 X80.69 Y157.69 Z3.0 F540.0 E94.915\n"+
"G1 X80.06 Y158.16 Z3.0 F540.0 E104.574\n"+
"G1 X79.5 Y158.72 Z3.0 F540.0 E114.253\n"+
"G1 X79.03 Y159.36 Z3.0 F540.0 E123.912\n"+
"G1 X78.67 Y160.06 Z3.0 F540.0 E133.582\n"+
"G1 X78.43 Y160.81 Z3.0 F540.0 E143.245\n"+
"G1 X78.3 Y161.59 Z3.0 F540.0 E152.91\n"+
"G1 X78.3 Y162.39 Z3.0 F540.0 E162.59\n"+
"G1 X78.43 Y163.17 Z3.0 F540.0 E172.243\n"+
"G1 X78.67 Y163.92 Z3.0 F540.0 E181.917\n"+
"G1 X79.03 Y164.62 Z3.0 F540.0 E191.587\n"+
"G1 X79.5 Y165.26 Z3.0 F540.0 E201.246\n"+
"G1 X80.06 Y165.82 Z3.0 F540.0 E210.925\n"+
"G1 X80.69 Y166.29 Z3.0 F540.0 E220.584\n"+
"G1 X81.4 Y166.65 Z3.0 F540.0 E230.254\n"+
"G1 X82.15 Y166.89 Z3.0 F540.0 E239.917\n"+
"G1 X82.93 Y167.02 Z3.0 F540.0 E249.582\n"+
"G1 X83.73 Y167.02 Z3.0 F540.0 E259.262\n"+
"G1 X84.51 Y166.89 Z3.0 F540.0 E268.927\n"+
"G1 X85.26 Y166.65 Z3.0 F540.0 E278.59\n"+
"G1 X85.96 Y166.29 Z3.0 F540.0 E288.259\n"+
"G1 X86.6 Y165.82 Z3.0 F540.0 E297.918\n"+
"G1 X87.16 Y165.26 Z3.0 F540.0 E307.598\n"+
"G1 X87.63 Y164.62 Z3.0 F540.0 E317.257\n"+
"G1 X87.99 Y163.92 Z3.0 F540.0 E326.926\n"+
"G1 X88.23 Y163.17 Z3.0 F540.0 E336.601\n"+
"G1 X88.35 Y162.39 Z3.0 F540.0 E346.254\n"+
"G1 X88.35 Y161.59 Z3.0 F540.0 E355.934\n"+
"G1 X88.23 Y160.81 Z3.0 F540.0 E365.599\n"+
"G1 X87.99 Y160.06 Z3.0 F540.0 E375.262\n"+
"G1 X87.69 Y159.48 Z3.0 F540.0 E383.177\n"+
"G1 F240.0\n"+
"G1 E383.177\n"+
"G1 F540.0\n"+
";\n"+
"(</perimeter>)\n"+
"(</boundaryPerimeter>)\n"+
"(</surroundingLoop>)\n"+
"(<loop> inner )\n"+
"M108 S100.0\n"+
"M108 S100.0\n"+
"G1 X87.94 Y159.0 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E383.177\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X87.52 Y158.41 Z3.0 F1080.0 E3.997\n"+
"G1 X86.91 Y157.8 Z3.0 F1080.0 E8.805\n"+
"G1 X86.21 Y157.29 Z3.0 F1080.0 E13.601\n"+
"G1 X85.44 Y156.9 Z3.0 F1080.0 E18.407\n"+
"G1 X84.61 Y156.64 Z3.0 F1080.0 E23.208\n"+
"G1 X83.76 Y156.5 Z3.0 F1080.0 E28.001\n"+
"G1 X82.9 Y156.5 Z3.0 F1080.0 E32.812\n"+
"G1 X82.04 Y156.64 Z3.0 F1080.0 E37.61\n"+
"G1 X81.22 Y156.9 Z3.0 F1080.0 E42.406\n"+
"G1 X80.45 Y157.29 Z3.0 F1080.0 E47.211\n"+
"G1 X79.75 Y157.8 Z3.0 F1080.0 E52.007\n"+
"G1 X79.14 Y158.41 Z3.0 F1080.0 E56.815\n"+
"G1 X78.63 Y159.11 Z3.0 F1080.0 E61.611\n"+
"G1 X78.24 Y159.88 Z3.0 F1080.0 E66.417\n"+
"G1 X77.97 Y160.7 Z3.0 F1080.0 E71.213\n"+
"G1 X77.84 Y161.56 Z3.0 F1080.0 E76.011\n"+
"G1 X77.84 Y162.42 Z3.0 F1080.0 E80.822\n"+
"G1 X77.97 Y163.28 Z3.0 F1080.0 E85.62\n"+
"G1 X78.24 Y164.1 Z3.0 F1080.0 E90.416\n"+
"G1 X78.63 Y164.87 Z3.0 F1080.0 E95.221\n"+
"G1 X79.14 Y165.57 Z3.0 F1080.0 E100.017\n"+
"G1 X79.75 Y166.18 Z3.0 F1080.0 E104.825\n"+
"G1 X80.45 Y166.69 Z3.0 F1080.0 E109.622\n"+
"G1 X81.22 Y167.08 Z3.0 F1080.0 E114.427\n"+
"G1 X82.04 Y167.34 Z3.0 F1080.0 E119.221\n"+
"G1 X82.9 Y167.48 Z3.0 F1080.0 E124.02\n"+
"G1 X83.76 Y167.48 Z3.0 F1080.0 E128.831\n"+
"G1 X84.61 Y167.34 Z3.0 F1080.0 E133.624\n"+
"G1 X85.44 Y167.08 Z3.0 F1080.0 E138.424\n"+
"G1 X86.21 Y166.69 Z3.0 F1080.0 E143.229\n"+
"G1 X86.91 Y166.18 Z3.0 F1080.0 E148.025\n"+
"G1 X87.52 Y165.57 Z3.0 F1080.0 E152.834\n"+
"G1 X88.03 Y164.87 Z3.0 F1080.0 E157.63\n"+
"G1 X88.42 Y164.1 Z3.0 F1080.0 E162.435\n"+
"G1 X88.68 Y163.28 Z3.0 F1080.0 E167.231\n"+
"G1 X88.82 Y162.42 Z3.0 F1080.0 E172.029\n"+
"G1 X88.82 Y161.56 Z3.0 F1080.0 E176.84\n"+
"G1 X88.68 Y160.7 Z3.0 F1080.0 E181.638\n"+
"G1 X88.42 Y159.88 Z3.0 F1080.0 E186.434\n"+
"G1 X88.09 Y159.24 Z3.0 F1080.0 E190.442\n"+
"G1 F240.0\n"+
"G1 E190.442\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.79 Y152.67 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.442\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X100.29 Y153.24 Z3.0 F1080.0 E4.176\n"+
"G1 X100.65 Y153.5 Z3.0 F1080.0 E6.667\n"+
"G1 X101.05 Y153.7 Z3.0 F1080.0 E9.149\n"+
"G1 X101.48 Y153.84 Z3.0 F1080.0 E11.64\n"+
"G1 X101.92 Y153.91 Z3.0 F1080.0 E14.136\n"+
"G1 X102.37 Y153.91 Z3.0 F1080.0 E16.625\n"+
"G1 X102.81 Y153.84 Z3.0 F1080.0 E19.116\n"+
"G1 X103.24 Y153.7 Z3.0 F1080.0 E21.612\n"+
"G1 X103.64 Y153.5 Z3.0 F1080.0 E24.094\n"+
"G1 X104.0 Y153.24 Z3.0 F1080.0 E26.585\n"+
"G1 X104.32 Y152.92 Z3.0 F1080.0 E29.083\n"+
"G1 X104.58 Y152.56 Z3.0 F1080.0 E31.574\n"+
"G1 X104.78 Y152.16 Z3.0 F1080.0 E34.056\n"+
"G1 X104.92 Y151.73 Z3.0 F1080.0 E36.55\n"+
"G1 X104.99 Y151.29 Z3.0 F1080.0 E39.042\n"+
"G1 X104.99 Y150.84 Z3.0 F1080.0 E41.531\n"+
"G1 X104.92 Y150.4 Z3.0 F1080.0 E44.023\n"+
"G1 X104.78 Y149.97 Z3.0 F1080.0 E46.517\n"+
"G1 X104.58 Y149.57 Z3.0 F1080.0 E49.0\n"+
"G1 X104.32 Y149.21 Z3.0 F1080.0 E51.49\n"+
"G1 X104.0 Y148.89 Z3.0 F1080.0 E53.988\n"+
"G1 X103.64 Y148.63 Z3.0 F1080.0 E56.479\n"+
"G1 X103.24 Y148.43 Z3.0 F1080.0 E58.961\n"+
"G1 X102.81 Y148.29 Z3.0 F1080.0 E61.457\n"+
"G1 X102.37 Y148.22 Z3.0 F1080.0 E63.948\n"+
"G1 X101.92 Y148.22 Z3.0 F1080.0 E66.437\n"+
"G1 X101.48 Y148.29 Z3.0 F1080.0 E68.933\n"+
"G1 X101.05 Y148.43 Z3.0 F1080.0 E71.424\n"+
"G1 X100.65 Y148.63 Z3.0 F1080.0 E73.906\n"+
"G1 X100.29 Y148.89 Z3.0 F1080.0 E76.397\n"+
"G1 X99.97 Y149.21 Z3.0 F1080.0 E78.899\n"+
"G1 X99.71 Y149.57 Z3.0 F1080.0 E81.386\n"+
"G1 X99.51 Y149.97 Z3.0 F1080.0 E83.868\n"+
"G1 X99.37 Y150.4 Z3.0 F1080.0 E86.365\n"+
"G1 X99.3 Y150.84 Z3.0 F1080.0 E88.856\n"+
"G1 X99.3 Y151.29 Z3.0 F1080.0 E91.345\n"+
"G1 X99.37 Y151.73 Z3.0 F1080.0 E93.835\n"+
"G1 X99.64 Y152.43 Z3.0 F1080.0 E98.004\n"+
"G1 F240.0\n"+
"G1 E98.004\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X99.82 Y149.64 Z3.0 F3000.0\n"+
"G1 X104.22 Y146.6 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E98.004\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X105.22 Y147.17 Z3.0 F1080.0 E6.395\n"+
"G1 X106.04 Y147.43 Z3.0 F1080.0 E11.191\n"+
"G1 X106.9 Y147.57 Z3.0 F1080.0 E15.994\n"+
"G1 X107.76 Y147.57 Z3.0 F1080.0 E20.806\n"+
"G1 X108.61 Y147.43 Z3.0 F1080.0 E25.598\n"+
"G1 X109.44 Y147.17 Z3.0 F1080.0 E30.394\n"+
"G1 X110.21 Y146.77 Z3.0 F1080.0 E35.204\n"+
"G1 X110.91 Y146.26 Z3.0 F1080.0 E40.0\n"+
"G1 X111.52 Y145.65 Z3.0 F1080.0 E44.809\n"+
"G1 X112.03 Y144.96 Z3.0 F1080.0 E49.605\n"+
"G1 X112.42 Y144.18 Z3.0 F1080.0 E54.41\n"+
"G1 X112.68 Y143.36 Z3.0 F1080.0 E59.206\n"+
"G1 X112.82 Y142.51 Z3.0 F1080.0 E64.004\n"+
"G1 X112.82 Y141.64 Z3.0 F1080.0 E68.815\n"+
"G1 X112.68 Y140.79 Z3.0 F1080.0 E73.613\n"+
"G1 X112.42 Y139.97 Z3.0 F1080.0 E78.409\n"+
"G1 X112.03 Y139.2 Z3.0 F1080.0 E83.214\n"+
"G1 X111.52 Y138.5 Z3.0 F1080.0 E88.011\n"+
"G1 X110.91 Y137.89 Z3.0 F1080.0 E92.819\n"+
"G1 X110.21 Y137.38 Z3.0 F1080.0 E97.618\n"+
"G1 X109.44 Y136.99 Z3.0 F1080.0 E102.426\n"+
"G1 X108.61 Y136.72 Z3.0 F1080.0 E107.222\n"+
"G1 X107.76 Y136.59 Z3.0 F1080.0 E112.014\n"+
"G1 X106.9 Y136.59 Z3.0 F1080.0 E116.826\n"+
"G1 X106.04 Y136.72 Z3.0 F1080.0 E121.629\n"+
"G1 X105.22 Y136.99 Z3.0 F1080.0 E126.425\n"+
"G1 X104.45 Y137.38 Z3.0 F1080.0 E131.223\n"+
"G1 X103.75 Y137.89 Z3.0 F1080.0 E136.022\n"+
"G1 X103.14 Y138.5 Z3.0 F1080.0 E140.83\n"+
"G1 X102.63 Y139.2 Z3.0 F1080.0 E145.627\n"+
"G1 X102.24 Y139.97 Z3.0 F1080.0 E150.432\n"+
"G1 X101.97 Y140.79 Z3.0 F1080.0 E155.228\n"+
"G1 X101.84 Y141.64 Z3.0 F1080.0 E160.026\n"+
"G1 X101.84 Y142.51 Z3.0 F1080.0 E164.837\n"+
"G1 X101.97 Y143.36 Z3.0 F1080.0 E169.635\n"+
"G1 X102.24 Y144.18 Z3.0 F1080.0 E174.431\n"+
"G1 X102.63 Y144.96 Z3.0 F1080.0 E179.236\n"+
"G1 X103.14 Y145.65 Z3.0 F1080.0 E184.032\n"+
"G1 X103.98 Y146.43 Z3.0 F1080.0 E190.413\n"+
"G1 F240.0\n"+
"G1 E190.413\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X102.1 Y143.33 Z3.0 F3000.0\n"+
"G1 X101.97 Y142.5 Z3.0 F3000.0\n"+
"G1 X101.97 Y141.66 Z3.0 F3000.0\n"+
"G1 X111.45 Y116.71 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.413\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X112.16 Y116.82 Z3.0 F1080.0 E3.999\n"+
"G1 X113.02 Y116.82 Z3.0 F1080.0 E8.81\n"+
"G1 X113.88 Y116.68 Z3.0 F1080.0 E13.608\n"+
"G1 X114.7 Y116.42 Z3.0 F1080.0 E18.404\n"+
"G1 X115.47 Y116.02 Z3.0 F1080.0 E23.209\n"+
"G1 X116.17 Y115.52 Z3.0 F1080.0 E28.005\n"+
"G1 X116.78 Y114.9 Z3.0 F1080.0 E32.813\n"+
"G1 X117.29 Y114.21 Z3.0 F1080.0 E37.61\n"+
"G1 X117.68 Y113.43 Z3.0 F1080.0 E42.415\n"+
"G1 X117.95 Y112.61 Z3.0 F1080.0 E47.211\n"+
"G1 X118.08 Y111.76 Z3.0 F1080.0 E52.009\n"+
"G1 X118.08 Y110.89 Z3.0 F1080.0 E56.82\n"+
"G1 X117.95 Y110.04 Z3.0 F1080.0 E61.618\n"+
"G1 X117.68 Y109.22 Z3.0 F1080.0 E66.414\n"+
"G1 X117.29 Y108.45 Z3.0 F1080.0 E71.219\n"+
"G1 X116.78 Y107.75 Z3.0 F1080.0 E76.015\n"+
"G1 X116.17 Y107.14 Z3.0 F1080.0 E80.824\n"+
"G1 X115.47 Y106.63 Z3.0 F1080.0 E85.62\n"+
"G1 X114.7 Y106.24 Z3.0 F1080.0 E90.425\n"+
"G1 X113.88 Y105.97 Z3.0 F1080.0 E95.221\n"+
"G1 X113.02 Y105.84 Z3.0 F1080.0 E100.019\n"+
"G1 X112.16 Y105.84 Z3.0 F1080.0 E104.83\n"+
"G1 X111.3 Y105.97 Z3.0 F1080.0 E109.628\n"+
"G1 X110.48 Y106.24 Z3.0 F1080.0 E114.424\n"+
"G1 X109.71 Y106.63 Z3.0 F1080.0 E119.229\n"+
"G1 X109.01 Y107.14 Z3.0 F1080.0 E124.025\n"+
"G1 X108.4 Y107.75 Z3.0 F1080.0 E128.834\n"+
"G1 X107.89 Y108.45 Z3.0 F1080.0 E133.63\n"+
"G1 X107.5 Y109.22 Z3.0 F1080.0 E138.435\n"+
"G1 X107.24 Y110.04 Z3.0 F1080.0 E143.231\n"+
"G1 X107.1 Y110.89 Z3.0 F1080.0 E148.029\n"+
"G1 X107.1 Y111.76 Z3.0 F1080.0 E152.84\n"+
"G1 X107.24 Y112.61 Z3.0 F1080.0 E157.638\n"+
"G1 X107.5 Y113.43 Z3.0 F1080.0 E162.434\n"+
"G1 X107.89 Y114.21 Z3.0 F1080.0 E167.239\n"+
"G1 X108.4 Y114.9 Z3.0 F1080.0 E172.036\n"+
"G1 X109.01 Y115.52 Z3.0 F1080.0 E176.844\n"+
"G1 X109.71 Y116.02 Z3.0 F1080.0 E181.64\n"+
"G1 X110.48 Y116.42 Z3.0 F1080.0 E186.445\n"+
"G1 X111.17 Y116.64 Z3.0 F1080.0 E190.44\n"+
"G1 F240.0\n"+
"G1 E190.44\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X108.0 Y114.14 Z3.0 F3000.0\n"+
"G1 X107.62 Y113.39 Z3.0 F3000.0\n"+
"G1 X107.36 Y112.58 Z3.0 F3000.0\n"+
"G1 X107.23 Y111.75 Z3.0 F3000.0\n"+
"G1 X107.23 Y110.9 Z3.0 F3000.0\n"+
"G1 X111.45 Y102.78 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E190.44\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X115.52 Y102.78 Z3.0 F1080.0 E22.628\n"+
"G1 X115.52 Y88.37 Z3.0 F1080.0 E102.683\n"+
"G1 X109.11 Y88.37 Z3.0 F1080.0 E138.294\n"+
"G1 X109.11 Y102.78 Z3.0 F1080.0 E218.35\n"+
"G1 X111.16 Y102.78 Z3.0 F1080.0 E229.733\n"+
"G1 F240.0\n"+
"G1 E229.733\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> inner )\n"+
"G1 X107.23 Y110.9 Z3.0 F3000.0\n"+
"G1 X112.39 Y130.22 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E229.733\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.65 Y130.35 Z3.0 F1080.0 E4.166\n"+
"G1 X111.24 Y130.52 Z3.0 F1080.0 E6.658\n"+
"G1 X110.85 Y130.76 Z3.0 F1080.0 E9.16\n"+
"G1 X110.51 Y131.05 Z3.0 F1080.0 E11.642\n"+
"G1 X110.22 Y131.39 Z3.0 F1080.0 E14.132\n"+
"G1 X109.99 Y131.77 Z3.0 F1080.0 E16.625\n"+
"G1 X109.82 Y132.19 Z3.0 F1080.0 E19.116\n"+
"G1 X109.71 Y132.62 Z3.0 F1080.0 E21.614\n"+
"G1 X109.68 Y133.07 Z3.0 F1080.0 E24.098\n"+
"G1 X109.71 Y133.52 Z3.0 F1080.0 E26.583\n"+
"G1 X109.82 Y133.95 Z3.0 F1080.0 E29.081\n"+
"G1 X109.99 Y134.37 Z3.0 F1080.0 E31.572\n"+
"G1 X110.22 Y134.75 Z3.0 F1080.0 E34.065\n"+
"G1 X110.51 Y135.09 Z3.0 F1080.0 E36.555\n"+
"G1 X110.85 Y135.38 Z3.0 F1080.0 E39.033\n"+
"G1 X111.24 Y135.62 Z3.0 F1080.0 E41.537\n"+
"G1 X111.65 Y135.79 Z3.0 F1080.0 E44.028\n"+
"G1 X112.09 Y135.89 Z3.0 F1080.0 E46.524\n"+
"G1 X112.53 Y135.93 Z3.0 F1080.0 E49.009\n"+
"G1 X112.98 Y135.89 Z3.0 F1080.0 E51.494\n"+
"G1 X113.42 Y135.79 Z3.0 F1080.0 E53.99\n"+
"G1 X113.83 Y135.62 Z3.0 F1080.0 E56.481\n"+
"G1 X114.21 Y135.38 Z3.0 F1080.0 E58.98\n"+
"G1 X114.55 Y135.09 Z3.0 F1080.0 E61.463\n"+
"G1 X114.84 Y134.75 Z3.0 F1080.0 E63.949\n"+
"G1 X115.08 Y134.37 Z3.0 F1080.0 E66.442\n"+
"G1 X115.25 Y133.95 Z3.0 F1080.0 E68.935\n"+
"G1 X115.36 Y133.52 Z3.0 F1080.0 E71.432\n"+
"G1 X115.39 Y133.07 Z3.0 F1080.0 E73.917\n"+
"G1 X115.36 Y132.62 Z3.0 F1080.0 E76.402\n"+
"G1 X115.25 Y132.19 Z3.0 F1080.0 E78.899\n"+
"G1 X115.08 Y131.77 Z3.0 F1080.0 E81.391\n"+
"G1 X114.84 Y131.39 Z3.0 F1080.0 E83.885\n"+
"G1 X114.55 Y131.05 Z3.0 F1080.0 E86.371\n"+
"G1 X114.21 Y130.76 Z3.0 F1080.0 E88.857\n"+
"G1 X113.83 Y130.52 Z3.0 F1080.0 E91.354\n"+
"G1 X113.42 Y130.35 Z3.0 F1080.0 E93.847\n"+
"G1 X112.68 Y130.22 Z3.0 F1080.0 E98.012\n"+
"G1 F240.0\n"+
"G1 E98.012\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"(<loop> outer )\n"+
"G1 X124.68 Y137.39 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E98.012\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.91 Y162.98 Z3.0 F1080.0 E164.114\n"+
"G1 X90.49 Y174.18 Z3.0 F1080.0 E288.667\n"+
"G1 X78.77 Y171.04 Z3.0 F1080.0 E356.107\n"+
"G1 X73.08 Y161.18 Z3.0 F1080.0 E419.352\n"+
"G1 X76.32 Y149.65 Z3.0 F1080.0 E485.926\n"+
"G1 X93.57 Y139.69 Z3.0 F1080.0 E596.564\n"+
"G1 X98.22 Y131.74 Z3.0 F1080.0 E647.744\n"+
"G1 X98.22 Y111.55 Z3.0 F1080.0 E759.91\n"+
"G1 X105.52 Y104.25 Z3.0 F1080.0 E817.272\n"+
"G1 X105.52 Y88.37 Z3.0 F1080.0 E905.472\n"+
"G1 X104.02 Y88.37 Z3.0 F1080.0 E913.806\n"+
"G1 X104.02 Y85.78 Z3.0 F1080.0 E928.194\n"+
"G1 X120.61 Y85.78 Z3.0 F1080.0 E1020.361\n"+
"G1 X120.61 Y88.37 Z3.0 F1080.0 E1034.75\n"+
"G1 X119.11 Y88.37 Z3.0 F1080.0 E1043.083\n"+
"G1 X119.11 Y103.57 Z3.0 F1080.0 E1127.506\n"+
"G1 X126.96 Y111.42 Z3.0 F1080.0 E1189.189\n"+
"G1 X126.96 Y133.44 Z3.0 F1080.0 E1311.522\n"+
"G1 X124.82 Y137.14 Z3.0 F1080.0 E1335.272\n"+
"G1 F240.0\n"+
"G1 E1335.272\n"+
"G1 F1080.0\n"+
";\n"+
"(</loop>)\n"+
"G1 X98.98 Y110.92 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E1335.272\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X99.61 Y110.92 Z3.0 F1080.0 E3.539\n"+
"G1 X124.74 Y136.21 Z3.0 F1080.0 E201.589\n"+
"G1 X124.9 Y136.84 Z3.0 F1080.0 E205.19\n"+
"G1 F240.0\n"+
"G1 E205.19\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X124.43 Y137.65 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E205.19\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y112.19 Z3.0 F1080.0 E200.863\n"+
"G1 X98.34 Y111.56 Z3.0 F1080.0 E205.057\n"+
"G1 F240.0\n"+
"G1 E205.057\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y113.44 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E205.057\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y114.07 Z3.0 F1080.0 E4.328\n"+
"G1 X123.57 Y138.23 Z3.0 F1080.0 E196.722\n"+
"G1 X123.73 Y138.86 Z3.0 F1080.0 E200.318\n"+
"G1 F240.0\n"+
"G1 E200.318\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X123.27 Y139.66 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E200.318\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X114.79 Y131.18 Z3.0 F1080.0 E66.625\n"+
"G1 F240.0\n"+
"G1 E66.625\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X114.42 Y130.82 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E66.625\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.76 Y115.34 Z3.0 F1080.0 E122.308\n"+
"G1 X98.31 Y114.71 Z3.0 F1080.0 E126.636\n"+
"G1 F240.0\n"+
"G1 E126.636\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y116.62 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E126.636\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X111.89 Y130.2 Z3.0 F1080.0 E106.726\n"+
"G1 F240.0\n"+
"G1 E106.726\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.99 Y130.57 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E106.726\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y117.89 Z3.0 F1080.0 E99.616\n"+
"G1 F240.0\n"+
"G1 E99.616\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y119.8 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E99.616\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X109.94 Y130.89 Z3.0 F1080.0 E89.286\n"+
"G1 X110.04 Y131.52 Z3.0 F1080.0 E92.841\n"+
"G1 F240.0\n"+
"G1 E92.841\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X109.67 Y132.43 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E92.841\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X98.31 Y121.07 Z3.0 F1080.0 E89.213\n"+
"G1 F240.0\n"+
"G1 E89.213\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y122.98 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E89.213\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X110.25 Y134.92 Z3.0 F1080.0 E93.798\n"+
"G1 F240.0\n"+
"G1 E93.798\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X110.68 Y135.35 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E93.798\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X120.08 Y144.28 Z3.0 F1080.0 E71.995\n"+
"G1 X120.24 Y144.91 Z3.0 F1080.0 E75.597\n"+
"G1 F240.0\n"+
"G1 E75.597\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X119.77 Y145.72 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E75.597\n"+
"G1 F3000.0\n"+
"G92 E0\n"+
";\n"+
"G1 X119.61 Y145.09 Z3.0 F1080.0 E3.602\n"+
"G1 X98.76 Y124.89 Z3.0 F1080.0 E164.882\n"+
"G1 X98.31 Y124.25 Z3.0 F1080.0 E169.21\n"+
"G1 F240.0\n"+
"G1 E169.21\n"+
"G1 F1080.0\n"+
";\n"+
"G1 X98.31 Y126.16 Z3.0 F3000.0\n"+
"G1 F240.0\n"+
"G1 E169.21\n"+
"G1 F3000.0\n"+
"G92 E0";

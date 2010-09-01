/*Arbitrary Library Hackings
 *===============================================================*/

/* Generates and returns a Parallel (ie Orthographic) projection matrix
 * reference: http://en.wikipedia.org/wiki/Orthographic_projection_(geometry) */
THREE.Matrix4.makeParallel = function( fov, aspect, near, far ) {
  
  // Calculating clipping planes
	var ymax = near * Math.tan( fov * Math.PI / 360 );
	var ymin = - ymax;
	var xmin = ymin * aspect;
	var xmax = ymax * aspect;
	
	// Defining the projection matrix
  m = new THREE.Matrix4();
  m.n11 = -2*near/(xmax-xmin); m.n12 = 0;                  m.n13 = 0;                      m.n14 = -(xmax+xmin)/(xmax-xmin);
	m.n21 = 0;                  m.n22 = -2*near/(ymax-ymin); m.n23 = 0;                      m.n24 = -(ymax+ymin)/(ymax-ymin);
	m.n31 = 0;                  m.n32 = 0;                  m.n33 = -2*near/(far-near);      m.n34 = -(far+near)/(far-near);
//	m.n31 = 0;                  m.n32 = 0;                  m.n33 = -(far+near)/(far-near); m.n34 = -2/(far-near);
	m.n41 = 0;                  m.n42 = 0;                  m.n43 = 0;                      m.n44 = -1;
//	m.n41 = 0;                  m.n42 = 0;                  m.n43 = -1;                     m.n44 = 0;
	
	return m;
}



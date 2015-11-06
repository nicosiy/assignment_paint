////////////////////////////////////////////////////////////////////
// nicosiy.js
//
// basic nicosiy tool: draws a series of slightly opaque rainbow circles
// author: Nico Siy



////////////////////////////////////////////////////////////////////
// create and install brush

var nicosiy = new Brush("nicosiy", "./brushes/nicosiy/nicosiy.svg");
brushes.push(nicosiy);

//brush behavior
nicosiy.draw = function() {
	noFill();
	// fill(forecolor);
	stroke(forecolor);


	if (mouseIsPressed) {

		ellipse(pmouseX, pmouseY, 10, 10);
		fill(255, 200, 100, 30);
		ellipse(pmouseX + 20, pmouseY + 20, 20, 20);
		fill(43, 216, 46, 30);
		ellipse(pmouseX - 20, pmouseY - 20, 20, 20);
		fill(43, 216, 221, 30);
		ellipse(pmouseX - 20, pmouseY - -5, 20, 20);
		fill(159, 32, 221, 30);
		ellipse(pmouseX, pmouseY - -20, 20, 20);
		fill(240, 32, 59, 30);
		ellipse(pmouseX - -20, pmouseY - 5, 20, 20);
		fill(143, 32, 225, 30);
		ellipse(pmouseX - 3, pmouseY + 20, 20, 20);
		//ellipse(pmouseX + 20, pmouseY, 20, 20);
		//ellipse(pmouseX, pmouseY + 20, 20, 20);



		// line(pmouseX, pmouseY, mouseX, mouseY);
		// colorMode(HSL, 100);
		// for (var i = 0; i < 100; i++) {
		// 	stroke(i, 100, 50);
		// 	ellipse(i * 6.4, 240, 200, 200);

	}
};

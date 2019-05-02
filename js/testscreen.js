function testScreen() {
	background('#131313');

	push();
	fill('#C0C0C0');
	noStroke();
	rect(0, 0, windowWidth/7, windowHeight/13*9);
	pop();

	push();
	fill('#C0C000');
	noStroke();
	rect(windowWidth/7, 0, windowWidth/7, windowHeight/13*9);
	pop();

	push();
	fill('#00C0C0');
	noStroke();
	rect(windowWidth/7*2, 0, windowWidth/7, windowHeight/13*9);
	pop();

	push();
	fill('#00C000');
	noStroke();
	rect(windowWidth/7*3, 0, windowWidth/7, windowHeight/13*9);
	pop();

	push();
	fill('#C000C0');
	noStroke();
	rect(windowWidth/7*4, 0, windowWidth/7, windowHeight/13*9);
	pop();

	push();
	fill('#C00000');
	noStroke();
	rect(windowWidth/7*5, 0, windowWidth/7, windowHeight/13*9);
	pop();

	push();
	fill('#0000C0');
	noStroke();
	rect(windowWidth/7*6, 0, windowWidth/7, windowHeight/13*9);
	pop();

	push();
	fill('#0000C0');
	noStroke();
	rect(0, windowHeight/13*9, windowWidth/7, windowHeight/13);
	pop();

	push();
	fill('#131313');
	noStroke();
	rect(windowWidth/7*1, windowHeight/13*9, windowWidth/7, windowHeight/13);
	pop();

	push();
	fill('#C000C0');
	noStroke();
	rect(windowWidth/7*2, windowHeight/13*9, windowWidth/7, windowHeight/13);
	pop();

	push();
	fill('#131313');
	noStroke();
	rect(windowWidth/7*3, windowHeight/13*9, windowWidth/7, windowHeight/13);
	pop();

	push();
	fill('#00C0C0');
	noStroke();
	rect(windowWidth/7*4, windowHeight/13*9, windowWidth/7, windowHeight/13);
	pop();

	push();
	fill('#131313');
	noStroke();
	rect(windowWidth/7*5, windowHeight/13*9, windowWidth/7, windowHeight/13);
	pop();

	push();
	fill('#C0C0C0');
	noStroke();
	rect(windowWidth/7*6, windowHeight/13*9, windowWidth/7, windowHeight/13);
	pop();

	push();
	fill('#00214C');
	noStroke();
	rect(0, windowHeight/13*10, windowWidth/7*5/4, windowHeight/13*3);
	pop();

	push();
	fill('#FFFFFF');
	noStroke();
	rect(windowWidth/7*5/4, windowHeight/13*10, windowWidth/7*5/4, windowHeight/13*3);
	pop();

	push();
	fill('#32006A');
	noStroke();
	rect(windowWidth/7*5/4*2, windowHeight/13*10, windowWidth/7*5/4, windowHeight/13*3);
	pop();

	push();
	fill('#131313');
	noStroke();
	rect(windowWidth/7*5/4*3, windowHeight/13*10, windowWidth/7*5/4, windowHeight/13*3);
	pop();

	push();
	fill('#090909');
	noStroke();
	rect(windowWidth/7*5/4*4, windowHeight/13*10, windowWidth/7/3, windowHeight/13*3);
	pop();

	push();
	fill('#131313');
	noStroke();
	rect((windowWidth/7*5/4*4)+(windowWidth/7/3), windowHeight/13*10, windowWidth/7/3, windowHeight/13*3);
	pop();

	push();
	fill('#1D1D1D');
	noStroke();
	rect((windowWidth/7*5/4*4)+(windowWidth/7/3*2), windowHeight/13*10, windowWidth/7/3, windowHeight/13*3);
	pop();

	push();
	fill('#131313');
	noStroke();
	rect(windowWidth/7*6, windowHeight/13*10, windowWidth/7, windowHeight/13*3);
	pop();
}
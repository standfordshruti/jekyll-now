function setup() { 
  createCanvas(700, 700);
	x=100;
	y=100;
} 

var y;
var x;
function draw() { 
	background(220);
	arc(x, y, 80, 80, 0.4, 5.4, PIE);
	if (x<200) {
		ellipse(200,100,20,20)
	}
	if (x<300) {
		ellipse(300,100,20,20)
	}
	if (x<400) {
		ellipse(400,100,20,20)
	}
	if (x<500) {
		ellipse(500,100,20,20)
	}
	
	x+=2
}


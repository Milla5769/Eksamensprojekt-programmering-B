let stars;
let sun;
let sun_icon;
let earth_icon;


function preload() {
  stars = loadImage("stars.jpg");
  sun_icon = loadImage("sun.png");
  earth_icon = loadImage("earth.png")
}

function setup() {
  angleMode(DEGREES)
  createCanvas(windowWidth, windowHeight);
  sun = new Sun(windowWidth/2, windowHeight/2, 300) 
  earth = new Planet(windowWidth/3, windowHeight/2,100)
}

function draw() {
  image(stars,0,0,1368,761)
  sun.show();
  earth.move()
  earth.show()
}



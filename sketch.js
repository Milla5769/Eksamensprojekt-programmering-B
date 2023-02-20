let stars;
let sun;
let sun_icon;


function preload() {
  stars = loadImage("stars.jpg");
  sun_icon = loadImage("sun.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sun = new Sun(windowWidth/2, windowHeight/2, 300) 
}

function draw() {
  image(stars,0,0,1368,761)
  sun.show();
  console.log(windowWidth, windowHeight)
}



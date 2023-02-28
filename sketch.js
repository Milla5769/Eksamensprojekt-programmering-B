let stars;
let sun;
let planets = ["Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
let pictures = ["sun_icon", "mercury_icon", "venus_icon", "earth_icon", "mars_icon", "jupiter_icon", "saturn_icon", "uranus_icon", "neptune_icon"]


function preload() {
  for (let i = 0; i < planets.length; i++ ){
    pictures[i] = loadImage("Pictures/" + planets[i] + ".png")
  }
  stars = loadImage("Pictures/Stars.jpg")
}

function setup() {
  angleMode(DEGREES)
  createCanvas(windowWidth, windowHeight);
  sun = new Sun(windowWidth/2, windowHeight/2) 
  earth = new Planet(windowWidth/3, windowHeight/2,5.0968)
}

function draw() {
  image(stars,0,0,1368,761)
  sun.show();
  earth.move();
  earth.show();
}



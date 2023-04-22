let stars;
let link
let sun;
let set_pic=-1;
let planets = []
let planets_pic = ["Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
let pictures = ["sun_icon", "mercury_icon", "venus_icon", "earth_icon", "mars_icon", "jupiter_icon", "saturn_icon", "uranus_icon", "neptune_icon"]

function preload() {
  for (let i = 0; i < planets_pic.length; i++ ){
    pictures[i] = loadImage("Pictures/" + planets_pic[i] + ".png")
  }
  stars = loadImage("Pictures/Stars.jpg")
}

function setup() {
  angleMode(DEGREES)
  createCanvas(windowWidth, windowHeight);
  sun = new Sun(windowWidth/2, windowHeight/2) 
  //https://solarsystem.nasa.gov/planet-compare/
  //https://nssdc.gsfc.nasa.gov/planetary/factsheet/index.html
  planets = [
    new Planet(windowWidth/2, windowHeight/2, 1.95176, 1, 1, 0.474),
    new Planet(windowWidth/2, windowHeight/2, 4.84144, 2, 20, 0.35),
    new Planet(windowWidth/2, windowHeight/2, 5.0968, 3, 40, 0.298),
    new Planet(windowWidth/2, windowHeight/2, 2.7116, 4, 60, 0.241),
    new Planet(windowWidth/2, windowHeight/2, 55.9288, 5, 120, 0.131),
    new Planet(windowWidth/2, windowHeight/2, 109.435392, 6, 180, 0.097),
    new Planet(windowWidth/2, windowHeight/2, 20.2896, 7, 200, 0.068),
    new Planet(windowWidth/2, windowHeight/2, 19.6976, 8, 220, 0.054)
  ]
}

function draw() {
  image(stars,0,0,windowWidth,windowHeight)
  for(let planet of planets){
    planet.show();
    planet.move();
  }
  sun.show();
  zoom();

  if(set_pic>-1){
      image(pictures[set_pic], 0, 0, 150, 150);
  }
  else if(set_pic == 0){
    image(pictures[set_pic], 0, 0, 150, 150);
  }   
}

function zoom() {
  if (dist(mouseX, mouseY, sun.x, sun.y) < Math.sqrt((sun.d_sun/2))+20) {
    set_pic = 0;
    if (link) {
      link.remove();
    }
    link = createA("https://solarsystem.nasa.gov/solar-system/sun/overview/", "Information om Solen","_blank");
    link.position(5,180);
  }
  for (let i = 0; i < planets.length; i++) {
    if (dist(mouseX, mouseY, planets[i].x, planets[i].y) < Math.sqrt((planets[i].d/2)) + 20) {
      set_pic = i+1;
      if (link) {
        link.remove(); 
      }
      link = createA("https://solarsystem.nasa.gov/planets/"+ planets_pic[i+1].toLowerCase() +"/overview/", "Information om planeten","_blank");
      link.position(5,180);
    }
  } 
}
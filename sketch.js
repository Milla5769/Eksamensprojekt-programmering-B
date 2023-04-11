let stars;
let sun;
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
  planets = [
    new Planet(windowWidth/2, windowHeight/2, 1.95176, 1, 1, 0.1136751165),
    new Planet(windowWidth/2, windowHeight/2, 4.84144, 2, 20, 0.0445037828),
    new Planet(windowWidth/2, windowHeight/2, 5.0968, 3, 40, 0.0273777583),
    new Planet(windowWidth/2, windowHeight/2, 2.7116, 4, 60, 0.0145564645),
    new Planet(windowWidth/2, windowHeight/2, 55.9288, 5, 120, 0.0023080243),
    new Planet(windowWidth/2, windowHeight/2, 109.435392, 6, 180, 0.0009294112),
    new Planet(windowWidth/2, windowHeight/2, 20.2896, 7, 200, 0.0003258921),
    new Planet(windowWidth/2, windowHeight/2, 19.6976, 8, 220, 0.0001661405),
  ]
}

function draw() {
  image(stars,0,0,windowWidth,windowHeight)
  for(let planet of planets){
    planet.show();
    planet.move();
    // planet.clicked();
  }
  sun.show();
  // collision()
  zoom();
  // let i = collision()
  // image(pictures[i],0,0,100,100)
}

//function collision(){
//  for (let i = 0; i < planets.length; i++){
//    if (dist(mouseX,mouseY,planets[i].x, planets[i].y) < Math.sqrt((planets[i].d/2))) {
//      console.log(i)
//      return image(pictures[i+1],0,0,100,100)
//    }
//  }
//}

function zoom() {
  for (let i = 0; i < planets.length; i++) {
    if (dist(mouseX, mouseY, planets[i].x, planets[i].y) < Math.sqrt((planets[i].d/2)) + 20) {
      image(pictures[i+1], 0, 0, 150, 150);
      //return image(pictures[i+1], 0, 0, 150, 150);
      let button = createButton("Information")
      button.position(25,180)
      button.mouseClicked(window.open("https://solarsystem.nasa.gov/planets/"+ planets_pic[i+1].toLowerCase() +"/overview/"))
    }
  }
}

// function zoom(){
//   for (let i = 0; i < planets.length; i++) {
//     if (mouseIsPressed) {
//       if (dist(mouseX, mouseY, planets[i].x, planets[i].y) < Math.sqrt((planets[i].d/2)) + 20) {
//         push();
//         scale(1);
//         image(pictures[i+1], planets[i].x, planets[i].y, planets[i].d , planets[i].d);
//         pop();
//       }
//     }  
//   }
// }



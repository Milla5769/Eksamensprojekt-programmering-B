class Sun{
    constructor(x, y, /*mass,*/ /*speed*/ r){
        this.x = x
        this.y = y
        // this.mass = mass
        // this.speed = speed
        this.r = r //695508 km
    }

    show(){
        noStroke()
        //fill(255,0,0)
        image(sun_icon,this.x-50,this.y-50,100,100)
        //ellipse(this.x,this.y,this.r)
    }
}

// class Planet extends Sun{
//     constructor(){
//         super(x, y, mass, speed, r)
        
//     }
// }
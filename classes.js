class Sun{
    constructor(x, y, /*mass,*/ /*speed*/ d){
        this.x = x
        this.y = y
        // this.mass = mass
        // this.speed = speed
        this.d = d //695508 km
    }

    show(){
        noStroke()
        //fill(255,0,0)
        image(sun_icon, this.x-this.d/2, this.y-this.d/2, this.d, this.d)
        //ellipse(this.x,this.y,this.r)
    }
}

class Planet extends Sun{
    constructor(x,y,d){
        super(x, y, /*mass, speed*/d)
        this.angle = 0
    }

    move(){
        //x = x_coord + radius * cos(angle) 
        this.x = windowWidth/2 + 200 * cos(this.angle);
        this.y = windowHeight/2 + 200 * sin(this.angle);
        this.show()
        this.angle += 1
        console.log(this.angle)
    }

    show(){
        noStroke()
        image(earth_icon, this.x-this.d/2, this.y-this.d/2,this.d,this.d)
    }
}
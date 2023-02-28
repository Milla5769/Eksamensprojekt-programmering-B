class Sun{
    constructor(x, y /*mass,*/ /*speed*/){
        this.x = x
        this.y = y
        // this.mass = mass
        // this.speed = speed
        this.d_sun = 139 //(695508*2km)/10000
    }

    show(){
        noStroke()
        //fill(255,0,0)
        image(pictures[0], this.x-this.d_sun/2, this.y-this.d_sun/2, this.d_sun, this.d_sun)
        //ellipse(this.x,this.y,this.r)
    }
}

class Planet extends Sun{
    constructor(x,y,d){
        super(x, y /*mass, speed*/)
        this.angle = 0
        this.d = d
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
        image(pictures[3], this.x-this.d/2, this.y-this.d/2,this.d,this.d)
    }
}
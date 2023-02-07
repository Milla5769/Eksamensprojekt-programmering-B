class Sun{
    constructor(x, y, mass, speed, r){
        this.x = x
        this.y = y
        this.mass = mass
        this.speed = speed
        this.r = r //695508 km
    }
}

class Planet extends Sun{
    constructor(){
        super(x, y, mass, speed, r)
        
    }
}
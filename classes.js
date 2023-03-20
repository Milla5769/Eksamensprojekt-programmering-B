class Sun{
    constructor(x, y, d_sun = 139){
        this.x = x
        this.y = y
        this.d_sun = d_sun //(695508*2km)/10000
    }

    show(){
        noStroke()
        image(pictures[0], this.x-this.d_sun/2, this.y-this.d_sun/2, this.d_sun, this.d_sun)
    }
}

class Planet extends Sun{
    constructor(x, y, d, nr, au, angle, d_sun){
        super(x, y, d_sun)
        this.start = 0
        this.angle = angle
        this.d = d
        this.nr = nr
        this.au = au
    }

    move(){
        //x = x_coord + radius * cos(angle) 
        this.x = windowWidth/2 + (this.au + this.d_sun - this.d/2)  * cos(this.start);
        this.y = windowHeight/2 + (this.au + this.d_sun - this.d/2) * sin(this.start);
        this.show()
        this.start += this.angle
    }

    show() {
        noStroke();
        let imageIndex = this.nr > 0 && this.nr <= pictures.length ? this.nr : pictures.length - 1;
        image(pictures[imageIndex], this.x - this.d / 2, this.y - this.d / 2, this.d, this.d);
      }

    // clicked(){
    //     if (dist(mouseX, mouseY, this.x, this.y) < this.d/2) {
    //         background(255,0,0)

    //     }
    // }
}
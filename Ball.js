class Ball{

    constructor(x,y,r){

        var options={
            restitution: 1,
            density: 2,
            frictionAir: 0.005
        }

        this.body = Bodies.circle(x,y,r,options)
        World.add(world, this.body);
        this.r=r
    }

    display(){
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        stroke(255,255,255)
        strokeWeight(5)
        fill(24,300, 30)
        ellipseMode(CENTER);
        ellipse(0,0,this.r*2,this.r*2);
        pop()
    }
}
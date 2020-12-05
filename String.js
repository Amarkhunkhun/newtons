class String{

    constructor(body1, pointB){

    var options={
        bodyA : body1,
        pointB : pointB,
        stiffness: 1.2,
        length: 250
    }  
    
    this.body = Matter.Constraint.create(options);
    World.add(world, this.body);
    }

    display(){
        push ()
        fill(255,255,255)
        var pos1 = this.body.bodyA.position
        var pos2 = this.body.pointB
        line(pos1.x, pos1.y, pos2.x, pos2.y);
        pop ()
    }

    
}
class Sling{
    constructor(bodyA,bodyB){
        var option = {
            bodyA: bodyA, 
            bodyB: bodyB,
            stiffness : 0.05,
            length: 6 
        }
    
        this.chain = Constraint.create(option);
        World.add(world,this.chain);
    }
    display(){
        var point1 = this.chain.bodyA.position
        var point2 = this.chain.bodyB.position
        line(point1.x,point1.y,point2.x,point2.y)
    }
}
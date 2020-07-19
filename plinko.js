class Plinko{
    constructor(x,y,radius){
     var options={
         isStatic:true
     }
    
     this.body=Bodies.circle(x,y,10,options);
    this.color=color(random(0,255),random(0,255),random(0,255));
     this.radius=10;
     World.add(world,this.body);

    }
    display(){
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(this.body.position.x,this.body.position.y,10);
    }
}
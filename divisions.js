class Div{
    constructor(x,y,width,height){
     var options={
         isStatic:true
     }
     
     this.body=Bodies.rectangle(x,y,width,height,options);
     this.width=width;
     this.height=height;
     this.color=color(random(0,255),random(0,255),random(0,255));

     World.add(world,this.body);

    }
    display(){    
        rectMode(CENTER);
        fill(this.color);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
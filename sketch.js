const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;
const Body=Matter.Body;

var div=[];
var particle=[];
var plinko=[];
var world,engine,fc,bg;
function preload(){
  bg=loadImage("plinko.jpg");
}
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

 fc=createSprite(240,750,492,15);
 
 
  ground=new Ground(240,750,492,15);
  for(var i=0;i<=480;i=i+80){
    div.push(new Div(i,650,10,300));
  }
 
  for(var j=40;j<=480;j=j+50){
    plinko.push(new Plinko(j,75));
  }
 for(var j=15;j<=470;j=j+50){
   plinko.push(new Plinko(j,175));
  }
  for(var j=40;j<=480;j=j+50){
    plinko.push(new Plinko(j,275));
   }
   for(var j=15;j<=470;j=j+50){
    plinko.push(new Plinko(j,375));
   }
  
}

function draw() {
  background(bg);  
  Engine.update(engine);
  ground.display();
  
  if(frameCount%15==0){
    fc.shapeColor=color(random(0,255),random(0,255),random(0,255));
  }
for(var k=0;k<div.length;k++){
  div[k].display();
}
for(var l=0;l<plinko.length;l++){
  plinko[l].display();
}
if(frameCount%60==0){   
  particle.push(new Particle(random(width/2-40,width/2+40),50));
}
for(var j=0;j<particle.length;j++){
  particle[j].display();
}

console.log(frameCount);
  drawSprites();
}

const Engine = Matter.Engine; 
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world,ground,box2;
var box1;

function setup() {
  createCanvas(800,400);
  
  
engine = Engine.create();
world = engine.world;
var options={
  isStatic:true,
}
ground=new Ground(200,height,400,20);


box1 = new Box(180,100,50,50)
box2= new Box(150,200,30,40)



}



function draw() {
  background('white');
  Engine.update(engine);
  
 
  box1.display();
  box2.display();
  ground.display();
  drawSprites();
}
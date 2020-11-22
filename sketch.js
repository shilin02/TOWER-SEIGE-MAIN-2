const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint





function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

ground1 = new Ground(400,200,100,20)

box1 = new Box(400,205,20,30)
box2 = new Box(400,225,20,30)
box3 = new Box(400,245,20,30)
box4 = new Box(400,265,20,30)
box5 = new Box(400,285,20,30)

box6 = new Box(440,205,20,30)
box7 = new Box(440,225,20,30)
box8 = new Box(440,245,20,30)
box9 = new Box(440,265,20,30)
box10 = new Box(440,285,20,30)

shooter = new Shooter(200,50,35)
sling = new Sling(shooter.body,{x:200, y:50});





}
function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ground1.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  shooter.display();
  sling.display();


  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.body)
  }
}

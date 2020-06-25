const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;

function setup() {
	createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  
  roof=new Roof(300,150,350,10);

  bob1=new Bob(160,500,40);
  bob2=new Bob(220,500,40);
  bob3=new Bob(280,500,40);
  bob4=new Bob(340,500,40);
  bob5=new Bob(400,500,40);

  

  rope1 = new Rope(bob1.body,roof.body,-160,0);
  rope2 = new Rope(bob2.body,roof.body,-80,0); 
  rope3 = new Rope(bob3.body,roof.body,0,0);
  rope4 = new Rope(bob4.body,roof.body,80,0);
  rope5 = new Rope(bob5.body,roof.body,160,0);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  
  background("green");
  Engine.update(engine);

  fill("black");
  text("y:"+mouseY,50,75);
  text("x:"+mouseX,50,50);

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  

  drawSprites();
 
}

function keyPressed(){
  if( keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-49,y:-56});
  }
}




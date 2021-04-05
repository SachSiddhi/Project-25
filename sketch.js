
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var paper;
var world;


function setup() {
	createCanvas(1270, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject = new ground(width/2,600,width,20);

	dustbinObj = new dustbin(1150,590);

	paper = new Paper(120,188,70,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  groundObject.display();
  dustbinObj.display();
  paper.display();
}

function keyPressed() {
  if(keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:1030,y:-1145});

  }


}


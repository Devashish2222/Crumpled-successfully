const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var Ground1,Dustbin1,Paper1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	Dustbin1 = new Dustbin(700,345);
	Dustbin1.shapeColor = "Red";
    
	Ground1= new Ground(300,360,1500,10);
	Paper1 = new Paper(200,350,20);
	
	
	

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
  background(0);
  

 // Boxes
 Dustbin1.display();
 
 //Ground
 Ground1.display();
 Paper1.display();
   
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x : 60, y : -60});
	}
}
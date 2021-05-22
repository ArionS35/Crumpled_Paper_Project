
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperO;
var world;

function preload() {
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperO=new Paper(300,470,20,20);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

 

  groundObject.display();
  dustbinObj.display();
  paperO.display();

}

function keyPressed() {
 if(keyCode === UP_ARROW){
	 Matter.Body.applyForce(paperO.body,paperO.body.position,{x:25,y:-33});
 }

}


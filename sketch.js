
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var dustbin;
var ball;
var ground;


function setup() {
	createCanvas(800,700);
	
	engine = Engine.create();
	world = engine.world;

  
  
  
  ball = new Paper(100,500,30);
  ground = new Ground(width/2,650,1000,10);
  dustbin = new Dustbin(600,695);
	
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(100);
  

  ball.display();
  ground.display();
  dustbin.display();
  
 
  
  
 
}
function keyPressed() {
	if(keyCode === 38) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:62,y:-58})	

	}
}




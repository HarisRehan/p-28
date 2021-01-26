var tree;
var ground; 
var boyImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png");
	
}

function setup() {
	createCanvas(800, 700);
	tree = createSprite(400,700,70,400);
	ground = createSprite(0,680,)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




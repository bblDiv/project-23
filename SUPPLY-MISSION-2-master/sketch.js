var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,bottomCrate,rightSideCrate, leftSideCrate;
var ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.x=helicopterSprite.x-2;

	packageSprite.y=helicopterSprite.y;
	packageSprite.x=helicopterSprite.x;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200, 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	
	Engine.run(engine);

   bottomCrate = new crate(290, 650, 200, 20);

   rightSideCrate = new crate(180, 570, 20, 200);

   leftSideCrate = new crate(400, 570, 20, 200);

   ground1= new Ground(10,650,1000,10)
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  bottomCrate.display();
  rightSideCrate.display();
  leftSideCrate.display();
  packageSprite.x=helicopterSprite.x;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    
		Matter.Body.setStatic(packageBody,false);
	
  }
  if (keyCode === RIGHT_ARROW) {
	helicopterSprite.x=helicopterSprite.x+10;
	
  }
  if (keyCode === LEFT_ARROW) {
	helicopterSprite.x=helicopterSprite.x-10;
	
  }
}




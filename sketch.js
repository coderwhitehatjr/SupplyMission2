var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var red1,red2,red3
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
	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	red1 = createSprite(300,675,20,100)
	red2 = createSprite(400,680,200,20)
	red3 = createSprite(500,675,20,100)
	red1.shapeColor = "red"
	red2.shapeColor = "red"
	red3.shapeColor = "red"





	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

  keyPressed();
 
}

function keyPressed() {
 if (keyCode=== DOWN_ARROW) {
 Matter.Body.setStatic(packageBody,false)
     
  }
}




var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, basket , basket1 , basket2 ;
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
	

	packageSprite=createSprite(200, 200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	
	ground = createSprite(width/2, 650, width, 10 );
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    basket = createSprite(360,635,200,20);
    basket = Bodies.rectangle(360,635,200,20,{isStatic:true});
    World.add(world, basket);

    basket1 = createSprite(470,580,20,150);
    basket1 = Bodies.rectangle(470,580,20,150,{isStatic:true});
    World.add(world, basket1);

    basket1 = createSprite(270,580,20,150);
    basket1 = Bodies.rectangle(270,580,20,150,{isStatic:true});
    World.add(world, basket1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   
	Matter.Body.setStatic(packageBody, false);
	
	
  }
}




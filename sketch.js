
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png")
	mangoImg = loadImage("Plucking mangoes/mango.png")
	stoneImg = loadImage("Plucking mangoes/stone.png")
	treeImg = loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 boy=createSprite(130,600,50,50)
	 boy.addImage(boyImg)
	 boy.scale=0.15

	 stone=new Stone(51,510,100)
	 
	 

	 tree=createSprite(550,480,50,50)
	 tree.addImage(treeImg)
	 tree.scale=0.35
	 
	 mango1=createSprite(410,400,50)
	 mango1.addImage(mangoImg)
	 mango1.scale=0.105
	 mango2 =createSprite(500,350,50)
	 mango2.addImage(mangoImg)
	 mango2.scale=0.105
	 mango3 =createSprite(600,300,50)
	 mango3.addImage(mangoImg)
	 mango3.scale=0.105
	 mango4 =createSprite(500,450,50)
	 mango4.addImage(mangoImg)
	 mango4.scale=0.105
	 mango5 =createSprite(600,400,50)
	 mango5.addImage(mangoImg)
	 mango5.scale=0.105
	 mango6 =createSprite(700,400,50)
	 mango6.addImage(mangoImg)
	 mango6.scale=0.105
	 mango7 =createSprite(650,350,50)
	 mango7.addImage(mangoImg)
	 mango7.scale=0.105
     mango8 =createSprite(550,370,50)
	 mango8.addImage(mangoImg)
	 mango8.scale=0.105
     chain = new Chain(stone.body,{x:50,y:515})
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  boy.display();
  stone.display();
 
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
  tree.display();
  chain.display();
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
		chain.fly()
	}



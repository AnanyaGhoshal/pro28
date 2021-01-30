const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var ground, tree, mango1, mango2, mango3, mango4, mango5, boy, stone, slingshot;



function preload(){
	
  }

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(650,590,1300,20);

	tree = new Tree(1080,600);

	mango1 = new Mango(1050,100,20);
	mango2 = new Mango(1020,250,20);
	mango3 = new Mango(900,230,20);
	mango4 = new Mango(1190,240,20);
	mango5 = new Mango(1200,150,20);

  boy = new Boy(250,530);
  
  stone = new Stone(100,530);

  slingshot = new Slingshot(stone.body,{x:170,y:450});

}

function draw() {

  background(230);
  //Add code for displaying text here!

  text("Press SPACEkEY to Try Again",20,20);

  Engine.update(engine);  




  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy.display();
  stone.display();
  slingshot.display();

 

}

function mouseDragged(){

  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

  slingshot.fly();
  
}

function keyPressed(){

  if(keyDown = "space"){

    Matter.Body.setPosition(stone.body,{x:100,y:530});
    slingshot = new Slingshot(stone.body,{x:170,y:450});


  }
}

function detectollision(lstone,lmango){

  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

  if(distance<=lmango.r+lstone.r){

    Matter.Body.setStatic(lmango.body,false);
    

  }



}







const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var ball, ball1

function setup() {
	createCanvas(2200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(1100,600,2200,20)

	 ball = new Ball(500, 50, 80, 80);
	 ball1 = new Ball(650,50,80,80);
	 ball2 = new Ball(800,50,80,80)
	 ball3 = new Ball(950,50,80,80)

	 sling = new String(ball.body,{x: 500, y: 50 })
	 sling1 = new String(ball1.body,{x: 650, y: 50 })
	 sling2 = new String(ball2.body,{x: 800, y: 50 })
	 sling3 = new String(ball3.body,{x: 950, y: 50 })


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0, 0, 0);

  fill(25,300,30)
  ground.display();
  
  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();

  
  sling.display();
  sling1.display();
  sling2.display();
  sling3.display();
  
 
}

function mouseDragged(){

	Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY})
	
	
}




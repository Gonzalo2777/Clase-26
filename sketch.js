
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var cosita1;
var cosita2;
var cosita3;
var cosita4;

var btn2;

var angle=60;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
  
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  cosita1 = new Ground( 100, 300, 100, 20);
  cosita2 = new Ground( 200, 300, 100, 20);
  cosita3 = new Ground( 300, 300, 100, 20);
  cosita4 = new Ground( 400, 300, 100, 20);

  

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  con = Matter.Constraint.create({
    pointA: {x: 200, y: 20},
    bodyB: ball,
    pointB:{x:0, y:0},
    length: 100,
    stiffness: 1
  })
  World.add(world, con); 
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);
  push()
  stroke("red");
  strokeWeight(4);
  line(con.pointA.x,con.pointA.y, ball.position.x,ball.position.y);
  pop()
//console.log(ground.position.y);

  cosita1.show();
  cosita2.show();
  cosita3.show();
  cosita4.show();
  Engine.update(engine);
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  
}
  
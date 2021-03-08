var engine,world;
var ground,stand1,stand2;
var polygon, slingshot; 
var score = 0; 
var backgroundColor;
var bg = "img/day.png";


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1000, 600);
 
	engine = Engine.create();
	world = engine.world;
  
  ground = new Ground(width/2,600,width,30);
  stand1 = new Ground(500,500,250,10);
  stand2 = new Ground(800,350,200,10);

  block1 = new Block(410,485,30,40);
  block2 = new Block(440,485,30,40); 
  block3 = new Block(470,485,30,40);
  block4 = new Block(500,485,30,40);
  block5 = new Block(530,485,30,40);
  block6 = new Block(560,485,30,40);
  block7 = new Block(590,485,30,40);

  block8 = new Block(440,450,30,40);
  block9 = new Block(470,450,30,40);
  block10 =new Block(500,450,30,40);
  block11 =new Block(530,450,30,40);
  block12 =new Block(560,450,30,40);

  block13 = new Block(470,415,30,40);
  block14 = new Block(500,415,30,40);
  block15 = new Block(530,415,30,40);
  block16 = new Block(500,380,30,40);

  block17 = new Block(740,335,30,40);
  block18 = new Block(770,335,30,40);
  block19 = new Block(800,335,30,40);
  block20 = new Block(830,335,30,40);
  block21 = new Block(860,335,30,40);

  block22 = new Block(770,300,30,40);
  block23 = new Block(800,300,30,40);
  block24 = new Block(830,300,30,40);
  
  block25 = new Block(800,265,30,40);

  polygon = new Polygon(50,200,5);
 
  
  slingshot = new SlingShot(polygon.body,{x:100, y:400});
  
 
	Engine.run(engine);  

}


function preload(){
  getbackgroundcolour();


}

function draw() {
  if(backgroundColor){
   background(backgroundColor);
  }
  
  Engine.update(engine);
  
  textSize(30);
  fill("white");
  text("Score:" + score,750,40);


  ground.display();
  polygon.display();
  slingshot.display(); 

  stand1.display();
  stand2.display();

  block1.display();
  block1.score();

  block2.display();
  block2.score();

  block3.display();
  block3.score();

  block4.display();
  block4.score();

  block5.display();
  block5.score();

  block6.display();
  block6.score();

  block7.display();
  block7.score();


  block8.display();
  block8.score();

  block9.display();
  block9.score();

  block10.display();
  block10.score();

  block11.display();
  block11.score();

  block12.display();
  block12.score();


  block13.display();
  block13.score();

  block14.display();
  block14.score();

  block15.display();
  block15.score();

  block16.display();
  block16.score();


  block17.display();
  block17.score();

  block18.display();
  block18.score();

  block19.display();
  block19.score();

  block20.display();
  block20.score();

  block21.display();
  block21.score();

  block22.display();
  block22.score();

  block23.display();
  block23.score();

  block24.display();
  block24.score();

  block25.display();
  block25.score();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
slingshot.fly();
} 

 function keyPressed(){
 
  if(keyCode === 32 ){ 
    slingshot.attach(polygon.body);
  }

 }
   
 async function getbackgroundcolour(){

  var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var responsejson = await response.json();
  var datetime = responsejson.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<19){
 bg = "img/day.png";
  
  }
  
  else{
  bg = "img/night.png"    
  
  }
  backgroundColor=loadImage(bg);

 }

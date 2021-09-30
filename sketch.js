const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;

var bg
var runner,runnerImg;
var ice=[];
var maxSnow=100;

function preload(){
  bg=loadImage("snow2.jpg");
  runnerImg=loadAnimation("santa.png");
}

function setup() {
  createCanvas(1300,600);
  engine=Engine.create();
  world= engine.world;
  
ground=createSprite(650,670);

runner = createSprite(230,520);
runner.addAnimation("runner",runnerImg);
runner.scale = 0.5;


if(frameCount % 250 === 0){
  for(var i=0; i<maxSnow; i++){
  ice.push(new Snow(random(0,1350), random(0,50)));
  }
  }

}

function draw() {
  background(bg);  
  Engine.update(engine);

  runner.collide(ground);

  if(ground.x < 530){
    ground.x=600;
  }

  if(runner.x > 1200){
    runner.x=230;
  }

  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
    }    
    


ground.display();

  
  drawSprites();

}
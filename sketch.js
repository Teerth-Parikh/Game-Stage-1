
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Kong;
var gojira;
var bg;
var bgImg;
var KongImg;
var GojiraImg;
//var TowerImg;
var tower;
var towerImage;
var godz, godzAni;
var canon;
var canonImg;

function preload() 
{
  KongImg = loadImage("Kong.png");
  GojiraImg = loadImage("Gojira.png");
  bgImg = loadImage("Field.png");
  towerImage = loadImage("Tower.png");
  godzAni= loadAnimation("godzilla3.png");
  canonImg = loadImage("Cannon 5.png");
}

function setup() {
  createCanvas(1000,700);

  // bg = createSprite(500,350,20,30);
  // bg.addImage(bgImg);
  // bg.scale = 2.8;
  angle = -PI / 4;
  canon =  new Cannon(width / 2 - 450, height / 2 - 240, 120, 40);
  //canon.addImage(canonImg);
  ///console.log(canon);
  tower = createSprite(120, 425, 160, 310);
  tower.addImage(towerImage);

  Kong = createSprite(300,540,20,30);
  Kong.addImage(KongImg);
  Kong.scale = 0.4;
  Kong.visible = true;

  gojira = createSprite(800,500,20,30);
  gojira.addImage(GojiraImg);
  gojira.scale = 1.5;
  gojira.velocityX = -2;

  

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(bgImg);
  Engine.update(engine);

  if (gojira.isTouching(Kong)) 
  {
    Kong.visible = false;


  }

  canon.display();
  drawSprites();
}

function showGojira() 
{
  if (keyDown === "RIGHT_ARROW") 
  {
    godz = createSprite(900,500,20,30);
    godz.addAnimation(godzAni);
    //godz.speed = 0.05;

  }
}

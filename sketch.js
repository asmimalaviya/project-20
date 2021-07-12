var  bg
var sleep
var brush
var gym
var eat
var drink
var move

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
function preload() {
bg=loadImage(images/iss.png);
sleep=loadImage(images/iss.png);
brush=loadImage(images/iss.png);
gym=loadImage(images/iss.png);
eat=loadImage(images/iss.png);
drink=loadImage(images/iss.png);
move=loadImage(images/iss.png);
}

astronaut=createSprite(300,230);
astronaut=addAnimation("sleeping",sleep);
astronaut=scale=0.1;

instructions
up_ARROW=brush;
DOWN_ARROW=gym;
LEFT_ARROW=eating;
RIGHT_ARROW=Bathing;
mkey =moveing;

if(keyDown(up_ARROW)){
  astronaut.addAnimation("Bathing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y=350;
  astronaut.veleocityX= 0;
  astronaut.veleocityY= 0;
}
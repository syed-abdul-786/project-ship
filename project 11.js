var ship,ship_running
var sea,seaImg



function preload(){
ship_running=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");



seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,200);
  sea.addImage(seaImg);
   
   ship = createSprite(190,190,10,10);
   ship.addAnimation("running",ship_running)
   ship.scale=0.4;
}

function draw() {
  background("blue");

  if(sea.x < 0){
    sea.x = sea.width/2;
  }



 drawSprites();
}

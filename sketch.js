var ship , ship_moving
var sea , seaImage

function preload(){
  


  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

seaImage = loadImage("sea.png")

}

function setup(){
  createCanvas(800,800);

sea = createSprite(50,50,50,50);
sea.addImage("sea",seaImage);
sea.x = sea.width / 2
sea.velocityX = -4


ship = createSprite(200,250,20,20);
ship.addAnimation("moving",ship_moving);
ship.scale = 0.5

}

function draw() {
background("blue")

if(sea.x < 0){
  sea.x = sea.width / 2
}

 drawSprites()

}
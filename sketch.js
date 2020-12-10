var movingRect, fixedRect, gameObject1, gameObject2

function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400, 800, 80, 50);
  movingRect.shapeColor="red"
  fixedRect=createSprite(400,100,50,80)
  fixedRect.shapeColor="red"
  gameObject1=createSprite(100,100,50,50)
  gameObject1.shapeColor="red"
  gameObject2=createSprite(200,100,50,50)
  gameObject1.shapeColor="red"
  movingRect.velocityY=-3
  fixedRect.velocityY=+3
  
}

function draw() {
  background(0);  




bounceOff(movingRect,fixedRect)





  drawSprites();
}
  

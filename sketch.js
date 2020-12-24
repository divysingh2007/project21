var thickness,Wall;
var bullet,speed, weight;

function setup() {
  createCanvas(1600,400);
speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed;


Wall=createSprite(1200,200,thickness,height/2);
Wall.shapeColor=80,80,80;

}

function draw() {
  background(255,255,255);  
  if ( hasCollided(bullet,Wall)) {
var Damage=0.5*weight*speed*speed/thickness*thickness*thickness;
if(Damage>10){
Wall.shapeColor=color(255,0,0);
}
if (Damage<10){
  Wall.shapeColor=color(0,255,0);
}

    }
    bullet.collide(Wall);
   
  drawSprites();
}

function hasCollided(bullet,Wall)
{
bulletRightEdge=bullet.x+bullet.width;
WallLeftEdge=Wall.x;
if (bulletRightEdge>=WallLeftEdge){
  return true
}
return false 

}






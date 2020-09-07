//Creating all needed variables
var lObject, lWall;
var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83);

  //Setting Random Speed and Weight
  speed = random(223,321);
  weight = random(30,52);
  
  //Creating the car (object)
  bullet = createSprite(50,200,50,50);
  bullet.velocityX = speed;

  //Creating the Wall
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color (80,80,80);
}

function draw() {
  background(150,450,955);  

  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }


  drawSprites();
}

function hasCollided(lBullet, lWall)
{
   bulletRightEdge=lBullet.x+lBullet.width;
   wallLeftEdge = lWall.x;
   if(bulletRightEdge>=wallLeftEdge)
   {
     return true;
   }
   return false;
}
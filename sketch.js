var car, wall;
var speed, weight;
var thickness;
function setup() {
  createCanvas(1000,400);
  thickness = random(22, 83);
  //createSprite(400, 200, 50, 50);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(800, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
  speed = random(55, 90);
  weight = random(400, 1500);
  car.velocityX = speed;
  
}

function draw() {
  background(0);  
  if(wall.x - car.x < (car.width + thickness) / 2)
  {
    car.velocityX = 0;
    var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
    console.log(damage);
    if(damage > 10)
    {
      car.shapeColor = color(255, 0, 0);
    }
    if(damage < 10)
    {
      car.shapeColor = color(0, 255, 0);
    }
  }
  drawSprites();
}
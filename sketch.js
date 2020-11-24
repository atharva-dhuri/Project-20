var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1400, 400);
  car = createSprite(50, 200, 50, 50);

  wall = createSprite(1200, 200, 60, height/2);

  speed= random(55, 90);

  weight = random(400, 1500);

}

function draw() {
  background("black");
  
  car.velocityX = speed;

  if(car.x - wall.x > -55) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180) {
      car.shapeColor = "red";
    }

    if(deformation<180) {
      car.shapeColor = "yellow"
    }

    if(deformation<100) {
      car.shapeColor = "green"
    }
  }
  
  drawSprites();
}
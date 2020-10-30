var speed,weight,damage;
var car,wall;



function setup() {
  createCanvas(800,400);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  
  damage = 0.5 * weight * speed *speed /22500
  


}

function draw() {
  background(255,255,255);  
  textSize(20);
  text("Damage : " + damage,200,200  );
  if (keyDown(space)) {

car.velocityX = speed;
  }

if (damage < 100) {
car.shapeColor = 'green';
}
if (damage > 99 && damage < 180) {
car.shapeColor = 'yellow';


}

if (damage > 180) {
car.shapeColor = 'red';

}

  drawSprites();
}
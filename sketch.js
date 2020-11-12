var bullet, speed,weight;
var wall,thickness;


function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(50,230,70,20);
  bullet.shapeColor = "white";
  bullet.velocityX = 100;
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor= color(85,85,85);
  weight = random(30,52);
  speed = random(223,321);
}

function draw() {
  background("black");  

  if(collide(bullet,wall)){
    bullet.velocityX = 0;

    var damage = (0.5 * weight * speed * speed)/(thickness * thickness  * thickness);

    if (damage>10){
      wall.shapeColor = "red";
    }

    if (damage >7 && damage<10){
      wall.shapeColor = "yellow";

    }

    if (damage <7 ){
      wall.shapeColor = "green";
      
    }

    console.log(damage);
  }

  drawSprites();
}

function collide(objbullet,objwall){
  if(wall.x - bullet.x< wall.width/2 + bullet.width/2){
    return true;
  }
 
  else {return false}
}
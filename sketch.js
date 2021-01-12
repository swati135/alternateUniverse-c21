var sun;
var mercury, venus, earth, mars, jupitor, saturn, uranus, neptune; 
var moon;

var star;
var planet1,planet2,planet3,planet4,planet5,planet6,planet7,planet8;
var satellite;

var direction= 90;

function preload(){    
  star = loadImage("images/sun.png");

  planet1 = loadImage("images/mercury.png");
  planet2 = loadImage("images/venus.png");
  planet3 = loadImage("images/earth.png");
  planet4 = loadImage("images/mars.png");
  planet5 = loadImage("images/jupiter.png");
  planet6 = loadImage("images/saturn.png");
  planet7 = loadImage("images/uranus.png");
  planet8 = loadImage("images/neptune.png");
  
  satellite = loadImage("images/moon.png");
}

function setup() {
 canvas.width = displayWidth;
 canvas.height = displayHeight;
  createCanvas(canvas.width,canvas.height);

  sun= createSprite(canvas.width/2, canvas.height/2, 20, 20);
  sun.addImage(star);
  sun.scale= 0.20;
  sun.debug= true;
  sun.setCollider("circle", 0, 0, (sun.width/2)-80);
  

  mercury= createSprite((canvas.width/2)+50, canvas.height/2, 20, 20);
  mercury.addImage(planet1);
  mercury.scale= 0.045;
  mercury.debug= true;
  mercury.setCollider("circle", 0, 0, (mercury.width/2)-80);

  venus= createSprite((canvas.width/2), (canvas.height/2)-75, 20, 20);
  venus.addImage(planet2);
  venus.scale= 0.10;
  venus.debug= true;
  venus.setCollider("circle", 0, 0, (venus.width/2)-80);

  earth= createSprite((canvas.width/2)-100, canvas.height/2, 20, 20);
  earth.addImage(planet3);
  earth.scale= 0.06;
  earth.debug= true;
  earth.setCollider("circle", 0, 0, (earth.width/2)-80);

  mars= createSprite(canvas.width/2, (canvas.height/2)+125, 20, 20);
  mars.addImage(planet4);
  mars.scale= 0.06;
  mars.debug= true;
  mars.setCollider("circle", 0, 0, (mars.width/2)-80);

  jupitor= createSprite((canvas.width/2)+175, (canvas.height/2), 20, 20);
  jupitor.addImage(planet5);
  jupitor.scale= 0.16;
  jupitor.debug= true;
  jupitor.setCollider("circle", 0, 0, (jupitor.width/2)-80);

  saturn= createSprite((canvas.width/2), (canvas.height/2)-225, 20, 20);
  saturn.addImage(planet6);
  saturn.scale= 0.17;
  saturn.debug= true;
  saturn.setCollider("circle", 0, 0, (saturn.width/2)+30);

  uranus= createSprite((canvas.width/2)-275, (canvas.height/2), 20, 20);
  uranus.addImage(planet7);
  uranus.scale= 0.07;
  uranus.debug= true;
  uranus.setCollider("circle", 0, 0, (uranus.width/2)-80);

  neptune= createSprite((canvas.width/2),(canvas.height/2)+325, 20, 20);
  neptune.addImage(planet8);
  neptune.scale= 0.10;
  neptune.debug= true;
  neptune.setCollider("circle", 0, 0, (neptune.width/2)-80);

  
}

function draw() {
  background(0,0,0);  

 
  noFill();
  stroke(200);
  strokeWeight(2);
  ellipseMode(CENTER);

  
  ellipse(canvas.width/2,canvas.height/2, 100,100);
  ellipse(canvas.width/2,canvas.height/2, 150,150);
  ellipse(canvas.width/2,canvas.height/2, 200,200);
  ellipse(canvas.width/2,canvas.height/2, 250,250);
  ellipse(canvas.width/2,canvas.height/2, 350,350);
  ellipse(canvas.width/2,canvas.height/2, 450,450);
  ellipse(canvas.width/2,canvas.height/2, 550,550);
  ellipse(canvas.width/2,canvas.height/2, 650,650);
 

  sun.rotationSpeed = -1;

  mercury.rotationSpeed = -4;
  venus.rotationSpeed = -3;
  earth.rotationSpeed = -4;
  mars.rotationSpeed = -3;
  jupitor.rotationSpeed = -1;
  saturn.rotationSpeed = -1;
  uranus.rotationSpeed = -2;
  neptune.rotationSpeed = -2;
 
  
  direction += 2;
 

  mercury.setSpeed(1.72, -direction);
  venus.setSpeed(-2.57, -direction+90);
  earth.setSpeed(-3.5, -direction);
  mars.setSpeed(-4.35, -direction-90);
  jupitor.setSpeed(6.12, -direction);
  saturn.setSpeed(-7.82, -direction+90);
  uranus.setSpeed(-9.6, -direction);
  neptune.setSpeed(-11.4, -direction-90);

 
  if((frameCount % 30 === 0) && sun.scale < 2.1){
    sun.scale= sun.scale + 0.01;
  }

  fill("white");
  text(sun.scale,50,50);

  isTouchingPlanet(sun,mercury);
  isTouchingPlanet(sun,venus);
  isTouchingPlanet(sun,earth);
  isTouchingPlanet(sun,mars);
  isTouchingPlanet(sun,jupitor);
  isTouchingPlanet(sun,saturn);
  isTouchingPlanet(sun,uranus);
  isTouchingPlanet(sun,neptune);

  drawSprites();
}

function isTouchingPlanet(Ob1,Ob2){
  if(Ob1.isTouching(Ob2)){
      Ob2.remove();
  }
}
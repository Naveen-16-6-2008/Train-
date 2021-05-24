var train,trainimg,trainsound;
var track,trackimg;
var invisibleGround;
function preload(){
    trainimg = loadImage("train.png");
    trackimg = loadImage("track.png");
    trainsound.loadSound("metro.mp3");
}

function setup(){
    createCanvas(displayWidth,displayHeight);

    train = createSprite(470,250,100,100);
    train.addImage(trainimg);


  track = createSprite(750,750,400,400);
    track.addImage(trackimg);
    track.x = track.width/5;
  track.velocityX = -(200);
   track.scale = 0.8;


   
invisibleGround = createSprite(750,750,400,10);
invisibleGround.x = invisibleGround.width/3;
  invisibleGround.velocityX = -(100);
invisibleGround.visible = false;
}

function draw(){
    background(225);
   textSize(30);
   fill("red");
   text("Train Game",700,50);
   textSize(25);
  text("Press Space to get the train down",570,100); 
  text("Press right arrow to move the train and B to stop the train",440,150)
  
  if (track.x < 0){
  track.x = track.width/5;
}



if (invisibleGround.x < 0){
  invisibleGround.x = invisibleGround.width/2;
}


if(keyIsDown(32)){

    train.velocityY = 5;

  }
  if(train.isTouching(track)){
    train.velocityY = 0;
  }
  
  if (keyIsDown(RIGHT_ARROW)){
train.velocityX = 5;

  }

 
if(keyIsDown(LEFT_ARROW)){
    train.velocityX = -5;
    }
if(keyIsDown(DOWN_ARROW)){
  train.velocityX = -15;
}

if(keyIsDown(UP_ARROW)){
  train.velocityX = 15;
}

if(keyIsDown(66)){
  train.velocityX = 0;
  bg.velocityX = 0;
}


if(keyIsDown(70)){
  train.velocityX = 100;
}

camera.position.x = train.x+250;
train.collide(invisibleGround);

track.display();
train.display();

    drawSprites;
}
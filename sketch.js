
function preload(){
  groundImage= loadImage("mars2.jpeg");
  playerImage= loadImage("player.png");
  cometImage=loadImage("comet.png");
  roverImage=loadImage("rover.png");
}
function setup() {
canvas= createCanvas(displayWidth-30,displayHeight-70);
  ground= createSprite(displayWidth/2,displayHeight/2,displayWidth*3,displayHeight*4);
  ground.addImage("ground",groundImage);
  ground.scale=3;
  player= createSprite(displayWidth/6,displayHeight/2);
  player.addImage("player",playerImage);
  invisibleground =createSprite(displayWidth/2,displayHeight-130,displayWidth,50);
  invisibleground.visible=false;
  upButton= createButton('↑');
  downButton= createButton(' ↓ ');
  upButton.position(50,displayHeight/2+100);
  downButton.position(50,displayHeight/2+170);
  rightButton= createButton('→');
  rightButton.position(90,displayHeight/2+135);
  ground.velocityX=-6;
}

function draw() {
  background(groundImage);
  //if(keyIsDown(UP_ARROW)){
   // player.velocityY=-12;
  //}
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  upButton.mousePressed(()=>{
    player.velocityY=-15
  })
  downButton.mousePressed(()=>{
    player.velocityY=15
  })
  player.velocityY+=1;
  rightButton.mousePressed(()=>{
    
  })
  console.log(player.velocityY);
  player.collide(invisibleground);
spawnobsticles();
  drawSprites();
}
function spawnobsticles(){
  if(World.frameCount%120===0){
    var r= Math.round(random(100,displayHeight-500))
    comet=createSprite(displayWidth,r);
    comet.addImage(cometImage);
    comet.velocityX=-(Math.round(random(6,12)));
    comet.velocityY=Math.round(random(2,6));
    comet.scale=0.5;
    comet.lifetime=displayWidth/6;
  }
 // var r1=Math.round(random(120,200));
if(World.frameCount%150===0){
  rover=createSprite(displayWidth,displayHeight-200);
  rover.addImage(roverImage);
  rover.scale=0.7;
  rover.velocityX=-5;
  rover.lifetime=displayWidth/6;
}
}
function spawnblocks(){

}

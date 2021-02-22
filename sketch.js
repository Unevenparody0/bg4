var fix,move,tooo,bottom;


function setup() {
  createCanvas(800,400);
  fix=createSprite(400, 200, 50, 50);
  move=createSprite(400, 200, 50, 50);
  fix.shapeColor = "cyan";
  move.shapeColor = "orange";
  tooo=createSprite(100, 10, 50, 50);
  tooo.velocityY= 3;
  tooo.shapeColor= "pink";
  bottom=createSprite(100, 390, 50, 50);
  bottom.velocityY= -3;
}

function draw() {
  background(0);

  
  move.x=World.mouseX;
  move.y=World.mouseY; 
  
  if(move.x-fix.x<move.width/2+fix.width/2 && fix.x-move.x<move.width/2+fix.width/2 
    && move.y-fix.y<move.height/2+fix.height/2 && fix.y-move.y<move.height/2+fix.height/2){
    fix.shapeColor = "yellow";
    move.shapeColor = "green";
  }
  else{
    fix.shapeColor = "cyan";
    move.shapeColor = "orange";


  }
  if(
     move.y-fix.y<move.height/2+fix.height/2 && fix.y-move.y<move.height/2+fix.height/2){
    tooo.velocityY=-1*tooo.velocityY;
    bottom.velocityY=-1*bottom.velocityY;
  }
  if(move.x-fix.x<move.width/2+fix.width/2 && fix.x-move.x<move.width/2+fix.width/2 ){
    tooo.velocityX=-1*tooo.velocityX;
    bottom.velocityX=-1*bottom.velocityX;


  }
    


  drawSprites();

console.log(top.velocityY);
}
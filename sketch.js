var iss,issImg;
var hasDocked = false;
var spaceImg;
var spacecraft;
var spacecraft1Img, spaceCraft2Img, spacecraft3Img, spacecraft4Img;

function preload() {
  issImg = loadImage("images/iss.png");
  spaceImg = loadImage("images/spacebg.jpg");
  spacecraft1Img = loadImage("images/spacecraft1.png");
  spacecraft2Img = loadImage("images/spacecraft2.png");
  spacecraft3Img = loadImage("images/spacecraft3.png");
  spacecraft4Img = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(650,350);
  createSprite(400, 200, 50, 50);

  iss = createSprite(330,130);
  iss.addImage(issImg);
  iss.scale = 0.25;

  spacecraft = createSprite(285,240);
  spacecraft.addImage(spacecraft1Img);
  spacecraft.scale = 0.15;



}


function draw() {
  background(spaceImg);
  spacecraft.addImage(spacecraft1Img);

  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1)

    if(keyDown("LEFT_ARROW")){ 
      spacecraft.addImage(spacecraft3Img); 
      spacecraft.x = spacecraft.x - 1; }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraft4Img);
      spacecraft.x = spacecraft.x + 1;
    }

    if (keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -1;
    }
      
    if(keyDown("DOWN_ARROW")){
      spacecraft.y = spacecraft.y +1;
    }
    

    if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
     hasDocked = true; textSize(25); 
      fill("white") 
      text("Docking Successful!", 200, 300);
     }
  }

  drawSprites();
}
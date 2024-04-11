
//variables
var c1, c2,c3,c4, a, b, c, d, e, f


function setup() {
  createCanvas(400, 400);
  
  push();
  print("The sky is blue now")
  print ("The Ground has been created")
  print("the coins have been placed")
  print("You have spawined in, collect coins.")
  pop();
  
}


function draw() {
  background(220);
  
  push();
  let c1= color (157, 234, 237);
  fill (c1);
  rect (0,0,400,400);
  pop();
  
  //draw the ground blocks
  push();
  let c2= color (117, 91, 77);
  fill (c2);
  drawGround (10,10);
  drawGround (60,10);
  drawGround (110,10);
  drawGround (160,10);
  drawGround (210,10);
  drawGround (260,10);
  drawGround (310,10);
  drawGround (360,10);
  drawGround (410,10);
  drawGround (210, -150);
  drawGround (260, -150);
  drawGround (310, -150);
  drawGround (360, -150);
  drawGround (410, -150);
  drawGround (110, -300);
  drawGround (60,-300);
  drawGround (10,-300);
  pop();
  
  //draw the coins
  push();
  let c3= color (255, 235, 82);
  fill (c3);
  drawDiamond (135, 30);
  drawDiamond (375, 180);
  pop();
  
  //draw the character
  push();
  let c4= color (128, 15, 11);
  fill (c4);
  drawCharacter (5, 265);
  pop();
  
}

//function for the ground blocks
function drawGround (a,b){
  push();
  rectMode (CENTER);
  translate (a,b);
  rect (10, 370, 50, 50);
  pop();
}

//function for drawing the coins
function drawDiamond (c,d){
  push();
  rectMode(CENTER);
  translate(c,d);
  rotate(PI/4);
  rect(0, 0, 20, 20);
  scale (0.5, 2);
  rect (0,0,20,20)
  pop();
}

// character function
function drawCharacter(e,f){
  push();
  ellipseMode(RADIUS);
  translate(e,f);
  ellipse(50,50,10,40)
  pop();
  
}
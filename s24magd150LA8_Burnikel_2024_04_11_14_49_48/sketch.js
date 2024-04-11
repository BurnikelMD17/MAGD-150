//set up veriables.
var font1, font2;
var textX;
var s, body, n;
var pdf;
let img;



function setup() {
  createCanvas(300, 500);
  
  img = loadImage("assets/knifeguy.jpg");
  
  //image alterations
  img.filter(INVERT)
  tint ('red')
  image(img, 0, 0);
  
  //create moving title.
  textX=0;
  s = "THE KILLER MAN";
 font1 = loadFont("assets/Oxanium-Regular.ttf");
  font2 = loadFont("assets/InterTight-Black.ttf");
  body = loadStrings("assets/lorem.txt");
  
  n= round(random(body.length));
  
  //pdf creation part.
  pdf = createPDF();
  pdf.beginRecord();
}

function draw() {
  background(220);
  
   image(img, 0, 0, width, height);
  
   image(img, 0, 0, width, height);
  
  //draw red rectangle
  push();
   rectMode (CENTER);
  let c1=color (250, 42, 60);
  fill (c1);
  rect (150, 30, 300, 80);
  pop();
  
  //draw title.
  push();
  textFont(font1);
  textSize (40);
  textAlign(LEFT);
  text(s, textX, 50)
  pop();
  
    //draw supporting text.
    push();
    textFont(font2);
    textSize(12);
  let c2 = color ("white");
  fill (c2);
  textAlign(CENTER);
    text(body[n], width/2, height/2);
    pop();

  textX+=5;
  if (textX>width){
    textX=-textWidth(s);
  }
}
//save pdf.
function mousePressed(){
  pdf.save();
}
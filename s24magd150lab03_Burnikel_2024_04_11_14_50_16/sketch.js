var x;

var g;

var m;

var o;

function setup() {
  createCanvas(400, 400);
  
    push ();
  print ("I am a bubble, move your mouse to move me")
  print ("I change value based on distance from my friend")
  pop ();
}

function draw() {
  background(220);
  
  push ();
  x=constrain (mouseX, 0, 3*width/4)
  ellipse (x, mouseY, width/4, height/4)
  pop ();
  
    let c = map(mouseX, 0, width, 0, 255);
  fill(0, 0, c);
  circle(200, 50, 50);
  
  let g =circle (300.68, 250-30, 60);
  
  let m =circle (200+30, 200-40, 80);
  
  let o= dist (mouseX, mouseY, 220, 60);
   text(o, 50, 200)

  line (mouseX, mouseY, 220, 60);
  
 
  
}

var p;
var e;
var g;
var f;
var b;
let y;
let trianglePos;


function setup() {
  createCanvas(400, 400);
trianglePos=30;
}

function draw() {
  background(220);
//mini Pizza
  let z=color("yellow");
  fill(z);
triangle(trianglePos, 250, trianglePos+50, 320, trianglePos, 330);
trianglePos++;

  if (mouseIsPressed==true){
    let w=color ("white");
    fill(w);
    triangle (300, 250, 300, 60, 80, 90);
  } else {
     let p=color ("yellow");
      fill (p);
  }

  triangle (300, 250, 300, 60, 80, 90);

  let e=color("red");
  fill (e);
  circle (240, 160, 30);

 push ();
  circle (200, 100, 40);

    if (keyIsPressed==true){
    let c=color ("orange");
    fill(c);
    circle (200, 100, 40);
   } else {
     let c=color ("red");
     fill (c);
   }
  pop ();

  push ();
    circle (260, 110, 35);

      if (keyIsPressed==true){
      let f=color ("blue")
      fill (f);
      circle (260, 110, 35);
      } else {
        let f=color ("red");
        fill (f);
      }
  pop();
  y=0;
  while (y<180){
   stroke(128, 88, 48);
    fill(128, 88, 48);
    ellipse(300,y+60,30,30);
   y++;
  }
  for (let t=10; t<width;t+=40){
    textSize(12);
    text("PIZZA!", t, 20);
  }
  }
function setup() {
  // put setup code here
  createCanvas(420,420);
  background(230);
}

function draw() {
  rectMode(CORNERS);
  strokeJoin(ROUND);
  strokeWeight(2);
  fill(150);
  // rect(topLeftCornerX, topLeftCornerY, width, height);
  rect(10, 120, 100, 300);

rectMode(CORNER);
  strokeWeight(2);
  fill(150);
  // rect(topLeftCornerX, topLeftCornerY, width, height);
  rect(120, 180, 100, 250);
  
  strokeJoin(BEVEL)
  strokeWeight(2);
  fill(150);
  // rect(topLeftCornerX, topLeftCornerY, width, height);
  rect(280, 60, 130, 380);
  
  strokeWeight(2);
  fill(150);
  rect(20, 320, 180, 100);
  
  strokeWeight(2);
  fill(150);
  rect(210, 280, 150, 150);
  
  strokeWeight(50);
  point(40, 35);
  
   strokeWeight(40);
  point(65, 50);
  
  ellipseMode(CORNER);
  noStroke();
    fill(200);
    ellipse(180, 20, 150, 34);
  
  noStroke();
    fill(200);
    ellipse(20, 80, 120, 25);

  noStroke();
    fill(200);
    ellipse(300, 80, 120, 25);
  
rectMode(CENTER);
stroke(0);
rect(20, 425, 800, 5);

line (2, 370, 40000, 400)
  
  line (2, 320, 40000, 400)





}
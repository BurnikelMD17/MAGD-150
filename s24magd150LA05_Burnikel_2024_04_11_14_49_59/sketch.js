//Variables 
var x = 50;
var y = 350;
var w = 80;
var h = 80; 
var a = 5;
var b = 5;
var c = 390;
var d = 390;
var m, ballX, ballY;

function setup(){
 createCanvas(400,400);
 background(255);
 stroke(0);
 noFill();
  m= false;
  ballX=width/2;
  ballY=height/2;
}

function draw(){
 background(255);
   
    //rect
     //hover over rect
 push();
    if(mouseX>a && mouseX <x+c && mouseY>y &&mouseY < y+d){
    fill(200);
    } else{
        fill(255);
    }
       rect(a,b,c,d);
pop();

push();
stroke(100);
 fill(0);
 var s = "hover over me";
 text(s, 220, 195);
 pop(); 
  
  // circle button
  //hover over circle
   if((dist(mouseX, mouseY,x,y)<40)){
    fill(200);
    } else{
        fill(255);
    } 
  
  ellipse(x,y,w,h);
 
push();
 fill(0);
 var p = "Press me";
 text(p, 30, 350);
 pop();
  
//interaction  
  
  if (m){
    push();
         fill(0,0,255);
    ellipse(ballX, ballY, 20,20);
    pop();
    ballX+= random(-5,5);
    ballY += random (-5,5);
    }
}

function mousePressed(){
 if ((dist(mouseX, mouseY, x, y)<40)){
      m = !m;
    }
  
  
}
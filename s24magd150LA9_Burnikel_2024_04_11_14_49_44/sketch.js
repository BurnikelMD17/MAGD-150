//Variables
let mySound;
let playing = false;
let fingers;
let button;

//load the piano sound from freesound
function preload() {
    soundFormats('mp3')
  mySound = loadSound('Piano.mp3');
}

function setup() {
  
  //sound setup
  mySound.setVolume(0.5);
  mySound.pan(0);
  mySound.rate(1);
  //mySound.play();
  print(mySound.duration());
  
  //create video on screen
  fingers = createVideo(['woman.mp4']);
  button = createButton('play'); //Create Button with DOM
  button.mousePressed(toggleVid); 
}

//makes video work
function toggleVid() {
  if (playing) {
    fingers.pause();
    button.html('play');
  } else {
    fingers.loop();
    button.html('pause');
    mySound.play(); //sound plays with video
  }
  playing = !playing;
  print(playing);
}
let W = 320;
let H = 200;
let AA = 0;
let FPS = 120;

function settings()
{
  smooth(AA);
}

function setup()
{
  createCanvas(W,H,WEBGL);
  background(0);
  frameRate(FPS);
}

function draw()
{
  translate(W/2,H/2);
  scale(1);
  strokeWeight(1);
  stroke(255);
  point(0,0,0);
}
var x;
var y;
var vx = 0;
var vy = 0;
var countDown = 50;
var gameOver = false;


function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  noStroke();

  x = width / 2;
  y = height / 2;



}

function draw() {

  background(243, 223, 193);

  fill(54, 143, 139);
  rect(width / 6, height / 6, width / 6 * 5, height / 6 * 5);

  if (
    x < width / 6 ||
    x > width / 6 * 5 ||
    y < height / 6 ||
    y > height / 6 * 5
  ) {
    gameOver = true;
  }


  if (frameCount < 50) {
    countDown = countDown - 1;
    fill(255);
    textSize(64);
    textAlign(CENTER);
    text("don't let the ball fall", width / 2, height / 2);
    textSize(128);
    text(countDown, width / 2, height / 2 + 150);

  } else if (gameOver == false) {
    ballMovement();
    fill(111, 255, 233);
    ellipse(x, y, 60);

  } else if (gameOver == true) {
    fill(255);
    textSize(64);
    textAlign(CENTER);
    text("GAME OVER", width / 2, height / 2);



  }


}

function touchMoved() {
  return false;
}


function ballMovement() {
  vx = rotationY * 4;
  vy = rotationX * 4;
  x = x + vx;
  y = y + vy;
}

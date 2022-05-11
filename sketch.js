function setup() {
  background(0);
  createCanvas(windowWidth, windowHeight);
  push();
  var size = 100;

   for (x = 0; x < windowWidth; x = x + 70) {
     for (y = 0; y < windowHeight; y = y + 70) {

        fill(255, 105, 180, 200);
        heart(x, y, 60, 60);
        fill(248, 200, 220, 200);
        heart(x,y,50, 40);
        fill(255, 182, 193, 200);
        heart(x, y, 40, 30);
        size = size - 0.5;}

    fill(0);
    textSize(50);
    textAlign(CENTER);
    text('MADELINE', windowWidth/2, windowHeight/2);
    pop();
}
}

function draw () {
  // push();
  // var size = 100;
  //
  //  for (x = 0; x < windowWidth; x = x + 70) {
  //    for (y = 0; y < windowHeight; y = y + 70) {
  //
  //       fill(255, 105, 180, 63);
  //       heart(x, y, 60, 60);
  //       fill(248, 200, 220, 63);
  //       heart(x,y,50, 40);
  //       fill(255, 182, 193, 63);
  //       heart(x, y, 40, 30);
  //       size = size - 0.5;}
  //
  //   fill(0);
  //   textSize(50);
  //   textAlign(CENTER);
  //   text('MADELINE', windowWidth/2, windowHeight/2);
  //   pop();
   
}

function heart(x, y, size) {
    beginShape();
    vertex(x, y);
    bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x,     y + size);
    bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x,     y);
    endShape(CLOSE);
  }

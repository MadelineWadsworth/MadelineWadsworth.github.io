var a;

var m;

var k;

var l;

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
pop();
}
}

function draw () {
  fill(255);
  noStroke();
  rect(600, 300, 240, 60);

  fill(0);
  textSize(50);
  textAlign(CENTER);
  text('MADELINE', windowWidth/2, windowHeight/2);
  pop();

  fill(255);
  noStroke();
  rect(295, 330, 100, 15);
  let a = createA('https://editor.p5js.org/mwadsworth/full/J7T2ddODc', 'Self-Portrait');
  a.position(300, 330);

  rect(995, 330, 100, 15);
  let m = createA('https://editor.p5js.org/mwadsworth/full/y3kH-dv8h', 'Abstract Art');
  m.position(1000,330);

  rect(625, 230, 160, 15);
  let k = createA('https://editor.p5js.org/mwadsworth/full/p8O0S9r3t', 'Microsoft Paint Project');
  k.position(630, 230);

  rect(640, 430, 130, 15);
  let l = createA('https://editor.p5js.org/mwadsworth/full/KTXoI0JyP', 'Animation Project');
  l.position(645,430);
}


function heart(x, y, size) {
    beginShape();
    vertex(x, y);
    bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x,     y + size);
    bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x,     y);
    endShape(CLOSE);
  }

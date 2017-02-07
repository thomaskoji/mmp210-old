function setup() {
    createCanvas(800,800);
    background('lightgray');
    fill("#f4ddc7");
    noStroke
    ellipse(400,400,600);
    fill('white');
    ellipse(310,380,180);
    ellipse(490,380,180);
    fill(100);
    ellipse(350,400,20);
    ellipse(450,400,20);
    noFill();
    arc(430, 600, 200, 50, HALF_PI, PI);
    strokeWeight(2);
    line(200, 300, 350, 260);
    line(600, 300, 450, 260);
    strokeWeight(1);
    line(390, 500, 360, 550);
    line(360, 550, 390, 560);
    fill("#f13b5a");
    stroke("#bb0043");
    strokeWeight(4);
    rect(125, 180, 550, 60 ,10);
}
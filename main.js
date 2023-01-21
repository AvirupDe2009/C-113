function preload() {
}

function setup() {
    canvas = createCanvas(1000,700);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide()

}

function draw() {
    image(video, 200,130, 600,450);
    
    fill(0,255,0);
    stroke(0,255,0);
    rect(130,60, 750,30);
    rect(90,100, 30,500);
    rect(130,620, 750,30);
    rect(890,100, 30,500);
    
    fill(255,0,0);
    stroke(255,0,0);
    circle(100,70,90);

    circle(900,70,90);

    circle(900,630,90);

    circle(100,630,90);

    
}

function take_snapshot() {
    save('framed-photo.png');
}
const windowHeight = 500;
const windowWidth = 500;
const gridSize = 20;

let apple;

function setup () {
    createCanvas(windowWidth, windowHeight);
    apple = new Apple();
}

function draw() {
    background(0) // 0 is "black" in greyscale, therefore, black background
    drawGridLines();
    apple.draw();
}
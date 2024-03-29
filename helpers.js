function drawGridLines() {
    stroke(240); // Colour is gray-ish

    // Vertical line
    for (let x = 0; x <= windowWidth; x += gridSize) {
        line(x, 0, x, windowHeight);
    }
    
    // Horizontal lines
    for (let y = 0; y <= windowHeight; y += gridSize) {
        line(0, y, windowWidth, y);
    }
}

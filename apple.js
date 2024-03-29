class Apple {
    constructor() {
        this.x = floor((random)(windowWidth/tileSize)); 
        this.y = floor((random)(windowHeight/tileSize));
    }

    createPosition() { // Floor function rounds down to nearest whole number.
        const columns = floor(windowWidth / gridSize); //Counts number of columns by doing width/gridsize.
        const rows = floor(windowHeight / gridSize); // Counts rows with height/gridsize.
        this.x = floor(random(columns)) * gridSize; // Generates a random column index for the "apple"
        this.y = floor(random(rows)) * gridSize; // Generates a random row index for the "apple" 
      }
    
      draw() {
        fill(255, 0, 0); // Set apple color to red
        rect(this.x, this.y, this.gridSize, this.gridSize); // Draws rectangle to be the apple
      }
}
//your code here
document.addEventListener("DOMContentLoaded", () => {
  const gameContainer = document.getElementById("gameContainer");
  const scoreSpan = document.getElementById("score");
  
  // Variables to store the snake's position
  let currentRow = 20;
  let currentCol = 1;
  
  // Function to create and place the snake's body pixel
  function createSnakeBodyPixel(row, col) {
    const pixel = document.createElement("div");
    pixel.className = "snakeBodyPixel";
    pixel.id = `pixel${row}_${col}`;
    gameContainer.appendChild(pixel);
  }
  
  // Function to create and place the food pixel
  function createFood(row, col) {
    const pixel = document.createElement("div");
    pixel.className = "food";
    pixel.id = `pixel${row}_${col}`;
    gameContainer.appendChild(pixel);
  }
  
  // Function to move the snake
  function moveSnake() {
    // Your logic to move the snake here.
    // For example, you can use setInterval to move the snake automatically in a certain direction.
    // Make sure to update the 'currentRow' and 'currentCol' variables accordingly.
    // Also, check for collisions with the food and update the score.
  }
  
  // Initial setup
  for (let row = 1; row <= 40; row++) {
    for (let col = 1; col <= 40; col++) {
      if (row === 20 && col === 1) {
        // Starting position of the snake
        createSnakeBodyPixel(row, col);
      } else {
        // Empty cells
        const pixel = document.createElement("div");
        pixel.id = `pixel${row}_${col}`;
        gameContainer.appendChild(pixel);
      }
    }
  }
  
  // Place the food at a random position (you need to implement this logic)
  createFood(40, 40);
  
  // Start moving the snake automatically
  setInterval(moveSnake, 10000);
});

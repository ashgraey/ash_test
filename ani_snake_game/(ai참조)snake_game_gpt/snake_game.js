// Define the canvas and context
var canvas = document.getElementById("snake");
var ctx = canvas.getContext("2d");

// Define the size of the squares
var squareSize = 20;

// 스네이크의 시작 위치 및 방향 정의
var x = 0;
var y = 0;
var dx = squareSize;
var dy = 0;

// Define the food position
var foodX;
var foodY;

// Define the array to store the positions of the snake
var snake = [];

// Define the length of the snake
var snakeLength = 5;

// Define the interval for moving the snake
setInterval(function () {
  x += dx;
  y += dy;

  // Check if the snake has hit the wall
  if (x >= canvas.width || x < 0 || y >= canvas.height || y < 0) {
    // alert("Game Over");
    clearInterval(intervalId);
  }

  // Check if the snake has eaten the food
  if (x == foodX && y == foodY) {
    snakeLength++;
    generateFood();
  }

  // Remove the tail of the snake
  while (snake.length > snakeLength) {
    snake.shift();
  }

  // Add the new head of the snake
  snake.push({ x: x, y: y });

  draw();
}, 100);

// Generate the food position
function generateFood() {
  foodX = Math.floor(Math.random() * (canvas.width / squareSize)) * squareSize;
  foodY = Math.floor(Math.random() * (canvas.height / squareSize)) * squareSize;
}

// Draw the snake and food on the canvas
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < snake.length; i++) {
    ctx.fillStyle = "green";
    ctx.fillRect(snake[i].x, snake[i].y, squareSize, squareSize);
  }

  ctx.fillStyle = "red";
  ctx.fillRect(foodX, foodY, squareSize, squareSize);
}

// Listen for arrow key events to change the direction of the snake
document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      dx = -squareSize;
      dy = 0;
      break;
    case 38:
      dx = 0;
      dy = -squareSize;
      break;
    case 39:
      dx = squareSize;
      dy = 0;
      break;
    case 40:
      dx = 0;
      dy = squareSize;
      break;
  }
};

generateFood();

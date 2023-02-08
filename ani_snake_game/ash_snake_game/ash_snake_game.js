// ---------------------------------------------------
const canvas = document.getElementById("snake_field");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

const block_count = 20;
const block_size = Math.round(width / block_count);
console.log(block_size);

let snake = [];
let apple = null;
let dir = null;
let score = 0;
let speedCoeff = 1;
var key = { right: null, left: null, up: null, down: null };

const FIELD_COLOR = "#f0f0f0";
const APPLE_COLOR = "#FF0000";
const GRID_COLOR = "#d9d9d9"; //#d9d9d9
const SNAKE_COLOR = "#00FF00"; //#00asdFF00

// ---------------------------------------------------
const init = () => {
  document.addEventListener("keydown", keyDownHandler);
  document.addEventListener("keyup", keyUpHandler);

  snake = [];
  for (let i = 0; i < 2; ++i) {
    snake.push({
      x: i * block_size,
      y: 0,
    });
    snake.reverse();
  }
  console.log(snake);
  key["right"] = true;
  score = 0;
  scoreCoeff = 1;
  spawn_apple();
};

const keyDownHandler = (e) => {
  var keyCode = e.keyCode;
  switch (keyCode) {
    case 39:
      key["right"] = true;
    case 37:
      key["left"] = true;
    case 38:
      key["up"] = true;
    case 40:
      key["down"] = true;
  }
  //   console.log(keyCode);
};

const keyUpHandler = (e) => {
  var keyCode = e.keyCode;
  switch (keyCode) {
    case 39:
      key["right"] = false;
    case 37:
      key["left"] = false;
    case 38:
      key["up"] = false;
    case 40:
      key["down"] = false;
  }
};

const draw = () => {
  draw_field();
  draw_snake();
  draw_apple();
};

// map 그리기
const draw_field = () => {
  ctx.fillStyle = FIELD_COLOR; //ctx 색상 지정
  ctx.fillRect(0, 0, width, height); // ctx 모양(좌표, 좌표, 가로, 세로)
  ctx.strokeStyle = GRID_COLOR; // 선스타일 지정(테두리)

  // 가로줄 그리기
  // blcok_size = 25; 19번 반복
  for (let i = block_size; i < height; i += block_size) {
    ctx.moveTo(0, i); // moveTo(x, y) : 선 출발점 지정
    ctx.lineTo(width, i); // lineTo(x, y) : 선의 도착점 지정
    ctx.stroke(); // stroke() : 선 그리기
    // console.log(i);
  }

  // 세로줄 그리기
  for (let i = block_size; i < width; i += block_size) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
    ctx.stroke();
  }
};

// 사과그리기
const draw_apple = () => {
  ctx.beginPath(); // 열기
  ctx.fillStyle = APPLE_COLOR; // fillStyle() : 컬러삽입
  ctx.arc(
    apple.x + block_size / 2,
    apple.y + block_size / 2,
    block_size / 2,
    0,
    2 * Math.PI
  ); // arc() : 동그라미그리기
  ctx.fill(); // fill() : 채우기
  ctx.closePath();
};

// 뱀 그리기
const draw_snake = () => {
  ctx.fillStyle = SNAKE_COLOR; // snake 색상
  ctx.strokeStyle = "#000000"; // snake 외곽선 색상
  //   ctx.fillRect(20, 20, block_size, block_size);
  //   ctx.strokeRect(20, 20, block_size, block_size);
  for (let i = 0; i < snake.length; i++) {
    ctx.fillRect(snake[i].x, snake[i].y, block_size, block_size);
    ctx.strokeRect(snake[i].x, snake[i].y, block_size, block_size);
  }
};

// 사과 랜덤위치 생성
const spawn_apple = () => {
  do {
    apple = {
      x:
        Math.floor(Math.round(Math.random() * width) / block_size) * block_size,

      y:
        Math.floor(Math.round(Math.random() * height) / block_size) *
        block_size,
    };
  } while (isContact(apple));
};

// 사과위치 뱀위치 중복 체크, snake 몸통 충돌 체크
const isContact = (Obj) => {
  let contact = false;
  for (let i = 0; i < snake.lenght; i++) {
    if (snake[i].x == Obj.x && snake[i].y == Obj.y) {
      contact = true;
      break;
    }
  }
  return contact;
};

// 벽 충돌 체크
const colison = (pos) => {
  if (0 <= pos.x && pos.x < width && 0 <= pos.y && pos.y < height) {
    return true;
  }
  return false;
};

const move = () => {
  let newPos = {};

  if (key["up"]) {
    newPos = {
      x: snake[0].x,
      y: snake[0].y - block_size,
    };
  } else if (key["down"]) {
    newPos = {
      x: snake[0].x,
      y: snake[0].y + block_size,
    };
  } else if (key["right"]) {
    newPos = {
      x: snake[0].x + block_size,
      y: snake[0].y,
    };
  } else if (key["left"]) {
    newPos = {
      x: snake[0].x - block_size,
      y: snake[0].y,
    };
  }
  console.log(key);

  // 종료조건
  //   if (!isContact(newPos) || colison(newPos)) {
  //     alert("gameover");
  //     alert("score : " + score);
  //     init();
  if (newPos.x == apple.x && newPos.y == apple.y) {
    score += 1;
    if (score % 3 == 0) {
      speedCoeff += 0.5;
    }
    // 애플 재생성
    spawn_apple();
    // 스네이크 머리추가
    snake.unshift({
      x: newPos.x,
      y: newPos.y,
    });
  } else {
    // 꼬리삭제 머리추가
    snake.pop();
    snake.unshift({
      x: newPos.x,
      y: newPos.y,
    });
  }
  draw();
  setTimeout(move, 100 / speedCoeff);
};

init();
// draw();
move();

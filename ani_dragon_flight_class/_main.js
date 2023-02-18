import { ManagerGame } from "./managerGame.js";

function draw() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);

  // 초기화 식
  ManagerGame.getInstance().update();
  ManagerGame.getInstance().draw();
}

// 캔버스
var $canvas = document.getElementById("mycanvas");
var ctx = $canvas.getContext("2d");

// 시작
// 1 
ManagerGame.getInstance().start(ctx);
// 2 
setInterval(draw, 10);

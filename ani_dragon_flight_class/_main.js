import { ManagerGame } from "./managerGame.js";

function draw() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);

  // update이후 draw
  ManagerGame.getInstance().update();
  ManagerGame.getInstance().draw();
}

function loading() {
  setInterval(draw, 10);
}

// 캔버스
var $canvas = document.getElementById("myCanvas");
var ctx = $canvas.getContext("2d");

// 시작
// 1 ManagerGame.start()
ManagerGame.getInstance().start(ctx);

$canvas.style.border = "1px solid black";
// 2 
setTimeout(loading, 10);

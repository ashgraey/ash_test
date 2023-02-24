// import { BackGroundList } from "./BackGroundList.js";
import { ManagerImage } from "./managerImage.js";
import { ManagerPlayer } from "./managerPlayer.js";
import { ManagerSkill } from "./managerSkill.js";
import { ManagerMonster } from "./managerMonster.js";

export class Stage01 {
  start() {
    // this.bgList = new BackGroundList();
    this.bgList = [];
    this.setBgList();

    // 여기서 플레이어 좌표 넘김
    ManagerPlayer.getInstance().setPlayer(150, 500);
    // 몬스터 세팅
    ManagerMonster.getInstance().setEnemysList(30, 0, 0);
  }

  update() {
    this.bgListMove();
    ManagerPlayer.getInstance().update();
    ManagerSkill.getInstance().update();
    ManagerMonster.getInstance().update();
  
  }

  draw() {
    // this.bgList.draw();
    this.bgDraw();

    ManagerPlayer.getInstance().draw();
    ManagerSkill.getInstance().draw();
    ManagerMonster.getInstance().draw();
  }

  // bg 메소드===========================================
  // bgList 
  bgDraw() {
    for (let i = 0; i < this.bgList.length; i++) {
      var backGround = this.bgList[i];
      // console.log(backGround);
      ManagerImage.getInstance().managerImageDraw(
        backGround.name,
        backGround.x,
        backGround.y
      );
    }
  }

  // backGround setting
  setBgList() {
    for (let i = 0; i < 3; i++) {
      var rNum = i + 1; // 1 2 3
      var bgName = "bg" + rNum; // bg1 bg2 bg3
      var rx = 0;
      var ry = 500 - i * 500; // 500 0 -500
      var speed = 0.5;
      var bg = { name: bgName, x: rx, y: ry, speed: speed };
      this.bgList.push(bg);
    }
  }

  // bgList Update
  bgListMove() {
    // this.bgList.update();
    for (let i = 0; i < this.bgList.length; i++) {
      this.bgList[i].y += this.bgList[i].speed;
      // 예외처리
      if (this.bgList[i].y >= 1000) {
        this.bgList[i].y = -500;
      }
    }
  }
}

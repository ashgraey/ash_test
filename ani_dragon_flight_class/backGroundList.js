import { ManagerImage } from "./managerImage.js"

export class BackGroundList {
    constructor() {
        // 클래스 초기화
        this.bgList = []
        for(let i = 0; i < 3; i++) {
            var rNum = i + 1; // 1 2 3
            var bgName = "bg" + rNum; // bg1 bg2 bg3
            var rx = 0;
            var ry = 500 - (i * 500); // 500 0 -500
            var speed = 0.5;
            var bg = {"name" : bgName, "x" : rx, "y" : ry, "speed" : speed};
            this.bgList.push(bg);
        }
    }


    update() {
        // console.log(this.bgList);
        for(let i = 0; i < this.bgList.length; i++ ) {
            this.bgList[i].y += this.bgList[i].speed;
            // 예외처리
            if(this.bgList[i].y >= 1000) {
                this.bgList[i].y = -500;
            }
        }
    }

    draw() {
    
        for(let i = 0; i < this.bgList.length; i++) {
            var backGround = this.bgList[i];
            // console.log(backGround);
            ManagerImage.getInstance().managerImageDraw(backGround.name, backGround.x, backGround.y);
        }
    }
    


}
import { UnitTestPlayer } from "./unitTestPlayer.js";

export class ManagerPlayer {
    static instance = new ManagerPlayer();
    static getInstance() {
        return this.instance;
    }

    // 플레이어 프로퍼티 setting
    start() {
        this.speed = 2;
        // this.color = "blue";
        this.hpMax = 10;
        this.power = 30;
        this.testPlayer = null;
    }

    setPlayer(x, y) {
        this.testPlayer = new UnitTestPlayer(x, y, this.speed, this.hpMax, this.power);
    }

    update(){
        if(this.testPlayer){
            this.testPlayer.update();
        }
    }

    draw(){
        if(this.testPlayer){
            this.testPlayer.draw();
        }
    }

}
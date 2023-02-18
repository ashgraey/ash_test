import { ManagerKey } from "./managerKey.js";
import { ManagerImage } from "./managerImage.js";
import { ManagerScene } from "./managerScene.js";
// import { ManagerPlayer } from "./managerPlayer.js";
// import { ManagerStage } from "./managerStage.js";

export class ManagerGame {
    static instance = new ManagerGame()
    static getInstance() {
        return this.instance;
    }

    // 1 
    start(ctx) {
        // 전역변수
        this.ctx = ctx;
        ManagerKey.getInstance().start();
        ManagerImage.getInstance().start();
        ManagerScene.getInstance().start();
        // ManagerStage.getInstance().start();
        // ManagerPlayer.getInstance().start();
        ManagerScene.getInstance().changeScene("title");
    }

    update(){
        ManagerScene.getInstance().update();     
    }

    draw() {
        ManagerScene.getInstance().draw();
    }
}
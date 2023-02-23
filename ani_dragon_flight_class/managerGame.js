import { ManagerKey } from "./managerKey.js";
import { ManagerImage } from "./managerImage.js";
import { ManagerScene } from "./managerScene.js";
import { ManagerStage } from "./managerStage.js";
import { ManagerPlayer } from "./managerPlayer.js";

import { ManagerAnim } from "./managerAnim.js";
import { ManagerSkill } from "./managerSkill.js";
import { ManagerMonster } from "./managerMonster.js";

export class ManagerGame {
    static instance = new ManagerGame()
    static getInstance() {
        return this.instance;
    }

    // 1 말그대로 start => 
    start(ctx) {
       
        this.ctx = ctx;
        ManagerKey.getInstance().start();
        ManagerImage.getInstance().start(); // imageDB setting
        ManagerScene.getInstance().start(); // sceneDB setting
        ManagerStage.getInstance().start();
        //=================================
        // 구현 중
        ManagerAnim.getInstance().start();
        ManagerPlayer.getInstance().start();
        // 구현 중
        ManagerSkill.getInstance().start(); // skillBolt == new SkillBolt;
        ManagerScene.getInstance().changeScene("title"); // curScene이 title인지 아닌지 검사, title이면 return 계속 타이틀 화면을 유지
        ManagerMonster.getInstance().start();
    }

    update(){
        ManagerScene.getInstance().update();     
    }

    draw() {
        ManagerScene.getInstance().draw();
    }
}
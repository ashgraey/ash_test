// import { ManagerGame } from "./managerGame.js";
import { ManagerImage } from "./managerImage.js";
import { ManagerScene } from "./managerScene.js";
// import { ManagerKey } from "./managerScene.js";

export class SceneTitle{
    start() {
        document.addEventListener("keyDown", this.keyDownManager);
    }

    update() {
        
    }

    draw() {
        ManagerImage.getInstance().managerImageDraw("title", 0, 250);
    }
    
    keyDownManager = (e) => {
        if(ManagerScene.getInstance().curSceneName != "title") {
            return;
        }
        ManagerScene.getInstance().changeScene("stage");
        // 트리거 역할
        e.stopImmediatePropagation();

    }
    
}
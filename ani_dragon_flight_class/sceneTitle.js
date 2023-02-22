// import { ManagerGame } from "./managerGame.js";
import { ManagerImage } from "./managerImage.js";
import { ManagerScene } from "./managerScene.js";
// import { ManagerKey } from "./managerScene.js";

export class SceneTitle {
    start() {
        // console.log("yes")
        document.addEventListener("click", this.mouseClickEvent, true);
    }
    update() {

    }

    draw() {
        // console.log("yes");
        ManagerImage.getInstance().managerImageDraw("title", 0, 0);
    }

    mouseClickEvent = (e) => {
        console.log("click")
        console.log(ManagerScene.getInstance().curSceneName);
        if (ManagerScene.getInstance().curSceneName != "title") {
            return;
        }
        ManagerScene.getInstance().changeScene("stage");
        // 트리거 역할
        e.stopImmediatePropagation();



    }

}
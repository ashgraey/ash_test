import { SceneTitle } from "./sceneTitle.js";
import { SceneStage } from "./sceneStage.js";

export class ManagerScene {
    // 싱글톤
    static instance = new ManagerScene();
    static getInstance() {
        return this.instance;
    }

    // curScene이 없으면 update
    update() {
        if(this.curScene != null) {
            this.curScene.update()
        }
    }

    // curScene이 없으면 draw
    draw() {
        if(this.curScene != null) {
            this.curScene.draw()
        }
    }

}
import { SceneTitle } from "./sceneTitle.js";
import { SceneStage } from "./sceneStage.js";
import { SceneGameOver } from "./sceneGameOver.js";


export class ManagerScene {
    static instance = new ManagerScene();
    static getInstance() {
        return this.instance;
    }

    // 초기화
    start() {
        this.sceneList = {};
        this.setScene()

        this.curScene = null;
        this.curSceneName = "";
    }

    // curScene에 값이 있으면 SceneTitle에서 update()
    update() {
        if(this.curScene != null) {
            this.curScene.update()
        }
    }

    // curScene에 값이 있으면 SceneTitle에서 draw()
    draw() {
        if(this.curScene != null) {
            this.curScene.draw()
        }
    }

    // scene setting
    setScene() {
        this.sceneList["title"] = new SceneTitle();
        this.sceneList["stage"] = new SceneStage();
        // this.sceneList["gameover"] = new SceneGameOver();
    }

    // 
    changeScene(sceneName) {
        // no change
        if(this.curSceneName == sceneName) {
            return;
        }
        // change
        // 객체 저장
        this.curScene = this.sceneList[sceneName];

        // curScene에 sceneName 저장
        if(this.curScene != null) {
            this.curSceneName = sceneName;
            this.curScene.start()
        }

    }

}
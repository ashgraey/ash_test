import { Stage01 } from "./stage01.js";
// import { Stage02 } from "./stage02.js";
// import { StageTest1 } from "./stageTest1.js";

export class ManagerStage {
    static instance = new ManagerStage();
    static getInstance() {
        return this.instance;
    }

    start() {
        this.stageList = {};
        this.setStage();
        this.stageLevel = 1;
        this.curStageName = "stage01"; // 여기서 시작페이지를 정한다.
    }

    getCurStage() {
        return this.stageList[this.curStageName];
    }

    setStage() {
        this.stageList["stage01"] = new Stage01();
    }
}
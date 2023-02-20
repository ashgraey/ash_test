import { NodeImage } from "./nodeImage.js";
import { ManagerGame } from "./managerGame.js";

export class ManagerImage {
    static instance = new ManagerImage()
    static getInstance() {
        return this.instance;
    }

    // init같은 역할(초기화)
    start() {
        this.imageList = {};
        this.managerImageSetList()
    }

    // imageList객체 생성
    managerImageSetList() {
        // title 
        this.managerImageSet("title", 400, 800, "image/title.png");

        // backGround
        this.managerImageSet("bg1", 400, 500, "image/stage_01.png");
        this.managerImageSet("bg2", 400, 500, "image/stage_01.png");
        this.managerImageSet("bg3", 400, 500, "image/stage_01.png");

        // // gameOver
        // this.managerImageSet("gameover", 150, 80, "image/gameover.jpg");

        // player
        this.managerImageSet("player", 100, 100, "image/player.png");
        // this.managerImageSet("heart", 60, 50, "image/heart.png");

        // // bolt
        // this.managerImageSet("bolt1", 40, 40, "image/bolt1.png");
        // this.managerImageSet("bolt2", 40, 40, "image/bolt2.png");
        // this.managerImageSet("bolt3", 40, 40, "image/bolt3.png");

        // // enemy
        // this.managerImageSet("enemy1", 50, 50, "image/enmey1.png");

        // // item 
        // this.managerImageSet("item1", 50, 50, "image/item1.png");

        // // meteo
        // this.managerImageSet("meteo1", 80, 80, "image/meteo1.png");
        // this.managerImageSet("meteo2", 80, 80, "image/meteo2.png");

        // stage 
        // this.managerImageSet("stage1", 400, 500, "image/stage_01.png");
        // this.managerImageSet("stage2", 400, 500, "image/stage_02.png");
        // this.managerImageSet("stage3", 400, 500, "image/stage_03.png");
        // this.managerImageSet("stage4", 400, 500, "image/stage_04.png");
        // this.managerImageSet("stage5", 400, 500, "image/stage_05.png");



    };

    // imageSetting
    // ex/ iamgeList["player"] = image.w, image.h, image.src
    managerImageSet(imageName, w, h, imagePath) {
        var nodeImage = new NodeImage(w, h, imagePath);
        this.imageList[imageName] = nodeImage;
    };

    // 가오용 
    managerImageGet(imageName) {
        return this.imageList[imageName];
    }

    // image 위치(좌표, x, y)
    managerImageDraw(imageName, x, y) {
        var nodeImage = this.imageList[imageName];
        // 예외처리
        if (nodeImage == null) {
            return;
        }
        // ?
        // nodeImage = new NodeImage(); 
        // nodeImage.nodeImgeDraw(x, y);
        // 이거랑 똑같음 그냥 인스턴스 메소드를 실행시키는거.
        nodeImage.nodeImageDraw(x, y);
    }
}
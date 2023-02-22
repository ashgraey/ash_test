import { ManagerGame } from "./managerGame.js";

export class NodeImage {
    constructor(w, h, imagePath) {

        // drawImage는 이미지를 그리기전에 Image(); 객체를 로드해야한다.
        this.image = new Image();

        this.image.width = w;
        this.image.height = h;
        this.image.src = imagePath;
    }

    // 여기서 모든 Object가 draw 됨
    nodeImageDraw(x, y) {
        // ctx.drawImage() => ctx 메서드
        // nodeImage()에서 그림을 그린다.
        // ctx.drawImage(new Image, 좌표 x, 좌표 y, 가로, 세로)
        
        ManagerGame.getInstance().ctx.drawImage(this.image, x, y, this.image.width, this.image.height);
    }
}
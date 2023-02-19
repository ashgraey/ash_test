import { BackGroundList } from "./BackGroundList.js";
export class Stage01{
    start(){  
        this.bgList = new BackGroundList();
  
    }
   
    update(){
        this.bgList.update();

    }

    draw(){
        this.bgList.draw();

    }
   
}
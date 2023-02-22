import { ManagerGame } from "./managerGame.js";
import { ManagerKey } from "./managerKey.js";
import { NodeAnimList } from "./nodeAnimList.js";
import { ManagerSkill } from "./managerSkill.js";

export class UnitTestPlayer {
    constructor(xPos, yPos, speed, hpMax, power) {
        
        this.xPos = xPos;
        this.yPos = yPos;

        this.speed = speed;
        this.hp = hpMax;
        this.power = power;

        this.direction = "right";
        this.dead = false;    

        this.animationList = new NodeAnimList("player");
        this.animationList.nodeAnimListChangeAnim("player");
       
        this.unitType = "player";
       
        this.setCollision();

    }

        

    update(){     
        if(this.dead == true){
            return;
        }
        this.animationList.nodeAnimListUpdate();
        this.keyMenu();
        this.setCollision();
  
    }

    setCollision(){
        this.xCol = this.xPos + 85;
        this.yCol = this.yPos + 110;
        this.wCol = 170;
        this.hCol = 210; 
        this.zCol = this.yCol + this.hCol;
        this.xColCenter = this.xCol + Number(this.wCol/2);
        this.yColCenter = this.yCol + Number(this.hCol/2);
    }

    keyMenu(){

        var d = ManagerKey.getInstance().getKeyStay("KeyD");
        var a = ManagerKey.getInstance().getKeyStay("KeyA");
        var w = ManagerKey.getInstance().getKeyStay("KeyW");
        var s = ManagerKey.getInstance().getKeyStay("KeyS");

        var j = ManagerKey.getInstance().getKeyOnce("KeyJ");
        var k = ManagerKey.getInstance().getKeyOnce("KeyK");
        // console.log(d);

        if(j){
            // j를 입력받으면 Bolt가 나가도록 설정
            ManagerSkill.getInstance().managerSkillPlay("skillBolt" , "bolt_1", this.xPos , this.yPos - 100, "up" , this.power);
            
            // console.log("야호")
            // 입력은 받음
            // console.log(this.direction);
            // if(this.direction == "up"){   
            //     ManagerSkill.getInstance().managerSkillPlay("skillBolt" , "bolt_1", this.xPos , this.yPos  , "up" , this.power);
            //     console.log(this.direction) 
            // }else if(this.direction == "up"){
            //     ManagerSkill.getInstance().managerSkillPlay("skillBolt" , "bolt_1", this.xPos + 150 , this.yPos +50 , "up" , this.power);
            // }
        }

        // if(k){
        //     if(this.direction == "left"){        
             
        //     }else if(this.direction == "right"){
             
        //     }
        //  }

        if(d){
            this.animationList.nodeAnimListChangeAnim("player");
            this.direction  = "right";
            this.xPos += this.speed;
        }

        if(a){
            this.animationList.nodeAnimListChangeAnim("player");
            this.direction  = "left";
            this.xPos -= this.speed;
        }

        if(w){
            this.direction = "up"
            this.yPos -= this.speed;
        }       
        if(s){
            this.direction = "down"
            this.yPos += this.speed;
        }
        
        if(d == false && a == false && w == false && s == false)
        {
            if(this.direction == "right"){
                this.animationList.nodeAnimListChangeAnim("player");
            }else if(this.direction == "left"){
                this.animationList.nodeAnimListChangeAnim("player");
            }
        }
    }

   draw(){
        this.animationList.nodeAnimListDraw(this.xPos , this.yPos);
    //    this.drawBox();

    }

    // drawBox(){
    //     ManagerGame.getInstance().ctx.beginPath () ;
    //     ManagerGame.getInstance().ctx.strokeRect(this.xCol, this.yCol, this.wCol, this.hCol);
    //     ManagerGame.getInstance().ctx.closePath () ;
    // }


}
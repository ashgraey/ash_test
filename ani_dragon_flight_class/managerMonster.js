import { ManagerPlayer } from "./managerPlayer.js";
import { UnitEnemy } from "./unitEnemy.js";
// import { UnitOrc } from "./unitOrc.js";

export class ManagerMonster {
    static instance = new ManagerMonster();
    static getInstance() {
        return this.instance;
    }

    start() {
        this.monsterListAll = {};
        
    }
    
    setEnemysList(size , x , y){ // 10 1700 200 
        var monsterName = "enemy";     
        this.monsterSize = size;
        this.monsterListAll[monsterName] = [];
        for (var j = 0; j < this.monsterSize; j++){  
            var monster = new UnitEnemy(x , y); // 1700 200 
            // target 설정
            var target = ManagerPlayer.getInstance().testPlayer;
            monster.target = target;
            this.monsterListAll[monsterName].push(monster);
        }
    }

    update(){
        for (var name in this.monsterListAll){
            var monstertList = this.monsterListAll[name];
            for (var i = 0; i < monstertList.length; i++ ){
                if( monstertList[i].hp <= 0){
                    monstertList[i].hp = 0;
                    monstertList[i].dead = true;
                    monstertList.splice(i , 1);
                    break;
                }
                if(monstertList[i].dead == false){
                    monstertList[i].update();
                }
            }
        }
      
    }

    draw(){
        for (var name in this.monsterListAll){
            var monstertList = this.monsterListAll[name];
            for (var i = 0; i < monstertList.length; i++ ){
                if(monstertList[i].dead == false){
                    monstertList[i].draw();
                }
            }
        }    
    }
}
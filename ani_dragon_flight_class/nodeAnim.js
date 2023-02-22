
export class NodeAnim {    
    constructor(loopType  , frameDelay , animation){
        this.looptype = loopType;
        this.frameDelay = frameDelay;
        this.animation = animation;

        this.index = 0;
        this.frameTime = 0;
        this.size = this.animation.length;
        this.playOn = false;
    }
    
    // ManagerScene.getInstance().changeScene("title"); 여기서 끝남
    nodeAnimPlay(){
        this.playOn = true;
        this.index = 0;
        this.frameTime = 0;
        this.size = this.animation.length;
    }

    playLoop(){
        this.frameTime += 1;  
        if(this.frameTime >= this.frameDelay){
            this.frameTime = 0;
            this.index += 1;
            if(this.index >= this.size){
                this.index = 0;
            }        
        }        
    }

    playOnce(){
        this.frameTime += 1; 
        if(this.frameTime >= this.frameDelay){
            this.frameTime = 0;        
            this.index += 1;     
        }
        if(this.index >= this.size){   
            this.playOn = false;         
        }
        
    }

    // 여기서 update 끝남
    nodeAnimUpdate(){
        if(this.playOn == false){
            return false;
        }
        if(this.looptype == "loop"){
            this.playLoop();
        }else{
            this.playOnce()
        }
        return true;
    }

    nodeAnimDraw( x , y ){
        if(this.playOn == false){
            return;
        }
        var nodeImage = this.animation[this.index];     
        if(nodeImage == null){
            return;
        }  
        nodeImage.nodeImageDraw(x , y);  
    }
  
}
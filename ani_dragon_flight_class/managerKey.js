export class ManagerKey {
  static instance = new ManagerKey();
  static getInstance(){
      return this.instance;
  }

  start(){
      
      this.keyStayList = {"KeyD" : false , "KeyA" : false , "KeyW" : false , "KeyS" : false };
      this.keyOnceList = {"KeyJ" : "ready" , "KeyK" : "ready"};

      document.addEventListener("keydown", (e) => {
        // console.log(this.keyStayList);
            this.keyStayList[e.code] = true;

          if(this.keyOnceList[e.code] == "ready"){
              this.keyOnceList[e.code] = "push";
          }

      }, false);

      document.addEventListener("keyup", (e) => {
          this.keyStayList[e.code] = false;

          if(this.keyOnceList[e.code] == "wait"){
              this.keyOnceList[e.code] = "ready";
          }
      }, false);

  }

  // key 값 반환 메소드
  getKeyStay(key){
      return this.keyStayList[key];
    
  }

  // 공격 버튼, keyUp 상태에선 공격이 안 나가도록
  // unitPlayer에 연결 시켜야함
  getKeyOnce(key){
      if(this.keyOnceList[key] == "push"){
          this.keyOnceList[key]  = "wait";
          return true;
      }else{
          return false;
      }
      
  }

}

// export class ManagerKey {
//   static instance = new ManagerKey();
//   static getInstance() {
//     return this.instance;
//   }

//   start() {
//     this.key = { right: false, left: false, up: false, down: false };
//     this.shootkey = { up: "ready" }; // ready , shoot , wait

//     document.addEventListener("keydown", this.keyDownHandler);
//     document.addEventListener("keyup", this.keyUpHandler);
//   }

//   keyDownHandler = (e) => {
//     console.log(this.key);
//     console.log(this.shootkey);
//     if (e.keyCode == 68) {
//       this.key["right"] = true;
//     } else if (e.keyCode == 65) {
//       this.key["left"] = true;
//     } else if (e.keyCode == 87) {
//       this.key["up"] = true;
//     } else if (e.keyCode == 83) {
//       this.key["down"] = true;
//     }

//     if (e.keyCode == 38) {
//       if (this.shootkey["up"] == "ready") {
//         this.shootkey["up"] = "shoot";
//       }
//     }
//   };

//   keyUpHandler = (e) => {
//     if (e.keyCode == 68) {
//       this.key["right"] = false;
//     } else if (e.keyCode == 65) {
//       this.key["left"] = false;
//     } else if (e.keyCode == 87) {
//       this.key["up"] = false;
//     } else if (e.keyCode == 83) {
//       this.key["down"] = false;
//     }

//     if (e.keyCode == 38) {
//       this.shootkey["up"] = "ready";
//     }
//   };

// }

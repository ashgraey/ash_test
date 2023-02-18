import { GameData } from "./gameData.js";

export class ManagerKey {
  static instance = new ManagerKey();
  static getInstance() {
    return this.instance;
  }

  start() {
    this.key = { right: false, left: false, up: false, down: false };
    this.shootkey = { up: "ready" }; // ready , shoot , wait

    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);

    keyDownHandler = (e) => {
      if (e.keyCode == 68) {
        this.key["right"] = true;
      } else if (e.keyCode == 65) {
        this.key["left"] = true;
      } else if (e.keyCode == 87) {
        this.key["up"] = true;
      } else if (e.keyCode == 83) {
        this.key["down"] = true;
      }

      if (e.keyCode == 38) {
        if (this.shootkey["up"] == "ready") {
          this.shootkey["up"] = "shoot";
        }
      }
    };

    keyUpHandler = (e) => {
      if (e.keyCode == 68) {
        this.key["right"] = false;
      } else if (e.keyCode == 65) {
        this.key["left"] = false;
      } else if (e.keyCode == 87) {
        this.key["up"] = false;
      } else if (e.keyCode == 83) {
        this.key["down"] = false;
      }

      if (e.keyCode == 38) {
        this.shootkey["up"] = "ready";
      }
    };
  }
}

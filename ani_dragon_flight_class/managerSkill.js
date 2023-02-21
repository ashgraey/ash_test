import { SkillBolt } from "./skillBolt.js";

export class ManagerSkill {
  static instance = new ManagerSkill();
  static getInstance() {
    return this.instance;
  }

  start() {
    // 빈 제이슨 생성
    this.skillObjectListAll = {};
    // skill bolt setting
    this.setSkillBolt();
  }

  // setting Bolt
  setSkillBolt() {
    var skillCount = 1;
    this.skillNameList = ["skillBolt"];
    for (var i = 0; i < this.skillNameList.length; i++) {
      var skillName = this.skillNameList[i];
      this.skillObjectListAll[skillName] = [];
      for (var j = 0; j < skillCount; j++) {
        // bolt == new SkillBolt()
        var bolt = this.getSkillBolt();
        this.skillObjectListAll[skillName].push(bolt);
      }
    }
    // console.log(this.skillObjectListAll["skillBolt"])
  }

  getSkillBolt() {
    var xPos = 1300;
    var yPos = 1300;
    var unitType = "player";
    var skillBolt = new SkillBolt(xPos, yPos, unitType);

    return skillBolt;
  }

  // 용도를 잘 모르겠음?
  managerSkillPlay(skillName, skillDirName, x, y, direction, power) {
    var skillObjectList = this.skillObjectListAll[skillName];
    for (var j = 0; j < skillObjectList.length; j++) {
      var skillObject = skillObjectList[j];
      if (skillObject.status == "ready") {
        skillObject.skillPlay(skillDirName, x, y, direction, power);
        break;
      }
    }
  }

  update() {
    for (var i = 0; i < this.skillNameList.length; i++) {
      var skillName = this.skillNameList[i];
      var skillObjectList = this.skillObjectListAll[skillName];
      for (var j = 0; j < skillObjectList.length; j++) {
        var skillObject = skillObjectList[j];
        if (
          skillObject.status == "play" &&
          skillObject.animationTimeOn == false
        ) {
          skillObject.status = "ready";
        }
        // skillObject == new SkillBolt()
        // console.log(this.skillObjectListAll);
        skillObject.update();
      }
    }
  }

  draw() {
    for (let i = 0; i < this.skillNameList.length; i++) {
      var skillName = this.skillNameList[i];
      var skillObjectList = this.skillObjectListAll[skillName];
      for (let j = 0; j < skillObjectList.length; j++) {
        var skillObject = skillObjectList[j];
        skillObject.draw();
      }
    }
  }
}

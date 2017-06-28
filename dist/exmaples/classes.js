"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hero {
    constructor(realName, HeroName, Htype) {
        this.realName = realName;
        this.HeroName = HeroName;
        this.Htype = Htype;
    }
    showType() {
        console.log(typeof this.Htype);
    }
}
exports.Hero = Hero;
var HeroType;
(function (HeroType) {
    HeroType[HeroType["Air"] = 0] = "Air";
    HeroType[HeroType["Fire"] = 1] = "Fire";
    HeroType[HeroType["Water"] = 2] = "Water";
    HeroType[HeroType["None"] = 3] = "None";
})(HeroType = exports.HeroType || (exports.HeroType = {}));

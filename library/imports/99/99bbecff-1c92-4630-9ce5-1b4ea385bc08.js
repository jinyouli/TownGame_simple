"use strict";
cc._RF.push(module, '99bbez/HJJGMJzlG06jhbwI', 'tower');
// scripts/tower.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        spriteFrames: {
            default: [],
            type: cc.SpriteFrame
        }
    },

    onLoad: function onLoad() {
        this.levelCount = 0;
    },

    updateTower: function updateTower() {
        if (this.levelCount < this.spriteFrames.length - 1) {
            this.levelCount++;
            this.node.getComponent(cc.Sprite).spriteFrame = this.spriteFrames[this.levelCount];
        } else {
            cc.log("满级");
        }
    },

    sellTower: function sellTower() {
        this.node.destroy();
    }

    // update (dt) {},
});

cc._RF.pop();
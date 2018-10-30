"use strict";
cc._RF.push(module, 'a110eflr9hKmLpOJ0pVULVc', 'enemy');
// scripts/enemy.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        spriteFrames: {
            default: [],
            type: cc.SpriteFrame
        }
    },

    onLoad: function onLoad() {},

    initWithData: function initWithData(type, partPointer) {
        this.node.getComponent(cc.Sprite).spriteFrame = this.spriteFrames[type];
        this.partPointer = partPointer;
    },

    update: function update(dt) {}

});

cc._RF.pop();
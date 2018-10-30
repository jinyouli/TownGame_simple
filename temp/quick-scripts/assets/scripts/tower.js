(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/tower.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '99bbez/HJJGMJzlG06jhbwI', 'tower', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=tower.js.map
        
(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/enemy.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a110eflr9hKmLpOJ0pVULVc', 'enemy', __filename);
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
        //# sourceMappingURL=enemy.js.map
        
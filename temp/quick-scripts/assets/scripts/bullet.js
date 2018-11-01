(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/bullet.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1ca12khC69EaZ1Wrk5lPLro', 'bullet', __filename);
// scripts/bullet.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function onLoad() {
        this.direction = cc.p(0, 1);
        this.speed = 300;
        this.screenSize = cc.p;
    },

    initWithData: function initWithData(tower, position) {
        this.direction = cc.pNormalize(cc.pSub(position, tower.position));var angle = cc.pAngleSigned(this.direction, cc.p(0, 1));this.node.rotation = 180 / Math.PI * angle;
    },

    update: function update(dt) {
        this.node.position = cc.pAdd(this.node.position, cc.pMult(this.direction, this.speed * dt));

        if (this.node.position.x < -1920 * 0.5 || this.node.position.x > 1920 * 0.5 || this.node.position.y > 1080 * 0.5 || this.node.position.y < -1080 * 0.5) {
            this.node.destroy();
        };
    }
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
        //# sourceMappingURL=bullet.js.map
        
(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/gameUILayer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b8ae9A2c2dI75JZAFb3c5NW', 'gameUILayer', __filename);
// scripts/gameUILayer.js

"use strict";

var _global = require("../global");

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cc.Class({
    extends: cc.Component,

    properties: {
        limitTimeLabel: {
            default: null,
            type: cc.Label
        }
    },

    onLoad: function onLoad() {
        this.nowTime = 3;
    },

    update: function update(dt) {
        if (this.nowTime > 0) {
            this.nowTime -= dt;

            if (this.nowTime - Math.floor(this.nowTime) < 0.1) {
                this.limitTimeLabel.string = Math.floor(this.nowTime);

                if (Math.floor(this.nowTime) == 0) {
                    this.nowTime = 0;
                    _global2.default.event.fire("game_start");
                };
            };
        }
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
        //# sourceMappingURL=gameUILayer.js.map
        
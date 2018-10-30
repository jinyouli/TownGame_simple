(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/game_world.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f7580yl2R1MVp1tjt3dJdeB', 'game_world', __filename);
// scripts/game_world.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        levelPrefab: {
            default: [],
            type: cc.Prefab
        }
    },

    onLoad: function onLoad() {
        var level = cc.instantiate(this.levelPrefab[0]);
        level.parent = this.node;
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
        //# sourceMappingURL=game_world.js.map
        
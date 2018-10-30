"use strict";
cc._RF.push(module, 'f7580yl2R1MVp1tjt3dJdeB', 'game_world');
// scripts/game_world.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        levelPrefab: {
            default: [],
            type: cc.Prefab
        },

        gameLayerNode: {
            default: null,
            type: cc.Node
        },

        gameUILayerNode: {
            default: null,
            type: cc.Node
        }
    },

    onLoad: function onLoad() {
        var level = cc.instantiate(this.levelPrefab[0]);
        level.parent = this.gameLayerNode;
    },

    update: function update(dt) {}
});

cc._RF.pop();
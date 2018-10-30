

cc.Class({
    extends: cc.Component,

    properties: {
        levelPrefab: {
            default : [],
            type : cc.Prefab
        },

        gameLayerNode: {
            default : null,
            type : cc.Node
        },

        gameUILayerNode: {
            default : null,
            type : cc.Node
        },
    },

    onLoad : function() {
        let level = cc.instantiate(this.levelPrefab[0]);
        level.parent = this.gameLayerNode;
    },

    update (dt) {

    },
});

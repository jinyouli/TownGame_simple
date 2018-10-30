

cc.Class({
    extends: cc.Component,

    properties: {
        levelPrefab: {
            default : [],
            type : cc.Prefab
        },
    },

    onLoad : function() {
        let level = cc.instantiate(this.levelPrefab[0]);
        level.parent = this.node;
    },

    update (dt) {

    },
});


cc.Class({
    extends: cc.Component,

    properties: {
        spriteFrames : {
            default : [],
            type: cc.SpriteFrame
        }
    },

    onLoad: function(){
        this.levelCount = 0;
    },

    updateTower: function (){
        if (this.levelCount < this.spriteFrames.length - 1) {
            this.levelCount ++;
            this.node.getComponent(cc.Sprite).spriteFrame = this.spriteFrames[this.levelCount];
        }
        else {
            cc.log("满级");
        }
    },

    sellTower: function (){
        this.node.destroy();
    },

    // update (dt) {},
});

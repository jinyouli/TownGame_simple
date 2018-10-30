
cc.Class({
    extends: cc.Component,

    properties: {
        spriteFrames: {
            default :[],
            type: cc.SpriteFrame
        }
    },

    onLoad : function (){

    },

    initWithData : function (type , partPointer){
        this.node.getComponent(cc.Sprite).spriteFrame = this.spriteFrames[type];
        this.partPointer = partPointer;
    },

    update: function (dt){
        
    }

});

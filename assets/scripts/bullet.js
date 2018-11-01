

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    onLoad: function () {
        this.direction = cc.p(0,1);
        this.speed = 300;
        this.screenSize = cc.p
    },

    initWithData : function(tower, position){ this.direction =
    cc.pNormalize(cc.pSub(position, tower.position)); let angle =
    cc.pAngleSigned(this.direction, cc.p(0,1)); this.node.rotation =
    (180/Math.PI) * angle; },

    update: function (dt) {
        this.node.position = cc.pAdd(this.node.position, cc.pMult(this.direction,this.speed *dt));

        if (this.node.position.x < -1920 * 0.5 || this.node.position.x > 1920 * 0.5 || this.node.position.y > 1080 * 0.5 || this.node.position.y < -1080* 0.5) {
            this.node.destroy();
            
        };
    },
});


















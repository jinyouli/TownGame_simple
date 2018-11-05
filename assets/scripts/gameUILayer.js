import global from "./global"

cc.Class({
    extends: cc.Component,

    properties: {
        limitTimeLabel : {
            default : null,
            type : cc.Label
        }
    },

    onLoad : function (){
        this.nowTime = 4;
    },

    update: function(dt) {
        if(this.nowTime > 0){
            this.nowTime -= dt;
                
            if ((this.nowTime - Math.floor(this.nowTime)) < 0.1 ) {
                this.limitTimeLabel.string = Math.floor(this.nowTime);

                if (Math.floor(this.nowTime) == 0) {
                    this.limitTimeLabel.string = "";
                    this.nowTime = 0;
                    global.event.fire("game_start");
                };
            };

        }
    },
});

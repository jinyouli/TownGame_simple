import global from "./global"

cc.Class({
    extends: cc.Component,

    properties: {
        
    },


    // onLoad () {},

    start () {

    },

    // update (dt) {},

    buttonClick: function (event , customData){
        cc.log("click == " + customData);
        global.event.fire(customData + "_tower",);
    }

});

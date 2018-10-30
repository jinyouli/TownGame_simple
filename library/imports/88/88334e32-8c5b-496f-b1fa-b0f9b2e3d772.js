"use strict";
cc._RF.push(module, '883344yjFtJb7H6sPmy49dy', 'update_menu');
// scripts/update_menu.js

"use strict";

var _global = require("../global");

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cc.Class({
    extends: cc.Component,

    properties: {},

    // onLoad () {},

    start: function start() {},


    // update (dt) {},

    buttonClick: function buttonClick(event, customData) {
        cc.log("click == " + customData);
        _global2.default.event.fire(customData + "_tower");
    }

});

cc._RF.pop();
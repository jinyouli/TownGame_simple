"use strict";
cc._RF.push(module, 'e52e8Wwxi9HqJtnmZ7LcCp/', 'build_menu');
// scripts/build_menu.js

"use strict";

var _global = require("./global");

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},


    buttonClick: function buttonClick(event, customData) {
        cc.log("test" + customData);
        _global2.default.event.fire("build_tower", customData);
    }

    // update (dt) {},
});

cc._RF.pop();
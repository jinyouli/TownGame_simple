"use strict";
cc._RF.push(module, '242a4I/fJVKkriFyUCOaUys', 'event_listener');
// scripts/event_listener.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var EventListener = function EventListener(obj) {

    var Register = [];
    obj.on = function (name, method) {
        if (!Register.hasOwnProperty(name)) {
            Register[name] = [];
        }
        Register[name].push(method);
    };

    obj.fire = function (name) {
        if (Register.hasOwnProperty(name)) {
            var handleList = Register[name];
            for (var i = 0; i < handleList.length; i++) {
                var handler = handleList[i];
                var args = [];
                for (var j = 1; j < arguments.length; j++) {
                    args.push(arguments[j]);
                }
                handler.apply(this, args);
            }
        };
    };

    obj.off = function (name, method) {
        if (Register.hasOwnProperty(name)) {
            var handleList = Register[name];
            for (var i = 0; i < handleList.length; i++) {
                if (handleList[i] == method) {
                    handleList.splice(i, 1);
                };
            }
        }
    };
    return obj;
};

exports.default = EventListener;
module.exports = exports["default"];

cc._RF.pop();
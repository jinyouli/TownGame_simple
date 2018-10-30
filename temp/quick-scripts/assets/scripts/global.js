(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/global.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0dbc87nfg5O+oh9lNbjN8kJ', 'global', __filename);
// scripts/global.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _event_listener = require("./event_listener");

var _event_listener2 = _interopRequireDefault(_event_listener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var global = global || [];
global.event = (0, _event_listener2.default)([]);
exports.default = global;
module.exports = exports["default"];

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=global.js.map
        
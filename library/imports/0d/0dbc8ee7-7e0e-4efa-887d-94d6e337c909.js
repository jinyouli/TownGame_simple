"use strict";
cc._RF.push(module, '0dbc87nfg5O+oh9lNbjN8kJ', 'global');
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
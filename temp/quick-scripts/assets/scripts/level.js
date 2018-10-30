(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/level.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '95b9d2UkWxG2LqlahSMKL0F', 'level', __filename);
// scripts/level.js

"use strict";

var _global = require("../global");

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TowerNodeState = {
    Invalid: -1,
    Null: 1,
    BuildMenu: 2,
    Tower: 3,
    UpdateMenu: 4
};

cc.Class({
    extends: cc.Component,

    properties: {

        enemyPathNodes: {
            default: [],
            type: cc.Node
        },

        towerPosNodes: {
            default: [],
            type: cc.Node
        },

        buildTowerPrefab: {
            default: null,
            type: cc.Prefab
        },

        towerPrefab: {
            default: [],
            type: cc.Prefab
        },

        updateTowerPrefab: {
            default: null,
            type: cc.Prefab
        }

    },

    onLoad: function onLoad() {
        for (var i = 0; i < this.towerPosNodes.length; i++) {
            var node = this.towerPosNodes[i];
            this.setState(node, TowerNodeState.Null);
            this.setTouchEvent(node);
        }

        _global2.default.event.on("build_tower", this.buildTower.bind(this));
        _global2.default.event.on("update_tower", this.updateTower.bind(this));
        _global2.default.event.on("sell_tower", this.sellTower.bind(this));
    },

    setTouchEvent: function setTouchEvent(node) {

        node.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.log("touch node name == " + event.target.name);

            if (node.state == TowerNodeState.Null) {
                this.showBuildMenu(event.target);
            } else if (node.state == TowerNodeState.Tower) {
                this.showUpdateMenu(event.target);
            }
        }, this);
    },

    showBuildMenu: function showBuildMenu(node) {

        this.closeMenu();

        if (node.state == TowerNodeState.Null) {
            var menu = cc.instantiate(this.buildTowerPrefab);
            menu.parent = this.node;
            menu.position = node.position;
            this.setState(node, TowerNodeState.BuildMenu);
            node.menu = menu;
        };
    },

    showUpdateMenu: function showUpdateMenu(node) {
        this.closeMenu();
        var menu = cc.instantiate(this.updateTowerPrefab);
        menu.parent = this.node;
        menu.position = node.position;
        this.setState(node, TowerNodeState.UpdateMenu);
        node.menu = menu;
    },

    closeMenu: function closeMenu() {
        for (var i = 0; i < this.towerPosNodes.length; i++) {
            var node = this.towerPosNodes[i];
            if (node.state == TowerNodeState.BuildMenu) {
                node.menu.destroy();
                this.setState(node, TowerNodeState.Null);
                return node;
            } else if (node.state == TowerNodeState.UpdateMenu) {
                node.menu.destroy();
                this.setState(node, TowerNodeState.Tower);
                return node;
            };
        }
    },

    setState: function setState(node, state) {
        if (node.state == state) {
            return;
        }

        switch (state) {
            case TowerNodeState.Null:
                break;
            case TowerNodeState.BuildMenu:
                break;
            default:
                break;
        }
        node.state = state;
    },

    buildTower: function buildTower(data) {
        cc.log("build tower " + data);
        var node = this.closeMenu();
        var tower = cc.instantiate(this.towerPrefab[data]);
        tower.parent = this.node;
        tower.position = node.position;
        this.setState(node, TowerNodeState.Tower);
        node.tower = tower;
    },

    onDestory: function onDestory() {
        _global2.default.event.off("build_tower", this.buildTower);
    },

    updateTower: function updateTower() {
        var node = this.closeMenu();
        node.tower.getComponent("tower").updateTower();
    },

    sellTower: function sellTower() {
        var node = this.closeMenu();
        node.tower.getComponent("tower").sellTower();
    }

    // update (dt) {},
});

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
        //# sourceMappingURL=level.js.map
        
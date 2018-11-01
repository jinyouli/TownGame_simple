(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/tower.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '99bbez/HJJGMJzlG06jhbwI', 'tower', __filename);
// scripts/tower.js

"use strict";

var _global = require("./global");

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cc.Class({
    extends: cc.Component,

    properties: {
        spriteFrames: {
            default: [],
            type: cc.SpriteFrame
        },

        towerType: ""
    },

    onLoad: function onLoad() {
        var _this = this;

        this.levelCount = 0;
        this.currentDamage = 0;
        this.lookRange = 0;
        this.currentAttackRange = 0;
        this.shootBulletDt = 0;
        this.currentBulletDt = 0;

        cc.loader.loadRes("./tower_config", function (err, result) {
            if (err) {
                cc.log("err = " + err);
            } else {
                cc.log("success = " + JSON.stringify(result));
                _this.towerConfig = result[_this.towerType];
                _this.currentDamage = _this.towerConfig.damage[_this.levelCount];
                _this.currentAttackRange = _this.towerConfig.actack_range[_this.levelCount];
                _this.lookRange = _this.towerConfig.look_range;
                _this.shootBulletDt = _this.towerConfig.shoot_dt[_this.levelCount];
            }
        });
    },

    updateTower: function updateTower() {
        if (this.levelCount < this.spriteFrames.length - 1) {
            this.levelCount++;
            this.node.getComponent(cc.Sprite).spriteFrame = this.spriteFrames[this.levelCount];

            this.currentDamage = this.towerConfig.damage[this.levelCount];
            this.currentAttackRange = this.towerConfig.actack_range[this.levelCount];
            this.lookRange = this.towerConfig.look_range;
        } else {
            cc.log("满级");
        }
    },

    sellTower: function sellTower() {
        this.node.destroy();
    },

    isAttack: function isAttack() {
        if (this.enemy == undefined) {
            return true;
        };

        return false;
    },

    setEnemy: function setEnemy(enemy) {

        var distance = cc.pDistance(enemy.position, this.node.position);

        if (distance < 400) {
            this.enemy = enemy;
        };
    },

    update: function update(dt) {
        if (this.enemy != undefined) {
            var direction = cc.pSub(this.enemy.position, this.node.position);

            var angle = cc.pAngleSigned(direction, cc.p(0, 1));
            this.node.rotation = 180 / Math.PI * angle;

            if (this.currentBulletDt > this.shootBulletDt) {
                this.currentBulletDt = 0;
                this.shootBullet();
            } else {
                this.currentBulletDt += dt;
            }

            var distance = cc.pDistance(this.enemy.position, this.node.position);
            if (distance > this.currentAttackRange && this.enemy.getComponent("enemy").isLiving() == false) {
                this.enemy = undefined;
            };
        }
    },

    shootBullet: function shootBullet() {
        _global2.default.event.fire("addBullet", this.node, this.enemy.position);
    },

    getDamage: function getDamage() {
        return this.currentDamage;
    }

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
        //# sourceMappingURL=tower.js.map
        
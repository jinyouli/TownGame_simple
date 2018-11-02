"use strict";
cc._RF.push(module, 'a110eflr9hKmLpOJ0pVULVc', 'enemy');
// scripts/enemy.js

"use strict";

var EnemyState = {
    Invalid: -1,
    Running: 1,
    EndPath: 2,
    Dead: 3
};

cc.Class({
    extends: cc.Component,

    properties: {
        spriteFrames: {
            default: [],
            type: cc.SpriteFrame
        },

        lifeProgressBar: {
            default: null,
            type: cc.ProgressBar
        }
    },

    onLoad: function onLoad() {
        this.state = EnemyState.Invalid;
        this.node.opacity = 0;
        this.currentPathCount = 0;
        this.currentHealth = 0;
        this.totalHealth = 1;
    },

    initWithData: function initWithData(type, partPointer) {
        var _this = this;

        this.node.getComponent(cc.Sprite).spriteFrame = this.spriteFrames[type];
        this.partPointer = partPointer;

        this.node.position = this.partPointer[0].position;

        cc.loader.loadRes("./enemy_config", function (err, result) {
            if (err) {
                cc.log("err == " + err);
            } else {
                // cc.log("result == " + JSON.stringify(result));
                var config = result["enemy_" + type];
                _this.speed = config.speed;
                _this.currentHealth = config.health;
                _this.totalHealth = config.health;
                _this.setState(EnemyState.Running);
            }
        });
    },

    update: function update(dt) {
        if (this.state == EnemyState.Running) {
            var distance = cc.pDistance(this.node.position, this.partPointer[this.currentPathCount].position);
            if (distance < 10) {
                this.currentPathCount++;

                if (this.currentPathCount >= this.partPointer.length) {
                    this.setState(EnemyState.EndPath);
                    return;
                };

                this.direction = cc.pNormalize(cc.pSub(this.partPointer[this.currentPathCount].position, this.node.position));
            } else {
                this.node.position = cc.pAdd(this.node.position, cc.pMult(this.direction, this.speed * dt));
            }
        };

        this.lifeProgressBar.progress = this.currentHealth / this.totalHealth;
    },

    setState: function setState(state) {
        if (this.state == state) {
            return;
        };

        switch (state) {
            case EnemyState.Running:
                this.node.opacity = 255;
                break;
            case EnemyState.Dead:
                var action = cc.fadeOut(1);

                var sequence = cc.sequence(action, cc.callFunc(function () {
                    console.log("call func actin!!!");
                    this.node.destroy();
                }, this));
                this.node.runAction(sequence);

                break;
            case EnemyState.EndPath:
                break;
            default:
                break;
        }
        this.state = state;
    },

    isLiving: function isLiving() {
        if (this.state == EnemyState.Running) {
            return true;
        }
        return false;
    },

    isDead: function isDead() {
        if (this.state == EnemyState.Dead) {
            return true;
        };
        return false;
    },

    beAttacked: function beAttacked(damage) {
        this.currentHealth -= damage;
        if (this.currentHealth < 0) {
            this.currentHealth = 0;
            this.setState(EnemyState.Dead);
            // this.node.destroy();
        };
    }

});

cc._RF.pop();
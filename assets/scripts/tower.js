
cc.Class({
    extends: cc.Component,

    properties: {
        spriteFrames : {
            default : [],
            type: cc.SpriteFrame
        },

        towerType : ""
    },

    onLoad: function(){
        this.levelCount = 0;
        this.currentDamage = 0;
        this.lookRange = 0;
        this.currentAttackRange = 0;

        cc.loader.loadRes("./tower_config",(err, result)=>{
            if (err) {
                cc.log("err = " + err);
            }else {
                cc.log("success = " + JSON.stringify(result));
                this.towerConfig = result[this.towerType];
                this.currentDamage = this.towerConfig.damage[this.levelCount];
                this.currentAttackRange = this.towerConfig.actack_range[this.levelCount];
                this.lookRange = this.towerConfig.look_range;
            }
        });
    },

    updateTower: function (){
        if (this.levelCount < this.spriteFrames.length - 1) {
            this.levelCount ++;
            this.node.getComponent(cc.Sprite).spriteFrame = this.spriteFrames[this.levelCount];

            this.currentDamage = this.towerConfig.damage[this.levelCount];
            this.currentAttackRange = this.towerConfig.actack_range[this.levelCount];
            this.lookRange = this.towerConfig.look_range;
        }
        else {
            cc.log("满级");
        }
    },

    sellTower: function (){
        this.node.destroy();
    },

    isAttack: function (){
        if (this.enemy == undefined) {
            return true;
        };

        return false;
    },

    setEnemy: function (enemy){

        let distance = cc.pDistance(enemy.position,this.node.position);

        if (distance < 200) {
            this.enemy = enemy;
        };  
        this.enemy = enemy;      
    },

    update : function(dt){
        if(this.enemy != undefined){
            let direction = cc.pSub(this.enemy.position, this.node.position);

            let angle = cc.pAngleSigned(direction, cc.p(0,1));
            this.node.rotation = (180 / Math.PI) * angle;

            
        }
    }

});










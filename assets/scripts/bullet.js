

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    onLoad: function () {
        this.direction = cc.p(0,1);
        this.speed = 300;
    },

    initWithData : function(tower, position, enemyNodeList){ 

        this.direction = cc.pNormalize(cc.pSub(position, tower.position)); 
        this.node.position = cc.pAdd(tower.position, cc.pMult(this.direction, 100));
        let angle = cc.pAngleSigned(this.direction, cc.p(0,1)); 
        this.node.rotation = (180/Math.PI) * angle; 
        this.enemyNodeList = enemyNodeList;
        this.damage = tower.getComponent("tower").getDamage();
    },

    update: function (dt) {

        this.node.position = cc.pAdd(this.node.position, cc.pMult(this.direction,this.speed *dt));

        for(let i=0; i < this.enemyNodeList.length; i++){
            let enemy = this.enemyNodeList[i];

            if (enemy) {
                if (enemy.getComponent("enemy").isLiving()) {
                let distance = cc.pDistance(enemy.position,this.node.position);
            if (distance < (enemy.width * 0.5 + this.node.width * 0.5)) {

                enemy.getComponent("enemy").beAttacked(this.damage);

                this.node.destroy();
            };
            };
            };
        }        

        if (this.node.position.x < -1920 * 0.5 || this.node.position.x > 1920 * 0.5 || this.node.position.y > 1080 * 0.5 || this.node.position.y < -1080* 0.5) {
            this.node.destroy();
            
        };
    },
});


















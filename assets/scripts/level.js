import global from "./global"

var map_gen = require("map_gen");

const TowerNodeState = {
    Invalid : -1,
    Null : 1,
    BuildMenu : 2,
    Tower : 3,
    UpdateMenu : 4
};


cc.Class({
    extends: cc.Component,

    properties: {
        
        map : {
            type: map_gen,
            default : null,
        },

        // enemyPathNodes: {
        //     default : [],
        //     type : cc.Node
        // },

        towerPosNodes: {
            default : [],
            type : cc.Node
        },

        buildTowerPrefab: {
            default: null,
            type : cc.Prefab
        },

        towerPrefab: {
            default: [],
            type : cc.Prefab
        },

        updateTowerPrefab: {
            default: null,
            type : cc.Prefab
        },

        enemyPrefab : {
            default: null,
            type : cc.Prefab
        },

        bulletPrefab : {
            default: null,
            type : cc.Prefab
        }
    },

    onLoad: function() {

        for(let i=0; i < this.towerPosNodes.length; i++){
            let node = this.towerPosNodes[i];
            this.setState(node,TowerNodeState.Null);
            this.setTouchEvent(node);
        }

        global.event.on("build_tower",this.buildTower.bind(this));
        global.event.on("update_tower",this.updateTower.bind(this));
        global.event.on("sell_tower",this.sellTower.bind(this));
        global.event.on("game_start",this.gameStart.bind(this));
        global.event.on("addBullet",this.addBullet.bind(this));

        this.currentWaveCount = 0;
        this.enemyCount = 0;
        this.addEnemyTime = 0;
        this.addWaveCurrentTime = 0;

        this.enemyNodeList = [];
    },

    start () {
        this.road_set = this.map.get_road_set();
        this.enemyPathNodes = this.road_set[0];
        cc.log("路径 == " + this.enemyPathNodes);

    },

    setTouchEvent: function(node){

        node.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.log("touch node name == " + event.target.name);

            if(node.state == TowerNodeState.Null){
                this.showBuildMenu(event.target);
            }
            else if(node.state == TowerNodeState.Tower){
                this.showUpdateMenu(event.target);
            }
            
        }, this);
    },

    showBuildMenu: function (node){

        this.closeMenu();

        if (node.state == TowerNodeState.Null) {
            let menu = cc.instantiate(this.buildTowerPrefab);
            menu.parent = this.node;
            menu.position = node.position;
            this.setState(node, TowerNodeState.BuildMenu);
            node.menu = menu;
        };
    },

    showUpdateMenu: function(node){
        this.closeMenu();
        let menu = cc.instantiate(this.updateTowerPrefab);
        menu.parent = this.node;
        menu.position = node.position;
        this.setState(node, TowerNodeState.UpdateMenu);
        node.menu = menu;

    },

    closeMenu: function (){
        for (let i = 0; i < this.towerPosNodes.length ; i++){
            let node = this.towerPosNodes[i];
            if (node.state == TowerNodeState.BuildMenu) {
                node.menu.destroy();
                this.setState(node,TowerNodeState.Null);
                return node;
            }
            else if (node.state == TowerNodeState.UpdateMenu) {
                node.menu.destroy();
                this.setState(node,TowerNodeState.Tower);
                return node;
            };
        }
    },

    setState: function (node, state){
        if(node.state == state){
            return;
        }

        switch (state){
            case TowerNodeState.Null:
                break;
            case TowerNodeState.BuildMenu:
                break;
            default:
                break;
        }
        node.state = state;
    },

    buildTower: function(data){
        cc.log("build tower " + data);
        let node = this.closeMenu();
        let tower = cc.instantiate(this.towerPrefab[data]);
        tower.parent = this.node;
        tower.position = node.position;
        this.setState(node,TowerNodeState.Tower);
        node.tower = tower;

    },

    onDestory: function(){
        global.event.off("build_tower", this.buildTower);
    },

    updateTower: function(){
        let node = this.closeMenu();
        node.tower.getComponent("tower").updateTower();
    },

    sellTower: function(){
        let node = this.closeMenu();
        node.tower.getComponent("tower").sellTower();
        this.setState(node,TowerNodeState.Null);
        node.tower = undefined;
    },

    gameStart: function(){ 
        cc.loader.loadRes ("./level_config", (err, result) => {
            if(err){
                cc.log("load err = " + err);
            }else {
                cc.log("load config = ", JSON.stringify(result));

                let config = result["level_1"];
                let waves = config["waves"];
                this.config = config;
                this.wavesConfig = waves;
                this.currentWaveConfig = waves[this.currentWaveCount];
            }
        });
    },

    addWave: function() {

    },

    addEnemy: function (type){

        cc.log ("add type == " + type);
        let enenmy = cc.instantiate(this.enemyPrefab);
        enenmy.getComponent("enemy").initWithData(type, this.enemyPathNodes);
        enenmy.parent = this.node;

        this.enemyNodeList.push(enenmy);
    },

    addBullet: function(tower, position) {
        let bullet = cc.instantiate(this.bulletPrefab);
        bullet.position = tower.position;
        bullet.parent = this.node;
        bullet.getComponent("bullet").initWithData(tower, position, this.enemyNodeList);
    },

    update: function (dt){

        if(this.currentWaveConfig){

            if(this.addEnemyTime > this.currentWaveConfig.dt){

                this.addEnemyTime = 0;
                this.enemyCount ++;
                this.addEnemy(this.currentWaveConfig.type);

                if (this.enemyCount >= this.currentWaveConfig.count) {
                    this.currentWaveConfig = undefined;
                    this.enemyCount = 0;
                }; 
            }
            else {
                this.addEnemyTime += dt;
            }
        }
        else {
            if (this.config) {
                if (this.addWaveCurrentTime > this.config.dt) {

                this.currentWaveConfig = this.wavesConfig[this.currentWaveCount];
                if (this.currentWaveCount < this.wavesConfig.length ) {
                    this.currentWaveCount ++;
                }else {
                    this.currentWaveConfig = undefined;
                };

                this.addWaveCurrentTime = 0;
            }else{

                this.addWaveCurrentTime += dt;
            };
            };

            for(let i=0; i<this.towerPosNodes.length; i++){
                let tower = this.towerPosNodes[i].tower;

                if (tower != undefined) {

                    for(let j=0; j < this.enemyNodeList.length; j++){
                        var enemy = this.enemyNodeList[j];

                        if (enemy.getComponent("enemy").isLiving()) {
                            tower.getComponent("tower").setEnemy(enemy);
                        }
                        else if(enemy.getComponent("enemy").isDead()){
                            this.enemyNodeList.splice(j , 1);
                            enemy.destroy();
                        }
                    }
                };
            }
        }
    }

});








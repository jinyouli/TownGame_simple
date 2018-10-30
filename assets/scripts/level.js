import global from '../global'

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
        
        enemyPathNodes: {
            default : [],
            type : cc.Node
        },

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
    }

    // update (dt) {},
});








const EventListener = function(obj){

    let Register = [];
    obj.on = function(name , method){
        if(!Register.hasOwnProperty(name)){
            Register[name] = [];
        }
        Register[name].push(method);
    };

    obj.fire = function(name){
        if (Register.hasOwnProperty(name)) {
            let handleList = Register[name];
            for(let i=0 ; i < handleList.length; i++){
                let handler = handleList[i];
                let args = [];
                for(let j = 1; j < arguments.length; j++){
                    args.push(arguments[j]);
                }
                handler.apply(this, args);
            }
        };
    };

    obj.off = function(name, method){
        if(Register.hasOwnProperty(name)){
            let handleList = Register[name];
            for(let i=0; i<handleList.length;i++){
                if (handleList[i] == method) {
                    handleList.splice(i,1);
                };
            }
        }
    };
    return obj;
};

export default EventListener











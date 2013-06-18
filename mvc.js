var Model = function(){
    this.name = "";
    this.listenerMap = {};
};

Model.prototype.setName = function(newName){
    this.name = newName;
    this.trigger("nameChanged", newName);
};

Model.prototype.setReports = function(reports){
    this.reports = reports;
    this.trigger("reportChanged", reports);
};

Model.prototype.trigger = function(eventName, data){
    console.log(eventName);
    var listeners = this.listenerMap[eventName];
    console.log(listeners);
    var listener;
    for(var i=0;listeners&&i<listeners.length;i++){
        listener = listeners[i];
        if(listener && typeof listener.func=="function" && listener.event===eventName){
            listener.func.call(listener.obj, data);
        }
    }
};

Model.prototype.addListener = function(event, func, obj){
    // should check if already registered
    var listeners = this.listenerMap[event];
    if(!listeners){
        listeners = [];
    }
    listeners.push({event:event, func: func, obj: obj});
    this.listenerMap[event] = listeners;
    console.log("add listener@" + event);
};

var View = function(name){
    this. name= name;
};

View.prototype.update = function(data){
    console.log(this.name + ":" + data);
};

var Controller = function(actions){
    for(var i=0;i<actions.length;i++){
        var action = actions[i];
        var _model = action.model;
        _model.addListener(action.event, action.func, action.obj);
    }
};

var model = new Model();
var view1 = new View("view1");
var view2 = new View("view2");
var controller = new Controller([
    {'model': model, 'event': 'nameChanged', 'func': view1.update, 'obj': view1},
    {'model': model, 'event': 'reportChanged', 'func': view2.update, 'obj': view2}
]);

model.setName("new name here");
model.setReports(['a','b']);

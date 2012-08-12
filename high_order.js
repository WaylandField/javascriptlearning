var highOrder = function(name, process){
    this.name = name;
    alert(process(this.name));
};

var proc = function(name){
    return name + "_processed";
};

highOrder("mosky",proc);
highOrder("mosky1", function(name){return "process_"+name;});
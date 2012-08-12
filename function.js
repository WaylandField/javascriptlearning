var foo = function(name){
    this.name = name;
    alert(this.name);
}

function foo1(name){
    this.name = name;
    alert(this.name);
}

foo("jj");
foo1("jj1");
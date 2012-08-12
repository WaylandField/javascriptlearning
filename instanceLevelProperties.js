var Cat = function(name){
    this.name =  name;
    this.age = 1;
};

Cat.prototype.grow = function(){
    this.age++;
};

var myCat = new Cat("mosky");
var yourCat = new Cat("lulu");

myCat.grow();
alert(myCat.age);
alert(yourCat.age);

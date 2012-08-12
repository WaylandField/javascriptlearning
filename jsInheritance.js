var Animal = function(){
    this.count = 1;
};

Animal.prototype.birth = function(){
    this.birthday = new Date();
};

Animal.prototype.reproduce = function(){
    this.count+=1000;
    alert(this.count);
};

Animal.prototype.die = function(){
    this.state = "Dead";
};

var Cat = function(){
    this.count=1;
};

function extend(Class, baseClass){

    Class.prototype=new baseClass();
    Class.prototype._super = Class.prototype.__proto__;
    for(var method in Class.prototype._super){
	if(Class.prototype._super[method] instanceof Function){
	    Class.prototype[method] = Class.prototype._super[method];
	}
    };
};

extend(Cat, Animal);

Cat.prototype.reproduce = function(){
    this._super['reproduce'].apply(this);
    this.count+=1;
    alert(this.count);
};

var Dog = function(){
    this.count = 100;
};
extend(Dog, Animal);
Dog.prototype.reproduce = function(){
    this.count +=2;
    alert(this.count);
};

var cat1 = new Cat();
cat1.reproduce();
var dog = new Dog();
dog.reproduce();
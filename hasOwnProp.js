var People = function(){
    this.name = "name";
};

People.prototype.sayName = function(){
    return this.name;
};

People.prototype.attr = "attr";

var farmer = new People();
farmer.land = "land";

alert(farmer.hasOwnProperty("name"));
alert(farmer.hasOwnProperty("land"));
alert(farmer.hasOwnProperty("sayName"));
alert(farmer.hasOwnProperty("attr"));
var Car = function(year) {
  this.year = year;
  this.miles = 0;
};

Car.prototype.drive = function(dist) {
  this.miles += dist;
};

var car = new Car(2011);
alert(car.year);
alert(car.miles);
car.drive(10);
alert(car.miles);
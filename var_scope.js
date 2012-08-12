var globalVar = 1;

var foo = function() {
  globalVar = 4;
  bar = 5;
  var localVar = 2;
  
  alert(globalVar);
  alert(localVar);
  
  {
    var notConfined = 11; //undefined value until here, but variable is function scope.
  }
  
  alert(notConfined);
};


alert(globalVar);
foo();
alert(globalVar);
//alert(localVar); //error if you try to access this
alert(bar);
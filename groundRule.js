function missSemicolon(){
    
}
(function(){
     
})();


//(function(){})()(function(){})()



globalVar = 1;

var foo = function() {
  globalVar = 4;
  bar = 5;
  var localVar = 2;
  
  println(globalVar);
  println(localVar);
  
  {
    var notConfined = 11; //undefined value until here, but variable is function scope.
  }
  
  println(notConfined);
}


println(globalVar);
foo();
println(globalVar);
///println(localVar); //error if you try to access this
println(bar);

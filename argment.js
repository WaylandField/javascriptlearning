var concat = function(str){
   return this+str;
};


console.log(concat.apply("name",["name"]));
console.log(concat.call("name","name"));
var concat = function(str){
   return this+str;
};


alert(concat.apply("name",["name"]));
alert(concat.call("name","name"));
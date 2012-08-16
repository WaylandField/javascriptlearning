var gru = function(number) {
  if (number < 10) {
    throw "too small";
  }
  if (number > 100) {
    throw new Error("too big");
  }
  
  return number;
}

var callGru = function(number) {
  try {
    gru(number);
  } catch(ex) {
    alert("oops... " + ex);
    if (ex instanceof Error) {
      alert("The message is " + ex.message);
    }
  } finally {
    alert("finally block called...");
  }
}

callGru(10);
callGru(1);
callGru(101);

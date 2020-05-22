let f = function (a, b) {
    if(arguments.length === f.length){
      console.log('We have a match.');
    }
    else {
      console.log('There is no match.');
      
    }
};

//determine if the function received the number of params it expected
f(1); // There is no match.
f(1, 2); // We have a match.
f(1, 2, 3); // There is no match.
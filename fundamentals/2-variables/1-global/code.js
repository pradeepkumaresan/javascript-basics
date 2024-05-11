var x = 10;

if (x === 10) {
  // this local variable x shadows the global variable x
  var x = 20;

  
}

console.log(x); 

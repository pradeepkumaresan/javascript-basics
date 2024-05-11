var x = 5; // global
function someThing() {
  var x = 3; // local
}
someThing(); 
console.log(x); // 5

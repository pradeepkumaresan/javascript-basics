var x = 5; // global
function someThing() {
  x = 3; // global!
}
someThing(); 
console.log(x); // 3

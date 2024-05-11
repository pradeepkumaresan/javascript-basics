/**
 * The arguments object is an Array-like object ( arguments ) 
 * accessible inside functions that contains the values of the 
 * arguments passed to that function.
 */

function sum() {
  let total = 0;
  for (let i = 0, len = arguments.length; i < len; ++i) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(10, 20, 30)); // returns 60
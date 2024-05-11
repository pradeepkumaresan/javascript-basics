/**
 * All variables are accessible within functions.
 */
function variableScope() {

  var x = 10; // function scoped. so not visible outside the function
  let y = 20; // block scoped. so not visible outside the block, i.e. the function, for, if, etc
  const z = 30; // same as let
}

console.log(x); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined
console.log(z); // ReferenceError: z is not defined

variableScope();
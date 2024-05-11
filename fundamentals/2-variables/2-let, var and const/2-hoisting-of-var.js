/**
 * var declared variables are accessible anywhere 
 * in the function scope.
 */
var a = undefined;
var a = 10;


if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}
if (true) {
  var a = 40;
  let b = 40;
}

console.log(a); // 10
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined
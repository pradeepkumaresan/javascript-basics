/**
 * The unary(+) operator is used to convert a variable to a number.
 */
var x = "100";
var y = +x;
console.log(typeof x, typeof y, y); // string, number, 100

var a = "Hello";
var b = +a;
console.log(typeof a, typeof b, b); // string, number, NaN
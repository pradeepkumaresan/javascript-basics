/**
 * The typeof operator checks if a value has type of primitive type which 
 * can be one of boolean, function, object, number, string, undefined 
 * and symbol (ES6).
 */

const x = "Hello World";
const y = new String("Hello World");

console.log(typeof x); // returns 'string'
console.log(typeof y); // returns 'object'


/**
 * The instanceof is a binary operator, accepting an object and a constructor. 
 * It returns a boolean indicating whether or not the object has the given 
 * constructor in its prototype chain.
 */
const a = "Hello World";
const b = new String("Hello World");

console.log(a instanceof String); // returns false
console.log(b instanceof String); // returns true
/**
 * conditions for falsy values:
 * null, false, undefined, 0, empty string, or NaN
 */
const zero = 0;
const nullValue = null;
const undefinedValue = undefined;
const emptyString = '';

const emptyObject = {};
const emptyArray = [];
const numbers = [10, 20, 30];

/**
 * The double exclamation mark (!!) is used to convert a value 
 * to a boolean.
 */
// falsy values
console.log(!!zero); // false
console.log(!!nullValue); // false
console.log(!!undefinedValue); // false
console.log(!!emptyString); // false

// truthy values
console.log(!!emptyObject); // true
console.log(!!emptyArray); // true
console.log(!!numbers); // true

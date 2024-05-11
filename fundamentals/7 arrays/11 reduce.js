/**
 * reduce method executes a reducer function (that you provide) 
 * on each element of the array, resulting in a single output value.
 */

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer)); // Output: 10
console.log(array1.reduce(reducer, 5)); // Output: 15
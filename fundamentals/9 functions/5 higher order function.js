/**
 * A Higher-Order function is a function that receives a 
 * function as an argument or returns the function as output.
 */

const array = [10, 20, 30];

const result = array.map(function (item) {
  return item * 2;
});
console.log(result); // [20, 40, 60]

// also filter, forEach, reduce, every, some, find, findIndex, etc. are higher-order functions
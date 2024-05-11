/**
 * 
 * Arrow syntax automatically binds 'this' to the surrounding code's context
 */

let greet = () => console.log('Hello');
greet(); // Hello

let greet1 = x => console.log(x);
greet1('Hello'); // Hello 


let age = 25;



// you can also use the arrow functions as an expression
let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Adult



// multiline arrow function
let area = (r) => {
  const pi = 3.14;
  return pi * r * r;
}

let result = area(10);
console.log(result); // 314
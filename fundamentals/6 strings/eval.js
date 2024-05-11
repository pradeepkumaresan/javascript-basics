console.log(eval('10 + 20')); // 30

let x = 10;
let y = 20;
let z = '50';
console.log(eval('x + y + 1')); // returns 31
console.log(eval(z));           // returns 50

/**
 * the eval() function evaluates JavaScript code represented as a string.
 * The string can be a JavaScript expression, variable, statement, or sequence of statements.
 * it is not recommended to use eval() in your code because it can be dangerous.
 * It allows execution of arbitrary code, which can lead to security vulnerabilities.
 */


console.log(eval(new String('10 + 20'))); // returns a String object containing "10 + 20"


// work around
let expression = new String('10 + 20');
console.log(eval(expression.toString())); // returns 30
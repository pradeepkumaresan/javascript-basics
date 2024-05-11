/**
 * In javaScript, functions can be stored as a variable inside 
 * an object or an array as well as it can be passed as an 
 * argument or be returned by another function. 
 * That makes function first-class function in JavaScript.
 */

const message = function() {
  console.log("Hello World!");
}

message(); // Invoke it using the variable



// pass function as an argument
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
 console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");






// return a function
function sayHello() {
  return function() {
     console.log("Hello!");
  }
}




// using a variable to store the returned function
const sayHello = function() {
  return function() {
     console.log("Hello!");
  }
}
const myFunc = sayHello();
myFunc();




// invoking the returned function directly using double parentheses
function sayHello() {
  return function() {
     console.log("Hello!");
  }
}
sayHello()();
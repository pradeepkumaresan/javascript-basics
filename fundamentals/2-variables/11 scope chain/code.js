/**
 * When a variable or function is referenced in JavaScript code, the 
 * interpreter first looks for it in the current scope. If it's not 
 * found there, it moves up the scope chain to the next outer scope 
 * and looks for it there. It continues doing this until the variable 
 * or function is found or until it reaches the global scope.
 */

let globalVar = "I'm a global variable";

function outer() {
  let outerVar = "I'm an outer variable";

  function inner() {
    let innerVar = "I'm an inner variable";
    console.log(innerVar); // "I'm an inner variable"
    console.log(outerVar); // "I'm an outer variable"
    console.log(globalVar); // "I'm a global variable"
  }

  inner();
}

outer();
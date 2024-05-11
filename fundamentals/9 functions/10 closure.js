/**
 * Closure is useful in hiding implementation detail in 
 * JavaScript. In other words, it can be useful to create 
 * private variables or functions.
 **/

function init() {
  let name = "JavaScript closures"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    /**
     * This function is a closure because it's defined inside 
     * another function and has access to its parent function's 
     * scope. 
     */
    console.log(name); // use variable declared in the parent function
  }
  return displayName;
}

// init() returns displayName() function
var closure = init();
closure();
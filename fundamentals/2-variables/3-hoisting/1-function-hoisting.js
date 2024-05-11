function getName(name) {
  console.log("Hello " + name);
}
var varFunction = undefined;
const constFunction;



getName("xyz");


// hoisting lets you use a function 
// before you declare it in your code.



// hoisting only works with function declarations, 
// not function expressions or arrow functions. 

try{
  // Try to call the function
  varFunction(); // Uncaught ReferenceError: Cannot access 'varfn' before initialization
}
catch(e){
  console.error(`${e.name}: ${e.message}`);
}

// Declare the function as a function expression
var varFunction = function() {
  console.log('Hello, world!');
};

/**
 * above code looks like this after compile step
 * 
 * 
var varFunction = undefined;
varFunction(); // Here foo is undefined
varFunction = function() {
  console.log('Hello, world!');
}
 */

try{
  // Try to call the function
  constFunction(); // Uncaught ReferenceError: Cannot access 'myFunction' before initialization
}
catch(e){
  console.error(`${e.name}: ${e.message}`);
}

// Declare the function as a function expression
const constFunction = function() {
  console.log('Hello, world!');
};


try{
  // Try to call the function
  constArrowFunction(); // Uncaught ReferenceError: Cannot access 'myFunction' before initialization
}
catch(e){
  console.error(`${e.name}: ${e.message}`);
}

// Declare the function as a function expression
const constArrowFunction = () => {
  console.log('Hello, world!');
};

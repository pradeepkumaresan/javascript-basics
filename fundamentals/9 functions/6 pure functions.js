/**
 * Pure functions are functions that accept an input and returns 
 * a value without modifying any data outside its scope
 * (Side Effects). Same inputs always return same outputs
 */

// Pure Function

function sayGreeting(name) {
  return `Hello ${name}`;
}

console.log(sayGreeting("World")); // Output: Hello World


// Impure Function
let greeting = "Hello";

function sayGreeting(name) {
  return `${greeting} ${name}`; 
}

/** 
Benefits:

Predictable: It produces a predictable output for the same inputs.
Readable: Anyone reading the function as a standalone unit can understand its purpose completely.
Reusable: Can reuse the function at multiple places of the source code without altering its and the caller's behavior.
Testable: We can test it as an independent unit.

*/
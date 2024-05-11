const title = "ES6";
const iterateIt = title[Symbol.iterator]();


// The iterable is a interface that specifies that an object 
// can be iterable if it implements a method who is key is [Symbol.iterator].

// Symbol.iterator: This is a built-in symbol that is used as 
// the key for the default iterator method of an object. 
// For a string, the default iterator method returns the string's characters one by one.

console.log(iterateIt.next().value); //output: E
console.log(iterateIt.next().value); //output: S
console.log(iterateIt.next().value); //output: 6
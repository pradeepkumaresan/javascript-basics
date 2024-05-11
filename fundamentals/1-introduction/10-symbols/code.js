const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol("Hi");
const symbol4 = Symbol.for("Hi")
const symbol5 = Symbol.for("Hi")

// Symbols are used as unique identifiers for object properties - 
// that is, a symbol can be used as a key for an object property.
// that won't collide with keys any other code might add to the object

// Every symbol value returned from Symbol() is unique. Symbol("id") !== Symbol("id").
// Symbols can be used as keys for object properties.
// Symbols are not enumerable in for...in loop.
// Symbols are ignored by JSON.stringify().
// Symbols can be made global by using the Symbol.for() and Symbol.keyFor() methods.

console.log(typeof symbol1); // symbol
console.log(symbol3.toString()); // Symbol(Hi)
console.log(Symbol("Hi") === Symbol("Hi")); // false
console.log(symbol3 === symbol4); // false
console.log(symbol4 === symbol5); // true
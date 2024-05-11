/**
 * All declarations (function, var, let, const and class) are hoisted 
 * in JavaScript, while the var declarations are initialized with undefined, 
 * but let and const declarations remain uninitialized.
 * 
 * They will only get initialized when their lexical binding (assignment) 
 * is evaluated during runtime by the JavaScript engine. This means we can't 
 * access the variable before the engine evaluates its value at the place it 
 * was declared in the source code. This is what we call Temporal Dead Zone, 
 * A time span between variable creation and its initialization where they can't be accessed.
 */
var aVar = undefined;
let aLet;

console.log(aVar); // undefined
console.log(aLet); // causes ReferenceError: aLet is not defined

var aVar = 1;
let aLet = 2;
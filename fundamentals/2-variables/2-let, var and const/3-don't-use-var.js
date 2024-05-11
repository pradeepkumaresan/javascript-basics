console.log(a); // undefined
var a = 'foo';

console.log(b); // ReferenceError: can't access 'b' 
let b = 'baz';

console.log(c); // ReferenceError: can't access 'c' 
const c = 'bar';
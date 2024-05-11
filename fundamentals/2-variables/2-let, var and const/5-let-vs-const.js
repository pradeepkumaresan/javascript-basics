// This is ok.
let a = 'foo';
a = 'bar';
console.log(a); // bar

// This causes an exception.
const b = 'baz';
b = 'qux';
console.log(b) // TypeError: Assignment to constant variable.
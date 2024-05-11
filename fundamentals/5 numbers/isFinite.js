console.log(isFinite(Infinity));  // false
console.log(isFinite(NaN));       // false
console.log(isFinite(-Infinity)); // false

console.log(isFinite(100));  // true
console.log(isFinite(1/0)); // false

console.log(Number.isFinite(0 / 0)); // false
console.log(Number.isFinite(null)); // false
console.log(Number.isFinite("123")) // false
console.log(Number.isFinite(Infinity)) // false
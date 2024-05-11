let str = "JavaScript, Node.js, Express.js, React.js, MongoDB";
let exp1 = /MongoDB/; 
let exp2 = /Ajax/; 

console.log(exp1.test(str)); // true
console.log(exp2.test(str)); // false

console.log(str.indexOf('MongoDB') !== -1); // true
console.log(str.indexOf('PHP') !== -1); // false

console.log(str.includes('MongoDB')); // true
console.log(str.includes('PHP')); // false

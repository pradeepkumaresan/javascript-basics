const [x = 2, y = 4, z = 6] = [10];

console.log("x: " + x); // 10
console.log("y: " + y); // 4
console.log("z: " + z); // 6

const { i = 2, j = 4, k = 6 } = { n: 10, i: 5 };

console.log("i: " + i); // 5
console.log("j: " + j); // 4
console.log("k: " + k); // 6
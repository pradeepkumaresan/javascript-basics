const set = new Set([10, 20]);

set.add(30); // 10, 20, 30
set.add(30); // 10, 20, 30
set.add("Hello"); // 10, 20, 30, 'Hello'
set.add({ a: 10, b: 20 }); // 10, 20, 30, 'Hello', {a:10, b:20}

set.add(function () {}); // 10, 20, 30, 'Hello', {a:10, b:20}, [Function]

// Iterating Sets
for (let item of set) console.log(item);

console.log(set.has("Hello")); // ture
set.delete("Hello"); // 'Hello' deleted
console.log(set.has("Hello")); // false

console.log(set.size); // 5
set.clear(); // Set Cleared
/**
 * keys are unique but can contain different datatypes
 */
const map = new Map();

map.set("a", 10);
map.set("b", 20);
map.set(3, 30);

console.log(map.get("a")); // 10

map.set("a", 50);

console.log(map.get("a")); // 50
console.log(map.size); // 3

map.delete("b");

console.log(map.size); // 2
console.log(map); // {'a' => 50, 3 => 30}
// WeakMap accepts only objects but not any primitive values as keys

const weakMap = new WeakMap();

// Create key objects
let key1 = {};
let key2 = {};

// Set key-value pairs in WeakMap
weakMap.set(key1, "value1");
weakMap.set(key2, "value2");

// Get values from WeakMap
console.log(weakMap.get(key1)); // value1
console.log(weakMap.get(key2)); // value2

// Delete key-value pair from WeakMap
weakMap.delete(key1);

// Get value after deletion
console.log(weakMap.get(key1)); // undefined
console.log(weakMap.get(key2)); // value2

/**
 * The keys in a WeakMap are weakly referenced. This means that if there are no other references to the key object, they can be garbage collected. This is the main difference between Map and WeakMap.

WeakMap keys are not enumerable. This means you cannot loop over the keys in a WeakMap. This is a design decision in JavaScript to allow the garbage collector to work optimally.
 */
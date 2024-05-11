// similar to weakMap
const weakSet = new WeakSet([{ a: 10 }]);
const obj1 = { o: 10 };
const obj2 = { o: 20 };

weakSet.add(obj1);
weakSet.add(obj2);

weakSet.has(obj2); // true
delete obj2; // Don't take it literally - you can't delete objects like that. Use scope to execute this.

weakSet.has(obj2); // false, because you deleted obj2, so WeakSet releases it automatically
weakSet.delete(obj1); // obj1 deleted from the set
weakSet.add(2); // ERROR, no primitive value
const obj1 = { id: 101, name: 'abc', age: 32};
const obj2 = { age: 35, country: 'India'};

// employee will have all the properties of obj1 and obj2. 
// If there are any duplicate properties, the value from obj2 
// will overwrite the value from obj1.
const employee = { ...obj1, ...obj2 };

console.log(employee);
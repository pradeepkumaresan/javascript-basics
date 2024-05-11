let languages = [ "JavaScript", "Python", "Java", "PHP" ];

languages.slice(1,3); // ["Python", "Java"]
languages.slice(2); // (from index 2 until the end of the array).
// ["Java", "PHP"]

console.log(languages); // the original array is not mutated.
// [ "JavaScript", "Python", "Java", "PHP" ]

let numbers = [10, 20, 30];

console.log(numbers.splice(2, 1, 40, 50)); 
// starting at index 2, remove 1 element and add 40 and 50.

console.log(numbers); // Original array is mutated.
// returns: [10, 20, 40, 50]
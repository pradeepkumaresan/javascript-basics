// Example 01:
Math.random(); // returns a random integer between 0 to 1

// Example 02:
Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100

// Example 03:
function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

console.log(getRandomNumber(100)); // returns a random integer from 1 to 100
function* generator(num) {
  yield num + 10;
  yield num + 20;
  yield num + 30;
}
let gen = generator(10);

// A generator is a function that can stop midway 
// (the next yield statement is called) and 
// then resume from where it stopped until next yield is called.
// In short, a generator appears to be a function but it behaves like an iterator.

console.log(gen.next().value); // 20
console.log(gen.next().value); // 30
console.log(gen.next().value); // 40

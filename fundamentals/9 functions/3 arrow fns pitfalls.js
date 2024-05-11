// Using arrow function inside an object method
/**
 * surrounding context here is the window or global object
 */
function xyz() {
  let count = 1;
const counter = {
  count: 0,
  next: () => ++this.count,
  fn: function () {
    return this.count;
  },
  current: () => this.count
};

console.log(counter.next()); // NaN
console.log(counter.fn()); // 0
}

xyz();
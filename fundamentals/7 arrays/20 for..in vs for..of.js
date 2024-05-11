// for..in
const list = [10, 20, 30];

for (let i in list) {
  console.log(i); // "0", "1", "2",
}

// for..of
for (let i of list) {
  console.log(i); // "10", "20", "30"
}
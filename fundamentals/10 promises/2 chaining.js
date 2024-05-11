// Promise Chain
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(10), 1000);
})
  .then(function (result) {
    console.log(result); // 10
    return result + 20;
  })
  .then(function (result) {
    console.log(result); // 30
  });
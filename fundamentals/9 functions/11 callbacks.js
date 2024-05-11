// callback() function

function greeting(name) {
  console.log('Hello ' + name);
}

function processUserInput(callback) {
  var name = 'xyz';
  callback(name);
}

processUserInput(greeting);
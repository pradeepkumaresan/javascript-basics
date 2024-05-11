const employee1 = { firstName: "a", lastName: "b" };
const employee2 = { firstName: "c", lastName: "d" };

function say(greeting) {
  console.log(greeting + " " + this.firstName + " " + this.lastName);
}

// Call: invokes the function and allows you to pass in arguments one by one.
say.call(employee1, "Hi");    
say.call(employee2, "Hello"); 

// Apply: invokes the function and allows you to pass in arguments as an array.
say.apply(employee1, ["Hi"]);     
say.apply(employee2, ["Hello"]);

// Bind: returns a new function, allowing you to pass in a this 
// array and any number of arguments.
var sayEmployee1 = say.bind(employee1);
var sayEmployee2 = say.bind(employee2);

sayEmployee1("Hi");    
sayEmployee2("Hello"); 
console.log(message); // output: undefined
var message = "The variable Has been hoisted";

/**
 * above code looks like this after compile step
 * 
var message;
console.log(message);
message = "The variable Has been hoisted";

that's why message is undefined
 */
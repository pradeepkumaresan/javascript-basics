/**
 * this Context
 */
const employee = {
  id: 10,
  getId: function () {
    /**
     * `this` is a reference to the object that the function 
     * is a property of.
     */
    return this.id;

    /**
     * return id; would give ReferenceError: id is not defined
     * because id would look for a variable named id in the scope of the 
     * function. 
     */
  }
};

console.log(employee.getId()); // 10

/**
 * characteristics of this
    In a method (a function that is a property of an object), 
    this refers to the object it belongs to.
    
    In a regular function (or if you're in strict mode), this is undefined.
    
    In an event, this refers to the element that received the event.
    
    When a function is called as a constructor (with the new keyword), 
    this refers to the newly created instance.
    
    this can be manually set when calling a function with call(), apply(), 
    or bind().
 */
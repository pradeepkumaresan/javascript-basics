/**
 * Using Arrow function
 */
const person = {
  name: "Harry",
  actions: ["fly", "disarm", "try-to-be-a-hero"],
  printActions() {
    // forEach is provided by any iterable object, like an array.
    this.actions.forEach((action) => {
      console.log(this.name + " likes to " + action);
    });
  },
};

person.printActions();
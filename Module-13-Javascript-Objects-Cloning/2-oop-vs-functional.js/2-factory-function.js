// Factory functions are functions that return objects. They can be used to create multiple instances of similar objects without using the `new` keyword or constructor functions.
// They are a simpler alternative to classes and can be more flexible in certain situations.
// Factory functions can also be used to create private variables and methods, which is not possible with classes.

// When to use Factory:
// You want more control (like adding closures)
// No this binding confusion
// You don’t need inheritance

function createUser(name, role) {
    return {
      name,
      role,
      greet() {
        return `Hi, I'm ${name}, the ${role}.`;
      }
    };
  }
  
  const user2 = createUser("Alex", "Designer");
  console.log(user2.greet()); // Hi, I'm Alex, the Designer.
  
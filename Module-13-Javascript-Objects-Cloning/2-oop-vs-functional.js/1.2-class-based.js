/// This code demonstrates a simple class-based approach to creating objects in JavaScript.
// It defines a User class with a constructor that initializes the name and role properties.
// The greet method returns a greeting message using the name and role properties.
// The code then creates an instance of the User class and calls the greet method to display the greeting message.

class User {
    constructor(name, role) {
      this.name = name;
      this.role = role;
    }
  
    // behavior = action
    greet() {
      return `Hi, I'm ${this.name}, the ${this.role}.`;
    }

    login() {
      console.log(`${this.name} logged in!`);
    }
    logout() {
      console.log(`${this.name} logged out!`);
    }
  }
  
  const user0 = new User();  
  user0.name = "Mike";
  user0.role = "Developer";
  console.log(user0.greet()); // Hi, I'm Mike, the Developer.

  const user2 = new User();
    user2.name = "Alex";
    user2.role = "Designer";
    console.log(user2.greet()); // Hi, I'm Alex, the Designer.

  const user1 = new User("Mark", "Manager");
  console.log(user1.greet()); // Hi, I'm Mike, the Developer.
  
// Constructor Function (Pre-ES6 Class)
// Constructor functions are a way to create objects in JavaScript before the introduction of ES6 classes.

// They are similar to factory functions but are used with the `new` keyword to create instances of objects.
// Constructor functions are typically named with a capital letter to indicate that they are intended to be used as constructors.

// still valid but `class` is preferred in modern JavaScript
function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
  };
  
  const dog = new Animal("Rex");
  dog.speak(); // Rex makes a noise.
  
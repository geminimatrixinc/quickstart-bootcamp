


// CLASSES
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }
}

const person2 = new Person('Sara', 28);
console.log(person2.greet());

// SUBCLASSES;
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes me $${this.balance}.00`;
  }
}

const customer1 = new Customer('Kevin', 32, 300);
console.log(customer1.info());
console.log(customer1.greet())

// MODULES

// file 1 (file1.js)
//export const name = 'Jeff';
//export const nums = [1, 2, 3];
//export default Person;

// // file 2 (file2.js)
//import { name, nums } from './file1';
//import Person from './file1';

let person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: 'Johnathon Doe'
};

// dot notation
console.log(person.firstName);
console.log(person.lastName);

// array notation (alternative to dot notation)
console.log(person['firstName']);
console.log(person['lastName']);

console.log(person.fullName)


var myArray = [10, 20, 'hello', false, person]
console.log(myArray)
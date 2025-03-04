let person = {
    firstName: 'John',
    lastName: 'Doe'
};

var hello = function() {
    console.log('Hello, World!');
}

// we can assign it by reference
person.greet = hello;

person.greet();
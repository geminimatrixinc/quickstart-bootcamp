
let person = {
    firstName: 'John',
    lastName: 'Doe'
};


person.greet = function () {
    console.log('Hello, World!');
}
// invoke method..
person.greet();

delete person.greet;

//person.greet();


// BEFORE ES6
// assigning object attributes to variables
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

// Es5 assignment
var name = person.name;
var age = person.age;
var gender = person.gender;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female

// ES6
// assigning object attributes to variables
const person2 = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}


// destructuring assignment
var { name, age, gender } = person2;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female




// DESTRUCTURING

const profile = {
    name: 'John Doe',
    address: {
      street: '40 Main st',
      city: 'Boston'
    },
    hobbies: ['movies', 'music']
  };
  

var name = profile.name;
var street = profile.address.street;
var city = profile.address.city;
var zipCode = profile.address.zipCode;

// alias names, in destructoring..
 var { fullName = name } = profile;

  const { myStreet = street } = profile.address;
  
  console.log(`street: ${street}`);



console.log(`fullname ${fullName}`)


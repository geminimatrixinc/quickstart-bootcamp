const user = {
    name: 'Mike',
    age: 40,
    role: 'Developer',
    address: "New York",
  };
  

  console.log(user.name); // Mike
  console.log(user['age']); // 40
console.log(user['role']); // Developer
console.log(user.address); // New York


// The Object.keys() method returns an array of a given object's own enumerable property names, in the same order as that provided by a for...in loop.
  console.log(Object.keys(user)); // ['name', 'age', 'role']


// The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
  console.log(Object.values(user)); // ['Mike', 40, 'Developer']


// The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
  console.log(Object.entries(user));
  // [['name', 'Mike'], ['age', 40], ['role', 'Developer']]
  

// The for...in loop iterates over the enumerable properties of an object, in the same order as that provided by Object.keys() and Object.values().
  for (let key in user) {
    console.log(`${key}: ${user[key]}`);
  }
  
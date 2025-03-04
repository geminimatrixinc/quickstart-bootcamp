const capitalize = ([first, ...rest]) =>
  first.toUpperCase() +  rest.join('').toLowerCase();

console.log(capitalize('fooBar')); 
console.log(capitalize('nodeJs')); 

// Output
Foobar 
Nodejs 


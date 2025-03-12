// Value types (Primitives are copied by their value)
let a = 10;
let b = a;
a = 20;
console.log(a); // Output: 20
console.log(b); // Output: 10

// Reference types (Objects are copied by their reference)
let obj1 = { value: 10 };
let obj2 = obj1;
obj1.value = 20;
console.log(obj1); // Output: { value: 20 }
console.log(obj2); // Output: { value: 20 }

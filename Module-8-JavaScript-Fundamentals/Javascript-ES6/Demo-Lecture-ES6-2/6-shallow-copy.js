// cloning, copying, and merging objects in JavaScript
// Shallow copy
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };
shallowCopy.b.c = 3; // this changes both, the original and the copy

console.log(original.b.c); // Output: 3
console.log(shallowCopy.b.c); // Output: 3

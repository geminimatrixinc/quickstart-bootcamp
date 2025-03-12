// deep copy using JSON.parse() and JSON.stringify()
const original = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 3; // this changes only the copy

console.log(original.b.c); // Output: 2
console.log(deepCopy.b.c); // Output: 3

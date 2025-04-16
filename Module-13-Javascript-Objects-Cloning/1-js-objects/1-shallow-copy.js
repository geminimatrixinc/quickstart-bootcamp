
// https://www.youtube.com/watch?v=WLuEXwQiqac (Shallow Copy vs Deep Copy in JavaScript - YouTube)

const original = { 
    a: 1, 
    b: { c: 2 } 
};

const shallowCopy = { ...original };
shallowCopy.b.c = 3;

console.log(original.b.c); // Outputs: 3
console.log(shallowCopy.b.c); // Outputs: 3

// https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone
// https://www.youtube.com/watch?v=w58P_TpWgRA (Structured Clone - YouTube)

const original = { 
    a: 1, 
    b: { c: 2 } 
};

const deep = structuredClone(original);
deep.b.c = 99;

console.log(original.b.c); // Outputs: 2




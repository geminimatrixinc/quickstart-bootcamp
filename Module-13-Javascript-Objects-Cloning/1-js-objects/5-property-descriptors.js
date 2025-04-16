const book = { 
    title: "JavaScript Mastery" 
};

Object.defineProperty(book, 'title', {
  writable: false,
  configurable: false,
  enumerable: true
});

const desc = Object.getOwnPropertyDescriptor(book, 'title');
console.log(desc);
// { value: "JavaScript Mastery", writable: false, enumerable: true, configurable: false }

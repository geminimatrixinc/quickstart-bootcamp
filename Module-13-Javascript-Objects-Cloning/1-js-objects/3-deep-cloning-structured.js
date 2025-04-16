
// Deep cloning using structuredClone
// The structuredClone function is a built-in JavaScript function that allows for deep cloning of objects.
// It can handle a wider range of data types compared to JSON.parse and JSON.stringify, including functions, undefined, and special objects like Date, Set, Map, etc.
// This makes it a more reliable option for deep cloning complex objects.

// https://www.youtube.com/watch?v=QaCYMgyprtc  (Deep Cloning in JavaScript - YouTube)

const data = {
    date: new Date(),
    set: new Set([1, 2, 3]),
    map: new Map([['key', 'value']]),
  };
  
  const cloned = structuredClone(data);
  console.log(cloned.set.has(2)); // true
  console.log(cloned.map.get('key')); // "value"
  
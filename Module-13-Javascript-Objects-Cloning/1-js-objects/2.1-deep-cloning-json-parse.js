
// limitations of JSON.parse and JSON.stringify for deep cloning
// JSON.parse and JSON.stringify can be used for deep cloning, but they have limitations.
// They only work with JSON-compatible data types and cannot handle functions, undefined, or special objects like Date, Set, Map, etc.
// For example, if you try to clone an object with a Date or Set property, it will be converted to a string or an empty object respectively.
// This can lead to unexpected behavior and data loss, as the original object will not be preserved in its entirety.

const original = { date: new Date(), set: new Set([1, 2]) };
const copy = JSON.parse(JSON.stringify(original));
console.log(copy.date); // String, not Date object

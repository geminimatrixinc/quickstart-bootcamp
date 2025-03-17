
// Spread Operator - Function Parameters
// Spread operator can be used to pass an array to a function that normally requires a list of many arguments.
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3, 4, 5];
console.log(sum(...numbers)); // Output: 6

// GLOBAL SCOPE..
var a = 0;
var b = 5000;
var c = 24;

console.log("The value of a is" + " " + a);
console.log("The value of b is" + " " + b);
console.log("The value of c is" + " " + c);

debugger;

var aIsLargest = a > b && a > c;
var bIsLargest = b > a && b > c;

if (aIsLargest) {
  console.log("a is the greater number");
} else if (bIsLargest) {
  console.log("b is the greatest number");
} else {
  console.log("c is the greatest number");
}

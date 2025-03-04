
// program to display the sum of n natural numbers
let sum = 0;
const n = 100;

// looping from i = n to 1
// in each iteration, i is decreased by 1
for(let i = n; i >= 1; i-- ) {
    // adding i to sum in each iteration
    sum += i; // sum = sum + i
}

console.log('sum:',sum);


// INFINITE LOOP

// infinite for loop
// for(var i = 1; i > 0; i++) {
//    console.log('infinite?' + i)
// }

var i = 0;
for(;;) {
    console.log('infinite?' + i)
    i++

    // if (i > 100) {
    //     break;
    // }
 }
 

///Ctrl X + Ctrl C - terminates node shell
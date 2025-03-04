
function sum(x = 3, y = 5) {

    // return sum
    return x + y;
}

console.log(sum(5, 15));  // 20 
console.log(sum(7));        // 12
console.log(sum());          // 8


// quick way prevent NAN, protecting against undefined var...
function addNumber(x=0, y=0) {
    return x + y;
}

console.log(addNumber())




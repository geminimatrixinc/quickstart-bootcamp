
// 1. Big O Notation (Conceptual Example)
// https://www.bigocheatsheet.com/
// https://www.youtube.com/watch?v=g2o22C3CRfU

console.log("1. Big O Notation:");


function sumUpTo(n) {
    // O(n) linear time
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

sumUpTo(5); // 15
// 3. Recursion

// Recursion
// Time complexity depends on the problem — often O(2^n) without memoization.
// Space complexity: O(n) due to call stack depth.
// Can be elegant but inefficient if overlapping subproblems exist (like Fibonacci).
// Use memoization or tabulation (dynamic programming) to optimize recursive algorithms.

// https://recursion.vercel.app/
// https://www.youtube.com/watch?v=rf60MejMz3E
console.log("\n3. Recursion:");

function factorial(n) {
    if (n <= 1) return 1; // exit condition

    // recursive case
    return n * factorial(n - 1);
}

// 5 * 4 * 3 * 2 * 1; // 120


console.log("Factorial of 5:", factorial(5));
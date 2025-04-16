// 8. Dynamic Programming (Fibonacci)

// Time complexity: O(n)
// Space complexity: O(n)
// Avoids redundant calculations seen in naive recursion.
// Great intro to dynamic programming — stores subproblem results to avoid recalculating.


// https://observablehq.com/@victormutai/visualizing-recursive-fibonacci-algorithm

// https://www.youtube.com/watch?v=v6PTrc0z4w4&t=15s

console.log("\n8. Dynamic Programming (Fibonacci):");

function fibonacci(n) {
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
console.log("Fibonacci of 6:", fibonacci(6));

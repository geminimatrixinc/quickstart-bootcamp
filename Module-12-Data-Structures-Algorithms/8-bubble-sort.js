

// Bubble Sort

// Time complexity: O(n^2) average and worst case
// Space complexity: O(1)
// Very inefficient for large data sets, mainly used for teaching sorting concepts.
// Repeatedly swaps adjacent elements until sorted.


// https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
// https://www.youtube.com/watch?v=RfXt_qHDEPw

console.log("\n7. Sorting (Bubble Sort):");
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log("Sorted Array:", bubbleSort([5, 3, 8, 4, 2]));

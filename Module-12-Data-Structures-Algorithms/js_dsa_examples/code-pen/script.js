
// JavaScript DSA Examples with Beginner Documentation

// 1. Big O Notation (Conceptual Example)
console.log("1. Big O Notation:");
function sumUpTo(n) {
    // O(n) linear time
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log("Sum from 1 to 5:", sumUpTo(5));

// 2. Arrays (Fundamental Data Structure)
console.log("\n2. Arrays:");
const fruits = ["apple", "banana", "cherry"];
fruits.push("date");
console.log("Fruits array:", fruits);

// 3. Recursion
console.log("\n3. Recursion:");
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));

// 4. Linked List (Simplified version)
console.log("\n4. Linked List:");
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;
console.log("Node 1 points to:", node1.next.value);

// 5. Binary Tree (Basic Structure)
console.log("\n5. Binary Tree:");
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
console.log("Root Node:", root.value, "Left Child:", root.left.value);

// 6. Heap (Min Heap Insert)
console.log("\n6. Heap (Min Heap):");
class MinHeap {
    constructor() {
        this.heap = [];
    }
    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] <= this.heap[index]) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }
}
const heap = new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(7);
console.log("Heap array:", heap.heap);

// 7. Sorting (Bubble Sort)
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

// 8. Dynamic Programming (Fibonacci)
console.log("\n8. Dynamic Programming (Fibonacci):");
function fibonacci(n) {
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
console.log("Fibonacci of 6:", fibonacci(6));

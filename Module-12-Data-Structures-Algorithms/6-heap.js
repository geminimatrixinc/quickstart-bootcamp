// 6. Heap (Min Heap Insert)

// Insert/Delete Min/Max: O(log n)
// Search: O(n)
// Space complexity: O(n)
// Great for priority queues where you need quick access to the smallest/largest item.
// Not suitable for fast search of arbitrary elements.

// https://www.cs.usfca.edu/~galles/visualization/Heap.html
// https://www.youtube.com/watch?v=0wPlzMU-k00

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
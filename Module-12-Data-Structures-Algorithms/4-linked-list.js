// 4. Linked List (Simplified version)

// Insert/Delete at head: O(1)
// Search or access by index: O(n)
// Useful when frequent insertion/removal is needed at the beginning or end.
// Not ideal for index-based access due to sequential traversal.


// https://visualgo.net/en/list
// https://www.youtube.com/watch?v=F8AbOfQwl1c

console.log("\n4. Linked List:");
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null; // optional, for doubly linked list
    }
}
const node1 = new Node(1);
const node2 = new Node(2);
// manually linking nodes
node1.next = node2;
console.log("Node 1 points to:", node1.next.value);
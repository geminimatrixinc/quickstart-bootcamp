// 5. Binary Tree (Basic Structure)

// Insert, search, and delete: O(log n)
// Worst-case (unbalanced): O(n)
// Space complexity: O(n)
// Binary trees keep data sorted and allow efficient searching and insertion.
// Keeping the tree balanced (AVL, Red-Black) is key for performance.


// https://tree-visualizer.netlify.app/
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
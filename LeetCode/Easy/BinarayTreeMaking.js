// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// Function to insert nodes into the binary tree based on array representation
function buildTree(arr) {
    if (arr.length === 0) return null;
    
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length) {
        let current = queue.shift();

        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    
    let leftSide = maxDepth(root.left);
    let rightSide = maxDepth(root.right);

    return Math.max(leftSide, rightSide) + 1;
};

// Input array
let arr = [3, 9, 20, null, null, 15, 7];

// Build the tree
let root = buildTree(arr);

// Calculate the maximum depth
console.log(maxDepth(root)); // Output should be 3
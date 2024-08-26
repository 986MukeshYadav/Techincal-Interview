// 94. Binary Tree Inorder Traversal

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:


// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//================================================================

var inorderTraversal = function(root) {
    let result=[];
    function inorder(node){
        if(!node){
        return ;
    }
    inorder(node.left);
    result.push(node.val)
    inorder(node.right)
    }
    inorder(root)
    return result
};

// Test cases

console.log(inorderTraversal([1,null,2,3])); // Output: [1,3,2]
console.log(inorderTraversal([])); // Output: []
console.log(inorderTraversal([1])); // Output: [1]



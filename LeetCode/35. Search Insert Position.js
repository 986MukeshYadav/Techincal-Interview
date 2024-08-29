// 35. Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
//==========================================================================================

// const searchInsert = (nums, target) => {
//     let left = 0;
//     let right = nums.length - 1;
  
//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
  
//       if (nums[mid] === target) {
//         return mid; // Target found
//       } else if (nums[mid] < target) {
//         left = mid + 1; // Move the left pointer to the right of mid
//       } else {
//         right = mid - 1; // Move the right pointer to the left of mid
//       }
//     }
  
//     return left; // Insertion point
//   };
  
//   // Example test cases
//   console.log(searchInsert([1, 3, 5, 6], 5)); // Output: 2
//   console.log(searchInsert([1, 3, 5, 6], 2)); // Output: 1
//   console.log(searchInsert([1, 3, 5, 6], 7)); // Output: 4
  

//==========================================================================================

var searchInsert = function(nums, target) {
    nums.push(target);
    nums.sort((a,b)=>a-b);
    let result=nums.indexOf(target)
    return result
};

console.log(searchInsert([1,3,5,6], 5)) // Output: 2
console.log(searchInsert([1,3,5,6], 2)) // Output: 1
console.log(searchInsert([1,3,5,6], 7)) // Output: 4
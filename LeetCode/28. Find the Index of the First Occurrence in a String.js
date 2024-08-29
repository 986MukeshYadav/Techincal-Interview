// 28. Find the Index of the First Occurrence in a String
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

//================================================================================

// const findFirstOccurrence = (haystack, needle) => {
//     if (needle === "") return 0; // edge case: empty needle
  
//     for (let i = 0; i <= haystack.length - needle.length; i++) {
//       let j;
//       for (j = 0; j < needle.length; j++) {
//         if (haystack[i + j] !== needle[j]) {
//           break; // mismatch found, break inner loop
//         }
//       }
//       if (j === needle.length) {
//         return i; // found the needle, return starting index
//       }
//     }
  
//     return -1; // needle not found
//   };
  
//   console.log(findFirstOccurrence("leetcode", "leeto")); // Output: -1
  

//=========================================================================================

var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);

};

console.log(strStr("sadbutsad", "sad")); // Output: 0
console.log(strStr("leetcode", "leeto")); // Output: -1

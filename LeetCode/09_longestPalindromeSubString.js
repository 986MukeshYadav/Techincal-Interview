// 5. Longest Palindromic Substring

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

var longestPalindrome = function (s) {
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      let subString = s.slice(i, j);
      if (checkPalindrome(subString) && subString.length > longest.length) {
        longest = subString;
      }
    }
  }
  return longest;
};
function checkPalindrome(s) {
  let str = s.split("").reverse().join("");
  return s === str;
}
const s = "cbbd";
console.log(longestPalindrome(s)); // Output: "bab" or "aba"

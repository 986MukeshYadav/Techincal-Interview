// 3. Longest Substring Without Repeating Characters

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

var lengthOfLongestSubstring = function(s) {
   let maxlength=0;
   let newStr=[];
   for(let i=0;i<s.length;i++){
    if(newStr.includes(s[i])){
        newStr=newStr.slice(newStr.indexOf(s[i])+1)
        console.log(newStr)
    }
    newStr.push(s[i]);
    maxlength = Math.max(maxlength,newStr.length)
   }
   return maxlength;
};
// console.log(lengthOfLongestSubstring("pwwkew"))    //output = 3
console.log(lengthOfLongestSubstring("abcabcbb")) //output = 3
// console.log(lengthOfLongestSubstring("bbbbb")) //output = 1
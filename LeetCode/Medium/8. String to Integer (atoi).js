// 8. String to Integer (atoi)
// Solved
// Medium
// Topics
// Companies
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.

var myAtoi = function(s) {
    const ans = Number.parseInt(s);
     if (ans) {
      if (ans <= -2147483648)return -2147483648;
      else if (ans >= 2147483647)return 2147483647;
      else return ans;
  }
  return 0;
};

console.log(myAtoi("42")); // 42
console.log(myAtoi("   -42")); // -42
console.log(myAtoi("4193 with words")); // 4193
console.log(myAtoi("words and 987")); // 0
console.log(myAtoi("-91283472332")); // -2147483648
console.log(myAtoi("2147483648")); // 2147483647
console.log(myAtoi("0-1")); // 0
console.log(myAtoi("+-2")); // 0
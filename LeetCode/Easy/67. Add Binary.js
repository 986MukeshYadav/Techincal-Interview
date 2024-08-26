// 67. Add Binary
// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

var addBinary = function(a, b) {
    let sum = BigInt("0b" +a) + BigInt("0b" +b);
    return sum.toString(2)
 };
 console.log(addBinary("11", "1")) // Output: "100"
 console.log(addBinary("1010", "1011")) // Output: "10101"
 console.log(addBinary("101010", "111111")) // Output: "1001011"
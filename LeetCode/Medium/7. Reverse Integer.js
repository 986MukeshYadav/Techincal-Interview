// 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21


//================================Build Function===========================================

// let rev=String(x).split("").reverse().join("")
// if(rev.endsWith("-")){
//   rev="-"+rev
// }
// return parseInt(rev)

//====================================================================

const reversed=(x)=>{
  let rev = 0;
  let count;

  while(x != 0){
    count = x % 10;
    x = parseInt(x / 10);
    rev = rev * 10 + count;
  }
  if(rev > 0x7FFFFFFF){
    return 0;
  }
  if(rev < -0x7FFFFFFF){
    return 0;
  }
  return rev;
}
console.log(reversed(123)) // 321
console.log(reversed(-123)) // -321
console.log(reversed(120)) // 21
console.log(reversed(1534236469)) // 0
console.log(reversed(1534236469)) // 0
console.log(reversed(2147483647)) // 0
console.log(reversed(-2147483648)) // 0

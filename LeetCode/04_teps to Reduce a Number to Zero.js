// 1342. Number of Steps to Reduce a Number to Zero
// Given an integer num, return the number of steps to
// reduce it to zero.
// In one step, if the current number is even, you have to
// divide it by 2, otherwise, you have to subtract 1 from it.
// Constraints:
// • 0 <= num <= 106
// Example 1:
// Output:" = 14
// Example 2:
// Input: n = 8
// Output: 4
// Example 3:
// Input: n = 0
// Output: 0

const numberOfSteps=(n)=>{
    let count=0;
  while(n>0){
        if(n%2==0){
            n= n/2
        }else{
           n= n-1
        }
        count++
    }
    return count

}
console.log(numberOfSteps(14)); // Output: 6
console.log(numberOfSteps(8));  // Output: 4
console.log(numberOfSteps(0));  // Output: 0
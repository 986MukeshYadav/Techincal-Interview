// 14: Write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two, and false otherwise.* Pull up for pre
// Example usage:
function isPower0fTwo(num){
    // for(let i=1;i<=num-1;i++){
    //     if(2**i === num){
    //         return true
    //     }
    // }
    // return false;

    //========================================================
    // we can solve it using bitwise operator too but its your chance to it and let me know in the comment section
    return (num > 0) && (num & (num-1))==0

};

console.log(isPower0fTwo(8)); // Output: true
console.log(isPower0fTwo(7)); // Output: false
// Notes:
// The input num will be a positive integer.
// Zero (0) and negative integers are not considere
// The function should return true if the given num is power of 2 and false otherwise.

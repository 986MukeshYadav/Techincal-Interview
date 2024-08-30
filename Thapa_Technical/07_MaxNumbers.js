// Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.
// Example usage:

const findMax=(arr)=>{
    // let max=arr[0];
    // for(let i=1; i<arr.length; i++){
    //     if(arr[i]>max){
    //         max=arr[i];
    //     }
    // }
    // return max;



    //another Method by using Math.max
    // console.log(...arr)
    // return Math.max(...arr);


    //Another method by using Reduce method

    result = arr.reduce((acc,curr)=>{
        if(curr > acc){
            return curr
        }
        return acc;
    })
    return result;
 
}
console.log(findMax([1, 5, 3, 9, 21])); // Output: 21
console.log(findMax([-10, -5, -3, -9, -2])); // Output: -2
console.log(findMax([5])); // Output: 5
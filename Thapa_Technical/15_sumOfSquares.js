//? 15: Write a function to calculate the sum of squares of all elements in an array. For example, given the array [1, 2, 3], the function should return 14 because 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14.0

function sumOfSquares(arr){
//    return arr.reduce((acc,curr)=>{
//     return acc + curr*curr
//    })

//===========================================================================
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i]*arr[i];
    }
    return sum;

}

console.log(sumOfSquares([1, 2, 3])); // Output: 14
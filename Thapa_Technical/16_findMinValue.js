//? 16: Write a function findMin that takes an array of numbers as input and returns the minimum  value found in the array.
//* Constraints:
//? The input array may contain both positive and negative integers.
//? The input array may be empty.
//? The input array may contain duplicate values.

const findMin=(arr)=>{
    if(arr.length === 0){
        return undefined;
    }
    // let min = arr.sort((a,b)=>a-b);
    // return min[0];
   
    //===================================================
    //Using Spread operator
    //return Math.min(...arr)

    //========================================
    //FOR loop 
    // let min = arr[0];;
    // for(let i = 0 ; i<=arr.length;i++){
    //     if(arr[i] < min){
    //         min = arr[i]
    //     }
    // }
    // return min;


    //=====================================
    //Reduce Method

    return arr.reduce((acc,curr)=> curr < acc ? curr:acc)

    
}



console. log(findMin([5, 10, 2, 81])); // Output: 2
console. log(findMin([5, -3, 0, 12, -7])); // Output: -7
 console. log(findMin([-10, -5, -3, -9, -2])); // Output: -10
console. log(findMin([])); // Output: undefined (or any suitable message for empty array)
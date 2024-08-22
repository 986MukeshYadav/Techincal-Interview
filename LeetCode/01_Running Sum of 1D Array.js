//1480. Running Sum of 1d Array
//Given an array nums. We define a running sum of an array
//as runningSum[il = sum (nums [0] ... nums [i] ).
//Constraints:
//• The number of nodes in the list is in
//the range [1, 1000].
//• The value of each element in the array
//is in the range [-10^6, 10^6].
//Example:
//Input:[3,1,2,10,1]
//Output:[3,4,6,10,17]

const RunningSumArray=(arr)=>{
    let result = [];
    let currentsum=0
    for(let i=0;i<arr.length;i++){
        currentsum +=arr[i]
       result.push(currentsum)  //push the current sum to the result array.  //Time Complexity = O(n)
    }
    return result;
}

console.log(RunningSumArray([3,1,2,10,1])); // [ 3, 4, 6, 16, 17 ]
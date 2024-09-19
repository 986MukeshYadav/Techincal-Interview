// Ques
//2: Implement Binary Search in JavaScript
// Given an array of integers nums which is sorted in ascending order, and an integer target,
//write a function to search target in nums. If target exists, then return its index.
// Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.


const BinarySearch=(arr,target)=>{
    arr.sort();
    console.log(arr)
    let start=0;
    let end = arr.length-1
    while(start <= end){
        let mid = Math.floor((start + end)/2);
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] > target){
            start=mid+1;
        }
        else{
            end=mid-1;
        }
    }
    return -1
}
console.log(BinarySearch([1, 5, 3, 7, 9], 5)); // Output: 2
console.log(BinarySearch([1, 3, 5, 7, 9,8,6], 2)); // Output: -1


// Binary Search

// Time Complexity:
// Best Case: O(1)
// Average Case: O(log n)
// Worst Case: O(log n)
// Space Complexity: O(1) (Iterative) / O(log n) (Recursive)
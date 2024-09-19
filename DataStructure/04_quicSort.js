const quickSort=(arr)=>{
    if(arr.length <= 1){
        return arr;
    }

    let pivot=arr[0];
    let left=[];
    let right=[];

    for(let i=1 ; i<arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i])
        }
    }
        return [...quickSort(left),pivot,...quickSort(right)]
   
   
}

console.log(quickSort([10, 7, 8, 9, 1, 5])); // Output: [1, 5, 7, 8, 9, 10]

// Quick Sort

// Time Complexity:
// Best Case: O(n log n)
// Average Case: O(n log n)
// Worst Case: O(n²) (Occurs when the pivot is always the largest or smallest element)
// Space Complexity: O(log n) 
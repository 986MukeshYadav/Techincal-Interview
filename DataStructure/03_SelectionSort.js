const selectionSort=(arr)=>{
    let length=arr.length;
    for(let i=0;i<length-1;i++){
        let minindex = i;
        for(let j=i+1;j<length;j++){
            if(arr[j] < arr[minindex]){
                minindex=j;
            }
        }
        if(minindex != i){
            // let temp = arr[i];
            // arr[i] = arr[minindex];
            // arr[minindex] = temp;
            [arr[i], arr[minindex]] = [arr[minindex], arr[i]];
    
    }
}
return arr;
}

console.log(selectionSort([12, 11, 13, 5, 6, 7])); // Output: [5, 6, 7, 11, 12, 13]


// Selection Sort

// Time Complexity:
// Best Case: O(n²)
// Average Case: O(n²)
// Worst Case: O(n²)
// Space Complexity: O(1)
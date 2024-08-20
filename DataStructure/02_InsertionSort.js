const InsertionSort=(arr)=>{
    let l=arr.length;
    for(let i=1;i<l;i++){j
        let temp=arr[i];
        let j=i-1;
        while(j>=0 && arr[j] > temp){
            arr[j+1] = arr[j]
            j=j-1;
        }
        arr[j+1]=temp;
    }
    return arr;
}

console.log(InsertionSort([12, 11, 13, 5, 6])); // Output: [5, 6, 11, 12, 13]
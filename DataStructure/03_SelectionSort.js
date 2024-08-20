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
            let temp = arr[i];
            arr[i] = arr[minindex];
            arr[minindex] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([12, 11, 13, 5, 6, 7])); // Output: [5, 6, 7, 11, 12, 13]
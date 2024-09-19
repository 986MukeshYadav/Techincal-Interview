const missingnumber=(arr)=>{
    
    // const expectedSum = (n * (n + 1)) / 2;
    // const actualSum = arr.reduce((acc, num) => acc + num, 0);
    // return expectedSum - actualSum;
//======================================================
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        } 
        
    }
    let postivenumber = 1;
    for(let i=0;i<arr.length;i++){
    if(arr[i] === postivenumber){
        postivenumber++;
    }
    }
    return postivenumber;
}

console.log(missingnumber([1,2,0])); // Output: 3
console.log(missingnumber([9,6,4,2,3,5,7,0,1])); // Output: 8
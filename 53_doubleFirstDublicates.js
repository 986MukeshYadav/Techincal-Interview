const doubleFirstDublicates=(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                arr[i]**=2;
               
            }
        }
    }
    return arr;
}

console.log(doubleFirstDublicates([1, 2, 3, 4, 5, 4, 5,])); // Output: [1, 2, 3, 16,25, 4, 5,]

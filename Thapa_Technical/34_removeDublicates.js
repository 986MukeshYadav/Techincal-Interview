const removeDublicates=(arr)=>{
    let newarr=[];
    for(let i=0;i<arr.length;i++){
        if(!newarr.includes(arr[i])){
            newarr.push(arr[i]);
        }
        
    }
    return newarr;

}

console.log(removeDublicates([1, 2, 3, 2, 4, 5, 6, 2, 7])); // Output: [1, 2, 3, 4, 5, 6, 7]

const mergeSort=(arr)=>{
    if(arr.length <= 1){
        return arr
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left,right)
}
const merge=(left, right)=>{
    let sortedarr=[];
  while(left.length && right.length){
    if(left[0] < right[0]){
        sortedarr.push(left.shift())
    }
    else{
        sortedarr.push(right.shift())
    }
  }
  return [...sortedarr,...left,...right]
}

console.log(mergeSort([12, 11, 13, 5, 6, 7])) // Output: [5, 6, 7, 11, 12, 13]
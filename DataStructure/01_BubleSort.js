function BubbleSort(arr){
    let len=arr.length;
    for(let i=0;i<len-1;i++){
        for(let j=0;j<len-1-i;j++){
           if(arr[j] > arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
           }
        }      
    }
    return arr;
}
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(BubbleSort(arr)); 
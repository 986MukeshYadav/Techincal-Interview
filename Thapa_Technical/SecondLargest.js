function SecondLargestNumber(arr){
    if(arr.length < 2){
      throw new Error("Its array have not Second largest number");
      }

      let largest = -Infinity;
      let second_largest = -Infinity;

      for(let i=0;i<arr.length;i++){
          if(arr[i] > largest){
              second_largest = largest;
              largest = arr[i];
          }
          else if(arr[i] > second_largest && arr[i] != largest){
              second_largest = arr[i];
          }
      }
      if(second_largest == -Infinity){
          throw new Error("No second largest number found in the array");
      }
      return second_largest;
     // return largest; => for Largest Number
}

let arr=[6,8,2,4,5,7,6];
console.log(`SecondLaregst Number is :${SecondLargestNumber(arr)}`); 


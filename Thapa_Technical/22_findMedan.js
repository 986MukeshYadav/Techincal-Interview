//write a Javascript runction ranameoiantarr) nar takes an array or numers as input ano returns. the median value. If the array has an even number of elements, return the average of the two middle values.
//? For example, the median of 3, 3, 5, 9, 15 is 5. If there is an even number of observations, then there is no single middle value; the median is then usually defined to be the mean of the two middle values: so the median of 3, 5, 7, 9 is (5+7)/2 = 6.
//todo Tips
//? Sort the array in ascending order.
//? If the array has an odd number of elements, the median is the middle element.
//? If the array has an even number of elements, the median is the average of the two middle elements.


const findMedan=(arr)=>{
  //sort the array
  let arrsort=arr.sort((a,b)=>a-b);
  let length = arrsort.length;
  let mid = Math.floor(length/2);
  console.log(arrsort)
  //chek for even numbers
  if(length % 2 === 0){
    return (arrsort[mid] + arrsort[mid-1])/2;
  }
    //odd number of elements
    return arrsort[mid];
  }
  
console.log(findMedan([3, 3, 5, 9, 15])); // 5
console.log(findMedan([3, 5, 7, 6]));    // 6
console.log(findMedan([1, 2, 3, 4, 5])); // 3

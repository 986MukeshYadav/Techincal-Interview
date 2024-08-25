// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807

const addTwoNumbers=(l1, l2)=>{
   l1=l1.reverse().join("")
   l2=l2.reverse().join("")
   
let sum = Number(l1) + Number(l2)
   console.log(sum)
  let sum1=String(sum).split("").reverse().map(Number)
  
  return sum1
}

console.log(addTwoNumbers([1, 2, 3], [4, 5, 6])); //output: [ 5, 7, 9 ]
//* Programming Challenge: Simple Bar Chart from Array Data
//? Create a function generateBarChart that takes an array of numbers and generates a simple text-based bar chart.
const generateBarChart=(arr)=>{
//   const newArray = arr.map((curr,index)=>{
//     let num = '';
//     let sum=" ";
//     for(let i=0 ; i<= curr;i++){
//         sum = sum + " * ";
//     }
//     return `${index+1}: ${sum}`;
//    })
//    return newArray.join("\n");

//Another method 

return arr.map((curr,index)=>{
    return `${index} : ${"*".repeat(curr)}`
})
.join("\n")
}

console. log(generateBarChart([50, 30, 90, 20]));
// 1: *****
// 2: ***
// 3: *********
// 4: **
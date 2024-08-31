// 6. Zigzag Conversion

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R

// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"


const zigzag=(s,numRows)=>{
 if(numRows === 0 || s.lenght > numRows){
    return s
 }

 let direction = false;
 let arr = new Array(numRows).fill("");
 let count = 0;

 for(let i=0;i<s.length;i++){
    arr[count] += s[i]

    if(count === 0 || count >=numRows-1){
        direction = !direction
    }

    if(direction){
        count++
    }
    else{
        count--;
    }
 }
 return arr.join("");


}
console.log(zigzag("PAYPALISHIRING",3)) //output: PAHNAPLSIIGYIR
console.log(zigzag("PAYPALISHIRING",4)) //output: PINALSIGYAHRPI
console.log(zigzag("A",1))              //output: A

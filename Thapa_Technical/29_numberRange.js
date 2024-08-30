// write a function called numberRange that generates an array containing consecutive numbers from a to b (inclusive).
//* Input:
//? a: An integer representing the starting number of the range.
//? b: An integer representing the ending number of the range.
//? arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.
//* Output:
//? An array containing consecutive numbers from a to b (inclusive).
//* Constraints:
//? a and b will be integers.
//? a will be less than or equal to b

// const numberRange = (a, b, arr = []) => {
//     for (let i = a; i <= b; i++) {
//         arr.push(i);
//     }
//     return arr;
// };

//=============================================================================

const numberRange=(a,b)=>{
    let arr=[];
    for(let i=a;i<=b;i++){
        arr.push(i)
    }
    return arr;
}


console.log(numberRange(1, 10)); //[ 1, 2, 3, 4,  5,6, 7, 8, 9, 10]

console.log(numberRange(-2, 2)); //[ -2, -1, 0, 1, 2 ]
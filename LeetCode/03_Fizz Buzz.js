//? Write a function fizzbuzz that accepts two numbers, startNum and endNum, as input. The function should return an array containing numbers and specific strings based on the following rules:
//? For each number i in the range from startNum to endNum (both inclusive):
//? If i is divisible by both 3 and 5, include "FizzBuzz" in the result.
//? If i is divisible by only 3, include "Fizz" in the result.
//? If i is divisible by only 5, include "Buzz" in the result.
//? Otherwise, include the number i itself.
// Example 1

const fizzbuzz=(a,b)=>{
    for(let i=a;i<=b;i++){
        if(i%3==0 && b%5==0){
            console.log("FizzBuzz");
        }else if(i%3==0){
            console.log("Fizz");
        }else if(i%5==0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}

fizzbuzz(1, 15);
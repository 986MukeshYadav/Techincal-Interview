function numberReverse(num){
    let rev=0;
    while(num != 0){
        rev=rev*10+(num % 10)
        num =Math.floor(num/10);
    }
    return rev;    
}
let input = 12345;
let reversedNumber = numberReverse(input);
console.log(reversedNumber);
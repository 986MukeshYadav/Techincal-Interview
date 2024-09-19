const palindrome=(num)=>{
    let result=0;
    let  ornginal = num
    while(num !== 0){
     let sum = num % 10
      result = (result * 10) + sum
    
      num = parseInt(num/10);
  
    }
   
     return result === ornginal
  
  }
  console.log(palindrome(121)) // true
  console.log(palindrome(123)) // false


  
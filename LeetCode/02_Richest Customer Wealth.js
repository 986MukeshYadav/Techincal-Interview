//1672. Richest Customer Wealth
//You are given an m x n integer grid accounts where
//accounts [il ljl is the amount of money the ith
//customer has in the j th bank. Return the wealth that the
//richest customer has.
//A customer's wealth is the amount of money they have in
//all their bank accounts. The richest customer is the
//customer that has the maximum wealth.
//• m == accounts. length
//• n == accounts [il. length
//• 1 <= m, n <= 50
//• 1 <= accounts [il [j] <= 100
//Banks:
//Input: accounts = [[7,1,31] ,[2,8,7], [1,9,5]]
//Output: 17

const richestCustomerWealth=(arr)=>{
   for(const element of arr){
    let maxsum=0
    for(let i=0;i<element.length;i++){
        let customerwealth = arr[i].reduce((acc,curr)=>acc+curr)
      if(customerwealth > maxsum){
        maxsum = customerwealth
      }
    }
    return maxsum
   }
}

console.log(richestCustomerWealth([[7,1,3],[2,8,7],[1,9,5]])); // Output: 17
// 13. Roman to Integer
// Hint
// Roman numerals are represented by seven different
// symbols: I, V, x, L, C. D and M.

// For example, 2 is written as II in Roman numeral, just
// two ones added together. 12 is written as XII, which is
// simply X + II. The number 27 is written as XXVII, which
// is XX + V + II.

// Roman numerals are usually written largest to smallest
// from left to right. However, the numeral for four is not
// IIII. Instead, the number four is written as IV. Because
// the one is before the five we subtract it making four. The
// same principle applies to the number nine, which is written
// as IX. There are six instances where subtraction is used:

const romanToInt=(s)=>{
   
    const sym = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0;
    for(let i=0;i<s.length;i++){
        let current = sym[s[i]];
        let next = sym[s[i+1]];

        if(current < next){
            result += next - current
            i++
        }
        else{
            result +=current
        }
    }
    return result
}

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("IX")); // 9
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
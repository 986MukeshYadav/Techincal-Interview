function addBinary(a, b) {
    let result = '';
    let carry = 0;
    
    let maxLength = Math.max(a.length, b.length);

    for (let i = 0; i < maxLength; i++) {
        let sum = carry;

        // Add the current bit of a and 'b' if within bounds
        if (i < a.length && b.length) {
            sum += parseInt(a[a.length - 1 - i]) + parseInt(b[b.length - 1 - i]);
        }
        
        // Append current bit to the result (sum % 2 gives 0 or 1)
        result = (sum % 2) + result;
        
        // Calculate the carry for the next bit
        carry = Math.floor(sum / 2);
    }
    
    // If there's a carry left, prepend it to the result
    if (carry > 0) {
        result = carry + result;
    }

    return result;
}

// Example usage
console.log(addBinary("1010", "1011")); // Output: "10101"
console.log(addBinary("11", "1")); // Output: "10101"
//? Write a function to convert an amount from one currency to another using static exchange rates.
// Requirements:
//? Write a function named convertCurrency that takes three parameters: amount, fromCurrency, and toCurrency.
//? Use a fixed object to store exchange rates relative to a base currency (e.g., USD).
//? The function should return the converted amount in the target currency.
//? Handle conversion through USD as a base, meaning if converting from GBP to EUR, first convert GBP to USD, then USD to EUR.
// const rates = 1
// USD: 1,      // Base currency
// EUR: 0.9,    //1 USD = 0.9 EUR
// GBP: 0.8,    // 1 USD = 0.8 GBP
// INR: 82,     // 1 USD = 74 INR

const rates = {
    USD: 1,      // Base currency
    EUR: 0.9,    // 1 USD = 0.9 EUR
    GBP: 0.8,    // 1 USD = 0.8 GBP
    INR: 82,     // 1 USD = 82 INR
};

const convertCurrency = (amount, fc, tc) => {
    let amountInUSD = 0;

    // Convert the 'from currency' amount to USD first
    if (fc !== "USD") {
        amountInUSD = amount / rates[fc];
    } else {
        amountInUSD = amount;
    }

    // Convert the amount in USD to the 'to currency'
    let currencyConverted = 0;
    if (tc !== "USD") {
        currencyConverted = amountInUSD * rates[tc];
    } else {
        currencyConverted = amountInUSD;
    }

    return currencyConverted;
};

console.log(convertCurrency(100, 'USD', 'GBP'));  // Output: 80
console.log(convertCurrency(100, 'USD', 'EUR')); // Output: 90
console.log(convertCurrency(100, 'GBP', 'EUR')); // Output: 112.5
function canCompleteCircuit(gasStations) {
    let totalGas = 0;
    let totalCost = 0;
    let startStation = 1;
    let currentGas = 0;

    // Start iterating from the second element since the first element is just the count
    for (let i = 1; i < gasStations.length; i++) {
        let [gas, cost] = gasStations[i].split(':').map(Number);
        

        totalGas += gas;
        totalCost += cost;
        currentGas += gas - cost;

        if (currentGas < 0) {
            startStation = i + 1; // Move start station to the next one
            currentGas = 0; // Reset current gas for the next potential start
        }
    }

    // If total gas is greater than or equal to the total cost, return the start station index
    // Otherwise, return "impossible"
    return totalGas >= totalCost ? startStation : "impossible";
}

// Example input
const gasStations = ["4", "0:1", "2:2", "1:2", "3:1"];
//const gasStations = ["4", "0:1", "2:2", "1:2", "1:1"];
const result = canCompleteCircuit(gasStations);
console.log(result); // Output: 4 or "impossible"



//========================================================================================================



// function canCompleteCircuit(gas, cost) {
//     let totalGas = 0;
//     let totalCost = 0;
//     let startStation = 0;
//     let currentGas = 0;

//     for (let i = 0; i < gas.length; i++) {
//         totalGas += gas[i];
//         totalCost += cost[i];
//         currentGas += gas[i] - cost[i];

//         if (currentGas < 0) {
//             startStation = i + 1; // Move start station to the next one
//             currentGas = 0; // Reset current gas for the next potential start
//         }
//     }

//     // If total gas is greater than or equal to the total cost, return the start station index
//     // Otherwise, return "impossible"
//     return totalGas >= totalCost ? startStation : "impossible";
// }

// // Example input
// const gas = [1, 2, 3, 4, 5];
// const cost = [3, 4, 5, 1, 2];
// const result = canCompleteCircuit(gas, cost);
// console.log(result); // Output: 3 or "impossible"
'use strict';
const prompt = require("prompt-sync")();

// Values for coin inputs
const coinValues = {
    q: 25,
    d: 10,
    n: 5
};

// List of products, containing names and costs
const productList = [
    {name: "Doritos", cost: 100},
    {name: "Takis", cost: 125},
    {name: "Mike & Ikes", cost: 65}
];

// Gather input to build up total amount of money
let done = false;
while (!done) {
    let coin = prompt("Enter a coin: Q, N, D, or S to select item: ");
    if (coin == 's') {
        done = true;
    }
    else if (coin in coinValues) {
        total += coinValues[coin];
        console.log(`Total is now: ${toMoney(total)}`);
    }
    else {
        console.log("I don't know what that is.");
    }
}

while (total < minimum) {
    printChoices(productList);
}


// Function to format a number of cents into a readable dollar amount
function toMoney(value) {
    return "$"+(value/100).toFixed(2);
};

// Prints the choices to the user from the product list
function printChoices(products) {
    for (let i = 0; i < products.length; i++) {
        console.log(` ${i+1}. ${products[i].name}: ${products[i].cost}`);
    }
}

// Find the minimum cost to buy something
function findMinimumCost(products) {
    let minimum = 1000;
    for (let i = 0; i < products.length; i++) {
        if (products[i].cost < minimum) {
            minimum = products[i].cost;
        }
    }
    return minimum;
}

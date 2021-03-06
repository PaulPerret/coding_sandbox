"use strict";
const prompt = require("prompt-sync")();

// Values for coin inputs
const COIN_VALUES = {
    q: 25,
    d: 10,
    n: 5,
};

// List of products, containing names and costs
const PRODUCT_LIST = [
    { name: "Doritos", cost: 100 },
    { name: "Takis", cost: 125 },
    { name: "Mike & Ikes", cost: 65 },
    { name: "Cheez-its", cost: 90 },
];

// Gather input to build up total amount of money
let done = false;
let total = 0;
while (!done) {
    let coin = prompt("Enter a coin: Q, N, D, or S to select item: ").toLowerCase();
    if (coin === "s") {
        done = true;
    } else if (coin in COIN_VALUES) {
        total += COIN_VALUES[coin];
        console.log(`You have inserted: ${toMoney(total)}`);
    } else {
        console.log("I don't know what that is.");
    }
}

// Loop making selection until not enough money left
let minimum = findMinimumCost(PRODUCT_LIST);
while (total >= minimum) {
    printChoices(PRODUCT_LIST);
    let choice = prompt("Choice: ");

    if (choice.toLowerCase() === "r") {
        console.log(`Coin return chosen`);
        break;
    } else if (!Number.isNaN(parseInt(choice))) {
        if (PRODUCT_LIST.length < Number(choice)) {
            console.log(`Please make a valid selection.`);
        } else {
            let product = PRODUCT_LIST[Number(choice) - 1];
            if (product.cost <= total) {
                total -= product.cost;
                console.log(
                    `Enjoy your ${product.name}! You have ${toMoney(total)} left.`
                );
            } else {
                console.log(
                    `You don't have enough money for ${product.name}. Please make another selection.`
                );
            }
        }
    }
}

console.log(`\nHere's your change: ${toMoney(total)}`);

// Format a number of cents into a readable dollar amount
function toMoney(value) {
    return "$" + (value / 100).toFixed(2);
}

// Prints the choices to the user from the product list
function printChoices(products) {
    console.log("\nPlease make your selection:");
    for (let i = 0; i < products.length; i++) {
        console.log(` ${i + 1}. ${products[i].name}: ${toMoney(products[i].cost)}`);
    }
    console.log(` (R. Coin return)`);
}

// Find the minimum cost to buy something from the product list
function findMinimumCost(products) {
    let minimum = 1000;
    for (let i = 0; i < products.length; i++) {
        if (products[i].cost < minimum) {
            minimum = products[i].cost;
        }
    }
    return minimum;
}

/*
* This is just some text to trigger a commit to a different branch.
*/
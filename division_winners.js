"use strict";
const prompt = require("prompt-sync")();

const AFC_EAST = [
    { "team": "Bills", "odds": -180, "division": "AFC EAST" },
    { "team": "Patriots", "odds": 400, "division": "AFC EAST"  },
    { "team": "Dolphins", "odds": 400, "division": "AFC EAST"  },
];

const AFC_NORTH = [
    { "team": "Ravens", "odds": 200, "division": "AFC NORTH" },
    { "team": "Browns", "odds": 200, "division": "AFC NORTH" },
    { "team": "Bengals", "odds": 210, "division": "AFC NORTH" },
];

const AFC_SOUTH = [
    { "team": "Colts", "odds": 105, "division": "AFC SOUTH" },
    { "team": "Titans", "odds": 145, "division": "AFC SOUTH" },
]

const AFC_WEST = [
    { "team": "Chiefs", "odds": 155, "division": "AFC WEST" },
    { "team": "Chargers", "odds": 240, "division": "AFC WEST" },
    { "team": "Broncos", "odds": 260, "division": "AFC WEST" },
]

const NFC_EAST = [
    { "team": "Cowboys", "odds": 115, "division": "NFC EAST"},
    { "team": "Eagles", "odds": 210, "division": "NFC EAST"},
]

const NFC_NORTH = [
    { "team": "Packers", "odds": -170, "division": "NFC NORTH"},
    { "team": "Vikings", "odds": 280, "division": "NFC NORTH"},
]

const NFC_SOUTH = [
    { "team": "Buccaneers", "odds": -320, "division": "NFC SOUTH"},
    { "team": "Saints", "odds": 320, "division": "NFC SOUTH"},
]

const NFC_WEST = [
    { "team": "Rams", "odds": 130, "division": "NFC WEST"},
    { "team": "49ers", "odds": 190, "division": "NFC WEST"},
    { "team": "Cardinals", "odds": 320, "division": "NFC WEST"},
]


const TEAM_LIST = [AFC_EAST, AFC_WEST, AFC_NORTH, AFC_SOUTH, NFC_EAST, NFC_WEST, NFC_NORTH, NFC_SOUTH];

let finalList = [];

let currentList = [];
AFC_EAST.forEach(element => {
    currentList.push(element);
    AFC_WEST.forEach(element => {
        currentList.push(element);
        AFC_NORTH.forEach(element => {
            currentList.push(element);
            AFC_SOUTH.forEach(element => {
                currentList.push(element);
                NFC_EAST.forEach(element => {
                    currentList.push(element);
                    NFC_WEST.forEach(element => {
                        currentList.push(element);
                        NFC_NORTH.forEach(element => {
                            currentList.push(element);
                            NFC_SOUTH.forEach(element => {
                                currentList.push(element);
                                let aggregateOdds = calculateAggregateOdds(currentList);
                                finalList.push({"teamList": currentList.slice(), "aggregateOdds": aggregateOdds});
                                currentList.pop();
                            })
                            currentList.pop();
                        })
                        currentList.pop();
                    })
                    currentList.pop();
                })
                currentList.pop();
            })
            currentList.pop();
        })
        currentList.pop();
    })
    currentList.pop();
});

// Sort the list
finalList.sort((a, b) => {
    return a.aggregateOdds - b.aggregateOdds;
});

// Print the list
for (let i = 0; i < 40; i++) {
    console.log(`${i+1}.`)
    finalList[i].teamList.forEach(element => {
        console.log(element);
    });
    console.log(`Odds: ${finalList[i].aggregateOdds}\n`);
}


function calculateAggregateOdds(teamList) {
    let aggregateOdds = 0;
    teamList.forEach(element => {
        aggregateOdds += element.odds;
    });
    return aggregateOdds;
}



"use strict";
function list(names) {
    return names.map((name) => name.name);
}
const ScoobyTeam = [
    { name: "Scooby" },
    { name: "Shaggy" },
    { name: "Fred" },
    { name: "Daphne" },
    { name: "Velma" },
];
console.log(list(ScoobyTeam));

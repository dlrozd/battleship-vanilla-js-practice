const location1 = 3;
const location2 = 4;
const location3 = 5;

let isSunk = false;
let guessHit;
let hits = 0

while (isSunk === false) {
    guessHit = +prompt("Guess a location. Enter a number between 1 and 6.");
    if (guessHit === location1 || guessHit === location2 || guessHit === location3) {
        alert("You hit a ship!");
        hits = hits + 1;
        if (hits === 3) {
            alert("You sunk my battleship!");
            isSunk = true;
        }
    } else {
        alert("You missed!");
    }
}
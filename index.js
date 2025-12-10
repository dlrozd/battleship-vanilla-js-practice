// added a random number generator
let randomNumber = Math.floor(Math.random() * 6);
const location1 = randomNumber;
const location2 = location1 + 1;
const location3 = location2 + 1;

let isSunk = false;
let guessHit;
let hits = 0
let guessesHits = 0;

while (isSunk === false) {

    guessHit = +prompt("Guess a location. Enter a number between 0 and 6.");
    guessesHits = guessesHits + 1;

    if (guessHit < 0 || guessHit > 6) {
        // added a check valid number
        alert("Please enter a number between 0 and 6.");
    } else {
        if (guessHit === location1 || guessHit === location2 || guessHit === location3) {
            alert("You hit a ship!");
            hits = hits + 1;
            if (hits === 3) {
                isSunk = true;
                alert("You sunk my battleship!");
            }
        } else {
            alert("You missed!");
        }
    }
}
// added a score
const score = 'You shot a ' + hits + ' times' + ' and you guessed ' + guessesHits + ' times';
alert('STATS: \n' + score);

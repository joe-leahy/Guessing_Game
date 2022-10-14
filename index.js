// gets a random number
function randomNum() {
  let number = Math.floor(Math.random() * 100) + 1;
  console.log(`Random number: ${number}`);
  return number;
}

//for testing,  display random num on screen
let results = document.getElementById("results");
let random = randomNum();

// results.textContent = random;

const guessForm = document.getElementById("guess");
const guessList = document.querySelector("#guesses");

let guessCount = 0;

let guessAttempt;
document
  .querySelector("form.guessForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    guessAttempt = document.createElement("li");
    guessAttempt.textContent = guessForm.value;
    guessList.append(guessAttempt);

    // this could look a lot cleaner with a switch statement
    if (guessForm.value == random && !(guessCount > 4)) {
      console.log(`Nice! You got it on ${guessCount} guesses!`);
      gameOver();
    } else if (guessForm.value < random && !(guessCount > 4)) {
      guessCount++;
      alert(`You're too low. Guess count: ${guessCount}`);
      gameOver();
    } else if (guessForm.value > random && !(guessCount > 4)) {
      guessCount++;
      alert(`You're too high. Guess count: ${guessCount}`);
      gameOver();
    } else {
      gameOver();
    }
  
  });

function gameOver() {
  if (guessCount > 4) {
    alert(`Game over you lose!`);
    window.location.reload();
  }
}

// playGame()

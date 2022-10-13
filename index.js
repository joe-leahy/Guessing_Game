// //game loop
// function playGame(){
//     //variables
//     let randomNumber = Math.floor(Math.random() * 100) + 1;
//     let playerGuess ;


// //    //winning logic
//    if (playerGuess === randomNumber) {
//     console.log("you got it")
//    }

// }

// gets a random number
function randomNum() { 
   let number = Math.floor(Math.random() * 100) + 1;
    console.log(`Random number: ${number}`);
    return number;
}

//for testing,  display random num on screen
let results = document.getElementById('results')
let random = randomNum();

results.textContent = random;

const guessForm = document.getElementById('guess');
const guessList = document.querySelector('#guesses')



let guessAttempt;
document.querySelector('form.guessForm').addEventListener('submit', function (e) {
    e.preventDefault();  
    guessAttempt = document.createElement('li')
    guessAttempt.textContent = guessForm.value;
    guessList.append(guessAttempt);  
    if (guessForm.value == random) {

        console.log('You win');

    }
}); 


// playGame()

// gets a random number
function randomNum() { 
   let number = Math.floor(Math.random() * 100) + 1;
    console.log(`Random number: ${number}`);
    return number;
}


const guessForm = document.getElementById('guess');
const guessList = document.querySelector('#guesses')
const resetBtn = document.querySelector('#reset')

// gets players guess
document.querySelector('form.guessForm').addEventListener('submit', function (e) {
    e.preventDefault();  
    let guessAttempt = document.createElement('li')
    guessAttempt.textContent = guessForm.value;
    guessList.append(guessAttempt);
 
});


// function resetList() {

// }

// resetBtn.addEventListener("click", function() {
//     let guessAttempt = document.createElement('li')
//     guessAttempt.textContent = "";
//    randomNum()
    
// })


randomNum()
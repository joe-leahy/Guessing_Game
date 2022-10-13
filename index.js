let body = document.body;
let gameBoard = document.getElementById('testing')
body.append(gameBoard);

let state = {
    hint: '',
    randomNum: Math.floor(Math.random()* 100)+1
}

//display random number
gameBoard.textContent = state.randomNum;

/**function win(guess){

    if (guess === state.randomNum){

        //YOU WIN!

    }
}
    */


/** function giveHint (guess){
 


 */











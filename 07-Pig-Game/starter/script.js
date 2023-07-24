'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');


//Starting Conditions
/* let scores = []
let activePlayer;
let currentScore;
let playing; */
let scores, activePlayer, currentScore, playing;

//Initialize Game
function init() {
    scores = [0, 0]
    activePlayer = 0;
    currentScore = 0;
    playing = true;

    player0El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    diceEl.classList.add('hidden');

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
}
init();

//Repeated Functions
function switchPlayer() {
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

//Roll the dice - ROLL DICE BUTTON

btnRoll.addEventListener('click', function () {
    if (playing) {
        //1. Generate number from 1-6
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);

        //2. Display the dice image
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        //3. Check for a rolled '1', if TRUE, switch to NEXT PLAYER

        if (dice !== 1) {
            //Add dice to current score
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else {
            //Switch Player
            switchPlayer()
        }
    }
})


//Hold Score -- HOLD BUTTON

btnHold.addEventListener('click', function () {

    if (playing) {
        //1. Add 'Current Score' to active player's total
        scores[activePlayer] += currentScore;

        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
        //2. Check if player's total is >=100
        if (scores[activePlayer] >= 100) {
            //Finish Game
            diceEl.classList.add('hidden');
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner', 'name')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')

        } else {
            //3. Switch Player
            switchPlayer()
        }
    }
})


//Reset Game -- NEW GAME BUTTON
btnNew.addEventListener('click', init)
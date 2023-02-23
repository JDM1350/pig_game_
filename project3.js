
const player1 = document.querySelector('.player0')
const player2 = document.querySelector('.player1')

const score1 = document.querySelector('#number-0');
const score2 = document.getElementById('number-1');
const dice = document.querySelector('.dice');

const current1 = document.getElementById('current-0');
const current2 = document.getElementById('current-1');

score1.textContent = 0;
    score2.textContent = 0;
let  playing = true;
   let  currentscore = 0;
   let  activeplayer = 0;
   const  scores = [0, 0];
   dice.classList.add('hide');


// function for clear all and start from new
const inti = function () {
    dice.classList.add('hide');
    score1.textContent = 0;
    score2.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;
    player1.classList.remove('winner');
    player2.classList.remove('winner');
    player1.classList.add('active');
    player2.classList.remove('active');
    playing = true;
   currentscore = 0;
     activeplayer = 0;
     scores = [0, 0];
}




function switchPlayer() {

    document.getElementById(`current-${activeplayer}`).textContent = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    currentscore = 0;
    player1.classList.toggle('active')
    player2.classList.toggle('active')
}

// ROLLING THE DICE 
const btnnew = document.querySelector('.new');
const btnroll = document.querySelector('.roll');
const btnhold = document.querySelector('.hold');


btnroll.addEventListener('click', function () {
    if (playing) {

        //1. generating a random dice roll 
        const dic = Math.trunc(Math.random() * 6) + 1

        // 2. display dice 
        dice.classList.remove('hide');
        dice.src = `dice${dic}.png`;
        // 3.check for rolled 1: if true , switch to next player

        if (dic !== 1) {
            // add dice to current score
            currentscore += dic;
            document.getElementById(`current-${activeplayer}`).textContent = currentscore;
            // change later 
        }
        else {
            // switch to next player
            switchPlayer();

        }
    }

})

btnhold.addEventListener('click', function () {
    if (playing) {
        //1 . add current score to active player's score

        scores[activeplayer] += currentscore;
        document.getElementById(`number-${activeplayer}`).textContent = scores[activeplayer];




        //2. check if player's score is>=50

        if (scores[activeplayer] >= 20) {
            playing = false;
            document.querySelector(`.player${activeplayer}`).classList.add('winner')
            document.querySelector(`.player${activeplayer}`).classList.remove('active')
            dice.classList.add('hide');
        }
        else {

            switchPlayer();
        }

    }


    //3.finish the game 



    //4. switch to next player 
})

btnnew.addEventListener('click',inti );

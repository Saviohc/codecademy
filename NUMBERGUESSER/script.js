let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = ( ) => Math.floor(Math.random() * 10);

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    const humanDiff    = Math.abs(targetNumber - humanGuess);
    const computerDiff = Math.abs(targetNumber - computerGuess);

    if (humanDiff === computerDiff) {
        return true; //human wins
    } else if (humanDiff < computerDiff){
        return true; //human wins
    } else {
        return false; //computer wins
    }
}

const updateScore = (winner) => {
    switch (winner){
        case 'human':
        humanScore ++;
        break;
        case 'computer':
        computerScore ++;
        break;

    }
}

const advanceRound = ( ) => currentRoundNumber ++;

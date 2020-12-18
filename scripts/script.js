
// creat playerScore and computerScore variables

let playerScore = 0;
let computerScore = 0;


// Function that randomly returns rock, paper, or scissors

function computerPlay() {
    let playNumber = Math.floor(Math.random() * 3);
    if (playNumber === 0){
        return "rock"
    } else if (playNumber === 1) {
        return "paper"
    } else if  (playNumber === 2) {
        return "scissors"
    } else {
        alert("Oh my!")
    };
};

// FUNCTION single round of Rock/paper/scissors with the parameters being strings of rock, paper, or scissors

function playRound(player, computer) {
    if (player == computer){
        return 1;
    } else if (player == "rock"){
        if (computer == "paper") {
            return 2;
        } else if (computer == "scissors") {
            return 3;
        };
    } else if (player == "paper"){
        if (computer == "scissors") {
            return 2;
        } else if (computer == "rock") {
            return 3;
        };
    } else if (player == "scissors"){
        if (computer == "rock") {
            return 2;
        } else if (computer == "paper") {
            return 3;
        };
    }
}

// button triggers playRound with playerSelection
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', event => {
        console.log(button.id)
        playerSelection = button.id;
        computerSelection = computerPlay();
        result = playRound(playerSelection,computerSelection);
        tally(result);
    })
})

// tally function: keep track of variables and 

function tally(gameResult) {
    // if (playerScore && 

    const resultsContainer = document.querySelector('#results');
    resultsContainer.style.cssText = "background-color: pink; text-align: left;"


    if (gameResult === 3) {
        playerScore++;
        resultsContainer.textContent = 'Computer: ' + computerScore + ' Player: ' + playerScore;
    } else if (gameResult === 2) {
        computerScore++;
        resultsContainer.textContent = 'Computer: ' + computerScore + ' Player: ' + playerScore;
    } else if (gameResult === 1) {
        resultsContainer.textContent = 'Computer: ' + computerScore + ' Player: ' + playerScore + " (Draw)";
    } else {
        alert ('Something’s gone terribly wrong!');
    };
    if (playerScore >= 5) {
        alert('You win! ' + 'Computer: ' + computerScore + ' Player: ' + playerScore);
        resultsContainer.textContent = 'Computer: ' + computerScore + ' Player: ' + playerScore;
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore >=5) {
        alert('You lose! ' + 'Computer: ' + computerScore + ' Player: ' + playerScore);
        resultsContainer.textContent = 'Computer: ' + computerScore + ' Player: ' + playerScore;
        playerScore = 0;
        computerScore = 0;
    } else {
    };
}


// Function that solicits and returns a player choice (and chooses rock if the player doesn’t input a legitimate choice)

// function getUserInput(input) {
//     let userInputInsensitive = input;
//     userInput = userInputInsensitive.toLowerCase();
//     if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors') {
//         return userInput;
//     } else {
//         alert('That’s not an option! (It’s called “Rock, paper, scissors”, silly!) Rock it is!');
//         return "rock";
//     }
// }

// To juice this up, you’d need to figure out a way to add enough iterations to get a result when you have a draw
// Another way to improve it would be to evaluate after games 3, 4, and 5 whether either computer or player had won enough games to win the “series”
// I only built it with the playRound function outputtng a string because it said that initially.
// I didn’t read that we could rework the functions. I would have had it input a number or something to make the if function simpler







// Game function: five rounds, displaying results after each round and alerting the winner at the end
function game() {
    // Set win count variables to 0
    let userCount = 0;
    let computerCount = 0;

    // instance one
    playerSelection = getUserInput();
    console.log("player Selection was " + playerSelection)
    computerSelection = computerPlay();
    console.log("computer Selection was " + computerSelection)
    roundResult = playRound(playerSelection,computerSelection);
    console.log(roundResult)
    if (roundResult.indexOf("lose") !== -1) {
        ++computerCount;
    } else if (roundResult.indexOf("win") !== -1) {
        ++userCount;
    };
    console.log("Computer: " + computerCount + ". User: " + userCount);

    // instance two
    playerSelection = getUserInput();
    console.log("player Selection was " + playerSelection)
    computerSelection = computerPlay();
    console.log("computer Selection was " + computerSelection)
    roundResult = playRound(playerSelection,computerSelection);
    console.log(roundResult)
    if (roundResult.indexOf("lose") !== -1) {
        ++computerCount;
    } else if (roundResult.indexOf("win") !== -1) {
        ++userCount;
    };
    console.log("Computer: " + computerCount + ". User: " + userCount);

    // instance three
    playerSelection = getUserInput();
    console.log("player Selection was " + playerSelection)
    computerSelection = computerPlay();
    console.log("computer Selection was " + computerSelection)
    roundResult = playRound(playerSelection,computerSelection);
    console.log(roundResult)
    if (roundResult.indexOf("lose") !== -1) {
        ++computerCount;
    } else if (roundResult.indexOf("win") !== -1) {
        ++userCount;
    };
    console.log("Computer: " + computerCount + ". User: " + userCount);
    
    // instance four
    playerSelection = getUserInput();
    console.log("player Selection was " + playerSelection)
    computerSelection = computerPlay();
    console.log("computer Selection was " + computerSelection)
    roundResult = playRound(playerSelection,computerSelection);
    console.log(roundResult)
    if (roundResult.indexOf("lose") !== -1) {
        ++computerCount;
    } else if (roundResult.indexOf("win") !== -1) {
        ++userCount;
    };
    console.log("Computer: " + computerCount + ". User: " + userCount);
    
    // instance five
    playerSelection = getUserInput();
    console.log("player Selection was " + playerSelection)
    computerSelection = computerPlay();
    console.log("computer Selection was " + computerSelection)
    roundResult = playRound(playerSelection,computerSelection);
    console.log(roundResult)
    if (roundResult.indexOf("lose") !== -1) {
        ++computerCount;
    } else if (roundResult.indexOf("win") !== -1) {
        ++userCount;
    };
    console.log("Computer: " + computerCount + ". User: " + userCount);

    // report winnner or loser
    if (computerCount > userCount) {
        alert("You lost to the computer!")
    } else if (userCount > computerCount) {
        alert("You beat the computer!")
    } else {
        alert("Looks like a draw… Hmm…")
    }

    // reset values
    userCount = 0;
    computerCount = 0;
}

//function that generates a random number between min(included) and max(excluded)
function generateRandom(min = 0, max = 100) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

//function that choses at random rock=0, paper=1 or scissors=2
function getComputerChoice(){
    let choice = generateRandom(0,3);
    switch(choice){
        case 0:
            return "rock"
            break;
        case 1:
            return "paper"
            break;
        case 2:
            return "scissors"
            break;
    }
}

//function that decides who won the round
function getRoundResult(computerSelection, playerSelection){
    switch(playerSelection){
        case "rock":
            switch(computerSelection){
                case "rock":
                    resultText.textContent=""
                    resultText.textContent=`It's a Tied round!`
                    return 0
                    break;
                case "paper":
                    resultText.textContent=""
                    resultText.textContent=`${computerSelection} beats ${playerSelection}, You Lost the round!`
                    return -1
                    break;
                case "scissors":
                    resultText.textContent=""
                    resultText.textContent=`${playerSelection} beats ${computerSelection}, You Won the round!`
                    return 1
                    break;
            }
            break;
        case "paper":
            switch(computerSelection){
                case "rock":
                    resultText.textContent=""
                    resultText.textContent=`${playerSelection} beats ${computerSelection}, You Won the round!`
                    return 1
                    break;
                case "paper":
                    resultText.textContent=""
                    resultText.textContent=`It's a Tied round!`
                    return 0
                    break;
                case "scissors":
                    resultText.textContent=""
                    resultText.textContent=`${computerSelection} beats ${playerSelection}, You Lost the round!`
                    return -1
                    break;
            }
            break;
        case "scissors":
            switch(computerSelection){
                case "rock":
                    resultText.textContent=""
                    resultText.textContent=`${computerSelection} beats ${playerSelection}, You Lost the round!`
                    return -1
                    break;
                case "paper":
                    resultText.textContent=""
                    resultText.textContent=`${playerSelection} beats ${computerSelection}, You Won the round!`
                        return 1
                    break;
                case "scissors":
                    resultText.textContent=""
                    resultText.textContent=`It's a Tied round!`
                    return 0
                    break;
            }
            break;
    }
}

//function that changes the game score
function changeGameScore(){
    gameScore.textContent=`${computerScoreGame} - ${playerScoreGame}`
}

//function that check is the best of 5 game ended and chooses the winner
function checkGameEnd(){
    if(roundNumber==5||computerScoreRound==3||playerScoreRound==3){
        if(computerScoreRound>playerScoreRound){
            computerScoreGame++;
            changeGameScore()
        }else if(computerScoreRound<playerScoreRound){
            playerScoreGame++;
            changeGameScore();
        }
        playerScoreRound=0;
        computerScoreRound=0;
    }
}

//function that changes the round score after checking if the game ended
function changeRoundScore(){
    checkGameEnd();
    roundScore.textContent=`${computerScoreRound} - ${playerScoreRound}`
}

//function that plays round you hit a button
function playRound(result){
    if(result==1){
        playerScoreRound++;
    }else if(result==-1){
        computerScoreRound++;
    }
    changeRoundScore();
}

//variables
const gameScore=document.querySelector(".game-result")
const roundScore=document.querySelector(".round-result")
const buttonRock=document.getElementById("rock")
const buttonPaper=document.getElementById("paper")
const buttonScissors=document.getElementById("scissors")
const resultText= document.getElementById("result-text")
let computerScoreRound=0;
let playerScoreRound=0;
let roundNumber=0;
let computerScoreGame=0;
let playerScoreGame=4564;

//event listeners
buttonRock.addEventListener("click",function(){
    let result=getRoundResult(getComputerChoice(),"rock")
    roundNumber++
    playRound(result)
})

buttonPaper.addEventListener("click",function(){
    let result=getRoundResult(getComputerChoice(),"paper")
    roundNumber++
    playRound(result)
})

buttonScissors.addEventListener("click",function(){
    let result=getRoundResult(getComputerChoice(),"scissors")
    roundNumber++
    playRound(result)
})

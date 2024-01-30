
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

// function getPlayerChoice(){
//     let player;
//     do {
//         //player= prompt("Rock, Paper or Scissors ?","rock");
//         player=player.toLowerCase();
//     } while (player!="rock"&&player!="paper"&&player!="scissors");
//     return player
// }

function round(computerSelection, playerSelection){
    console.log(`You played ${playerSelection}`)
    console.log(`Computer played ${computerSelection}`)
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

// function playGame(){
//     let player
//     let computer
//     let roundResult
//     let playerScore=0
//     let computerScore=0
//     for(let i=0;i<5;i++){
//         player=getPlayerChoice()
//         computer=getComputerChoice()
//         roundResult=round(computer,player)
//         switch(roundResult){
//             case 0:
//                 break;
//             case 1:
//                 playerScore++
//                 break;
//             case -1:
//                 computerScore++
//                 break;
//         }
//         if(computerScore==3||playerScore==3)
//             break;
//     }
//     if(computerScore==playerScore){
//         console.log(`GG it was a tied game! score: ${playerScore} - ${computerScore}`)
//     }else if(playerScore>computerScore){
//         console.log(`GG You Won the game! score: ${playerScore} - ${computerScore}`)
//     }else{
//         console.log(`GG You Lost the game! score: ${playerScore} - ${computerScore}`)
//     }
// }
function checkRoundEnd(){
    if(roundNumber>5){
        if(computerScore>playerScore){
            computerScore=1;
            playerScore=0;
        }else if(computerScore<playerScore){
            playerScore=1;
            computerScore=0;
        }else{
            playerScore=0;
            computerScore=0;
        }
        roundNumber=1;
    }
}

function changeRoundScore(){
    checkRoundEnd();
    roundScore.textContent=`${computerScore} - ${playerScore}`
}

// function changeGameScore(result){
//     switch(result){
//         case 1:
//             gameScore
//     }
// }
function playGame(result){
    if(result==1){
        playerScore++;
        changeRoundScore();
    }else if(result==-1){
        computerScore++;
        changeRoundScore();
    }
}

const gameScore=document.querySelector(".game-result")
const roundScore=document.querySelector(".round-result")
const buttonRock=document.getElementById("rock")
const buttonPaper=document.getElementById("paper")
const buttonScissors=document.getElementById("scissors")
const resultText= document.getElementById("result-text")
let computerScore=0;
let playerScore=0;
let roundNumber=0;
buttonRock.addEventListener("click",function(){
    let result=round(getComputerChoice(),"rock")
    roundNumber++
    playGame(result)
})

buttonPaper.addEventListener("click",function(){
    let result=round(getComputerChoice(),"paper")
    roundNumber++
    playGame(result)
})

buttonScissors.addEventListener("click",function(){
    let result=round(getComputerChoice(),"scissors")
    roundNumber++
    playGame(result)
})

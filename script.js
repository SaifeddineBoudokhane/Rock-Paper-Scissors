
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
function getPlayerChoice(){
    let player;
    do {
        //player= prompt("Rock, Paper or Scissors ?","rock");
        player=player.toLowerCase();
    } while (player!="rock"&&player!="paper"&&player!="scissors");
    return player
}

function round(computerSelection, playerSelection){
    console.log(`You played ${playerSelection}`)
    console.log(`Computer played ${computerSelection}`)
    switch(playerSelection){
        case "rock":
            switch(computerSelection){
                case "rock":
                    console.log(`It's a Tied round!`)
                    return 0
                    break;
                case "paper":
                    console.log(`${computerSelection} beats ${playerSelection}, You Lost the round!`)
                    return -1
                    break;
                case "scissors":
                    console.log(`${playerSelection} beats ${computerSelection}, You Won the round!`)
                    return 1
                    break;
            }
            break;
        case "paper":
            switch(computerSelection){
                case "rock":
                    console.log(`${playerSelection} beats ${computerSelection}, You Won the round!`)
                    return 1
                    break;
                case "paper":
                    console.log(`It's a Tied round!`)
                    return 0
                    break;
                case "scissors":
                    console.log(`${computerSelection} beats ${playerSelection}, You Lost the round!`)
                    return -1
                    break;
            }
            break;
        case "scissors":
            switch(computerSelection){
                case "rock":
                    console.log(`${computerSelection} beats ${playerSelection}, You Lost the round!`)
                    return -1
                    break;
                case "paper":
                        console.log(`${playerSelection} beats ${computerSelection}, You Won the round!`)
                        return 1
                    break;
                case "scissors":
                    console.log(`It's a Tied round!`)
                    return 0
                    break;
            }
            break;
    }
}
function playGame(){
    let player
    let computer
    let roundResult
    let playerScore=0
    let computerScore=0
    for(let i=0;i<5;i++){
        player=getPlayerChoice()
        computer=getComputerChoice()
        roundResult=round(computer,player)
        switch(roundResult){
            case 0:
                break;
            case 1:
                playerScore++
                break;
            case -1:
                computerScore++
                break;
        }
        if(computerScore==3||playerScore==3)
            break;
    }
    if(computerScore==playerScore){
        console.log(`GG it was a tied game! score: ${playerScore} - ${computerScore}`)
    }else if(playerScore>computerScore){
        console.log(`GG You Won the game! score: ${playerScore} - ${computerScore}`)
    }else{
        console.log(`GG You Lost the game! score: ${playerScore} - ${computerScore}`)
    }
}
playGame()
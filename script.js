
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
        player= prompt("Rock, Paper or Scissors ?","rock");
        player=player.toLowerCase();
    } while (player!="rock"&&player!="paper"&&player!="scissors");
    return player
}

let computer=getComputerChoice();
let player= getPlayerChoice();

function round(computerSelection, playerSelection){
    console.log(`You played ${playerSelection}`)
    console.log(`Computer played ${computerSelection}`)
    switch(playerSelection){
        case "rock":
            switch(computerSelection){
                case "rock":
                    console.log(`It's a Tie!`)
                    break;
                case "paper":
                    console.log(`${computerSelection} beats ${playerSelection}, You Lose!`)
                    break;
                case "scissors":
                    console.log(`${playerSelection} beats ${computerSelection}, You Win!`)
                    break;
            }
            break;
        case "paper":
            switch(computerSelection){
                case "rock":
                    console.log(`${playerSelection} beats ${computerSelection}, You Win!`)
                    break;
                case "paper":
                    console.log(`It's a Tie!`)
                    break;
                case "scissors":
                    console.log(`${computerSelection} beats ${playerSelection}, You Lose!`)
                    break;
            }
            break;
        case "scissors":
            switch(computerSelection){
                case "rock":
                    console.log(`${computerSelection} beats ${playerSelection}, You Lose!`)
                    break;
                case "paper":
                        console.log(`${playerSelection} beats ${computerSelection}, You Win!`)
                    break;
                case "scissors":
                    console.log(`It's a Tie!`)
                    break;
            }
            break;
    }
}

round(computer,player);
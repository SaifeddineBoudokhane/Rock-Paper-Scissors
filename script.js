
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
            console.log("Rock")
            break;
        case 1:
            console.log("Paper")
            break;
        case 2:
            console.log("Scissors")
            break;
    }
}
getComputerChoice()
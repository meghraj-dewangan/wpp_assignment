// Generate a random number between  1  and 10
const generateNum = Math.ceil(Math.random()*10);

// prompt the user to inpu a guess number
//parseInt is for prompt take a nuber as a string converted to integer

const userGuess = parseInt(prompt('Guess the number between 1 and 10;'));
if(userGuess===generateNum){
    console.log('Good Work!');
}else{
    console.log('Not matched. The correct number was :'+generateNum)
}
let userScore = 0;
let compScore =0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

function convertToWord(letter){
    if(letter === 'r')  return 'Rock ';
    if(letter === 'p')  return 'Paper ';
    return 'Scissors ';
}

function win(user,comp){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = convertToWord(user) + 'beats ' + convertToWord(comp) + " you win!";//or write it in template strings
}

function lose(user,comp){
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convertToWord(comp)} beats ${convertToWord(user)} you loose!`;

}

function draw(user,comp){
    result_div.innerHTML = convertToWord(comp) + 'vs ' + convertToWord(user) + " it's a draw try again!"
}


//function game will take user input/ choice
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
        win(userChoice,computerChoice);
        break;
        case 'rp':
        case 'ps':
        case 'sr':
        lose(userChoice,computerChoice);
        break;
        case 'rr':
        case 'pp':
        case 'ss':
        draw(userChoice,computerChoice);
        break;
    }

}



//COMPUTER CHOICE FUNCTION

function getComputerChoice(){
    const choices= ['r','p','s'];
    //random choice for computer
    const randomNumber = Math.floor(Math.random() * 3 );
    return choices[randomNumber];
}
getComputerChoice();



//MAIN FUNCTION
function main(){

rock_div.addEventListener('click', function(){
    game('r');
    
})

paper_div.addEventListener('click', function(){
    game('p');
})

scissor_div.addEventListener('click', function(){
    game('s');
    
})
}

main();
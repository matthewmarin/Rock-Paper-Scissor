// Selecting elements.
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');

// Storing the scores.
let computerScore = 1;
let playerScore = 1;

const rockIcon = "far fa-hand-rock";
const paperIcon = "far fa-hand-paper";
const scissorsIcon = "far fa-hand-scissors";

const randomClasses = [rockIcon, paperIcon, scissorsIcon];
const text = document.getElementById('demo');
const text2 = document.getElementById('demo2');

const tie = ()=>{
    text.innerHTML = "DRAW! ";
    text.style.color = '#058c42';
    text.style.fontSize = '50px';
}

const win = ()=>{
    text.innerHTML = "YOU WIN! ";
    text.style.color = '#3772ff';
    text.style.fontSize = '50px';
}

const lose = ()=>{
    text.innerHTML = "COMPUTER WINS! ";
    text.style.color = '#df2935';
    text.style.fontSize = '50px';
}

// Game Functionality.
const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
        // Random rock paper scissor for the computer and clicked ones for the player
           let clickedBtn = e.target.className;
           showIcon.className = clickedBtn;
           let randomNum = Math.floor(Math.random() * randomClasses.length);
           computerShowIcon.className = randomClasses[randomNum];

           // If it's a Tie .
           if(showIcon.className === computerShowIcon.className){
               pScore.innerHTML = pScore.innerHTML;
               cScore.innerHTML = cScore.innerHTML;
               tie();
           }

           // if it's not a Tie.
           else if(showIcon.className === rockIcon && computerShowIcon.className === scissorsIcon){
               pScore.innerHTML = playerScore;
               playerScore++;
               win();
           }else if(showIcon.className === rockIcon && computerShowIcon.className === paperIcon){
               cScore.innerHTML = computerScore;
               computerScore++;
               lose();
           }else if(showIcon.className === paperIcon && computerShowIcon.className === scissorsIcon){
               cScore.innerHTML = computerScore;
               computerScore++;
               lose();
           }else if(showIcon.className === paperIcon && computerShowIcon.className === rockIcon){
               pScore.innerHTML = playerScore;
               playerScore++;
               win();
           }else if(showIcon.className === scissorsIcon && computerShowIcon.className === rockIcon){
               cScore.innerHTML = computerScore;
               computerScore++;
               lose();
           }else if(showIcon.className === scissorsIcon && computerShowIcon.className === paperIcon){
               pScore.innerHTML = playerScore;
               playerScore++;
               win();
           }
        });
    });
}

// Run the game.
game();

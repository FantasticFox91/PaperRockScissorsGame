// Declare possible varinats 

const words = ["Rock","Paper","Scissors"];

//Function for random chose

function computerPlay(){
return words[Math.floor(Math.random()*words.length)]
}

//Game function

function playRound(computerSelection,playerSelection){
    if(computerSelection===playerSelection){
        console.log("It's a draw")
    }

    if(playerSelection ==="ROCK" && computerSelection==="Scissors" ||
        playerSelection === "PAPER" && computerSelection ==="Rock" ||
        playerSelection === "SCISSORS" && computerSelection === "Paper"){
        console.log("You win!!!")
    }

    if(playerSelection === "ROCK" && computerSelection === "Paper" ||
        playerSelection === "PAPER" && computerSelection === "Scissors" ||
        playerSelection === "SCISSORS" && computerSelection === "Rock"){
        console.log("Computer win :((((")
        }
}
//Looping game

for(let i =0;i<=5;i++){
    var userPrompt = prompt('Chose Paper,Rock or Scissors');
    var playerSelection = userPrompt.toUpperCase();
    var computerSelection = computerPlay();
    playRound(computerSelection,playerSelection);
}
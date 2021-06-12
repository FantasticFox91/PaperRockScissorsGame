// Declare variables 
const words = ["Rock","Paper","Scissors"];
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const div = document.createElement("div");
const body = document.querySelector("body");
const divScore = document.querySelector(".score")
var playerScore = 0;
var computerScore = 0;


function play (val){
    var computerSelection = computerPlay();
    playRound(computerSelection,val)
}

function addDivResult(text){
    div.textContent = text;
    body.appendChild(div);
}
//

paper.addEventListener("click",function(){
    var playerSelection = paper.value;
    play(playerSelection);
})

rock.addEventListener("click",function(){
    var playerSelection = rock.value;
    play(playerSelection);;
})

scissors.addEventListener("click",function(){
    var playerSelection = scissors.value;
    play(playerSelection);;
})

//Function for random chose

function computerPlay(){
return words[Math.floor(Math.random()*words.length)]
}

//Game rules

function playRound(computerSelection,playerSelection){
    if(playerScore < 5 && computerScore < 5){
    if(computerSelection === playerSelection){
    divScore.textContent = `Score: Computer ${computerScore} Player ${playerScore}`
     addDivResult("It's a draw.")
        
    }

    if(playerSelection ==="Rock" && computerSelection==="Scissors" ||
        playerSelection ==="Paper" && computerSelection ==="Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper"){
         addDivResult("You win!!!");
         playerScore++;
         divScore.textContent = `Score: Computer ${computerScore} Player ${playerScore}`
         console.log(playerScore, computerScore)
    }

    if(playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock"){
         div.textContent ="Computer win :((((";
         addDivResult("Computer win :(((")
         computerScore++
         divScore.textContent = `Score: Computer ${computerScore} Player ${playerScore}`
         console.log(playerScore, computerScore)
        }
    }else if(playerScore === 5){
        playerScore = 0;
        computerScore = 0;
        alert("You win. Press okay to restart the game")
    }else if(computerScore ===5){
        playerScore = 0;
        computerScore = 0;
        alert("You lose. Press okay to restart the game")
    }
}
//Looping game

// for(let i =0;i<=5;i++){
//     var userPrompt = prompt('Chose Paper,Rock or Scissors');
//     var playerSelection = userPrompt.toUpperCase();
//     var computerSelection = computerPlay();
//     playRound(computerSelection,playerSelection);
// }

console.log("Work in progress");



let rockBtn = document.getElementById("btn-Rock");
let paperBtn = document.getElementById("btn-Paper");
let scissorBtn = document.getElementById("btn-Scissor");

let playersScore = document.getElementById("p1-score");
let compsScore = document.getElementById("p2-score");

let playerInfo = document.getElementById("player-info");
let winnerInfo = document.getElementById("msg");

let resetBtn = document.getElementById("reset-btn");

let playersClickCount = 0;
let compsClickCount = 0;
                                        // Winning Logic
let playRound = (playerChoice) => {
    let compsChoice = compsTurn();
    playerInfo.innerHTML = `Player chose: ${playerChoice} and Computer chose: ${compsChoice}`;

    if (playerChoice === compsChoice) {
        winnerInfo.innerText = "It's a tie.";
    } else if (playerChoice === "Rock" && compsChoice === "Scissor" ||
        playerChoice === "Paper" && compsChoice === "Rock" ||
        playerChoice === "Scissor" && compsChoice === "Paper") {
            playersClickCount ++;
            playersScore.innerText = playersClickCount;
            winnerInfo.innerText = "Congrats! You are the Winner";
    }else{
        compsClickCount ++;
            compsScore.innerText = compsClickCount;
            winnerInfo.innerText = "Computer wins the match";
    }
}


const compsTurn = () => {                                  //Computer's Turn
    let compOptions = ["Rock", "Paper", "Scissor"];
    option = Math.floor(Math.random() * compOptions.length);
    return compOptions[option];
}

                                                                //Added Evnet listenr for Player's Turn
rockBtn.addEventListener("click", () => { playRound("Rock") })
paperBtn.addEventListener("click", () => { playRound("Paper") })
scissorBtn.addEventListener("click", () => { playRound("Scissor") })
 
                                                        //Reset function
const resetGame = ()=>{
    location.reload();
}
resetBtn.addEventListener("click", () =>{
    resetGame();
})


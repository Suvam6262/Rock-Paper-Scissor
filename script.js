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
let roundsPlayed = 0;

let checkWinner = () => {            // Winning Logic
    if (roundsPlayed == 5) {
        if (playersClickCount > compsClickCount) {
            winnerInfo.innerText = "Congrats! You are the Winner";
        } else if (playersClickCount < compsClickCount) {
            winnerInfo.innerText = "Computer wins the match";
        } else {
            winnerInfo.innerText = "It's a tie.";
        }
    }
}


let playRound = (playerChoice) => {
    if (roundsPlayed < 5) {
        let compsChoice = compsTurn();
        playerInfo.innerHTML = `Player chose: ${playerChoice} and Computer chose: ${compsChoice}`;

        if (playerChoice !== compsChoice) {
            if (playerChoice === "Rock" && compsChoice === "Scissor" ||
                playerChoice === "Paper" && compsChoice === "Rock" ||
                playerChoice === "Scissor" && compsChoice === "Paper") {
                playersClickCount++;
                playersScore.innerText = playersClickCount;
            } else {
                compsClickCount++;
                compsScore.innerText = compsClickCount;
            }

            roundsPlayed++;
            checkWinner();
        }
    }
}


const compsTurn = () => {                                  //Computer's Turn
    let compOptions = ["Rock", "Paper", "Scissor"];
    let option = Math.floor(Math.random() * compOptions.length);
    return compOptions[option];
}

//Added Evnet listenr for Player's Turn
rockBtn.addEventListener("click", () => { playRound("Rock") })
paperBtn.addEventListener("click", () => { playRound("Paper") })
scissorBtn.addEventListener("click", () => { playRound("Scissor") })

//Reset function
const resetGame = () => {
    playersClickCount = 0;
    compsClickCount = 0;
    roundsPlayed = 0;
    playersScore.innerText = 0;
    compsScore.innerText = 0;
    playerInfo.innerHTML = "";
    winnerInfo.innerText = "";
}
resetBtn.addEventListener("click", () => {
    resetGame();
})


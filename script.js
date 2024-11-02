let rockBtn = document.getElementById("btn-Rock");
let paperBtn = document.getElementById("btn-Paper");
let scissorBtn = document.getElementById("btn-Scissor");

let playersScore = document.getElementById("p1-score");
let compsScore = document.getElementById("p2-score");


let playersClickCount = 0;
let compsClickCount = 0;
// Winning Logic
let playRound = (playerChoice) => {
    let compsChoice = compsTurn();
    console.log(`Player chose: ${playerChoice} and Computer chose: ${compsChoice}`);

    if (playerChoice === compsChoice) {
        console.log("It's a tie.");
    } else if (playerChoice === "Rock" && compsChoice === "Scissor" ||
        playerChoice === "Paper" && compsChoice === "Rock" ||
        playerChoice === "Scissor" && compsChoice === "Paper") {
            playersClickCount ++;
            playersScore.innerText = playersClickCount;
            console.log("Congrats! You are the Winner");
    }else{
        compsClickCount ++;
            compsScore.innerText = compsClickCount;
            console.log("Computer wins the match");
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


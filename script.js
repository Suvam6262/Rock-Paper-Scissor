let rockBtn = document.getElementById("btn-Rock");
let paperBtn = document.getElementById("btn-Paper");
let scissorBtn = document.getElementById("btn-Scissor");

let p1Score = document.getElementById("p1-score");
let p2Score = document.getElementById("p2-score");


let count  = 0;                //Click Count
const scoreCount = () =>{
    count++;
};


const compTurn = () =>{                                  //Computer's Turn
    let compOptions = ["Rock", "Paper", "Scissor"];
    option = Math.floor(Math.random() * compOptions.length);
    return compOptions[option];
}

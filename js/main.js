const rock = document.querySelector("#r");
const paper = document.querySelector("#p");
const scissors = document.querySelector("#s");
let userScores = document.querySelector("#userScoreVal");
let compScores = document.querySelector("#compScoreVal");
let userRes = document.querySelector("#result-user-stat");
let compRes = document.querySelector("#result-comp-stat");
let Res = document.querySelector("#result-final-stat");

let obj = {
  rk: false,
  ppr: false,
  scr: false,
};

const handleGame = (rk, ppr, scr) => {
  const val = ["rock", "paper", "scissor"];

  const comp = val[Math.floor(Math.random() * 3)];

  let user = "";
  if (rk === true) {
    user = "rock";
  } else if (ppr === true) {
    user = "paper";
  } else if (scr === true) {
    user = "scissor";
  } else {
    return;
  }
  let win = "";
  let userScore = 0;
  let compScore = 0;

  // computer win logic
  if (win === "") {
    if (user === "rock" && comp === "paper") {
      //computer wins
      compScore += 1;
      win = "comp";
      userRes.innerText = "User: Rock";
      compRes.innerText = "Computer: Paper";
    } else if (user === "paper" && comp === "scissor") {
      //computer wins
      compScore += 1;
      win = "comp";
      userRes.innerText = "User: Paper";
      compRes.innerText = "Computer: Scissor";
    } else if (user === "scissor" && comp === "rock") {
      //computer wins
      compScore += 1;
      win = "comp";
      userRes.innerText = "User: Scissor";
      compRes.innerText = "Computer: Rock";
    }else if(user === comp){
      win = "";
      userRes.innerText = `User: ${user}`;
      compRes.innerText = `Computer: ${user}`;
    }
  }
  if (win !== "comp") {
    // user win logic
    if (comp === "rock" && user === "paper") {
      //user wins
      userScore += 1;
      win = "user";
      userRes.innerText = "User: Paper";
      compRes.innerText = "Computer: Paper";
    } else if (comp === "scissor" && user === "rock") {
      //user wins
      userScore += 1;
      win = "user";
      userRes.innerText = "User: Rock";
      compRes.innerText = "Computer: Scissor";
    } else if (comp === "paper" && user === "scissor") {
      //user wins
      userScore += 1;
      win = "user";
      userRes.innerText = "User: Scissor";
      compRes.innerText = `Computer: Paper`;
    }else if(user === comp){
      win = "";
      userRes.innerText = `User: ${user}`;
      compRes.innerText = `Computer: ${user}`;
    }
  }

  userScores.innerText = userScore;
  compScores.innerText = compScore;

  if (win === "user") {
    Res.innerText = `Winner: User`;
  } else if (win === "comp") {
    Res.innerText = `Winner: Computer`;
  } else if(win === ""){
    Res.innerText = `Tie`;
  }
};
const handleClick = (r, p, s) => {
  let rk = r;
  let ppr = p;
  let scr = s;
  handleGame(rk, ppr, scr);
};

rock.addEventListener("click", () => {
  handleClick((rk = true), (ppr = false), (scr = false));
});
paper.addEventListener("click", () => {
  handleClick((rk = false), (ppr = true), (scr = false));
});
scissors.addEventListener("click", () => {
  handleClick((rk = false), (ppr = false), (scr = true));
});

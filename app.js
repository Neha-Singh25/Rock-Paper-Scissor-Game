let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}
const drawGame = () => {
    msg.innerText = "No winner this time, it's a draw! 🤝 Play again! 🔄";
    msg.style.backgroundColor = "blue";
}
const showWin = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        userScorePara.style.color = "green";
        msg.innerText = `"Congratulations, you beat the computer! 🥳🎊" Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        compScorePara.innerText = compscore;
        compScorePara.style.color = "red";
        msg.innerText = `"The computer wins! 💻 Don’t give up, you can do it! 💫" Computer ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    // Generate computer choice
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWin(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
let userScoore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const GencompChoice=() => {
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=() => {
    console.log("draaw");
    msg.innerText="Draw";
    msg.style.backgroundColor="#081b31";
}
let showWinners=(userWin) => {
    if(userWin)
    {
        userScoore++;
        userScorePara.innerText=userScoore;
        console.log("you win");
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
    }
    else
    {
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText="You lose!";
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice) => {
    console.log("userChoice=", userChoice);
    const compChoice=GencompChoice();
    console.log("compChoice=", compChoice);
    if(userChoice===compChoice)
    {
        //draw
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin=compChoice==="paper"? false:true;
        }
        else if(userChoice==="paper")
        {
            userWin=compChoice==="scissors"? false:true;
        }
        else{
            userWin=compChoice==="rock"? false:true;
        }
        showWinners(userWin);
    }
}
choices.forEach((choice) => {
    
    choice.addEventListener("click", () =>
    {
        const userChoice=choice.getAttribute("id");
       
        playGame(userChoice);
    });
});

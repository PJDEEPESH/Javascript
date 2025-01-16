

let user = 0;
let computer = 0;

const choices = document.querySelectorAll(".choice");
const msgpara = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const computerscore = document.querySelector("#computer-score");
const drawgame = () =>
{
    console.log("Draw game");
    msgpara.innerText = "Draw Game!"
};
const gencomputerchoice = ()=>
{
    let options = ["rock","paper","scissors"];
    //rock,paper,scissor
    const randomind = Math.floor(Math.random() * 3);
    return options[randomind];

};
const showwinner = (userwin)=>
{
    if(userwin)
    {
        user++;
        console.log("You Win!");
        userscore.innerText = user;
        msgpara.innerText = "You Win!";
        msg.style.backgroundColor = "green";

    }
    else
    {
        computer++;
        console.log("Computer Win!");
        computerscore.innerText = computer;
        msgpara.innerText = "Computer Win!";
        msg.style.backgroundColor = "red";
    }
};
const playgame = (userchoice)=>
{
    console.log("userchoice = ",userchoice);
    
    //generate random value
    const computerchoice = gencomputerchoice();
    console.log("computerchoice =",computerchoice);
    if(userchoice === computerchoice)
    {
        drawgame();
    }
    let userwin = true;
    if(userwin === "rock")
    {
        userwin = computerchoice === "paper" ? false : true ;
    }
    else if(userwin === "paper")
    {
        userwin = computerchoice === "scissors" ? false : true;
    }
    else
    {
        userwin = computerchoice === "rock" ? false : true;
    }

    showwinner(userwin);

};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",()=>
    {
        // console.log("Chouce was clicked");
        const userchoice = choice.getAttribute("id");
        // console.log("Choice was clicked",userchoice);
        playgame(userchoice);
    });
});
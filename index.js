let computerGuess;
let userGuess = [];
let userguessUpdate=document.getElementById("textOutput");
let usernumberUpdate=document.getElementById("inputbox");

const init = () => {
    computerGuess = Math.floor(Math.random()
        * 100);
    document.getElementById("newgamebutton").style.display = 'none';
    document.getElementById("gamearea").style.display = 'NONE';
};

const startGame = () => {
    document.getElementById("welcomescreen").style.display = 'none';
    document.getElementById("gamearea").style.display = 'block';
    
};
const newgameBegin=()=>{
    window.location.reload();
}

const startnewGame=()=>{
    document.getElementById("newgamebutton").style.display = "inline";
    usernumberUpdate.setAttribute("disabled",true);
};


// logic of game
const compareguess=()=>{
   const userNumber= Number(document.getElementById("inputbox").value);
   userGuess=[...userGuess,userNumber];
   document.getElementById("guesses").innerHTML=userGuess;
if(userGuess.length<maxguess){
   if (userNumber>computerGuess){
    userguessUpdate.innerHTML="Your Guess is too high";
    usernumberUpdate.value="";
   }else if(userNumber<computerGuess){
    userguessUpdate.innerHTML="Your Guess is too low";
    usernumberUpdate.value="";
   }else{
    userguessUpdate.innerHTML="You Guessed correct !! You Win";
    usernumberUpdate.value="";
    startnewGame();
   }
}else{
    if (userNumber>computerGuess){
        userguessUpdate.innerHTML=`You Loose!! correct number was ${computerGuess}`;
        usernumberUpdate.value="";
        startnewGame();
       }else if(userNumber<computerGuess){
        userguessUpdate.innerHTML=`You Loose!! correct number was ${computerGuess}`;
        usernumberUpdate.value="";
        startnewGame();
       }else{
        userguessUpdate.innerHTML="You Guessed correct !! You Win";
        usernumberUpdate.value="";
        startnewGame();

}
}
   document.getElementById("attempts").innerHTML=userGuess.length;
};
const easyMode = () => {
    maxguess=10;
    startGame();
};
const hardMode = () => {
    maxguess=5;
    startGame();
};

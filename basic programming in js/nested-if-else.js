let winNumber = 12;
let userGuess = +prompt("guess a number");
if (userGuess===winNumber){
    console.log("hurray u won")
}
else{
    if(userGuess < winNumber){
        console.log("too low");
    }
    else{
        console.log("too high")
    }
}
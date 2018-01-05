let readline = require("readline-sync");
let game = readline.question("You wakeup in a room tied to a chair with your hands on a keyboard of a computer asking if you want to play a game. Do you type yes or no? ");
let isAlive = true;
while (isAlive){
    if (game === "yes") {
        console.log("Wise decision");
    } else if (game === "no") {
        console.log("After a few hours of no hope of escaping you givein and play the game");
    }
    let name = readline.question("What is your name?");
    if (name) {
    console.log(name + " Welcome!");
    }
    let question1 = readline.question("What is your quest? Type 1 for holy grail or 2 for other");
    if (question1 === "1") {
    console.log(name + " Awsome choice");
    } else if (question1 === "2"){
        console.log(name + " you have died of dysentery");
        break;
    }
    let question2 = readline.question("What is your favorite color? ");
    if (question2) {
        console.log(name + " after you have typed in the last answer you are then ejected out of the chair and are free to leave the room. ");
        break;
    }
    
}


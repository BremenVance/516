let range = 100;
let assumedHigh = 100;
let assumedLow = 0;
let compGuess = 50;
let guessCounter = 0;
let errorCount = 0;
let guessCount = 1;

function resetGame() {
  range = 100;
  assumedHigh = 100;
  assumedLow = 0;
  compGuess = 50;
  guessCounter = 0;
  errorCount = 0;
  guessCount = 1;
  document.getElementById("results").innerHTML = "";
}

function guessingGame(){
  let userResponse = prompt("Guess: " + compGuess + " ... " + "Higher, Lower, or Yes");
  if (userResponse == "Yes") {
    document.getElementById("results").innerHTML = "Great! Your number is " + compGuess + " !" + "</br></br>Total number of guesses: " + guessCount;
  }

  else if (userResponse == "Higher") {
    assumedLow = compGuess;
    console.log("New low is " + assumedLow);
    diff = ((assumedHigh - assumedLow)/2).toFixed(0);
    console.log("the diff is " + diff);
    compGuess = parseInt(diff) + parseInt(compGuess);
    console.log("new guess is " + compGuess);
    console.log(compGuess);
    if (guessCount == 1) {
      document.getElementById("results").innerHTML = "Okay..My new guess is " + compGuess + ".";
    }
    if (guessCount == 2) {
      document.getElementById("results").innerHTML = "Let me think. Is it " + compGuess + "?";
    }
    if (guessCount == 3) {
      document.getElementById("results").innerHTML = "Got it. It is " + compGuess + "!";
    }
    if (guessCount > 3) {
      document.getElementById("results").innerHTML =  compGuess + "?";
    }
    guessCount ++;
  }

  else if (userResponse == "Lower") {
    assumedHigh = compGuess;
    console.log("New high is " + assumedHigh);
    diff = ((assumedHigh - assumedLow)/2).toFixed(0);
    console.log("the diff is " + diff);
    compGuess = parseInt(compGuess) - parseInt(diff);
    console.log("new guess is " + compGuess);
    if (guessCount == 1) {
      document.getElementById("results").innerHTML = "I see..How about " + compGuess + "?";
    }
    if (guessCount == 2) {
      document.getElementById("results").innerHTML = "Are you sure? Is it " + compGuess + "?";
    }
    if (guessCount == 3) {
      document.getElementById("results").innerHTML = "Hmmm... It must be " + compGuess + "?";
    }
    if (guessCount > 3) {
      document.getElementById("results").innerHTML = compGuess + "?";
    }
    guessCount ++;
  }

  else {
    errorCount ++;
    if (errorCount == 1) {
      userResponse = prompt("The guess is still " + compGuess + " I ONLY UNDERSTAND Higher, Lower, or Yes");
      console.log(compGuess);
    }
    if (errorCount == 2) {
      userResponse = prompt("You were already warned!" + "I guess " + compGuess +" Higher, Lower, or Yes?");
      console.log(compGuess);
    }
    if (errorCount > 2) {
      userResponse = prompt("Stop messing around already! My guess is " + compGuess + " Is the number Higher, Lower, or Yes?");
      console.log(compGuess);
    }
  }
}

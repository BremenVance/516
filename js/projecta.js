let assumedHigh = 100;
let assumedLow = 1;
let compGuess = ((assumedHigh + assumedLow)/2).toFixed(0);
let userResponse = prompt("Is your number " + compGuess);

while (userResponse != "yes") {
    if (userResponse == ">") {
      assumedLow = compGuess;
      diff = ((assumedHigh - assumedLow)/2).toFixed(0);
      compGuess = parseInt(diff) + parseInt(compGuess);
      userResponse = prompt("Is your number " + compGuess);
    }

      else if (userResponse == "<") {
        assumedHigh = compGuess;
        diff = ((assumedHigh - assumedLow)/2).toFixed(0);
        compGuess = parseInt(compGuess) - parseInt(diff);
        userResponse = prompt("Is your number " + compGuess);
      }

}

if (userResponse == "yes") {
  alert("I got it! Your number is: " + compGuess);
}

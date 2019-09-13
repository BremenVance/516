//function for truncating numbers by Robert Koritnik at https://stackoverflow.com/questions/596467/how-do-i-convert-a-float-number-to-a-whole-number-in-javascript
function float2int (value) {
    return value | 0;
}

//Set the range of numbers in guessing game
function setRange() {
  minRange = prompt("what is the lowest number in the game?");
  maxRange = prompt("what is the largest number in the game?");
  changeRange();
}

function changeRange() {
  document.getElementById("range").innerHTML = "The range for this game is " + minRange + " - " + maxRange;
  document.getElementById("rangeButton").style.display = "none";
  displayGuess()
}

function displayGuess() {
  document.getElementById("guessButton").style.display = "block";
}
//guess the number
function guessNumber() {
  guess = float2int((maxRange-minRange)/2)
  guessCount = 1
  document.getElementById("answer").innerHTML = "Is your number " + guess + "?";
  document.getElementById("range").style.display = "none";
  document.getElementById("guessButton").style.display = "none";
  // document.getElementById("responseInstructions").style.display = "block";
  document.getElementById("responseButton").style.display = "block";
}

function guessHigher(){
  let newGuess = ((maxRange-guess)/(2*guessCount)) + guess;
  guess = float2int(newGuess) + 1
  guessCount++
}
function guessLower(){
  let newGuess = (guess)/(2*guessCount);
  guess = float2int(newGuess) - 1
  guessCount++
}
function incorrectResponse(){

}


function guessCheck() {
  response = prompt("Did I guess correctly? Is the number " + guess + "?</br> Type 'yes', '>', or '<'")

  if (response == "yes") {
    document.getElementById("responseButton").style.display = "none";
    document.getElementById("answer").innerHTML = "WOOHOO!!! That was easy!!! I knew your answer was " + guess + "!"
  }

  else if (response == ">") {
    guessHigher();
    document.getElementById("answer").innerHTML = "Hmmm.. Is your number " + guess + "?"
  }

  else if (response == "<") {
    guessLower();
    document.getElementById("answer").innerHTML = "I see.. Is your number " + guess + "?"
  }
  //in case the user inputs invalid response
  else {
    incorrectResponse();
  }

}

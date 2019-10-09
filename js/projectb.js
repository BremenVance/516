function caesarCipher(shift, sourceText, encryptKey) {

  shift = parseInt(shift);
  // let encryptKey = "abcdefghijklmnopqrstuvwxyz";
  let upperEnc = encryptKey.toUpperCase;
  let encryptedString = "";
  let x = "";

  function encryptWrap(encryptPosition, encryptKey) {
    if (encryptPosition > (encryptKey.length-1)) {
      encryptPosition = (encryptPosition % (encryptKey.length));
    }
    else if ((encryptPosition % encryptKey.length) == -0) { //handle problem of -0
      encryptPosition = 0;
    }
    else if (encryptPosition < 0) {
      encryptPosition = ((encryptPosition % (encryptKey.length)) + (encryptKey.length));
    }
    else {
      encryptPosition = encryptPosition;
    }
    return encryptPosition;
  }


  for (var i = 0; i < sourceText.length; i++) { //loop through each character in the string
    //This section deals with nonletter characters by just adding to encryptedString.
    x = sourceText[i];
    if (!x.match(/[a-z]/) && !x.match(/[A-Z]/)) { //checks for a characters that are NOT letters
      encryptedString = encryptedString += (x); //adds character to encrypted string
    }
    //This section handles upper case letters by comparing the letter to an uppercase version of the Encrypt String
    else if (x == x.toUpperCase()) {
      let upperEnc = encryptKey.toUpperCase();
      let encryptStart = upperEnc.indexOf(x);
      let encryptPosition = encryptStart + shift;
      encryptPosition = encryptWrap(encryptPosition, encryptKey);
      x = encryptKey[encryptPosition]; //finds character in encryptKey to replace current character
      x = x.toUpperCase(); //makes the letter upper case
      encryptedString = encryptedString += (x); //adds character to encrypted string
      }

    //This section handles lower case letters by comparing the letter to a lowercase verson of the Encrypt String
    else if (x == x.toLowerCase()) {
      let lowerEnc = encryptKey.toLowerCase();
      let encryptStart = lowerEnc.indexOf(x);
      let encryptPosition = encryptStart + shift;
      encryptPosition = encryptWrap(encryptPosition, encryptKey);
      x = encryptKey[encryptPosition]; //finds character in encryptKey to replace current character
      encryptedString = encryptedString += (x); //adds character to encrypted string
    }
  }
  document.getElementById("sourceText").innerHTML = text;
  document.getElementById("encryptedText").innerHTML = encryptedString;
}

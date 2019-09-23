let shift = 0;
let sourceText = "AbcdefghijKLMNopqrsTUVwxYZ!";
let encryptKeyLower="abcdefghijklmnopqrstuvwxyz";
let encryptKeyUpper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function caesarCipher() {
  document.getElementById("Source Text").innerHTML = sourceText;
  let encryptedString = "";
  shift = 10;
  console.log("source text length is: " + sourceText.length);
  console.log("encrytpion string length is: " + encryptKeyLower.length);
  let encLenth = encryptKeyLower.length;

  for (x in sourceText) { //x is a position in the string sourceText
    unEnc = sourceText.slice(parseInt(x), (parseInt(x)+1)); //findes the letter of each position in the string sourceText. sets the letter as varyable unEnc

    if (!unEnc.match(/[a-z]/) && !unEnc.match(/[A-Z]/)) { //checks for a characters that are NOT letters
      encryptedString = encryptedString += (unEnc); //adds character to encrypted string
    }

      else if (unEnc == unEnc.toLowerCase()) { //check for lowercase letters
        let encryptStart = encryptKeyLower.indexOf(unEnc); //Finds the letter in the encryptKey stores position number
        let encryptPosition = encryptStart + shift; //calculate new position
          if (encryptPosition > encryptKeyLower.length) {
            encryptPosition = encryptPosition + encryptKeyLower.length;
          }
            else if (encryptPosition < 0) {
              encryptPosition = encryptPosition - (encryptKeyLower.length+1);
            }

        let encLetter = encryptKeyLower.slice(encryptPosition, (encryptPosition + 1));
        console.log("lower case original '" + unEnc + "' is now encrypted as '" + encLetter + "'");
        encryptedString = encryptedString += (encLetter); //adds character to encrypted string
      }

        else if (unEnc == unEnc.toUpperCase()) { //check for uppercase letters
          let encryptStart = encryptKeyUpper.indexOf(unEnc); //Finds the letter in the encryptKey stores position number
          let encryptPosition = encryptStart + shift; //calculate new position
          let encLetter = encryptKeyUpper.slice(encryptPosition, (encryptPosition + 1));
          encryptedString = encryptedString += (encLetter); //adds character to encrypted string
        }

  }
  console.log(encryptedString);
  document.getElementById("Encrypted Text").innerHTML = encryptedString;
}

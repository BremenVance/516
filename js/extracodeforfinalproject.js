//hold typed search data for handling
function searchTerms() {
  text = document.getElementById("searchBar").value;
  console.log(text);
  return (text);
};

//add search term to a list and add to the page
let termList = [];
function addTerm() {
  let textClean = text;
  textClean = textClean.toLowerCase();
  textClean = textClean.replace(/\W/g," ")//removes non word characters
  textClean = textClean.replace(/\d/g," ")//removes numbers
  textClean = textClean.split(" "); //splits string into items in an array based on a space
  textClean = textClean.filter(function (word) { //removes empty items in the list
    return word !="";
  });
  termList.push(textClean);
  init();
  document.getElementById("termList").innerHTML = termList;
};

//clear terms
function clearTerms() {
  termList = [];
  document.getElementById("termList").innerHTML = termList;
};

//find term in data file
// function findTerm() {
//   let dataFile = new XMLHttpRequest();
//   dataFile.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("data").innerHTML =
//             this.responseText;
//       }
//     dataFile.open("GET", "data/test.txt", true);
//     dataFile.send();
//   }
// }

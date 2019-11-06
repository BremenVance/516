//clear page on located
function init() { //function to reset forms on page load (or reload)
  document.getElementById("searchBar").value="";
}

//hold typed search data for handling
function searchTerms() {
  text = document.getElementById("searchBar").value;
  console.log(text);
  return (text);
};

//add search term to a list and add to the page
let termList = [];
function addTerm() {
  termList.push(text);
  init();
  document.getElementById("termList").innerHTML = termList;
};

//clear terms
function clearTerms() {
  termList = [];
  document.getElementById("termList").innerHTML = termList;
};

//find term in data file
function findTerm() {
  let dataFile = new XMLHttpRequest();
  dataFile.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("data").innerHTML =
            this.responseText;
      }
    dataFile.open("GET", "data/test.txt", true);
    dataFile.send();
  }
}

var svgContainer = d3.select("#display").append("svg").attr("width", 200).attr("height", 200);
var circle = svgContainer.append("circle").attr("cx", 30).attr("cy", 30).attr("r");

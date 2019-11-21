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

// d3 data loading
    d3.json("data/multimodalcollocations.json", function(data){

        console.log(data);

        collocations = JSON.parse(data);
        console.log(collocations);
        // let visual = data.art;
        // console.log(art);
        wordArray = [];
        for (w in data){
          wordArray.push(w);
        }
        console.log(wordArray);


        var svg = d3.select("#display").append("svg").attr("height","100%").attr("width","100%");

        // svg.selectAll("rect")
        //       .data(dataArray)
        //       .enter().append("rect")
        //                 .attr("height",function(d,i){ return d*15; })
        //                 .attr("width","50")
        //                 .attr("fill","pink")
        //                 .attr("x",function(d,i){ return 60*i; })
        //                 .attr("y",function(d,i){ return 300-(d*15); });
        // console.log(Object.keys(data));
        // console.log(data.visual);
        // i = 0;
        // while (i < 5){
        //   console.log(data."visual");
        //   i++;
        // }

        svg.selectAll("rect")
    });

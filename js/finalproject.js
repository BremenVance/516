//style the about div
function expand() {
  if (document.getElementById("explanation").style.display === "none") {
  setTimeout(() => {
  document.getElementById("explanation").style.display = "block"; },1000);
  document.getElementById("info").style.width = "560px";
  document.getElementById("info").style.padding = "10px 20px";
} else {
  document.getElementById("explanation").style.display = "none";
  setTimeout(() => {
  document.getElementById("info").style.width = "50px";
  document.getElementById("info").style.padding = "0px";
}, 1000);
}
}
//populate options for user to select from

d3.json("data/multimodalcollocations.json", function(data){
  data = Object.keys(data);
var options = d3.select("select")
  .selectAll('option')
  .data(data).enter()
  .append('option')
    .text(function (d) { return d; });

function onchange() {
  selectValue = d3.select('select').property('value')
  d3.select('body')
    .append('p')
    .text(selectValue + ' is the last selected option.')
  };
});



//pull user selected term from html select
function setTerm(){
  let userWordSelection = document.getElementById('termList');
  let targetTerm = userWordSelection.options[userWordSelection.selectedIndex].value;
  console.log(targetTerm);
  dispayCollocations(targetTerm);
  return targetTerm;
}


//Draw the barchart
function dispayCollocations(targetTerm){
d3.selectAll("svg").attr("display","none");//remove existing svg from the page
d3.json("data/multimodalcollocations.json", function(data){ //reads in the json file
    console.log(data);
    // let termListMenu = document.getElementById("termList");
    wordArray = [];//creates an array to hold key words
    for (w in data){//adds key words to the array
      wordArray.push(w);
    }
    wordValue = data[targetTerm];
    wordCounts = [] //array for the collcation counts
    let i = 0;
    let graphNumber = 8
    while (i < graphNumber){
      wordCounts.push(wordValue[i][0]);
      i++;
    }
    console.log(wordCounts);
    targetCollocations = [];//array for the collocation words
    i = 0;
    while (i < graphNumber) {
      targetCollocations.push(wordValue[i][1]);
      i++;
    }

    height = 200;
    var margin = {left:50,right:50,top:40,bottom:0}


    var y = d3.scaleLinear()
            .domain([0,180])
            .range([height,0]);

    var yAxis = d3.axisLeft(y);


    var svg = d3.select("#display").append("svg").attr("height","100%").attr("width","100%");

    svg.selectAll("rect")
          .data(wordCounts)
          .enter().append("rect")
                    .attr("height",function(d,i){ return d*15; })
                    .attr("width","50")
                    .attr("fill","darkred")
                    .attr("stroke","black")
                    .attr("stroke-width", "1px")
                    .attr("x",function(d,i){ return 60*i; })
                    .attr("y",function(d,i){ return 300-(d*15); });

    svg.append("text").selectAll("tspan")
      .data(targetCollocations)
      .enter().append("tspan")
        .attr("x", function(d,i){ return (10 + (i*60));})
        .attr("y",function(d,i){ return (330);})
        .attr("dominant-baseline","middle")
        .attr("fill","black")
        .text(function(d){return d;})


    var chartGroup = svg.append("g").attr("transform","translate("+margin.left+","+margin.top+")");
    chartGroup.append("path").attr("d",area(dataArray));
    chartGroup.append("g").attr("class","axis y").call(yAxis);
  });
}

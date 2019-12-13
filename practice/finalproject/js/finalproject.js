//populate options for user to select from
d3.json("data/multimodalcollocations.json", function(data){
  data = Object.keys(data);
var options = d3.select("select")
  .selectAll('option')
  .data(data).enter()
  .append('option')
  .attr("class","headTerm")
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
  setDataArray(targetTerm);
  // dispayCollocations(targetTerm);
  return targetTerm;
}


function setDataArray(targetTerm) {
  d3.json("data/multimodalcollocations.json", function(data){
    wordArray = [];//creates an array to hold key words
    for (w in data){//adds key words to the array
      wordArray.push(w);
    }
    wordValue = data[targetTerm];
    wordCounts = [] //array for the collcation counts
    let i = 0;
    let graphNumber = data[targetTerm].length; //sets the number of bars to the number of terms
    while (i < graphNumber){
      wordCounts.push(wordValue[i][0]);
      i++;
    }
    targetCollocations = [];//array for the collocation words
    i = 0;
    while (i < graphNumber) {
      targetCollocations.push(wordValue[i][1]);
      i++;
    }
    displayChart(wordCounts,targetCollocations);

  });
}


d3.select(window).on("resize." + container.attr("id"), resize);

function displayChart(counts,words){

  var margin = {left:50,right:50,top:40,bottom:0};
  let height = counts.length * 25 + margin.top + margin.bottom;
  let width = 1200;

  function resize() {
          var targetWidth = parseInt(container.style("width"));
          svg.attr("width", targetWidth);
          svg.attr("height", Math.round(targetWidth / aspect));
      }


  x = d3.scaleLinear()
      .domain([0, d3.max(counts, d => d.value)])
      .range([margin.left, width - margin.right]);

  y = d3.scaleBand()
    .domain(words.map(d => d.name))
    .range([margin.top, height - margin.bottom])
    .padding(0.1);

    xAxis = g => g
        .attr("transform", `translate(0,${margin.top})`)
        .call(d3.axisTop(x).ticks(width / 80))
        .call(g => g.select(".domain").remove());

    yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).tickSizeOuter(0));


    format = x.tickFormat(20);

    d3.select("#display").append("svg")
        .attr("height",height)
        .attr("width",width);

    d3.select("#display svg").append("g")
         .attr("fill", "steelblue")
       .selectAll("rect")
       .data(words)
       .join("rect")
         .attr("x", x(0))
         .attr("y", d => y(d.name))
         .attr("width", d => x(d.value) - x(0))
         .attr("height", y.bandwidth());

     svg.append("g")
         .attr("fill", "white")
         .attr("text-anchor", "end")
         .style("font", "12px sans-serif")
       .selectAll("text")
       .data(counts)
       .join("text")
         .attr("x", d => x(d.value) - 4)
         .attr("y", d => y(d.name) + y.bandwidth() / 2)
         .attr("dy", "0.35em")
         .text(d => format(d.value));

     svg.append("g")
         .call(xAxis);

     svg.append("g")
         .call(yAxis);
}

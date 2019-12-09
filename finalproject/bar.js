var wordArray = ["and", "of", "in", "images", "for", "see", "writing"]
var wordCount = [18, 17, 16, 12, 12, 11, 10]

var margin = {left:50,right:50,top:40,bottom:0};
var height = wordCount.length * 25 + margin.top + margin.bottom;
var width = document.querySelector("#display").offsetWidth;

// console.log(height);
// console.log(width);


x = d3.scaleLinear()
    .domain([0, d3.max(wordCount, d => d.value)])
    .range([margin.left, width - margin.right])

y = d3.scaleBand()
    .domain(wordArray.map(d => d.name))
    .range([margin.top, height - margin.bottom])
    .padding(0.1)





var svg = d3.select("#display")
        .append("svg")
        .attr("height","100%")
        .attr("width","100%");


svg.append("g")
      .attr("fill", "steelblue")
    .selectAll("rect")
    .data(wordArray)
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
    .data(wordCount)
    .join("text")
      .attr("x", d => x(d.value) - 4)
      .attr("y", d => y(d.name) + y.bandwidth() / 2)
      .attr("dy", "0.35em")
      .text(d => format(d.value));

  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);

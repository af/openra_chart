var d3 = require('d3');
var svg = d3.select('svg');

var margin = { top: 30, left: 30, right: 30, bottom: 30 };
var width = window.innerWidth;
var height = 600;

var xScale = d3.scale.linear();
var yScale = d3.scale.linear();

// Setup axes:
var xAxis = d3.svg.axis();
var yAxis = d3.svg.axis();
var xAxisEl = svg.append('g').attr('class', 'axis')
                .attr('transform', 'translate(0,' + (height - margin.top - margin.bottom) + ')');
var yAxisEl = svg.append('g').attr('class', 'axis')
                .attr('transform', 'translate(' + margin.left + ',0)');


function renderChart(data, yFn) {
    var xValueFn = function(d) { return xScale(d.Valued.Cost) };
    var yValueFn = function(d, i) { return yScale(yFn(d,i)); };

    // Set up x/y scales and axes for the given data:
    xScale.domain([0, d3.max(data, xValueFn)])
          .range([margin.left, width - margin.left - margin.right]);
    xAxis.scale(xScale).orient('bottom');
    xAxisEl.call(xAxis);

    yScale.domain([0, d3.max(data, yFn)])
          .range([height - margin.top - margin.bottom, margin.top]);
    yAxis.scale(yScale).orient('left');
    yAxisEl.call(yAxis);

    var enter = svg.selectAll('g.unit')
                    .data(data)
                    .enter();
    var groups = enter.append('g').attr('class', 'unit');

    groups.append('circle')
        .attr('cx', xValueFn)
        .attr('cy', yValueFn)
        .attr('r', 5)
        .attr('class', function(d) {
            var owner = (d.Buildable || {}).Owner;
            return owner.replace(',', '_');     // 'allies,soviet' case
        });

    groups.append('text')
        .attr('x', xValueFn)
        .attr('y', yValueFn)
        .text(function(d) { return (d.Tooltip || {}).Name });
}

window.a = function() {
    renderChart(window.units, function(d) { return (d.Health.HP) });
};
window.b = function() {
    renderChart(window.units, function(d) { return ((d.RevealsShroud || {}).Range) || null });
};
window.r = renderChart;

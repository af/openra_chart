var d3 = require('d3');
var svg = d3.select('svg');
var xScale = d3.scale.linear();
var yScale = d3.scale.linear();
var xAxis = d3.svg.axis();
var yAxis = d3.svg.axis();

var margin = { top: 30, left: 30, right: 30, bottom: 30 };
var width = window.innerWidth;
var height = 600;

function attachData(data) {
    xScale.domain([0, d3.max(data, function(d) { return d.Valued.Cost; })])
          .range([margin.left, width - margin.left - margin.right]);
    xAxis.scale(xScale).orient('bottom');
    svg.append('g').attr('class', 'axis')
        .call(xAxis)
        .attr('transform', 'translate(0,' + (height - margin.top - margin.bottom) + ')');

    yScale.domain([0, d3.max(data, function(d) { return d.Health.HP; })])
          .range([height - margin.top - margin.bottom, margin.top]);
    yAxis.scale(yScale).orient('left');
    svg.append('g').attr('class', 'axis')
        .call(yAxis)
        .attr('transform', 'translate(' + margin.left + ',0)');

    var enter = svg.selectAll('g.unit')
                    .data(data)
                    .enter();
    var groups = enter.append('g').attr('class', 'unit');

    var x = function(d) { return xScale(d.Valued.Cost) };
    var y = function(d) { return yScale(d.Health.HP) };
    groups.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 5)
        .attr('class', function(d) {
            var owner = (d.Buildable || {}).Owner;
            return owner.replace(',', '_');     // 'allies,soviet' case
        });

    groups.append('text')
        .attr('x', x)
        .attr('y', y)
        .text(function(d) { return (d.Tooltip || {}).Name });
}

attachData(window.units);

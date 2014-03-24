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
    var xFn = function(d) { return (d.Valued.Cost) };

    // Set up x/y scales and axes for the given data:
    xScale.domain([0, d3.max(data, xFn)])
          .range([margin.left, width - margin.left - margin.right]);
    xAxis.scale(xScale).orient('bottom');
    xAxisEl.call(xAxis);

    yScale.domain([0, d3.max(data, yFn)])
          .range([height - margin.top - margin.bottom, margin.top]);
    yAxis.scale(yScale).orient('left');
    yAxisEl.call(yAxis);

    var xValueFn = function(d, i) { return xScale(xFn(d,i)); };
    var yValueFn = function(d, i) { return yScale(yFn(d,i)); };
    var groups = svg.selectAll('g.unit').data(data);
    var isUpdate = !svg.selectAll('circle').empty();

    var exit = groups.exit();
    exit.selectAll('circle')
        .transition()
        .attr('r', 0);
    exit.selectAll('text')
        .transition()
        .style('opacity', 0);

    if (isUpdate) {
        setAttrs({
            circles: groups.select('circle'),
            text: groups.select('text')
        });
    } else {
        groups = groups.enter().append('g').attr('class', 'unit');
        setAttrs({
            circles: groups.append('circle'),
            text: groups.append('text')
        });
    }

    function setAttrs(config) {
        config.circles
            .attr('class', function(d) {
                var owner = (d.Buildable || {}).Owner;
                return owner.replace(',', '_');     // 'allies,soviet' case
            })
            .transition().duration(1000)
            .attr('cx', xValueFn)
            .attr('cy', yValueFn)
            .attr('r', 6);

        config.text
            .text(function(d) { return (d.Tooltip || {}).Name })
            .transition().duration(1000)
            .style('opacity', 1)
            .attr('x', xValueFn)
            .attr('y', yValueFn);
    }
}

var yAxisTypes = {
    'Health Points': function(d) { return d.Health.HP },
    'Speed': function(d) { return (d.Plane || d.Helicopter || d.Mobile || {}).Speed },
    'Vision': function(d) {
        var raw = (d.RevealsShroud || {}).Range || 0;
        return raw.toString().split('c')[0];    // Handle values of the form "5c0" (take the first number)
    }
};

function updateChart() {
    var unitList = document.querySelector('[name=data_set]').value;
    var chartType = document.querySelector('[name=chart_type]').value;
    renderChart(window.units[unitList], yAxisTypes[chartType]);
}

// Wire up the select box to support choosing different chart types:
d3.select('select[name=chart_type]')
    .on('change', updateChart)
    .selectAll('option')
    .data(Object.keys(yAxisTypes))
    .enter()
        .append('option')
        .text(function(d) { return d });

d3.select('select[name=data_set]')
    .on('change', updateChart)
    .selectAll('option')
    .data(Object.keys(window.units))
    .enter()
        .append('option')
        .text(function(d) { return d });

updateChart();

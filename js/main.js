var d3 = require('d3');
var svg = d3.select('svg');
var RA = require('./ra');
var Tooltip = require('./tooltip');


var margin = { top: 30, left: 80, right: 60, bottom: 40 };
var width = window.innerWidth;
var height = svg.attr('height');

var xScale = d3.scale.ordinal().domain(RA.buildings);
var yScale = d3.scale.linear();

// Setup axes:
var xAxis = d3.svg.axis();
var yAxis = d3.svg.axis();
var xAxisEl = svg.append('g').attr('class', 'x axis')
                .attr('transform', 'translate(0,' + (height - margin.top - margin.bottom) + ')');
var yAxisEl = svg.append('g').attr('class', 'y axis')
                .attr('transform', 'translate(' + margin.left + ',0)');

// Simple html-based tooltip, shown on unit hover
var tooltip = new Tooltip();

function renderChart(data) {
    // Set up x/y scales and axes for the given data:
    xScale.rangePoints([margin.left, width - margin.left - margin.right], 0.5);
    xAxis.scale(xScale).orient('bottom');
    xAxisEl.call(xAxis);

    // If the y scale hasn't been initialized yet, set it up.
    // Don't re-scale on every draw, since that makes comparisions more difficult
    var yScaleInitialized = yScale.range()[1] !== 1;
    if (!yScaleInitialized) {
        yScale.domain([0, d3.max(data, RA.getCost)])
              .range([height - margin.top - margin.bottom, margin.top]);
        yAxis.scale(yScale).orient('left');
        yAxisEl.call(yAxis);
    }

    var xValueFn = function(d, i) { return xScale(RA.getPrereqs(d)); };
    var yValueFn = function(d, i) { return yScale(RA.getCost(d)); };
    var keyFn = function(d) { return d.name };
    var groups = svg.selectAll('g.unit').data(data, keyFn);
    var isFirstRender = svg.selectAll('circle').empty();

    var exit = groups.exit();
    exit.selectAll('circle')
        .transition()
        .attr('r', 0);
    exit.selectAll('ellipse')
        .transition()
        .attr('rx', 0)
        .attr('ry', 0);
    exit.selectAll('text')
        .transition()
        .style('opacity', 0);

    if (isFirstRender) {
        groups = groups.enter().append('g').attr('class', 'unit');
        groups.append('ellipse').attr('class', 'range');
        groups.append('circle').attr('class', 'health');
        groups.append('text');

        // Label Axes
        xAxisEl.append('text')
            .attr('class', 'label')
            .text('Building dependencies')
            .attr('x', width/2)
            .attr('y', margin.bottom);
        yAxisEl.append('text')
            .attr('class', 'label')
            .text('Cost ($)')
            .attr('transform', 'rotate(270 ' + -margin.left*0.75 + ' ' + height/2 + ')')
            .attr('x', 0)
            .attr('y', height/2);
    }
    setAttrs(groups);

    function setAttrs(groups) {
        groups.attr('class', RA.getFactionClassname);

        groups.select('ellipse.range')
            .transition().duration(1000)
            .attr('cx', xValueFn)
            .attr('cy', yValueFn)
            .attr('ry', function(d) { return 2*RA.getVision(d); })
            .attr('rx', function(d) { return RA.getSpeed(d)/8; });

        groups.select('circle.health')
            .transition().duration(1000)
            .attr('cx', xValueFn)
            .attr('cy', yValueFn)
            .attr('r', function(d) { return 0.3*Math.sqrt(RA.getHealth(d)); });

        groups.select('text')
            .text(function(d) { return (d.Tooltip || {}).Name })
            .transition().duration(1000)
            .style('opacity', 1)
            .attr('x', xValueFn)
            .attr('y', yValueFn);

        // Tooltip on hover:
        groups
            .on('mouseover', function(d) {
                tooltip.render(d);
                tooltip.positionOnSVG(svg.node(), xValueFn(d), yValueFn(d));
            })
            .on('mouseout', function(d) { tooltip.hide(); });
    }
}

function updateChart() {
    var unitList = document.querySelector('[name=data_set]').value;
    var faction = document.querySelector('[name=faction]').value;
    var unitType = document.querySelector('[name=unit_type]').value;

    var units = window.units[unitList].filter(RA.getFilterForFaction(faction))
                                      .filter(RA.getFilterForType(unitType));
    renderChart(units);
}

d3.select('select[name=data_set]')
    .on('change', updateChart)
    .selectAll('option')
    .data(Object.keys(window.units))
    .enter()
        .append('option')
        .text(function(d) { return d });

d3.select('select[name=faction]')
    .on('change', updateChart)
    .selectAll('option')
    .data(['all', 'allies', 'soviet'])
    .enter()
        .append('option')
        .text(function(d) { return d });

d3.select('select[name=unit_type]')
    .on('change', updateChart)
    .selectAll('option')
    .data(['all', 'infantry', 'vehicle', 'ship', 'air'])
    .enter()
        .append('option')
        .text(function(d) { return d });

updateChart();

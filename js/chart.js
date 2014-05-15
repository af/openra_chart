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


// Draw a simple legend in the top corner of the graph:
exports.drawLegend = function drawLegend() {
    var vision = 15;
    var speed = 20;
    var health = 7;
    var g = svg.append('g').attr('class', 'legend')
                .attr('transform', 'translate(140, 70)');

    g.append('ellipse').attr('class', 'range').attr({rx: speed, ry: vision });
    g.append('circle').attr('class', 'health').attr('r', health);

    g.append('line').attr({ x1: -speed, x2: speed, y1: -(vision + 5), y2: -(vision + 5)});
    g.append('text').attr('class', 'center').text('vision').attr({ x: 0, y: -(vision + 8) });

    g.append('line').attr({ x1: speed + 5, x2: speed + 5, y1: -vision, y2: vision});
    g.append('text').text('speed').attr({ x: speed + 8, y:  0 });

    g.append('line').attr({ x1: -health, x2: health, y1: (vision + 5), y2: (vision + 5)});
    g.append('text').attr('class', 'center').text('health').attr({ x: 0, y: (vision + 17) });
};


exports.render = function render(data) {
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

    var xValueFn = function(d, i) { return xScale(RA.getPrereqs(d)) + (d.layoutOffset || 0); };
    var yValueFn = function(d, i) { return yScale(RA.getCost(d)) + (d.layoutOffset || 0); };
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
        groups.append('circle').attr('class', 'hover');
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
        var occupiedPoints = {};

        groups.attr('class', RA.getFactionClassname)
            .each(function(d) {
                // Some units have the same x/y coords, and thus obscure each other.
                // When this happens, add d.layoutOffset to show them at slightly different places
                var pointKey = xValueFn(d) + '.' + yValueFn(d);
                if (occupiedPoints[pointKey]) {
                    d.layoutOffset = 10*occupiedPoints[pointKey];
                    occupiedPoints[pointKey] += 1;
                } else {
                    occupiedPoints[pointKey] = 1;
                }
            });
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

        // Extra circle to expand hover area for small units:
        groups.select('circle.hover')
            .attr('cx', xValueFn)
            .attr('cy', yValueFn)
            .attr('r', 10);

        groups.select('text')
            .text(RA.getName)
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
};

var d3 = require('d3');
var svg = d3.select('svg');
var Tooltip = require('./tooltip');


var margin = { top: 30, left: 80, right: 30, bottom: 30 };
var width = window.innerWidth;
var height = svg.attr('height');
var buildings = ['tent', 'barr', 'ftur', 'weap', 'tsla', 'dome', 'hpad', 'afld',
                 'fix', 'spen', 'syrd', 'proc', 'weap', 'atek', 'stek', 'pdox'];


var dataAccessors = {
    'Health': function(d) { return d.Health.HP },
    'Speed': function(d) { return d.speed },
    'Vision': function(d) {
        var raw = (d.RevealsShroud || {}).Range || 0;
        return raw.toString().split('c')[0];    // Handle values of the form "5c0" (take the first number)
    }
};

var xScale = d3.scale.ordinal().domain(buildings);
var yScale = d3.scale.linear();

// Setup axes:
var xAxis = d3.svg.axis();
var yAxis = d3.svg.axis();
var xAxisEl = svg.append('g').attr('class', 'x axis')
                .attr('transform', 'translate(0,' + (height - margin.top - margin.bottom) + ')');
var yAxisEl = svg.append('g').attr('class', 'y axis')
                .attr('transform', 'translate(' + margin.left + ',0)');


var xFn = function(d) {
    var prereqs = d.Buildable.Prerequisites;
    if (!prereqs) {
        if (d.Inherits === '^Vehicle' || d.Inherits === '^Tank') return 'weap';
        if (d.Inherits === '^Infantry') return 'tent';
        if (d.Inherits === '^Plane') return 'afld';
        if (d.Inherits === '^Ship') return 'syrd';
        else return;
    }
    if (prereqs === 'techcenter') return 'atek';    // Exception for tanya
    var items = prereqs.split(',');
    return items[items.length - 1].trim();
};

var yFn = function(d) { return (d.Valued.Cost) };

// Simple html-based tooltips, shown on unit hover
var tooltip = new Tooltip();

function renderChart(data) {
    // var buildings = data.map(function(d) { return d.Buildable.Prerequisites; });
    // window.b = buildings;
    // console.log(buildings)

    // Set up x/y scales and axes for the given data:
    xScale.rangePoints([margin.left, width - margin.left - margin.right], 0.5);
    xAxis.scale(xScale).orient('bottom');
    xAxisEl.call(xAxis);

    yScale.domain([0, d3.max(data, yFn)])
          .range([height - margin.top - margin.bottom, margin.top]);
    yAxis.scale(yScale).orient('left');
    yAxisEl.call(yAxis);

    var xValueFn = function(d, i) { return xScale(xFn(d,i)); };
    var yValueFn = function(d, i) { return yScale(yFn(d,i)); };
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
            .attr('y', margin.bottom + 10);
        yAxisEl.append('text')
            .attr('class', 'label')
            .text('Cost ($)')
            .attr('transform', 'rotate(270 ' + -margin.left*0.75 + ' ' + height/2 + ')')
            .attr('x', 0)
            .attr('y', height/2);
    }
    setAttrs(groups);

    function setAttrs(groups) {
        groups
            .attr('class', function(d) {
                var owner = (d.Buildable || {}).Owner;
                var tokens = owner.replace(/\s/g, '').split(',');  // handle 'allies,soviet', 'soviet,allies' cases
                tokens.sort();
                return 'unit ' + tokens.join('_');
            });

        groups.select('ellipse.range')
            .transition().duration(1000)
            .attr('cx', xValueFn)
            .attr('cy', yValueFn)
            .attr('ry', function(d) { return 2*dataAccessors.Vision(d); })
            .attr('rx', function(d) { return dataAccessors.Speed(d)/8; });

        groups.select('circle.health')
            .transition().duration(1000)
            .attr('cx', xValueFn)
            .attr('cy', yValueFn)
            .attr('r', function(d) { return 0.3*Math.sqrt(dataAccessors.Health(d)); });

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

    var units = window.units[unitList].filter(function(unit) {
        if (faction === 'all') return true;
        else return unit.Buildable.Owner === faction;
    }).filter(function(unit) {
        var queueName = unit.Buildable.Queue;

        if (unitType === 'all') return true;
        else if (unitType === 'air') return queueName === 'Helicopter' || queueName === 'Plane';
        else return queueName.match(new RegExp(unitType + '$', 'i'));
    });
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

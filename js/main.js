var d3 = require('d3');
var RA = require('./ra');
var chart = require('./chart');


function updateChart() {
    var unitList = document.querySelector('[name=data_set]').value;
    var faction = document.querySelector('[name=faction]').value;
    var unitType = document.querySelector('[name=unit_type]').value;

    var units = window.units[unitList].filter(RA.getFilterForFaction(faction))
                                      .filter(RA.getFilterForType(unitType));
    chart.render(units);
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
chart.drawLegend();

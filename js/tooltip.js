var d3 = require('d3');
var RA = require('./ra');

// Tiny templating helper
function t(str, ctx) {
    for(var name in ctx) str = str.replace(new RegExp('{'+name+'}', 'g'), ctx[name]);
    return str;
}

var template = '<h2>{name}</h2>' +
                '<div class="description">{description}</div>' +
                '<div class="cost">${cost}</div>' +
                '<div><b>Health:</b> {health}</div>' +
                '<div><b>Speed:</b> {speed}</div>' +
                '<div><b>Vision:</b> {vision}</div>';

var Tooltip = function() {
    this.el = d3.select('body')
                .append('div').attr('class', 'tooltip hidden');
};

Tooltip.prototype = {
    positionOnSVG: function(svgNode, x, y) {
        this.el.classed('hidden', false)
            .style('left', (svgNode.offsetLeft + x) + 'px')
            .style('top', (svgNode.offsetTop + y) + 'px');
    },

    render: function(d) {
        var contents = t(template, {
            name: RA.getName(d),
            description: RA.getDescription(d),
            cost: RA.getCost(d),
            health: RA.getHealth(d),
            speed: RA.getSpeed(d),
            vision: RA.getVision(d)
        });

        this.el.html(contents);
    },

    hide: function() {
        this.el.classed('hidden', true);
    }
};

module.exports = Tooltip;


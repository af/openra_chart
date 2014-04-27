var d3 = require('d3');
var RA = require('./ra');

var Tooltip = function() {
    this.el = d3.select('body')
                .append('div').attr('class', 'tooltip hidden');

    this.el.append('h2').attr('class', 'name');
    this.el.append('div').attr('class', 'description');
    this.el.append('div').attr('class', 'cost');
    this.el.append('div').attr('class', 'health');
    this.el.append('div').attr('class', 'speed');
    this.el.append('div').attr('class', 'vision');
};

Tooltip.prototype = {
    positionOnSVG: function(svgNode, x, y) {
        this.el.classed('hidden', false)
            .style('left', (svgNode.offsetLeft + x) + 'px')
            .style('top', (svgNode.offsetTop + y) + 'px');
    },

    render: function(d) {
        var dataMap = {
            '.name': RA.getName(d),
            '.description': RA.getDescription(d),
            '.cost': '$' + RA.getCost(d),
            '.health': 'Health: ' + RA.getHealth(d),
            '.speed': 'Speed: ' + RA.getSpeed(d),
            '.vision': 'Vision: ' + RA.getVision(d)
        };

        for (var selector in dataMap) {
            this.el.select(selector).text(dataMap[selector]);
        }
    },

    hide: function() {
        this.el.classed('hidden', true);
    }
};

module.exports = Tooltip;


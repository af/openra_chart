var d3 = require('d3');

var Tooltip = function() {
    this.el = d3.select('body')
                .append('div').attr('class', 'tooltip hidden');

    this.el.append('h2').attr('class', 'name');
    this.el.append('div').attr('class', 'description');
};

Tooltip.prototype = {
    positionOnSVG: function(svgNode, x, y) {
        this.el.classed('hidden', false)
            .style('left', (svgNode.offsetLeft + x) + 'px')
            .style('top', (svgNode.offsetTop + y) + 'px');
    },

    render: function(d) {
        var dataMap = {
            '.name': d.Tooltip.Name,
            '.description': d.Tooltip.Description.replace(/\\n/g, ' '),
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


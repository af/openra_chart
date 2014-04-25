var d3 = require('d3');

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
        this.el.select('div').remove();
        this.el.append('div')
            .text(d.Tooltip.Description.replace(/\\n/g, ' '));
    }
};

module.exports = Tooltip;


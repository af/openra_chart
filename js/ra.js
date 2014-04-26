module.exports = {
    buildings: ['tent', 'barr', 'ftur', 'weap', 'tsla', 'dome', 'hpad', 'afld',
                'fix', 'spen', 'syrd', 'proc', 'weap', 'atek', 'stek', 'pdox'],

    getHealth: function(d) { return d.Health.HP },
    getSpeed: function(d) { return d.speed },
    getVision: function(d) {
        var raw = (d.RevealsShroud || {}).Range || 0;
        return raw.toString().split('c')[0];    // Handle values of the form "5c0" (take the first number)
    },

    getCost: function(d) { return (d.Valued.Cost) },

    // Return the "most advanced" building dependency for a given unit
    getPrereqs: function(d) {
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
    }

};

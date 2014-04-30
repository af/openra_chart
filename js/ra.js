module.exports = {
    buildings: ['tent', 'barr', 'ftur', 'weap', 'tsla', 'dome', 'hpad', 'afld',
                'fix', 'spen', 'syrd', 'proc', 'weap', 'atek', 'stek', 'pdox'],

    // General functions to get a metric from the OpenRA-specific json data
    getCost: function(unit) { return (unit.Valued.Cost) },
    getName: function(unit) { return unit.Tooltip.Name },
    getDescription: function(unit) { return unit.Tooltip.Description.replace(/\\n/g, ' ') },
    getHealth: function(unit) { return unit.Health.HP },
    getSpeed: function(unit) { return unit.speed },
    getVision: function(unit) {
        var raw = (unit.RevealsShroud || {}).Range || 0;
        return raw.toString().split('c')[0];    // Handle values of the form "5c0" (take the first number)
    },

    // Return the "most advanced" building dependency for a given unit
    getPrereqs: function(unit) {
        var prereqs = unit.Buildable.Prerequisites;
        if (!prereqs) {
            if (unit.Inherits === '^Vehicle' || unit.Inherits === '^Tank') return 'weap';
            if (unit.Inherits === '^Infantry') return 'tent';
            if (unit.Inherits === '^Plane') return 'afld';
            if (unit.Inherits === '^Ship') return 'syrd';
            else return;
        }
        if (prereqs === 'techcenter') return 'atek';    // Exception for tanya
        var items = prereqs.split(',');
        return items[items.length - 1].trim();
    },

    // Return a filter function for units based on their faction
    getFilterForFaction: function(faction) {
        return function(unit) {
            if (faction === 'all') return true;
            else return unit.Buildable.Owner === faction;
        };
    },

    // Return a filter function for units based on their type (infantry/vehicle/etc)
    getFilterForType: function(unitType) {
        return function(unit) {
            var queueName = unit.Buildable.Queue;

            if (unitType === 'all') return true;
            else if (unitType === 'air') return queueName === 'Helicopter' || queueName === 'Plane';
            else return queueName.match(new RegExp(unitType + '$', 'i'));
        };
    },

    getFaction: function(unit) {
        return (unit.Buildable || {}).Owner;
    },

    // Return a string, to be used for a DOM class, based on the unit's faction
    getFactionClassname: function(unit) {
        var owner = (unit.Buildable || {}).Owner;
        var tokens = owner.replace(/\s/g, '').split(',');  // handle 'allies,soviet', 'soviet,allies' cases
        tokens.sort();
        return 'unit ' + tokens.join('_');
    },

    getWeaponName: function(unit) {
        return (unit.Armament || unit['Armament@PRIMARY'] || {}).Weapon;
    }
};
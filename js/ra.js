module.exports = {
    buildings: ['barracks', 'kenn', 'ftur', 'weap', 'tsla', 'dome', 'hpad', 'afld',
                'fix', 'spen', 'syrd', 'proc', 'weap', 'atek', 'stek', 'pdox'],
    buildings_allies: ['tent', 'hpad', 'syrd', 'atek'],
    buildings_soviet: ['barr', 'kenn', 'fturr', 'tsla', 'afld', 'spen', 'stek'],

    // General functions to get a metric from the OpenRA-specific json data
    getCost: function(unit) { return (unit.Valued.Cost) },
    getName: function(unit) { return (unit.Tooltip || {}).Name || unit.name },
    getDescription: function(unit) {
        var descr = (unit.Tooltip || {}).Description;
        return (descr || '').replace(/\\n/g, ' ');
    },
    getHealth: function(unit) { return unit.Health.HP },
    getSpeed: function(unit) { return unit.speed },
    getVision: function(unit) {
        var raw = (unit.RevealsShroud || {}).Range || 0;
        return raw.toString().split('c')[0];    // Handle values of the form "5c0" (take the first number)
    },

    // Return the "most advanced" building dependency for a given unit
    getPrereqs: function(unit) {
        var prereqs = (unit.Buildable.Prerequisites || '')
                        .replace(/(, )?\~techlevel\.\w+\b/, '');
        if (!prereqs) {
            if (unit.Inherits === '^Vehicle' || unit.Inherits === '^Tank') return 'weap';
            if (unit.Inherits === '^Infantry') return 'barracks';
            if (unit.Inherits === '^Plane') return 'afld';
            if (unit.Inherits === '^Ship') return 'syrd';
            else return;
        }
        if (prereqs === 'techcenter') return 'atek';    // Exception for tanya
        var items = prereqs.split(',')
            .filter(function(i) { return !(/vehicles\./.test(i)); })
            .map(function(i) { return i.replace(/\W/g, ''); });

        var lastPrereq = items[items.length - 1];
        if (!lastPrereq && prereqs.match(/\bvehicles\./)) return 'weap';
        else if (lastPrereq === 'tent' || lastPrereq === 'barr') return 'barracks';
        else return (lastPrereq || '').trim();
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
        var ownerField = (unit.Buildable || {}).Owner;  // No longer available in newer releases
        if (ownerField) return ownerField;

        var prereqs = (unit.Buildable.Prerequisites || '').split(' ');
        for (var i=0; i<prereqs.length; i++) {
            var p = prereqs[i].replace(/[^\w.]/g, '');   // Remove extra chars like ~
            if (p.match('vehicles.allies')) return 'allies';
            if (p.match('vehicles.soviet')) return 'soviet';
            if (module.exports.buildings_soviet.indexOf(p) > -1) return 'soviet';
            if (module.exports.buildings_allies.indexOf(p) > -1) return 'allies';
        }
        return 'all';
    },

    // Return a string, to be used for a DOM class, based on the unit's faction
    getFactionClassname: function(unit) {
        return 'unit ' + module.exports.getFaction(unit);
    },

    getWeaponName: function(unit) {
        return (unit.Armament || unit['Armament@PRIMARY'] || {}).Weapon;
    }
};

// Convert OpenRA's YAML-ish unit files to json

var fs = require('fs');
var path = require('path');
var yaml = require('yamljs');

var YAML_DIR = '../openra/mods/ra/rules';
var filesToCheck = ['vehicles', 'aircraft', 'infantry', 'ships'];

var filenames = fs.readdirSync(YAML_DIR);
var contents = {};
filenames.forEach(function(f) {
    var key = f.split('.')[0];
    if (filesToCheck.indexOf(key) === -1) return;

    var txt = fs.readFileSync(path.join(YAML_DIR, f), 'utf8');
    var detabbed = txt.replace(/\t/g, '    ');     // convert tabs to spaces
    console.log('parsing', key);
    try {
        contents[key] = yaml.parse(detabbed);
    } catch (e) {
        console.error('could not parse', f, e);
    }
});

// Convert nested objects into a flat array of units
function massageData(units) {
    var types = Object.keys(units);
    var arrays = types.map(function(t) {
        var validUnits = [];
        var unitKeys = Object.keys(units[t]);
        unitKeys.forEach(function(name) {
            var unit = units[t][name];
            unit.unitClass = t;
            unit.name = name;
            var isValidUnit = unit.Valued && unit.Valued.Cost && unit.Buildable;
            var addUnit = isValidUnit && unit.Buildable.Prerequisites !== 'bio';
            if (addUnit) validUnits.push(unit);
        });
        return validUnits;
    });

    // Flatten into a single array:
    return [].concat.apply([], arrays);
}

// fs.writeFileSync('units.json', JSON.stringify(contents, null, 2));
// console.log('---\nWrote units.json');

// Temporary hack to dump json data to a global var:
var units = massageData(contents);
var globalAssign = 'units=';
fs.writeFileSync('units.js', globalAssign + JSON.stringify(units, null, 2));

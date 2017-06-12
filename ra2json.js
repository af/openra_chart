// Convert OpenRA's YAML-ish unit files to json
// Requires 2 CLI args: the path to the RA mod rules dir, and the name of
// the OpenRA release that we're scraping.
//
// Example Usage:
// node ra2json.js ../openra/mods/ra/rules release-xxxxxx

var fs = require('fs');
var path = require('path');
var yaml = require('yamljs');

var RELEASE_NAME = process.argv.pop();
var YAML_DIR = process.argv.pop();
var filesToCheck = ['vehicles', 'aircraft', 'infantry', 'ships'];

var filenames = fs.readdirSync(YAML_DIR);
var contents = {};
filenames.forEach(function(f) {
    var key = f.split('.')[0];
    if (filesToCheck.indexOf(key) === -1) return;

    var txt = fs.readFileSync(path.join(YAML_DIR, f), 'utf8');
    txt = txt.replace('\t\t\tRadius: 469', '');     // Fix invalid Ant yaml in infantry.yaml
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

    // Older releases have scaled down speed values. Multiply to make them
    // comparable to the latest code
    var hasOldSpeedValues = units.vehicles.JEEP.Mobile.Speed < 100;

    var types = Object.keys(units);
    var arrays = types.map(function(t) {
        var validUnits = [];
        var unitKeys = Object.keys(units[t]);

        unitKeys.forEach(function(name) {
            var unit = units[t][name];
            unit.unitClass = t;
            unit.name = name;

            // Normalize unit speed to a single, uniformly scaled property:
            unit.speed = (unit.Plane || unit.Helicopter || unit.Mobile || {}).Speed;
            if (hasOldSpeedValues) unit.speed = unit.speed * 14;

            var isValidUnit = unit.Valued && unit.Valued.Cost && unit.Buildable;
            var addUnit = isValidUnit && !(/\bbio\b/.test(unit.Buildable.Prerequisites));
            if (addUnit) validUnits.push(unit);
        });
        return validUnits;
    });

    // Flatten into a single array:
    return [].concat.apply([], arrays);
}

// hack to dump json data to a global var:
var units = massageData(contents);
var fileName = 'js/data/' + RELEASE_NAME + '.js';
var globalAssign = 'units=(window.units||{}); units["' + RELEASE_NAME + '"]=';
fs.writeFileSync(fileName, globalAssign + JSON.stringify(units, null, 2));

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

fs.writeFileSync('units.json', JSON.stringify(contents, null, 2));
console.log('---\nWrote units.json');

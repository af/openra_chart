var fs = require('fs');
var path = require('path');
var yaml = require('yamljs');

var YAML_DIR = '../openra/mods/ra/rules';

var filenames = fs.readdirSync(YAML_DIR);
var contents = {};
filenames.map(function(f) {
    var key = f.split('.')[0];
    var txt = fs.readFileSync(path.join(YAML_DIR, f), 'utf8');
    var detabbed = txt.replace(/\t/g, '    ');     // convert tabs to spaces
    console.log('parsing', key);
    try {
        contents[key] = yaml.parse(detabbed);
    } catch (e) {
        console.error('could not parse', f, e);
    }
});

//console.log(contents);
console.log(contents.aircraft.MIG);

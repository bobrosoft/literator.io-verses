console.log('hello');

var fs = require('fs');
var path = require('path');

console.log(__filename);
console.log(path.dirname(__filename)); // path.sep
console.log(fs.readdirSync('./'));
console.log(fs.statSync('./').isDirectory());

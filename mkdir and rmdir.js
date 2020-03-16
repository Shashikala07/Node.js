var fs= require('fs');
var readMe=fs.readFile.sync('readMe.txt','utf8');
fs.writeFileSync('writeMe.txt',readMe);

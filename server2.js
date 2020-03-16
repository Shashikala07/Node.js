var http=require('http');
var fs=require('fs');

var myReadstream= fs.createReadStream(__dirname+ '/Readme1.txt','utf-8');
var myWritestream=fs.createWriteStream(__dirname+'/Writeme1.txt');
myReadstream.on('data',function(chunk){
    console.log('new chunk received:');
    myWritestream.write(chunk);

});
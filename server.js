var http=require('http');
var srever=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hey ');

});
srever.listen(3000,'127.0.0.1');
console.log('Learning node js')
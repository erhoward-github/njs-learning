var http = require("http");

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write('<p><a href="' + req.url +'">' + req.url + '</a></p>');
    res.end();
}).listen(8080);

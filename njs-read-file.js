var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){
    fs.readFile("njs-file-1.html", function(err, data) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Contents of njs-file-1.html</h1>");
        res.write("<xmp>" + data + "</xmp>");
        res.end();
    });
}).listen(8080);

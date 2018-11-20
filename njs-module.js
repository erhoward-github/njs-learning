var http = require("http");
var dt = require("./njs-my-first-module");

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<p>The date and time are currently: " + dt.myDateTime() + "</p>");
    res.end();
}).listen(8080);

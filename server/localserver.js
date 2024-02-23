var http = require('http');
http.createServer(function (req,res) { //200 port number is OK
    res.writeHead(200,{'Content-type':'text/html'});
    res.end('<h3>This is it</h3>')
}).listen(8080);
console.log("Server is running at http://localhost:8080");
// var http = require('http');
// const fs = require('fs');
// // http.createServer(function (req,res) { //200 port number is OK
// //     res.writeHead(200,{'Content-type':'text/html'});
// //     res.end('<h3>This is it</h3>')
// // }).listen(8080);
// http.createServer(function (req, res) {
//     fs.readFile(__filename, function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//     });
//   }).listen(8080);
// console.log("Server is running at http://localhost:8080");

var fs = require('fs');

//append content at the end of the file:
fs.appendFile('mynewfile1.txt', 'Good bye', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

              
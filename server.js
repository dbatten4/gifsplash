var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.get('/', function(request, response){

});

server.listen(3000, function() {
  console.log("Server listening on port 3000");
});

app.get('*', function(req, res) {
  res.sendfile('./index.html');
});

module.exports = server;

// The server listen port
var listenPort = 8080;

// Import the libraries we will need.
var http = require('http');
var session = require('client-sessions');


// Create a HTTP server object and listen to listenPort.
// Farm requests off to the onRequest function.
var server = http.createServer(onRequest).listen(listenPort);

/**
 * The main server request function, this function is called EVERY HTTP request.
 *
 */
function onRequest(request, response) {
  response.writeHead(200);
  response.end('Hi everybody');
};

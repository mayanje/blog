var static = require('node-static');

//
// Create a node-static server to serve the current directory
//
var file = new(static.Server)('./public', { cache: 0});
var port = process.env.PORT ? process.env.PORT : 8080
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response, function (err, res) {
            if (err) { // An error as occured
                console.error("> Error serving " + request.url + " - " + err.message);
                response.writeHead(err.status, err.headers);
                response.end();
            } else { // The file was served successfully
                console.log("> " + request.url + " - " + res.message);
            }
        });
    });
}).listen(port);

console.log("> node-static is listening on http://127.0.0.1:"+port);

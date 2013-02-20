var restify = require('restify');
var mongoose = require('mongoose');
// Create a node-static server to serve the current directory
//
var port = process.env.PORT ? process.env.PORT : 8080;
var apiKey = process.env.API_KEY ? process.env.API_KEY : "devkey";
var mongoServer = process.env.MONGOHQ_URL ? process.env.MONGOHQ_URL : "mongodb://localhost/blogablog";

mongoose.connect(mongoServer);

var stories = require('./lib/stories.js');
var entries = require('./lib/entries.js');

var server = restify.createServer();

server.use(restify.gzipResponse());
server.use(restify.bodyParser({ mapParams: false }));

server.get('/blog/latest', entries.latest);
server.get('/blog', entries.released);
server.get('/blog/drafts', entries.nonreleased);
server.get('/blog/:id', entries.get);
server.get('/stories/wip', stories.wip);
server.get('/stories/completed', stories.completed);
server.get('/stories/:id', stories.get);

//Write
server.pre(function(req, res, next) {
  req.headers.accept = 'application/json';  // screw you client!
  if(req.method !== "GET" && req.headers.api_key !== apiKey)
  {
    return next(new restify.NotAuthorizedError("You must provide an api key to access write functionality"));
  }
  else
    return next();
});

server.post('/blog', entries.add);
server.put('/blog/:id', entries.update);
server.del('/blog/:id', entries.remove);
server.post('/stories', stories.add);
server.put('/stories/:id', stories.update);
server.del('/stories/:id', stories.remove);

function redirect(req, res, next) {
    res.header('Location', '/index.html');
    res.send(302);
    return next(false);
}
server.get(/^\/.*/, function(req,res,next){
    console.log("path",req.path());
    if(!req.url.match(/\.[\w]*$/))
        req.path = function(){return "/index.html";};
    restify.serveStatic({
      directory: './public'
    })(req,res,next)
});

server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
});
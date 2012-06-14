var http = require('http');
var URL = require('url');
 
database = {
  "1" :  "Hello, world!",
  "2" :  "REST Service made simple",
  "3" :  "Node.js is cool"
};
 
handler = function(req, res) {
  url = URL.parse(req.url);
 
  if (req.method == 'GET') {
    path = url.pathname.split('/');
    resources = path[path.length - 2];
    id = path[path.length - 1];
 
    if (resources == 'messages') {
      message = database[id];
 
      var body = {
        "message" : message
      };
 
      res.writeHead(200, {'Content-Type' : 'application/json' });
      res.end(JSON.stringify(body));
      
    }
  }
  
  // Normal HTTP requests
   res.writeHead(200, {'Content-Type':'text/plain'});
   res.end('How can we service you? \n');
  
 
};
 
var port = process.env.PORT;
 
http.createServer(handler).listen(port);
 
console.log('***********************************************') ;
console.log('REST WebServer running '  );
console.log('/messages/1') ;
console.log('/messages/2') ;
console.log('/messages/3') ;
console.log('***********************************************') ;




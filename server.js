var http = require("http");   //引入Node.js模块

http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello world');
}).listen(8888);

console.log('Server runing at http://127.0.0.1:8888/');
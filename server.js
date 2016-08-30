var http = require("http");   //引入Node.js模块
var events = require("events");
var emitter = new events.EventEmitter();

var server = http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello world');
	emitter.emit("connection");
}).listen(8888);

console.log('Server runing at http://127.0.0.1:8888/');

emitter.once("connection", function() {
	console.log('some connected');
});


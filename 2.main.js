var events = require("events");  //用require指令引入evnets
var eventEmitter = new events.EventEmitter();  //eventEmitter 对象？ 

//绑定事件
eventEmitter.on('exportFile', function(){
	
});


eventEmitter.on('connectEvent', function(){
	console.log("连接成功");
	eventEmitter.emit("");
});
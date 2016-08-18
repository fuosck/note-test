var events = require("events");   //引入events模块

var event = new events.EventEmitter();  //EventEmitter 的核心就是事件触发与事件监听器功能的封装

event.on('someEvent', function() {
	console.log("someEvent事件被触发！");
});

setTimeout(function() {
	event.emit('someEvent');
},2000);

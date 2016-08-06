var fs = require("fs");   

var file = "exportFile/____setting.txt";

//同步方式调用
var data = fs.readFileSync(file);  //在这里会等待 不执行下面的语句

console.log(data.toString());
console.log('程序执行结束!');


//异步方式调用（通过回调函数实现）
fs.readFile(file, function (err, data) {
	if(err) return console.error(err);
	console.log(data.toString());
});

console.log("程序执行结束");
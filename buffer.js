//node Buffer类有三种方法创建！
//方法一：创建长度为256字节的buf
var buf = new Buffer(256);
//方法二：通过给定的数组创建
var buf1 = new Buffer([10, 20, 30, 40, 50]);
//方法三：通过一个字符串来创建 utf-8是默认的编码，同样支持ascii/base64/hex ...等
var buf2 = new Buffer("www.runoob.com", "utf-8");

//写入node 缓冲区的语法
//buf.write(string[, offset[, length]][, encoding]);
//string - 写入缓冲区的字符串
//offset - 缓冲区开始写入的索引值，默认为0
//length - 写入字节数，默认为buffer.length
//encoding - 使用的编码，默认为utf-8

//返回值：实际写入的大小，如果buffer空间不足，只写入部分字符串
var len = buf.write("www.runoob.com");
console.log("写入Buf长度为：" + len);  //14

//从缓冲区读取数据语法
//buf.toString([encoding[, start[, end]]])
//encoding - 使用的编码，默认为utf-8
//start - 指定开始读取的索引位置，默认为0
//end - 结束位置，默认为缓冲区的末尾
//返回值：实际读取的字符串

var res = buf.toString("utf8", 4, 14);
console.log(res);
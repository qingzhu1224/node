var b1=new Buffer("123");
var b2=new Buffer("abc");

var b=Buffer.concat([b1, b2]);

console.log(b.toString());

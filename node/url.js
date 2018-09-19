const urlLib=require('url');

var obj=urlLib.parse("http://www.zhinengshe.com:8080/user/a.html?username=blue&pass=123", true);

console.log(obj);

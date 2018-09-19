const http=require('http');

var server=http.createServer(function (request, response){
  //request——请求   输入  浏览器的请求信息
  //response——响应  输出  响应给浏览器的东西
  console.log('有人访问了');

  response.write("abccccc"); //发送数据
  response.end();   //结束
});

//监听：告诉系统，找这个端口的来我这儿
server.listen(8080);

const http=require('http');

var server=http.createServer(function (req, res){
  console.log(req.url);

  res.write("abccccc"); //发送数据
  res.end();   //结束
});

//监听：告诉系统，找这个端口的来我这儿
server.listen(8080);

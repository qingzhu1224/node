const http=require('http');

var server=http.createServer(function (req, res){
  switch(req.url){
    case '/1.html':
      res.write("123444");
      break;
    case '/2.html':
      res.write("asaa");
      break;
    default:
      res.write('404');
  }
  res.end();
});

//监听：告诉系统，找这个端口的来我这儿
server.listen(8080);

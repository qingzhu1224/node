const http=require('http');

http.createServer(function (req, res){
  //"/aa?user=blue&pass=123456"
  console.log(req.url);

  res.write('aaa');
  res.end();
}).listen(8080);

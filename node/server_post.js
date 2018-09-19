const http=require('http');
const querystring=require('querystring');

http.createServer(function (req, res){
  var str='';

  //data-部分数据到达
  req.on('data', function (data){
    str+=data;
  });

  //end-全部到达
  req.on('end', function (){
    var post=querystring.parse(str);
    console.log(req.url, str, post);
  });

  res.write('aaa');
  res.end();
}).listen(8080);

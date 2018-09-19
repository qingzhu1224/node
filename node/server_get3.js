const http=require('http');
const querystring=require('querystring');

http.createServer(function (req, res){
  if(req.url.indexOf('?')!=-1){
    var arr=req.url.split('?');
    var url=arr[0];
    var get=querystring.parse(arr[1]);
  }else{
    var url=req.url;
    var get={};
  }

  console.log(url, get);

  res.write('aaa');
  res.end();
}).listen(8080);

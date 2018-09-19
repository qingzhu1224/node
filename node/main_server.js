const http=require('http');
const fs=require('fs');
const querystring=require('querystring');
const urlLib=require('url');

http.createServer(function (req, res){
  //1.接收数据-post
  var str='';
  req.on('data', function (data){
    str+=data;  //??
  });
  req.on('end', function (){
    //2.解析数据
    var obj=urlLib.parse(req.url, true);
    const url=obj.pathname;
    const GET=obj.query;

    const POST=querystring.parse(str);

    console.log(url, GET, POST);

    //3.读取文件&返回
    fs.readFile('./www'+url, function (err, data){
      if(err)
        res.write('404');   //??
      else
        res.write(data);

      res.end();
    });
  });
}).listen(8080);

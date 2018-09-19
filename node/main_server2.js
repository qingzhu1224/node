const http=require('http');
const fs=require('fs');
const querystring=require('querystring');
const urlLib=require('url');

http.createServer(function (req, res){
  //1.接收数据-post
  //var str='';
  var arr=[];
  req.on('data', function (data){
    //str+=data;  //??
    arr.push(data);
  });
  req.on('end', function (){
    //2.解析数据
    var obj=urlLib.parse(req.url, true);
    const url=obj.pathname;
    const GET=obj.query;

    var str=Buffer.concat(arr).toString();
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

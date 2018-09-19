const http=require('http');

http.createServer(function (req, res){
  var arr=[];
  req.on('data', function (data){
    arr.push(data);
  });
  req.on('end', function (){
    var b=Buffer.concat(arr);

    console.log(b.toString());  //错的
  });
}).listen(8080);

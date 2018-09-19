const http=require('http');

http.createServer(function (req, res){
  //"/aa?user=blue&pass=123456"
  if(req.url.indexOf('?')!=-1){
    var arr=req.url.split('?');
    //arr[0]=>地址  '/aa'
    //arr[1]=>数据  'user=blue&pass=123456'
    var url=arr[0];

    var arr2=arr[1].split('&');
    //arr2[0]=>'user=blue'
    //arr2[1]=>'pass=123456'

    var get={};

    for(var i=0;i<arr2.length;i++){
      var arr3=arr2[i].split('=');
      //arr3[0]=>名字 'user'
      //arr3[1]=>值   'blue'
      get[arr3[0]]=arr3[1];
    }
  }else{
    var url=req.url;
    var get={};
  }


  console.log(url, get);

  res.write('aaa');
  res.end();
}).listen(8080);

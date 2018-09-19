const http=require('http');
const fs=require('fs');
const querystring=require('querystring');
const urlLib=require('url');
const mysql=require('mysql');

http.createServer(function (req, res){
  var arr=[];

  //1.接收数据
  req.on('data', function (data){
    arr.push(data);
  });
  req.on('end', function (){
    //2.解析
    var obj=urlLib.parse(req.url, true);
    var url=obj.pathname;
    var GET=obj.query;

    var str=Buffer.concat(arr).toString();
    var POST=querystring.parse(str);

    if(url=='/login'){           //请求login接口
      var db=mysql.createConnection({
        host: 'localhost',
        port: 3308,
        user: 'root',
        password: '',
        database: '2016-11-20'
      });

      var sql="SELECT * FROM user_table WHERE username='"+GET.user+"'";
      //var sql=`SELECT * FROM user_table WHERE username='${GET.user}'`;
      db.query(sql, function (err, data){
        if(err){
          res.end("{ok: false, msg: '数据库错误'}");
        }else{
          if(data.length==0){
            res.end("{ok: false, msg: '用户名不存在'}");
          }else{
            if(data[0].password==GET.pass){
              res.end("{ok: true, msg: '成功'}");
            }else{
              res.end("{ok: false, msg: '密码错了'}");
            }
          }
        }
      });
    }else if(url=='/register'){  //请求注册接口
      var db=mysql.createConnection({
        host: 'localhost',
        port: 3308,
        user: 'root',
        password: '',
        database: '2016-11-20'
      });

      var sql="SELECT * FROM user_table WHERE username='"+GET.user+"'";

      db.query(sql, function (err, data){
        if(err){
          res.end("{ok:false, msg:'数据库错了'}");
        }else{
          if(data.length>0){
            res.end("{ok:false, msg:'用户名已存在'}");
          }else{
            var sql="INSERT INTO user_table (ID,username,password) VALUES(0,'"+GET.user+"','"+GET.pass+"')";

            db.query(sql, function (err, data){
              if(err){
                res.end("{ok:false,msg:'数据库错误'}");
              }else{
                res.end("{ok:true,msg:'成功'}");
              }
            });
          }
        }
      });
    }else{                       //文件
      fs.readFile('./www'+url, function (err, data){
        if(err)
          res.write('404');
        else
          res.write(data);

        res.end();
      });
    }
  });
}).listen(8080);

const mysql=require('mysql');

//1.连接
var db=mysql.createConnection({
  host: 'localhost',
  port: 3308,
  user: 'root',
  password: '',
  database: '2016-11-20'
});

//2.查询-query('sql', 回调)
db.query('SELECT * FROM user_table;', function (err, data){
  if(err){
    console.log('请求失败');
  }else{
    console.log(data);
  }
});

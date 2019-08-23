//读取数据库数据
var mysql  = require('mysql');  //调用MySQL模块
var DATABASE = "user";
//创建一个connection
var connection = mysql.createConnection({

  host     : '127.0.0.1',       //主机
  user     : 'root',            //MySQL认证用户名
  password:'root',
  port:   '3306',
  database: DATABASE
});

//创建一个connection
connection.connect(function(err){

  if(err){

    console.log('[query] - :'+err);

    return;

  }

  console.log('[connection connect]  succeed!');

});

//执行SQL语句
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {

  if (err) {

    console.log('[query] - :'+err);

    return;

  }

  console.log('The solution is: ', rows[0].solution);

});

//关闭connection
connection.end(function(err){

  if(err){

    return;

  }

  console.log('[connection end] succeed!');

});

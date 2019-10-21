var mysql = require('mysql');

//打开数据连接 配置信息
function getConn() {
  //连接数据库
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',  //用户名
    password: 'root',   //密码
    database: 'aymc',
    port: '3306'
    //端口号
  });

  return connection;
}

//插入数据
function insert(connection, addSql, param) {
  connection.connect(function (err) {
    if (err) {
      connection.rollback(function () {//如果失败回滚
        sendData(req, res, next, conn, err);
      });
      console.log('---:' + err);
      return;
    }
    console.log('连接succeed');
  });

// 插入一条数据
// var sql = 'insert into job (code,name,firstChar,pinyin,rank) values(?,?,?,?,?)';
//   let addSql = 'INSERT INTO job(name,firstChar,pinyin) VALUES(?,?,?)';
//   var param = ['挖金者', 'w', '金'];
  connection.query(addSql, param, function (err, rs) {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log('插入数据succeed');
  });

  return connection;
}

function closeConn(connection) {
  //关闭数据库
  connection.end(function (err) {
    if (err) {
      console.log('---:' + err);
      return;
    }
    console.log('关闭succeed');
  });
}

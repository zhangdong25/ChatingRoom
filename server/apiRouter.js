const express = require("express");
const mysql = require('mysql');
const router = express.Router();
const bodyParser = require('body-parser');
const { nanoid } = require('nanoid');

// 处理POST请求的中间件
router.use(bodyParser.json());

// 数据库连接函数
function dbConnection() {
  // 连接上数据库
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'zhang3025',
    database: 'chatingroom'
  });
  connection.connect((err) => {
    if (err) {
      console.log('error', err);
      return;
    }
    console.log("数据库连接sussess")
  });
  return connection;
}
// 数据库关闭连接函数
function dbClosed(connection) {
  // 关闭连接
  connection.end((error) => {
    if (error) {
      console.error('数据库关闭连接时出错：', error);
      return;
    }
    console.log('数据库连接已关闭。');
  });
}

// 获取当前操作时间戳
function getCurrentTimestamp() {
  var now = new Date();
  var timestamp = now.getTime();
  return timestamp;
}

// 登录接口
router.post("/login", (req, res) => {
  var exist;
  var userID;
  var timestamp;
  const connect = dbConnection();
  const data = req.body
  const query = 'SELECT username,password,userID,createdAt FROM userinfo where username = ? and password = ?';
  console.log(data);
  connect.query(query, [data.username, data.password], (err, result) => {
    // console.log(result[0].username);
    if (err) {
      console.error('执行查询操作时出错：', err);
      return;
    }
    if (result.length == 0) {
      exist = false;
      userID = null;
      timestamp = getCurrentTimestamp();
    } else if (result[0].username != data.username || result[0].password != data.password) {
      exist = false;
      userID = null;
      timestamp = getCurrentTimestamp();
    } else {
      exist = true;
      userID = result[0].userID;
      timestamp = getCurrentTimestamp();
    }
    res.send({
      status: 200,
      msg: "POST请求成功",
      data: { exist, userID, timestamp }
    });
  });
  // 关闭连接
  dbClosed(connect);
})

// 注册接口
router.post("/register", (req, res) => {
  // 使用 nanoid 生成唯一的 ID
  const uniqueId = nanoid();
  const timestamp = getCurrentTimestamp();
  var done;
  const connect = dbConnection();
  const data = req.body
  // const birthday = toString(data.birthday);
  console.log(data);
  const query = 'INSERT INTO userinfo (userID,username, password,createdAt) VALUES (?,?,?,?)';
  connect.query(query, [uniqueId, data.username, data.password, timestamp], (err, result) => {
    if (err) {
      console.error('执行插入操作时出错：', err);
      done = false;
      res.send({
        status: 0,
        msg: "POST请求成功",
        done: done,
        id: uniqueId
      })
      return;
    }
    console.log('数据插入成功。');
    done = true;
    console.log(data);
    res.send({
      status: 0,
      msg: "POST请求成功",
      done: done,
      id: uniqueId
    })
  });
  dbClosed(connect);
})

module.exports = router;
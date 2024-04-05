const express = require("express");
const app = express();
const cors = require('cors');

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }));
// 一定要在路由之前配置cors，从而解决接口跨域问题
// const cors = require("cors");
app.use(cors());

const router = require("./apiRouter");
app.use("/api", router);

app.listen(80, function () {
  console.log("Express server running at http://127.0.0.1");
});
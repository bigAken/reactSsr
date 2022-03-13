const express = require("express");
const app = express();
const config = {
  isLogin: false,
  login: true,
};
app.get("/ssr/api/news", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res
    .json({
      code: 200,
      msg: "ok",
      list: [
        {
          id: 1,
          title: "标题1",
        },
        {
          id: 2,
          title: "标题2",
        },
        {
          id: 3,
          title: "标题3",
        },
        {
          id: 4,
          title: "标题4",
        },
        {
          id: 5,
          title: "标题5",
        },
      ],
    })
    .end();
});

app.get("/ssr/api/isLogin", function (req, res) {
  res
    .json({
      success: true,
      data: {
        login: config.isLogin,
      },
    })
    .end();
});
app.get("/ssr/api/login", function (req, res) {
  config.isLogin = true;
  res
    .json({
      success: true,
      data: {
        login: config.login,
      },
    })
    .end();
});
app.get("/ssr/api/logout", function (req, res) {
  config.isLogin = false;
  res
    .json({
      success: true,
      data: {
        logout: true,
      },
    })
    .end();
});
app.get("/ssr/api/translations", function (req, res) {
  res
    .json({
      success: true,
      data: [
        {
          id: 1,
          title: "11111",
        },
        {
          id: 2,
          title: "22222",
        },
        {
          id: 3,
          title: "33333",
        },
        {
          id: 4,
          title: "44444",
        },
      ],
    })
    .end();
});

var serve = app.listen(4000, () => {
  console.log("4000");
});

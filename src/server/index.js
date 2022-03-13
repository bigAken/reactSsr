import express from "express";
import proxy from "express-http-proxy";
import { render } from "./utils";
import routes from "../Routes";
import { matchRoutes } from "react-router-config";
import { getStore } from "../store";

const app = express();
app.use(express.static("public"));

app.use(
  "/api",
  proxy("http://127.0.0.1:4000", {
    proxyReqPathResolver: function (req) {
      return "/ssr/api" + req.url;
    },
  })
);

app.get("*", function (req, res) {
  const store = getStore();
  const promises = [];

  const matchedRoutes = matchRoutes(routes, req.path);
  
  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve);
      });
      promises.push(promise);
    }
  });
  const context = { isNotFound: false, css: [] };
  Promise.all(promises)
    .then(() => {
      const html = render(store, routes, req, context);
      if (context.action === "REPLACE") {
        // 服务端重定向
        res.redirect(301, context.url);
      } else if (context.isNotFound) {
        // 404页面
        res.status(404);
        res.send(html);
      } else {
        res.send(html);
      }
    })
    .catch((er) => {
      console.log("er", er);
    });
});

var serve = app.listen(3000, () => {
  console.log("3000");
});

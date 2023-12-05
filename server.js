const express = require("express");
// const httpProxy = require("http-proxy");
const app = express();
const port = 5000;
const { createProxyMiddleware } = require("http-proxy-middleware");

// const proxy = httpProxy.createProxyServer({});

// app.use((req, res) => {
//   if (req.url === "/route1") {
//     proxy.web(req, res, { target: "http://localhost:6000" });
//     // console.log("Seen");
//   } else if (req.url === "/route2") {
//     proxy.web(req, res, { target: "http://localhost:4000" });
//   } else {
//     res.status(404).send("Route not found");
//   }
// });

app.use(
  "/route1",
  createProxyMiddleware({
    target: "http://127.0.0.1:4000",
    pathRewrite: {
      "^/route1": "",
    },
  })
);

app.use(
  "/route2",
  createProxyMiddleware({
    target: "http://127.0.0.1:6000",
    pathRewrite: {
      "^/route2": "",
    },
  })
);

app.listen(port, () => {
  console.log(`API Gateway is running at http://localhost:${port}`);
});

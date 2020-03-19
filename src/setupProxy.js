const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    createProxyMiddleware("/lambda", {
      target: "https://wi8cwa01z1.execute-api.ap-northeast-2.amazonaws.com/dev",
      changeOrigin: true
    })
  );
  app.use(
    createProxyMiddleware("/portal", {
      target: "https://mportal.cau.ac.kr/portlet/",
      changeOrigin: true
    })
  );
};

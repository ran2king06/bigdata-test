const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://svc-dashboard-dummy-api-7ej42xs2pa-de.a.run.app/api',
            changeOrigin: true,
        })
    );
}
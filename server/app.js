const Koa = require('koa');
const app = new Koa();
const path = require('path');
const router = require('./route');

app.use(require('koa-static')(path.join(__dirname, '..', 'dist')));

// routes
app.use(router.routes()).use(router.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

module.exports = app;

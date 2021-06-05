const Koa = require('koa');
const app = new Koa();
const path = require('path');

app.use(require('koa-static')(path.join(__dirname, '..', 'dist')));


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

module.exports = app;

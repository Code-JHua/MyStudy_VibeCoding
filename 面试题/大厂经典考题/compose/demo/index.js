const Koa = require('koa');
const app = new Koa();

async function A(ctx, next) {
  console.log('A start');
  await next();
  console.log('A end');
}

async function B(ctx, next) {
  console.log('B start');
  await next();
  console.log('B end');
}

async function C(ctx, next) {
  console.log('C start');
  await next();
  console.log('C end');
}

app.use(A)
app.use(B)
app.use(C)

app.listen(3000, () => {
  console.log('listening on port 3000');
})

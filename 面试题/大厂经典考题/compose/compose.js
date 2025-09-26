function compose(middlewares) {
  return function fn(context) {
    function dispatch(i) {
      if (i === middlewares.length) {
        return
      }
      const nextFn = () => {
        dispatch(i + 1)
      }
      middlewares[i](context, nextFn)
    }
    dispatch(0)
  }
}

let middlewares = []

middlewares.push(async (ctx, next) => {
  console.log('A start');
  await next();
  console.log('A end');
})
middlewares.push(async (ctx, next) => {
  console.log('B start');
  await next();
  console.log('B end');
})
middlewares.push(async (ctx, next) => {
  console.log('C start');
  await next();
  console.log('C end');
})


let fn = compose(middlewares)
fn()
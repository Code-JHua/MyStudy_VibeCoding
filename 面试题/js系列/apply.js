Function.prototype.myApply = function (context, ...args) {
  context = context || window
  const arg = args[0]
  if(! arg instanceof Array) {
    throw new TypeError('CreateListFromArrayLike called on non-object')
  }
  const fn = Symbol('fn')
  context[fn] = this
  let result = context[fn](...arg)
  delete context[fn]
  return result
}
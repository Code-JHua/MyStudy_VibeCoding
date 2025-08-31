Function.prototype.myCall = function (context, ...args) {
  context = context || window
  // this 指向调用 myCall 的函数
  const fn = Symbol('fn')
  context[fn] = this
  let result = context[fn](...args)
  delete context[fn]
  return result
}
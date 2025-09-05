function sum(a, b, c, d) {
  this.a = a
  return this.a + b + c + d;
}
obj = {
  add: sum
}

const currySum = curry(sum, 1)
console.log(currySum(2)(3)(4));
console.log(currySum(2)(3, 4));

// 柯里化
function curry(fn, ...args) {
  if(args.length < fn.length) {
    return (...args2) => {
      return curry(fn, ...args, ...args2)
    }
  }
  return fn(...args)
}

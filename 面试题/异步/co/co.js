const co = require('co')

const asyncFunction = (val) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('asyncFunction' + val + ' success'+'\n')
    }, 1000)
  })
}

function* foo() {
  const result1 = yield asyncFunction('1')
  const result2 = yield asyncFunction('2')
  return result1 + result2
}
co(foo).then((res) => {
  console.log(res)
})

function A() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('A')
      resolve('A success')
    }, 2000)
  })
}
function B() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('B')
      resolve('B success')
    }, 1000)
  })
}
function C() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('C')
      resolve('C success')
    }, 3000)
  })
}

// Promise.race([A(), B(), C()])
// .then(res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })

// Promise.all([A(), B(), C()])
// .then(res => {
//   console.log(res + '成功')
// }, err => {
//   console.log(err + '失败')
// })

// Promise.any([A(), B(), C()])
// .then(res => {
//   console.log(res, '成功')
// }, err => {
//   console.log(err, '失败')
// })

Promise.allSettled([A(), B(), C()])
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})
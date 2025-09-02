function A() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('A')
      reject('A fail')
    }, 2000)
  })
}

A().finally((res) => {
  console.log('finally', res)
}).catch(err => {
  console.log(err)
})

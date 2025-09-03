function co(generator) {
  return new Promise((resolve, reject) => {
    const it = generator()
    function next(value) {
      const { value: val, done } = it.next(value)
      if (done) {
        resolve(val)
      } else {
        Promise.resolve(val)
        .then((res) => {
          next(res)
        })
        .catch((err) => {
          reject(err)
        })
      }
    }
    next()
  })
}
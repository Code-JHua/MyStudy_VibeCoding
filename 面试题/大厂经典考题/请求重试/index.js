function ajax() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() * 10 > 8 ? resolve('成功') : reject('失败')
    }, 1000)
  })
}

// 重试机制
function retry(fn, count) {
  let times = 1
  return new Promise((resolve, reject) => {
    const repeat = () => {
      fn()
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          times++

          if (times > count) {
            reject(err)
          } else {
            repeat()
          }

        })
    }
    repeat()
  })
}

// 测试
retry(ajax, 3).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
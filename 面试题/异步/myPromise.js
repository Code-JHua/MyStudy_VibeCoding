class MyPromise {
  constructor(executor) {
    this.status = 'pending'
    this.value = undefined
    this.reason = undefined
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
    const resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled'
        this.value = value
        // 把 then 中的回调函数取出来执行
        this.onFulfilledCallbacks.forEach(fn => fn(value))
      }
    }
    const reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected'
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn(reason))
      }
    }
    executor(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    // 处理 then 中没有传递参数的情况
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
    const newpromise = new MyPromise((resolve, reject) => {
      if (this.status === 'fulfilled') {
        setTimeout(() => {
          try {
            const result = onFulfilled(value)
            resolve(result)
          } catch (error) {
            reject(error)
          }
        }, 0)
      }
      if (this.status === 'rejected') {
        setTimeout(() => {
          try {
            const result = onRejected(reason)
            resolve(result)
          } catch (error) {
            reject(error)
          }
        }, 0)
      }
      if (this.status === 'pending') {
        // onFulfilled 被存起来
        this.onFulfilledCallbacks.push((value) => {
          setTimeout(() => {
            try {
              const result = onFulfilled(value)
              resolve(result)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
        // onRejected 被存起来
        this.onRejectedCallbacks.push((reason) => {
          setTimeout(() => {
            try {
              const result = onRejected(reason)
              resolve(result)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
      }
    })

    return newpromise
  }
  catch(onRejected) {
    this.onRejectedCallbacks.push(onRejected)
  }
  finally(callback) {
    return this.then(
      (value) => {
        return MyPromise.resolve(callback()).then(() => value)
      },
      (reason) => {
        return MyPromise.resolve(callback()).then(() => { throw reason })
      }
    )
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      for (let promise of promises) {
        promise.then(
          (value) => {
            resolve(value)
          },
          (reason) => {
            reject(reason)
          }
        )
      }
    })
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      let arr = []
      let count = 0
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (value) => {
            arr[i] = value
            count++
            if (count === promises.length) {
              resolve(arr)
            }
          },
          (reason) => {
            reject(reason)
          }
        )
      }
    })
  }

  static any(promises) {
    return new MyPromise((resolve, reject) => {
      let arr = []
      let count = 0
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (value) => {
            resolve(value)
          },
          (reason) => {
            arr[i] = reason
            count++
            if (count === promises.length) {
              reject(new AggregateError(arr, 'All promises were rejected'))
            }
          }
        )
      }
    })
  }

  static resolve(value) {
    return new MyPromise((resolve, reject) => {
      resolve(value)
    })
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason)
    })
  }

  static allSettled(promises) {
    return new MyPromise((resolve, reject) => {
      let arr = []
      let count = 0
      for (let i = 0; i < promises.length; i++) {
        promises[i]
          .then(
            (value) => {
              arr[i] = {
                status: 'fulfilled',
                value
              }
            },
            (reason) => {
              arr[i] = {
                status: 'rejected',
                reason
              }
            }
          )
          .finally(() => {
            count++
            if (count === promises.length) {
              resolve(arr)
            }
          })
      }
    })
  }
}

function A() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      console.log('A')
      reject('A fail')
    }, 3000)
  })
}
function B() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      console.log('B')
      reject('B fail')
    }, 1000)
  })
}
function C() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      console.log('C')
      reject('C fail')
    }, 2000)
  })
}

// Promise.race([A(), B(), C()])
// .then(res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })

MyPromise.allSettled([A(), B(), C()]).finally(() => {
  console.log('finally')
}).then(res => {
    console.log(res, '成功')
  }, err => {
    console.log(err, '失败')
  })

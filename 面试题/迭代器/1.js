// Object.prototype[Symbol.iterator] = function () {
//   // 方法一
//   // let values = Object.values(this)
//   // let index = 0
//   // return {
//   //   next: () => {
//   //     if (index < values.length) {
//   //       return { value: values[index++], done: false }
//   //     } else {
//   //       return { value: undefined, done: true }
//   //     }
//   //   }
//   // }

//   // 方法二
//   return Object.values(this)[Symbol.iterator]()
// }

// 方法三
Object.prototype[Symbol.iterator] = function* () {
  let keys = Object.keys(this)
  for (let key of keys) {
    yield this[key]
  }
}

let [a, b] = { a: 1, b: 2 }
console.log(a, b)


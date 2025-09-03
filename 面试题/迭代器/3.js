// const arr = [1, 2, 3]
// const iterator = arr[Symbol.iterator]();

// function createIterator(arr) {
//   let index = 0 // 闭包
//   return {
//     next: () => {
//       if (index < arr.length) {
//         return {value: arr[index++], done: false}
//       } else {
//         return {value: undefined, done: true}
//       }
//     }
//   }
// }
// const myIterator = createIterator(arr)

let obj = {
  a: 1,
  b: 2,
  c: 3
}
obj[Symbol.iterator] = function() {
  let keys = Object.keys(this)
  let index = 0
  return {
    next: () => {
      if (index < keys.length) {
        return {value: this[keys[index++]], done: false}
      } else {
        return {value: undefined, done: true}
      }
    }
  }
}
for (let item of obj) {
  console.log(item)
}

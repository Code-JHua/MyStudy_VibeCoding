Array.prototype.myReduce = function (callback, init) {
  let pre =  init ? init : this[0]
  let start = init ? 0 : 1

  for (let i = start; i < this.length; i++) {
    pre = callback(pre, this[i], i, this)
  }
  return pre
}

const arr = [1, 2, 3, 4, 5]
const res = arr.myReduce((pre, cur) => pre + cur, 0)
console.log(res)

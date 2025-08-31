// 递归实现
function flat(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flat(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}

// toString() -- 原数组只能有number或string类型
function flat2(arr) {
  return arr.toString().split(',')  // ...
}

// 利用reduce实现
function flat3(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat3(cur) : cur)
  }, [])
}

// 利用扩展运算符实现
function flat4(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

// 利用栈实现
function flat5(arr) {
  let res = []
  let stack = [...arr]
  while (stack.length) {
    let cur = stack.pop()
    if (Array.isArray(cur)) {
      stack.push(...cur)
    } else {
      res.push(cur)
    }
  }
  return res.reverse()
}



const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]
console.log(flat2(arr))
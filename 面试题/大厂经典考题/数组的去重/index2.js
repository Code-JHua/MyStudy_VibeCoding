let arr = [
  {name: '张三', age: 18, like: {name: '篮球'}},
  {name: '张三', age: 19 },
  {name: '张三', age: 18, like: {name: '篮球'}},
  {name: '张三', age: 18 },
  {name: '张三', age: 18 },
  {name: '张三', age: 18 }
]

function unique(arr) {  
  let res = []
  for (let i = 0; i < arr.length; i++) {
    let isSame = false
    for (let j = 0; j < res.length; j++) {
      if(isEqual(arr[i], res[j])) {
        isSame = true
        break
      }
    }
    if(!isSame) {
      res.push(arr[i])
    }
  }
  return res
}

// 辅助函数: 深度比较两个变量是否相等
function isEqual(a, b) {
  if(a instanceof Date && b instanceof Date) return a.getTime() === b.getTime()
  if(a instanceof RegExp && b instanceof RegExp) return a.source === b.source
  if((typeof a === 'object' && a !== null) && (typeof b === 'object' && b !== null)) {
    let aKeys = Object.keys(a)
    let bKeys = Object.keys(b)
    if(aKeys.length !== bKeys.length) return false
    for(let key in a) {
      if (key in b) {
        if(!isEqual(a[key], b[key])) return false
      } else {
        return false
      }
    }
    return true
  } else {
    return a === b
  }
}

console.log(unique(arr))

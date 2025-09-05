let input = {
  a: 1, 
  b: [1, 2, {
    c: 2
  }],
  d: null
}

// 对象扁平化
function flatten(obj) {
  let res = {}
  function dfs(target, oldkey) {
    for (let key in target) {
      let newkey
      if (oldkey) { // 走了递归
        if(target instanceof Array) {
          newkey = oldkey + '[' + key + ']'
        } else {
          newkey = oldkey + '.' + key
        }
      } else {
        newkey = key
      }
      if (target[key] !== null && typeof target[key] === 'object') {
        dfs(target[key], newkey)
      } else {
        if (target[key] == null || target[key] === undefined) {
          continue
        }
        res[newkey] = target[key]
      }
    }
  }
  dfs(obj, '')
  return res
}

console.log(flatten(input));

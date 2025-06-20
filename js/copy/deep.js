let obj = {
    name: '康少',
    age: 18,
    like: {
        a: '唱',
        b: '跳',
        c: 'rap'
    },
    a: undefined,
    b: null,
    e: {}
}

function deepCopy(obj) {
    let newObj = {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            // 先判断 obj[key] 值的类型
            if (typeof obj[key] === 'object' && obj[key] !== null) { // 如果是对象
                newObj[key] = deepCopy(obj[key])
            } else {  // 如果不是对象
                newObj[key] = obj[key]
            }
            newObj[key] = obj[key]
        }
    }
    return newObj
}
console.log(deepCopy(obj));
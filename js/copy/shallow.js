Object.prototype.sex = '男'
let obj = {
    name: '康少',
    age: 18,
    like: {
        a: '唱',
        b: '跳',
        c: 'rap'
    }
}

function shallowCopy(obj) {
    let newObj = {}
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {  // 只遍历对象自身的属性(显式拥有)
            newObj[key] = obj[key]
        }
    }
    return newObj
}
console.log(shallowCopy(obj));

Object.prototype.d = 4
let o = {
    a: 1,
    b: 2,
    c: 3,
}
for(let key in o) {  // 隐式原型的也遍历了
    console.log(key);
}
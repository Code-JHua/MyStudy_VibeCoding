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

let newObj = JSON.stringify(obj)  // 序列化  将对象转换为字符串
let newObj2 = JSON.parse(newObj)  // 反序列化  将字符串转换为对象

console.log(newObj);
console.log(typeof newObj);  // string
console.log(newObj2);
console.log(typeof newObj2);  // object



const obj = {
    name: '小华',
    age: 18,
    like: {
        n: '泡脚',
    }
}

const key = 'sex'
obj.key = 1
obj[key] = 'boy'
// console.log(obj.like?.n);

console.log(obj);

let obj = {
    name: '康少',
    age: 18,
    like: {
        a: '唱',
        b: '跳',
        c: 'rap'
    }
}

let newObj = Object.assign({}, obj)
obj.like.a = '篮球'
console.log(newObj)

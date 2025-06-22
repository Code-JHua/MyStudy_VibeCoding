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

let newObj = structuredClone(obj)
console.log(newObj);
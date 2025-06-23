// let a = 1
// let b = 2
// let c = 3

// let [a, b, c] = [1, 2, 3]

// const arr = [1, [2, 3, [4], 5]]
// let [a, [b, c, [d]]] = arr

// const arr = [1, 2, 3, 4, 5]
// let [a, b, ...c] = arr
// console.log(a, b, c);
// const sex = 'boy'
// const obj = {
//     name: '小华',
//     age: '18',
//     sex,
//     like: {
//         n: '泡脚'
//     }
// }

// // let name = obj.name
// let { name, age, like: { n } } = obj
// console.log(name, age, n);

// const [a, b, c, d, e] = 'hello'
// console.log(a, b, c, d, e);

// const str = 'hello' //str.length
// let {length} = 'hello'

function foo({x: a, y: b}) {
    return a + b
}

foo({x: 1,y: 2})
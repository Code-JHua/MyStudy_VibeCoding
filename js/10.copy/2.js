// let a = 1

// let obj = {
//     a: 1
// }

// let obj2 = Object.create(obj) //创建一个新对象，让新对象的隐式原型指向 obj


// let arr = [1, 2, 3]
// let arr2 = [4, 5]
// arr.concat(arr2) //连接两个数组, 返回一个新数组

// let arr3 = [].concat(arr) //复制数组

// let arr = [1, 2, 3]  // 数组的解构
// // const [x, y, z] = arr
// // console.log(x, y, z)

// let arr2 = [...arr]
// console.log(arr2)

// let arr = ['a', 'b', 'c', 'd', 'e']
// arr2 = arr.slice(0, arr.length) // 不影响原数组
// console.log(arr2);


// let obj = {
//     name: '康少',
//     age: 18
// }
// let girl = {
//     nickname: '章若楠'
// }
// let newObj = Object.assign({},obj)
// // let newObj = Object.assign(obj, girl)
// // console.log(newObj);
// // console.log(obj);

let arr = [1, 2, 3]
let newArr = arr.toReversed().reserve()
console.log(newArr);
console.log(arr);

// let newArr = arr.reverse() // 反转数组
// console.log(newArr);
// console.log(arr);
// var obj = {  // 对象
//     a: 1,
//     b: 2,
//     c: 3
// }

// with (obj) {  // 批量化修改对象属性
//     a = 3
//     b = 4
//     c = 5
// }

// console.log(obj.a)


var o1 = {
    a: 1
}

var o2 = {
    b: 2
}
function foo(obj) {
    with (obj) {
        a = 2
    }
}
foo(o2)

console.log(o2)
console.log(a)
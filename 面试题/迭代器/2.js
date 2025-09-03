let arr = ['a', 'b', 'c']
for (let item of arr) {
  console.log(item)
}

Object.prototype.d = 4
let obj = {
  a: 1,
  b: 2,
  c: 3
}
// for (let item of Object.keys(obj)) {  // 遍历对象的键
//   console.log(item)
// }
// for(let [key, value] of Object.entries(obj)) { // 遍历对象的键值对
//   console.log(key, value)
// }

for (let key in obj) {
  console.log(key, obj[key])
}
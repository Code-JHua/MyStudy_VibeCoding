// function A() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('A')
//       resolve('A success')
//     }, 3000)
//   })
// }
// function B() {
//   console.log('B');
// }
// function* foo() {
//   const a = yield A()
//   yield B()
//   return 'foo success'
// }

// const it = foo()

function* foo(x) {
  let y = 2 * (yield (x + 1))
  let z = yield (y / 3)
  return (x + y + z)
}

const it = foo(5)
let res1 = it.next()
console.log(res1);
let res2 = it.next(res1.value)
console.log(res2);
let res3 = it.next(res2.value)
console.log(res3);

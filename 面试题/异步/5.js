
async function A() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('A')
      resolve('A success')
    }, 3000)
  })
}
function B() {
  console.log('B');
}

async function foo() {  // *
  const res = await A() // yield A()
  console.log(res);
  B()
}
foo()
// console.log(foo());

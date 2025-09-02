function A() {
  setTimeout(() => {
    console.log('A')
  }, 2000)
}
function B() {
  setTimeout(() => {
    console.log('B')
  }, 1000)
}
A()
B()

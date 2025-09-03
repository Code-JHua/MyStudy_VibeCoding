const arr = [1, 2, 3, 4, 5]
simpleForOf(arr, (item) => {
  console.log(item)
})

function simpleForOf(arr, callback) {
  const iterator = arr[Symbol.iterator]()
  let res = iterator.next()
  while (!res.done) {
    callback(res.value)
    res = iterator.next()
  }
}
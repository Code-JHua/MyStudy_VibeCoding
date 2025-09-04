let arr = [1, 2, 3, 4, 1]


function unique(arr) {
  let left = 0
  let right = 1
  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      left++
      arr[left] = arr[right]
    }
    right++
  }
  arr.length = left + 1
  return arr
}

const arr = [1, 2, 3]

let newArr = ['a', 'b']

newArr = newArr.concat(arr)
newArr.push(...arr)

console.log(newArr);


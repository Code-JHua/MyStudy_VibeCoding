function toThousand(num) {
  const integer = String.prototype.split.call(num, '.')[0] // 整数部分(string)
  const decimal = String.prototype.split.call(num, '.')[1] // 小数部分(string)
  // console.log(integer);
  let newNum = ''
  let count = 0
  for (let i = integer.length - 1; i >= 0; i--) {
    newNum = integer[i] + newNum
    count++
    if (i % 3 === 0 && i !== 0) {
      newNum = ',' + newNum
    }
  }
  // console.log(newNum);
  if (decimal) {
    newNum += '.' + decimal
  }
  return newNum
}

// 正则
function toThousand2(num) {
  const numStr = String(num);
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// 测试
const oldNum = 123456798.22 // 123,456,798.22
console.log(toThousand(oldNum));
console.log(toThousand2(oldNum));


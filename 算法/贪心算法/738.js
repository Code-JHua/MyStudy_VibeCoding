// 738.单调递增的数字

var monotoneIncreasingDigits = function (n) {
  // 将数字转换为数字数组
  n = n.toString().split('').map(item => +item);

  let index = Infinity;

  // 从右往左扫描，寻找不满足递增条件的位置
  for (let i = n.length - 1; i > 0; i--) {
    if (n[i - 1] > n[i]) {
      index = i;             // 标记要置 9 的起始位置
      n[i - 1] -= 1;         // 前一位减 1
      n[i] = 9;              // 当前位置为 9
    }
  }

  // 从 index 开始，后面所有数字都置为 9
  for (let i = index; i < n.length; i++) {
    n[i] = 9;
  }

  // 最后将数组转为数字返回
  return Number(n.join(''));
};
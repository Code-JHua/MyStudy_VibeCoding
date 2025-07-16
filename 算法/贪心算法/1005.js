// 1005.K次取反后最大化的数组和

var largestSumAfterKNegations = function (nums, k) {
  let res = 0;

  // 按绝对值从大到小排序
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));

  // 翻转负数
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] = -nums[i];
      k--;
    }
    res += nums[i];
  }

  // 剩余翻转次数，如果是奇数，就翻转最小绝对值的那个数（即最后一个）
  if (k % 2 === 1) {
    res -= 2 * nums[nums.length - 1];
  }

  return res;
};
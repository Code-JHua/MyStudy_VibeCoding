// 53. 最大子序和

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res = nums[0];    // 初始化为第一个元素，避免全是负数时出错
  let curSum = 0;

  for (let i = 0; i < nums.length; i++) {
    curSum = Math.max(nums[i], curSum + nums[i]); // 决定是否从当前元素重新开始
    res = Math.max(res, curSum); // 更新最大值
  }

  return res;
};
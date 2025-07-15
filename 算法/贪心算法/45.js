// 45.跳跃游戏 II

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length == 1) return 0
  let res = 0
  let cur = 0
  let next = 0
  for (let i = 0; i < nums.length - 1; i++) {
    next = Math.max(nums[i] + i, next)
    if (i == cur) {
      if (cur < nums.length) {
        res++
        cur = next
      }
    }
  }
  return res
};
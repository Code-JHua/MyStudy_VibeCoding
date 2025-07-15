// 55. 跳跃游戏

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length == 1) return true
  let cover = 0
  for (let i = 0; i <= cover; i++) {  // 注意这里是 i <= cover
    cover = Math.max(i + nums[i], cover)
    if (cover >= nums.length - 1) {
      return true
    }
  }
  return false
};
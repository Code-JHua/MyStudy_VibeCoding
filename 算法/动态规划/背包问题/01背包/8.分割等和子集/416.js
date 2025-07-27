/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = 0
  for (let x of nums) {
    sum += x
  }
  if (sum % 2 !== 0) return false
  let target = sum / 2

  let dp = new Array(target + 1).fill(0)
  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= 0; j--) {
      if (j >= nums[i]) dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
      if (dp[j] == target) return true
    }
  }
  console.log(dp)
  return dp[target] == target
};
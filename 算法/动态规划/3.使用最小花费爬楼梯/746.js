// 746. 使用最小花费爬楼梯

/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function (cost) {
  let dp = [0, 0]

  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1])
  }
  return dp[dp.length - 1]
};
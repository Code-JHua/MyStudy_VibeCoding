/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 回溯 1976ms
var findTargetSumWays = function (nums, target) {
  let res = 0;
  const findAll = (cur, len) => {
    if (len === nums.length && cur === target) { // 所有整数都被串联，和恰好是target
      res++;
      return;
    }
    if (len >= nums.length) return; // 所有整数都被串联，和不是target
    // 向数组中的每个整数前添加 '+' 或 '-'
    findAll(cur + nums[len], len + 1)
    findAll(cur - nums[len], len + 1)
  }
  findAll(0, 0);
  return res;
};

// 动态规划 68ms
var findTargetSumWays = function (nums, target) {
  // 原题目可转化为:
  //
  // 将所有元素划分为 2 个集合,
  // 一个集合中包含所有要添加 "+" 号的元素, 一个集合中包含所有要添加 "-" 号的元素
  //
  // 设两个集合的元素和分别为 positive 和 negative, 所有元素总和为 sum, 那么有如下等式:
  // positive + negative = sum (1)
  // positive - negative = target (2)
  // (1) 与 (2) 联立可得: positive = (sum + target) / 2,
  // 所以如果能从原数组中取出若干个元素形成 1 个元素总和为 (sum + target) / 2 的集合, 
  // 就算得到了 1 种满足题意的组合方法
  //
  // 因此, 所求变为: 有多少种取法, 可使得容量为 (sum + target) / 2 的背包被装满?

  const sum = nums.reduce((a, b) => a + b);

  if (Math.abs(target) > sum) {
    return 0;
  }

  if ((target + sum) % 2) {
    return 0;
  }

  const bagWeight = (target + sum) / 2;

  // 1. dp 数组的含义
  // dp[j]: 装满容量为 j 的背包, 有 dp[j] 种方法
  let dp = new Array(bagWeight + 1).fill(0);

  // 2. 递推公式
  // dp[j] = Σ(dp[j - nums[j]]), (j ∈ [0, j] 且 j >= nums[j])
  // 因为 dp[j - nums[j]] 表示: 装满容量为 j - nums[j] 背包有 dp[j - nums[j]] 种方法
  // 而容量为 j - nums[j] 的背包只需要再将 nums[j] 放入背包就能使得背包容量达到 j
  // 因此, 让背包容量达到 j 有 Σ(dp[j - nums[j]]) 种方法

  // 3. dp 数组如何初始化
  // dp[0] = 1, dp[1 ~ bagWeight] = 0
  dp[0] = 1;

  // 4. 遍历顺序
  // 先物品后背包, 物品从前往后遍历, 背包容量从后往前遍历
  for (let i = 0; i < nums.length; i++) {
    for (let j = bagWeight; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }

  return dp[bagWeight];
};

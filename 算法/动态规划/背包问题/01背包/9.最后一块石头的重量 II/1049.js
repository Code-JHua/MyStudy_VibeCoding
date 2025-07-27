// 计算所有石头的总重量
let sum = stones.reduce((s, n) => s + n);

// 目标是将石头分为两组，使它们的重量差最小，这就相当于找一个子集使其总重量不超过 sum/2 的最大值
let dpLen = Math.floor(sum / 2);
let dp = new Array(dpLen + 1).fill(0); // dp[i] 表示容量为i的背包最多能装多少重量

// 动态规划：0-1背包问题，每块石头只能选一次
for (let i = 0; i < stones.length; ++i) {
  for (let j = dpLen; j >= stones[i]; --j) {
    dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
  }
}

// 最小重量差 = 总重量 - 2 * 最大子集重量（即 dp[dpLen]）
return sum - 2 * dp[dpLen];
var integerBreak = function (n) {

  // dp[i] 表示整数 i 拆分后的最大乘积
  let dp = new Array(n + 1).fill(0);

  dp[1] = 0; // 无法拆分
  dp[2] = 1; // 1 + 1 = 2

  // 从 3 到 n 填充 dp 数组
  for (let i = 3; i <= n; i++) {
    // 枚举所有拆分方式 j 和 i - j
    for (let j = 1; j < i; j++) {
      // 状态转移：选最大值
      dp[i] = Math.max(dp[i], j * dp[i - j], j * (i - j));
    }
  }

  return dp[n]; // 返回最终结果
};

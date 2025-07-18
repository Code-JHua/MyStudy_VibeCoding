var uniquePaths = function (m, n) {
  // 初始化 m 行 n 列的二维数组，每行每列初始为 1
  const dp = Array(m).fill(1).map(() => Array(n).fill(1));

  // 填充 dp 数组（从 dp[1][1] 开始）
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]; // 当前位置路径数 = 上 + 左
    }
  }

  return dp[m - 1][n - 1]; // 返回右下角的结果
};
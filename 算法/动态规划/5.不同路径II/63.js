var uniquePathsWithObstacles = function (obstacleGrid) {
  // 获取网格的行数 m 和列数 n
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  // 创建 m x n 的二维数组 dp 并初始化为 0
  let dp = new Array(m).fill('').map(item => Array(n).fill(0));

  // 初始化第一列：从起点开始，无障碍时路径数为 1
  for (let i = 0; i < m && obstacleGrid[i][0] == 0; i++) {
    dp[i][0] = 1;
  }

  // 初始化第一行：从起点开始，无障碍时路径数为 1
  for (let j = 0; j < n && obstacleGrid[0][j] == 0; j++) {
    dp[0][j] = 1;
  }

  // 填充 dp 表：从 (1,1) 开始，跳过障碍格子
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] == 0) {
        // 路径数 = 上方 + 左边
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  // 返回右下角的路径数
  return dp[m - 1][n - 1];
};
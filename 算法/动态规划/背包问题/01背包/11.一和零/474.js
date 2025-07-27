var findMaxForm = function (strs, m, n) {
  let dp = new Array(m + 1).fill('').map(item => new Array(n + 1).fill(0))

  let zeros, ones
  for (let x of strs) { // 遍历每个字符串时 zeros 和 ones 重置为 0 
    zeros = 0
    ones = 0
    for (y of x) {
      if (y == '0') zeros++
      if (y == '1') ones++
    }

    for (let i = m; i >= zeros; i--) {
      for (let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1)
      }
    }
  }
  console.log(dp)
  return dp[m][n]
};
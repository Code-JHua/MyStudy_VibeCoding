var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true; // 空字符串可分割

  // 外层循环：遍历字符串的每个位置 j (1 到 s.length)
  for (let j = 1; j <= s.length; j++) {
    // 内层循环：遍历字典中的每个单词
    for (let i = 0; i < wordDict.length; i++) {
      let len = wordDict[i].length;
      // 只有当单词长度不超过当前位置 j 时才可能匹配
      if (len <= j) {
        // 检查从 j-len 到 j-1 的子串是否等于 wordDict[i]
        // 并且检查 j-len 位置之前的部分是否可分割 (dp[j-len] 为 true)
        if (s.slice(j - len, j) === wordDict[i] && dp[j - len]) {
          dp[j] = true; // 标记位置 j 可分割
          break; // 可选：找到一种方式即可，跳出内层循环检查下一个 j
        }
      }
    }
    // 注意：这里不能 return，必须继续计算直到 j = s.length
  }

  // 最终返回整个字符串是否可分割
  return dp[s.length];
};
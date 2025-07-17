// 56. 合并区间

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let res = []
  intervals.sort((a, b) => a[0] - b[0])

  let pre = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    cur = intervals[i]
    if (cur[0] > pre[1]) { // 不重合
      res.push(pre)
      pre = cur
    } else {
      pre[1] = Math.max(cur[1], pre[1])
    }
  }
  res.push(pre)
  return res
};
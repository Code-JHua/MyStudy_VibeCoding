// 455.分发饼干

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let res = 0
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let gIndex = g.length - 1
  let sIndex = s.length - 1
  while (gIndex >= 0 && sIndex >= 0) {
    if (s[sIndex] >= g[gIndex]) {
      res++
      sIndex--
      gIndex--
    } else {
      gIndex--
    }
  }
  return res
};
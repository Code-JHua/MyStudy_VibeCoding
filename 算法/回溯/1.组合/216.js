// 216.组合总和III

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let res = []
    let path = []
    let sum = 0
    const backtracking = (startIndex) => {
        if (path.length === k) {
            res.push(path.slice())
            return
        }
        for (let i = startIndex; i <= 9 - k + path.length; i++) {
            sum += i
            if (sum > n) break
            path.push(i)
            backtracking(i + 1)
            sum -= i
            path.pop()
        }
    }
    backtracking(1)
    return res
};
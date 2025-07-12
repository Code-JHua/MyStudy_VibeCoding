// 39.组合总和

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = []
    let path = []
    let sum = 0

    function backtracking(startnum) {
        if (sum > target) return
        if (sum == target) {
            res.push([...path])
            return
        }

        for (let i = startnum; i < candidates.length; i++) {
            path.push(candidates[i])
            sum += candidates[i]
            backtracking(i)   //从当前开始排序,不允许回头
            path.pop()
            sum -= candidates[i]
        }
    }
    backtracking(0)
    return res
};
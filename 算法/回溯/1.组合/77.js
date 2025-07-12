// 77.组合

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let res = []
    let path = []
    function backtracking(n, k, startnum) {
        if (path.length == k) {
            res.push([...path])  //拷贝存入
            return
        }
        for (let i = startnum; i <= n; i++) {
            path.push(i)
            backtracking(n, k, i + 1)
            path.pop()
        }
    }
    backtracking(n, k, 1)
    return res
};
// 78.子集

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = []
    let path = []
    backtracking(0)
    return res

    function backtracking(index) {
        res.push([...path])

        for (let i = index; i < nums.length; i++) {
            path.push(nums[i])
            backtracking(i + 1)
            path.pop()
        }
    }
};
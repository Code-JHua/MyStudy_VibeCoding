// 90.子集II

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let res = []
    let path = []
    nums.sort()
    backtracking(0)
    return res

    function backtracking(index) {
        res.push([...path])

        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] == nums[i - 1]) continue
            path.push(nums[i])
            backtracking(i + 1)
            path.pop()
        }
    }
};
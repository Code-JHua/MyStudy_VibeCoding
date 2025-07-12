// 组合总和 II

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const res = [];
    const path = [];
    let sum = 0;

    // ⭐️ 必须排序，确保相同元素相邻，并支持剪枝优化
    candidates.sort((a, b) => a - b);

    function backtracking(startIndex) {
        if (sum > target) return;
        if (sum === target) {
            res.push([...path]);
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {
            const num = candidates[i];

            // 剪枝：如果当前数就超过了剩余目标值，后面也不可能满足
            if (sum + num > target) break;

            // 去重：同一层中跳过重复数字
            if (i > startIndex && num === candidates[i - 1]) continue;

            // 做选择
            path.push(num);
            sum += num;

            // 递归：下一层从 i + 1 开始（每个数只能用一次）
            backtracking(i + 1);

            // 回溯
            path.pop();
            sum -= num;
        }
    }

    backtracking(0);
    return res;
};
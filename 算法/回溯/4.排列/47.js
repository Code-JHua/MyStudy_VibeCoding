// 47.全排列 II

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    // 存放所有不重复的排列结果
    let res = [];

    // 当前正在构建的排列路径
    let path = [];

    // 标记数组：used[i] 表示 nums[i] 是否已被当前路径使用
    let used = new Array(nums.length).fill(0);

    // 对原数组排序，使得相同元素相邻，便于剪枝去重
    nums.sort();

    // 开始回溯搜索
    backtracking(used);

    // 返回最终结果
    return res;

    /**
     * 回溯函数
     */
    function backtracking(used) {
        // 如果当前路径长度等于原数组长度，说明找到了一个完整排列
        if (nums.length === path.length) {
            // 拷贝当前路径加入结果集，防止后续修改影响
            res.push(Array.from(path));
            return;
        }

        // 遍历数组中的每个元素
        for (let i = 0; i < nums.length; i++) {
            // 如果该元素已经被使用，跳过
            if (used[i]) continue;

            // 剪枝条件：
            // 如果当前元素和前一个元素相同，并且前一个元素未被使用，
            // 说明这一层已经选过相同的元素，继续选会导致重复排列。
            // 所以跳过这种情况，达到去重目的。
            if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) continue;

            // 做选择：将当前元素加入路径
            path.push(nums[i]);
            // 标记为已使用
            used[i] = 1;

            // 进入下一层递归
            backtracking(used);

            // 撤销选择：从路径中移除当前元素
            path.pop();
            // 标记为未使用，以便在其他分支中再次使用
            used[i] = 0;
        }
    }
};
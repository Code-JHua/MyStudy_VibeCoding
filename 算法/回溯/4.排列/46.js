// 46.全排列

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    // 存放最终结果的所有排列
    let res = [];

    // 当前路径（当前正在构建的排列）
    let path = [];

    // 创建一个 used 数组来记录哪些元素已经被使用过
    // 0 表示未使用，1 表示已使用
    let used = Array(nums.length).fill(0);

    // 开始进行回溯搜索
    backtracking(used);

    // 返回所有找到的排列
    return res;

    /**
     * 回溯函数
     * @param {number[]} used - 标记 nums 中每个元素是否已被使用（0=未使用，1=已使用）
     */
    function backtracking(used) {
        // 如果当前路径长度等于原数组长度，说明找到了一个完整的排列
        if (path.length === nums.length) {
            // 将当前路径的副本加入结果集中（避免后续修改影响结果）
            res.push([...path]);
            return;
        }

        // 遍历原数组中的每一个元素
        for (let i = 0; i < nums.length; i++) {
            // 如果该元素已经被使用过，跳过
            if (used[i]) continue;

            // 做选择：将 nums[i] 加入当前路径
            path.push(nums[i]);

            // 标记该元素为已使用
            used[i] = 1;

            // 进入下一层递归
            backtracking(used);

            // 撤销选择：从当前路径中移除 nums[i]
            path.pop();

            // 标记该元素为未使用，以便在其他排列中再次使用
            used[i] = 0;
        }
    }
};
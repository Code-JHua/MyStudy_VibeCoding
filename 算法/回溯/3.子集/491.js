// 491.非递减子序列

/**
 * @param {number[]} nums - 输入的整数数组，可能包含重复数字
 * @return {number[][]} - 返回所有符合条件的递增子序列（长度 ≥ 2）
 */
var findSubsequences = function (nums) {
    let res = [];     // 存放最终结果的所有子序列
    let path = [];    // 当前路径，保存当前正在构建的子序列

    backtracking(0);  // 从索引 0 开始进行回溯

    return res;
};

function backtracking(index) {
    // 如果当前路径长度 >= 2，则是一个有效子序列，加入结果集
    if (path.length >= 2) {
        res.push([...path]);  // 拷贝当前 path 到结果集中
    }

    // 每一层递归都创建一个新的 Set，用于记录本层已经选择过的数字，防止重复
    let set = new Set();

    // 从 index 开始尝试每一个可能的下一个元素
    for (let i = index; i < nums.length; i++) {
        // 剪枝条件：
        // 1. 本层已经选过相同值，跳过（去重）
        // 2. 当前元素小于 path 最后一个元素，破坏递增顺序，跳过
        if (set.has(nums[i]) ||
            (path.length > 0 && nums[i] < path[path.length - 1])) {
            continue;
        }

        // 添加当前元素到路径中
        set.add(nums[i]);       // 记录本层已使用该值
        path.push(nums[i]);     // 加入路径

        // 进入下一层递归，从 i + 1 开始
        backtracking(i + 1);

        // 回溯：撤销上一步的选择
        path.pop();
    }
}
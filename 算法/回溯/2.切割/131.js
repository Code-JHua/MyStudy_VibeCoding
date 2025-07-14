// 131. 分割回文串

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let res = [];     // 存放所有分割方案的结果
    let path = [];    // 当前路径（当前分割出的回文子串集合）

    backtracking(0);  // 从索引 0 开始搜索

    return res;
};

function backtracking(index) {
    // 终止条件：如果当前索引已经到达字符串末尾
    if (index === s.length) {
        res.push([...path]); // 把当前路径加入结果集
        return;
    }

    // 尝试从 index 开始切割到 i 的位置
    for (let i = index; i < s.length; i++) {
        // 如果不是回文，跳过
        if (!isHuiwen(s, index, i)) continue;

        // 是回文的话，加入当前路径
        path.push(s.slice(index, i + 1));

        // 进入下一层递归，从 i+1 开始继续分割
        backtracking(i + 1); // ✅ 这里才是正确的递归位置

        // 回溯：撤销选择，尝试下一个切割点
        path.pop();
    }
}

// 判断 s 中 [left, right] 区间是否是回文
function isHuiwen(s, left, right) {
    while (left <= right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}
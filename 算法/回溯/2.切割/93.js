// 93.复原IP地址

/**
 * @param {string} s 
 * @return {string[]} 
 */
var restoreIpAddresses = function (s) {
    let res = [];     // 存放所有合法的 IP 地址组合
    let path = [];    // 当前路径（正在构建的 IP 段）

    backtracking(0);  // 从索引 0 开始尝试分割

    return res;       // 返回最终结果
};

function backtracking(index) {
    // 剪枝：如果已经选了超过 4 段 IP 地址，直接返回
    if (path.length > 4) return;

    // 如果正好选了 4 段，并且也正好用完了所有字符，说明是一个有效 IP 地址
    if (path.length === 4 && index === s.length) {
        res.push(path.join('.')); // 把当前路径拼接成 IP 字符串并加入结果集
        return;
    }

    // 尝试从当前位置开始切割 1~3 个字符作为一个 IP 段
    for (let i = index; i < s.length; i++) {
        // 取出当前子串作为候选 IP 段
        let str = s.slice(index, i + 1);

        // 条件一：不能有前导零，除非是 "0" 本身
        if (str.length > 1 && str[0] === '0') continue;

        // 条件二：数值必须在 0 ~ 255 之间
        if (Number(str) > 255) continue;

        // 符合条件，将当前子串加入路径
        path.push(str);

        // 继续递归处理下一个位置
        backtracking(i + 1);

        // 回溯：撤销上一步选择，尝试下一种切割方式
        path.pop();
    }
}
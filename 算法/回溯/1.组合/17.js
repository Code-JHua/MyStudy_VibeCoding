// 17.电话号码的字母组合

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    // 数字到字母的映射表，索引对应数字 0~9
    const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

    // 存放最终结果的数组
    let res = [];

    // 回溯过程中记录当前路径（临时存储）
    let path = [];

    // 特殊情况处理：输入为空字符串或 null
    if (digits == null || digits.length === 0) return [];

    // 回溯函数
    function backTracking(digits, index) {
        // 如果当前路径长度等于输入长度，说明找到了一个完整的组合
        if (path.length === digits.length) {
            res.push(path.join(''));  // 将字符数组拼接成字符串加入结果数组
            return;
        }

        // 获取当前处理的是哪个数字（如 '2' -> num = 2）
        let num = Number(digits[index]);

        // 获取该数字对应的字母字符串（如 2 -> "abc"）
        let letters = map[num];

        // 遍历当前数字对应的所有字母（如 'a', 'b', 'c'）
        for (let i = 0; i < letters.length; i++) {
            path.push(letters[i]);              // 将当前字母加入路径
            backTracking(digits, index + 1);    // 递归进入下一层，处理下一个数字
            path.pop();                         // 回溯：撤销当前选择，尝试下一个字母
        }
    }

    // 从索引 0 开始递归调用
    backTracking(digits, 0);

    // 返回最终结果
    return res;
};
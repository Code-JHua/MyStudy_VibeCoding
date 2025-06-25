var isValid = function (s) {
    const obj = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let stack = []; // 栈
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] != undefined) { // 左括号
            stack.push(s[i])
        } else { // 右括号
            if (obj[stack.pop()] !== s[i]) { // 栈顶元素和当前元素不匹配
                return false;
            }
        }
    }
    return stack.length === 0; // 栈为空，全部匹配
};
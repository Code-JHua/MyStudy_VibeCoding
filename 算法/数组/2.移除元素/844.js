var backspaceCompare = function (s, t) {
    return build(s) === build(t);
};

function build(str) {
    const stack = []; // 栈用于存储有效字符
    for (const ch of str) {
        if (ch !== '#') {
            stack.push(ch); // 正常字符入栈
        } else if (stack.length > 0) {
            stack.pop(); // 遇到 "#" 弹出栈顶字符
        }
    }
    return stack.join(''); // 将栈中字符拼成字符串
}
var evalRPN = function (tokens) {
    let stack = []
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]
        if (isNumber(token)) {
            stack.push(Number(token)) // 变为number类型再压入栈
        } else {
            let num1 = stack.pop()
            let num2 = stack.pop()
            if (token == '+') {      //后面出战的操作前面出栈的
                stack.push(num2 + num1)
            } else if (token == '-') {
                stack.push(num2 - num1)
            } else if (token == '*') {
                stack.push(num2 * num1)
            } else if (token == '/') {
                stack.push(num2 / num1 | 0)
            }
        }
    }
    return stack.pop()

};

var isNumber = function (token) {
    return !(token == '+' || token == '-' || token == '*' || token == '/')
}
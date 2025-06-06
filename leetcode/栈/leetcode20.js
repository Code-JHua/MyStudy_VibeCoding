let s = "([{}])"; // 123321
// 字符串从左往右，左括号就入栈，右括号就出栈一个元素
// 每一个出战的元素都到 obj中查找另一半
//再和右边比较

var isValid = function (s) {
    const obj = {
         '(' : ')',
         '[' : ']',
         '{' : '}'
    }
    let stack = []; // 栈
    for (let i = 0; i < s.length; i++){
        if (obj[s[i]] != undefined) { // 左括号
            stack.push(s[i])
        }else { // 右括号
            if(obj[stack.pop()] !== s[i]) { // 栈顶元素和当前元素不匹配
                return false;
            } 
        }
    }
    return stack.length === 0; // 栈为空则全部匹配
}

console.log(isValid(s)); // true
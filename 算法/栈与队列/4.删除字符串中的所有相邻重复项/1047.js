var removeDuplicates = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (stack[stack.length - 1] == s[i]) {  //stack[-1] = undefined
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.join("")
};
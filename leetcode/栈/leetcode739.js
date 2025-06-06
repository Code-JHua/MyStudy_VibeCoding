let temperatures = [73, 74, 75, 71, 69, 72, 76, 73]

var dailyTemperatures = function (temperatures) {
    const len = temperatures.length
    const stack = [] // 单调递减栈，存放temperatures数组的下标
    const res = (new Array(len)).fill(0) // 结果数组 用0填充


    for (let i = 0; i < len; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) { //如果栈里有元素，且遍历的当前温度大于栈顶元素温度
            const top = stack.pop()  //入栈，返回栈下标
            res[top] = i - top  // 记录结果
        }

        stack.push(i) //出栈

    }
    return res
};
let res = dailyTemperatures(temperatures)
console.log(res);
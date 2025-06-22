function foo(str) {
    eval(str) // 把字符串当成js代码执行
    console.log(a, b)
}
var b = 2
foo('var a = 10')
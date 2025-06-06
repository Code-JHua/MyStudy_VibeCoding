// 5
// 只要求解的个数，不需要具体的解

// 递归
// var climbStairs = function (n) {
//     const f = []

//     if (n === 1) {
//         return 1
//     }
//     if (n === 2) {
//         return 2
//     }
//     if (f[n] == undefined) {
//         f[n] = climbStairs(n - 1) + climbStairs(n - 2)
//     }
//     return f[n]
// };

// console.log(climbStairs(5));


// f(n) = f(n - 1) + f(n - 2)  // 动态推导方程式
var climbStairs = function (n) {
    const f = []
    f[1] = 1
    f[2] = 2
    for (let i = 3; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2]
    }
    return f[n]
};

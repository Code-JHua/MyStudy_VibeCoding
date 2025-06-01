// 数组 有序 线性   索引
const arr = [3, 5, 7, 2, 1, { a: -2 }, { b: -1}];
arr.sort(function (a, b) {
    return b - a;
}); // 排序


console.log(arr);
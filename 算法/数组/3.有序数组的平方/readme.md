# 977.有序数组的平方
题目链接：https://leetcode.cn/problems/squares-of-a-sorted-array/

## 方法一: 暴力
- 先平方再排序,这里不演示

## 方法二: 双指针(头尾指针)
定义一个长度相同的数组，平方后最大的放后面（从后往前）
定义头 i = 0
定义尾 j = nums.length -1

var sortedSquares = function(nums) {
    const n = nums.length;
    const res = new Array(n);
    let i = 0, j = n - 1, k = n - 1; 

    while(i <= j) {
        const left = nums[i]*nums[i]
        const right = nums[j]*nums[j]
        if (left > right) {
            res[k--] = left
            i++
        }else {
            res[k--] = right
            j--
        }
    }
    return res
};
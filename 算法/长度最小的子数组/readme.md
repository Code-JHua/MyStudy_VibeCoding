# 209.长度最小的子数组

## 题目链接
<a href="https://leetcode.cn/problems/minimum-size-subarray-sum/" target="_blank" rel="noopener noreferrer">力扣题目链接<span><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg> <span class="sr-only">(opens new window)</span></span></a>


## 题目
给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

示例：

输入：s = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
提示：

1 <= target <= 10^9
1 <= nums.length <= 10^5
1 <= nums[i] <= 10^5

## 思路(滑动窗口)
- 所谓滑动窗口，就是不断的调节子序列的起始位置和终止位置，从而得出我们要想的结果。

- 外层 while 循环移动右边界 end ，逐步扩展窗口
- 每次扩展后，内层 while 循环检查当前和是否≥target：
    - 如果是，则更新最小长度 ans    
    - 然后移动左边界 start 缩小窗口，直到和 < target


- 算法中使用 Math.min(ans, end - start + 1) 来更新最小长度
- 如果初始 ans=0 ，任何比较结果都会是0（因为0是最小值）
  Infinity 是一个比任何数字都大的特殊值


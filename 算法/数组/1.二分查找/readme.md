# 二分法
-  适合数组有序且无重复元素使用

## 704. 二分查找
1. while中  begin <= end    -->    左闭右闭 
            begin < end     -->    左闭右开
									
2. 如果右边是 闭   -->  end = middle-1
		    开   -->  end = middle（已经不包含有边界）

- 左闭右闭区间 [left, right]
var search = function(nums, target) {
    // right是数组最后一个数的下标，num[right]在查找范围内，是左闭右闭区间
    let mid, left = 0, right = nums.length - 1;
    // 当left=right时，由于nums[right]在查找范围内，所以要包括此情况
    while (left <= right) {
        // 位运算 + 防止大数溢出
        mid = left + ((right - left) >> 1);
        // 如果中间数大于目标值，要把中间数排除查找范围，所以右边界更新为mid-1；如果右边界更新为mid，那中间数还在下次查找范围内
        if (nums[mid] > target) {
            right = mid - 1;  // 去左面闭区间寻找
        } else if (nums[mid] < target) {
            left = mid + 1;   // 去右面闭区间寻找
        } else {
            return mid;
        }
    }
    return -1;
};

##  35. 搜索插入位置
  同 704 方法一样

## 34. 在排序数组中查找元素的第一个和最后一个位置
将左右两个边界分开得到，用两个函数 二分法

leftBorder和rightBorder初始化为 -2

leftBorder 是最后一个 不等于 target 的元素的索引。
rightBorder 是第一个 大于 target 的元素的索引。

情况一：target 在数组范围的右边或者左边，例如数组{3, 4, 5}，target为2或者数组{3, 4, 5},target为6，此时应该返回{-1, -1}
情况二：target 在数组范围中，且数组中不存在target，例如数组{3,6,7},target为5，此时应该返回{-1, -1}
情况三：target 在数组范围中，且数组中存在target，例如数组{3,6,7},target为6，此时应该返回{1, 1}

## 69. x 的平方根 
    二分查找  左闭右闭

## 367. 有效的完全平方数
    二分查找  左闭右闭
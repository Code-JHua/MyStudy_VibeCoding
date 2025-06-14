var searchInsert = function (nums, target) {
    let len = nums.length
    let left = 0
    let right = len - 1
    while (left <= right) {
        let middle = left + Math.floor((right - left) >> 1);
        if (target < nums[middle]) {
            right = middle - 1
        } else if (target > nums[middle]) {
            left = middle + 1
        } else {
            return middle
        }
    }
    return middle + 1
};
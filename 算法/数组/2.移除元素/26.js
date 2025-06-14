var removeDuplicates = function (nums) {
    let start, end;
    start = 1
    end = 1
    let len = nums.length

    if (len == 0) {
        return 0
    }
    while (end < len) {
        if (nums[end] !== nums[end - 1]) { // 先赋值，慢指针再加一
            nums[start] = nums[end]
            start++
        }
        end++
    }
    return start
};
function minSubArrayLen(target, nums) {
    let len = nums.length;
    let minLen = Infinity; // 初始化为无穷大
    let sum = 0;           // 当前窗口的和
    let left = 0;         // 左边界
    let right = 0;        // 有边界

    while (right < len) {
        sum += nums[right];  // 扩展右边界

        // 当窗口内的和大于等于 target 时，尝试收缩左边界
        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1); // 更新最小长度
            sum -= nums[left]; // 收缩左边界
            left++;
        }
        right++
    }

    // 如果没有找到符合条件的子数组，返回0
    return minLen === Infinity ? 0 : minLen;
}
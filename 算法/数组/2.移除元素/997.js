var sortedSquares = function (nums) {
    const n = nums.length;
    const res = new Array(n);
    let i = 0, j = n - 1, k = n - 1;

    while (i <= j) {
        const left = nums[i] * nums[i]
        const right = nums[j] * nums[j]
        if (left > right) {
            res[k--] = left
            i++
        } else {
            res[k--] = right
            j--
        }
    }
    return res
};
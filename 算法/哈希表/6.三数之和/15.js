var threeSum = function (nums) {
    let ans = []
    if (nums.length < 3) return ans
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue

        let L = i + 1
        let R = nums.length - 1
        if (nums[i] > 0) return ans

        while (L < R) {
            let sum = nums[i] + nums[L] + nums[R]
            if (sum == 0) {
                ans.push([nums[i], nums[L], nums[R]])
                while (nums[L] == nums[L + 1]) L++
                while (nums[R] == nums[R - 1]) R--
                L++
                R--
            }
            else if (sum < 0) L++
            else if (sum > 0) R--
        }
    }
    return ans
};
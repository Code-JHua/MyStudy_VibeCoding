nums = [2, 7, 11, 15]
target = 9

var twoSum = function (nums, target) {   // 暴力解法
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                console.log([i, j]);
            }
        }
    }
};

twoSum(nums, target);
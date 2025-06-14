var removeElement = function (nums, val) {
    let slowIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[slowIndex] = nums[i];
            slowIndex++;
        }
    }
    return slowIndex;
};
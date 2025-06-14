var searchRange = function (nums, target) {
    const getLeftBorder = (nums, target) => {
        let left = 0, right = nums.length - 1
        let leftBorder = -2
        while (left <= right) {
            const middle = left + ((right - left) >> 1);
            if (target <= nums[middle]) {
                right = middle - 1
                leftBorder = right
            } else {
                left = middle + 1
            }
        }
        return leftBorder
    }

    const getRightBorder = (nums, target) => {
        let left = 0, right = nums.length - 1
        let rightBorder = -2
        while (left <= right) {
            const middle = left + ((right - left) >> 1);
            if (target >= nums[middle]) {
                left = middle + 1
                rightBorder = left
            } else {
                right = middle - 1
            }
        }
        return rightBorder
    }

    let leftBorder = getLeftBorder(nums, target);
    let rightBorder = getRightBorder(nums, target);

    if (leftBorder === -2 || rightBorder === -2) return [-1, -1]
    if (rightBorder - leftBorder > 1) return [leftBorder + 1, rightBorder - 1]
    return [-1, -1]


};
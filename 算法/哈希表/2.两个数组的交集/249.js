var intersection = function (nums1, nums2) {
    let set = new Set(nums1)
    let resSet = new Set()

    for (let i = 0; i < nums2.length; i++) {
        if (set.has(nums2[i])) {
            resSet.add(nums2[i])
        }
    }
    return [...resSet]
};
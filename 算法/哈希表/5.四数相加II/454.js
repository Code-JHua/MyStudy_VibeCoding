var fourSumCount = function (nums1, nums2, nums3, nums4) {
    let map = new Map()

    for (let x of nums1) {
        for (let y of nums2) {
            map.set(x + y, (map.get(x + y) ?? 0) + 1)
        }
    }

    let res = 0
    for (let x of nums3) {
        for (let y of nums4) {
            if (map.has(- x - y)) res += map.get(- x - y)
        }
    }
    return res
};
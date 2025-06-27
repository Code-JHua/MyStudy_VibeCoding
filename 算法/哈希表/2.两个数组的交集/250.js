var intersect = function (nums1, nums2) {
    let map = new Map()
    for (let x of nums1) {
        map.set(x, (map.get(x) ?? 0) + 1)
    }

    let res = []
    for (let y of nums2) {
        let i = map.get(y)
        if (i > 0) {
            res.push(y)
            map.set(y, (map.get(y) ?? 0) - 1)
        }
    }
    return res
}; 
var topKFrequent = function (nums, k) {
    let map = new Map()
    ans = []

    for (let x of nums) {
        map.set(x, (map.get(x) || 0) + 1)
    }

    let arr = []
    for (let x of map.keys()) {
        arr.push([x, map.get(x)])
    }

    arr.sort((a, b) => a[1] - b[1])

    for (let i = 0; i < k; i++) {
        ans.push(arr.pop()[0])
    }
    return ans
};   
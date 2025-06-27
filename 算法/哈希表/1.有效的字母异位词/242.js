var isAnagram = function (s, t) {
    let nums = new Array(26).fill(0)

    if (s.length !== t.length) return false

    for (let i = 0; i < s.length; ++i) {
        nums[s.codePointAt(i) - 'a'.codePointAt(0)]++
    }
    for (let j = 0; j < t.length; ++j) {
        nums[t.codePointAt(j) - 'a'.codePointAt(0)]--
        if (nums[t.codePointAt(j) - 'a'.codePointAt(0)] < 0) return false
    }

    return true
};
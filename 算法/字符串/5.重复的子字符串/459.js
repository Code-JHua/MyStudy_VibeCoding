var repeatedSubstringPattern = function (s) {
    let str = ''

    if (s.length == 1) return false
    for (let i = 0; i < s.length / 2; i++) {
        str += s[i]
        let repeatCount = Math.floor(s.length / str.length)

        if (str.repeat(repeatCount) == s) return true
    }
    return false
};
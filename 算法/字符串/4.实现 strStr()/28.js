var strStr = function (haystack, needle) {
    let h_index = 0
    let n_index = 0

    while (h_index < haystack.length && n_index < needle.length) {
        if (haystack[h_index + n_index] == needle[n_index]) {
            n_index++
        } else {
            h_index++
            n_index = 0
        }
    }
    return n_index == needle.length ? h_index : -1
}
var reverseStr = function (s, k) {
    let arr = s.split('')
    let len = s.length
    for (let i = 0; i < len; i += k * 2) {
        right = Math.min(i + k, len) - 1
        reverse(i, right, arr)
    }
    return arr.join('')
};

function reverse(left, right, arr) { //反转
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
 }
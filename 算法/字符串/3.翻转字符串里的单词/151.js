var reverseWords = function (s) {
    let arr = s.split('')
    removeSpace(arr)
    reverse(arr, 0, arr.length - 1)

    let start = 0
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == ' ' || i == arr.length) {
            reverse(arr, start, i - 1)
            start = i + 1
        }
    }
    return arr.join('')
};

var removeSpace = function (arr) {
    let slow = 0,
        fast = 0
    while (fast < arr.length) {
        if (arr[fast] == ' ' && (fast == 0 || arr[fast - 1] == ' ')) {
            fast++
        } else {
            arr[slow++] = arr[fast++]
        }
    }
    arr.length = arr[slow - 1] == ' ' ? slow - 1 : slow
}

var reverse = function (arr, left, right) {
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
}
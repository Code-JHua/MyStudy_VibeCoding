var canConstruct = function (ransomNote, magazine) {
    let arr = new Array(26).fill(0)
    if (ransomNote.length > magazine.length) return false

    for (let i = 0; i < magazine.length; i++) {
        arr[magazine.codePointAt(i) - 'a'.codePointAt(0)]++
    }
    for (let j = 0; j < ransomNote.length; j++) {
        arr[ransomNote.codePointAt(j) - 'a'.codePointAt(0)]--
        if (arr[ransomNote.codePointAt(j) - 'a'.codePointAt(0)] < 0) return false
    }
    return true
};
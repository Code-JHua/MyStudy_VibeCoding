var findAnagrams = function (s, p) {
    let ans = []
    let S = new Array(26).fill(0)
    let P = new Array(26).fill(0)

    for (let i = 0; i < p.length; i++) {
        P[p.charCodeAt(i) - 'a'.charCodeAt(0)]++
    }
    for (let i = 0; i < s.length; i++) {
        S[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
        let left = i - p.length + 1
        if (left < 0) {
            continue
        }

        if (_.isEqual(S, P)) {
            ans.push(left)
        }

        S[s.charCodeAt(left) - 'a'.charCodeAt(0)]--
    }
    return ans
};
var isHappy = function (n) {
    let set = new Set();
    while (n !== 1 && !set.has(n)) {
        set.add(n);
        n = getN(n);
    }
    return n == 1;
}

var getN = function (n) {
    let res = 0;
    let nums = n.toString().split('')
    for (let i of nums) {
        res = res + i * i;
    }
    return res;
}
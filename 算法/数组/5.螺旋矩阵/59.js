var generateMatrix = function (n) {
    let startX = 0
    let startY = 0
    let offset = 1
    let count = 1
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0));

    let loop = Math.floor(n / 2)
    while (loop--) {
        let i = startX, j = startY

        for (; j < n - offset; j++) {
            res[i][j] = count++
        }
        for (; i < n - offset; i++) {
            res[i][j] = count++
        }
        for (; j > startY; j--) {
            res[i][j] = count++
        }
        for (; i > startX; i--) {
            res[i][j] = count++
        }

        startX++
        startY++

        offset += 1
    }

    if (n % 2 == 1) {
        let mid = Math.floor(n / 2)
        res[mid][mid] = count
    }
    return res
};
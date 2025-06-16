var spiralOrder = function (matrix) {
    let res = []
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1

    while (top < bottom && left < right) {
        for (let i = left; i < right; i++) {
            res.push(matrix[top][i])
        }
        for (let i = top; i < bottom; i++) {
            res.push(matrix[i][right])
        }
        for (let i = right; right > left; i--) {
            res.push(matrix[bottom][i])
        }
        for (let i = bottom; bottom > top; i--) {
            res.push(matrix[i][left])
        }
        left++
        top++
        bottom--
        right--
    }

    if (left === right) {
        for (let i = top; i <= bottom; i++) res.push(matrix[i][right])
    } else if (top === bottom) {
        for (let i = left; i <= right; i++) res.push(matrix[top][i])
    }
    return res
};
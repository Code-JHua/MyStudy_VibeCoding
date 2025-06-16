# 思路
## 方法一(54.js)
定义开始坐标：(startX, startY)
定义每圈需要遍历减去的次数 offset
定义计数 count
定义二维数组 res

loop: 需要转的圈数

最后，判断 如果n为奇数， 将数组中间的值补上  res[mid][mid] = count

## 方法二(59.js)
var spiralOrder = function (matrix) {
    //定义四个角
    // top --> bottom 是从上往下遍历
    // left --> right 是从左往右遍历
    if (matrix.length === 0) return []
    const res = []
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1
    while (top < bottom && left < right) {
        for (let i = left; i < right; i++) res.push(matrix[top][i])     //当前top行的每一列
        for (let i = top; i < bottom; i++) res.push(matrix[i][right])   //当前right列的每一行
        for (let i = right; i > left; i--) res.push(matrix[bottom][i])  //当前bottom行的每一列
        for (let i = bottom; i > top; i--) res.push(matrix[i][left])    //当前left列的每一行
        right--
        top++
        bottom--
        left++  // 四个边界同时收缩，进入内层
    }
    if (top === bottom) // 剩下一行，从左到右依次添加
        for (let i = left; i <= right; i++) res.push(matrix[top][i])
    else if (left === right) // 剩下一列，从上到下依次添加
        for (let i = top; i <= bottom; i++) res.push(matrix[i][left])
    return res
};


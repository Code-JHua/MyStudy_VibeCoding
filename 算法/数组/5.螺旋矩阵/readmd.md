# 思路
定义开始坐标：（startX, startY)
定义每圈需要遍历减去的次数 offset
定义计数 count
定义二维数组 res

loop: 需要转的圈数

最后，判断 如果n为奇数， 将数组中间的值补上  res[mid][mid] = count
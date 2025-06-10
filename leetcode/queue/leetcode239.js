const nums = [1, 3, -1, -3, 5, 3, 6, 7]
const k = 3
// var maxSlidingWindow = function (nums, k) {
//     let left = 0, right = k - 1
//     let queue = []

//     while (right < nums.length) {
//         let max = getMax(nums, left, right)
//         queue.push(max)
//         left++
//         right++
//     }
//     return queue
// };
// let res = maxSlidingWindow(nums, k)
// console.log(res);

// function getMax(nums, left, right) {
//     let max = -Infinity
//     for (let i = left; i <= right; i++) {
//         if (nums[i] > max) {
//             max = nums[i]
//         }
//     }
//     return max
// }

var maxSlidingWindow = function (nums, k) {
    let res = []
    const deque = []  // 单调递减队列

    for (let i = 0; i < nums.length; i++){
        // 如果队列不为空，且队列尾部的值小于当前值，则将队列尾部的值弹出
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop()
        }
        // 将当前值的下标加入队列
        deque.push(i)

        // 如果当前窗口的大小等于k，则将队列头部的值加入结果数组
        if (i >= k - 1) {
            // 如果队列头部的值小于当前值，则将队列头部的值弹出
            while (deque.length && deque[0] <= i - k) {
                deque.shift()
            }
            // 将队列头部的值加入结果数组
            res.push(nums[deque[0]])
        }
    }
    return res
}
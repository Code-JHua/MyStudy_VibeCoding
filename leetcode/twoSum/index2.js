nums = [2, 7, 11, 15]
target = 9

// var twoSum = function (nums, target) {  //调用数组 indexOf 方法
//     for (let i = 0; i < nums.length; i++) {
//         let item = target - nums[i];
//         // 去数组中找有没有 item， 有就放回索引
//         let index = nums.indexOf(item);
//         if (index !== -1 && index !== i) {
//             return [i, index]
//         }
//     }
// };

var twoSum = function (nums, target) {  // 用空间换时间
    let diffs = {}

    for (let i = 0; i < nums.length; i++) {
        let item = target - nums[i];
        // 去 diffs 中找有没有 item
        if (diffs[item] !== undefined) {
            return [diffs[item], i]
        }
        diffs[nums[i]] = i
    }
};

console.log(twoSum(nums, target));
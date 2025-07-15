// 376. 摆动序列

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  // 如果数组为空或只有一个元素，直接返回其长度
  if (nums.length <= 1) return nums.length;

  let res = 1; // 结果至少包含第一个元素
  let preDiff = 0; // 前一个差值，初始设为0

  // 遍历数组，从 i=0 到倒数第二个元素
  for (let i = 0; i < nums.length - 1; i++) {
    let currentDiff = nums[i + 1] - nums[i]; // 当前差值

    // 如果发生了“摆动”：即前一个差值非正、当前差值为正 或 前一个差值非负、当前差值为负
    if ((preDiff <= 0 && currentDiff > 0) || (preDiff >= 0 && currentDiff < 0)) {
      res++; // 摆动次数加一
      preDiff = currentDiff; // 更新前一个差值
    }
  }

  return res;
};
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function traversal(left, right) {
    if (left >= right) return null
    let mid = Math.floor((left + right) / 2)
    return new TreeNode(nums[mid], traversal(left, mid), traversal(mid + 1, right))
  }
  return traversal(0, nums.length)
};
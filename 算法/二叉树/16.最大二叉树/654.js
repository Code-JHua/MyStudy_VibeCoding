/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (nums.length == 0) return null
  let max = -Infinity
  for (let x of nums) {
    if (x > max) {
      max = x
    }
  }
  let index = nums.indexOf(max)
  let node = new TreeNode(max)
  node.left = constructMaximumBinaryTree(nums.slice(0, index))
  node.right = constructMaximumBinaryTree(nums.slice(index + 1))
  return node
};
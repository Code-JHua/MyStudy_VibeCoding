/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  function traversal(node, curSum) {
    if (!node) return false
    curSum += node.val
    if (!node.left && !node.right) return targetSum == curSum
    return traversal(node.left, curSum) || traversal(node.right, curSum)
  }
  return traversal(root, 0)
};
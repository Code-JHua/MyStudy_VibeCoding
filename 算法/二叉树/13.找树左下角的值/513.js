/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  let res = 0
  let maxDepth = 0
  function traversal(node, curDepth) {
    if (!node) return

    if (curDepth > maxDepth) {
      res = node.val
      maxDepth = curDepth
    }
    traversal(node.left, curDepth + 1)
    traversal(node.right, curDepth + 1)
  }
  traversal(root, 1)
  return res
};
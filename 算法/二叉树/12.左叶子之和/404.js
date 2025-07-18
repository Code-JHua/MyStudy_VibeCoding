/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let sum = 0
  function Traversal(node) {
    if (!node) return
    if (node.left != null && node.left.left == null && node.left.right == null) {
      sum += node.left.val
    }
    Traversal(node.left)
    Traversal(node.right)
  }
  Traversal(root)
  return sum
};
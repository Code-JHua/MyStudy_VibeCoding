/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let sum = 0
  function traversal(node) {
    if (!node) return null

    traversal(node.right)
    node.val += sum
    sum = node.val
    traversal(node.left)
    return node
  }
  return traversal(root)
};
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {

  function traversal(node, low, high) {
    if (!node) return null
    if (node.val < low) {
      let right = traversal(node.right, low, high)
      return right
    }
    if (node.val > high) {
      let left = traversal(node.left, low, high)
      return left
    }

    node.left = traversal(node.left, low, high)
    node.right = traversal(node.right, low, high)
    return node
  }
  return traversal(root, low, high)

};
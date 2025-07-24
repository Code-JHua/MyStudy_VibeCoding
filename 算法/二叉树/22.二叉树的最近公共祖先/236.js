/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {

  function traversal(node, p, q) {
    if (node == null) return null
    if (node == p || node == q) return node

    let left = traversal(node.left, p, q)
    let right = traversal(node.right, p, q)

    if (left != null && right != null) return node
    else if (left != null && right == null) return left
    else if (left == null && right != null) return right
    else return null
  }
  return traversal(root, p, q)
};
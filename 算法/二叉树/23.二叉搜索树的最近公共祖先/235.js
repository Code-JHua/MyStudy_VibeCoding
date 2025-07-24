/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {

  function traversal(node, p, q) {
    if (!node) return null
    if (node.val > p.val && node.val > q.val) {
      return traversal(node.left, p, q)
    } else if (node.val < p.val && node.val < q.val) {
      return traversal(node.right, p, q)
    } else return node
  }
  return traversal(root, p, q)
};
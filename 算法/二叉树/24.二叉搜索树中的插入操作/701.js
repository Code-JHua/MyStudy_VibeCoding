/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {

  function insert(node, val) {
    if (!node) {
      let end = new TreeNode(val)
      return end
    }

    if (val < node.val) {
      node.left = insert(node.left, val)
    } else if (val > node.val) {
      node.right = insert(node.right, val)
    }
    return node
  }

  return insert(root, val)
};
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  function ValidBST(node, min, max) {
    if (node == null) return true
    let val = node.val
    if (val >= max || val <= min) return false

    return ValidBST(node.left, min, val) && ValidBST(node.right, val, max)
  }

  return ValidBST(root, -Infinity, Infinity)
};
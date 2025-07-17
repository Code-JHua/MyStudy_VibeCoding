/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  function getHeight(node) {
    if (!node) return 0
    let leftHeight = getHeight(node.left)
    if (leftHeight == -1) return -1

    let rightHeight = getHeight(node.right)
    if (rightHeight == -1) return -1

    if (Math.abs(rightHeight - leftHeight) > 1) return -1
    else return Math.max(leftHeight, rightHeight) + 1
  }
  return getHeight(root) !== -1
};
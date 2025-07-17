/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  let num = 0
  function traversal(root) {
    if (!root) return
    num++
    traversal(root.left)
    traversal(root.right)
  }
  traversal(root)
  return num
};
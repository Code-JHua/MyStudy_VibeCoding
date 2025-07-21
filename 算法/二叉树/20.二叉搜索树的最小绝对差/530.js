/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let res = Infinity
  let pre = -Infinity
  function getMin(node) {
    if (!node) return 0

    getMin(node.left)
    res = Math.min(res, node.val - pre)
    pre = node.val
    getMin(node.right)
  }
  getMin(root)
  return res
};
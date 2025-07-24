/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  let maxCount = 0
  let count = 0
  let pre = null
  let res = []

  function traversal(node) {
    if (!node) return

    traversal(node.left)
    let cur = node.val
    if (cur == pre) {
      count++
    } else {
      count = 1
    }
    pre = cur

    if (count == maxCount) res.push(pre)
    else if (count > maxCount) {
      maxCount = count
      res = [pre]
    }

    traversal(node.right)
  }
  traversal(root)
  return res
};
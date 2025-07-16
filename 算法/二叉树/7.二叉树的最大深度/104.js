var maxDepth = function (root) {
  if (!root) return 0
  let leftDepth = maxDepth(root.left)
  let rightDepth = maxDepth(root.right)
  let max = 1 + Math.max(leftDepth, rightDepth)
  return max
};
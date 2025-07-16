var minDepth = function (root) {
  if (!root) return 0
  let leftDepth = minDepth(root.left)
  let rightDepth = minDepth(root.right)
  if (root.left == null && root.right != null) return 1 + rightDepth
  if (root.left != null && root.right == null) return 1 + leftDepth
  return 1 + Math.min(leftDepth, l = rightDepth)
};
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (root1 == null) return root2
  if (root2 == null) return root1

  let Tree = new TreeNode()
  Tree.val = root1.val + root2.val
  Tree.left = mergeTrees(root1.left, root2.left)
  Tree.right = mergeTrees(root1.right, root2.right)

  return Tree
};
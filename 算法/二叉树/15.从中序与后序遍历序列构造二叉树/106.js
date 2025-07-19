/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length == 0) return null
  let postEnd = postorder.pop()
  let index = inorder.indexOf(postEnd)
  let node = new TreeNode(postEnd)
  node.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
  node.right = buildTree(inorder.slice(index + 1), postorder.slice(index))
  return node
};
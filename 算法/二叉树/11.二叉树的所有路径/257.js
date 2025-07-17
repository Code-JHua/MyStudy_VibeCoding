/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  res = []
  function Traversal(node, path) {
    if (!node) return
    path += node.val
    if (node.left == null && node.right == null) {
      res.push(path)
      return
    }
    path += '->'
    Traversal(node.left, path)
    Traversal(node.right, path)
  }
  Traversal(root, '')
  return res
};
// 968.监控二叉树

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 看题解
function dfs(node) {
  if (node === null) {
    return [Infinity, 0, 0];
  }
  const [lChoose, lByFa, lByChildren] = dfs(node.left);
  const [rChoose, rByFa, rByChildren] = dfs(node.right);
  const choose = Math.min(lChoose, lByFa) + Math.min(rChoose, rByFa) + 1;
  const byFa = Math.min(lChoose, lByChildren) + Math.min(rChoose, rByChildren);
  const byChildren = Math.min(lChoose + rByChildren, lByChildren + rChoose, lChoose + rChoose);
  return [choose, byFa, byChildren];
}

var minCameraCover = function (root) {
  const [choose, , byChildren] = dfs(root);
  return Math.min(choose, byChildren);
};
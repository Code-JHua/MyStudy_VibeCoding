/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  // 基本情况：空节点
  if (!root) return null;

  // 查找目标节点
  if (key < root.val) {
    // 目标在左子树
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    // 目标在右子树
    root.right = deleteNode(root.right, key);
  } else {
    // 找到了目标节点，开始删除操作

    // 情况 1：是叶子节点，直接删除
    if (!root.left && !root.right) {
      return null;
    }

    // 情况 2：有左子树 → 用左子树的最大节点（前驱）替换当前节点
    if (root.left) {
      let predecessor = findMax(root.left); // 找到左子树最大节点
      root.val = predecessor.val;           // 替换值
      root.left = deleteNode(root.left, predecessor.val); // 删除原前驱节点
    }
    // 情况 3：无左子树但有右子树 → 用右子树的最小节点（后继）替换当前节点
    else {
      let successor = findMin(root.right);  // 找到右子树最小节点
      root.val = successor.val;             // 替换值
      root.right = deleteNode(root.right, successor.val); // 删除原后继节点
    }
  }

  return root;
};

// 辅助函数：查找以 node 为根的子树中的最大节点（即最右边的节点）
function findMax(node) {
  while (node.right) {
    node = node.right;
  }
  return node;
}

// 辅助函数：查找以 node 为根的子树中的最小节点（即最左边的节点）
function findMin(node) {
  while (node.left) {
    node = node.left;
  }
  return node;
}
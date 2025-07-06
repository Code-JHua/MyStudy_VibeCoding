var isSymmetric = function (root) {
    var compareNode = function (left, right) {
        // 如果左右节点都为 null，说明对称
        if (left === null && right === null) return true;
        // 如果其中一个为 null，另一个不为 null，不对称
        if (left === null || right === null) return false;
        // 如果值不相等，直接返回 false
        if (left.val !== right.val) return false;

        // 递归检查外侧和内侧是否对称
        let outside = compareNode(left.left, right.right); // 外侧：左子树的左 vs 右子树的右
        let inside = compareNode(left.right, right.left);  // 内侧：左子树的右 vs 右子树的左

        // 必须外侧和内侧都对称，整棵树才对称
        return outside && inside;
    }

    // 从根节点的左右子节点开始递归
    return compareNode(root.left, root.right);
};
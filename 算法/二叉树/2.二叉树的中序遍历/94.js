// 递归
var inorderTraversal = function (root) {
    let res = []

    var traversal = function (node) {
        if (!node) return

        traversal(node.left)
        res.push(node.val)
        traversal(node.right)
    }

    traversal(root)
    return res
};

// 迭代
var inorderTraversal = function (root) {
    let res = []
    let stack = []
    if (root) stack.push(root)
    while (stack.length) {
        let cur = stack.pop()
        if (!cur) {
            res.push(stack.pop().val)
            continue
        }
        if (cur.right) stack.push(cur.right)
        stack.push(cur)
        stack.push(null)
        if (cur.left) stack.push(cur.left)
    }

    return res
};

// 统一迭代
var inorderTraversal = function (root) {
    let res = []
    let stack = []
    let cur = root

    if (cur) stack.push(cur)

    while (stack.length) {
        let node = stack.pop()
        if (!node) {
            res.push(stack.pop().val)
            continue
        }
        if (node.right) stack.push(node.right)
        stack.push(node)
        stack.push(null)
        if (node.left) stack.push(node.left)
    }
    return res
};
// 递归
var postorderTraversal = function (root) {
    let res = []
    var traversal = function (node) {
        if (!node) return

        traversal(node.left)
        traversal(node.right)
        res.push(node.val)
    }
    traversal(root)
    return res
};

// 迭代
var postorderTraversal = function (root) {
    let res = []
    let stack = []
    if (root) stack.push(root)
    while (stack.length) {
        let cur = stack.pop()
        if (!cur) {
            res.push(stack.pop().val)
            continue
        }
        stack.push(cur)
        stack.push(null)
        if (cur.right) stack.push(cur.right)
        if (cur.left) stack.push(cur.left)
    }
    return res
}

// 统一迭代
var postorderTraversal = function (root) {
    let res = []
    let stack = []
    let cur = root

    if (cur) stack.push(cur)

    while (stack.length) {
        let node = stack.pop()
        if (node) {
            stack.push(node)
            stack.push(null)
            if (node.right) stack.push(node.right)
            if (node.left) stack.push(node.left)
        } else {
            res.push(stack.pop().val)
        }
    }
    return res
}

// 递归
var preorderTraversal = function (root) {
    let res = []
    var traverse = function (node) {
        if (!node) return

        res.push(node.val)
        traverse(node.left)
        traverse(node.right)
    }
    traverse(root)
    return res
};


// 迭代(栈)
var preorderTraversal = function (root) {
    res = []
    stack = []
    if (root) {
        stack.push(root)
    }
    while (stack.length) {
        let pop = stack.pop()
        res.push(pop.val)
        if (pop.right) stack.push(pop.right)
        if (pop.left) stack.push(pop.left)
    }

    return res
};

// 统一迭代
var preorderTraversal = function (root) {
    let res = []
    let stack = []
    let cur = root

    if (cur) {
        stack.push(cur)
    }
    while (stack.length) {
        let node = stack.pop()
        if (node) {
            if (node.right) stack.push(node.right)
            if (node.left) stack.push(node.left)
            stack.push(node)
            stack.push(null)
        } else {
            res.push(stack.pop().val)
        }
    }
    return res
};

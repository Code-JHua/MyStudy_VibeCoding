var removeNthFromEnd = function (head, n) { // 滑动窗口
    let pre = new ListNode(0, head)
    let left = pre
    let right = pre

    while (n--) {
        right = right.next
    }

    while (right.next) {
        right = right.next
        left = left.next
    }

    left.next = left.next.next

    return pre.next
};
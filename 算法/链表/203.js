var removeElements = function (head, val) {
    let hair = new ListNode(0, head)
    let current = hair
    while (current.next) {
        if (current.next.val == val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
    return hair.next
};
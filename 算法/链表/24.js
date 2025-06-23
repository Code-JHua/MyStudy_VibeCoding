var swapPairs = function (head) {

    let pre = new ListNode(0, head)
    cur = pre

    while (head && head.next) {
        let temp = head.next
        head.next = temp.next
        temp.next = head
        cur.next = temp

        cur = head
        head = head.next
    }
    return pre.next
};
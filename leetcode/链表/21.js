var mergeTwoLists = function (list1, list2) {
    let head = new ListNode()  // 指向头节点{val: 0, next: null}
    let current = head  
    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1
            list1 = list1.next
        } else if (list1.val >= list2.val) {
            current.next = list2
            list2 = list2.next
        }
        current = current.next  // 移动指针
    }

    if (list1) {
        current.next = list1
    }
    if (list2) {
        current.next = list2
    }
    return head.next  // 头节点的下一个节点
};

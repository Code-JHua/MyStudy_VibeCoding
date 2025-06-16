// const list = { // 链表的一个节点
//     val: 'a',
//     next: {
//         val: 'b',
//         next: null
//     }
// }
// list.next.val

function ListNode(val, next) {
    this.val = val
    this.next =next  ? next : null
}
const head = new ListNode('a')

let node = head;
for(let i = 0; i < 10; i++) {
    node.next = new ListNode(i)
    node = node.next
}
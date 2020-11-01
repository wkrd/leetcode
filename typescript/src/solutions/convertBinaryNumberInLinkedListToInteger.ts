// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function getDecimalValue(head: ListNode | null): number {
  let v = 0

  while (head) {
    v = v << 1
    if (head.val === 1) {
      v += 1
    }
    // console.log(head.val, v.toString(2))

    head = head.next
  }

  return v
}

console.log(getDecimalValue(new ListNode(1, new ListNode(0, new ListNode(1)))))

export {}

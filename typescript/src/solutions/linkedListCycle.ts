/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null) return null

  const getIntersect = () => {
    let slow = head!
    let fast: ListNode | null = head!

    while (fast && fast.next) {
      slow = slow.next!
      fast = fast.next.next

      if (fast === slow) {
        return slow
      }
    }
    return null
  }

  const intersect = getIntersect()

  if (!intersect) return null

  let p1 = head
  let p2 = intersect

  while (true) {
    console.log(p1.val, p2.val)

    p1 = p1.next!
    p2 = p2.next!

    if (p1 === p2) return p1
  }
}

const n1 = new ListNode(1)
const n2 = new ListNode(2)
const n3 = new ListNode(3)
n1.next = n2
n2.next = n3
n3.next = n2

console.log(detectCycle(n1))

export {}

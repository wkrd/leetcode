// Definition for a Node.
class N {
  constructor(public val: number, public next: N | null) {}
}

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
function insert(head: N | null, insertVal: number) {
  if (!head) {
    const n = new N(insertVal, null)
    n.next = n
    return n
  }

  let node = head.next!
  while (node.next) {
    if (insertVal > node.val && insertVal <= node.next.val) {
      break
    }
    if (node.val > node.next.val) {
      if (insertVal >= node.val) break
      if (insertVal <= node.next.val) break
    }
    if (node === head) break

    node = node.next!
  }
  const n = new N(insertVal, node.next)
  node.next = n

  return head
}

{
  const head = new N(2, new N(4, null))
  head.next!.next = head

  let node = head
  do {
    console.log(node.val)
    node = node.next!
  } while (node !== head)

  insert(head, 1)
  // insert(head.next, 1)
  console.log('after')
  node = head

  do {
    console.log(node.val)
    node = node.next!
  } while (node !== head)
}

export {}

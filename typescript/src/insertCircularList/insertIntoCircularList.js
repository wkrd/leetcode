/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
const insert = function (head, insertVal) {
  if (!head) {
    const n = new N(insertVal, null)
    n.next = n
    return n
  }

  let node = head.next
  while (node.next) {
    if (insertVal > node.val && insertVal <= node.next.val) {
      break
    }
    if (node.val > node.next.val) {
      if (insertVal >= node.val) break
      if (insertVal <= node.next.val) break
    }
    if (node === head) break

    node = node.next // 2  4  6  (5)
  }
  const n = new N(insertVal, node.next)
  node.next = n

  return head
}

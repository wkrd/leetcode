/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function isEvenOddTree(root: TreeNode | null): boolean {
  if (root === null) return false

  // bfs
  const q = [root]
  let level = 0

  while (q.length) {
    const levelSize = q.length
    let prevValue: number | null = null

    for (let i = 0; i < levelSize; i++) {
      const node = q.shift()!

      if (level % 2 === node.val % 2) {
        return false
      }

      if (prevValue === null) {
      } else if (level % 2 === 0) {
        if (prevValue >= node.val) return false
      } else {
        if (prevValue <= node.val) return false
      }

      node.left !== null && q.push(node.left)
      node.right !== null && q.push(node.right)

      prevValue = node.val
    }

    level++
  }

  return true
}

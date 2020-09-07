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

// in a subtree, to get predecessor, go left, and then all the way right
const predecessor = (root: TreeNode): TreeNode => {
  let node = root.left!
  while (node && node.right) node = node.right
  return node
}

const successor = (root: TreeNode): TreeNode => {
  let node = root.right!
  while (node && node.left) node = node.left
  return node
}

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return null

  if (root.val < key) {
    root.right = deleteNode(root.right, key)
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key)
  } else {
    if (!root.left && !root.right) {
      return null
    }
    if (root.left) {
      root.val = predecessor(root).val
      root.left = deleteNode(root.left, root.val)
    } else {
      root.val = successor(root).val
      root.right = deleteNode(root.right, root.val)
    }
  }
  return root
}

export default null

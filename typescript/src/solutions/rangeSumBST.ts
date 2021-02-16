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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (!root) return 0

  let sum = 0
  const q = [root]
  while (q.length) {
    const node = q.pop()!
    const v = node.val
    if (v >= low && v <= high) sum += v

    if (v < high && node.right) {
      q.push(node.right)
    }
    if (v > low && node.left) {
      q.push(node.left)
    }
  }

  return sum
}

const root = new TreeNode(5, new TreeNode(2, new TreeNode(1), new TreeNode(3)))

console.log('5=' + rangeSumBST(root, 2, 3))

export {}

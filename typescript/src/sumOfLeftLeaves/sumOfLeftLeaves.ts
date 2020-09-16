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

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) return 0

  const s: TreeNode[] = []
  s.push(root)
  let sum = 0
  while (s.length) {
    const { left, right } = s.pop()!

    if (left) {
      if (!left.left && !left.right) {
        sum += left.val
      } else {
        s.push(left)
      }
    }
    if (right) s.push(right)
  }
  return sum
}

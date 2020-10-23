// class TreeNode {
//   val: number
//   left: TreeNode | null
//   right: TreeNode | null
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val
//     this.left = left === undefined ? null : left
//     this.right = right === undefined ? null : right
//   }
// }

function minDepth(root: TreeNode | null): number {
  if (!root) return 0

  let depth = 1
  let q = [root]
  while (q.length) {
    let depthNodeCount = q.length

    for (let i = 0; i < depthNodeCount; i++) {
      const node = q.shift()!

      node.left && q.push(node.left)
      node.right && q.push(node.right)

      if (!node.left && !node.right) return depth
    }
    depth++
  }
  throw new Error('fallthrough')
}

console.log(minDepth(new TreeNode(2, new TreeNode(3))))

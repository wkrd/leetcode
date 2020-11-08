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

function findTilt(root: TreeNode | null): number {
  if (!root) return 0
  let sumOfAllNodeTilts = 0

  const dfs = (r: TreeNode | null): number => {
    if (!r) return 0

    const left = dfs(r.left)
    const right = dfs(r.right)

    const tilt = Math.abs(left - right)
    sumOfAllNodeTilts += tilt
    const sumOfSubTree = left + right + r.val

    //console.log(`sumOfSubTree for ${r.val}=` + sumOfSubTree + ' , tilt: ' + tilt)
    return sumOfSubTree
  }

  dfs(root)

  return sumOfAllNodeTilts
}

const root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(3), new TreeNode(5)),
  new TreeNode(9, null, new TreeNode(7))
)

console.log(findTilt(root))

export {}

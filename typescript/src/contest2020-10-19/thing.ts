function maxProductPath(grid: number[][]): number {
  const rows = grid.length
  const cols = grid[0].length

  type MinMax = [number, number] // less readable, but faster than object
  const dp: MinMax[][] = [[[grid[0][0], grid[0][0]]]]

  // for (let r = 1; r < rows; r++) {
  //   dp[r] = []
  //   const v = grid[r][0]
  //   const p = dp[r - 1][0][0] * v
  //   dp[r][0] = [p, p]
  // }

  // for (let c = 1; c < rows; c++) {
  //   const v = grid[0][c]
  //   const p = dp[0][c - 1][0] * v
  //   dp[0][c] = [p, p]
  // }

  // solve
  for (let r = 0; r < rows; r++) {
    dp[r] = []

    for (let c = 0; c < cols; c++) {
      const v = grid[r][c]
      const left = c > 0 ? dp[r][c - 1] : null
      const above = r > 0 ? dp[r - 1][c] : null

      const possibleProducts = []
      if (left) {
        const [min, max] = left
        possibleProducts.push(min * v)
        possibleProducts.push(max * v)
      }
      if (above) {
        const [min, max] = above
        possibleProducts.push(min * v)
        possibleProducts.push(max * v)
      }
      if (!possibleProducts.length) {
        possibleProducts.push(v)
      }
      console.log(`row ${r} col ${c} val ${v}`)
      console.log('possible: ' + possibleProducts)

      const min = Math.min(...possibleProducts)
      const max = Math.max(...possibleProducts)

      dp[r][c] = [min, max]
    }
  }
  //console.log(grid)
  //console.log(dp)

  const max = dp[rows - 1][cols - 1]![1]
  return max >= 0 ? max : -1
}

// console.log(
//   maxProductPath([
//     [1, 4, 4, 0],
//     [-2, 0, 0, 1],
//     [1, -1, 1, 1],
//   ])
// )

console.log(
  'actual: ' +
    maxProductPath([
      [2, 1, 3, 0, -3, 3, -4, 4, 0, -4],
      [-4, -3, 2, 2, 3, -3, 1, -1, 1, -2],
      [-2, 0, -4, 2, 4, -3, -4, -1, 3, 4],
      [-1, 0, 1, 0, -3, 3, -2, -3, 1, 0],
      [0, -1, -2, 0, -3, -4, 0, 3, -2, -2],
      [-4, -2, 0, -1, 0, -3, 0, 4, 0, -3],
      [-3, -4, 2, 1, 0, -4, 2, -4, -1, -3],
      [3, -2, 0, -4, 1, 0, 1, -3, -1, -1],
      [3, -4, 0, 2, 0, -2, 2, -4, -2, 4],
      [0, 4, 0, -3, -4, 3, 3, -1, -2, -2],
    ])
)
console.log('expected 19215865')

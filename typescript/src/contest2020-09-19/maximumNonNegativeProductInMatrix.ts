const INT_OVERFLOW_MODULO_FIX = 1e9 + 7

function maxProductPath(grid: number[][]): number {
  const rowCount = grid.length
  const colCount = grid[0].length

  const startValue = grid[0][0]
  const dpMin: number[][] = [[startValue]]
  const dpMax: number[][] = [[startValue]]
  for (let row = 1; row < rowCount; row++) {
    const v = grid[row][0] * dpMin[row - 1][0]
    dpMin[row] = [v]
    dpMax[row] = [v]
  }
  for (let col = 1; col < colCount; col++) {
    const v = grid[0][col] * dpMin[0][col - 1]
    dpMin[0][col] = v
    dpMax[0][col] = v
  }

  for (let row = 1; row < rowCount; row++) {
    for (let col = 1; col < colCount; col++) {
      const v = grid[row][col]
      if (v === 0) {
        dpMin[row][col] = 0
        dpMax[row][col] = 0
        continue
      }

      const possibleProducts: number[] = [
        dpMin[row][col - 1] * v,
        dpMax[row][col - 1] * v,
        dpMin[row - 1][col] * v,
        dpMax[row - 1][col] * v,
      ]

      dpMin[row][col] = Math.min(...possibleProducts)
      dpMax[row][col] = Math.max(...possibleProducts)
    }
  }
  // console.log(grid)
  console.log(dpMin)
  console.log(dpMax)

  const max = dpMax[rowCount - 1][colCount - 1]!
  return max >= 0 ? max % INT_OVERFLOW_MODULO_FIX : -1
}

// console.log(
//   maxProductPath([
//     [-1, 3],
//     [0, -4],
//   ])
// )

console.log(
  '8=' +
    maxProductPath([
      [1, -2, 1],
      [1, -2, 1],
      [3, -4, 1],
    ])
)

// console.log(
//   'actual: ' +
//     maxProductPath([
//       [2, 1, 3, 0, -3, 3, -4, 4, 0, -4],
//       [-4, -3, 2, 2, 3, -3, 1, -1, 1, -2],
//       [-2, 0, -4, 2, 4, -3, -4, -1, 3, 4],
//       [-1, 0, 1, 0, -3, 3, -2, -3, 1, 0],
//       [0, -1, -2, 0, -3, -4, 0, 3, -2, -2],
//       [-4, -2, 0, -1, 0, -3, 0, 4, 0, -3],
//       [-3, -4, 2, 1, 0, -4, 2, -4, -1, -3],
//       [3, -2, 0, -4, 1, 0, 1, -3, -1, -1],
//       [3, -4, 0, 2, 0, -2, 2, -4, -2, 4],
//       [0, 4, 0, -3, -4, 3, 3, -1, -2, -2],
//     ])
// )
// console.log('expected 19215865')

// const x = 2
// const B = -2
// const C = -3
// const D = -4
// console.log(
//   'actual: ' +
//     maxProductPath([
//       [-1, x, 0, 0, 0],
//       [x, x, B, x, x],
//       [0, 0, 0, 0, x],
//       [D, 0, 0, 0, x],
//     ])
// )

function calculateMinimumHP(dungeon: number[][]) {
  const numRows = dungeon.length
  const numCols = dungeon[0].length

  const memo = dungeon.map(() => new Array<number | null>(numCols).fill(null))

  const getMinHealth = (row: number, col: number): number => {
    if (row >= numRows || col >= numCols) throw new Error()

    if (memo[row][col] !== null) return memo[row][col]!

    const minHealthToProceeds: number[] = []
    if (row + 1 < numRows) minHealthToProceeds.push(getMinHealth(row + 1, col))
    if (col + 1 < numCols) minHealthToProceeds.push(getMinHealth(row, col + 1))
    if (!minHealthToProceeds.length) minHealthToProceeds.push(1)

    const minHealthToProceed = Math.min(...minHealthToProceeds)

    const healthHere = dungeon[row][col]
    const minToSuriveHere = healthHere < 0 ? -healthHere + 1 : 1

    const minHealth = Math.max(minHealthToProceed - healthHere, minToSuriveHere)

    memo[row][col] = minHealth
    return minHealth
  }

  return getMinHealth(0, 0)!
}

console.log('5=' + calculateMinimumHP([[1, -5]]))
console.log('1=' + calculateMinimumHP([[2, -2]]))
console.log('1=' + calculateMinimumHP([[5]]))
console.log('16=' + calculateMinimumHP([[-5, -10, 5]]))
console.log(
  '7=' +
    calculateMinimumHP([
      [-2, -3, 3],
      [-5, -10, 1],
      [10, 30, -5],
    ])
)

export {}

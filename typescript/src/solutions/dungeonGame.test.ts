function calculateMinimumHP(dungeon: number[][]): number {
  const helper = (row: number, col: number): number => {
    // min health
    const delta = dungeon[row][col]

    let minHealth = delta < 0 ? Math.abs(delta + 1) : 1

    if (row > 0) {
      minHealth = Math.min(minHealth, helper(row - 1, col))
    }
    if (col > 0) {
      minHealth = Math.min(minHealth, helper(row, col - 1))
    }

    return minHealth
  }
  return helper(0, 0)
}

function DP__calculateMinimumHP(dungeon: number[][]): number {
  const dp = []

  for (let row = 0; row < dungeon.length; row++) {
    for (let col = 0; col < dungeon[0].length; col++) {}
  }

  //const helper = (row: number, col: number) => {}
  //return helper(0, 0)
}

describe(calculateMinimumHP, () => {
  it('passes basic stuff', () => {
    expect(calculateMinimumHP([[-5]])).toBe(6)
    expect(calculateMinimumHP([[5]])).toBe(1)
  })
  xit('passes tests', () => {
    const actual = calculateMinimumHP([[-5]])
    expect(actual).toBe(7)
  })
  xit('passes tests', () => {
    const actual = calculateMinimumHP([
      [-2, -3, 3],
      [-5, -10, 1],
      [10, 30, -5],
    ])
    expect(actual).toBe(7)
  })
})

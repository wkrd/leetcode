function orangesRotting(grid: number[][]): number {
  const totalFresh = grid.reduce(
    (acc, row) => acc + row.filter((cell) => cell === 1).length,
    0
  )

  let remaining = totalFresh

  const directions = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ]

  const rot = (time: number): number => {
    let rotCount = 0
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        const v = grid[i][j]

        if (v === 2 + time) {
          for (const [rowOffset, colOffset] of directions) {
            const row = grid[i + rowOffset]
            const cell = row && row[j + colOffset]
            if (cell === 1) {
              grid[i + rowOffset][j + colOffset] = v + 1
              rotCount++
              remaining--
            }
          }
        }
      }
    }
    console.log('after  ', grid)

    return rotCount
  }

  let time = 0
  while (true) {
    if (rot(time) === 0) {
      if (remaining === 0) {
        return time
      } else {
        return -1
      }
    }
    time++
  }
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
)

export {}

/*
 * backtrack algorithm template:
 *
 * backtrack:
 *   if solution:
 *     output
 *     return
 *
 *  for candidate in candidates:
 *    add(candidate)
 *    backtrack
 *    remove(candidate)
 */

type Dir = { offsetX: number; offsetY: number }
const dirs: Dir[] = [
  { offsetX: 1, offsetY: 0 },
  { offsetX: -1, offsetY: 0 },
  { offsetX: 0, offsetY: 1 },
  { offsetX: 0, offsetY: -1 },
]

enum Square {
  Obstacle = -1,
  Empty = 0,
  Start = 1,
  End = 2,
}

function uniquePathsIII(grid: number[][]): number {
  let solutionCount = 0

  const totalSquaresToVisit =
    2 +
    grid.reduce(
      (acc, row) =>
        acc + row.reduce((t, v) => (v === Square.Empty ? t + 1 : t), 0),
      0
    )
  console.log(totalSquaresToVisit)
  const visited = new Set<string>() // "y,x"

  const backtrack = (y: number, x: number) => {
    if (grid[y][x] === Square.End) {
      if (visited.size + 1 === totalSquaresToVisit) {
        solutionCount++
        return
      }
    }
    const key = `${y},${x}`
    visited.add(key)

    //console.log('bt: ', y + ',' + x)
    //console.log(visited.size + ' / ' + totalSquaresToVisit)

    for (let dir of dirs) {
      const nextY = y + dir.offsetY
      const nextX = x + dir.offsetX
      const row = grid[nextY]
      let dirValue = row && row[nextX]
      const nextKey = `${nextY},${nextX}`

      if (
        !visited.has(nextKey) &&
        (dirValue === Square.Empty || dirValue === Square.End)
      ) {
        backtrack(nextY, nextX)
      }
    }
    visited.delete(key)
  }

  const startY = grid.findIndex((row) =>
    row.find((col) => col === Square.Start)
  )
  const startX = grid[startY].findIndex((v) => v === Square.Start)
  backtrack(startY, startX)

  return solutionCount
}

console.log(
  '2=',
  uniquePathsIII([
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 2, -1],
  ])
)

// console.log(
//   '4=',
//   uniquePathsIII([
//     [1, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 2],
//   ])
// )

export {}
